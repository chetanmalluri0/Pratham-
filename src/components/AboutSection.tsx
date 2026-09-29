import React from 'react';
import { Code, Palette, Zap, Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { PERSONAL_INFO, TECH_STACK } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenTalkModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTalkModal }) => {
  const principles = [
    {
      title: 'Design with Strategic Purpose',
      desc: 'Visual beauty means nothing if users fail to understand what you offer. Every layout, contrast ratio, and font choice is crafted to maximize user clarity and business conversion.',
    },
    {
      title: 'Performance Is a Fundamental Feature',
      desc: 'Users abandon slow websites. I build with lean, modern frameworks ensuring sub-second edge loads, zero layout shift, and silky-smooth 60fps micro-interactions.',
    },
    {
      title: 'Obsessive Detail & Modern Code',
      desc: 'No messy templates or unmaintainable spaghetti code. You receive pristine, modular TypeScript and Tailwind CSS architectures that your team can scale with confidence.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait & Identity Profile */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Ambient backdrop glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Avatar / Visual representation */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-violet-600 p-[2px] shadow-xl shadow-indigo-600/20">
                <div className="w-full h-full rounded-2xl bg-[#0b0e17] flex items-center justify-center text-3xl font-extrabold text-white font-display">
                  PH
                </div>
              </div>
              <div className="absolute -bottom-2 left-18 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] text-emerald-400 font-medium">
                ● Active
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white font-display">
              {PERSONAL_INFO.name}
            </h3>
            <div className="text-xs text-indigo-400 font-medium mt-1">
              {PERSONAL_INFO.title}
            </div>

            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Meta details list */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Location</span>
                <span className="text-slate-200 font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Status</span>
                <span className="text-emerald-400 font-medium">{PERSONAL_INFO.availability}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Specialization</span>
                <span className="text-slate-200 font-medium">UI/UX &amp; Full-Stack Frontend</span>
              </div>
            </div>

            {/* Quick Contact Action */}
            <div className="mt-6 pt-4">
              <button
                onClick={onOpenTalkModal}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 text-indigo-200 hover:text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Ethos, Philosophy & Tech Stack */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              <span>About Pratham</span>
              <span className="text-slate-600">·</span>
              <span>Design Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
              Blending Design Intuition with Engineering Precision.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              I partner directly with ambitious founders, modern startups, and design-conscious businesses. Instead of handing off static Figma mockups to be lost in translation, I handle the complete bridge from wireframe to interactive code.
            </p>

            {/* Core Principles */}
            <div className="mt-8 space-y-4">
              {principles.map((p, idx) => (
                <div key={p.title} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base font-display">
                    <span className="text-xs text-indigo-400 font-mono">0{idx + 1}.</span>
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed pl-6">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies & Arsenal */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Core Technologies &amp; Toolset
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
