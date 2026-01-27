'use client';

import { useEffect } from 'react';
import { gtmConfig } from '@/config/gtm';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function GTMDebug() {
  useEffect(() => {
    // Debug GTM status
    console.log('GTM Debug Info:', {
      enabled: gtmConfig.enabled,
      containerId: gtmConfig.containerId,
      dataLayerExists: typeof window !== 'undefined' && !!window.dataLayer,
      dataLayerLength: typeof window !== 'undefined' && window.dataLayer ? window.dataLayer.length : 0,
      environment: process.env.NODE_ENV,
    });

    // Check if GTM script is loaded
    const gtmScript = document.querySelector(`script[src*="googletagmanager.com/gtm.js"]`);
    console.log('GTM Script Loaded:', !!gtmScript);

    // Check if noscript iframe exists
    const noscriptIframe = document.querySelector('noscript iframe');
    console.log('Noscript Iframe Exists:', !!noscriptIframe);

  }, []);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#000',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <div><strong>GTM Status:</strong></div>
      <div>Enabled: {gtmConfig.enabled ? '✅' : '❌'}</div>
      <div>ID: {gtmConfig.containerId}</div>
      <div>Env: {process.env.NODE_ENV}</div>
      <div>DataLayer: {typeof window !== 'undefined' && window.dataLayer ? `✅ (${window.dataLayer.length})` : '❌'}</div>
    </div>
  );
}