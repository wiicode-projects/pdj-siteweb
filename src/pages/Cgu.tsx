import { useLanguage } from '../i18n/LanguageContext';
import { getCguDocuments, getCguLastUpdate } from '../i18n/legal';
import { LegalDocumentView } from '../components/legal/LegalDocumentView';
import { LegalPageLayout, useLegalFooterLinks } from '../components/legal/LegalPageLayout';

export default function Cgu() {
  const { lang } = useLanguage();
  const footerLinks = useLegalFooterLinks();
  const [cguDoc, cgvDoc] = getCguDocuments(lang);

  return (
    <LegalPageLayout lastUpdate={getCguLastUpdate(lang)} footerLinks={footerLinks}>
      <LegalDocumentView document={cguDoc} />
      <LegalDocumentView document={cgvDoc} />
    </LegalPageLayout>
  );
}
