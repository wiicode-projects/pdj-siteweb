import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchPricingCatalog,
  type PricingCatalogResponse,
  type PublicPricingSubscription,
} from '../lib/websiteApi';

export type PricingCatalogState = PricingCatalogResponse & {
  loaded: boolean;
  userFree: PublicPricingSubscription | null;
  userPremium: PublicPricingSubscription | null;
  restaurantFree: PublicPricingSubscription | null;
  restaurantPremium: PublicPricingSubscription | null;
  restaurantMulti: PublicPricingSubscription | null;
};

const CATALOG_KEYS = {
  userFree: 'user-standard',
  userPremium: 'user-premium',
  restaurantFree: 'restaurant-classique',
  restaurantPremium: 'restaurant-premium',
  restaurantMulti: 'restaurant-multi',
} as const;

function pickByKey(
  list: PublicPricingSubscription[],
  catalogKey: string,
): PublicPricingSubscription | null {
  return list.find((s) => s.catalogKey === catalogKey) ?? null;
}

const EMPTY: PricingCatalogState = {
  status: 200,
  subscriptions: [],
  user: [],
  restaurant: [],
  loaded: false,
  userFree: null,
  userPremium: null,
  restaurantFree: null,
  restaurantPremium: null,
  restaurantMulti: null,
};

const PricingCatalogContext = createContext<PricingCatalogState>(EMPTY);

export function PricingCatalogProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PricingCatalogState>(EMPTY);

  useEffect(() => {
    let active = true;
    fetchPricingCatalog().then((data) => {
      if (!active) return;
      setState({
        ...data,
        loaded: true,
        userFree: pickByKey(data.user, CATALOG_KEYS.userFree),
        userPremium: pickByKey(data.user, CATALOG_KEYS.userPremium),
        restaurantFree: pickByKey(data.restaurant, CATALOG_KEYS.restaurantFree),
        restaurantPremium: pickByKey(data.restaurant, CATALOG_KEYS.restaurantPremium),
        restaurantMulti: pickByKey(data.restaurant, CATALOG_KEYS.restaurantMulti),
      });
    });
    return () => { active = false; };
  }, []);

  return (
    <PricingCatalogContext.Provider value={state}>
      {children}
    </PricingCatalogContext.Provider>
  );
}

export function usePricingCatalog(): PricingCatalogState {
  return useContext(PricingCatalogContext);
}
