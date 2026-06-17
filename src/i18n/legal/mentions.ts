import type { Lang } from '../translations';
import type { LegalDocument } from './types';

const mentionsDocuments: Record<Lang, LegalDocument> = {
  fr: {
    meta: {
      title: 'Mentions Légales',
      version: '',
      effectiveDate: 'Juin 2026',
      intro:
        "Conformément aux obligations légales en vigueur en Suisse (Code des obligations, nLPD) et aux directives européennes applicables, vous trouverez ci-dessous toutes les informations légales relatives à l'éditeur du service [strong:Plat du Jour].",
    },
    sections: [
      {
        title: '1. Éditeur du service',
        blocks: [
          {
            kind: 'keyValue',
            items: [
              { label: 'Raison sociale :', value: 'D.G.E. Concept SàRL' },
              { label: 'Forme juridique :', value: 'SàRL' },
              { label: 'Capital social :', value: "20'000 CHF" },
              { label: "Numéro d'immatriculation :", value: 'CHE-456.471.738' },
              { label: 'Siège social :', value: '1273 Arzier-Le Muids, Suisse' },
              { label: 'Numéro TVA :', value: "Non assujetti — seuil de chiffre d'affaires non atteint" },
              { label: 'Directeur de la publication :', value: 'Gwenaël Eude, Président' },
              { label: 'Téléphone :', value: '[tel:+41799607371|+41 79 960 73 71]' },
              { label: 'E-mail de contact :', value: '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]' },
            ],
          },
        ],
      },
      {
        title: '2. Hébergement',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Hébergeur (Suisse)',
                text: '[strong:Infomaniak Network SA]\nRue Eugène-Marziano 25\n1227 Les Acacias (GE), Suisse\nIDE : CHE-103.167.648\n[link:https://www.infomaniak.com|infomaniak.com]\n\nLe site web, l\'application et les données associées sont hébergés en Suisse par Infomaniak.',
              },
              {
                title: 'Prestataire de paiement',
                text: 'MyPos / TWINT / PayPal',
              },
            ],
          },
        ],
      },
      {
        title: '3. Propriété intellectuelle',
        blocks: [
          {
            kind: 'p',
            text: "L'ensemble des contenus présents sur ce site et dans l'application — textes, articles, photographies, illustrations, logos, marques, slogans, vidéos, animations, code source, architecture de la base de données et charte graphique — sont la propriété exclusive de l'éditeur ou font l'objet de licences accordées à l'éditeur par leurs auteurs respectifs.",
          },
          {
            kind: 'p',
            text: "Ces éléments sont protégés par les lois sur la propriété intellectuelle et le droit d'auteur applicables dans le pays d'établissement de l'éditeur, ainsi que par les conventions internationales (Convention de Berne, Accord ADPIC/TRIPS). Toute reproduction, représentation, modification, publication, adaptation ou exploitation commerciale, même partielle, de ces éléments, quel qu'en soit le procédé (copie, scraping, ingénierie inverse, etc.), est strictement interdite sans l'autorisation écrite préalable de l'éditeur.",
          },
          {
            kind: 'p',
            text: "Toute violation de ces droits pourra faire l'objet de poursuites civiles et/ou pénales conformément à la législation applicable.",
          },
        ],
      },
      {
        title: '4. Marques',
        blocks: [
          {
            kind: 'p',
            text: "« Plat du Jour », le logo et la mascotte associés sont des marques ou des éléments distinctifs de l'éditeur. Toute utilisation non autorisée de ces éléments constitue une contrefaçon de marque susceptible d'engager la responsabilité civile et pénale de son auteur. L'éditeur se réserve le droit de déposer ces marques auprès des offices compétents (IGE en Suisse, INPI en France, EUIPO en Europe).",
          },
        ],
      },
      {
        title: '5. Protection des données personnelles',
        blocks: [
          {
            kind: 'p',
            text: "Le traitement des données personnelles collectées via le Service est encadré par notre [route:/politique-de-confidentialite|Politique de Confidentialité], conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et, si applicable, à la Loi fédérale sur la Protection des Données (nLPD, en vigueur depuis le 1er septembre 2023 en Suisse).",
          },
          {
            kind: 'p',
            text: "Pour toute demande relative à vos données personnelles (accès, rectification, suppression, portabilité), contactez-nous à : [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch].",
          },
        ],
      },
      {
        title: '6. Cookies',
        blocks: [
          {
            kind: 'p',
            text: "Ce site et cette application utilisent des cookies et technologies de stockage local (localStorage). Certains sont strictement nécessaires au fonctionnement du Service (maintien de session, préférences de langue) et ne nécessitent pas votre consentement. D'autres, à vocation analytique ou personnalisatrice, sont déposés uniquement avec votre accord préalable, conformément à la réglementation applicable (art. 82 de la loi Informatique et Libertés en France, art. 45c LTC en Suisse).",
          },
          {
            kind: 'p',
            text: "Vous pouvez gérer vos préférences en matière de cookies depuis les paramètres de confidentialité de l'application ou depuis les réglages de votre navigateur. Pour en savoir plus sur les cookies utilisés, consultez notre [route:/politique-de-confidentialite|Politique de Confidentialité] (section 8).",
          },
        ],
      },
      {
        title: '7. Liens hypertextes',
        blocks: [
          {
            kind: 'p',
            text: "[strong:Liens sortants :] Ce Service peut contenir des liens hypertextes vers des sites tiers (plateformes de réseaux sociaux, App Store, Google Play, sites de restaurants partenaires). L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de confidentialité. L'accès à ces sites tiers se fait aux risques et périls de l'utilisateur.",
          },
          {
            kind: 'p',
            text: "[strong:Liens entrants :] Tout site souhaitant établir un lien hypertexte vers le Service doit obtenir l'autorisation préalable et écrite de l'éditeur. Cette autorisation ne peut être accordée pour des sites diffusant des contenus illicites, offensants ou contraires à l'éthique. L'éditeur se réserve le droit de demander la suppression de tout lien non autorisé.",
          },
        ],
      },
      {
        title: '8. Limitation de responsabilité',
        blocks: [
          {
            kind: 'p',
            text: "Les informations présentes sur ce Service sont fournies à titre informatif et ne constituent en aucun cas un conseil professionnel (juridique, médical, nutritionnel, etc.). L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des contenus publiés, mais ne peut garantir leur exhaustivité, leur exactitude ou leur adéquation à une situation particulière.",
          },
          {
            kind: 'p',
            text: "L'éditeur décline toute responsabilité en cas de :",
          },
          {
            kind: 'ul',
            items: [
              "Inexactitude ou obsolescence des informations publiées par les restaurants partenaires.",
              "Dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le Service.",
              'Interruption temporaire du Service pour maintenance ou mise à jour.',
              "Intrusion malveillante d'un tiers malgré les mesures de sécurité mises en place.",
              "Dommages résultant de l'utilisation de sites tiers accessibles via des liens présents sur le Service.",
            ],
          },
        ],
      },
      {
        title: '9. Médiation et règlement des litiges',
        blocks: [
          {
            kind: 'p',
            text: "En cas de litige avec l'éditeur, l'utilisateur est invité à contacter en premier lieu le service client à [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch] afin de rechercher une solution amiable.",
          },
          {
            kind: 'p',
            text: "À défaut de résolution amiable dans un délai de 30 jours, les utilisateurs résidant dans l'Union Européenne peuvent recourir à la plateforme européenne de règlement en ligne des litiges (RLL) de la Commission Européenne, accessible à [link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr].",
          },
        ],
      },
      {
        title: '10. Droit applicable et juridiction compétente',
        blocks: [
          {
            kind: 'p',
            text: "Les présentes mentions légales et l'ensemble des relations entre l'éditeur et les utilisateurs du Service sont soumises au droit suisse, notamment le Code des obligations (CO) et la Loi sur la protection des données (nLPD). En cas de litige non résolu à l'amiable, les tribunaux compétents du Tribunal d'arrondissement de La Côte (Nyon, canton de Vaud, Suisse) seront exclusivement saisis, sauf disposition légale impérative contraire applicable au consommateur dans son pays de résidence.",
          },
        ],
      },
      {
        title: '11. Accessibilité numérique',
        blocks: [
          {
            kind: 'p',
            text: "L'éditeur s'engage à améliorer progressivement l'accessibilité de son Service pour les personnes en situation de handicap, conformément aux recommandations WCAG 2.1 (niveau AA). Si vous rencontrez des difficultés d'accessibilité, contactez-nous à [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch] afin que nous puissions vous apporter une assistance adaptée ou améliorer le Service.",
          },
        ],
      },
      {
        title: '12. Crédits',
        blocks: [
          {
            kind: 'p',
            text: '[strong:Conception et développement :] [link:https://wiicode.org|Wiicode]',
          },
          {
            kind: 'p',
            text: "[strong:Icônes :] Lucide React (licence ISC), logos Apple et Google (propriétés de leurs détenteurs respectifs, utilisés conformément à leurs guidelines de marque).",
          },
        ],
      },
    ],
  },

  en: {
    meta: {
      title: 'Legal Notice',
      version: '',
      effectiveDate: 'June 2026',
      intro:
        'In accordance with the legal obligations in force in Switzerland (Code of Obligations, nFADP) and applicable European directives, you will find below all legal information relating to the publisher of the [strong:Plat du Jour] service.',
    },
    sections: [
      {
        title: '1. Service publisher',
        blocks: [
          {
            kind: 'keyValue',
            items: [
              { label: 'Company name:', value: 'D.G.E. Concept SàRL' },
              { label: 'Legal form:', value: 'SàRL (limited liability company)' },
              { label: 'Share capital:', value: "CHF 20'000" },
              { label: 'Registration number:', value: 'CHE-456.471.738' },
              { label: 'Registered office:', value: '1273 Arzier-Le Muids, Switzerland' },
              { label: 'VAT number:', value: 'Not registered — turnover threshold not reached' },
              { label: 'Publication director:', value: 'Gwenaël Eude, President' },
              { label: 'Phone:', value: '[tel:+41799607371|+41 79 960 73 71]' },
              { label: 'Contact email:', value: '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]' },
            ],
          },
        ],
      },
      {
        title: '2. Hosting',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Host (Switzerland)',
                text: '[strong:Infomaniak Network SA]\nEugène-Marziano Street 25\n1227 Les Acacias (GE), Switzerland\nUID: CHE-103.167.648\n[link:https://www.infomaniak.com|infomaniak.com]\n\nThe website, application and associated data are hosted in Switzerland by Infomaniak.',
              },
              {
                title: 'Payment provider',
                text: 'MyPos / TWINT / PayPal',
              },
            ],
          },
        ],
      },
      {
        title: '3. Intellectual property',
        blocks: [
          {
            kind: 'p',
            text: 'All content on this website and in the application — texts, articles, photographs, illustrations, logos, trademarks, slogans, videos, animations, source code, database architecture and graphic charter — is the exclusive property of the publisher or is subject to licences granted to the publisher by their respective authors.',
          },
          {
            kind: 'p',
            text: 'These elements are protected by intellectual property and copyright laws applicable in the publisher\'s country of establishment, as well as by international conventions (Berne Convention, TRIPS Agreement). Any reproduction, representation, modification, publication, adaptation or commercial exploitation, even partial, of these elements, by any means (copying, scraping, reverse engineering, etc.), is strictly prohibited without the prior written authorisation of the publisher.',
          },
          {
            kind: 'p',
            text: 'Any violation of these rights may result in civil and/or criminal proceedings in accordance with applicable legislation.',
          },
        ],
      },
      {
        title: '4. Trademarks',
        blocks: [
          {
            kind: 'p',
            text: '"Plat du Jour", the logo and associated mascot are trademarks or distinctive elements of the publisher. Any unauthorised use of these elements constitutes trademark infringement that may give rise to civil and criminal liability. The publisher reserves the right to register these trademarks with the competent offices (IGE in Switzerland, INPI in France, EUIPO in Europe).',
          },
        ],
      },
      {
        title: '5. Personal data protection',
        blocks: [
          {
            kind: 'p',
            text: 'The processing of personal data collected via the Service is governed by our [route:/politique-de-confidentialite|Privacy Policy], compliant with the General Data Protection Regulation (GDPR – EU 2016/679) and, where applicable, the Swiss Federal Act on Data Protection (nFADP, in force since 1 September 2023 in Switzerland).',
          },
          {
            kind: 'p',
            text: 'For any request relating to your personal data (access, rectification, deletion, portability), contact us at: [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch].',
          },
        ],
      },
      {
        title: '6. Cookies',
        blocks: [
          {
            kind: 'p',
            text: 'This website and application use cookies and local storage technologies (localStorage). Some are strictly necessary for the operation of the Service (session maintenance, language preferences) and do not require your consent. Others, for analytical or personalisation purposes, are placed only with your prior consent, in accordance with applicable regulations (Art. 82 of the French Data Protection Act, Art. 45c FADPA in Switzerland).',
          },
          {
            kind: 'p',
            text: 'You can manage your cookie preferences from the application privacy settings or from your browser settings. To learn more about the cookies used, see our [route:/politique-de-confidentialite|Privacy Policy] (section 8).',
          },
        ],
      },
      {
        title: '7. Hyperlinks',
        blocks: [
          {
            kind: 'p',
            text: '[strong:Outgoing links:] This Service may contain hyperlinks to third-party websites (social media platforms, App Store, Google Play, partner restaurant websites). The publisher has no control over these sites and disclaims all liability for their content, availability or privacy practices. Access to these third-party sites is at the user\'s own risk.',
          },
          {
            kind: 'p',
            text: '[strong:Incoming links:] Any website wishing to establish a hyperlink to the Service must obtain the prior written authorisation of the publisher. Such authorisation may not be granted for sites disseminating unlawful, offensive or unethical content. The publisher reserves the right to request the removal of any unauthorised link.',
          },
        ],
      },
      {
        title: '8. Limitation of liability',
        blocks: [
          {
            kind: 'p',
            text: 'The information on this Service is provided for informational purposes only and does not constitute professional advice (legal, medical, nutritional, etc.). The publisher endeavours to ensure the accuracy and updating of published content but cannot guarantee its completeness, accuracy or suitability for a particular situation.',
          },
          {
            kind: 'p',
            text: 'The publisher disclaims all liability in the event of:',
          },
          {
            kind: 'ul',
            items: [
              'Inaccuracy or obsolescence of information published by partner restaurants.',
              'Direct or indirect damage resulting from the use or inability to use the Service.',
              'Temporary interruption of the Service for maintenance or updates.',
              'Malicious intrusion by a third party despite security measures in place.',
              'Damage resulting from the use of third-party sites accessible via links on the Service.',
            ],
          },
        ],
      },
      {
        title: '9. Mediation and dispute resolution',
        blocks: [
          {
            kind: 'p',
            text: 'In the event of a dispute with the publisher, the user is invited to contact customer service first at [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch] to seek an amicable solution.',
          },
          {
            kind: 'p',
            text: 'Failing an amicable resolution within 30 days, users residing in the European Union may use the European Commission\'s Online Dispute Resolution (ODR) platform, accessible at [link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr].',
          },
        ],
      },
      {
        title: '10. Applicable law and jurisdiction',
        blocks: [
          {
            kind: 'p',
            text: 'These legal notices and all relations between the publisher and users of the Service are subject to Swiss law, in particular the Code of Obligations (CO) and the Data Protection Act (nFADP). In the event of a dispute not resolved amicably, the competent courts of the District Court of La Côte (Nyon, canton of Vaud, Switzerland) shall have exclusive jurisdiction, unless mandatory legal provisions to the contrary applicable to the consumer in their country of residence apply.',
          },
        ],
      },
      {
        title: '11. Digital accessibility',
        blocks: [
          {
            kind: 'p',
            text: 'The publisher is committed to progressively improving the accessibility of its Service for people with disabilities, in accordance with WCAG 2.1 recommendations (level AA). If you encounter accessibility difficulties, contact us at [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch] so that we can provide appropriate assistance or improve the Service.',
          },
        ],
      },
      {
        title: '12. Credits',
        blocks: [
          {
            kind: 'p',
            text: '[strong:Design and development:] [link:https://wiicode.org|Wiicode]',
          },
          {
            kind: 'p',
            text: '[strong:Icons:] Lucide React (ISC licence), Apple and Google logos (property of their respective owners, used in accordance with their brand guidelines).',
          },
        ],
      },
    ],
  },

  de: {
    meta: {
      title: 'Impressum',
      version: '',
      effectiveDate: 'Juni 2026',
      intro:
        'Gemäss den in der Schweiz geltenden gesetzlichen Verpflichtungen (Obligationenrecht, nDSG) und den anwendbaren europäischen Richtlinien finden Sie nachstehend alle rechtlichen Informationen zum Herausgeber des Dienstes [strong:Plat du Jour].',
    },
    sections: [
      {
        title: '1. Herausgeber des Dienstes',
        blocks: [
          {
            kind: 'keyValue',
            items: [
              { label: 'Firmenname:', value: 'D.G.E. Concept SàRL' },
              { label: 'Rechtsform:', value: 'SàRL (Gesellschaft mit beschränkter Haftung)' },
              { label: 'Stammkapital:', value: "CHF 20'000" },
              { label: 'Handelsregisternummer:', value: 'CHE-456.471.738' },
              { label: 'Sitz:', value: '1273 Arzier-Le Muids, Schweiz' },
              { label: 'MWST-Nummer:', value: 'Nicht registriert — Umsatzschwelle nicht erreicht' },
              { label: 'Verantwortlicher für die Publikation:', value: 'Gwenaël Eude, Präsident' },
              { label: 'Telefon:', value: '[tel:+41799607371|+41 79 960 73 71]' },
              { label: 'Kontakt-E-Mail:', value: '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]' },
            ],
          },
        ],
      },
      {
        title: '2. Hosting',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Host (Schweiz)',
                text: '[strong:Infomaniak Network SA]\nRue Eugène-Marziano 25\n1227 Les Acacias (GE), Schweiz\nUID: CHE-103.167.648\n[link:https://www.infomaniak.com|infomaniak.com]\n\nDie Website, die Anwendung und die zugehörigen Daten werden in der Schweiz von Infomaniak gehostet.',
              },
              {
                title: 'Zahlungsdienstleister',
                text: 'MyPos / TWINT / PayPal',
              },
            ],
          },
        ],
      },
      {
        title: '3. Geistiges Eigentum',
        blocks: [
          {
            kind: 'p',
            text: 'Sämtliche Inhalte dieser Website und Anwendung — Texte, Artikel, Fotografien, Illustrationen, Logos, Marken, Slogans, Videos, Animationen, Quellcode, Datenbankarchitektur und grafisches Erscheinungsbild — sind ausschliessliches Eigentum des Herausgebers oder unterliegen Lizenzen, die dem Herausgeber von den jeweiligen Autoren gewährt wurden.',
          },
          {
            kind: 'p',
            text: 'Diese Elemente sind durch die im Land des Herausgebers geltenden Gesetze zum geistigen Eigentum und Urheberrecht sowie durch internationale Übereinkommen (Berner Übereinkunft, TRIPS-Abkommen) geschützt. Jede Vervielfältigung, Darstellung, Änderung, Veröffentlichung, Anpassung oder kommerzielle Nutzung, auch teilweise, dieser Elemente, unabhängig vom Verfahren (Kopie, Scraping, Reverse Engineering usw.), ist ohne vorherige schriftliche Genehmigung des Herausgebers strengstens untersagt.',
          },
          {
            kind: 'p',
            text: 'Jede Verletzung dieser Rechte kann gemäss geltendem Recht zivil- und/oder strafrechtliche Schritte nach sich ziehen.',
          },
        ],
      },
      {
        title: '4. Marken',
        blocks: [
          {
            kind: 'p',
            text: '« Plat du Jour », das Logo und das zugehörige Maskottchen sind Marken oder Unterscheidungsmerkmale des Herausgebers. Jede unbefugte Nutzung dieser Elemente stellt eine Markenrechtsverletzung dar, die zivil- und strafrechtliche Haftung begründen kann. Der Herausgeber behält sich das Recht vor, diese Marken bei den zuständigen Ämtern (IGE in der Schweiz, INPI in Frankreich, EUIPO in Europa) anzumelden.',
          },
        ],
      },
      {
        title: '5. Schutz personenbezogener Daten',
        blocks: [
          {
            kind: 'p',
            text: 'Die Verarbeitung personenbezogener Daten, die über den Dienst erhoben werden, wird durch unsere [route:/politique-de-confidentialite|Datenschutzerklärung] geregelt, die der Datenschutz-Grundverordnung (DSGVO – EU 2016/679) und, sofern anwendbar, dem Bundesgesetz über den Datenschutz (nDSG, in Kraft seit 1. September 2023 in der Schweiz) entspricht.',
          },
          {
            kind: 'p',
            text: 'Für Anfragen zu Ihren personenbezogenen Daten (Auskunft, Berichtigung, Löschung, Übertragbarkeit) kontaktieren Sie uns unter: [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch].',
          },
        ],
      },
      {
        title: '6. Cookies',
        blocks: [
          {
            kind: 'p',
            text: 'Diese Website und Anwendung verwenden Cookies und lokale Speichertechnologien (localStorage). Einige sind für den Betrieb des Dienstes unbedingt erforderlich (Sitzungsverwaltung, Spracheinstellungen) und erfordern keine Einwilligung. Andere, zu Analyse- oder Personalisierungszwecken, werden nur mit Ihrer vorherigen Zustimmung gesetzt, gemäss den geltenden Vorschriften (Art. 82 des französischen Datenschutzgesetzes, Art. 45c DSG in der Schweiz).',
          },
          {
            kind: 'p',
            text: 'Sie können Ihre Cookie-Einstellungen in den Datenschutzeinstellungen der Anwendung oder in Ihrem Browser verwalten. Weitere Informationen zu den verwendeten Cookies finden Sie in unserer [route:/politique-de-confidentialite|Datenschutzerklärung] (Abschnitt 8).',
          },
        ],
      },
      {
        title: '7. Hyperlinks',
        blocks: [
          {
            kind: 'p',
            text: '[strong:Ausgehende Links:] Dieser Dienst kann Hyperlinks zu Websites Dritter enthalten (Social-Media-Plattformen, App Store, Google Play, Websites von Partnerrestaurants). Der Herausgeber hat keine Kontrolle über diese Websites und lehnt jede Haftung für deren Inhalt, Verfügbarkeit oder Datenschutzpraktiken ab. Der Zugriff auf diese Websites Dritter erfolgt auf eigenes Risiko des Nutzers.',
          },
          {
            kind: 'p',
            text: '[strong:Eingehende Links:] Jede Website, die einen Hyperlink zu diesem Dienst setzen möchte, muss die vorherige schriftliche Genehmigung des Herausgebers einholen. Eine solche Genehmigung darf nicht für Websites erteilt werden, die rechtswidrige, anstössige oder unethische Inhalte verbreiten. Der Herausgeber behält sich das Recht vor, die Entfernung jedes unbefugten Links zu verlangen.',
          },
        ],
      },
      {
        title: '8. Haftungsbeschränkung',
        blocks: [
          {
            kind: 'p',
            text: 'Die auf diesem Dienst bereitgestellten Informationen dienen ausschliesslich Informationszwecken und stellen in keinem Fall eine professionelle Beratung dar (rechtlich, medizinisch, ernährungsbezogen usw.). Der Herausgeber bemüht sich, die Richtigkeit und Aktualität der veröffentlichten Inhalte sicherzustellen, kann jedoch deren Vollständigkeit, Richtigkeit oder Eignung für eine bestimmte Situation nicht garantieren.',
          },
          {
            kind: 'p',
            text: 'Der Herausgeber lehnt jede Haftung ab im Falle von:',
          },
          {
            kind: 'ul',
            items: [
              'Ungenauigkeit oder Veraltung von Informationen, die von Partnerrestaurants veröffentlicht werden.',
              'Direkten oder indirekten Schäden infolge der Nutzung oder Unmöglichkeit der Nutzung des Dienstes.',
              'Vorübergehender Unterbrechung des Dienstes für Wartung oder Updates.',
              'Bösartigem Eindringen eines Dritten trotz implementierter Sicherheitsmassnahmen.',
              'Schäden infolge der Nutzung von Websites Dritter, die über Links auf dem Dienst zugänglich sind.',
            ],
          },
        ],
      },
      {
        title: '9. Mediation und Streitbeilegung',
        blocks: [
          {
            kind: 'p',
            text: 'Im Falle eines Streits mit dem Herausgeber wird der Nutzer eingeladen, zunächst den Kundendienst unter [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch] zu kontaktieren, um eine gütliche Lösung zu suchen.',
          },
          {
            kind: 'p',
            text: 'Erfolgt innerhalb von 30 Tagen keine gütliche Einigung, können Nutzer mit Wohnsitz in der Europäischen Union die Online-Streitbeilegungsplattform (OS) der Europäischen Kommission nutzen, erreichbar unter [link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr].',
          },
        ],
      },
      {
        title: '10. Anwendbares Recht und Gerichtsstand',
        blocks: [
          {
            kind: 'p',
            text: 'Dieses Impressum und sämtliche Beziehungen zwischen dem Herausgeber und den Nutzern des Dienstes unterliegen schweizerischem Recht, insbesondere dem Obligationenrecht (OR) und dem Datenschutzgesetz (nDSG). Bei Streitigkeiten, die nicht gütlich beigelegt werden, sind ausschliesslich die zuständigen Gerichte des Bezirksgerichts La Côte (Nyon, Kanton Waadt, Schweiz) zuständig, sofern keine zwingenden gesetzlichen Bestimmungen zum Schutz des Verbrauchers in seinem Wohnsitzland entgegenstehen.',
          },
        ],
      },
      {
        title: '11. Digitale Barrierefreiheit',
        blocks: [
          {
            kind: 'p',
            text: 'Der Herausgeber verpflichtet sich, die Barrierefreiheit seines Dienstes für Menschen mit Behinderungen schrittweise zu verbessern, gemäss den WCAG-2.1-Empfehlungen (Stufe AA). Wenn Sie Schwierigkeiten mit der Barrierefreiheit haben, kontaktieren Sie uns unter [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch], damit wir Ihnen angemessene Unterstützung bieten oder den Dienst verbessern können.',
          },
        ],
      },
      {
        title: '12. Credits',
        blocks: [
          {
            kind: 'p',
            text: '[strong:Konzeption und Entwicklung:] [link:https://wiicode.org|Wiicode]',
          },
          {
            kind: 'p',
            text: '[strong:Icons:] Lucide React (ISC-Lizenz), Apple- und Google-Logos (Eigentum der jeweiligen Rechteinhaber, verwendet gemäss deren Markenrichtlinien).',
          },
        ],
      },
    ],
  },

  it: {
    meta: {
      title: 'Note legali',
      version: '',
      effectiveDate: 'Giugno 2026',
      intro:
        "Conformemente agli obblighi legali vigenti in Svizzera (Codice delle obbligazioni, nLPD) e alle direttive europee applicabili, di seguito troverete tutte le informazioni legali relative all'editore del servizio [strong:Plat du Jour].",
    },
    sections: [
      {
        title: '1. Editore del servizio',
        blocks: [
          {
            kind: 'keyValue',
            items: [
              { label: 'Ragione sociale:', value: 'D.G.E. Concept SàRL' },
              { label: 'Forma giuridica:', value: 'SàRL (società a responsabilità limitata)' },
              { label: 'Capitale sociale:', value: "CHF 20'000" },
              { label: 'Numero di registrazione:', value: 'CHE-456.471.738' },
              { label: 'Sede legale:', value: '1273 Arzier-Le Muids, Svizzera' },
              { label: 'Numero IVA:', value: 'Non registrato — soglia di fatturato non raggiunta' },
              { label: 'Direttore della pubblicazione:', value: 'Gwenaël Eude, Presidente' },
              { label: 'Telefono:', value: '[tel:+41799607371|+41 79 960 73 71]' },
              { label: 'E-mail di contatto:', value: '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]' },
            ],
          },
        ],
      },
      {
        title: '2. Hosting',
        blocks: [
          {
            kind: 'cards',
            items: [
              {
                title: 'Host (Svizzera)',
                text: '[strong:Infomaniak Network SA]\nRue Eugène-Marziano 25\n1227 Les Acacias (GE), Svizzera\nIDE: CHE-103.167.648\n[link:https://www.infomaniak.com|infomaniak.com]\n\nIl sito web, l\'applicazione e i dati associati sono ospitati in Svizzera da Infomaniak.',
              },
              {
                title: 'Fornitore di pagamento',
                text: 'MyPos / TWINT / PayPal',
              },
            ],
          },
        ],
      },
      {
        title: '3. Proprietà intellettuale',
        blocks: [
          {
            kind: 'p',
            text: "L'insieme dei contenuti presenti su questo sito e nell'applicazione — testi, articoli, fotografie, illustrazioni, loghi, marchi, slogan, video, animazioni, codice sorgente, architettura del database e identità visiva — è di proprietà esclusiva dell'editore o è oggetto di licenze concesse all'editore dai rispettivi autori.",
          },
          {
            kind: 'p',
            text: "Tali elementi sono protetti dalle leggi sulla proprietà intellettuale e sul diritto d'autore applicabili nel paese di stabilimento dell'editore, nonché dalle convenzioni internazionali (Convenzione di Berna, Accordo TRIPS). Qualsiasi riproduzione, rappresentazione, modifica, pubblicazione, adattamento o sfruttamento commerciale, anche parziale, di tali elementi, con qualsiasi procedimento (copia, scraping, reverse engineering, ecc.), è severamente vietata senza l'autorizzazione scritta preventiva dell'editore.",
          },
          {
            kind: 'p',
            text: 'Qualsiasi violazione di tali diritti potrà dar luogo a procedimenti civili e/o penali conformemente alla legislazione applicabile.',
          },
        ],
      },
      {
        title: '4. Marchi',
        blocks: [
          {
            kind: 'p',
            text: "« Plat du Jour », il logo e la mascotte associata sono marchi o elementi distintivi dell'editore. Qualsiasi utilizzo non autorizzato di tali elementi costituisce contraffazione di marchio suscettibile di comportare responsabilità civile e penale. L'editore si riserva il diritto di registrare tali marchi presso gli uffici competenti (IGE in Svizzera, INPI in Francia, EUIPO in Europa).",
          },
        ],
      },
      {
        title: '5. Protezione dei dati personali',
        blocks: [
          {
            kind: 'p',
            text: "Il trattamento dei dati personali raccolti tramite il Servizio è disciplinato dalla nostra [route:/politique-de-confidentialite|Informativa sulla Privacy], conforme al Regolamento Generale sulla Protezione dei Dati (GDPR – UE 2016/679) e, ove applicabile, alla Legge federale sulla protezione dei dati (nLPD, in vigore dal 1° settembre 2023 in Svizzera).",
          },
          {
            kind: 'p',
            text: 'Per qualsiasi richiesta relativa ai vostri dati personali (accesso, rettifica, cancellazione, portabilità), contattateci a: [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch].',
          },
        ],
      },
      {
        title: '6. Cookie',
        blocks: [
          {
            kind: 'p',
            text: "Questo sito e questa applicazione utilizzano cookie e tecnologie di archiviazione locale (localStorage). Alcuni sono strettamente necessari al funzionamento del Servizio (mantenimento della sessione, preferenze linguistiche) e non richiedono il vostro consenso. Altri, a scopo analitico o di personalizzazione, vengono depositati solo con il vostro consenso preventivo, conformemente alla normativa applicabile (art. 82 della legge francese sulla protezione dei dati, art. 45c LPD in Svizzera).",
          },
          {
            kind: 'p',
            text: "Potete gestire le vostre preferenze sui cookie dalle impostazioni sulla privacy dell'applicazione o dalle impostazioni del browser. Per saperne di più sui cookie utilizzati, consultate la nostra [route:/politique-de-confidentialite|Informativa sulla Privacy] (sezione 8).",
          },
        ],
      },
      {
        title: '7. Link ipertestuali',
        blocks: [
          {
            kind: 'p',
            text: "[strong:Link in uscita:] Questo Servizio può contenere link ipertestuali verso siti di terze parti (piattaforme social, App Store, Google Play, siti di ristoranti partner). L'editore non esercita alcun controllo su tali siti e declina ogni responsabilità per il loro contenuto, disponibilità o pratiche in materia di privacy. L'accesso a tali siti di terze parti avviene a rischio dell'utente.",
          },
          {
            kind: 'p',
            text: "[strong:Link in entrata:] Qualsiasi sito che desideri stabilire un link ipertestuale verso il Servizio deve ottenere l'autorizzazione scritta preventiva dell'editore. Tale autorizzazione non può essere concessa per siti che diffondono contenuti illeciti, offensivi o contrari all'etica. L'editore si riserva il diritto di richiedere la rimozione di qualsiasi link non autorizzato.",
          },
        ],
      },
      {
        title: '8. Limitazione di responsabilità',
        blocks: [
          {
            kind: 'p',
            text: "Le informazioni presenti su questo Servizio sono fornite a titolo informativo e non costituiscono in alcun caso una consulenza professionale (legale, medica, nutrizionale, ecc.). L'editore si impegna a garantire l'accuratezza e l'aggiornamento dei contenuti pubblicati, ma non può garantirne la completezza, l'accuratezza o l'adeguatezza a una situazione particolare.",
          },
          {
            kind: 'p',
            text: "L'editore declina ogni responsabilità in caso di:",
          },
          {
            kind: 'ul',
            items: [
              'Inaccuratezza o obsolescenza delle informazioni pubblicate dai ristoranti partner.',
              "Danni diretti o indiretti derivanti dall'utilizzo o dall'impossibilità di utilizzare il Servizio.",
              'Interruzione temporanea del Servizio per manutenzione o aggiornamento.',
              'Intrusione malevola di terzi nonostante le misure di sicurezza implementate.',
              "Danni derivanti dall'utilizzo di siti di terze parti accessibili tramite link presenti sul Servizio.",
            ],
          },
        ],
      },
      {
        title: '9. Mediazione e risoluzione delle controversie',
        blocks: [
          {
            kind: 'p',
            text: "In caso di controversia con l'editore, l'utente è invitato a contattare in primo luogo il servizio clienti a [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch] per cercare una soluzione amichevole.",
          },
          {
            kind: 'p',
            text: "In mancanza di una risoluzione amichevole entro 30 giorni, gli utenti residenti nell'Unione Europea possono ricorrere alla piattaforma europea di risoluzione delle controversie online (ODR) della Commissione Europea, accessibile su [link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr].",
          },
        ],
      },
      {
        title: '10. Legge applicabile e foro competente',
        blocks: [
          {
            kind: 'p',
            text: "Le presenti note legali e l'insieme delle relazioni tra l'editore e gli utenti del Servizio sono soggette al diritto svizzero, in particolare al Codice delle obbligazioni (CO) e alla Legge sulla protezione dei dati (nLPD). In caso di controversia non risolta amichevolmente, saranno competenti in via esclusiva i tribunali del Tribunale distrettuale de La Côte (Nyon, canton Vaud, Svizzera), salvo disposizioni legali imperative contrarie applicabili al consumatore nel suo paese di residenza.",
          },
        ],
      },
      {
        title: '11. Accessibilità digitale',
        blocks: [
          {
            kind: 'p',
            text: "L'editore si impegna a migliorare progressivamente l'accessibilità del proprio Servizio per le persone con disabilità, conformemente alle raccomandazioni WCAG 2.1 (livello AA). Se riscontrate difficoltà di accessibilità, contattateci a [mailto:admin@dgeconcept.ch|admin@dgeconcept.ch] affinché possiamo fornirvi assistenza adeguata o migliorare il Servizio.",
          },
        ],
      },
      {
        title: '12. Crediti',
        blocks: [
          {
            kind: 'p',
            text: '[strong:Progettazione e sviluppo:] [link:https://wiicode.org|Wiicode]',
          },
          {
            kind: 'p',
            text: '[strong:Icone:] Lucide React (licenza ISC), loghi Apple e Google (proprietà dei rispettivi titolari, utilizzati conformemente alle loro linee guida di marca).',
          },
        ],
      },
    ],
  },
};

export function getMentionsDocument(lang: Lang): LegalDocument {
  return mentionsDocuments[lang];
}

export function getMentionsLastUpdate(lang: Lang): string {
  return mentionsDocuments[lang].meta.effectiveDate;
}
