const LOCALE_MAP: Record<string, string> = {
  fr: 'fr-CH',
  en: 'en-CH',
  de: 'de-CH',
  it: 'it-CH',
};

export function formatChf(amount: number, lang: string): string {
  const locale = LOCALE_MAP[lang] ?? 'fr-CH';
  const fractionDigits = Number.isInteger(amount) ? 0 : 2;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(amount);
}

export function formatMonthlyPrice(amount: number, lang: string, perMonthLabel: string): string {
  return `${formatChf(amount, lang)} ${perMonthLabel}`.trim();
}

export function formatPeriodPrice(
  amount: number,
  lang: string,
  perPeriodLabel: string,
): string {
  return `${formatChf(amount, lang)}${perPeriodLabel}`;
}
