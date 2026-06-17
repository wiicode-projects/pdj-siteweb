import type { Lang } from '../translations';
import type { LegalDocument } from './types';
import { privacyDoc as privacyFr } from './privacy/fr';
import { privacyDoc as privacyEn } from './privacy/en';
import { privacyDoc as privacyDe } from './privacy/de';
import { privacyDoc as privacyIt } from './privacy/it';

const privacyDocuments: Record<Lang, LegalDocument> = {
  fr: privacyFr,
  en: privacyEn,
  de: privacyDe,
  it: privacyIt,
};

export function getPrivacyDocument(lang: Lang): LegalDocument {
  return privacyDocuments[lang];
}

export function getPrivacyLastUpdate(lang: Lang): string {
  return privacyDocuments[lang].meta.effectiveDate;
}
