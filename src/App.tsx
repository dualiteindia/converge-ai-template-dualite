import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { UseCaseGrid } from './components/UseCaseGrid';
import { TrustLogos } from './components/TrustLogos';
import { Features } from './components/Features';
import { InstantActions } from './components/InstantActions';
import { StackedCards } from './components/StackedCards';
import { ScaleManage } from './components/ScaleManage';
import { IntegrationsTicker } from './components/IntegrationsTicker';
import { Testimonials } from './components/Testimonials';
import { WorkflowSteps } from './components/WorkflowSteps';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans overflow-x-hidden relative">
      
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Liquid Gradient: Blue (#0D8DFD) to Orange (#CB342A) */}
        {/* Using opacity-20 to ensure text legibility while keeping colors visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D8DFD]/20 via-[#050505] to-[#CB342A]/20 bg-[length:200%_200%] animate-liquid" />
        
        {/* Radial Vignette: Darkens center slightly for text contrast and fades edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] opacity-90" />
        
        {/* Extra Noise Texture (Optional for premium feel) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <InteractiveDemo />
        <UseCaseGrid />
        <TrustLogos />
        <Features />
        {/* Merged Header + Instant Actions Card */}
        <InstantActions />
        
        {/* Stacked Cards (Restored) */}
        <StackedCards />

        {/* Carousel Dashboard */}
        <ScaleManage />
        {/* Integrations Ticker */}
        <IntegrationsTicker />
        
        {/* New Sections */}
        <Testimonials />
        <WorkflowSteps />
        
        {/* Final Sections */}
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
