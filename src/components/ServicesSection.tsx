import React from 'react';
import { Palette, Code2, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenTalkModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenTalkModal }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'service-ui-ux':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'service-frontend':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'service-optimization':
        return <TrendingUp className="w-6 h-6 text-violet-400" />;
      default:
        return <Palette className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Glow highlight */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
          <span>Capabilities &amp; Solutions</span>
          <span className="text-slate-600">·</span>
          <span>End-to-End Execution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
          Services Offered
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          Comprehensive design and development capabilities built to help modern ventures launch fast, look extraordinary, and scale reliably.
        </p>
      </div>

      {/* 3 Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-2xl bg-gradient-to-b from-[#111726]/80 to-[#0c0f1a]/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div>
              {/* Card top row */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(service.id)}
                </div>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  {service.number}
                </span>
              </div>

              {/* Title & subtitle */}
              <h3 className="text-xl font-bold text-white font-display group-hover:text-indigo-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-medium text-indigo-400 mt-1">
                {service.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                {service.description}
              </p>

              {/* Deliverables list */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-3">
                  What You Receive
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom ideal for & trigger */}
            <div className="mt-8 pt-5 border-t border-slate-800/80">
              <div className="text-[11px] text-slate-500 mb-3">
                <span className="font-semibold text-slate-400">Best for:</span> {service.idealFor}
              </div>

              <button
                onClick={onOpenTalkModal}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-800 hover:border-transparent text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span>Discuss {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
