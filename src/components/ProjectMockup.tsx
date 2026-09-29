import React, { useState } from 'react';
import { ExternalLink, Building2, Utensils, Code2, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectMockupProps {
  project: Project;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Render clean, high-end visual mockup preview
  const renderPreviewContent = () => {
    switch (project.mockupType) {
      case 'forge':
        return (
          <div className="relative w-full h-full bg-[#0b0f19] text-slate-200 p-5 flex flex-col justify-between overflow-hidden select-none">
            {/* Ambient glowing backdrop */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white tracking-wide">FORGE</span>
                <span className="text-slate-600">/</span>
                <span className="text-cyan-400 font-mono text-[11px]">Modern Web Application</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-mono">Live</span>
              </div>
            </div>

            {/* Application Visual Preview Mockup */}
            <div className="my-auto py-2">
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Full-Stack Cloud Architecture</div>
                      <div className="text-[10px] text-slate-400">Reactive state &amp; micro-services</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">v2.4</span>
                </div>

                {/* Aesthetic mock interface bars */}
                <div className="space-y-2 pt-1">
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Performance Optimization</span>
                    <span className="text-cyan-300 font-medium">99.8%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/60">
              <span>Clean Architecture · High Performance</span>
              <span className="text-cyan-400">Explore App →</span>
            </div>
          </div>
        );

      case 'haven':
        return (
          <div className="relative w-full h-full bg-[#0a0d14] text-slate-200 p-5 flex flex-col justify-between overflow-hidden select-none">
            {/* Background architectural aesthetic glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#0f172a] to-indigo-950/60" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2 font-display text-white tracking-wider uppercase text-[11px]">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>HAVEN HORIZON REALTY</span>
              </div>
              <span className="text-[10px] text-indigo-300 font-medium bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/20">
                Luxury Estate
              </span>
            </div>

            {/* Property showcase card */}
            <div className="relative z-10 my-auto py-2">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900/80 p-4">
                <span className="text-[10px] text-indigo-300 uppercase tracking-widest font-semibold block">
                  Signature Architectural Showcase
                </span>
                <h4 className="text-base font-semibold text-white mt-1 font-display">
                  The Glass Pavilion Residence
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Immersive presentation, smooth navigation, and bespoke property presentation.
                </p>
              </div>
            </div>

            <div className="relative z-10 text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-slate-300">Modern Coastal Architecture</span>
              <span className="text-indigo-400">View Showcase →</span>
            </div>
          </div>
        );

      case 'noir':
        return (
          <div className="relative w-full h-full bg-[#0c0a09] text-amber-100 p-5 flex flex-col justify-between overflow-hidden select-none">
            {/* Warm moody culinary glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c1917] via-[#0c0a09] to-[#050505]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-amber-900/40 text-xs">
              <div className="flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-display font-bold text-amber-200 tracking-widest text-[11px] uppercase">
                  NOIR KITCHEN &amp; BAR
                </span>
              </div>
              <span className="text-[10px] text-amber-400 font-mono tracking-wide">
                HOSPITALITY
              </span>
            </div>

            {/* Culinary showcase card */}
            <div className="relative z-10 my-auto py-2">
              <div className="rounded-xl border border-amber-800/30 bg-[#171412]/90 p-4">
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-mono font-medium block">
                  Atmospheric Culinary Journey
                </span>
                <h4 className="text-base font-semibold text-amber-100 mt-1 font-display">
                  Gastronomy &amp; Cocktail Lounge
                </h4>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Sophisticated dining website design with a moody, high-end sensory aesthetic.
                </p>
              </div>
            </div>

            <div className="relative z-10 text-[11px] text-stone-400 flex items-center justify-between pt-2 border-t border-amber-950/60">
              <span className="text-amber-200/80">Michelin-Inspired Dining</span>
              <span className="text-amber-400">Experience Noir →</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0d111c] shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser Window Chrome Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0b0e17] border-b border-slate-800/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-[260px] mx-3 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 flex items-center justify-center text-xs text-slate-400 font-mono truncate">
          <span className="text-slate-500 mr-1 select-none">https://</span>
          <span className="text-slate-300 truncate">{project.url.replace('https://', '')}</span>
        </div>

        <div className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider">
          LIVE
        </div>
      </div>

      {/* Main Visual Display Area */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
        {renderPreviewContent()}

        {/* Hover Action Overlay */}
        <div
          className={`absolute inset-0 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center transition-opacity duration-200 p-6 ${
            isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Live Preview</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-slate-900/40">
        <div>
          <div className="text-xs font-semibold text-indigo-400 tracking-wide uppercase mb-1">
            {project.category}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-display">
            {project.name}
          </h3>

          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Live Preview</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white font-mono transition-colors"
          >
            {project.url.replace('https://', '')}
          </a>
        </div>
      </div>
    </div>
  );
};
