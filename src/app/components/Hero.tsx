import Image from "next/image";
import DownloadButtons from "./DownloadButtons";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-950 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-green-900/30 to-orange-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,0,0.2),transparent_60%)] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-16 mb-8 lg:mb-0 order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-6 leading-tight">
              Track today.
              <br />
              <span className="text-green-500">Transform</span> <br />
              <span className="text-gray-300">tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Your journey to better habits and meaningful insights starts with
              Trakable. Build routines and track what matters to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <DownloadButtons />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center relative order-2">
            <div className="relative h-[380px] w-[250px] md:h-[500px] md:w-[320px] -mr-16 z-10">
              <Image
                src="app_today_tab_screenshot.png"
                alt="Trakable App Screenshot"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative h-[380px] w-[250px] md:h-[500px] md:w-[320px] mt-4">
              <Image
                src="app-task-details-screen.png"
                alt="Trakable App Features"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
