import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Zap, 
  Mail, 
  Slack, 
  Database,
  Users,
  Calendar,
  Share2,
  Bell
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Feature Card Components ---

const FeatureCard = ({ 
  title, 
  description, 
  children, 
  className,
  delay = 0
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-1",
      className
    )}
  >
    {/* Card Content Container */}
    <div className="relative h-full flex flex-col rounded-xl overflow-hidden bg-[#080808]">
      {/* Visual Area */}
      <div className="relative h-[240px] w-full overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent flex items-center justify-center">
        {children}
      </div>
      
      {/* Text Content */}
      <div className="p-6 md:p-8 mt-auto relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

// --- Visuals for Cards ---

const IntegrationsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Background Glow */}
    <div className="absolute w-40 h-40 bg-blue-600/20 blur-[50px] rounded-full" />
    
    {/* Orbital Rings */}
    <div className="absolute w-[280px] h-[280px] border border-white/5 rounded-full" />
    <div className="absolute w-[180px] h-[180px] border border-white/10 rounded-full" />
    
    {/* Center Node */}
    <div className="relative z-10 w-16 h-16 rounded-full bg-black border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700" />
    </div>

    {/* Floating Icons */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] animate-[spin_20s_linear_infinite]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
        <Slack size={18} className="text-[#E01E5A]" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
        <Database size={18} className="text-[#00A4BD]" />
      </div>
      <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
        <Calendar size={18} className="text-[#FF7A59]" />
      </div>
      <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
        <Mail size={18} className="text-[#34A853]" />
      </div>
    </div>
  </div>
);

const ConversationalVisual = () => (
  <div className="relative w-full h-full p-8 flex flex-col justify-center">
    <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/10 blur-[60px] rounded-full" />
    
    {/* User Message */}
    <div className="self-end mb-4 max-w-[85%]">
      <div className="flex items-end gap-2">
        <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-xs text-gray-300 shadow-lg">
          Create a new customer record for John Smith
        </div>
        <div className="w-6 h-6 rounded-full bg-gray-700 flex-shrink-0" />
      </div>
    </div>

    {/* AI Response Card */}
    <div className="self-start max-w-[90%]">
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 mt-1" />
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl rounded-tl-sm p-4 shadow-xl w-full">
          <div className="text-xs text-gray-400 mb-3">All set!</div>
          <div className="bg-[#151515] rounded-lg p-3 border border-white/5 space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-500">Customer</span>
              <span className="text-gray-300">#C-1024 added to CRM</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-500">Assigned to</span>
              <span className="text-gray-300">Sarah Lee</span>
            </div>
          </div>
          <div className="mt-3 text-[10px] text-gray-500 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Welcome email queued for May 28, 10:00 AM
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WorkflowVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-orange-500/5 blur-[40px]" />
    {/* Nodes */}
    <div className="relative z-10 flex flex-col gap-4 items-center">
       <div className="flex items-center gap-4">
          <div className="w-28 h-12 bg-[#111] border border-white/10 rounded-lg flex items-center justify-center gap-2 shadow-lg">
             <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center"><Users size={14} className="text-blue-400"/></div>
             <span className="text-xs text-gray-300">Agent</span>
          </div>
       </div>
       <div className="h-6 w-[2px] bg-white/10" />
       <div className="flex items-center gap-4">
          <div className="w-28 h-12 bg-[#111] border border-orange-500/30 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
             <div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center"><Mail size={14} className="text-orange-400"/></div>
             <span className="text-xs text-gray-300">Email Outreach</span>
          </div>
       </div>
       <div className="h-6 w-[2px] bg-white/10" />
       <div className="flex items-center gap-4">
          <div className="w-28 h-12 bg-[#111] border border-white/10 rounded-lg flex items-center justify-center gap-2 shadow-lg opacity-60">
             <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center"><MessageSquare size={14} className="text-green-400"/></div>
             <span className="text-xs text-gray-300">Follow Up</span>
          </div>
       </div>
    </div>
  </div>
);

const MultiChannelVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
     <div className="absolute inset-0 bg-blue-500/5 blur-[40px]" />
     <div className="grid grid-cols-2 gap-3 relative z-10 p-6">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-blue-500/50 transition-colors">
           <Mail size={24} className="text-blue-400" />
           <span className="text-xs text-gray-400">Email</span>
        </div>
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-green-500/50 transition-colors">
           <MessageSquare size={24} className="text-green-400" />
           <span className="text-xs text-gray-400">SMS</span>
        </div>
        <div className="col-span-2 bg-[#0A0A0A] border border-white/10 rounded-xl p-3 flex items-center justify-center gap-2 text-gray-500">
           <Zap size={16} className="text-orange-500" />
           <span className="text-xs">Auto-Trigger Enabled</span>
        </div>
     </div>
  </div>
);

export const Features = () => {
  return (
    <section className="w-full relative z-10">
      {/* --- SCROLL 3: FEATURES GRID (Header removed) --- */}
      <div className="pb-32 px-6 max-w-7xl mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <FeatureCard 
            title="Seamless Integrations" 
            description="Integrate Slack, HubSpot, Zendesk & more—automate data flow instantly."
            delay={0.1}
          >
            <IntegrationsVisual />
          </FeatureCard>

          <FeatureCard 
            title="Conversational Actions" 
            description="Create records, assign tasks & queue emails with a simple prompt in seconds flat."
            delay={0.2}
          >
            <ConversationalVisual />
          </FeatureCard>

          <FeatureCard 
            title="Visual Workflow Designer" 
            description="Drag & drop AI actions to build workflows visually—no coding required."
            delay={0.3}
          >
            <WorkflowVisual />
          </FeatureCard>

          <FeatureCard 
            title="Multi-Channel Automation" 
            description="Trigger email, SMS & chat messages automatically on schedule."
            delay={0.4}
          >
            <MultiChannelVisual />
          </FeatureCard>

        </div>
      </div>

    </section>
  );
};
