# Google Tag Manager - Complete Implementation & Testing Guide

## 🎯 Current Implementation Status

✅ **Root Layout Integration** - GTM component added to main layout
✅ **Container ID Configuration** - Using GTM-KPZ9C622
✅ **NoScript Fallback** - Proper iframe implementation
✅ **Client-Side Navigation Tracking** - Added route change detection
✅ **Environment Configuration** - Production/development handling

## 🔧 Recent Fixes Applied

### 1. Client-Side Navigation Tracking
Added automatic page view tracking for Next.js App Router client-side navigation:

```typescript
// In GTM.tsx component
useEffect(() => {
  if (gtmConfig.enabled && gtmConfig.containerId) {
    const timer = setTimeout(() => {
      const url = window.location.href;
      const title = document.title;
      trackPageView(url, title);
    }, 100);
    return () => clearTimeout(timer);
  }
}, [pathname, searchParams]);
```

### 2. Debug Component for Development
Added GTMDebug component that shows status information in development mode:
- GTM enabled status
- Container ID verification
- DataLayer status
- Script loading confirmation

## 🧪 Testing Procedures

### Local Development Testing
1. **Start development server**:
   ```bash
   pnpm run dev
   ```

2. **Check browser console** for GTM debug information:
   ```
   GTM Debug Info: {
     enabled: true,
     containerId: "GTM-KPZ9C622",
     dataLayerExists: true,
     dataLayerLength: 2,
     environment: "development"
   }
   ```

3. **Verify visual debug panel** (bottom-right corner in development)

### Production Testing
1. **Deploy to production environment**
2. **Use GTM Preview Mode**:
   - Go to Google Tag Manager
   - Click "Preview" button
   - Enter your production URL
   - Navigate through different pages
   - Verify page view events fire correctly

3. **Check Network Tab**:
   - Look for requests to `googletagmanager.com`
   - Verify `gtm.js` script loads
   - Confirm dataLayer pushes occur

### Manual Event Testing
Test specific tracking events:

```typescript
// Test page view tracking
import { trackPageView } from '@/lib/gtm';
trackPageView(window.location.href, document.title);

// Test custom events
import { trackEvent, trackButtonClick } from '@/lib/gtm';
trackEvent('custom_event', { category: 'test', label: 'example' });
trackButtonClick('test_button');
```

## 📊 Expected Behavior

### Page Load Tracking
- ✅ Initial page load triggers GTM script
- ✅ Page view event pushed to dataLayer
- ✅ Noscript fallback loads for users without JavaScript

### Client-Side Navigation
- ✅ Route changes trigger page view tracking
- ✅ URL and title updated in dataLayer
- ✅ Events fire for SPA navigation

### Environment Handling
- **Development**: GTM loads but with debug information
- **Production**: Full GTM functionality with proper container ID

## 🔍 Troubleshooting

### Common Issues & Solutions

1. **GTM Not Loading**
   - Check container ID in `.env.local`
   - Verify `NEXT_PUBLIC_GTM_ID=GTM-KPZ9C622`
   - Confirm GTM component in root layout

2. **Page Views Not Tracking**
   - Ensure `usePathname()` hook is working
   - Check dataLayer initialization
   - Verify GTM Preview mode is active

3. **Events Not Firing**
   - Confirm dataLayer exists in browser console
   - Check network requests to GTM servers
   - Validate event structure in GTM tags

## 🚀 Production Deployment Checklist

- [ ] GTM container ID verified as `GTM-KPZ9C622`
- [ ] Environment variables configured for production
- [ ] GTM Preview mode tested with production URL
- [ ] Page view tracking verified across all routes
- [ ] Client-side navigation events confirmed
- [ ] Debug component removed or disabled for production

## 📈 Monitoring & Analytics

After deployment, monitor:
- Page view counts in Google Analytics
- User flow through different pages
- Event tracking accuracy
- Bounce rates and engagement metrics

The implementation now provides complete GTM coverage across all pages with proper client-side navigation tracking.