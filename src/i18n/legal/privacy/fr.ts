import type { LegalDocument } from '../types';

const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const LEGAL_NOTICE = '[route:/mentions-legales|Mentions Légales]';

export const privacyDoc: LegalDocument = {
  meta: {
    title: 'Politique de Confidentialité',
    version: '',
    effectiveDate: 'Juin 2026',
    intro:
      "La protection de vos données personnelles est une priorité pour [strong:Plat du Jour]. Cette politique vous explique quelles données nous collectons, pourquoi, comment nous les utilisons, combien de temps nous les conservons et quels sont vos droits. Elle est conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la Loi fédérale suisse sur la Protection des Données (nLPD).",
  },
  toc: {
    label: 'Sommaire',
    items: [
      'Responsable du traitement',
      'Données collectées',
      'Finalités et bases légales',
      'Durée de conservation',
      'Partage des données',
      'Transferts hors EEE',
      'Vos droits',
      'Cookies et traceurs',
      'Géolocalisation',
      'Profilage et décisions automatisées',
      'Sécurité',
      'Données des mineurs',
      'Violations de données',
      'Modifications',
    ],
  },
  sections: [
    {
      title: '1. Responsable du traitement',
      blocks: [
        {
          kind: 'p',
          text: "Le responsable du traitement des données collectées via l'application et le site web [strong:Plat du Jour] est la société éditrice dont les coordonnées complètes figurent dans les " + LEGAL_NOTICE + '.',
        },
        {
          kind: 'p',
          text: "Pour toute question relative à vos données personnelles ou pour exercer vos droits, contactez-nous à : " + ADMIN + " en précisant « Protection des données » dans l'objet de votre message.",
        },
      ],
    },
    {
      title: '2. Données collectées',
      blocks: [
        {
          kind: 'p',
          text: 'Nous collectons les catégories de données suivantes selon votre utilisation du Service :',
        },
        {
          kind: 'cards',
          items: [
            {
              title: "Données d'identité et de compte",
              text: "Nom, prénom, adresse e-mail, mot de passe (haché, jamais stocké en clair), photo de profil (facultative), préférences alimentaires (si renseignées volontairement).",
            },
            {
              title: 'Données de géolocalisation',
              text: "Position géographique approximative (rayon de quelques centaines de mètres) pour afficher les restaurants à proximité. Collectée uniquement si vous accordez la permission sur votre appareil et jamais stockée de façon permanente sur nos serveurs.",
            },
            {
              title: "Données de navigation et d'utilisation",
              text: "Restaurants consultés, plats recherchés, restaurants mis en favoris, avis et notes publiés, fréquence et horaires d'utilisation, fonctionnalités utilisées.",
            },
            {
              title: 'Données de transaction et de facturation',
              text: "Abonnement souscrit, historique de facturation, montants payés. Les données bancaires (numéro de carte, IBAN) ne transitent pas par nos systèmes et sont traitées directement par notre prestataire de paiement certifié PCI-DSS.",
            },
            {
              title: 'Données techniques',
              text: "Adresse IP (partiellement anonymisée), type d'appareil et modèle, système d'exploitation et version, version de l'application, identifiants de session, journaux d'erreurs et de performance.",
            },
            {
              title: 'Données des restaurateurs partenaires',
              text: "Raison sociale, nom du référent, adresse e-mail professionnelle, numéro de téléphone, adresse du restaurant, photos et descriptions des plats publiés, données de facturation de l'abonnement restaurant.",
            },
          ],
        },
        {
          kind: 'p',
          text: "Nous ne collectons pas de données sensibles au sens du RGPD (origine ethnique, convictions religieuses, données de santé, données biométriques, etc.), sauf mention explicite et consentement exprès de votre part. Les préférences alimentaires que vous renseignez volontairement (végétarien, halal, sans gluten, etc.) sont considérées comme des données potentiellement sensibles et sont traitées avec une protection renforcée.",
        },
      ],
    },
    {
      title: '3. Finalités et bases légales du traitement',
      blocks: [
        {
          kind: 'table',
          headers: ['Finalité', 'Base légale (RGPD)'],
          rows: [
            ['Création et gestion du compte utilisateur', 'Exécution du contrat (art. 6.1.b)'],
            ['Affichage des restaurants et menus à proximité', 'Exécution du contrat (art. 6.1.b)'],
            ['Géolocalisation pour suggestions personnalisées', 'Consentement (art. 6.1.a)'],
            ['Traitement des réservations et commandes', 'Exécution du contrat (art. 6.1.b)'],
            ['Facturation des abonnements Premium', 'Exécution du contrat (art. 6.1.b)'],
            ['Envoi de notifications de service (confirmation de réservation, etc.)', 'Exécution du contrat (art. 6.1.b)'],
            ['Envoi de communications marketing et offres personnalisées', 'Consentement (art. 6.1.a)'],
            ["Amélioration du service et analyses statistiques d'usage", 'Intérêt légitime (art. 6.1.f)'],
            ['Détection et prévention de la fraude', 'Intérêt légitime (art. 6.1.f) + Obligation légale (art. 6.1.c)'],
            ['Conservation des données de facturation', 'Obligation légale (art. 6.1.c)'],
            ['Réponse aux demandes de support et aux litiges', 'Intérêt légitime (art. 6.1.f)'],
            ['Mise en conformité avec les obligations légales et réglementaires', 'Obligation légale (art. 6.1.c)'],
          ],
        },
      ],
    },
    {
      title: '4. Durée de conservation',
      blocks: [
        {
          kind: 'p',
          text: 'Les données sont conservées pendant la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées :',
        },
        {
          kind: 'table',
          headers: ['Catégorie de données', 'Durée de conservation'],
          rows: [
            ['Données de compte actif', "Pendant toute la durée de l'inscription"],
            ['Données de compte après suppression', '3 ans (délai de prescription civile)'],
            ['Données de transaction et factures', '10 ans (obligation comptable légale)'],
            ["Journaux techniques et d'accès", '12 mois maximum'],
            ['Données de géolocalisation en temps réel', 'Non stockées de façon permanente'],
            ['Avis et notations publiés', "Durée d'activité du compte + 3 ans"],
            ['Données marketing (consentement)', "Jusqu'au retrait du consentement, max. 3 ans sans activité"],
            ['Cookies fonctionnels', '13 mois maximum'],
            ['Données de support client', '5 ans après clôture du dossier'],
          ],
        },
        {
          kind: 'p',
          text: "À l'expiration de ces délais, les données sont soit supprimées définitivement, soit anonymisées de façon irréversible à des fins statistiques.",
        },
      ],
    },
    {
      title: '5. Partage des données',
      blocks: [
        {
          kind: 'p',
          text: 'Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales. Elles peuvent être partagées dans les cas suivants :',
        },
        {
          kind: 'ul',
          items: [
            "[strong:Restaurants partenaires :] Uniquement les informations nécessaires à la réservation ou à la commande (prénom, heure, nombre de convives, allergènes signalés). Les restaurateurs s'engagent contractuellement à ne pas utiliser ces données à d'autres fins.",
            "[strong:Prestataires techniques (sous-traitants) :] Hébergement cloud, prestataire de paiement, service d'envoi d'e-mails transactionnels, outil de gestion des notifications push. Ces prestataires agissent exclusivement selon nos instructions et sont liés par des contrats de sous-traitance conformes au RGPD (art. 28).",
            "[strong:Autorités compétentes :] Sur réquisition judiciaire, injonction administrative ou obligation légale, nous pouvons communiquer les données aux autorités habilitées.",
            "[strong:Restructuration d'entreprise :] En cas de fusion, acquisition, cession d'actifs ou procédure collective, vos données pourraient être transférées au successeur, qui serait tenu de respecter la présente politique.",
          ],
        },
      ],
    },
    {
      title: '6. Transferts hors Espace Économique Européen',
      blocks: [
        {
          kind: 'p',
          text: "Certains de nos prestataires techniques peuvent être établis ou stocker des données en dehors de l'Espace Économique Européen (EEE), notamment aux États-Unis. Dans ce cas, nous nous assurons que ces transferts sont encadrés par des garanties appropriées :",
        },
        {
          kind: 'ul',
          items: [
            "Décision d'adéquation de la Commission Européenne (ex. pays reconnus comme offrant une protection équivalente à l'UE).",
            'Clauses Contractuelles Types (CCT/SCCs) adoptées par la Commission Européenne.',
            'Cadre de protection des données UE–États-Unis (EU-US Data Privacy Framework) pour les transferts vers des entités américaines certifiées.',
          ],
        },
        {
          kind: 'p',
          text: 'Vous pouvez obtenir une copie des garanties applicables en contactant : ' + ADMIN + '.',
        },
      ],
    },
    {
      title: '7. Vos droits',
      blocks: [
        {
          kind: 'p',
          text: 'Conformément au RGPD (Chapitre III) et, si applicable, à la LPD suisse, vous disposez des droits suivants sur vos données personnelles :',
        },
        {
          kind: 'cards',
          items: [
            {
              title: "Droit d'accès (art. 15 RGPD)",
              desc: 'Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.',
            },
            {
              title: 'Droit de rectification (art. 16)',
              desc: 'Faire corriger des données inexactes ou compléter des données incomplètes.',
            },
            {
              title: "Droit à l'effacement (art. 17)",
              desc: 'Demander la suppression de vos données dans les cas prévus par la loi (droit à l\'oubli).',
            },
            {
              title: 'Droit à la limitation (art. 18)',
              desc: 'Restreindre temporairement le traitement de vos données en cas de contestation ou pendant vérification.',
            },
            {
              title: 'Droit à la portabilité (art. 20)',
              desc: 'Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, ou les faire transmettre à un autre responsable.',
            },
            {
              title: "Droit d'opposition (art. 21)",
              desc: "Vous opposer à tout moment au traitement fondé sur l'intérêt légitime ou au traitement à des fins de prospection commerciale.",
            },
            {
              title: 'Droit de retrait du consentement',
              desc: 'Retirer votre consentement à tout moment sans que cela n\'affecte la licéité des traitements effectués avant ce retrait.',
            },
            {
              title: 'Droit de ne pas faire l\'objet d\'une décision automatisée (art. 22)',
              desc: 'Ne pas être soumis à une décision produisant des effets juridiques basée exclusivement sur un traitement automatisé.',
            },
          ].map(({ title, desc }) => ({ title, text: desc })),
        },
        {
          kind: 'p',
          text: "Pour exercer l'un de ces droits, envoyez votre demande à " + ADMIN + " en joignant une pièce d'identité si nécessaire à la vérification de votre identité. Nous répondrons dans un délai maximum d'[strong:un mois] (30 jours calendaires).",
        },
        {
          kind: 'p',
          text: 'Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l\'autorité de contrôle compétente dans votre pays :',
        },
        {
          kind: 'ul',
          items: [
            '[strong:France :] CNIL — cnil.fr',
            '[strong:Belgique :] APD (Autorité de Protection des Données) — autoriteprotectiondonnees.be',
            '[strong:Suisse :] PFPDT (Préposé fédéral à la protection des données) — edoeb.admin.ch',
            '[strong:Luxembourg :] CNPD — cnpd.public.lu',
          ],
        },
      ],
    },
    {
      title: '8. Cookies et technologies similaires',
      blocks: [
        {
          kind: 'p',
          text: "L'application et le site web utilisent des technologies de stockage local. Voici les types de traceurs utilisés :",
        },
        {
          kind: 'table',
          headers: ['Type', 'Finalité', 'Consentement requis'],
          rows: [
            ['Cookie de session', 'Maintien de la connexion', 'Non (strictement nécessaire)'],
            ['Préférences de langue (localStorage)', 'Mémoriser la langue choisie', 'Non (strictement nécessaire)'],
            ['Tokens d\'authentification', 'Connexion persistante (option « Se souvenir de moi »)', 'Non (strictement nécessaire)'],
            ['Analytics anonymisés', "Mesure d'audience agrégée", 'Oui (opt-in)'],
            ['Notifications push', 'Alertes de réservation et nouveaux menus', 'Oui (opt-in)'],
          ],
        },
        {
          kind: 'p',
          text: "Vous pouvez à tout moment gérer ou révoquer vos consentements depuis les paramètres de confidentialité de l'application. Le refus de certains cookies non essentiels n'affecte pas l'accès aux fonctionnalités principales du Service.",
        },
      ],
    },
    {
      title: '9. Géolocalisation',
      blocks: [
        {
          kind: 'p',
          text: "La géolocalisation est utilisée uniquement pour vous afficher les restaurants proches de votre position actuelle. Elle fonctionne via l'API de géolocalisation de votre système d'exploitation (iOS ou Android) et nécessite votre autorisation explicite.",
        },
        {
          kind: 'p',
          text: "[strong:Ce que nous ne faisons pas :] nous ne stockons pas votre historique de déplacements, ne suivons pas vos déplacements en arrière-plan (même si l'application est fermée), ne vendons pas vos données de localisation à des tiers.",
        },
        {
          kind: 'p',
          text: "Vous pouvez révoquer l'accès à la localisation à tout moment depuis les paramètres de votre appareil. Dans ce cas, vous pouvez entrer manuellement une ville ou une adresse pour chercher des restaurants.",
        },
      ],
    },
    {
      title: '10. Profilage et décisions automatisées',
      blocks: [
        {
          kind: 'p',
          text: 'Nous utilisons vos données de navigation (restaurants consultés, recherches, favoris) pour vous proposer des suggestions personnalisées de restaurants et de plats du jour susceptibles de vous intéresser. Ce traitement constitue du profilage au sens de l\'art. 4.4 du RGPD.',
        },
        {
          kind: 'p',
          text: "Ce profilage ne produit [strong:aucun effet juridique] ni aucune décision significative vous affectant. Il vise uniquement à améliorer la pertinence des recommandations affichées. Vous pouvez vous opposer à ce profilage à tout moment en contactant " + ADMIN + '.',
        },
      ],
    },
    {
      title: '11. Sécurité des données',
      blocks: [
        {
          kind: 'p',
          text: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation :',
        },
        {
          kind: 'ul',
          items: [
            'Chiffrement de toutes les communications (HTTPS/TLS 1.3).',
            'Hachage des mots de passe avec algorithme bcrypt ou Argon2.',
            'Authentification à deux facteurs (2FA) disponible en option.',
            'Accès aux données de production restreint au personnel habilité.',
            'Sauvegardes chiffrées régulières avec tests de restauration.',
            'Journalisation et surveillance des accès aux données sensibles.',
            'Politique de gestion des incidents de sécurité formalisée.',
          ],
        },
        {
          kind: 'p',
          text: "Malgré ces mesures, aucun système n'est infaillible. Nous vous recommandons d'utiliser un mot de passe fort et unique pour votre compte Plat du Jour.",
        },
      ],
    },
    {
      title: '12. Données des mineurs',
      blocks: [
        {
          kind: 'p',
          text: "Le Service n'est pas destiné aux enfants de moins de 16 ans (ou l'âge de consentement numérique applicable dans votre pays). Nous ne collectons pas sciemment de données personnelles concernant des mineurs en dessous de cet âge sans le consentement vérifiable d'un parent ou tuteur légal.",
        },
        {
          kind: 'p',
          text: "Si vous êtes parent ou tuteur et estimez que votre enfant nous a transmis des données sans votre consentement, contactez-nous immédiatement à " + ADMIN + ' pour que nous procédions à leur suppression dans les meilleurs délais.',
        },
      ],
    },
    {
      title: '13. Notification en cas de violation de données',
      blocks: [
        {
          kind: 'p',
          text: "En cas de violation de données personnelles susceptible d'engendrer un risque pour vos droits et libertés, nous nous engageons à :",
        },
        {
          kind: 'ul',
          items: [
            "Notifier l'autorité de contrôle compétente dans les [strong:72 heures] suivant la détection de l'incident (art. 33 RGPD).",
            'Vous informer directement, dans les meilleurs délais, si la violation présente un risque élevé pour vos droits et libertés (art. 34 RGPD).',
            "Documenter l'incident et les mesures correctives prises.",
          ],
        },
      ],
    },
    {
      title: '14. Modifications de la politique',
      blocks: [
        {
          kind: 'p',
          text: 'Cette politique de confidentialité peut être mise à jour pour refléter des changements dans nos pratiques, dans la législation applicable ou dans notre infrastructure technique. La date de dernière mise à jour est indiquée en haut de ce document.',
        },
        {
          kind: 'p',
          text: "En cas de modification substantielle, nous vous en informerons par e-mail ou par notification dans l'application au moins [strong:30 jours avant] l'entrée en vigueur des changements. La poursuite de l'utilisation du Service après cette date vaut acceptation de la politique mise à jour.",
        },
      ],
    },
  ],
};
