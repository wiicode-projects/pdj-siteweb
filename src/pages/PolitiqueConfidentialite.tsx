import { getPrivacyDocument, getPrivacyLastUpdate } from '../i18n/legal';
import { LegalCmsPage } from '../components/legal/LegalCmsPage';

export default function PolitiqueConfidentialite() {
  return (
    <LegalCmsPage
      slug="privacy"
      getStatic={(lang) => ({
        document: getPrivacyDocument(lang),
        lastUpdate: getPrivacyLastUpdate(lang),
      })}
    />
  );
}
