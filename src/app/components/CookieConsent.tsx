'use client';

import { useEffect, useState } from 'react';

const GA_TRACKING_ID = 'G-5H29D5M07R';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script1.async = true;

    const script2 = document.createElement('script');
    script2.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
        cookie_flags: 'SameSite=None;Secure'
      });
    `;

    // Only append scripts if they haven't been loaded yet
    if (!document.querySelector(`script[src="${script1.src}"]`)) {
      document.head.appendChild(script1);
      document.head.appendChild(script2);
    }
  };

  const handleCookieConsent = (accepted: boolean) => {
    const consentValue = accepted ? 'accepted' : 'declined';
    localStorage.setItem('cookie-consent', consentValue);
    setShowBanner(false);
    
    if (accepted) {
      loadGoogleAnalytics();
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 flex-1">
          We use cookies to analyze our website traffic and improve your experience.
          By clicking &quot;Accept&quot;, you consent to our use of cookies. See our{' '}
          <a href="/privacy" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>{' '}
          for more information.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => handleCookieConsent(false)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Decline
          </button>
          <button
            onClick={() => handleCookieConsent(true)}
            className="px-4 py-2 text-sm text-white bg-orange-500 rounded-md hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 