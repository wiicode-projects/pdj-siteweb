import { useLanguage } from '../i18n/LanguageContext';
import { getMentionsDocument, getMentionsLastUpdate } from '../i18n/legal';
import { LegalDocumentView } from '../components/legal/LegalDocumentView';
import { LegalPageLayout, useLegalFooterLinks } from '../components/legal/LegalPageLayout';

export default function MentionsLegales() {
  const { lang } = useLanguage();
  const footerLinks = useLegalFooterLinks();

  return (
    <LegalPageLayout lastUpdate={getMentionsLastUpdate(lang)} footerLinks={footerLinks}>
      <LegalDocumentView document={getMentionsDocument(lang)} />
    </LegalPageLayout>
  );
}
