import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { TrustLogos } from '../components/TrustLogos';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { GradientBorder } from '../components/ui/GradientBorder';

// --- COMPONENTS ---

const PricingFeature = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 flex-shrink-0">
      <Sparkles size={14} className="text-blue-500 fill-blue-500/20" />
    </div>
    <span className="text-gray-300 text-sm font-medium">{text}</span>
  </div>
);

const PricingCard = ({ 
  title, 
  description, 
  price, 
  features, 
  isPopular, 
  buttonVariant = 'outline' 
}: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[]; 
  isPopular?: boolean;
  buttonVariant?: 'outline' | 'gradient';
}) => {
  return (
    <div className={cn(
      "relative flex flex-col p-8 rounded-3xl border transition-all duration-300 h-full",
      isPopular 
        ? "bg-[#0A0A0A] border-orange-500/30 shadow-[0_0_40px_rgba(203,52,42,0.1)]" 
        : "bg-[#050505] border-white/10 hover:border-white/20"
    )}>
      {isPopular && (
        <div className="absolute -top-4 right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== "Free" && <span className="text-gray-500 text-sm">/month, per user</span>}
        </div>
      </div>

      <div className="mb-8">
        {buttonVariant === 'gradient' ? (
          <GradientBorder 
            gradient="from-orange-500 via-red-500 to-orange-600"
            containerClassName="w-full p-[1px] rounded-xl"
            className="rounded-xl"
          >
            <button className="w-full py-3 rounded-xl bg-[#0F0F0F] text-white font-medium hover:bg-black transition-colors relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               <span className="relative z-10">Get Started</span>
            </button>
          </GradientBorder>
        ) : (
          <button className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
            Get Started
          </button>
        )}
      </div>

      <div className="mt-auto space-y-4">
        <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">What's Included</p>
        {features.map((feature, i) => (
          <PricingFeature key={i} text={feature} />
        ))}
      </div>
    </div>
  );
};

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      title: "Starter",
      description: "Get started with Fusion AI at no cost",
      price: "Free",
      features: [
        "400 AI credits at signup",
        "20,000 AI token inputs",
        "Calendar integration & syncing",
        "Guest sharing and links"
      ],
      isPopular: false,
      buttonVariant: 'outline' as const
    },
    {
      title: "Plus",
      description: "Unlock more powerful features",
      price: billingCycle === 'monthly' ? "$22" : "$18",
      features: [
        "Unlimited AI credits",
        "100,000 AI token inputs",
        "Calendar sync",
        "Guest sharing and links"
      ],
      isPopular: true,
      buttonVariant: 'gradient' as const
    },
    {
      title: "Pro",
      description: "Take your business to the next level",
      price: billingCycle === 'monthly' ? "$69" : "$58",
      features: [
        "Unlimited AI creation",
        "250,000 token inputs",
        "Calendar integration & syncing",
        "User feedback and insights",
        "Social integrations"
      ],
      isPopular: false,
      buttonVariant: 'outline' as const
    }
  ];

  return (
    <div className="relative w-full min-h-screen pt-32 bg-[#050505] overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-orange-600/10 blur-[120px] rounded-full opacity-40" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 blur-[120px] rounded-full opacity-40" />
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-white uppercase">
            PRICING & PLANS
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-12"
        >
          Choose the Plan That’s <br />
          Right for You
        </motion.h1>

        {/* Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex bg-[#0A0A0A] border border-white/10 rounded-full p-1 relative"
        >
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10",
              billingCycle === 'monthly' ? "text-black" : "text-gray-400 hover:text-white"
            )}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10",
              billingCycle === 'yearly' ? "text-black" : "text-gray-400 hover:text-white"
            )}
          >
            Yearly
          </button>
          
          {/* Active Background Pill */}
          <div 
            className={cn(
              "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full transition-all duration-300",
              billingCycle === 'monthly' ? "left-1" : "left-[calc(50%+4px)]"
            )}
          />
        </motion.div>
      </div>

      {/* --- PRICING CARDS --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="h-full"
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- TRUST SECTION --- */}
      <div className="relative z-10 mb-20">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-400">Trusted by 150,000+ users worldwide</p>
        </div>
        <TrustLogos />
      </div>

      {/* --- TESTIMONIALS --- */}
      <Testimonials />

      {/* --- FAQ --- */}
      <FAQ />

      {/* --- CTA --- */}
      <CTA />

    </div>
  );
};
