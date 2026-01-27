'use client';

import { Suspense } from 'react';
import { GTMTracking } from './GTMTracking';

export function GTMSuspenseWrapper() {
  return (
    <Suspense fallback={null}>
      <GTMTracking />
    </Suspense>
  );
}