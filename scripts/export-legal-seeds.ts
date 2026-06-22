/**
 * Exports website legal page content from static i18n files
 * into pdj-api JSON seed files. Run from Plat-du-jour:
 *   npx tsx scripts/export-legal-seeds.ts
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Lang } from '../src/i18n/translations';
import { getCguDocument, getCgvDocument, getCguLastUpdate } from '../src/i18n/legal/cgu';
import { getPrivacyDocument, getPrivacyLastUpdate } from '../src/i18n/legal/privacy';
import { getMentionsDocument, getMentionsLastUpdate } from '../src/i18n/legal/mentions';

const LOCALES: Lang[] = ['fr', 'en', 'de', 'it'];

type PageSeed = {
  slug: string;
  isPublished: boolean;
  translations: Record<
    Lang,
    {
      lastUpdate: string;
      document: unknown;
    }
  >;
};

const pages: Array<{
  slug: string;
  document: (lang: Lang) => unknown;
  lastUpdate: (lang: Lang) => string;
}> = [
  {
    slug: 'cgu',
    document: getCguDocument,
    lastUpdate: getCguLastUpdate,
  },
  {
    slug: 'cgv',
    document: getCgvDocument,
    lastUpdate: getCguLastUpdate,
  },
  {
    slug: 'privacy',
    document: getPrivacyDocument,
    lastUpdate: getPrivacyLastUpdate,
  },
  {
    slug: 'mentions',
    document: getMentionsDocument,
    lastUpdate: getMentionsLastUpdate,
  },
];

const seeds: PageSeed[] = pages.map(({ slug, document, lastUpdate }) => ({
  slug,
  isPublished: true,
  translations: LOCALES.reduce(
    (acc, lang) => {
      acc[lang] = {
        lastUpdate: lastUpdate(lang),
        document: document(lang),
      };
      return acc;
    },
    {} as PageSeed['translations'],
  ),
}));

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = join(scriptDir, '../../pdj-api/src/website/constants/legal-pages-seed');
mkdirSync(outDir, { recursive: true });

for (const seed of seeds) {
  const outPath = join(outDir, `${seed.slug}.json`);
  writeFileSync(outPath, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${outPath}`);
}

writeFileSync(join(outDir, 'index.json'), `${JSON.stringify(seeds.map((s) => s.slug), null, 2)}\n`, 'utf8');
console.log('Done.');
