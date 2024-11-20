import React from "react";

const Hero = () => {
  return (
    <div className="font-poppins relative flex min-h-screen items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-96 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
      </div>
      <div className="main-hero-contents flex flex-col items-center gap-2">
        <div className="label rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
          ✨ New features released
        </div>
        <div className="hero-title mb-4 p-2 text-5xl font-bold text-white">
          Build Something <span className="text-purple-500">amazing</span> today
        </div>
        <div className="hero-description mb-6 max-w-2xl p-1 text-center text-lg text-gray-300">
          Create stunning websites and applications with our powerful tools and
          intuitive interface.
        </div>
        <div className="hero-navigation flex items-center gap-8">
          <button className="rounded-lg bg-white px-8 py-4 font-semibold text-black">
            Get Started
          </button>
          <button className="rounded-lg bg-white/10 px-8 py-4 font-semibold text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
