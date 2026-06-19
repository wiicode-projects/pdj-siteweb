export type Lang = 'fr' | 'en' | 'de' | 'it';

export interface AppTranslations {
  nav: {
    howItWorks: string;
    features: string;
    restaurants: string;
    pricing: string;
    testimonials: string;
    restaurantPortal: string;
    download: string;
  };
  hero: {
    badge: string;
    brandName: string;
    h1pre: string;
    h1post: string;
    subtitle: string;
    available: string;
    downloadOn: string;
    availableOn: string;
    popBadge: string;
    fresh: [string, string];
    fast: [string, string];
    reserve: string;
  };
  problem: {
    badge: string;
    h2: string;
    subtitle: string;
    col1: string;
    col2: string;
    tagline: [string, string];
    rows: Array<{ label: string; before: string; after: string }>;
  };
  mascot: {
    badge: string;
    h2: string;
    lead: string;
    subtitle: string;
    cards: Array<{ title: string; desc: string }>;
    cta: string;
    ctaRestaurant: string;
  };
  howItWorks: {
    badge: string;
    h2: string;
    subtitle: string;
    float: [string, string];
    steps: Array<{ title: string; desc: string }>;
  };
  features: {
    h2: string;
    subtitle: string;
    float: [string, string];
    items: Array<{ title: string; desc: string }>;
  };
  showcase: {
    badge: string;
    h2pre: string;
    h2highlight: string;
    subtitle: string;
    featureLabel: string;
    discover: string;
    features: Array<{
      title: string;
      subtitle: string;
      description: string;
      benefits: [string, string, string];
      stats: [{ value: string; label: string }, { value: string; label: string }];
    }>;
  };
  restaurants: {
    badge: string;
    h2: string;
    h2highlight: string;
    subtitle: string;
    cta: string;
    revenue: string;
    thisMonth: string;
    partnership: [string, string];
    steps: Array<{ title: string; desc: string }>;
  };
  pricing: {
    badge: string;
    h2: string;
    h2highlight: string;
    subtitle: string;
    noCommitment: string;
    axisUser: string;
    axisRestaurant: string;
    monthly: string;
    yearly: string;
    security: string;
    paymentMethodsTitle: string;
    freeBadge: string;
    premiumBadge: string;
    platinumBadge: string;
    ctaFree: string;
    ctaPremium: string;
    ctaPlatinum: string;
    perMonth: string;
    perYear: string;
    saveTwoMonths: string;
    featureLabels: {
      accessMenus: string;
      searchGeo: string;
      miniGamesWithAds: string;
      miniGames: string;
      noAds: string;
      favorites: string;
      backOffice: string;
      referral: string;
      idCardPremium: string;
      tombola: string;
      menusPerDay: string;
      imagesPerDish: string;
      profilePhotos: string;
      menuGift: string;
      highlighted: string;
      itinerant: string;
      multiEstablishment: string;
      extraEstablishment: string;
    };
  };
  testimonials: {
    h2: string;
    subtitle: string;
    prev: string;
    next: string;
    goTo: string;
    stats: Array<{ label: string }>;
  };
  faq: {
    h2: string;
    subtitle: string;
    noAnswer: string;
    contact: string;
    items: Array<{ q: string; a: string }>;
  };
  download: {
    h2: string;
    h2highlight: string;
    subtitle: string;
    downloadOn: string;
    availableOn: string;
    found: string;
    country: string;
  };
  tombola: {
    pageTitle: string;
    subtitle: string;
    rank_first: string;
    rank_second: string;
    rank_third: string;
    history_empty: string;
    winner_pending: string;
    drawn_at: string;
    cta_download: string;
    load_error: string;
    retry: string;
    prize_label: string;
    winner_label: string;
    draw_label: string;
    view_prize: string;
    close: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    contactTitle: string;
    contactDesc: string;
    help: string;
    contactSupport: string;
    terms: string;
    privacy: string;
    legalNotice: string;
    allRights: string;
    credits: string;
    links: { howItWorks: string; testimonials: string; download: string; tombola: string };
  };
}

