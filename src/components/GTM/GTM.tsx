'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { gtmConfig } from '@/config/gtm';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function GTM() {
  // Initialize dataLayer
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  }, []);

  if (!gtmConfig.enabled || !gtmConfig.containerId) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmConfig.containerId}');
          `,
        }}
      />
    </>
  );
}