export interface LegalDocumentMeta {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  version: string;
  effectiveDate: string;
  intro?: string;
  footerLine?: string;
}

export interface LegalToc {
  label: string;
  items: string[];
}

export type LegalBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'callout'; variant: 'warning' | 'info'; text: string }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'card'; title: string; text: string }
  | { kind: 'cards'; items: Array<{ title: string; text: string }> }
  | { kind: 'keyValue'; items: Array<{ label: string; value: string }> }
  | { kind: 'hr' };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  meta: LegalDocumentMeta;
  toc?: LegalToc;
  sections: LegalSection[];
}

export interface LegalUiStrings {
  backHome: string;
  lastUpdate: string;
  allRights: string;
  tableOfContents: string;
  versionApplicable: string;
}
