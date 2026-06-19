import type { PublicPricingSubscription } from './websiteApi';

export type PricingFeatureLabels = {
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

function withCount(template: string, count: number): string {
  return template.replace(/\{\{count\}\}/g, String(count));
}

export function buildSubscriptionFeatureLabels(
  sub: PublicPricingSubscription,
  labels: PricingFeatureLabels,
): string[] {
  const items: string[] = [];

  if (sub.targetType === 'USER') {
    if (sub.accessMenusAndProfils) items.push(labels.accessMenus);
    if (sub.rechercheAndGeo) items.push(labels.searchGeo);
    if (sub.miniGames && sub.hasAdvertisement) items.push(labels.miniGamesWithAds);
    else if (sub.miniGames) items.push(labels.miniGames);
    if (!sub.hasAdvertisement) items.push(labels.noAds);
    if (sub.backOfficeComplet) {
      items.push(labels.backOffice);
      items.push(labels.favorites);
    }
    if (sub.parrainageViaCode) items.push(labels.referral);
    if (sub.idCardPremium) items.push(labels.idCardPremium);
    if (sub.participationTirages) items.push(labels.tombola);
    return items;
  }

  if (sub.maxMenusPerDay != null && sub.maxMenusPerDay > 0) {
    items.push(withCount(labels.menusPerDay, sub.maxMenusPerDay));
  }
  if (sub.maxImagesPerDish != null && sub.maxImagesPerDish > 0) {
    items.push(withCount(labels.imagesPerDish, sub.maxImagesPerDish));
  }
  if (sub.maxProfilePhotos != null && sub.maxProfilePhotos > 0) {
    items.push(withCount(labels.profilePhotos, sub.maxProfilePhotos));
  }
  if (sub.canHaveGift) items.push(labels.menuGift);
  if (sub.canHaveGift) items.push(labels.highlighted);
  if (sub.isAllowedToBeItinerant) items.push(labels.itinerant);
  if (sub.isMultiRestaurant && sub.maxRestaurants != null && sub.maxRestaurants > 1) {
    items.push(withCount(labels.multiEstablishment, sub.maxRestaurants));
    items.push(labels.extraEstablishment);
  }

  return items;
}

export function findPlanByPeriod(
  sub: PublicPricingSubscription,
  period: 'MONTHLY' | 'YEARLY' | 'SEMI_ANNUALLY',
) {
  return sub.plans.find((p) => p.billingPeriod === period) ?? null;
}
