// Declare process for TypeScript
declare const process: {
  env: {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_GTM_ID?: string;
  };
};

export const gtmConfig = {
  // Your GTM container ID
  containerId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-KPZ9C622",
  
  // Enable/disable GTM (useful for development)
  enabled: process.env.NODE_ENV === 'production' || !!process.env.NEXT_PUBLIC_GTM_ID,
} as const;

export type GTMConfig = typeof gtmConfig;