// ─── FRANÇAIS ───────────────────────────────────────────────────────────────
const fr: AppTranslations = {
  nav: {
    howItWorks: 'Comment ça marche',
    features: 'Fonctionnalités',
    restaurants: 'Restaurants',
    pricing: 'Tarifs',
    testimonials: 'Témoignages',
    restaurantPortal: 'Espace restaurateur',
    download: "Télécharger l'app",
  },
  hero: {
    badge: "Déjà adopté par des milliers d'utilisateurs !",
    brandName: 'Le Plat du Jour',
    h1pre: 'Le',
    h1post: 'juste à côté.',
    subtitle: "Fini l'indécision du midi. Découvrez les menus du jour en temps réel et réservez votre table en un clin d'œil.",
    available: 'Disponible sur iOS & Android',
    downloadOn: 'Télécharger sur',
    availableOn: 'Disponible sur',
    popBadge: '🔥 Populaire',
    fresh: ['Cuisine Fraîche', 'Produits locaux'],
    fast: ['Prêt en 20 min', 'Service rapide'],
    reserve: 'Réserver',
  },
  problem: {
    badge: 'PROBLÈME → SOLUTION',
    h2: 'Vous ne savez jamais quoi manger ?',
    subtitle: 'En quelques secondes, Le Plat du Jour vous aide à trouver un menu dispo près de vous — sans appels, sans recherches, sans surprise.',
    col1: 'Critère',
    col2: 'Le casse-tête',
    tagline: ['Trouvez. Choisissez. Savourez.', "Passez de l'hésitation à la décision en quelques instants."],
    rows: [
      { label: 'Recherche', before: 'Vous naviguez entre Google, réseaux sociaux et appels.', after: 'Une seule app, tous les menus autour de vous.' },
      { label: 'Temps', before: '10–20 min perdues chaque midi à hésiter.', after: "Choix rapide en moins d'une minute." },
      { label: 'Infos', before: 'Menus incomplets, parfois introuvables en ligne.', after: 'Menus mis à jour en temps réel par les restaurants.' },
      { label: 'Prix', before: 'Vous découvrez le prix une fois sur place.', after: 'Prix affichés avant de vous déplacer.' },
      { label: 'Réservation', before: 'Appels, attente, pas de réponse pendant le rush.', after: 'Réservez ou commandez en quelques clics.' },
      { label: 'Découverte', before: 'Vous retombez souvent sur les mêmes adresses.', after: 'Découvrez de nouveaux restaurants près de vous.' },
    ],
  },
  mascot: {
    badge: 'Votre compagnon repas',
    h2: 'Que vais-je manger ce midi ?',
    lead: 'Mangez mieux, sans chercher.',
    subtitle: "Le Plat du Jour trouve les meilleurs menus du jour autour de vous. Rapide, local et sans prise de tête.",
    cards: [
      { title: 'Recherche localisée', desc: 'Tous les menus disponibles autour de vous, en temps réel.' },
      { title: 'Choix simplifié', desc: 'Photos, prix et description pour décider en quelques secondes.' },
      { title: 'Réservation rapide', desc: "Réservez votre table directement depuis l'app, en un clic." },
      { title: 'Nouvelles découvertes', desc: 'Explorez de nouveaux restaurants et menus chaque jour.' },
    ],
    cta: "Télécharger l'app",
    ctaRestaurant: 'Je suis restaurateur',
  },
  howItWorks: {
    badge: 'COMMENT ÇA MARCHE',
    h2: 'Comment ça marche ?',
    subtitle: 'Trois étapes pour passer de la recherche au plaisir.',
    float: ['Simple & Rapide', '3 clics suffisent'],
    steps: [
      { title: 'Recherchez autour de vous', desc: "Activez la géolocalisation pour voir instantanément les restaurants avec un plat du jour à proximité." },
      { title: 'Découvrez les menus', desc: "Consultez les photos, descriptions et prix des plats disponibles aujourd'hui." },
      { title: 'Réservez ou commandez', desc: "Réservez votre table ou passez commande directement via l'application." },
    ],
  },
  features: {
    h2: 'Fonctionnalités Clés',
    subtitle: 'Tout ce dont vous avez besoin pour bien manger.',
    float: ['Coup de cœur', 'Sauvegardez vos favoris'],
    items: [
      { title: 'Recherche Localisée', desc: 'Trouvez les plats disponibles dans un rayon précis autour de vous.' },
      { title: 'Réservation en ligne', desc: "Réservez votre table directement depuis l'application." },
      { title: 'Favoris', desc: 'Sauvegardez vos restaurants et plats préférés en un clic.' },
      { title: 'Notifications', desc: 'Soyez alerté dès que votre restaurant favori publie son menu.' },
    ],
  },
  showcase: {
    badge: 'Fonctionnalités',
    h2pre: "Tout ce qu'il faut pour",
    h2highlight: 'découvrir, choisir, profiter',
    subtitle: 'Une expérience simple côté utilisateur, et des outils efficaces côté restaurant.',
    featureLabel: 'Fonctionnalité',
    discover: "Découvrir l'app",
    features: [
      {
        title: "Découvrir le plat du jour",
        subtitle: "Accueil & suggestions autour de vous",
        description: "Accédez rapidement aux plats disponibles, repérez les bonnes adresses et explorez les menus du jour sans perdre de temps.",
        benefits: ['Interface claire et rapide', 'Plats du jour géolocalisés, mis à jour en direct', "Pensé pour l'utilisateur et le restaurant"],
        stats: [{ value: "Rapide", label: "Découverte" }, { value: "Local", label: "Autour de vous" }],
      },
      {
        title: "Espace restaurant",
        subtitle: "Dashboard & performance",
        description: "Un tableau de bord simple pour suivre vos performances, gérer vos contenus et gagner du temps au quotidien.",
        benefits: ['Interface lisible, données en un coup d\'œil', 'Suivi des ventes et de la fréquentation en temps réel', 'Pensé pour le restaurateur, sans expertise technique'],
        stats: [{ value: "Stats", label: "Claires" }, { value: "Gestion", label: "Centralisée" }],
      },
      {
        title: "Onboarding fluide",
        subtitle: "Présentation en quelques écrans",
        description: "Une prise en main rapide : l'utilisateur comprend l'app en quelques secondes et passe à l'action immédiatement.",
        benefits: ['Interface guidée, écran par écran', 'Prise en main en moins d\'une minute', 'Pensé pour convertir dès le premier lancement'],
        stats: [{ value: "< 1 min", label: "Compréhension" }, { value: "Simple", label: "Expérience" }],
      },
      {
        title: "Recherche & filtres",
        subtitle: "Trouver vite, choisir mieux",
        description: "Recherchez un restaurant, un plat ou une catégorie. Filtrez pour trouver exactement ce que vous voulez, au bon moment.",
        benefits: ['Interface de recherche instantanée', 'Filtres précis : cuisine, distance, budget, disponibilité', 'Pensé pour décider en quelques secondes'],
        stats: [{ value: "Smart", label: "Recherche" }, { value: "Pertinent", label: "Résultats" }],
      },
      {
        title: "Parrainage & récompenses",
        subtitle: "Invitez, cumulez, profitez",
        description: "Partagez votre lien et progressez vers des récompenses. Un système simple qui motive et fidélise.",
        benefits: ['Interface de suivi des gains transparente', 'Points cumulés et crédités automatiquement', 'Pensé pour fidéliser sur la durée'],
        stats: [{ value: "Bonus", label: "Récompenses" }, { value: "Fun", label: "Challenge" }],
      },
      {
        title: "Carte & ID Premium",
        subtitle: "Accès & avantages en un scan",
        description: "Une carte premium claire avec QR Code et informations utiles, pour profiter d'avantages et d'offres exclusives.",
        benefits: ['Interface carte digitale, toujours accessible', 'Avantages activés en un seul scan, sans contact', 'Pensé pour la rapidité en établissement'],
        stats: [{ value: "QR", label: "Scan rapide" }, { value: "Premium", label: "Avantages" }],
      },
      {
        title: "Restaurants & menus",
        subtitle: "Vue riche, infos utiles",
        description: "Photos, menus, badges premium/cadeau, et infos clés : tout est présenté pour vous aider à décider rapidement.",
        benefits: ['Interface visuelle : photos, menus, prix détaillés', 'Infos pratiques à jour : horaires, contact, accès', 'Pensé pour choisir en confiance'],
        stats: [{ value: "Menus", label: "À jour" }, { value: "Infos", label: "Claires" }],
      },
      {
        title: "Réservation",
        subtitle: "Réservez en un clic",
        description: "Réservez facilement, sans friction. Une action simple et rapide pour transformer la découverte en visite.",
        benefits: ['Interface de réservation en quelques clics', 'Confirmation immédiate, sans appel ni attente', "Pensé pour l'utilisateur et le restaurateur"],
        stats: [{ value: "1 clic", label: "Réserver" }, { value: "Direct", label: "Action" }],
      },
    ],
  },
  restaurants: {
    badge: 'Espace Restaurateurs',
    h2: 'Devenons partenaires de votre',
    h2highlight: 'succès',
    subtitle: 'Ne laissez plus vos tables vides. Notre plateforme connecte votre savoir-faire culinaire à une communauté locale affamée et fidèle.',
    cta: 'Devenir partenaire',
    revenue: 'REVENUS',
    thisMonth: 'ce mois-ci',
    partnership: ['Partenariat Gagnant', 'Rejoignez +200 restaurateurs heureux'],
    steps: [
      { title: 'Créez votre profil', desc: 'Mettez en valeur votre établissement avec de belles photos.' },
      { title: 'Publiez en un clic', desc: 'Une interface simplifiée pour ajouter votre menu du jour en 30 secondes.' },
      { title: 'Développez votre clientèle', desc: 'Attirez les travailleurs et résidents locaux automatiquement.' },
    ],
  },
  pricing: {
    badge: 'Fonctionnalités & Tarifs',
    h2: 'Choisissez la formule',
    h2highlight: 'adaptée',
    subtitle: 'Une offre simple côté utilisateur, et des outils puissants côté restaurant.',
    noCommitment: 'Sans engagement • Annulez quand vous voulez',
    axisUser: 'Utilisateur',
    axisRestaurant: 'Restaurant',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    security: 'Paiement sécurisé • Support réactif • Résiliation en 1 clic',
    paymentMethodsTitle: 'Moyens de paiement acceptés',
    freeBadge: 'Gratuit',
    premiumBadge: 'Premium',
    platinumBadge: 'Platinum',
    ctaFree: 'Commencer gratuitement',
    ctaPremium: 'Passer en Premium',
    ctaPlatinum: 'Choisir Platinum',
    perMonth: '/ mois',
    perYear: '/ an',
    saveTwoMonths: 'Économisez 2 mois',
    featureLabels: {
      accessMenus: 'Accès menus & profils',
      searchGeo: 'Recherche & géo',
      miniGamesWithAds: 'Mini-jeux avec publicité',
      miniGames: 'Mini-jeux',
      noAds: 'Sans publicité',
      favorites: 'Favoris avancés',
      backOffice: 'Back-office complet',
      referral: 'Parrainage via code',
      idCardPremium: 'IDCard premium',
      tombola: 'Participation aux tirages',
      menusPerDay: '{{count}} menus / jour',
      imagesPerDish: '{{count}} images / plat',
      profilePhotos: '{{count}} photos profil',
      menuGift: 'Cadeaux promotionnels',
      highlighted: 'Profil mis en avant',
      itinerant: 'Gestion emplacements itinérants',
      multiEstablishment: "Jusqu'à {{count}} établissements",
      extraEstablishment: '+5 CHF / établissement supplémentaire',
    },
  },
  testimonials: {
    h2: 'La communauté adore',
    subtitle: "Des milliers d'utilisateurs et restaurateurs satisfaits",
    prev: 'Précédent',
    next: 'Suivant',
    goTo: 'Aller au témoignage',
    stats: [
      { label: 'Téléchargements' },
      { label: 'Restaurants' },
      { label: 'Menus servis' },
      { label: 'Note moyenne' },
    ],
  },
  faq: {
    h2: 'Questions fréquentes',
    subtitle: 'Tout ce que vous devez savoir sur Le Plat du Jour',
    noAnswer: 'Vous ne trouvez pas la réponse à votre question ?',
    contact: 'Contactez notre support',
    items: [
      { q: "L'application est-elle gratuite ?", a: "Oui, l'application de base est 100% gratuite pour les utilisateurs. Vous pouvez consulter les menus, lire les avis et rechercher des restaurants sans aucun frais. Un abonnement Premium offre des fonctionnalités avancées." },
      { q: 'Où est disponible Le Plat du Jour ?', a: 'Nous sommes disponibles dans plusieurs villes et en pleine expansion. De nouvelles zones sont ajoutées régulièrement en fonction des restaurants partenaires.' },
      { q: 'Comment les restaurants publient-ils leurs menus ?', a: "Les restaurants publient via un espace dédié : photo + description + prix, en quelques secondes. Le menu est ensuite visible instantanément dans l'app." },
      { q: 'Puis-je réserver une table ?', a: "Oui, si le restaurant partenaire a activé les réservations. Vous recevez une confirmation immédiate. Les utilisateurs Premium peuvent bénéficier d'avantages selon les restaurants." },
      { q: 'Dois-je créer un compte ?', a: "Non pour consulter. Un compte (gratuit) est nécessaire pour réserver, mettre en favoris ou laisser un avis. L'inscription est rapide." },
      { q: 'Comment sont vérifiés les plats du jour ?', a: 'Les plats sont publiés directement par les restaurants. Notre système détecte les menus obsolètes et relance automatiquement les mises à jour.' },
      { q: 'Puis-je filtrer selon mes préférences alimentaires ?', a: 'Oui : cuisine, budget, distance, et préférences alimentaires (végétarien, végan, halal, sans gluten, etc.). Les filtres Premium peuvent aller plus loin.' },
      { q: 'Comment devenir restaurant partenaire ?', a: "Dans la section Restaurants, remplissez le formulaire. L'équipe vous recontacte pour activer votre profil et vous accompagner dans la mise en ligne." },
      { q: "L'app fonctionne-t-elle hors connexion ?", a: 'Le mode gratuit nécessite internet. Le Premium peut proposer un mode hors-ligne (favoris + derniers menus consultés) selon les options activées.' },
      { q: 'Comment signaler un problème ?', a: 'Vous pouvez signaler depuis une fiche restaurant ou nous contacter via le support. On répond rapidement, et le Premium peut avoir un support prioritaire.' },
    ],
  },
  download: {
    h2: 'Toute la ville',
    h2highlight: 'dans votre poche.',
    subtitle: "De Berne à Zurich, trouvez les pépites culinaires autour de vous. Téléchargez Le Plat du Jour et commencez l'exploration.",
    downloadOn: 'Télécharger sur',
    availableOn: 'Disponible sur',
    found: '10 restaurants trouvés',
    country: 'Suisse',
  },
  tombola: {
    pageTitle: 'Gagnants de la tombola',
    subtitle: 'Chaque mois, des participants de l\'app Le Plat du Jour tentent leur chance. Retrouvez ici les tirages passés et leurs gagnants.',
    rank_first: '1er prix',
    rank_second: '2e prix',
    rank_third: '3e prix',
    history_empty: 'Aucun tirage pour le moment. Revenez bientôt !',
    winner_pending: 'Pseudo en attente',
    drawn_at: 'Tirage le',
    cta_download: 'Participez au prochain tirage en téléchargeant l\'application.',
    load_error: 'Impossible de charger l\'historique. Veuillez réessayer.',
    retry: 'Réessayer',
    prize_label: 'Prix',
    winner_label: 'Gagnant',
    draw_label: 'Tirage',
    view_prize: 'Voir le détail du prix',
    close: 'Fermer',
  },
  footer: {
    tagline: 'La meilleure façon de découvrir les menus du jour autour de vous. Simple, rapide et gourmand.',
    quickLinks: 'Liens Rapides',
    legal: 'Légal',
    contactTitle: 'Contactez-nous',
    contactDesc: 'Une question ? Écrivez-nous.',
    help: "Besoin d'aide ?",
    contactSupport: 'Contactez le support',
    terms: 'CGU',
    privacy: 'Politique de confidentialité',
    legalNotice: 'Mentions légales',
    allRights: 'Tous droits réservés.',
    credits: 'Concept & Développement : D.G.E. Concept SàRL & WIICODE',
    links: { howItWorks: 'Comment ça marche', testimonials: 'Témoignages', download: "Télécharger l'app", tombola: 'Gagnants tombola' },
  },
};

