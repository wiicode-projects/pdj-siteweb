import type { LegalBlock, LegalDocument, LegalSection } from '../i18n/legal/types';

function parseSections(raw: unknown): LegalSection[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((section) => {
    const s = section as LegalSection;
    return {
      title: typeof s?.title === 'string' ? s.title : '',
      blocks: Array.isArray(s?.blocks) ? (s.blocks as LegalBlock[]) : [],
    };
  });
}

/** Normalizes CMS/API JSON into a LegalDocument the renderer understands. */
export function parseLegalDocument(raw: unknown): LegalDocument | null {
  if (!raw || typeof raw !== 'object') return null;

  const doc = raw as LegalDocument;
  const title = doc.meta?.title?.trim();
  if (!title) return null;

  const sections = parseSections(doc.sections);
  if (sections.length === 0) return null;

  return {
    meta: {
      eyebrow: doc.meta.eyebrow ?? undefined,
      title,
      subtitle: doc.meta.subtitle ?? undefined,
      version: doc.meta.version ?? '',
      effectiveDate: doc.meta.effectiveDate ?? '',
      intro: doc.meta.intro ?? undefined,
      footerLine: doc.meta.footerLine ?? undefined,
    },
    toc: doc.toc
      ? {
          label: doc.toc.label ?? '',
          items: Array.isArray(doc.toc.items) ? doc.toc.items.filter(Boolean) : [],
        }
      : undefined,
    sections,
  };
}
