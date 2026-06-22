import { getCgvDocument, getCguLastUpdate } from '../i18n/legal';
import { LegalCmsPage } from '../components/legal/LegalCmsPage';

export default function Cgv() {
  return (
    <LegalCmsPage
      slug="cgv"
      getStatic={(lang) => ({
        document: getCgvDocument(lang),
        lastUpdate: getCguLastUpdate(lang),
      })}
    />
  );
}
