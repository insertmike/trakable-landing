'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    gtag_enable?: boolean;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if we already have consent
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Trigger GA load
    window.gtag_enable = true;
    // Load GA
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=G-5H29D5M07R`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5H29D5M07R');
    `;
    document.head.appendChild(script2);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 flex-1">
          We use cookies to analyze our website traffic and improve your experience.
          By clicking "Accept", you consent to our use of cookies. See our{' '}
          <a href="/privacy" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>{' '}
          for more information.
        </p>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm text-white bg-orange-500 rounded-md hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 