import type { Lang } from '../translations';
import type { LegalUiStrings } from './types';

export const legalUi: Record<Lang, LegalUiStrings> = {
  fr: {
    backHome: "← Retour à l'accueil",
    lastUpdate: 'Dernière mise à jour',
    allRights: 'Tous droits réservés',
    tableOfContents: 'Sommaire',
    versionApplicable: 'Applicables à compter du',
  },
  en: {
    backHome: '← Back to home',
    lastUpdate: 'Last updated',
    allRights: 'All rights reserved',
    tableOfContents: 'Table of contents',
    versionApplicable: 'Effective from',
  },
  de: {
    backHome: '← Zurück zur Startseite',
    lastUpdate: 'Zuletzt aktualisiert',
    allRights: 'Alle Rechte vorbehalten',
    tableOfContents: 'Inhaltsverzeichnis',
    versionApplicable: 'Gültig ab',
  },
  it: {
    backHome: '← Torna alla home',
    lastUpdate: 'Ultimo aggiornamento',
    allRights: 'Tutti i diritti riservati',
    tableOfContents: 'Sommario',
    versionApplicable: 'In vigore dal',
  },
};
