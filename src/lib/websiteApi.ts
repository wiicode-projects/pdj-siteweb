import type { LegalDocument } from '../i18n/legal/types';
import { parseLegalDocument } from './parseLegalDocument';

export type WebsitePageSlug = 'cgu' | 'cgv' | 'privacy' | 'mentions';

export type PublicWebsitePage = {
  slug: WebsitePageSlug;
  lastUpdate: string;
  document: LegalDocument;
};

export type WebsitePageFetchResult =
  | { source: 'cms'; page: PublicWebsitePage }
  | { source: 'static'; reason: 'unpublished' | 'missing' | 'unavailable' };

export type PublicWebsitePageResponse = {
  status: number;
  availability: 'published' | 'unpublished' | 'missing';
  page: {
    slug: string;
    lastUpdate: string;
    document: unknown;
  } | null;
};

function getWebsiteApiUrl(): string {
  return import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? '';
}

/** Loads a published legal page from the CMS API. Unpublished → static i18n fallback. */
export async function fetchWebsitePage(
  slug: WebsitePageSlug,
  lang = 'fr',
): Promise<WebsitePageFetchResult> {
  const apiUrl = getWebsiteApiUrl();
  if (!apiUrl) {
    return { source: 'static', reason: 'unavailable' };
  }

  try {
    const params = new URLSearchParams({ lang, _: String(Date.now()) });
    const res = await fetch(`${apiUrl}/website/pages/${slug}?${params}`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!res.ok) {
      return { source: 'static', reason: 'unavailable' };
    }

    const data = (await res.json()) as PublicWebsitePageResponse;

    if (data.availability === 'unpublished') {
      return { source: 'static', reason: 'unpublished' };
    }

    if (data.availability === 'missing' || data.status !== 200 || !data.page) {
      return { source: 'static', reason: 'missing' };
    }

    const document = parseLegalDocument(data.page.document);
    if (!document) {
      return { source: 'static', reason: 'unpublished' };
    }

    return {
      source: 'cms',
      page: {
        slug,
        lastUpdate: data.page.lastUpdate ?? '',
        document,
      },
    };
  } catch {
    return { source: 'static', reason: 'unavailable' };
  }
}

export type PublicPricingPlan = {
  id: string;
  billingPeriod: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUALLY' | 'YEARLY';
  currency: string;
  discount: number;
  type: string | null;
  totalPrice: number;
  months: number;
};

export type PublicPricingSubscription = {
  id: string;
  catalogKey: string | null;
  name: string;
  description: string | null;
  targetType: 'USER' | 'RESTAURANT';
  monthlyPrice: number;
  isDefault: boolean;
  color: string | null;
  maxMenusPerDay: number | null;
  maxImagesPerDish: number | null;
  maxProfilePhotos: number | null;
  maxRestaurants: number | null;
  accessMenusAndProfils: boolean;
  rechercheAndGeo: boolean;
  miniGames: boolean;
  hasAdvertisement: boolean;
  backOfficeComplet: boolean;
  idCardPremium: boolean;
  parrainageViaCode: boolean;
  participationTirages: boolean;
  isAllowedToBeItinerant: boolean;
  canHaveGift: boolean;
  isMultiRestaurant: boolean;
  plans: PublicPricingPlan[];
};

export type PricingCatalogResponse = {
  status: number;
  subscriptions: PublicPricingSubscription[];
  user: PublicPricingSubscription[];
  restaurant: PublicPricingSubscription[];
};

const EMPTY_PRICING: PricingCatalogResponse = {
  status: 200,
  subscriptions: [],
  user: [],
  restaurant: [],
};

export async function fetchPricingCatalog(): Promise<PricingCatalogResponse> {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '');
  if (!apiUrl) return EMPTY_PRICING;

  try {
    const res = await fetch(`${apiUrl}/subscriptions/public`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return EMPTY_PRICING;
    const data = (await res.json()) as PricingCatalogResponse;
    return {
      status: data.status ?? 200,
      subscriptions: Array.isArray(data.subscriptions) ? data.subscriptions : [],
      user: Array.isArray(data.user) ? data.user : [],
      restaurant: Array.isArray(data.restaurant) ? data.restaurant : [],
    };
  } catch {
    return EMPTY_PRICING;
  }
}

