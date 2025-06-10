"use client";

import Link from "next/link";

const RoadMap = () => {
  const roadmapData = [
    {
      status: "Planned",
      count: 3,
      color: "from-green-500 to-green-600",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      items: ["Reminders", "Home Screen Widgets"],
    },
    {
      status: "In Consideration",
      count: 6,
      color: "from-gray-500 to-gray-600",
      borderColor: "border-gray-200",
      bgColor: "bg-gray-50",
      items: [
        "Achievements & Rewards",
        "Attach multiple images to completions",
        "Sync Trakables Across All Devices",
        "Shared Habits with Friends",
        "Planned Exceptions, Skip Days",
        "Challenges",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product RoadMap
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              See what&apos;s coming next and help shape the future of Trakable
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-orange-400 to-gray-300"></div>

            <div className="space-y-8 md:space-y-12">
              {roadmapData.map((category, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-2.5 md:left-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-3 md:border-4 border-orange-500 shadow-sm"></div>

                  {/* Content Card */}
                  <div className="ml-10 md:ml-20">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                      {/* Status Header */}
                      <div
                        className={`bg-gradient-to-r ${category.color} px-4 md:px-6 py-3 md:py-4`}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg md:text-xl font-bold text-white">
                            {category.status}
                          </h3>
                          <div className="bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full">
                            {category.count} features
                          </div>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="p-4 md:p-6">
                        <div className="space-y-3 md:space-y-4">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 mt-1 text-orange-500">
                                <svg viewBox="0 0 20 20" fill="currentColor">
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <span className="ml-2 md:ml-3 text-sm md:text-base text-gray-700 leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-2">
                            <span>Progress</span>
                            <span>
                              {index === 0 ? "In Development" : "Under Review"}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                            <div
                              className={`bg-gradient-to-r ${category.color} h-1.5 md:h-2 rounded-full transition-all duration-500`}
                              style={{ width: index === 0 ? "65%" : "25%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Feature Request CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Have an idea for a new feature? We&apos;d love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.reddit.com/r/trakable/"
                target="_blank"
                className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.67-10a1.46 1.46 0 0 0-2.47-1.06 7.02 7.02 0 0 0-3.8-1.17l.7-3.37 2.3.53a1.05 1.05 0 1 0 .17-.62l-2.56-.55a.27.27 0 0 0-.32.18l-.8 3.82a6.86 6.86 0 0 0-3.85 1.17 1.46 1.46 0 0 0-2.05 2.08 3.77 3.77 0 0 0-.2 1.2c.05 2.25 2.64 4.08 5.84 4.08s5.8-1.83 5.85-4.08c0-.41-.07-.82-.21-1.2.3-.31.47-.72.47-1.16zM8.5 13.5a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1zm5.02 2.83c-.71.71-1.83 1.05-3.42 1.05-1.6 0-2.7-.34-3.43-1.05a.27.27 0 0 1 .38-.38c.57.56 1.54.85 3.05.85s2.47-.29 3.04-.85a.27.27 0 1 1 .38.38zm.48-2.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
                </svg>
                Submit on Reddit
              </Link>
              <Link
                href="mailto:contact@trakable.app?subject=Feature Request&body=Hi! I have a feature request for Trakable:%0D%0A%0D%0A[Please describe your feature idea here]"
                className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-white text-gray-700 font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Submit by Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
