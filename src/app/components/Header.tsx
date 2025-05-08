"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ExternalLinkIcon = () => (
  <svg
    className="inline-block ml-1 w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="favicon.svg"
            alt="Trakable"
            width={30}
            height={30}
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="https://www.reddit.com/r/trakableapp/"
            target="_blank"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center"
          >
            Community
            <ExternalLinkIcon />
          </Link>
          <Link
            href="https://www.notion.so/1da606d25a9080e39cdefd0961afc8f0?pvs=21"
            target="_blank"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center"
          >
            Roadmap
            <ExternalLinkIcon />
          </Link>
          <Link
            href="mailto:contact@dexterlab.site"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="https://trakable.app"
            className="inline-flex items-center justify-center py-2 px-4 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
          >
            Download App
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="https://www.reddit.com/r/trakableapp/"
              target="_blank"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
              <ExternalLinkIcon />
            </Link>
            <Link
              href="https://www.notion.so/1da606d25a9080e39cdefd0961afc8f0?pvs=21"
              target="_blank"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
              <ExternalLinkIcon />
            </Link>
            <Link
              href="mailto:contact@dexterlab.site"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://trakable.app"
              className="inline-flex items-center justify-center py-2 px-4 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
