import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logomascotte.svg";

const LAST_UPDATE = "Juin 2026";

export default function MentionsLegales() {
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

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Mentions Légales
        </h1>
        <p className="text-sm text-gray-400 mb-2">Dernière mise à jour : {LAST_UPDATE}</p>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          Conformément aux obligations légales en vigueur en Suisse (Code des obligations, nLPD)
          et aux directives européennes applicables, vous trouverez ci-dessous toutes les informations
          légales relatives à l'éditeur du service <strong>Plat du Jour</strong>.
        </p>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Éditeur du service</h2>
            <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> D.G.E. Concept SàRL</p>
              <p><strong>Forme juridique :</strong> SàRL</p>
              <p><strong>Capital social :</strong> 20'000 CHF</p>
              <p><strong>Numéro d'immatriculation :</strong> CHE-456.471.738</p>
              <p><strong>Siège social :</strong> 1273 Arzier-Le Muids, Suisse</p>
              <p><strong>Numéro TVA :</strong> Non assujetti — seuil de chiffre d'affaires non atteint</p>
              <p><strong>Directeur de la publication :</strong> Gwenaël Eude, Président</p>
              <p><strong>Téléphone :</strong>{" "}
                <a href="tel:+41799607371" className="text-primary underline">+41 79 960 73 71</a>
              </p>
              <p><strong>E-mail de contact :</strong>{" "}
                <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Hébergement</h2>
            <div className="bg-gray-50 rounded-xl p-5 space-y-3 text-gray-700">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Hébergeur (Suisse)</p>
                <p>
                  <strong>Infomaniak Network SA</strong><br />
                  Rue Eugène-Marziano 25<br />
                  1227 Les Acacias (GE), Suisse<br />
                  IDE : CHE-103.167.648<br />
                  <a href="https://www.infomaniak.com" target="_blank" rel="noreferrer" className="text-primary underline">infomaniak.com</a>
                </p>
                <p className="mt-3 text-gray-600">
                  Le site web, l'application et les données associées sont hébergés en Suisse par Infomaniak.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Prestataire de paiement</p>
                <p className="text-amber-600 italic">[Nom : MyPos / TWINT / PayPal / … — adresse et site]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble des contenus présents sur ce site et dans l'application — textes, articles,
              photographies, illustrations, logos, marques, slogans, vidéos, animations, code source,
              architecture de la base de données et charte graphique — sont la propriété exclusive de
              l'éditeur ou font l'objet de licences accordées à l'éditeur par leurs auteurs respectifs.
            </p>
            <p className="mt-3 text-gray-700">
              Ces éléments sont protégés par les lois sur la propriété intellectuelle et le droit
              d'auteur applicables dans le pays d'établissement de l'éditeur, ainsi que par les
              conventions internationales (Convention de Berne, Accord ADPIC/TRIPS). Toute
              reproduction, représentation, modification, publication, adaptation ou exploitation
              commerciale, même partielle, de ces éléments, quel qu'en soit le procédé (copie,
              scraping, ingénierie inverse, etc.), est strictement interdite sans l'autorisation
              écrite préalable de l'éditeur.
            </p>
            <p className="mt-3 text-gray-700">
              Toute violation de ces droits pourra faire l'objet de poursuites civiles et/ou pénales
              conformément à la législation applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Marques</h2>
            <p className="text-gray-700">
              « Plat du Jour », le logo et la mascotte associés sont des marques ou des éléments
              distinctifs de l'éditeur. Toute utilisation non autorisée de ces éléments constitue
              une contrefaçon de marque susceptible d'engager la responsabilité civile et pénale
              de son auteur. L'éditeur se réserve le droit de déposer ces marques auprès des
              offices compétents (IGE en Suisse, INPI en France, EUIPO en Europe).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Protection des données personnelles</h2>
            <p className="text-gray-700">
              Le traitement des données personnelles collectées via le Service est encadré par
              notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary underline">
                Politique de Confidentialité
              </Link>
              , conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679)
              et, si applicable, à la Loi fédérale sur la Protection des Données (nLPD, en vigueur
              depuis le 1er septembre 2023 en Suisse).
            </p>
            <p className="mt-3 text-gray-700">
              Pour toute demande relative à vos données personnelles (accès, rectification,
              suppression, portabilité),               contactez-nous à :{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h2>
            <p className="text-gray-700">
              Ce site et cette application utilisent des cookies et technologies de stockage local
              (localStorage). Certains sont strictement nécessaires au fonctionnement du Service
              (maintien de session, préférences de langue) et ne nécessitent pas votre consentement.
              D'autres, à vocation analytique ou personnalisatrice, sont déposés uniquement avec
              votre accord préalable, conformément à la réglementation applicable (art. 82 de la
              loi Informatique et Libertés en France, art. 45c LTC en Suisse).
            </p>
            <p className="mt-3 text-gray-700">
              Vous pouvez gérer vos préférences en matière de cookies depuis les paramètres de
              confidentialité de l'application ou depuis les réglages de votre navigateur. Pour
              en savoir plus sur les cookies utilisés, consultez notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary underline">
                Politique de Confidentialité
              </Link>{" "}
              (section 8).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Liens hypertextes</h2>
            <p className="text-gray-700">
              <strong>Liens sortants :</strong> Ce Service peut contenir des liens hypertextes vers
              des sites tiers (plateformes de réseaux sociaux, App Store, Google Play, sites de
              restaurants partenaires). L'éditeur n'exerce aucun contrôle sur ces sites et décline
              toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en
              matière de confidentialité. L'accès à ces sites tiers se fait aux risques et périls
              de l'utilisateur.
            </p>
            <p className="mt-3 text-gray-700">
              <strong>Liens entrants :</strong> Tout site souhaitant établir un lien hypertexte
              vers le Service doit obtenir l'autorisation préalable et écrite de l'éditeur. Cette
              autorisation ne peut être accordée pour des sites diffusant des contenus illicites,
              offensants ou contraires à l'éthique. L'éditeur se réserve le droit de demander la
              suppression de tout lien non autorisé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation de responsabilité</h2>
            <p className="text-gray-700">
              Les informations présentes sur ce Service sont fournies à titre informatif et ne
              constituent en aucun cas un conseil professionnel (juridique, médical, nutritionnel,
              etc.). L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des contenus
              publiés, mais ne peut garantir leur exhaustivité, leur exactitude ou leur adéquation
              à une situation particulière.
            </p>
            <p className="mt-3 text-gray-700">
              L'éditeur décline toute responsabilité en cas de :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
              <li>Inexactitude ou obsolescence des informations publiées par les restaurants partenaires.</li>
              <li>Dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le Service.</li>
              <li>Interruption temporaire du Service pour maintenance ou mise à jour.</li>
              <li>Intrusion malveillante d'un tiers malgré les mesures de sécurité mises en place.</li>
              <li>Dommages résultant de l'utilisation de sites tiers accessibles via des liens présents sur le Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Médiation et règlement des litiges</h2>
            <p className="text-gray-700">
              En cas de litige avec l'éditeur, l'utilisateur est invité à contacter en premier lieu
              le service client à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>{" "}
              afin de rechercher une solution amiable.
            </p>
            <p className="mt-3 text-gray-700">
              À défaut de résolution amiable dans un délai de 30 jours, les utilisateurs résidant
              dans l'Union Européenne peuvent recourir à la plateforme européenne de règlement en
              ligne des litiges (RLL) de la Commission Européenne, accessible à{" "}
              <a href="https://ec.europa.eu/consumers/odr" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Droit applicable et juridiction compétente</h2>
            <p className="text-gray-700">
              Les présentes mentions légales et l'ensemble des relations entre l'éditeur et les
              utilisateurs du Service sont soumises au droit suisse, notamment le Code des obligations
              (CO) et la Loi sur la protection des données (nLPD). En cas de litige non résolu à
              l'amiable, les tribunaux compétents du Tribunal d'arrondissement de La Côte (Nyon,
              canton de Vaud, Suisse) seront exclusivement saisis, sauf disposition légale impérative
              contraire applicable au consommateur dans son pays de résidence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Accessibilité numérique</h2>
            <p className="text-gray-700">
              L'éditeur s'engage à améliorer progressivement l'accessibilité de son Service pour les
              personnes en situation de handicap, conformément aux recommandations WCAG 2.1 (niveau AA).
              Si vous rencontrez des difficultés d'accessibilité, contactez-nous à{" "}
              <a href="mailto:admin@dgeconcept.ch" className="text-primary underline">admin@dgeconcept.ch</a>{" "}
              afin que nous puissions vous apporter une assistance adaptée ou améliorer le Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Crédits</h2>
            <p className="text-gray-700">
              <strong>Conception et développement :</strong>{" "}
              <a href="https://wiicode.org" target="_blank" rel="noreferrer" className="text-primary underline">
                Wiicode
              </a>
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Photographies et illustrations :</strong> <span className="text-amber-600 italic">[Indiquez vos sources : Unsplash, Pexels, photos propriétaires, nom du photographe le cas échéant]</span>
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Icônes :</strong> Lucide React (licence ISC), logos Apple et Google (propriétés de leurs détenteurs respectifs, utilisés conformément à leurs guidelines de marque).
            </p>
          </section>

        </div>

      </main>

      <footer className="border-t border-black/5 mt-8 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Plat du Jour — Tous droits réservés ·{" "}
        <Link to="/cgu" className="hover:text-primary">CGU</Link>{" "}·{" "}
        <Link to="/politique-de-confidentialite" className="hover:text-primary">Politique de confidentialité</Link>
      </footer>
    </div>
  );
}
