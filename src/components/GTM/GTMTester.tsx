'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function GTMTester() {
  const pathname = usePathname();

  useEffect(() => {
    // Simple GTM test - push to dataLayer on route change
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view_test',
        page_path: pathname,
        timestamp: new Date().toISOString(),
      });
      
      console.log('GTM Test Event Pushed:', {
        event: 'page_view_test',
        page_path: pathname,
        timestamp: new Date().toISOString(),
      });
    }
  }, [pathname]);

  return null;
}