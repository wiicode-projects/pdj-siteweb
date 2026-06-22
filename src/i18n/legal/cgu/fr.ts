import type { LegalDocument } from '../types';

const VERSION = '1.0 — Mai 2026';
const EFFECTIVE = '04 mai 2026';
const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const SITE = '[link:https://www.leplatdujour.ch|https://www.leplatdujour.ch]';
const PRIVACY = '[route:/politique-de-confidentialite|Politique de Confidentialité]';
const PRICING = '[route:/tarifs|page Tarifs]';
const ODR = '[link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr]';

export const cguDoc: LegalDocument = {
  meta: {
    eyebrow: 'D.G.E. Concept SàRL · www.leplatdujour.ch',
    title: "Conditions Générales d'Utilisation",
    subtitle: 'Plateforme Le Plat du Jour',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · CGU Version ${VERSION}`,
  },
  toc: {
    label: 'Sommaire — CGU',
    items: [
      'Préambule',
      'Définitions',
      'Objet et périmètre',
      'Accès et création de compte',
      'Obligations des Restaurants',
      'Obligations des Clients',
      'Limitation de responsabilité',
      'Données personnelles',
      'Propriété intellectuelle',
      'Disponibilité et maintenance',
      'Droit applicable',
      'Modifications des CGU',
      'Dispositions diverses',
    ],
  },
  sections: [
    {
      title: 'Préambule',
      blocks: [
        {
          kind: 'p',
          text: `Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation de la plateforme en ligne Le Plat du Jour, accessible à l'adresse ${SITE} (ci-après « la Plateforme »), éditée par D.G.E. Concept SàRL, dont le siège est sis à Arzier-Le Muids, canton de Vaud, Suisse, inscrite au Registre du Commerce sous le numéro IDE CHE-456.471.738 (ci-après « l'Éditeur »).`,
        },
        {
          kind: 'p',
          text: "En créant un compte sur la Plateforme, qu'il s'agisse d'un compte Restaurant ou d'un compte Client, l'Utilisateur reconnaît avoir lu, compris et accepté l'intégralité des présentes CGU. Cette acceptation est enregistrée électroniquement avec horodatage et constitue une preuve opposable.",
        },
        {
          kind: 'p',
          text: "La Plateforme est une marketplace de mise en relation entre des établissements de restauration (ci-après « Restaurants ») proposant leur plat du jour et des clients finaux particuliers (ci-après « Clients ») souhaitant commander en ligne. L'Éditeur agit en qualité d'intermédiaire technique et n'intervient pas dans la relation contractuelle entre le Restaurant et le Client pour la fourniture du repas.",
        },
      ],
    },
    {
      title: 'Art. 1 — Définitions',
      blocks: [
        { kind: 'p', text: 'Au sens des présentes CGU, les termes suivants désignent :' },
        {
          kind: 'ul',
          items: [
            `[strong:Plateforme :] le service Le Plat du Jour accessible en ligne à l'adresse https://www.leplatdujour.ch, opéré par D.G.E. Concept SàRL.`,
            `[strong:Éditeur :] D.G.E. Concept SàRL, société à responsabilité limitée de droit suisse, Arzier-Le Muids, canton de Vaud, Suisse, IDE CHE-456.471.738, opératrice de la Plateforme.`,
            `[strong:Utilisateur :] toute personne physique ou morale ayant créé un compte sur la Plateforme, qu'il soit Restaurant ou Client.`,
            `[strong:Restaurant :] tout établissement de restauration professionnel titulaire d'un abonnement actif sur la Plateforme, autorisé à publier ses offres de plats du jour.`,
            `[strong:Client :] toute personne physique âgée d'au moins 18 ans ayant créé un compte sur la Plateforme et y passant commande.`,
            `[strong:Offre :] la publication par un Restaurant d'un ou plusieurs plats du jour disponibles à la commande via la Plateforme.`,
            `[strong:Commande :] l'acte par lequel un Client sélectionne une Offre et la confirme via la Plateforme.`,
            `[strong:Abonnement Restaurant :] le contrat d'accès payant permettant à un Restaurant de publier ses Offres sur la Plateforme, souscrit selon les formules disponibles.`,
            `[strong:Compte :] l'espace personnel sécurisé créé par l'Utilisateur lors de son inscription, donnant accès aux fonctionnalités de la Plateforme.`,
          ],
        },
      ],
    },
    {
      title: 'Art. 2 — Objet et périmètre de la Plateforme',
      blocks: [
        { kind: 'h3', text: '2.1 — Ce que Le Plat du Jour est' },
        {
          kind: 'p',
          text: "Le Plat du Jour est une plateforme de mise en relation en ligne permettant à des Restaurants de publier leurs offres de plats du jour et à des Clients de les consulter et de les commander. L'Éditeur fournit l'infrastructure technique permettant cette mise en relation.",
        },
        { kind: 'h3', text: "2.2 — Ce que Le Plat du Jour n'est pas" },
        { kind: 'p', text: "La Plateforme n'est pas :" },
        {
          kind: 'ul',
          items: [
            'un restaurateur, un traiteur ou un prestataire alimentaire ;',
            "un service de livraison à domicile — aucune prestation logistique n'est assurée par l'Éditeur ;",
            'un garant de la qualité, de la composition, des allergènes ou de la conformité sanitaire des plats proposés par les Restaurants ;',
            'une partie au contrat de vente conclu entre le Restaurant et le Client.',
          ],
        },
        { kind: 'h3', text: "2.3 — Rôle d'intermédiaire technique" },
        {
          kind: 'p',
          text: "L'Éditeur agit exclusivement en qualité d'intermédiaire technique. Le contrat de vente relatif à chaque commande est conclu directement entre le Restaurant et le Client. L'Éditeur ne saurait être tenu responsable de l'exécution ou de l'inexécution de ce contrat.",
        },
        { kind: 'h3', text: '2.4 — Zone géographique' },
        {
          kind: 'p',
          text: "La Plateforme est disponible sur l'ensemble du territoire suisse. L'Éditeur se réserve le droit d'étendre ou de restreindre la couverture géographique à tout moment.",
        },
      ],
    },
    {
      title: 'Art. 3 — Accès à la Plateforme et création de compte',
      blocks: [
        { kind: 'h3', text: "3.1 — Conditions d'accès" },
        {
          kind: 'p',
          text: "L'accès à la Plateforme en tant que Client est réservé aux personnes physiques âgées d'au moins 18 ans. L'accès en tant que Restaurant est réservé aux personnes morales ou physiques agissant dans le cadre d'une activité professionnelle de restauration dûment autorisée.",
        },
        {
          kind: 'p',
          text: "En créant un compte, l'Utilisateur garantit que les informations fournies sont exactes, complètes et à jour. Toute fausse déclaration engage la seule responsabilité de l'Utilisateur.",
        },
        { kind: 'h3', text: '3.2 — Processus de création de compte' },
        { kind: 'p', text: "La création d'un compte s'effectue exclusivement en ligne selon les étapes suivantes :" },
        {
          kind: 'ol',
          items: [
            "Saisie des informations d'identification (adresse email, mot de passe, informations de profil).",
            'Acceptation des présentes CGU (case à cocher obligatoire — acceptation enregistrée avec horodatage).',
            "Validation de l'adresse email via le lien de confirmation envoyé automatiquement.",
          ],
        },
        { kind: 'p', text: "Le compte est actif à compter de la validation de l'adresse email." },
        { kind: 'h3', text: '3.3 — Gestion et sécurité du compte' },
        {
          kind: 'p',
          text: `L'Utilisateur est seul responsable de la confidentialité de ses identifiants de connexion et de toute activité réalisée depuis son compte. En cas de compromission ou d'utilisation non autorisée, l'Utilisateur s'engage à en informer immédiatement l'Éditeur à l'adresse ${ADMIN}.`,
        },
        { kind: 'h3', text: '3.4 — Suspension et clôture de compte' },
        {
          kind: 'p',
          text: "L'Éditeur se réserve le droit de suspendre ou de clôturer tout compte en cas de violation des présentes CGU, d'usage frauduleux, abusif ou contraire à l'ordre public, sans préavis ni indemnité.",
        },
        {
          kind: 'p',
          text: `L'Utilisateur peut clôturer son compte à tout moment en adressant une demande à ${ADMIN}. La clôture du compte Restaurant ne donne pas lieu à remboursement de la période d'abonnement en cours.`,
        },
      ],
    },
    {
      title: 'Art. 4 — Obligations des Restaurants',
      blocks: [
        { kind: 'h3', text: '4.1 — Conformité réglementaire' },
        { kind: 'p', text: 'Le Restaurant est seul et entièrement responsable :' },
        {
          kind: 'ul',
          items: [
            "de la détention de toutes les autorisations, licences et patentes nécessaires à l'exercice de son activité de restauration (autorisation cantonale/communale, patente de restaurateur, etc.) ;",
            "de la conformité de ses préparations culinaires aux normes d'hygiène et de sécurité alimentaire applicables en Suisse (ODAl, HACCP, etc.) ;",
            "de l'exactitude des informations publiées sur la Plateforme, notamment les descriptions de plats, les prix, les allergènes et les disponibilités ;",
            "du respect des obligations légales en matière d'étiquetage alimentaire et de déclaration des allergènes.",
          ],
        },
        { kind: 'h3', text: '4.2 — Responsabilité exclusive du Restaurant' },
        {
          kind: 'callout',
          variant: 'warning',
          text: "[strong:Point critique —] Le Restaurant est seul responsable de la qualité, de la composition, des allergènes et de la conformité sanitaire des plats proposés. En cas de litige lié à une commande (non-conformité, intoxication, erreur allergène, etc.), la responsabilité incombe exclusivement au Restaurant. L'Éditeur ne pourra en aucun cas être mis en cause.",
        },
        { kind: 'h3', text: '4.3 — Obligations de publication' },
        { kind: 'p', text: "Le Restaurant s'engage à :" },
        {
          kind: 'ul',
          items: [
            'publier des informations exactes, à jour et non trompeuses sur ses Offres ;',
            'mettre à jour ses disponibilités en temps réel et retirer immédiatement toute Offre qui ne peut plus être honorée ;',
            'mentionner de manière claire et complète les allergènes présents dans ses préparations ;',
            'respecter les prix publiés sur la Plateforme au moment où la Commande est passée par le Client.',
          ],
        },
        { kind: 'h3', text: '4.4 — Usages interdits' },
        { kind: 'p', text: 'Sont notamment interdits :' },
        {
          kind: 'ul',
          items: [
            "la publication d'informations fausses, trompeuses ou susceptibles d'induire le Client en erreur ;",
            "tout usage de la Plateforme à des fins non liées à l'activité de restauration ;",
            "toute tentative de contournement des mécanismes de la Plateforme ou d'accès non autorisé à d'autres comptes.",
          ],
        },
      ],
    },
    {
      title: 'Art. 5 — Obligations des Clients',
      blocks: [
        { kind: 'h3', text: '5.1 — Conditions de commande' },
        { kind: 'p', text: 'Le Client s\'engage à :' },
        {
          kind: 'ul',
          items: [
            "fournir des informations d'identification exactes et à jour lors de la création de son compte ;",
            'ne passer que des commandes sérieuses et à honorer toute commande confirmée ;',
            'respecter les conditions spécifiques définies par le Restaurant (horaires, modalités de récupération, etc.) ;',
            'signaler sans délai tout problème lié à une commande directement auprès du Restaurant concerné.',
          ],
        },
        { kind: 'h3', text: '5.2 — Responsabilité du Client' },
        {
          kind: 'p',
          text: "Le Client est seul responsable de la vérification des informations relatives aux Offres avant de passer commande, notamment les allergènes, les compositions et les conditions de récupération. En cas de doute, le Client est invité à contacter directement le Restaurant.",
        },
      ],
    },
    {
      title: "Art. 6 — Limitation de responsabilité de l'Éditeur",
      blocks: [
        { kind: 'h3', text: '6.1 — Exclusions de responsabilité' },
        {
          kind: 'p',
          text: "Dans toute la mesure permise par le droit suisse applicable, l'Éditeur exclut toute responsabilité pour :",
        },
        {
          kind: 'ul',
          items: [
            "les dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser la Plateforme ;",
            "tout litige lié à l'exécution d'une commande entre un Restaurant et un Client (qualité, délais, allergènes, non-livraison, etc.) ;",
            "l'exactitude, l'exhaustivité ou la mise à jour des informations publiées par les Restaurants ;",
            'toute interruption de service liée à un cas de force majeure, à une maintenance ou à une défaillance technique ;',
            "tout dommage résultant d'une utilisation frauduleuse ou abusive des identifiants de connexion d'un Utilisateur.",
          ],
        },
        { kind: 'h3', text: '6.2 — Limitation du montant' },
        {
          kind: 'p',
          text: "Dans les cas où la responsabilité de l'Éditeur ne peut être totalement exclue, elle est expressément limitée, s'agissant des Restaurants, au montant de l'abonnement effectivement payé pour la période en cours au moment du fait générateur du dommage.",
        },
      ],
    },
    {
      title: 'Art. 7 — Données personnelles et confidentialité',
      blocks: [
        { kind: 'h3', text: '7.1 — Données collectées' },
        {
          kind: 'p',
          text: "Dans le cadre de l'utilisation de la Plateforme, l'Éditeur collecte et traite les données suivantes :",
        },
        {
          kind: 'ul',
          items: [
            "[strong:Données d'identification :] adresse email, prénom, nom (pour les Clients) ; raison sociale, adresse, email professionnel (pour les Restaurants).",
            "[strong:Données d'utilisation :] historique des commandes, offres publiées, interactions avec la Plateforme.",
            '[strong:Données techniques :] adresse IP, navigateur, logs de connexion.',
            "[strong:Données de paiement (Restaurants uniquement) :] traitées exclusivement par les prestataires de paiement — non stockées par l'Éditeur.",
          ],
        },
        { kind: 'h3', text: '7.2 — Finalités du traitement' },
        {
          kind: 'p',
          text: 'Les données collectées sont traitées aux fins suivantes : gestion des comptes et des accès, mise en relation Restaurants/Clients, traitement des commandes, amélioration de la Plateforme, envoi de communications liées au service.',
        },
        { kind: 'h3', text: '7.3 — Droits des Utilisateurs' },
        {
          kind: 'p',
          text: `Conformément à la nLPD suisse (et au RGPD pour les Utilisateurs résidant dans l'UE), tout Utilisateur dispose des droits d'accès, rectification, effacement, portabilité et opposition sur ses données personnelles, exerçables à ${ADMIN}. Pour plus de détails, consultez notre ${PRIVACY}.`,
        },
        { kind: 'h3', text: '7.4 — Conservation et hébergement' },
        {
          kind: 'p',
          text: "Les données sont hébergées en Suisse et/ou dans l'Union Européenne. Les données personnelles sont conservées pour la durée du compte actif augmentée de douze (12) mois après la clôture du compte, sauf obligations légales contraires.",
        },
        { kind: 'h3', text: '7.5 — Confidentialité' },
        {
          kind: 'p',
          text: "Les données des Utilisateurs ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises à des prestataires techniques liés par des obligations de confidentialité et agissant exclusivement pour le compte de l'Éditeur.",
        },
      ],
    },
    {
      title: 'Art. 8 — Propriété intellectuelle',
      blocks: [
        {
          kind: 'p',
          text: "La Plateforme Le Plat du Jour, son interface, ses algorithmes, ses bases de données et l'ensemble de ses contenus propres sont la propriété exclusive de D.G.E. Concept SàRL et sont protégés par le droit suisse et international de la propriété intellectuelle.",
        },
        {
          kind: 'p',
          text: "Les contenus publiés par les Restaurants (descriptions, photos) restent la propriété de leurs auteurs. En les publiant sur la Plateforme, le Restaurant concède à l'Éditeur un droit d'utilisation non exclusif, à titre gratuit, pour les besoins du service (affichage, indexation, promotion de la Plateforme).",
        },
        {
          kind: 'p',
          text: "L'Utilisateur bénéficie d'un droit d'accès et d'utilisation personnel, non exclusif et non transférable des fonctionnalités de la Plateforme.",
        },
      ],
    },
    {
      title: 'Art. 9 — Disponibilité et maintenance',
      blocks: [
        {
          kind: 'p',
          text: "L'Éditeur s'efforce d'assurer la disponibilité de la Plateforme 24h/24 et 7j/7, sans pouvoir en garantir un accès ininterrompu. Des interruptions peuvent survenir pour maintenance, mise à jour ou cas de force majeure. L'Éditeur informera les Utilisateurs, dans la mesure du possible, des opérations de maintenance planifiées. Aucun niveau de service garanti (SLA) n'est contractuellement engagé.",
        },
      ],
    },
    {
      title: 'Art. 10 — Droit applicable et juridiction compétente',
      blocks: [
        {
          kind: 'p',
          text: "Les présentes CGU sont régies par le droit suisse, notamment le Code des Obligations (CO) et la Loi sur la protection des données (nLPD). Tout litige entre professionnels sera soumis au for exclusif du Tribunal d'arrondissement de La Côte (Nyon, canton de Vaud, Suisse).",
        },
        {
          kind: 'p',
          text: `Pour les Utilisateurs résidant dans l'Union Européenne et agissant en qualité de consommateurs, les règles de compétence impératives du droit de l'UE s'appliquent. La plateforme de règlement en ligne des litiges de la Commission Européenne est accessible à : ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Modifications des CGU',
      blocks: [
        {
          kind: 'p',
          text: "L'Éditeur se réserve le droit de modifier les présentes CGU à tout moment. En cas de modification substantielle, l'Utilisateur sera informé par email avec un préavis de trente (30) jours. La poursuite de l'utilisation de la Plateforme après expiration du délai vaut acceptation des nouvelles CGU. En cas de refus, l'Utilisateur peut clôturer son compte sans frais avant la date d'entrée en vigueur.",
        },
      ],
    },
    {
      title: 'Art. 12 — Dispositions diverses',
      blocks: [
        { kind: 'h3', text: '12.1 — Nullité partielle' },
        {
          kind: 'p',
          text: "Si l'une quelconque des dispositions est déclarée nulle ou inapplicable, les autres demeurent pleinement en vigueur.",
        },
        { kind: 'h3', text: '12.2 — Non-renonciation' },
        {
          kind: 'p',
          text: "Le fait pour l'Éditeur de ne pas se prévaloir d'une disposition ne saurait être interprété comme une renonciation à l'invoquer ultérieurement.",
        },
        { kind: 'h3', text: '12.3 — Contact' },
        {
          kind: 'p',
          text: `Pour toute question relative aux présentes CGU : ${ADMIN} — D.G.E. Concept SàRL, Arzier-Le Muids, canton de Vaud, Suisse — [link:https://www.leplatdujour.ch|www.leplatdujour.ch].`,
        },
      ],
    },
  ],
};

