import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logomascotte.svg';
import Footer from '../components/Footer';
import { Pricing } from '../components/Pricing';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import { useLanguage } from '../i18n/LanguageContext';
import { legalUi } from '../i18n/legal/ui';

export default function Tarifs() {
  const { lang, t } = useLanguage();
  const ui = legalUi[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t.nav.pricing} — Le Plat du Jour`;
  }, [lang, t.nav.pricing]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5 px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img src={logo} alt="Le Plat du Jour" className="h-8 w-auto" />
          <span className="font-bold text-gray-900 truncate">Le Plat du Jour</span>
        </Link>
        <div className="flex items-center gap-3 flex-shrink-0">
          <LanguageSelector />
          <Link to="/" className="text-sm text-primary font-semibold hover:underline whitespace-nowrap">
            {ui.backHome}
          </Link>
        </div>
      </header>

      <main>
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
