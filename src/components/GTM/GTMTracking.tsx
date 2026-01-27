'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gtmConfig } from '@/config/gtm';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function GTMTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route changes
  useEffect(() => {
    if (gtmConfig.enabled && gtmConfig.containerId) {
      // Wait a bit for the GTM script to load
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'page_view',
            page_location: window.location.href,
            page_title: document.title,
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  return null;
}