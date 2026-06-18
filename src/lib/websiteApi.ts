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

export type WebsitePublicData = {
  statsEnabled: boolean;
  testimonialsEnabled: boolean;
  stats: LandingStat[];
  testimonials: PublicTestimonial[];
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
  stats: [],
  testimonials: [],
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

export async function fetchWebsitePublic(): Promise<WebsitePublicData> {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '');
  if (!apiUrl) return HIDDEN_DEFAULT;

  try {
    const res = await fetch(`${apiUrl}/website/public`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return HIDDEN_DEFAULT;
    const data = (await res.json()) as WebsitePublicData;
    return {
      statsEnabled: Boolean(data.statsEnabled),
      testimonialsEnabled: Boolean(data.testimonialsEnabled),
      stats: Array.isArray(data.stats) ? data.stats : [],
      testimonials: Array.isArray(data.testimonials) ? data.testimonials : [],
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
