const FeatureCard = ({
  title,
  description,
  iconBgColor,
  icon,
  items
}: {
  title: string;
  description?: string;
  iconBgColor: string;
  icon: React.ReactNode;
  items: Array<{ label: string; value?: string }>;
}) => (
  <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col h-full">
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>

    {description && (
      <p className="text-gray-600 mb-8 min-h-[60px]">{description}</p>
    )}

    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className={`flex-shrink-0 w-5 h-5 mt-1 ${iconBgColor.replace('bg-', 'text-')}`}>
            {title.includes('Break') ? (
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <span className="ml-3 text-gray-700">
            <strong>{item.label}</strong>{item.value ? `: ${item.value}` : ''}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Features = () => {
  const buildHabitsItems = [
    { label: 'Exercise', value: 'Run 3 times a week' },
    { label: 'Reading', value: 'Read 10 pages every day' },
    { label: 'Meditation', value: 'Morning meditation 3 days/week' },
    { label: 'Health', value: 'Drink 2L of water every day' }
  ];

  const breakHabitsItems = [
    { label: 'Quit Smoking', value: 'Living smoke-free' },
    { label: 'Stop Drinking', value: 'Embracing sobriety' },
    { label: 'No Sugar', value: 'Breaking free from sugar' },
    { label: 'Stop Gambling', value: 'Reclaiming control' }
  ];

  const eventsItems = [
    { label: 'Sports', value: 'Attended salsa social party' },
    { label: 'Personal', value: 'Received I love you from my partner' },
    { label: 'Mental Health', value: 'Panic attacks' },
    { label: 'Medical tracking', value: 'Flare-ups' }
  ];

  const checkIcon = (
    <svg
      className="w-6 h-6 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
    </svg>
  );

  const xIcon = (
    <svg
      className="w-6 h-6 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );

  const gridIcon = (
    <svg
      className="w-6 h-6 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
    </svg>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Toolkit for Change
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re building good habits, breaking bad ones, or
            logging important events, Trakable is designed to help you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <FeatureCard
            title="Build Habits"
            description="Build lasting routines with weekly goals. Perfect for tracking recurring activities and building consistency."
            iconBgColor="bg-green-500"
            icon={checkIcon}
            items={buildHabitsItems}
          />
          
          <FeatureCard
            title="Break Habits"
            description="Kick unwanted habits by tracking your progress and staying accountable. Quitting smoking or reducing screen time starts here."
            iconBgColor="bg-orange-500"
            icon={xIcon}
            items={breakHabitsItems}
          />

          <FeatureCard
            title="Log Events"
            description="Log and track important occurrences in your life. Ideal for monitoring occasional events and spotting patterns over time."
            iconBgColor="bg-orange-500"
            icon={gridIcon}
            items={eventsItems}
          />
        </div>

        {/* App Features List */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features Making Tracking Simple
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to monitor your habits and events consistently
              and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Track Habits
              </h3>
              <p className="text-gray-600">
                Set customizable weekly frequency goals to build consistency
                with the activities that matter most.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Log Events
              </h3>
              <p className="text-gray-600">
                Record important milestones, medical symptoms, or personal
                achievements whenever they occur.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Build Streaks
              </h3>
              <p className="text-gray-600">
                Mark completions and build ongoing streaks to maintain
                motivation and track your consistency.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                View Statistics
              </h3>
              <p className="text-gray-600">
                Access completion rates and progress patterns to understand your
                trends and improvements.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Capture Photos
              </h3>
              <p className="text-gray-600">
                Add photos and notes to each completion for more detailed and
                visual tracking of your progress.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Review History
              </h3>
              <p className="text-gray-600">
                Explore detailed analytics and trend visualization to understand
                your long-term patterns.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 md:col-start-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Anonymous Tracking
              </h3>
              <p className="text-gray-600">
                Maintain privacy with anonymous habit monitoring that keeps your
                personal data secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