// ─── ENGLISH ─────────────────────────────────────────────────────────────────
const en: AppTranslations = {
  nav: {
    howItWorks: 'How It Works',
    features: 'Features',
    restaurants: 'Restaurants',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    restaurantPortal: 'Restaurant portal',
    download: 'Download the app',
  },
  hero: {
    badge: 'Already loved by thousands of users!',
    brandName: 'Le Plat du Jour',
    h1pre: 'The',
    h1post: 'right around the corner.',
    subtitle: "No more lunchtime indecision. Discover today's menus in real time and book your table in a flash.",
    available: 'Available on iOS & Android',
    downloadOn: 'Download on',
    availableOn: 'Get it on',
    popBadge: '🔥 Popular',
    fresh: ['Fresh Cuisine', 'Local produce'],
    fast: ['Ready in 20 min', 'Fast service'],
    reserve: 'Book',
  },
  problem: {
    badge: 'PROBLEM → SOLUTION',
    h2: "Don't know what to eat?",
    subtitle: 'In seconds, Le Plat du Jour helps you find an available menu near you — no calls, no searching, no surprises.',
    col1: 'Topic',
    col2: 'The headache',
    tagline: ['Find it. Choose it. Enjoy it.', 'Go from hesitation to decision in moments.'],
    rows: [
      { label: 'Search', before: 'You browse Google, social media and make calls.', after: 'One app, all menus around you.' },
      { label: 'Time', before: '10–20 min wasted every lunch deciding.', after: 'Quick choice in under a minute.' },
      { label: 'Info', before: 'Incomplete menus, sometimes impossible to find.', after: 'Menus updated in real time by restaurants.' },
      { label: 'Price', before: 'You find out the price only when you arrive.', after: 'Prices shown before you leave.' },
      { label: 'Booking', before: 'Calls, hold, no answer during the rush.', after: 'Reserve or order in a few clicks.' },
      { label: 'Discovery', before: 'You keep going back to the same places.', after: 'Discover new restaurants near you.' },
    ],
  },
  mascot: {
    badge: 'Your meal companion',
    h2: 'What will I eat for lunch?',
    lead: 'Eat better, without searching.',
    subtitle: "Le Plat du Jour finds the best daily specials around you. Fast, local and hassle-free.",
    cards: [
      { title: 'Local search', desc: 'All available menus around you, in real time.' },
      { title: 'Easy choice', desc: 'Photos, prices and descriptions to decide in seconds.' },
      { title: 'Quick booking', desc: 'Book your table directly from the app, in one tap.' },
      { title: 'New discoveries', desc: 'Explore new restaurants and menus every day.' },
    ],
    cta: 'Download the app',
    ctaRestaurant: "I'm a restaurant owner",
  },
  howItWorks: {
    badge: 'HOW IT WORKS',
    h2: 'How does it work?',
    subtitle: 'Three steps from searching to savoring.',
    float: ['Simple & Fast', '3 clicks is all it takes'],
    steps: [
      { title: 'Search around you', desc: 'Enable location to instantly see restaurants with a daily special nearby.' },
      { title: 'Explore the menus', desc: "Browse photos, descriptions and prices of today's available dishes." },
      { title: 'Book or order', desc: 'Reserve your table or place an order directly through the app.' },
    ],
  },
  features: {
    h2: 'Key Features',
    subtitle: 'Everything you need to eat well.',
    float: ['Favourite', 'Save your favourites'],
    items: [
      { title: 'Local Search', desc: 'Find available dishes within a precise radius around you.' },
      { title: 'Online Booking', desc: 'Book your table directly from the app.' },
      { title: 'Favourites', desc: 'Save your favourite restaurants and dishes in one tap.' },
      { title: 'Notifications', desc: "Get alerted as soon as your favourite restaurant posts today's menu." },
    ],
  },
  showcase: {
    badge: 'Features',
    h2pre: 'Everything you need to',
    h2highlight: 'discover, choose, enjoy',
    subtitle: 'A simple experience for users, and powerful tools for restaurants.',
    featureLabel: 'Feature',
    discover: 'Explore the app',
    features: [
      {
        title: "Discover today's special",
        subtitle: "Home & suggestions near you",
        description: "Quickly access available dishes, spot the best spots and browse today's menus without wasting time.",
        benefits: ['Clean and fast interface', 'Geolocated daily specials, updated live', 'Designed for users and restaurants'],
        stats: [{ value: "Fast", label: "Discovery" }, { value: "Local", label: "Near you" }],
      },
      {
        title: "Restaurant space",
        subtitle: "Dashboard & performance",
        description: "A simple dashboard to track your performance, manage your content and save time every day.",
        benefits: ['Readable interface, data at a glance', 'Real-time sales and footfall tracking', 'Designed for restaurateurs, no technical expertise needed'],
        stats: [{ value: "Stats", label: "Clear" }, { value: "Manage", label: "Centralised" }],
      },
      {
        title: "Smooth onboarding",
        subtitle: "Introduction in a few screens",
        description: "Quick to get started: users understand the app in seconds and take action immediately.",
        benefits: ['Guided interface, screen by screen', 'Up and running in under a minute', 'Designed to convert from first launch'],
        stats: [{ value: "< 1 min", label: "To understand" }, { value: "Simple", label: "Experience" }],
      },
      {
        title: "Search & filters",
        subtitle: "Find fast, choose better",
        description: "Search a restaurant, dish or category. Filter to find exactly what you want, at the right time.",
        benefits: ['Instant search interface', 'Precise filters: cuisine, distance, budget, availability', 'Designed to decide in seconds'],
        stats: [{ value: "Smart", label: "Search" }, { value: "Relevant", label: "Results" }],
      },
      {
        title: "Referral & rewards",
        subtitle: "Invite, earn, enjoy",
        description: "Share your link and progress towards rewards. A simple system that motivates and builds loyalty.",
        benefits: ['Transparent earnings tracking interface', 'Points accumulated and credited automatically', 'Designed for long-term loyalty'],
        stats: [{ value: "Bonus", label: "Rewards" }, { value: "Fun", label: "Challenge" }],
      },
      {
        title: "Premium card & ID",
        subtitle: "Access & perks in one scan",
        description: "A clear premium card with QR Code and useful information, to enjoy exclusive offers and benefits.",
        benefits: ['Digital card interface, always accessible', 'Perks activated in one contactless scan', 'Designed for speed on-site'],
        stats: [{ value: "QR", label: "Quick scan" }, { value: "Premium", label: "Perks" }],
      },
      {
        title: "Restaurants & menus",
        subtitle: "Rich view, useful info",
        description: "Photos, menus, premium/gift badges and key info: everything is presented to help you decide fast.",
        benefits: ['Visual interface: photos, menus, detailed prices', 'Up-to-date practical info: hours, contact, access', 'Designed to choose with confidence'],
        stats: [{ value: "Menus", label: "Up to date" }, { value: "Info", label: "Clear" }],
      },
      {
        title: "Booking",
        subtitle: "Book in one click",
        description: "Book easily, without friction. A simple and fast action to turn discovery into a visit.",
        benefits: ['Booking interface in a few clicks', 'Instant confirmation, no call or waiting', 'Designed for users and restaurateurs'],
        stats: [{ value: "1 click", label: "Book" }, { value: "Direct", label: "Action" }],
      },
    ],
  },
  restaurants: {
    badge: 'For Restaurant Owners',
    h2: "Let's become partners in your",
    h2highlight: 'success',
    subtitle: "Don't leave your tables empty. Our platform connects your culinary expertise to a hungry and loyal local community.",
    cta: 'Become a partner',
    revenue: 'REVENUE',
    thisMonth: 'this month',
    partnership: ['Winning Partnership', 'Join 200+ happy restaurant owners'],
    steps: [
      { title: 'Create your profile', desc: 'Showcase your establishment with beautiful photos.' },
      { title: 'Publish in one click', desc: "A simplified interface to add your daily special in 30 seconds." },
      { title: 'Grow your clientele', desc: 'Attract local workers and residents automatically.' },
    ],
  },
  pricing: {
    badge: 'Features & Pricing',
    h2: 'Choose the plan',
    h2highlight: 'that suits you',
    subtitle: 'A simple offer for users, and powerful tools for restaurants.',
    noCommitment: 'No commitment • Cancel anytime',
    axisUser: 'User',
    axisRestaurant: 'Restaurant',
    monthly: 'Monthly',
    yearly: 'Yearly',
    security: 'Secure payment • Responsive support • Cancel in 1 click',
    paymentMethodsTitle: 'Accepted payment methods',
    freeBadge: 'Free',
    premiumBadge: 'Premium',
    platinumBadge: 'Platinum',
    ctaFree: 'Start for free',
    ctaPremium: 'Go Premium',
    ctaPlatinum: 'Choose Platinum',
    perMonth: '/ month',
    perYear: '/ year',
    saveTwoMonths: 'Save 2 months',
    featureLabels: {
      accessMenus: 'Menu & profile access',
      searchGeo: 'Search & geolocation',
      miniGamesWithAds: 'Mini-games with ads',
      miniGames: 'Mini-games',
      noAds: 'Ad-free',
      favorites: 'Advanced favourites',
      backOffice: 'Full back-office',
      referral: 'Referral via code',
      idCardPremium: 'Premium IDCard',
      tombola: 'Prize draw participation',
      menusPerDay: '{{count}} menus / day',
      imagesPerDish: '{{count}} images / dish',
      profilePhotos: '{{count}} profile photos',
      menuGift: 'Promotional gifts',
      highlighted: 'Featured profile',
      itinerant: 'Mobile location management',
      multiEstablishment: 'Up to {{count}} establishments',
      extraEstablishment: '+CHF 5 / additional establishment',
    },
  },
  testimonials: {
    h2: 'The community loves it',
    subtitle: 'Thousands of satisfied users and restaurant owners',
    prev: 'Previous',
    next: 'Next',
    goTo: 'Go to testimonial',
    stats: [
      { label: 'Downloads' },
      { label: 'Restaurants' },
      { label: 'Menus served' },
      { label: 'Average rating' },
    ],
  },
  faq: {
    h2: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about Le Plat du Jour',
    noAnswer: "Can't find the answer to your question?",
    contact: 'Contact our support',
    items: [
      { q: 'Is the app free?', a: 'Yes, the basic app is 100% free for users. You can browse menus, read reviews and search for restaurants at no cost. A Premium subscription offers advanced features.' },
      { q: 'Where is Le Plat du Jour available?', a: 'We are available in several cities and expanding. New areas are added regularly as partner restaurants join.' },
      { q: 'How do restaurants publish their menus?', a: 'Restaurants publish via a dedicated space: photo + description + price, in seconds. The menu is then instantly visible in the app.' },
      { q: 'Can I book a table?', a: 'Yes, if the partner restaurant has enabled bookings. You receive immediate confirmation. Premium users may benefit from perks depending on the restaurant.' },
      { q: 'Do I need to create an account?', a: 'Not to browse. A (free) account is needed to book, save favourites or leave a review. Registration is quick.' },
      { q: 'How are daily specials verified?', a: 'Dishes are published directly by restaurants. Our system detects outdated menus and automatically prompts updates.' },
      { q: 'Can I filter by dietary preferences?', a: 'Yes: cuisine type, budget, distance, and dietary preferences (vegetarian, vegan, halal, gluten-free, etc.). Premium filters can go further.' },
      { q: 'How do I become a partner restaurant?', a: 'In the Restaurants section, fill in the form. The team will contact you to activate your profile and help you get online.' },
      { q: 'Does the app work offline?', a: 'The free mode requires internet. Premium can offer an offline mode (favourites + last viewed menus) depending on options enabled.' },
      { q: 'How do I report a problem?', a: 'You can report from a restaurant listing or contact us via support. We respond quickly, and Premium users may have priority support.' },
    ],
  },
  download: {
    h2: 'The whole city',
    h2highlight: 'in your pocket.',
    subtitle: 'From Bern to Zurich, discover culinary gems around you. Download Le Plat du Jour and start exploring.',
    downloadOn: 'Download on',
    availableOn: 'Get it on',
    found: '10 restaurants found',
    country: 'Switzerland',
  },
  tombola: {
    pageTitle: 'Tombola winners',
    subtitle: 'Every month, Le Plat du Jour app users take part in a draw. Browse past draws and their winners here.',
    rank_first: '1st prize',
    rank_second: '2nd prize',
    rank_third: '3rd prize',
    history_empty: 'No draws yet. Check back soon!',
    winner_pending: 'Username pending',
    drawn_at: 'Drawn on',
    cta_download: 'Join the next draw by downloading the app.',
    load_error: 'Could not load history. Please try again.',
    retry: 'Retry',
    prize_label: 'Prize',
    winner_label: 'Winner',
    draw_label: 'Draw',
    view_prize: 'View prize details',
    close: 'Close',
  },
  footer: {
    tagline: 'The best way to discover daily menus around you. Simple, fast and delicious.',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    contactTitle: 'Contact Us',
    contactDesc: 'Have a question? Write to us.',
    help: 'Need help?',
    contactSupport: 'Contact support',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
    legalNotice: 'Legal Notice',
    allRights: 'All rights reserved.',
    credits: 'Concept & Development: D.G.E. Concept SàRL & WIICODE',
    links: { howItWorks: 'How It Works', testimonials: 'Testimonials', download: 'Download the app', tombola: 'Tombola winners' },
  },
};

