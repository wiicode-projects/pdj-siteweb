import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchWebsitePage, type WebsitePageSlug } from '../lib/websiteApi';
import type { LegalDocument } from '../i18n/legal/types';
import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';

export type WebsitePageState = {
  loaded: boolean;
  document: LegalDocument | null;
  lastUpdate: string | null;
  /** True when content comes from the CMS API (published). */
  fromApi: boolean;
};

export function useWebsitePage(
  slug: WebsitePageSlug,
  fallback: (lang: Lang) => { document: LegalDocument; lastUpdate: string },
): WebsitePageState {
  const { lang } = useLanguage();
  const fallbackRef = useRef(fallback);
  fallbackRef.current = fallback;

  const [state, setState] = useState<WebsitePageState>({
    loaded: false,
    document: null,
    lastUpdate: null,
    fromApi: false,
  });

  const load = useCallback(async (activeLang: Lang) => {
    setState((prev) => ({ ...prev, loaded: false }));

    const result = await fetchWebsitePage(slug, activeLang);

    if (result.source === 'cms') {
      setState({
        loaded: true,
        document: result.page.document,
        lastUpdate: result.page.lastUpdate,
        fromApi: true,
      });
      return;
    }

    const fb = fallbackRef.current(activeLang);
    setState({
      loaded: true,
      document: fb.document,
      lastUpdate: fb.lastUpdate,
      fromApi: false,
    });
  }, [slug]);

  useEffect(() => {
    void load(lang);
  }, [lang, load]);

  useEffect(() => {
    const onFocus = () => { void load(lang); };
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, [lang, load]);

  return state;
}
