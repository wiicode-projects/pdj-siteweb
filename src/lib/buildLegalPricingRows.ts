import { buildSubscriptionFeatureLabels, type PricingFeatureLabels } from './pricingFeatures';
import { formatPeriodPrice } from './formatPrice';
import type { PublicPricingSubscription } from './websiteApi';

export function buildLegalPricingRows(
  subscriptions: PublicPricingSubscription[],
  lang: string,
  perMonthLabel: string,
  featureLabels: PricingFeatureLabels,
): string[][] {
  return subscriptions.map((sub) => {
    const price = formatPeriodPrice(sub.monthlyPrice, lang, perMonthLabel);
    const features = buildSubscriptionFeatureLabels(sub, featureLabels).join(', ');
    return [sub.name, price, features || sub.description || '—'];
  });
}
