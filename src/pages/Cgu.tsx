import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logomascotte.svg";

const VERSION = "1.0 — Mai 2026";
const EFFECTIVE_DATE = "04 mai 2026";

export default function Cgu() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Plat du Jour" className="h-8 w-auto" />
          <span className="font-bold text-gray-900">Plat du Jour</span>
        </Link>
        <Link to="/" className="text-sm text-primary font-semibold hover:underline">
          ← Retour à l'accueil
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* ─── CGU ─────────────────────────────────────────────────────────── */}
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          D.G.E. Concept SàRL · www.leplatdujour.ch
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Conditions Générales d'Utilisation
        </h1>
        <p className="text-sm text-gray-500 mb-1">Plateforme Le Plat du Jour</p>
        <p className="text-sm text-gray-400 mb-10">
          Version {VERSION} · Applicables à compter du {EFFECTIVE_DATE}
        </p>

        <nav className="bg-gray-50 rounded-xl p-5 mb-10 text-sm">
          <p className="font-semibold text-gray-700 mb-3">Sommaire — CGU</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 columns-2 gap-x-6">
            {[
              "Préambule",
              "Définitions",
              "Objet et périmètre",
              "Accès et création de compte",
              "Obligations des Restaurants",
              "Obligations des Clients",
              "Limitation de responsabilité",
              "Données personnelles",
              "Propriété intellectuelle",
              "Disponibilité et maintenance",
              "Droit applicable",
              "Modifications des CGU",
              "Dispositions diverses",
            ].map((titre, i) => (
              <li key={i}>{titre}</li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Préambule</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et
              l'utilisation de la plateforme en ligne Le Plat du Jour, accessible à l'adresse{" "}
              <a href="https://www.leplatdujour.ch" className="text-primary underline">
                https://www.leplatdujour.ch
              </a>{" "}
              (ci-après « la Plateforme »), éditée par D.G.E. Concept SàRL, dont le siège est sis à
              Arzier-Le Muids, canton de Vaud, Suisse, inscrite au Registre du Commerce sous le numéro
              IDE CHE-456.471.738 (ci-après « l'Éditeur »).
            </p>
            <p className="mt-3">
              En créant un compte sur la Plateforme, qu'il s'agisse d'un compte Restaurant ou d'un compte
              Client, l'Utilisateur reconnaît avoir lu, compris et accepté l'intégralité des présentes CGU.
              Cette acceptation est enregistrée électroniquement avec horodatage et constitue une preuve
              opposable.
            </p>
            <p className="mt-3">
              La Plateforme est une marketplace de mise en relation entre des établissements de restauration
              (ci-après « Restaurants ») proposant leur plat du jour et des clients finaux particuliers
              (ci-après « Clients ») souhaitant commander en ligne. L'Éditeur agit en qualité d'intermédiaire
              technique et n'intervient pas dans la relation contractuelle entre le Restaurant et le Client
              pour la fourniture du repas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 1 — Définitions</h2>
            <p className="mb-3">Au sens des présentes CGU, les termes suivants désignent :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Plateforme :</strong> le service Le Plat du Jour accessible en ligne à l'adresse https://www.leplatdujour.ch, opéré par D.G.E. Concept SàRL.</li>
              <li><strong>Éditeur :</strong> D.G.E. Concept SàRL, société à responsabilité limitée de droit suisse, Arzier-Le Muids, canton de Vaud, Suisse, IDE CHE-456.471.738, opératrice de la Plateforme.</li>
              <li><strong>Utilisateur :</strong> toute personne physique ou morale ayant créé un compte sur la Plateforme, qu'il soit Restaurant ou Client.</li>
              <li><strong>Restaurant :</strong> tout établissement de restauration professionnel titulaire d'un abonnement actif sur la Plateforme, autorisé à publier ses offres de plats du jour.</li>
              <li><strong>Client :</strong> toute personne physique âgée d'au moins 18 ans ayant créé un compte sur la Plateforme et y passant commande.</li>
              <li><strong>Offre :</strong> la publication par un Restaurant d'un ou plusieurs plats du jour disponibles à la commande via la Plateforme.</li>
              <li><strong>Commande :</strong> l'acte par lequel un Client sélectionne une Offre et la confirme via la Plateforme.</li>
              <li><strong>Abonnement Restaurant :</strong> le contrat d'accès payant permettant à un Restaurant de publier ses Offres sur la Plateforme, souscrit selon les formules disponibles.</li>
              <li><strong>Compte :</strong> l'espace personnel sécurisé créé par l'Utilisateur lors de son inscription, donnant accès aux fonctionnalités de la Plateforme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 2 — Objet et périmètre de la Plateforme</h2>
            <h3 className="font-semibold text-gray-800 mb-2">2.1 — Ce que Le Plat du Jour est</h3>
            <p>
              Le Plat du Jour est une plateforme de mise en relation en ligne permettant à des Restaurants de
              publier leurs offres de plats du jour et à des Clients de les consulter et de les commander.
              L'Éditeur fournit l'infrastructure technique permettant cette mise en relation.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2.2 — Ce que Le Plat du Jour n'est pas</h3>
            <p>La Plateforme n'est pas :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>un restaurateur, un traiteur ou un prestataire alimentaire ;</li>
              <li>un service de livraison à domicile — aucune prestation logistique n'est assurée par l'Éditeur ;</li>
              <li>un garant de la qualité, de la composition, des allergènes ou de la conformité sanitaire des plats proposés par les Restaurants ;</li>
              <li>une partie au contrat de vente conclu entre le Restaurant et le Client.</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2.3 — Rôle d'intermédiaire technique</h3>
            <p>
              L'Éditeur agit exclusivement en qualité d'intermédiaire technique. Le contrat de vente relatif à
              chaque commande est conclu directement entre le Restaurant et le Client. L'Éditeur ne saurait être
              tenu responsable de l'exécution ou de l'inexécution de ce contrat.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2.4 — Zone géographique</h3>
            <p>
              La Plateforme est disponible sur l'ensemble du territoire suisse. L'Éditeur se réserve le droit
              d'étendre ou de restreindre la couverture géographique à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 3 — Accès à la Plateforme et création de compte</h2>
            <h3 className="font-semibold text-gray-800 mb-2">3.1 — Conditions d'accès</h3>
            <p>
              L'accès à la Plateforme en tant que Client est réservé aux personnes physiques âgées d'au moins
              18 ans. L'accès en tant que Restaurant est réservé aux personnes morales ou physiques agissant
              dans le cadre d'une activité professionnelle de restauration dûment autorisée.
            </p>
            <p className="mt-3">
              En créant un compte, l'Utilisateur garantit que les informations fournies sont exactes, complètes
              et à jour. Toute fausse déclaration engage la seule responsabilité de l'Utilisateur.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">3.2 — Processus de création de compte</h3>
            <p>La création d'un compte s'effectue exclusivement en ligne selon les étapes suivantes :</p>
            <ol className="list-decimal list-inside space-y-1 mt-2 text-gray-700">
              <li>Saisie des informations d'identification (adresse email, mot de passe, informations de profil).</li>
              <li>Acceptation des présentes CGU (case à cocher obligatoire — acceptation enregistrée avec horodatage).</li>
              <li>Validation de l'adresse email via le lien de confirmation envoyé automatiquement.</li>
            </ol>
            <p className="mt-3">Le compte est actif à compter de la validation de l'adresse email.</p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">3.3 — Gestion et sécurité du compte</h3>
            <p>
              L'Utilisateur est seul responsable de la confidentialité de ses identifiants de connexion et de toute
              activité réalisée depuis son compte. En cas de compromission ou d'utilisation non autorisée,
              l'Utilisateur s'engage à en informer immédiatement l'Éditeur à l'adresse{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">3.4 — Suspension et clôture de compte</h3>
            <p>
              L'Éditeur se réserve le droit de suspendre ou de clôturer tout compte en cas de violation des
              présentes CGU, d'usage frauduleux, abusif ou contraire à l'ordre public, sans préavis ni indemnité.
            </p>
            <p className="mt-3">
              L'Utilisateur peut clôturer son compte à tout moment en adressant une demande à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>.
              La clôture du compte Restaurant ne donne pas lieu à remboursement de la période d'abonnement en cours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 4 — Obligations des Restaurants</h2>
            <h3 className="font-semibold text-gray-800 mb-2">4.1 — Conformité réglementaire</h3>
            <p>Le Restaurant est seul et entièrement responsable :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>de la détention de toutes les autorisations, licences et patentes nécessaires à l'exercice de son activité de restauration (autorisation cantonale/communale, patente de restaurateur, etc.) ;</li>
              <li>de la conformité de ses préparations culinaires aux normes d'hygiène et de sécurité alimentaire applicables en Suisse (ODAl, HACCP, etc.) ;</li>
              <li>de l'exactitude des informations publiées sur la Plateforme, notamment les descriptions de plats, les prix, les allergènes et les disponibilités ;</li>
              <li>du respect des obligations légales en matière d'étiquetage alimentaire et de déclaration des allergènes.</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">4.2 — Responsabilité exclusive du Restaurant</h3>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900">
              <p>
                <strong>Point critique —</strong> Le Restaurant est seul responsable de la qualité, de la composition,
                des allergènes et de la conformité sanitaire des plats proposés. En cas de litige lié à une commande
                (non-conformité, intoxication, erreur allergène, etc.), la responsabilité incombe exclusivement au
                Restaurant. L'Éditeur ne pourra en aucun cas être mis en cause.
              </p>
            </div>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">4.3 — Obligations de publication</h3>
            <p>Le Restaurant s'engage à :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>publier des informations exactes, à jour et non trompeuses sur ses Offres ;</li>
              <li>mettre à jour ses disponibilités en temps réel et retirer immédiatement toute Offre qui ne peut plus être honorée ;</li>
              <li>mentionner de manière claire et complète les allergènes présents dans ses préparations ;</li>
              <li>respecter les prix publiés sur la Plateforme au moment où la Commande est passée par le Client.</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">4.4 — Usages interdits</h3>
            <p>Sont notamment interdits :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>la publication d'informations fausses, trompeuses ou susceptibles d'induire le Client en erreur ;</li>
              <li>tout usage de la Plateforme à des fins non liées à l'activité de restauration ;</li>
              <li>toute tentative de contournement des mécanismes de la Plateforme ou d'accès non autorisé à d'autres comptes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 5 — Obligations des Clients</h2>
            <h3 className="font-semibold text-gray-800 mb-2">5.1 — Conditions de commande</h3>
            <p>Le Client s'engage à :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>fournir des informations d'identification exactes et à jour lors de la création de son compte ;</li>
              <li>ne passer que des commandes sérieuses et à honorer toute commande confirmée ;</li>
              <li>respecter les conditions spécifiques définies par le Restaurant (horaires, modalités de récupération, etc.) ;</li>
              <li>signaler sans délai tout problème lié à une commande directement auprès du Restaurant concerné.</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">5.2 — Responsabilité du Client</h3>
            <p>
              Le Client est seul responsable de la vérification des informations relatives aux Offres avant de
              passer commande, notamment les allergènes, les compositions et les conditions de récupération.
              En cas de doute, le Client est invité à contacter directement le Restaurant.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 6 — Limitation de responsabilité de l'Éditeur</h2>
            <h3 className="font-semibold text-gray-800 mb-2">6.1 — Exclusions de responsabilité</h3>
            <p>
              Dans toute la mesure permise par le droit suisse applicable, l'Éditeur exclut toute responsabilité pour :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>les dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser la Plateforme ;</li>
              <li>tout litige lié à l'exécution d'une commande entre un Restaurant et un Client (qualité, délais, allergènes, non-livraison, etc.) ;</li>
              <li>l'exactitude, l'exhaustivité ou la mise à jour des informations publiées par les Restaurants ;</li>
              <li>toute interruption de service liée à un cas de force majeure, à une maintenance ou à une défaillance technique ;</li>
              <li>tout dommage résultant d'une utilisation frauduleuse ou abusive des identifiants de connexion d'un Utilisateur.</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">6.2 — Limitation du montant</h3>
            <p>
              Dans les cas où la responsabilité de l'Éditeur ne peut être totalement exclue, elle est expressément
              limitée, s'agissant des Restaurants, au montant de l'abonnement effectivement payé pour la période en
              cours au moment du fait générateur du dommage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 7 — Données personnelles et confidentialité</h2>
            <h3 className="font-semibold text-gray-800 mb-2">7.1 — Données collectées</h3>
            <p>Dans le cadre de l'utilisation de la Plateforme, l'Éditeur collecte et traite les données suivantes :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li><strong>Données d'identification :</strong> adresse email, prénom, nom (pour les Clients) ; raison sociale, adresse, email professionnel (pour les Restaurants).</li>
              <li><strong>Données d'utilisation :</strong> historique des commandes, offres publiées, interactions avec la Plateforme.</li>
              <li><strong>Données techniques :</strong> adresse IP, navigateur, logs de connexion.</li>
              <li><strong>Données de paiement (Restaurants uniquement) :</strong> traitées exclusivement par les prestataires de paiement — non stockées par l'Éditeur.</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">7.2 — Finalités du traitement</h3>
            <p>
              Les données collectées sont traitées aux fins suivantes : gestion des comptes et des accès, mise en
              relation Restaurants/Clients, traitement des commandes, amélioration de la Plateforme, envoi de
              communications liées au service.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">7.3 — Droits des Utilisateurs</h3>
            <p>
              Conformément à la nLPD suisse (et au RGPD pour les Utilisateurs résidant dans l'UE), tout Utilisateur
              dispose des droits d'accès, rectification, effacement, portabilité et opposition sur ses données
              personnelles, exerçables à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>.
              Pour plus de détails, consultez notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary underline">
                Politique de Confidentialité
              </Link>.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">7.4 — Conservation et hébergement</h3>
            <p>
              Les données sont hébergées en Suisse et/ou dans l'Union Européenne. Les données personnelles sont
              conservées pour la durée du compte actif augmentée de douze (12) mois après la clôture du compte,
              sauf obligations légales contraires.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">7.5 — Confidentialité</h3>
            <p>
              Les données des Utilisateurs ne sont ni vendues, ni louées, ni cédées à des tiers à des fins
              commerciales. Elles peuvent être transmises à des prestataires techniques liés par des obligations
              de confidentialité et agissant exclusivement pour le compte de l'Éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 8 — Propriété intellectuelle</h2>
            <p>
              La Plateforme Le Plat du Jour, son interface, ses algorithmes, ses bases de données et l'ensemble
              de ses contenus propres sont la propriété exclusive de D.G.E. Concept SàRL et sont protégés par le
              droit suisse et international de la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Les contenus publiés par les Restaurants (descriptions, photos) restent la propriété de leurs auteurs.
              En les publiant sur la Plateforme, le Restaurant concède à l'Éditeur un droit d'utilisation non
              exclusif, à titre gratuit, pour les besoins du service (affichage, indexation, promotion de la
              Plateforme).
            </p>
            <p className="mt-3">
              L'Utilisateur bénéficie d'un droit d'accès et d'utilisation personnel, non exclusif et non transférable
              des fonctionnalités de la Plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 9 — Disponibilité et maintenance</h2>
            <p>
              L'Éditeur s'efforce d'assurer la disponibilité de la Plateforme 24h/24 et 7j/7, sans pouvoir en
              garantir un accès ininterrompu. Des interruptions peuvent survenir pour maintenance, mise à jour
              ou cas de force majeure. L'Éditeur informera les Utilisateurs, dans la mesure du possible, des
              opérations de maintenance planifiées. Aucun niveau de service garanti (SLA) n'est contractuellement
              engagé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 10 — Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes CGU sont régies par le droit suisse, notamment le Code des Obligations (CO) et la Loi
              sur la protection des données (nLPD). Tout litige entre professionnels sera soumis au for exclusif
              du Tribunal d'arrondissement de La Côte (Nyon, canton de Vaud, Suisse).
            </p>
            <p className="mt-3">
              Pour les Utilisateurs résidant dans l'Union Européenne et agissant en qualité de consommateurs,
              les règles de compétence impératives du droit de l'UE s'appliquent. La plateforme de règlement en
              ligne des litiges de la Commission Européenne est accessible à :{" "}
              <a href="https://ec.europa.eu/consumers/odr" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 11 — Modifications des CGU</h2>
            <p>
              L'Éditeur se réserve le droit de modifier les présentes CGU à tout moment. En cas de modification
              substantielle, l'Utilisateur sera informé par email avec un préavis de trente (30) jours. La poursuite
              de l'utilisation de la Plateforme après expiration du délai vaut acceptation des nouvelles CGU. En
              cas de refus, l'Utilisateur peut clôturer son compte sans frais avant la date d'entrée en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 12 — Dispositions diverses</h2>
            <h3 className="font-semibold text-gray-800 mb-2">12.1 — Nullité partielle</h3>
            <p>
              Si l'une quelconque des dispositions est déclarée nulle ou inapplicable, les autres demeurent
              pleinement en vigueur.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">12.2 — Non-renonciation</h3>
            <p>
              Le fait pour l'Éditeur de ne pas se prévaloir d'une disposition ne saurait être interprété comme une
              renonciation à l'invoquer ultérieurement.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">12.3 — Contact</h3>
            <p>
              Pour toute question relative aux présentes CGU :{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>
              {" "}— D.G.E. Concept SàRL, Arzier-Le Muids, canton de Vaud, Suisse —{" "}
              <a href="https://www.leplatdujour.ch" className="text-primary underline">www.leplatdujour.ch</a>.
            </p>
          </section>

        </div>

        <p className="text-xs text-gray-400 mt-10 text-center">
          Le Plat du Jour · D.G.E. Concept SàRL · CGU Version {VERSION}
        </p>

        {/* ─── CGV ─────────────────────────────────────────────────────────── */}
        <hr className="my-16 border-gray-200" />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Conditions Générales de Vente
        </h1>
        <p className="text-sm text-gray-500 mb-1">Plateforme Le Plat du Jour — Abonnements Restaurants</p>
        <p className="text-sm text-gray-400 mb-10">
          Version {VERSION} · Applicables à compter du {EFFECTIVE_DATE}
        </p>

        <nav className="bg-gray-50 rounded-xl p-5 mb-10 text-sm">
          <p className="font-semibold text-gray-700 mb-3">Sommaire — CGV</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 columns-2 gap-x-6">
            {[
              "Préambule",
              "Objet",
              "Offres, tarifs et devises",
              "Commande et souscription",
              "Paiement",
              "Durée, renouvellement et résiliation",
              "Politique de non-remboursement",
              "Droit de rétractation",
              "Service et support",
              "Cession de l'abonnement",
              "Droit applicable",
              "Dispositions finales",
            ].map((titre, i) => (
              <li key={i}>{titre}</li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Préambule</h2>
            <p>
              Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l'ensemble des transactions
              commerciales conclues entre D.G.E. Concept SàRL, Arzier-Le Muids, canton de Vaud, Suisse, IDE
              CHE-456.471.738, éditrice de la plateforme Le Plat du Jour (ci-après « le Vendeur »), et tout
              établissement de restauration souscrivant à un abonnement payant (ci-après « l'Acheteur »).
            </p>
            <p className="mt-3">
              Toute souscription à un abonnement payant emporte l'acceptation pleine et entière des présentes CGV,
              conjointement avec les Conditions Générales d'Utilisation. Cette acceptation est enregistrée
              électroniquement avec horodatage et constitue une preuve opposable.
            </p>
            <p className="mt-3">
              Les présentes CGV régissent exclusivement la relation commerciale entre le Vendeur et les Restaurants
              abonnés. Elles ne s'appliquent pas aux Clients finaux, dont la relation avec la Plateforme est régie
              par les CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 1 — Objet</h2>
            <p>
              Les présentes CGV ont pour objet de définir les conditions et modalités de vente des abonnements
              donnant accès aux fonctionnalités de publication et de visibilité sur la plateforme Le Plat du Jour.
              Le service vendu est un accès à une infrastructure numérique de mise en relation permettant aux
              Restaurants de publier leurs offres de plats du jour et de les rendre accessibles aux Clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 2 — Offres, tarifs et devises</h2>
            <h3 className="font-semibold text-gray-800 mb-2">2.1 — Formules disponibles</h3>
            <p>
              Le Plat du Jour propose plusieurs formules d'abonnement mensuel adaptées aux besoins des Restaurants.
              Le détail complet des formules et des fonctionnalités incluses dans chaque plan est disponible sur
              la{" "}
              <Link to="/#tarifs" className="text-primary underline">page Tarifs</Link>{" "}
              de la Plateforme, qui fait foi.
            </p>
            <p className="mt-3">Les formules disponibles et leurs tarifs sont les suivants :</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 font-semibold text-gray-700">Formule</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Tarif</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Fonctionnalités principales</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Classique (Standard)</td>
                    <td className="px-4 py-3">0 CHF/mois</td>
                    <td className="px-4 py-3 text-gray-600">3 menus/jour, 1 image/plat, 10 photos profil</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Premium / Itinérant</td>
                    <td className="px-4 py-3">29 CHF/mois</td>
                    <td className="px-4 py-3 text-gray-600">5 menus/jour, 3 images/plat, profil mis en avant, gestion emplacements itinérants, cadeaux promotionnels</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Platinum / Itinérant Multi</td>
                    <td className="px-4 py-3">59 CHF/mois</td>
                    <td className="px-4 py-3 text-gray-600">Toutes les fonctionnalités Premium, jusqu'à 5 établissements (+5 CHF/unité supplémentaire)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2.2 — Devise</h3>
            <p>
              Les abonnements sont facturés en francs suisses (CHF). Le prix applicable est celui affiché au
              moment de la souscription.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2.3 — Prix et TVA</h3>
            <p>
              D.G.E. Concept SàRL est une entreprise de droit suisse non assujettie à la TVA à la date d'entrée
              en vigueur des présentes CGV. Les prix affichés s'entendent donc toutes taxes comprises (TTC) au
              taux applicable. En cas d'assujettissement ultérieur à la TVA, les tarifs seront ajustés conformément
              à l'Article 2.4.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">2.4 — Modifications tarifaires</h3>
            <p>
              Le Vendeur se réserve le droit de modifier ses tarifs avec un préavis minimum de trente (30) jours
              communiqué par email à l'adresse enregistrée lors de la souscription. L'Acheteur peut résilier son
              abonnement sans frais s'il refuse les nouveaux tarifs, avant la date d'entrée en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 3 — Commande et souscription</h2>
            <h3 className="font-semibold text-gray-800 mb-2">3.1 — Processus de souscription</h3>
            <p>
              La souscription à un abonnement s'effectue exclusivement en ligne sur www.leplatdujour.ch, selon les
              étapes suivantes :
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2 text-gray-700">
              <li>Création d'un compte Restaurant ou connexion à un compte existant.</li>
              <li>Sélection de la formule d'abonnement souhaitée.</li>
              <li>Acceptation des présentes CGV et des CGU (case à cocher obligatoire — acceptation enregistrée avec horodatage).</li>
              <li>Saisie et validation des informations de paiement.</li>
              <li>Confirmation de la souscription par email à l'adresse enregistrée.</li>
            </ol>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">3.2 — Formation du contrat</h3>
            <p>
              Le contrat de vente est réputé conclu à la date de réception par l'Acheteur de l'email de confirmation
              de souscription. Cet email récapitule la formule souscrite, le montant facturé et la période
              d'abonnement.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">3.3 — Cadre professionnel</h3>
            <p>
              Le Plat du Jour est un service destiné exclusivement aux professionnels de la restauration. En
              souscrivant, l'Acheteur déclare agir dans le cadre de son activité professionnelle et disposer de
              toutes les autorisations nécessaires à l'exercice de son activité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 4 — Paiement</h2>
            <h3 className="font-semibold text-gray-800 mb-2">4.1 — Moyens de paiement acceptés</h3>
            <p>Les paiements sont acceptés via les moyens suivants :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li><strong>TWINT</strong> — disponible pour les paiements en CHF depuis la Suisse.</li>
              <li><strong>Carte bancaire</strong> (Visa, Mastercard) via terminal MyPos — traitement sécurisé PCI-DSS.</li>
              <li><strong>PayPal.</strong></li>
              <li><strong>Virement bancaire</strong> — les coordonnées bancaires sont communiquées après confirmation de commande ; l'accès à la Plateforme est activé à réception du virement.</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 mt-4 text-blue-900">
              <p>
                <strong>Sécurité des paiements —</strong> D.G.E. Concept SàRL n'accède à aucune donnée bancaire
                ou numéro de carte. Les paiements par carte sont traités par un prestataire certifié PCI-DSS.
                Aucune donnée bancaire n'est stockée par l'Éditeur.
              </p>
            </div>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">4.2 — Facturation</h3>
            <p>
              Un reçu ou une facture est automatiquement émis par email à chaque transaction. L'Acheteur peut
              accéder à l'historique de ses paiements depuis son tableau de bord.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">4.3 — Défaut de paiement</h3>
            <p>
              En cas d'échec ou de refus de paiement, l'Acheteur est informé par email. Un délai de dix (10) jours
              est accordé pour régulariser la situation. Passé ce délai, l'accès aux fonctionnalités de publication
              est suspendu jusqu'à régularisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 5 — Durée, renouvellement et résiliation</h2>
            <h3 className="font-semibold text-gray-800 mb-2">5.1 — Durée de l'abonnement</h3>
            <p>
              Les abonnements sont souscrits à la mensualité, sans engagement de durée minimum. L'abonnement prend
              effet à la date de validation du paiement et court jusqu'à la fin du mois calendaire en cours.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">5.2 — Renouvellement</h3>
            <p>
              L'abonnement ne se renouvelle pas automatiquement. À l'échéance, l'accès aux fonctionnalités de
              publication expire. L'Acheteur reçoit un email de rappel avant la fin de sa période pour lui permettre
              de souscrire une nouvelle mensualité s'il le souhaite.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">5.3 — Résiliation par l'Acheteur</h3>
            <p>
              L'Acheteur peut mettre fin à son abonnement à tout moment. Aucun remboursement n'est accordé pour
              la mensualité en cours, quelle que soit la date de résiliation ou le niveau d'utilisation. L'accès aux
              fonctionnalités reste actif jusqu'à la fin de la période mensuelle initialement souscrite.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">5.4 — Résiliation par le Vendeur</h3>
            <p>
              Le Vendeur peut suspendre ou résilier l'accès d'un Acheteur sans préavis en cas de violation grave
              des CGU ou des présentes CGV, d'usage frauduleux ou abusif avéré, ou de non-paiement après la période
              de grâce définie à l'Article 4.3. En cas de résiliation par le Vendeur pour un motif non imputable à
              l'Acheteur, le prorata des jours non consommés est remboursé.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">5.5 — Fin du service</h3>
            <p>
              Dans l'hypothèse où le Vendeur déciderait de mettre fin à l'exploitation de la Plateforme, les
              Acheteurs disposant d'un abonnement actif seront informés par email avec un préavis de quatre-vingt-dix
              (90) jours. Le prorata des jours non consommés sera remboursé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 6 — Politique de non-remboursement</h2>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900 mb-4">
              <p>
                <strong>Politique ferme de non-remboursement —</strong> Toute mensualité versée est définitivement
                acquise au Vendeur, sauf cas expressément prévus aux Articles 5.4 et 5.5. Le mois est dû en entier,
                quelle que soit la date de résiliation en cours de période.
              </p>
            </div>
            <p>Aucun remboursement n'est accordé pour :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>une mensualité en cours, quelle que soit la date de résiliation ;</li>
              <li>la non-utilisation partielle ou totale des fonctionnalités incluses dans l'abonnement ;</li>
              <li>un changement de situation professionnelle ou de besoins de l'Acheteur ;</li>
              <li>une insatisfaction relative au service.</li>
            </ul>
            <p className="mt-3">
              À titre commercial et de bonne foi, le Vendeur s'engage à examiner toute demande de remboursement
              introduite dans les quarante-huit (48) heures suivant la première souscription, en cas d'impossibilité
              technique avérée et documentée d'accéder au service. Ces demandes doivent être adressées à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 7 — Droit de rétractation</h2>
            <p>
              Conformément à l'article 16 de la directive européenne 2011/83/UE, le droit de rétractation de 14
              jours ne s'applique pas aux contenus numériques dont l'exécution a commencé avant l'expiration du
              délai de rétractation, avec l'accord préalable exprès de l'Acheteur.
            </p>
            <p className="mt-3">
              En souscrivant et en accédant immédiatement aux fonctionnalités de la Plateforme, l'Acheteur
              reconnaît que le service numérique est fourni dès la confirmation du paiement, entraînant la
              renonciation au droit de rétractation. Pour les Acheteurs agissant dans un cadre professionnel, le
              droit de rétractation consommateur n'est pas applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 8 — Service et support</h2>
            <h3 className="font-semibold text-gray-800 mb-2">8.1 — Disponibilité</h3>
            <p>
              Le Vendeur s'efforce d'assurer la disponibilité de la Plateforme 24h/24 et 7j/7. Aucun niveau de
              service garanti (SLA) n'est contractuellement engagé. Des interruptions peuvent survenir pour
              maintenance, mise à jour ou cas de force majeure, sans ouvrir droit à indemnisation.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">8.2 — Support</h3>
            <p>
              Le support est accessible par email à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>.
              Le Vendeur s'engage à apporter une réponse dans un délai de deux (2) jours ouvrés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 9 — Cession de l'abonnement</h2>
            <p>
              L'abonnement est personnel et nominatif. Il ne peut être cédé ou partagé sans accord écrit préalable
              du Vendeur. En cas de cession d'activité, le transfert peut être envisagé sur demande à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 10 — Droit applicable et juridiction</h2>
            <p>
              Les présentes CGV sont régies par le droit suisse (Code des Obligations). Tout litige entre
              professionnels sera soumis au for exclusif du Tribunal d'arrondissement de La Côte (Nyon, canton de
              Vaud, Suisse).
            </p>
            <p className="mt-3">
              Pour les Acheteurs résidant dans l'Union Européenne et agissant en qualité de consommateurs, les
              règles de compétence impératives du droit de l'UE s'appliquent. La plateforme de règlement en ligne
              des litiges de la Commission Européenne est accessible à :{" "}
              <a href="https://ec.europa.eu/consumers/odr" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Art. 11 — Dispositions finales</h2>
            <h3 className="font-semibold text-gray-800 mb-2">11.1 — Prévalence des CGV</h3>
            <p>
              En cas de contradiction entre les présentes CGV et tout autre document commercial, les présentes CGV
              prévalent, sauf accord écrit express du Vendeur.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">11.2 — Nullité partielle</h3>
            <p>
              Si une clause est déclarée nulle ou inapplicable, les autres clauses demeurent pleinement en vigueur.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">11.3 — Archivage et contact</h3>
            <p>
              Les présentes CGV sont archivées par version et accessibles sur demande à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>
              {" "}— D.G.E. Concept SàRL, Arzier-Le Muids, canton de Vaud, Suisse.
            </p>
          </section>

        </div>

        <p className="text-xs text-gray-400 mt-10 text-center">
          Le Plat du Jour · D.G.E. Concept SàRL · CGV Version {VERSION}
        </p>

      </main>

      <footer className="border-t border-black/5 mt-8 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Plat du Jour — Tous droits réservés ·{" "}
        <Link to="/politique-de-confidentialite" className="hover:text-primary">Politique de confidentialité</Link>{" "}·{" "}
        <Link to="/mentions-legales" className="hover:text-primary">Mentions légales</Link>
      </footer>
    </div>
  );
}
