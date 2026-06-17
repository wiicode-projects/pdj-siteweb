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
