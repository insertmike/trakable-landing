import Link from "next/link";

const Community = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Only join to be text-green-500 */}
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-400 mb-8">
            Be part of r/trakableapp and connect with other users. Request
            features, get help, share success stories, and shape Trakable&apos;s
            future together.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-orange-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.67-10a1.46 1.46 0 0 0-2.47-1.06 7.02 7.02 0 0 0-3.8-1.17l.7-3.37 2.3.53a1.05 1.05 0 1 0 .17-.62l-2.56-.55a.27.27 0 0 0-.32.18l-.8 3.82a6.86 6.86 0 0 0-3.85 1.17 1.46 1.46 0 0 0-2.05 2.08 3.77 3.77 0 0 0-.2 1.2c.05 2.25 2.64 4.08 5.84 4.08s5.8-1.83 5.85-4.08c0-.41-.07-.82-.21-1.2.3-.31.47-.72.47-1.16zM8.5 13.5a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1zm5.02 2.83c-.71.71-1.83 1.05-3.42 1.05-1.6 0-2.7-.34-3.43-1.05a.27.27 0 0 1 .38-.38c.57.56 1.54.85 3.05.85s2.47-.29 3.04-.85a.27.27 0 1 1 .38.38zm.48-2.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              r/trakableapp
            </h3>

            <p className="text-gray-700 mb-6">
              A place to discuss the Trakable app, share tips, success stories,
              and connect with other users tracking their habits and important
              life events.
            </p>

            <Link
              href="https://www.reddit.com/r/trakableapp/"
              target="_blank"
              className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
            >
              Visit Reddit Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
