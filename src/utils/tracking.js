/* ============================================================
   HEAL360 WELLNESS — TRACKING UTILITY
   Handles: Analytics tracking, UTM persistence, event tracking
   ============================================================ */

/**
 * Track events to Google Analytics and Facebook Pixel
 * @param {string} name - Event name
 * @param {string} source - Event source/location
 * @param {object} extra - Additional event data
 */
export function trackEvent(name, source, extra = {}) {
  const payload = { source: source || 'unknown', ...extra };

  // Google Analytics (GA4)
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload);
  }

  // Facebook Pixel
  if (typeof window.fbq === 'function') {
    const eventMap = {
      CTA_Click_BookAppointment: () => window.fbq('track', 'InitiateCheckout', payload),
      Booking_Start: () => window.fbq('track', 'InitiateCheckout', payload),
      Booking_Complete: () => window.fbq('track', 'Purchase', { value: 199, currency: 'USD' }),
      CTA_Click_WhatsApp: () => window.fbq('trackCustom', 'WhatsApp_CTA', payload),
    };

    if (eventMap[name]) {
      eventMap[name]();
    } else {
      window.fbq('trackCustom', name, payload);
    }
  }

  // Console log in development
  if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
    console.log('[TRACK]', name, payload);
  }
}

/**
 * Track page view
 */
export function trackPageView() {
  trackEvent('PageView', 'page_load', { url: window.location.href });
}

/**
 * Initialize UTM parameter persistence
 */
export function initUTMPersistence() {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const params = new URLSearchParams(window.location.search);
  let stored = {};

  try {
    stored = JSON.parse(sessionStorage.getItem('h360_utm') || '{}');
  } catch (e) {
    console.warn('Failed to parse stored UTM parameters');
  }

  // Update stored UTM params with any new ones from URL
  keys.forEach(key => {
    const value = params.get(key);
    if (value) {
      stored[key] = value;
    }
  });

  try {
    sessionStorage.setItem('h360_utm', JSON.stringify(stored));
  } catch (e) {
    console.warn('Failed to store UTM parameters');
  }
}

/**
 * Get stored UTM parameters
 * @returns {object} UTM parameters object
 */
export function getUTM() {
  try {
    return JSON.parse(sessionStorage.getItem('h360_utm') || '{}');
  } catch (e) {
    return {};
  }
}

/**
 * Build booking URL with UTM parameters
 * @param {string} baseUrl - Base booking URL
 * @returns {string} URL with UTM parameters appended
 */
export function buildBookingURL(baseUrl = '#') {
  try {
    if (baseUrl === '#') return baseUrl;

    const url = new URL(baseUrl);
    const utmParams = getUTM();

    Object.entries(utmParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    return url.toString();
  } catch (e) {
    console.warn('Failed to build booking URL:', e);
    return baseUrl;
  }
}

// Booking URL configuration
// TODO: Replace with actual booking/Calendly/payment URL
export const BOOKING_URL = '#';
