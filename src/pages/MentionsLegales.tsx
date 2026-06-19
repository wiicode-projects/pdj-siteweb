import { getMentionsDocument, getMentionsLastUpdate } from '../i18n/legal';
import { LegalCmsPage } from '../components/legal/LegalCmsPage';

export default function MentionsLegales() {
  return (
    <LegalCmsPage
      slug="mentions"
      getStatic={(lang) => ({
        document: getMentionsDocument(lang),
        lastUpdate: getMentionsLastUpdate(lang),
      })}
    />
  );
}
