import { useLanguage } from '../i18n/LanguageContext';
import { getCguDocuments, getCguLastUpdate } from '../i18n/legal';
import { LegalCmsPageContent } from '../components/legal/LegalCmsPage';
import { useWebsitePage } from '../hooks/useWebsitePage';

export default function Cgu() {
  const { lang } = useLanguage();

  const cgu = useWebsitePage('cgu', (l) => ({
    document: getCguDocuments(l)[0],
    lastUpdate: getCguLastUpdate(l),
  }));
  const cgv = useWebsitePage('cgv', (l) => ({
    document: getCguDocuments(l)[1],
    lastUpdate: getCguLastUpdate(l),
  }));

  const staticDocs = getCguDocuments(lang);
  const lastUpdate = cgu.lastUpdate ?? cgv.lastUpdate ?? getCguLastUpdate(lang);

  return (
    <LegalCmsPageContent
      loading={!cgu.loaded || !cgv.loaded}
      lastUpdate={lastUpdate}
      documents={[
        cgu.document ?? staticDocs[0],
        cgv.document ?? staticDocs[1],
      ]}
    />
  );
}