export const cgvDoc: LegalDocument = {
  meta: {
    title: 'Conditions Générales de Vente',
    subtitle: 'Plateforme Le Plat du Jour — Abonnements Restaurants',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · CGV Version ${VERSION}`,
  },
  toc: {
    label: 'Sommaire — CGV',
    items: [
      'Préambule',
      'Objet',
      'Offres, tarifs et devises',
      'Commande et souscription',
      'Paiement',
      'Durée, renouvellement et résiliation',
      'Politique de non-remboursement',
      'Droit de rétractation',
      'Service et support',
      "Cession de l'abonnement",
      'Droit applicable',
      'Dispositions finales',
    ],
  },
  sections: [
    {
      title: 'Préambule',
      blocks: [
        {
          kind: 'p',
          text: "Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l'ensemble des transactions commerciales conclues entre D.G.E. Concept SàRL, Arzier-Le Muids, canton de Vaud, Suisse, IDE CHE-456.471.738, éditrice de la plateforme Le Plat du Jour (ci-après « le Vendeur »), et tout établissement de restauration souscrivant à un abonnement payant (ci-après « l'Acheteur »).",
        },
        {
          kind: 'p',
          text: "Toute souscription à un abonnement payant emporte l'acceptation pleine et entière des présentes CGV, conjointement avec les Conditions Générales d'Utilisation. Cette acceptation est enregistrée électroniquement avec horodatage et constitue une preuve opposable.",
        },
        {
          kind: 'p',
          text: "Les présentes CGV régissent exclusivement la relation commerciale entre le Vendeur et les Restaurants abonnés. Elles ne s'appliquent pas aux Clients finaux, dont la relation avec la Plateforme est régie par les CGU.",
        },
      ],
    },
    {
      title: 'Art. 1 — Objet',
      blocks: [
        {
          kind: 'p',
          text: "Les présentes CGV ont pour objet de définir les conditions et modalités de vente des abonnements donnant accès aux fonctionnalités de publication et de visibilité sur la plateforme Le Plat du Jour. Le service vendu est un accès à une infrastructure numérique de mise en relation permettant aux Restaurants de publier leurs offres de plats du jour et de les rendre accessibles aux Clients.",
        },
      ],
    },
    {
      title: 'Art. 2 — Offres, tarifs et devises',
      blocks: [
        { kind: 'h3', text: '2.1 — Formules disponibles' },
        {
          kind: 'p',
          text: `Le Plat du Jour propose plusieurs formules d'abonnement mensuel adaptées aux besoins des Restaurants. Le détail complet des formules et des fonctionnalités incluses dans chaque plan est disponible sur la ${PRICING} de la Plateforme, qui fait foi.`,
        },
        { kind: 'p', text: 'Les formules disponibles et leurs tarifs sont les suivants :' },
        {
          kind: 'subscriptionPricingTable',
          headers: ['Formule', 'Tarif', 'Fonctionnalités principales'],
          targetType: 'RESTAURANT',
        },
        { kind: 'h3', text: '2.2 — Devise' },
        {
          kind: 'p',
          text: 'Les abonnements sont facturés en francs suisses (CHF). Le prix applicable est celui affiché au moment de la souscription.',
        },
        { kind: 'h3', text: '2.3 — Prix et TVA' },
        {
          kind: 'p',
          text: "D.G.E. Concept SàRL est une entreprise de droit suisse non assujettie à la TVA à la date d'entrée en vigueur des présentes CGV. Les prix affichés s'entendent donc toutes taxes comprises (TTC) au taux applicable. En cas d'assujettissement ultérieur à la TVA, les tarifs seront ajustés conformément à l'Article 2.4.",
        },
        { kind: 'h3', text: '2.4 — Modifications tarifaires' },
        {
          kind: 'p',
          text: "Le Vendeur se réserve le droit de modifier ses tarifs avec un préavis minimum de trente (30) jours communiqué par email à l'adresse enregistrée lors de la souscription. L'Acheteur peut résilier son abonnement sans frais s'il refuse les nouveaux tarifs, avant la date d'entrée en vigueur.",
        },
      ],
    },
    {
      title: 'Art. 3 — Commande et souscription',
      blocks: [
        { kind: 'h3', text: '3.1 — Processus de souscription' },
        {
          kind: 'p',
          text: "La souscription à un abonnement s'effectue exclusivement en ligne sur www.leplatdujour.ch, selon les étapes suivantes :",
        },
        {
          kind: 'ol',
          items: [
            "Création d'un compte Restaurant ou connexion à un compte existant.",
            "Sélection de la formule d'abonnement souhaitée.",
            'Acceptation des présentes CGV et des CGU (case à cocher obligatoire — acceptation enregistrée avec horodatage).',
            'Saisie et validation des informations de paiement.',
            "Confirmation de la souscription par email à l'adresse enregistrée.",
          ],
        },
        { kind: 'h3', text: '3.2 — Formation du contrat' },
        {
          kind: 'p',
          text: "Le contrat de vente est réputé conclu à la date de réception par l'Acheteur de l'email de confirmation de souscription. Cet email récapitule la formule souscrite, le montant facturé et la période d'abonnement.",
        },
        { kind: 'h3', text: '3.3 — Cadre professionnel' },
        {
          kind: 'p',
          text: "Le Plat du Jour est un service destiné exclusivement aux professionnels de la restauration. En souscrivant, l'Acheteur déclare agir dans le cadre de son activité professionnelle et disposer de toutes les autorisations nécessaires à l'exercice de son activité.",
        },
      ],
    },
    {
      title: 'Art. 4 — Paiement',
      blocks: [
        { kind: 'h3', text: '4.1 — Moyens de paiement acceptés' },
        { kind: 'p', text: 'Les paiements sont acceptés via les moyens suivants :' },
        {
          kind: 'ul',
          items: [
            '[strong:TWINT] — disponible pour les paiements en CHF depuis la Suisse.',
            '[strong:Carte bancaire] (Visa, Mastercard) via terminal MyPos — traitement sécurisé PCI-DSS.',
            '[strong:PayPal.]',
            "[strong:Virement bancaire] — les coordonnées bancaires sont communiquées après confirmation de commande ; l'accès à la Plateforme est activé à réception du virement.",
          ],
        },
        {
          kind: 'callout',
          variant: 'info',
          text: "[strong:Sécurité des paiements —] D.G.E. Concept SàRL n'accède à aucune donnée bancaire ou numéro de carte. Les paiements par carte sont traités par un prestataire certifié PCI-DSS. Aucune donnée bancaire n'est stockée par l'Éditeur.",
        },
        { kind: 'h3', text: '4.2 — Facturation' },
        {
          kind: 'p',
          text: "Un reçu ou une facture est automatiquement émis par email à chaque transaction. L'Acheteur peut accéder à l'historique de ses paiements depuis son tableau de bord.",
        },
        { kind: 'h3', text: '4.3 — Défaut de paiement' },
        {
          kind: 'p',
          text: "En cas d'échec ou de refus de paiement, l'Acheteur est informé par email. Un délai de dix (10) jours est accordé pour régulariser la situation. Passé ce délai, l'accès aux fonctionnalités de publication est suspendu jusqu'à régularisation.",
        },
      ],
    },
    {
      title: 'Art. 5 — Durée, renouvellement et résiliation',
      blocks: [
        { kind: 'h3', text: "5.1 — Durée de l'abonnement" },
        {
          kind: 'p',
          text: "Les abonnements sont souscrits à la mensualité, sans engagement de durée minimum. L'abonnement prend effet à la date de validation du paiement et court jusqu'à la fin du mois calendaire en cours.",
        },
        { kind: 'h3', text: '5.2 — Renouvellement' },
        {
          kind: 'p',
          text: "L'abonnement ne se renouvelle pas automatiquement. À l'échéance, l'accès aux fonctionnalités de publication expire. L'Acheteur reçoit un email de rappel avant la fin de sa période pour lui permettre de souscrire une nouvelle mensualité s'il le souhaite.",
        },
        { kind: 'h3', text: "5.3 — Résiliation par l'Acheteur" },
        {
          kind: 'p',
          text: "L'Acheteur peut mettre fin à son abonnement à tout moment. Aucun remboursement n'est accordé pour la mensualité en cours, quelle que soit la date de résiliation ou le niveau d'utilisation. L'accès aux fonctionnalités reste actif jusqu'à la fin de la période mensuelle initialement souscrite.",
        },
        { kind: 'h3', text: '5.4 — Résiliation par le Vendeur' },
        {
          kind: 'p',
          text: "Le Vendeur peut suspendre ou résilier l'accès d'un Acheteur sans préavis en cas de violation grave des CGU ou des présentes CGV, d'usage frauduleux ou abusif avéré, ou de non-paiement après la période de grâce définie à l'Article 4.3. En cas de résiliation par le Vendeur pour un motif non imputable à l'Acheteur, le prorata des jours non consommés est remboursé.",
        },
        { kind: 'h3', text: '5.5 — Fin du service' },
        {
          kind: 'p',
          text: "Dans l'hypothèse où le Vendeur déciderait de mettre fin à l'exploitation de la Plateforme, les Acheteurs disposant d'un abonnement actif seront informés par email avec un préavis de quatre-vingt-dix (90) jours. Le prorata des jours non consommés sera remboursé.",
        },
      ],
    },
    {
      title: 'Art. 6 — Politique de non-remboursement',
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          text: "[strong:Politique ferme de non-remboursement —] Toute mensualité versée est définitivement acquise au Vendeur, sauf cas expressément prévus aux Articles 5.4 et 5.5. Le mois est dû en entier, quelle que soit la date de résiliation en cours de période.",
        },
        { kind: 'p', text: "Aucun remboursement n'est accordé pour :" },
        {
          kind: 'ul',
          items: [
            'une mensualité en cours, quelle que soit la date de résiliation ;',
            "la non-utilisation partielle ou totale des fonctionnalités incluses dans l'abonnement ;",
            "un changement de situation professionnelle ou de besoins de l'Acheteur ;",
            'une insatisfaction relative au service.',
          ],
        },
        {
          kind: 'p',
          text: `À titre commercial et de bonne foi, le Vendeur s'engage à examiner toute demande de remboursement introduite dans les quarante-huit (48) heures suivant la première souscription, en cas d'impossibilité technique avérée et documentée d'accéder au service. Ces demandes doivent être adressées à ${ADMIN}.`,
        },
      ],
    },
    {
      title: 'Art. 7 — Droit de rétractation',
      blocks: [
        {
          kind: 'p',
          text: "Conformément à l'article 16 de la directive européenne 2011/83/UE, le droit de rétractation de 14 jours ne s'applique pas aux contenus numériques dont l'exécution a commencé avant l'expiration du délai de rétractation, avec l'accord préalable exprès de l'Acheteur.",
        },
        {
          kind: 'p',
          text: "En souscrivant et en accédant immédiatement aux fonctionnalités de la Plateforme, l'Acheteur reconnaît que le service numérique est fourni dès la confirmation du paiement, entraînant la renonciation au droit de rétractation. Pour les Acheteurs agissant dans un cadre professionnel, le droit de rétractation consommateur n'est pas applicable.",
        },
      ],
    },
    {
      title: 'Art. 8 — Service et support',
      blocks: [
        { kind: 'h3', text: '8.1 — Disponibilité' },
        {
          kind: 'p',
          text: "Le Vendeur s'efforce d'assurer la disponibilité de la Plateforme 24h/24 et 7j/7. Aucun niveau de service garanti (SLA) n'est contractuellement engagé. Des interruptions peuvent survenir pour maintenance, mise à jour ou cas de force majeure, sans ouvrir droit à indemnisation.",
        },
        { kind: 'h3', text: '8.2 — Support' },
        {
          kind: 'p',
          text: `Le support est accessible par email à ${ADMIN}. Le Vendeur s'engage à apporter une réponse dans un délai de deux (2) jours ouvrés.`,
        },
      ],
    },
    {
      title: "Art. 9 — Cession de l'abonnement",
      blocks: [
        {
          kind: 'p',
          text: `L'abonnement est personnel et nominatif. Il ne peut être cédé ou partagé sans accord écrit préalable du Vendeur. En cas de cession d'activité, le transfert peut être envisagé sur demande à ${ADMIN}.`,
        },
      ],
    },
    {
      title: 'Art. 10 — Droit applicable et juridiction',
      blocks: [
        {
          kind: 'p',
          text: "Les présentes CGV sont régies par le droit suisse (Code des Obligations). Tout litige entre professionnels sera soumis au for exclusif du Tribunal d'arrondissement de La Côte (Nyon, canton de Vaud, Suisse).",
        },
        {
          kind: 'p',
          text: `Pour les Acheteurs résidant dans l'Union Européenne et agissant en qualité de consommateurs, les règles de compétence impératives du droit de l'UE s'appliquent. La plateforme de règlement en ligne des litiges de la Commission Européenne est accessible à : ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Dispositions finales',
      blocks: [
        { kind: 'h3', text: '11.1 — Prévalence des CGV' },
        {
          kind: 'p',
          text: 'En cas de contradiction entre les présentes CGV et tout autre document commercial, les présentes CGV prévalent, sauf accord écrit express du Vendeur.',
        },
        { kind: 'h3', text: '11.2 — Nullité partielle' },
        {
          kind: 'p',
          text: 'Si une clause est déclarée nulle ou inapplicable, les autres clauses demeurent pleinement en vigueur.',
        },
        { kind: 'h3', text: '11.3 — Archivage et contact' },
        {
          kind: 'p',
          text: `Les présentes CGV sont archivées par version et accessibles sur demande à ${ADMIN} — D.G.E. Concept SàRL, Arzier-Le Muids, canton de Vaud, Suisse.`,
        },
      ],
    },
  ],
};
