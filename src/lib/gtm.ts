// Utility functions for Google Tag Manager events

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push event to dataLayer
 */
export function gtmPush(event: string, data: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
  }
}

/**
 * Track page views
 */
export function trackPageView(url: string, title?: string) {
  gtmPush('page_view', {
    page_location: url,
    page_title: title || document.title,
  });
}

/**
 * Track custom events
 */
export function trackEvent(eventName: string, eventData: Record<string, any> = {}) {
  gtmPush(eventName, eventData);
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string, additionalData: Record<string, any> = {}) {
  gtmPush('form_submit', {
    form_name: formName,
    ...additionalData,
  });
}

/**
 * Track button clicks
 */
export function trackButtonClick(buttonName: string, additionalData: Record<string, any> = {}) {
  gtmPush('button_click', {
    button_name: buttonName,
    ...additionalData,
  });
}

/**
 * Track navigation clicks
 */
export function trackNavigation(destination: string, additionalData: Record<string, any> = {}) {
  gtmPush('navigation_click', {
    destination,
    ...additionalData,
  });
}