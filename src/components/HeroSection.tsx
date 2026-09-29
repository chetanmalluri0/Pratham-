import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenTalkModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTalkModal }) => {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic ambient radial gradients in electric blue and neon violet */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-48 -left-32 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Availability Marker (Unboxed metadata with subtle pulse dot) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-emerald-300">Available for select projects</span>
          <span className="text-slate-600 select-none">·</span>
          <span className="text-slate-400">Q3/Q4 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance">
          Crafting Immersive Digital Experiences &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400">
            High-Converting Websites.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed text-balance">
          Hi, I&apos;m Pratham Handur — a passionate web designer focused on turning bold ideas into stunning, lightning-fast digital realities.
        </p>

        {/* Dual CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA (glowing gradient) */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 glow-border"
          >
            <span>Explore Works</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* Secondary CTA (outline style) */}
          <button
            onClick={onOpenTalkModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-slate-500 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