// ─── DEUTSCH ─────────────────────────────────────────────────────────────────
const de: AppTranslations = {
  nav: {
    howItWorks: 'So funktioniert es',
    features: 'Funktionen',
    restaurants: 'Restaurants',
    pricing: 'Preise',
    testimonials: 'Bewertungen',
    restaurantPortal: 'Restaurant-Portal',
    download: 'App herunterladen',
  },
  hero: {
    badge: 'Bereits von Tausenden genutzt!',
    brandName: 'Le Plat du Jour',
    h1pre: 'Das',
    h1post: 'gleich um die Ecke.',
    subtitle: 'Kein Mittagsstress mehr. Entdecke die Tagesmenüs in Echtzeit und reserviere deinen Tisch im Handumdrehen.',
    available: 'Verfügbar für iOS & Android',
    downloadOn: 'Laden bei',
    availableOn: 'Jetzt bei',
    popBadge: '🔥 Beliebt',
    fresh: ['Frische Küche', 'Lokale Produkte'],
    fast: ['In 20 Min bereit', 'Schneller Service'],
    reserve: 'Reservieren',
  },
  problem: {
    badge: 'PROBLEM → LÖSUNG',
    h2: 'Weißt du nie, was du essen sollst?',
    subtitle: 'In Sekunden hilft dir Le Plat du Jour, ein verfügbares Menü in deiner Nähe zu finden — ohne Anrufe, ohne Suchen, ohne Überraschungen.',
    col1: 'Thema',
    col2: 'Das Problem',
    tagline: ['Finden. Wählen. Genießen.', 'Von der Unentschlossenheit zur Entscheidung in Momenten.'],
    rows: [
      { label: 'Suche', before: 'Du durchsuchst Google, Social Media und rufst an.', after: 'Eine App, alle Menüs in deiner Nähe.' },
      { label: 'Zeit', before: '10–20 Min täglich beim Mittagessen verloren.', after: 'Schnelle Wahl in unter einer Minute.' },
      { label: 'Infos', before: 'Unvollständige Menüs, manchmal gar nicht online.', after: 'Menüs in Echtzeit von Restaurants aktualisiert.' },
      { label: 'Preis', before: 'Den Preis erfährst du erst vor Ort.', after: 'Preise angezeigt, bevor du losgehst.' },
      { label: 'Reservierung', before: 'Anrufe, Warten, keine Antwort im Trubel.', after: 'In wenigen Klicks reservieren oder bestellen.' },
      { label: 'Entdeckung', before: 'Du gehst immer wieder zu denselben Adressen.', after: 'Entdecke neue Restaurants in deiner Nähe.' },
    ],
  },
  mascot: {
    badge: 'Dein Essensbegleiter',
    h2: 'Was esse ich heute Mittag?',
    lead: 'Besser essen, ohne zu suchen.',
    subtitle: "Le Plat du Jour findet die besten Tagesmenüs in deiner Nähe. Schnell, lokal und unkompliziert.",
    cards: [
      { title: 'Lokale Suche', desc: 'Alle verfügbaren Menüs in deiner Nähe, in Echtzeit.' },
      { title: 'Einfache Wahl', desc: 'Fotos, Preise und Beschreibung, um in Sekunden zu entscheiden.' },
      { title: 'Schnelle Reservierung', desc: 'Reserviere deinen Tisch direkt in der App, mit einem Klick.' },
      { title: 'Neue Entdeckungen', desc: 'Entdecke jeden Tag neue Restaurants und Menüs.' },
    ],
    cta: 'App herunterladen',
    ctaRestaurant: 'Ich bin Restaurantbetreiber',
  },
  howItWorks: {
    badge: 'SO FUNKTIONIERT ES',
    h2: 'Wie funktioniert es?',
    subtitle: 'Drei Schritte von der Suche zum Genuss.',
    float: ['Einfach & Schnell', '3 Klicks reichen'],
    steps: [
      { title: 'In deiner Umgebung suchen', desc: 'Aktiviere den Standort, um sofort Restaurants mit Tagesmenü in der Nähe zu sehen.' },
      { title: 'Menüs entdecken', desc: 'Fotos, Beschreibungen und Preise der heute verfügbaren Gerichte ansehen.' },
      { title: 'Reservieren oder bestellen', desc: 'Reserviere deinen Tisch oder bestelle direkt über die App.' },
    ],
  },
  features: {
    h2: 'Hauptfunktionen',
    subtitle: 'Alles, was du brauchst, um gut zu essen.',
    float: ['Favorit', 'Speichere deine Lieblinge'],
    items: [
      { title: 'Lokale Suche', desc: 'Finde verfügbare Gerichte in einem genauen Radius um dich herum.' },
      { title: 'Online-Reservierung', desc: 'Reserviere deinen Tisch direkt aus der App.' },
      { title: 'Favoriten', desc: 'Speichere deine Lieblingsrestaurants und Gerichte mit einem Klick.' },
      { title: 'Benachrichtigungen', desc: 'Werde sofort benachrichtigt, wenn dein Lieblingsrestaurant sein Menü veröffentlicht.' },
    ],
  },
  showcase: {
    badge: 'Funktionen',
    h2pre: 'Alles, was du brauchst zum',
    h2highlight: 'Entdecken, Wählen, Genießen',
    subtitle: 'Ein einfaches Erlebnis für Nutzer und leistungsstarke Werkzeuge für Restaurants.',
    featureLabel: 'Funktion',
    discover: 'App entdecken',
    features: [
      { title: "Tagesmenü entdecken", subtitle: "Startseite & Vorschläge in deiner Nähe", description: "Schnell auf verfügbare Gerichte zugreifen, die besten Adressen finden und Tagesmenüs ohne Zeitverlust durchstöbern.", benefits: ['Klare und schnelle Oberfläche', 'Geolokalisierte Tagesmenüs, live aktualisiert', 'Für Nutzer und Restaurants gedacht'], stats: [{ value: "Schnell", label: "Entdeckung" }, { value: "Lokal", label: "In der Nähe" }] },
      { title: "Restaurant-Bereich", subtitle: "Dashboard & Performance", description: "Ein einfaches Dashboard, um deine Leistung zu verfolgen, Inhalte zu verwalten und täglich Zeit zu sparen.", benefits: ['Lesbare Oberfläche, Daten auf einen Blick', 'Echtzeit-Verkaufs- und Besuchertracking', 'Für Gastronomen gedacht, ohne technisches Know-how'], stats: [{ value: "Stats", label: "Klar" }, { value: "Verwaltung", label: "Zentral" }] },
      { title: "Flüssiges Onboarding", subtitle: "Einführung in wenigen Screens", description: "Schneller Einstieg: Nutzer verstehen die App in Sekunden und handeln sofort.", benefits: ['Geführte Oberfläche, Screen für Screen', 'In weniger als einer Minute startklar', 'Für Conversion ab dem ersten Start'], stats: [{ value: "< 1 Min", label: "Verstehen" }, { value: "Einfach", label: "Erlebnis" }] },
      { title: "Suche & Filter", subtitle: "Schnell finden, besser wählen", description: "Suche ein Restaurant, ein Gericht oder eine Kategorie. Filtere, um genau das zu finden, was du willst.", benefits: ['Sofortige Suchoberfläche', 'Präzise Filter: Küche, Entfernung, Budget, Verfügbarkeit', 'Für schnelle Entscheidungen'], stats: [{ value: "Smart", label: "Suche" }, { value: "Relevant", label: "Ergebnisse" }] },
      { title: "Empfehlung & Belohnungen", subtitle: "Einladen, sammeln, genießen", description: "Teile deinen Link und schreite Richtung Belohnungen voran. Ein einfaches System, das motiviert und bindet.", benefits: ['Transparente Gewinnübersicht', 'Punkte automatisch gesammelt und gutgeschrieben', 'Für langfristige Kundenbindung'], stats: [{ value: "Bonus", label: "Belohnungen" }, { value: "Spaß", label: "Challenge" }] },
      { title: "Premium-Karte & ID", subtitle: "Zugang & Vorteile per Scan", description: "Eine klare Premium-Karte mit QR-Code und nützlichen Informationen, um exklusive Angebote zu genießen.", benefits: ['Digitale Karte, immer verfügbar', 'Vorteile per Scan aktiviert, kontaktlos', 'Für schnelle Abläufe vor Ort'], stats: [{ value: "QR", label: "Schnell-Scan" }, { value: "Premium", label: "Vorteile" }] },
      { title: "Restaurants & Menüs", subtitle: "Reiche Ansicht, nützliche Infos", description: "Fotos, Menüs, Premium/Geschenk-Badges und wichtige Infos: alles präsentiert, damit du schnell entscheidest.", benefits: ['Visuelle Oberfläche: Fotos, Menüs, detaillierte Preise', 'Aktuelle Infos: Öffnungszeiten, Kontakt, Anfahrt', 'Für sichere Entscheidungen'], stats: [{ value: "Menüs", label: "Aktuell" }, { value: "Infos", label: "Klar" }] },
      { title: "Reservierung", subtitle: "In wenigen Klicks buchen", description: "Einfach reservieren, ohne Hürden. Eine schnelle Aktion, die Entdeckung in einen Besuch verwandelt.", benefits: ['Reservierung in wenigen Klicks', 'Sofortige Bestätigung, ohne Anruf oder Wartezeit', 'Für Nutzer und Gastronomen'], stats: [{ value: "1 Klick", label: "Reservieren" }, { value: "Direkt", label: "Aktion" }] },
    ],
  },
  restaurants: {
    badge: 'Für Restaurantbesitzer',
    h2: 'Werden wir Partner für Ihren',
    h2highlight: 'Erfolg',
    subtitle: 'Lassen Sie Ihre Tische nicht leer stehen. Unsere Plattform verbindet Ihr kulinarisches Know-how mit einer hungrigen und treuen lokalen Gemeinschaft.',
    cta: 'Partner werden',
    revenue: 'UMSATZ',
    thisMonth: 'diesen Monat',
    partnership: ['Gewinnende Partnerschaft', 'Schließen Sie sich 200+ glücklichen Restaurantbesitzern an'],
    steps: [
      { title: 'Profil erstellen', desc: 'Präsentieren Sie Ihr Lokal mit schönen Fotos.' },
      { title: 'Mit einem Klick veröffentlichen', desc: 'Eine vereinfachte Oberfläche, um Ihr Tagesmenü in 30 Sekunden hinzuzufügen.' },
      { title: 'Kundenstamm erweitern', desc: 'Gewinnen Sie automatisch lokale Arbeitnehmer und Anwohner als Kunden.' },
    ],
  },
  pricing: {
    badge: 'Funktionen & Preise',
    h2: 'Wählen Sie das Paket,',
    h2highlight: 'das zu Ihnen passt',
    subtitle: 'Ein einfaches Angebot für Nutzer und leistungsstarke Werkzeuge für Restaurants.',
    noCommitment: 'Keine Bindung • Jederzeit kündbar',
    axisUser: 'Nutzer',
    axisRestaurant: 'Restaurant',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    security: 'Sichere Zahlung • Reaktiver Support • Kündigung per Klick',
    paymentMethodsTitle: 'Akzeptierte Zahlungsmittel',
    freeBadge: 'Kostenlos',
    premiumBadge: 'Premium',
    platinumBadge: 'Platinum',
    ctaFree: 'Kostenlos starten',
    ctaPremium: 'Premium werden',
    ctaPlatinum: 'Platinum wählen',
    perMonth: '/ Monat',
    perYear: '/ Jahr',
    saveTwoMonths: '2 Monate sparen',
    featureLabels: {
      accessMenus: 'Menü- & Profilzugang',
      searchGeo: 'Suche & Geolokalisierung',
      miniGamesWithAds: 'Mini-Spiele mit Werbung',
      miniGames: 'Mini-Spiele',
      noAds: 'Werbefrei',
      favorites: 'Erweiterte Favoriten',
      backOffice: 'Vollständiges Back-Office',
      referral: 'Empfehlung per Code',
      idCardPremium: 'Premium IDCard',
      tombola: 'Teilnahme an Verlosungen',
      menusPerDay: '{{count}} Menüs / Tag',
      imagesPerDish: '{{count}} Bilder / Gericht',
      profilePhotos: '{{count}} Profilfotos',
      menuGift: 'Werbungsgeschenke',
      highlighted: 'Hervorgehobenes Profil',
      itinerant: 'Verwaltung mobiler Standorte',
      multiEstablishment: 'Bis zu {{count}} Betriebe',
      extraEstablishment: '+5 CHF / zusätzlicher Betrieb',
    },
  },
  testimonials: {
    h2: 'Die Community liebt es',
    subtitle: 'Tausende zufriedene Nutzer und Restaurantbesitzer',
    prev: 'Zurück',
    next: 'Weiter',
    goTo: 'Zum Erfahrungsbericht',
    stats: [
      { label: 'Downloads' },
      { label: 'Restaurants' },
      { label: 'Servierte Menüs' },
      { label: 'Durchschnittsbewertung' },
    ],
  },
  faq: {
    h2: 'Häufige Fragen',
    subtitle: 'Alles, was Sie über Le Plat du Jour wissen müssen',
    noAnswer: 'Keine Antwort auf Ihre Frage gefunden?',
    contact: 'Support kontaktieren',
    items: [
      { q: 'Ist die App kostenlos?', a: 'Ja, die Basis-App ist 100% kostenlos für Nutzer. Sie können Menüs durchsuchen, Bewertungen lesen und Restaurants suchen. Ein Premium-Abonnement bietet erweiterte Funktionen.' },
      { q: 'Wo ist Le Plat du Jour verfügbar?', a: 'Wir sind in mehreren Städten verfügbar und expandieren. Neue Bereiche werden regelmäßig hinzugefügt, sobald Partnerrestaurants beitreten.' },
      { q: 'Wie veröffentlichen Restaurants ihre Menüs?', a: 'Restaurants veröffentlichen über einen dedizierten Bereich: Foto + Beschreibung + Preis, in Sekunden. Das Menü ist dann sofort in der App sichtbar.' },
      { q: 'Kann ich einen Tisch reservieren?', a: 'Ja, wenn das Partnerrestaurant Reservierungen aktiviert hat. Sie erhalten eine sofortige Bestätigung.' },
      { q: 'Muss ich ein Konto erstellen?', a: 'Nein, um zu stöbern. Ein (kostenloses) Konto ist nötig, um zu reservieren, Favoriten zu setzen oder eine Bewertung zu hinterlassen.' },
      { q: 'Wie werden Tagesgerichte verifiziert?', a: 'Gerichte werden direkt von Restaurants veröffentlicht. Unser System erkennt veraltete Menüs und fordert automatisch Updates an.' },
      { q: 'Kann ich nach Ernährungspräferenzen filtern?', a: 'Ja: Küche, Budget, Entfernung und Ernährungspräferenzen (vegetarisch, vegan, halal, glutenfrei, usw.).' },
      { q: 'Wie werde ich Partnerrestaurant?', a: 'Im Bereich Restaurants das Formular ausfüllen. Das Team kontaktiert Sie, um Ihr Profil zu aktivieren.' },
      { q: 'Funktioniert die App offline?', a: 'Der kostenlose Modus benötigt Internet. Premium kann einen Offline-Modus anbieten (Favoriten + zuletzt angesehene Menüs).' },
      { q: 'Wie melde ich ein Problem?', a: 'Sie können von einem Restauranteintrag aus melden oder uns über den Support kontaktieren.' },
    ],
  },
  download: {
    h2: 'Die ganze Stadt',
    h2highlight: 'in Ihrer Tasche.',
    subtitle: 'Von Bern bis Zürich, entdecken Sie kulinarische Highlights in Ihrer Nähe. Laden Sie Le Plat du Jour herunter und beginnen Sie die Entdeckungstour.',
    downloadOn: 'Laden bei',
    availableOn: 'Jetzt bei',
    found: '10 Restaurants gefunden',
    country: 'Schweiz',
  },
  tombola: {
    pageTitle: 'Tombola-Gewinner',
    subtitle: 'Jeden Monat nehmen Nutzer der Le Plat du Jour App an einer Verlosung teil. Hier finden Sie vergangene Ziehungen und ihre Gewinner.',
    rank_first: '1. Preis',
    rank_second: '2. Preis',
    rank_third: '3. Preis',
    history_empty: 'Noch keine Ziehungen. Schauen Sie bald wieder vorbei!',
    winner_pending: 'Benutzername ausstehend',
    drawn_at: 'Gezogen am',
    cta_download: 'Nehmen Sie an der nächsten Ziehung teil — laden Sie die App herunter.',
    load_error: 'Verlauf konnte nicht geladen werden. Bitte erneut versuchen.',
    retry: 'Erneut versuchen',
    prize_label: 'Preis',
    winner_label: 'Gewinner',
    draw_label: 'Ziehung',
    view_prize: 'Preisdetails anzeigen',
    close: 'Schließen',
  },
  footer: {
    tagline: 'Der beste Weg, Tagesmenüs in Ihrer Nähe zu entdecken. Einfach, schnell und lecker.',
    quickLinks: 'Schnelllinks',
    legal: 'Rechtliches',
    contactTitle: 'Kontakt',
    contactDesc: 'Eine Frage? Schreiben Sie uns.',
    help: 'Hilfe benötigt?',
    contactSupport: 'Support kontaktieren',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutzerklärung',
    legalNotice: 'Impressum',
    allRights: 'Alle Rechte vorbehalten.',
    credits: 'Konzept & Entwicklung: D.G.E. Concept SàRL & WIICODE',
    links: { howItWorks: 'So funktioniert es', testimonials: 'Bewertungen', download: 'App herunterladen', tombola: 'Tombola-Gewinner' },
  },
};

