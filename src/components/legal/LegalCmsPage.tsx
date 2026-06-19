import { useLanguage } from '../../i18n/LanguageContext';
import type { Lang } from '../../i18n/translations';
import type { LegalDocument } from '../../i18n/legal/types';
import { useWebsitePage } from '../../hooks/useWebsitePage';
import type { WebsitePageSlug } from '../../lib/websiteApi';
import { LegalDocumentView } from './LegalDocumentView';
import { LegalPageLayout, useLegalFooterLinks } from './LegalPageLayout';

type StaticPageContent = {
  document: LegalDocument;
  lastUpdate: string;
};

type LegalCmsPageContentProps = {
  documents: LegalDocument[];
  lastUpdate: string;
  loading: boolean;
};

export function LegalCmsPageContent({ documents, lastUpdate, loading }: LegalCmsPageContentProps) {
  const footerLinks = useLegalFooterLinks();

  if (loading) {
    return (
      <LegalPageLayout lastUpdate={lastUpdate} footerLinks={footerLinks}>
        <div className="flex justify-center py-16">
          <div className="h-10 w-10 rounded-full border-2 border-[#c1111e]/30 border-t-[#c1111e] animate-spin" />
        </div>
      </LegalPageLayout>
    );
  }

  return (
    <LegalPageLayout lastUpdate={lastUpdate} footerLinks={footerLinks}>
      {documents.map((document, index) => (
        <LegalDocumentView key={index} document={document} />
      ))}
    </LegalPageLayout>
  );
}

type LegalCmsPageProps = {
  slug: WebsitePageSlug;
  getStatic: (lang: Lang) => StaticPageContent;
};

/** Single legal page loaded from CMS API with static fallback. */
export function LegalCmsPage({ slug, getStatic }: LegalCmsPageProps) {
  const { lang } = useLanguage();
  const page = useWebsitePage(slug, getStatic);
  const staticContent = getStatic(lang);

  return (
    <LegalCmsPageContent
      loading={!page.loaded}
      lastUpdate={(page.loaded ? page.lastUpdate : null) ?? staticContent.lastUpdate}
      documents={[page.loaded && page.document ? page.document : staticContent.document]}
    />
  );
}
