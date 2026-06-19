import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Gift, Loader2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logomascotte.svg';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import { useLanguage } from '../i18n/LanguageContext';
import { legalUi } from '../i18n/legal/ui';
import {
  fetchTombolaHistory,
  resolveMediaUrl,
  type TombolaHistoryItem,
  type TombolaHistoryWinner,
  type TombolaRewardRank,
} from '../lib/websiteApi';

const LOCALE: Record<string, string> = {
  fr: 'fr-CH',
  en: 'en-GB',
  de: 'de-CH',
  it: 'it-CH',
};

type SelectedPrize = {
  item: TombolaHistoryItem;
  winner: TombolaHistoryWinner;
};

function formatMonthYear(year: number, month: number, lang: string): string {
  const date = new Date(year, month - 1, 1);
  return date.toLocaleDateString(LOCALE[lang] ?? 'fr-CH', { month: 'long', year: 'numeric' });
}

function formatDrawnAt(drawnAt: string | null, lang: string): string | null {
  if (!drawnAt) return null;
  const date = new Date(drawnAt);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString(LOCALE[lang] ?? 'fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function PrizeDetailModal({
  selection,
  onClose,
  rankLabel,
  pendingLabel,
  drawnAtLabel,
  lang,
  labels,
}: {
  selection: SelectedPrize;
  onClose: () => void;
  rankLabel: (rank: TombolaRewardRank) => string;
  pendingLabel: string;
  drawnAtLabel: string;
  lang: string;
  labels: {
    prize_label: string;
    winner_label: string;
    draw_label: string;
    close: string;
  };
}) {
  const { item, winner } = selection;
  const imageUrl = resolveMediaUrl(winner.reward.imageUrl);
  const drawnLabel = formatDrawnAt(item.drawnAt, lang);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="prize-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label={labels.close}
      />

      <motion.div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          aria-label={labels.close}
        >
          <X size={18} />
        </button>

        <div className="aspect-[4/3] bg-purple-50 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={winner.reward.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-purple-300">
              <Gift size={56} aria-hidden />
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-700 mb-1">
              {rankLabel(winner.rank)}
            </p>
            <h2 id="prize-modal-title" className="text-xl font-bold text-gray-900">
              {winner.reward.name}
            </h2>
          </div>

          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {labels.prize_label}
              </dt>
              <dd className="mt-0.5 text-gray-800 font-medium">{winner.reward.name}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {labels.winner_label}
              </dt>
              <dd
                className={`mt-0.5 font-medium ${
                  winner.tombolaUsername ? 'text-gray-900' : 'text-gray-400 italic'
                }`}
              >
                {winner.tombolaUsername ?? pendingLabel}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {labels.draw_label}
              </dt>
              <dd className="mt-0.5 text-gray-800">
                <span className="font-medium">{item.title}</span>
                <span className="text-gray-500"> · {formatMonthYear(item.year, item.month, lang)}</span>
                {drawnLabel && (
                  <p className="text-gray-500 mt-0.5">
                    {drawnAtLabel} {drawnLabel}
                  </p>
                )}
              </dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {labels.close}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TombolaCard({
  item,
  rankLabel,
  pendingLabel,
  drawnAtLabel,
  viewPrizeLabel,
  lang,
  onPrizeClick,
}: {
  item: TombolaHistoryItem;
  rankLabel: (rank: TombolaRewardRank) => string;
  pendingLabel: string;
  drawnAtLabel: string;
  viewPrizeLabel: string;
  lang: string;
  onPrizeClick: (selection: SelectedPrize) => void;
}) {
  const drawnLabel = formatDrawnAt(item.drawnAt, lang);

  return (
    <article className="bg-white border border-black/8 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
        <p className="text-sm text-gray-500 mt-1">{formatMonthYear(item.year, item.month, lang)}</p>
        {drawnLabel && (
          <p className="text-xs text-gray-400 mt-1">
            {drawnAtLabel} {drawnLabel}
          </p>
        )}
      </div>

      {item.winners.length === 0 ? (
        <p className="text-sm text-gray-400">—</p>
      ) : (
        <ul className="space-y-3">
          {item.winners.map((winner) => {
            const imageUrl = resolveMediaUrl(winner.reward.imageUrl);
            return (
              <li key={`${item.id}-${winner.rank}`}>
                <button
                  type="button"
                  onClick={() => onPrizeClick({ item, winner })}
                  className="w-full flex items-center gap-3 bg-purple-50 rounded-xl p-3 text-left hover:bg-purple-100/80 hover:ring-2 hover:ring-purple-200 transition-all cursor-pointer"
                  aria-label={`${viewPrizeLabel}: ${winner.reward.name}`}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Gift size={22} className="text-purple-600" aria-hidden />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                      {rankLabel(winner.rank)}
                    </p>
                    <p
                      className={`text-sm font-semibold truncate ${
                        winner.tombolaUsername ? 'text-gray-900' : 'text-gray-400 italic'
                      }`}
                    >
                      {winner.tombolaUsername ?? pendingLabel}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{winner.reward.name}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}

export default function TombolaHistory() {
  const { lang, t } = useLanguage();
  const ui = legalUi[lang];
  const tb = t.tombola;

  const [tombolas, setTombolas] = useState<TombolaHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<SelectedPrize | null>(null);

  const loadHistory = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchTombolaHistory(1, 12);
      setTombolas(data.tombolas);
    } catch {
      setError(true);
      setTombolas([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    void loadHistory();
  }, [loadHistory, lang]);

  const rankLabel = (rank: TombolaRewardRank) => {
    const labels: Record<TombolaRewardRank, string> = {
      1: tb.rank_first,
      2: tb.rank_second,
      3: tb.rank_third,
    };
    return labels[rank];
  };

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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{tb.pageTitle}</h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            {tb.subtitle}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16" role="status" aria-label="Loading">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">{tb.load_error}</p>
            <button
              type="button"
              onClick={() => void loadHistory()}
              className="text-sm font-semibold text-primary hover:underline"
            >
              {tb.retry}
            </button>
          </div>
        ) : tombolas.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-black/5">
            <Gift className="w-12 h-12 text-purple-300 mx-auto mb-4" aria-hidden />
            <p className="text-gray-500">{tb.history_empty}</p>
          </div>
        ) : (
          <div className="space-y-5">
            {tombolas.map((item) => (
              <TombolaCard
                key={item.id}
                item={item}
                rankLabel={rankLabel}
                pendingLabel={tb.winner_pending}
                drawnAtLabel={tb.drawn_at}
                viewPrizeLabel={tb.view_prize}
                lang={lang}
                onPrizeClick={setSelectedPrize}
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">{tb.cta_download}</p>
          <Link
            to="/#download"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {t.nav.download}
          </Link>
        </div>
      </main>

      <footer className="border-t border-black/5 mt-8 py-6 text-center text-xs text-gray-400 bg-white">
        © {new Date().getFullYear()} Le Plat du Jour — {ui.allRights}
      </footer>

      <AnimatePresence>
        {selectedPrize && (
          <PrizeDetailModal
            selection={selectedPrize}
            onClose={() => setSelectedPrize(null)}
            rankLabel={rankLabel}
            pendingLabel={tb.winner_pending}
            drawnAtLabel={tb.drawn_at}
            lang={lang}
            labels={{
              prize_label: tb.prize_label,
              winner_label: tb.winner_label,
              draw_label: tb.draw_label,
              close: tb.close,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
