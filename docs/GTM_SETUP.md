# Google Tag Manager Setup Instructions

## 1. Get Your GTM Container ID
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or use an existing one
3. Copy your container ID (format: GTM-XXXXXXX)

## 2. Environment Setup
1. Create a `.env.local` file in your project root
2. Add your GTM ID:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXXX
   ```

## 3. Usage Examples

### Track Custom Events
```typescript
import { trackEvent, trackButtonClick, trackFormSubmit } from '@/lib/gtm';

// Track a custom event
trackEvent('user_signup', {
  user_type: 'landlord',
  plan: 'premium'
});

// Track button clicks
trackButtonClick('book_now_button', {
  service_type: 'property_inspection'
});

// Track form submissions
trackFormSubmit('contact_form', {
  form_type: 'lead_generation'
});
```

### Track Page Views (Next.js App Router)
The GTM component automatically handles page view tracking in Next.js App Router.

## 4. Verification
1. Deploy to production (GTM only loads in production by default)
2. Check Google Tag Manager preview mode
3. Verify events are firing correctly in GA4 or other connected tools

## 5. Development vs Production
- GTM is disabled in development by default
- Set `enabled: true` in `src/config/gtm.ts` if you need to test in development
- Remember to use `.env.local` for development and proper environment variables for production