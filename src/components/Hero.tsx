import React from 'react';
import { GradientBorder } from './ui/GradientBorder';

export const Hero = () => {
  return (
    <div className="relative w-full min-h-[95vh] overflow-hidden bg-background flex flex-col items-center justify-center pt-24 pb-48">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source 
            src="https://www.dropbox.com/scl/fi/90g5trcjgtt1cd0b09mx7/0_Rainbow_Colorful_1920x1080.mp4?rlkey=gdvmhuky3mawce7biyvwndb8e&st=rsthadbz&raw=1" 
            type="video/mp4" 
          />
        </video>
        {/* Overlays for contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center h-full mt-10 md:mt-0">
        
        {/* Tagline */}
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-950/30 backdrop-blur-md px-4 py-1.5">
            <span className="text-[10px] md:text-xs font-semibold tracking-wider text-white uppercase bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Supercharge your AI workflows
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Automate Your <br />
          AI Workflows <br />
          with AI Agent
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
          Connect your favorite apps, set triggers and watch AI handle the rest - no coding required. Get up and running in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-20">
          <GradientBorder 
            gradient="from-orange-500 via-red-500 to-orange-600"
            containerClassName="p-[1px]"
          >
            <button className="px-8 py-3.5 text-white font-medium bg-black rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2">
              Get Started - Free
            </button>
          </GradientBorder>

          <button className="px-8 py-3.5 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};
