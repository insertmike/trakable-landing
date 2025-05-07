import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Trakable
            </h3>
            <p className="text-gray-600 max-w-xs">
              Track today. Transform tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.reddit.com/r/trakableapp/"
                    target="_blank"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.notion.so/1da606d25a9080e39cdefd0961afc8f0?pvs=21"
                    target="_blank"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://trakable.app"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:contact@dexterlab.site"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} DexterLab LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
