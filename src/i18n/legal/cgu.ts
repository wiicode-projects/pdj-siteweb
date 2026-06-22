import type { Lang } from '../translations';
import type { LegalDocument } from './types';
import { cguDoc as cguFr, cgvDoc as cgvFr } from './cgu/fr';
import { cguDoc as cguEn, cgvDoc as cgvEn } from './cgu/en';
import { cguDoc as cguDe, cgvDoc as cgvDe } from './cgu/de';
import { cguDoc as cguIt, cgvDoc as cgvIt } from './cgu/it';

const cguDocuments: Record<Lang, LegalDocument[]> = {
  fr: [cguFr, cgvFr],
  en: [cguEn, cgvEn],
  de: [cguDe, cgvDe],
  it: [cguIt, cgvIt],
};

export function getCguDocuments(lang: Lang): LegalDocument[] {
  return cguDocuments[lang];
}

export function getCguDocument(lang: Lang): LegalDocument {
  return getCguDocuments(lang)[0];
}

export function getCgvDocument(lang: Lang): LegalDocument {
  return getCguDocuments(lang)[1];
}

const lastUpdates: Record<Lang, string> = {
  fr: 'Juin 2026',
  en: 'June 2026',
  de: 'Juni 2026',
  it: 'Giugno 2026',
};

export function getCguLastUpdate(lang: Lang): string {
  return lastUpdates[lang];
}