// ─── ITALIANO ────────────────────────────────────────────────────────────────
const it: AppTranslations = {
  nav: {
    howItWorks: 'Come funziona',
    features: 'Funzionalità',
    restaurants: 'Ristoranti',
    pricing: 'Prezzi',
    testimonials: 'Recensioni',
    restaurantPortal: 'Area ristoratori',
    download: "Scarica l'app",
  },
  hero: {
    badge: 'Già amato da migliaia di utenti!',
    brandName: 'Le Plat du Jour',
    h1pre: 'Il',
    h1post: 'proprio qui vicino.',
    subtitle: "Basta indecisione a pranzo. Scopri i menu del giorno in tempo reale e prenota il tuo tavolo in un attimo.",
    available: 'Disponibile su iOS & Android',
    downloadOn: 'Scarica su',
    availableOn: 'Disponibile su',
    popBadge: '🔥 Popolare',
    fresh: ['Cucina Fresca', 'Prodotti locali'],
    fast: ['Pronto in 20 min', 'Servizio veloce'],
    reserve: 'Prenota',
  },
  problem: {
    badge: 'PROBLEMA → SOLUZIONE',
    h2: 'Non sai mai cosa mangiare?',
    subtitle: 'In pochi secondi, Le Plat du Jour ti aiuta a trovare un menu disponibile vicino a te — senza chiamate, senza ricerche, senza sorprese.',
    col1: 'Argomento',
    col2: 'Il problema',
    tagline: ['Trova. Scegli. Assapora.', "Dalla indecisione alla decisione in pochi istanti."],
    rows: [
      { label: 'Ricerca', before: 'Navighi tra Google, social media e telefonate.', after: "Un'app sola, tutti i menu intorno a te." },
      { label: 'Tempo', before: '10–20 min persi ogni pranzo a decidere.', after: 'Scelta rapida in meno di un minuto.' },
      { label: 'Informazioni', before: 'Menu incompleti, a volte impossibili da trovare.', after: 'Menu aggiornati in tempo reale dai ristoranti.' },
      { label: 'Prezzo', before: 'Scopri il prezzo solo quando arrivi.', after: 'Prezzi mostrati prima di uscire.' },
      { label: 'Prenotazione', before: 'Telefonate, attesa, nessuna risposta durante il rush.', after: 'Prenota o ordina in pochi clic.' },
      { label: 'Scoperta', before: 'Torni sempre negli stessi posti.', after: 'Scopri nuovi ristoranti vicino a te.' },
    ],
  },
  mascot: {
    badge: 'Il tuo compagno dei pasti',
    h2: 'Cosa mangio a pranzo?',
    lead: 'Mangia meglio, senza cercare.',
    subtitle: "Le Plat du Jour trova i migliori piatti del giorno intorno a te. Rapido, locale e senza pensieri.",
    cards: [
      { title: 'Ricerca localizzata', desc: 'Tutti i menu disponibili intorno a te, in tempo reale.' },
      { title: 'Scelta semplificata', desc: 'Foto, prezzi e descrizione per decidere in pochi secondi.' },
      { title: 'Prenotazione rapida', desc: "Prenota il tuo tavolo direttamente dall'app, in un clic." },
      { title: 'Nuove scoperte', desc: 'Esplora nuovi ristoranti e menu ogni giorno.' },
    ],
    cta: "Scarica l'app",
    ctaRestaurant: 'Sono un ristoratore',
  },
  howItWorks: {
    badge: 'COME FUNZIONA',
    h2: 'Come funziona?',
    subtitle: 'Tre passaggi dalla ricerca al piacere.',
    float: ['Semplice e Veloce', 'Bastano 3 clic'],
    steps: [
      { title: 'Cerca intorno a te', desc: "Attiva la geolocalizzazione per vedere istantaneamente i ristoranti con un piatto del giorno nelle vicinanze." },
      { title: 'Scopri i menu', desc: "Consulta foto, descrizioni e prezzi dei piatti disponibili oggi." },
      { title: 'Prenota o ordina', desc: "Prenota il tuo tavolo o fai un ordine direttamente tramite l'app." },
    ],
  },
  features: {
    h2: 'Funzionalità Chiave',
    subtitle: 'Tutto ciò di cui hai bisogno per mangiare bene.',
    float: ['Preferito', 'Salva i tuoi preferiti'],
    items: [
      { title: 'Ricerca Locale', desc: "Trova i piatti disponibili in un raggio preciso intorno a te." },
      { title: 'Prenotazione online', desc: "Prenota il tuo tavolo direttamente dall'app." },
      { title: 'Preferiti', desc: 'Salva i tuoi ristoranti e piatti preferiti con un tap.' },
      { title: 'Notifiche', desc: 'Ricevi un avviso non appena il tuo ristorante preferito pubblica il menu.' },
    ],
  },
  showcase: {
    badge: 'Funzionalità',
    h2pre: 'Tutto ciò che serve per',
    h2highlight: 'scoprire, scegliere, gustare',
    subtitle: "Un'esperienza semplice per gli utenti e strumenti potenti per i ristoranti.",
    featureLabel: 'Funzionalità',
    discover: "Scopri l'app",
    features: [
      { title: "Scopri il piatto del giorno", subtitle: "Home & suggerimenti vicino a te", description: "Accedi rapidamente ai piatti disponibili, trova i posti migliori ed esplora i menu del giorno senza perdere tempo.", benefits: ['Interfaccia chiara e veloce', 'Piatti del giorno geolocalizzati, aggiornati in tempo reale', 'Pensato per utenti e ristoranti'], stats: [{ value: "Veloce", label: "Scoperta" }, { value: "Locale", label: "Vicino a te" }] },
      { title: "Spazio ristorante", subtitle: "Dashboard & performance", description: "Una dashboard semplice per monitorare le tue performance, gestire i contenuti e risparmiare tempo ogni giorno.", benefits: ['Interfaccia leggibile, dati a colpo d\'occhio', 'Monitoraggio vendite e affluenza in tempo reale', 'Pensato per i ristoratori, senza competenze tecniche'], stats: [{ value: "Stats", label: "Chiare" }, { value: "Gestione", label: "Centralizzata" }] },
      { title: "Onboarding fluido", subtitle: "Presentazione in pochi schermi", description: "Avvio rapido: l'utente capisce l'app in pochi secondi e agisce immediatamente.", benefits: ['Interfaccia guidata, schermo per schermo', 'Presa in mano in meno di un minuto', 'Pensato per convertire dal primo avvio'], stats: [{ value: "< 1 min", label: "Capire" }, { value: "Semplice", label: "Esperienza" }] },
      { title: "Ricerca & filtri", subtitle: "Trova veloce, scegli meglio", description: "Cerca un ristorante, un piatto o una categoria. Filtra per trovare esattamente quello che vuoi.", benefits: ['Interfaccia di ricerca istantanea', 'Filtri precisi: cucina, distanza, budget, disponibilità', 'Pensato per decidere in pochi secondi'], stats: [{ value: "Smart", label: "Ricerca" }, { value: "Rilevante", label: "Risultati" }] },
      { title: "Referral & premi", subtitle: "Invita, accumula, goditi", description: "Condividi il tuo link e progredisci verso i premi. Un sistema semplice che motiva e fidelizza.", benefits: ['Interfaccia trasparente per i guadagni', 'Punti accumulati e accreditati automaticamente', 'Pensato per la fidelizzazione nel tempo'], stats: [{ value: "Bonus", label: "Premi" }, { value: "Fun", label: "Challenge" }] },
      { title: "Carta Premium & ID", subtitle: "Accesso & vantaggi con un scan", description: "Una carta premium chiara con QR Code e informazioni utili, per godere di offerte ed esclusive.", benefits: ['Carta digitale sempre accessibile', 'Vantaggi attivati con un solo scan, senza contatto', 'Pensato per la rapidità in locale'], stats: [{ value: "QR", label: "Scan rapido" }, { value: "Premium", label: "Vantaggi" }] },
      { title: "Ristoranti & menu", subtitle: "Vista ricca, info utili", description: "Foto, menu, badge premium/regalo e info chiave: tutto presentato per aiutarti a decidere rapidamente.", benefits: ['Interfaccia visiva: foto, menu, prezzi dettagliati', 'Info pratiche aggiornate: orari, contatto, accesso', 'Pensato per scegliere con fiducia'], stats: [{ value: "Menu", label: "Aggiornati" }, { value: "Info", label: "Chiare" }] },
      { title: "Prenotazione", subtitle: "Prenota in un clic", description: "Prenota facilmente, senza attrito. Un'azione semplice e rapida per trasformare la scoperta in una visita.", benefits: ['Interfaccia di prenotazione in pochi clic', 'Conferma immediata, senza chiamate né attesa', 'Pensato per utenti e ristoratori'], stats: [{ value: "1 clic", label: "Prenota" }, { value: "Diretto", label: "Azione" }] },
    ],
  },
  restaurants: {
    badge: 'Per i Ristoratori',
    h2: 'Diventiamo partner del tuo',
    h2highlight: 'successo',
    subtitle: "Non lasciare i tuoi tavoli vuoti. La nostra piattaforma connette il tuo know-how culinario a una comunità locale affamata e fedele.",
    cta: 'Diventa partner',
    revenue: 'RICAVI',
    thisMonth: 'questo mese',
    partnership: ['Partenariato Vincente', 'Unisciti a +200 ristoratori soddisfatti'],
    steps: [
      { title: 'Crea il tuo profilo', desc: 'Metti in risalto il tuo locale con belle foto.' },
      { title: 'Pubblica con un clic', desc: "Un'interfaccia semplificata per aggiungere il tuo menu del giorno in 30 secondi." },
      { title: 'Sviluppa la tua clientela', desc: 'Attrai lavoratori e residenti locali automaticamente.' },
    ],
  },
  pricing: {
    badge: 'Funzionalità & Prezzi',
    h2: 'Scegli la formula',
    h2highlight: 'adatta a te',
    subtitle: "Un'offerta semplice per gli utenti e strumenti potenti per i ristoranti.",
    noCommitment: 'Nessun impegno • Cancella quando vuoi',
    axisUser: 'Utente',
    axisRestaurant: 'Ristorante',
    monthly: 'Mensile',
    yearly: 'Annuale',
    security: 'Pagamento sicuro • Supporto reattivo • Cancellazione in 1 clic',
    paymentMethodsTitle: 'Metodi di pagamento accettati',
    freeBadge: 'Gratuito',
    premiumBadge: 'Premium',
    platinumBadge: 'Platinum',
    ctaFree: 'Inizia gratuitamente',
    ctaPremium: 'Passa a Premium',
    ctaPlatinum: 'Scegli Platinum',
    perMonth: '/ mese',
    perYear: '/ anno',
    saveTwoMonths: 'Risparmia 2 mesi',
    featureLabels: {
      accessMenus: 'Accesso menu & profili',
      searchGeo: 'Ricerca & geolocalizzazione',
      miniGamesWithAds: 'Mini-giochi con pubblicità',
      miniGames: 'Mini-giochi',
      noAds: 'Senza pubblicità',
      favorites: 'Preferiti avanzati',
      backOffice: 'Back-office completo',
      referral: 'Referral via codice',
      idCardPremium: 'IDCard premium',
      tombola: 'Partecipazione alle estrazioni',
      menusPerDay: '{{count}} menu / giorno',
      imagesPerDish: '{{count}} immagini / piatto',
      profilePhotos: '{{count}} foto profilo',
      menuGift: 'Omaggi promozionali',
      highlighted: 'Profilo in evidenza',
      itinerant: 'Gestione posizioni itineranti',
      multiEstablishment: 'Fino a {{count}} stabilimenti',
      extraEstablishment: '+5 CHF / stabilimento aggiuntivo',
    },
  },
  testimonials: {
    h2: 'La community adora',
    subtitle: 'Migliaia di utenti e ristoratori soddisfatti',
    prev: 'Precedente',
    next: 'Successivo',
    goTo: 'Vai alla recensione',
    stats: [
      { label: 'Download' },
      { label: 'Ristoranti' },
      { label: 'Menu serviti' },
      { label: 'Valutazione media' },
    ],
  },
  faq: {
    h2: 'Domande frequenti',
    subtitle: 'Tutto quello che devi sapere su Le Plat du Jour',
    noAnswer: 'Non trovi la risposta alla tua domanda?',
    contact: 'Contatta il nostro supporto',
    items: [
      { q: "L'app è gratuita?", a: "Sì, l'app di base è 100% gratuita per gli utenti. Puoi consultare i menu, leggere le recensioni e cercare ristoranti senza alcun costo." },
      { q: 'Dove è disponibile Le Plat du Jour?', a: 'Siamo disponibili in diverse città e in continua espansione. Nuove zone vengono aggiunte regolarmente.' },
      { q: 'Come pubblicano i ristoranti i loro menu?', a: "I ristoranti pubblicano tramite uno spazio dedicato: foto + descrizione + prezzo, in pochi secondi. Il menu è poi visibile istantaneamente nell'app." },
      { q: 'Posso prenotare un tavolo?', a: "Sì, se il ristorante partner ha abilitato le prenotazioni. Ricevi una conferma immediata." },
      { q: 'Devo creare un account?', a: "No per consultare. Un account (gratuito) è necessario per prenotare, aggiungere ai preferiti o lasciare una recensione." },
      { q: 'Come vengono verificati i piatti del giorno?', a: 'I piatti sono pubblicati direttamente dai ristoranti. Il nostro sistema rileva i menu obsoleti e richiede automaticamente gli aggiornamenti.' },
      { q: 'Posso filtrare per preferenze alimentari?', a: 'Sì: cucina, budget, distanza e preferenze alimentari (vegetariano, vegano, halal, senza glutine, ecc.).' },
      { q: 'Come diventare ristorante partner?', a: "Nella sezione Ristoranti, compila il modulo. Il team ti ricontatterà per attivare il tuo profilo." },
      { q: "L'app funziona offline?", a: "La modalità gratuita richiede internet. Il Premium può offrire una modalità offline (preferiti + ultimi menu consultati)." },
      { q: 'Come segnalare un problema?', a: "Puoi segnalare da una scheda ristorante o contattarci tramite il supporto. Rispondiamo rapidamente." },
    ],
  },
  download: {
    h2: 'Tutta la città',
    h2highlight: 'in tasca.',
    subtitle: 'Da Berna a Zurigo, scopri le gemme culinarie intorno a te. Scarica Le Plat du Jour e inizia l\'esplorazione.',
    downloadOn: 'Scarica su',
    availableOn: 'Disponibile su',
    found: '10 ristoranti trovati',
    country: 'Svizzera',
  },
  tombola: {
    pageTitle: 'Vincitori della tombola',
    subtitle: 'Ogni mese, gli utenti dell\'app Le Plat du Jour partecipano a un\'estrazione. Consulta qui i sorteggi passati e i vincitori.',
    rank_first: '1° premio',
    rank_second: '2° premio',
    rank_third: '3° premio',
    history_empty: 'Nessuna estrazione per ora. Torna presto!',
    winner_pending: 'Username in attesa',
    drawn_at: 'Estrazione del',
    cta_download: 'Partecipa alla prossima estrazione scaricando l\'app.',
    load_error: 'Impossibile caricare la cronologia. Riprova.',
    retry: 'Riprova',
    prize_label: 'Premio',
    winner_label: 'Vincitore',
    draw_label: 'Estrazione',
    view_prize: 'Vedi dettagli del premio',
    close: 'Chiudi',
  },
  footer: {
    tagline: 'Il modo migliore per scoprire i menu del giorno intorno a te. Semplice, veloce e gustoso.',
    quickLinks: 'Link Rapidi',
    legal: 'Legale',
    contactTitle: 'Contattaci',
    contactDesc: 'Una domanda? Scrivici.',
    help: 'Hai bisogno di aiuto?',
    contactSupport: 'Contatta il supporto',
    terms: 'Termini di utilizzo',
    privacy: 'Informativa sulla privacy',
    legalNotice: 'Note legali',
    allRights: 'Tutti i diritti riservati.',
    credits: 'Concept & Sviluppo: D.G.E. Concept SàRL & WIICODE',
    links: { howItWorks: 'Come funziona', testimonials: 'Recensioni', download: "Scarica l'app", tombola: 'Vincitori tombola' },
  },
};

export const translations: Record<Lang, AppTranslations> = { fr, en, de, it };
