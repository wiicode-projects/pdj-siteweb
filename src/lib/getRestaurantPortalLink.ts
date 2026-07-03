const PORTAL_URLS = {
  local: 'http://localhost:4250',
  staging: 'https://pdj-backoffice-dev.wiicode.tech',
  production: 'https://backoffice.leplatdujour.ch',
} as const;

type AppEnv = keyof typeof PORTAL_URLS;

function getPortalBaseUrl(): string {
  const explicit = import.meta.env.VITE_RESTAURANT_PORTAL_URL?.replace(/\/$/, '');
  if (explicit) return explicit;

  const appEnv = import.meta.env.VITE_APP_ENV as AppEnv | undefined;
  if (appEnv && appEnv in PORTAL_URLS) return PORTAL_URLS[appEnv];

  if (import.meta.env.DEV) return PORTAL_URLS.local;

  return PORTAL_URLS.staging;
}

/** Backoffice login — existing restaurateurs */
export function getRestaurantPortalLink(): string {
  return `${getPortalBaseUrl()}/login`;
}

/** Backoffice signup — default entry (mode selection) */
export function getRestaurantSignupLink(): string {
  return `${getPortalBaseUrl()}/register`;
}

/** Demo signup — free trial account */
export function getDemoSignupLink(): string {
  return `${getPortalBaseUrl()}/register?mode=demo`;
}

/** Direct subscription signup with pre-selected plan */
export function getSubscribeSignupLink(
  catalogKey: string,
  billingPeriod?: string,
): string {
  const params = new URLSearchParams({ mode: 'subscribe', plan: catalogKey });
  if (billingPeriod) params.set('period', billingPeriod);
  return `${getPortalBaseUrl()}/register?${params.toString()}`;
}
