import { useLanguage } from '../i18n/LanguageContext';
import { getPrivacyDocument, getPrivacyLastUpdate } from '../i18n/legal';
import { LegalDocumentView } from '../components/legal/LegalDocumentView';
import { LegalPageLayout, useLegalFooterLinks } from '../components/legal/LegalPageLayout';

export default function PolitiqueConfidentialite() {
  const { lang } = useLanguage();
  const footerLinks = useLegalFooterLinks();

  return (
    <LegalPageLayout lastUpdate={getPrivacyLastUpdate(lang)} footerLinks={footerLinks}>
      <LegalDocumentView document={getPrivacyDocument(lang)} />
    </LegalPageLayout>
  );
}
