// src/hooks/useAnalytics.ts
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set',
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

export const GA_TRACKING_ID = 'G-LG6RT04XLW'; // Replace with your GA4 tracking ID

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    const trackPageview = () => {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search + location.hash,
        page_title: document.title,
      });
    };

    trackPageview();
  }, [location]);

  // Track events
  const trackEvent = useCallback((
    eventName: string,
    eventParams?: Record<string, any>
  ) => {
    window.gtag('event', eventName, eventParams);
  }, []);

  // Track user engagement
  const trackEngagement = useCallback((
    elementId: string,
    elementType: string,
    action: string
  ) => {
    window.gtag('event', 'user_engagement', {
      element_id: elementId,
      element_type: elementType,
      action: action,
      page_path: location.pathname + location.search + location.hash,
    });
  }, [location]);

  // Track form submissions
  const trackFormSubmission = useCallback((
    formName: string,
    status: 'success' | 'error',
    errorMessage?: string
  ) => {
    window.gtag('event', 'form_submission', {
      form_name: formName,
      status: status,
      error_message: errorMessage,
    });
  }, []);

  // Track time on page
  useEffect(() => {
    let startTime = Date.now();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Date.now() - startTime;
        window.gtag('event', 'time_on_page', {
          page_path: location.pathname + location.search + location.hash,
          time_seconds: Math.round(timeSpent / 1000),
        });
      } else {
        startTime = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      const timeSpent = Date.now() - startTime;
      window.gtag('event', 'time_on_page', {
        page_path: location.pathname + location.search + location.hash,
        time_seconds: Math.round(timeSpent / 1000),
      });
    };
  }, [location]);

  return {
    trackEvent,
    trackEngagement,
    trackFormSubmission,
  };
};