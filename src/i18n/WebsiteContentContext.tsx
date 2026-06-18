import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchWebsitePublic,
  resolveMediaUrl,
  type PublicFaqItem,
  type PublicTestimonial,
  type WebsitePublicData,
} from '../lib/websiteApi';
import { useLanguage } from './LanguageContext';

export type WebsiteContentState = WebsitePublicData & {
  loaded: boolean;
  showSection: boolean;
  resolveImage: (url: string | null | undefined) => string | null;
};

const defaultState: WebsiteContentState = {
  loaded: false,
  statsEnabled: false,
  testimonialsEnabled: false,
  faqEnabled: false,
  stats: [],
  testimonials: [],
  faqItems: [],
  showSection: false,
  resolveImage: resolveMediaUrl,
};

const WebsiteContentContext = createContext<WebsiteContentState>(defaultState);

export function WebsiteContentProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  const [state, setState] = useState<WebsiteContentState>(defaultState);

  useEffect(() => {
    let active = true;
    fetchWebsitePublic(lang).then((data) => {
      if (!active) return;
      setState({
        ...data,
        loaded: true,
        showSection: data.statsEnabled || data.testimonialsEnabled,
        resolveImage: resolveMediaUrl,
      });
    });
    return () => { active = false; };
  }, [lang]);

  return (
    <WebsiteContentContext.Provider value={state}>
      {children}
    </WebsiteContentContext.Provider>
  );
}

export function useWebsiteContent(): WebsiteContentState {
  return useContext(WebsiteContentContext);
}

export type { PublicTestimonial, PublicFaqItem };
