import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logomascotte.svg';
import { useLanguage } from '../../i18n/LanguageContext';
import { legalUi } from '../../i18n/legal/ui';
import { LanguageSelector } from '../ui/LanguageSelector';

interface LegalPageLayoutProps {
  children: React.ReactNode;
  lastUpdate: string;
  footerLinks: Array<{ to: string; label: string }>;
}

export function LegalPageLayout({ children, lastUpdate, footerLinks }: LegalPageLayoutProps) {
  const { lang } = useLanguage();
  const ui = legalUi[lang];

  useEffect(() => { window.scrollTo(0, 0); }, [lang]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-sm text-gray-400 mb-6">{ui.lastUpdate} : {lastUpdate}</p>
        {children}
      </main>

      <footer className="border-t border-black/5 mt-8 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Le Plat du Jour — {ui.allRights}
        {' · '}
        {footerLinks.map((link, i) => (
          <span key={link.to}>
            {i > 0 && ' · '}
            <Link to={link.to} className="hover:text-primary">{link.label}</Link>
          </span>
        ))}
      </footer>
    </div>
  );
}

export function useLegalFooterLinks() {
  const { t } = useLanguage();
  return [
    { to: '/cgu', label: t.footer.terms },
    { to: '/cgv', label: t.footer.salesTerms },
    { to: '/politique-de-confidentialite', label: t.footer.privacy },
    { to: '/mentions-legales', label: t.footer.legalNotice },
  ];
}