export type PublicTestimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  imageUrl: string | null;
  rating: number;
};

export type LandingStat = {
  key: 'downloads' | 'restaurants' | 'menusServed' | 'averageRating';
  val: number;
  suffix: string;
  isDecimal: boolean;
};

export type PublicFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type WebsitePublicData = {
  statsEnabled: boolean;
  testimonialsEnabled: boolean;
  heroBadgeEnabled: boolean;
  faqEnabled: boolean;
  platformName: string;
  supportEmail: string;
  supportPhone: string;
  stats: LandingStat[];
  testimonials: PublicTestimonial[];
  faqItems: PublicFaqItem[];
};

export type TombolaRewardRank = 1 | 2 | 3;

export type TombolaHistoryWinner = {
  rank: TombolaRewardRank;
  tombolaUsername: string | null;
  reward: {
    name: string;
    imageUrl: string | null;
  };
};

export type TombolaHistoryItem = {
  id: string;
  year: number;
  month: number;
  title: string;
  drawnAt: string | null;
  winners: TombolaHistoryWinner[];
};

export type TombolaHistoryResponse = {
  status: number;
  tombolas: TombolaHistoryItem[];
  total: number;
  page: number;
  limit: number;
};

const HIDDEN_DEFAULT: WebsitePublicData = {
  statsEnabled: false,
  testimonialsEnabled: false,
  heroBadgeEnabled: true,
  faqEnabled: false,
  platformName: 'Le Plat du Jour',
  supportEmail: 'support@leplatdujour.ch',
  supportPhone: '',
  stats: [],
  testimonials: [],
  faqItems: [],
};

export function getApiBaseUrl(): string {
  const url = import.meta.env.VITE_API_URL?.replace(/\/$/, '');
  if (!url) return '';
  return url.replace(/\/api\/v1$/, '');
}

export function resolveMediaUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = getApiBaseUrl();
  if (!base) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export async function fetchWebsitePublic(lang = 'fr'): Promise<WebsitePublicData> {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '');
  if (!apiUrl) return HIDDEN_DEFAULT;

  try {
    const params = new URLSearchParams({ lang });
    const res = await fetch(`${apiUrl}/website/public?${params}`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return HIDDEN_DEFAULT;
    const data = (await res.json()) as WebsitePublicData;
    return {
      statsEnabled: Boolean(data.statsEnabled),
      testimonialsEnabled: Boolean(data.testimonialsEnabled),
      heroBadgeEnabled: data.heroBadgeEnabled !== false,
      faqEnabled: Boolean(data.faqEnabled),
      platformName: data.platformName?.trim() || HIDDEN_DEFAULT.platformName,
      supportEmail: data.supportEmail?.trim() || HIDDEN_DEFAULT.supportEmail,
      supportPhone: data.supportPhone?.trim() || '',
      stats: Array.isArray(data.stats) ? data.stats : [],
      testimonials: Array.isArray(data.testimonials) ? data.testimonials : [],
      faqItems: Array.isArray(data.faqItems) ? data.faqItems : [],
    };
  } catch {
    return HIDDEN_DEFAULT;
  }
}

export async function fetchTombolaHistory(
  page = 1,
  limit = 12,
): Promise<TombolaHistoryResponse> {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '');
  if (!apiUrl) throw new Error('API URL not configured');

  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  const res = await fetch(`${apiUrl}/website/tombola-history?${params}`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = (await res.json()) as TombolaHistoryResponse;
  return {
    status: data.status ?? 200,
    tombolas: Array.isArray(data.tombolas) ? data.tombolas : [],
    total: data.total ?? 0,
    page: data.page ?? page,
    limit: data.limit ?? limit,
  };
}

export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  website?: string;
};

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const apiUrl = getWebsiteApiUrl();
  if (!apiUrl) throw new Error('API URL not configured');

  const res = await fetch(`${apiUrl}/website/contact`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
}
