import React from 'react';
import { ArrowUp, Github, Linkedin, MessageCircle, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#07090e] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left text-xs">
          <span className="font-bold text-white tracking-wide font-display text-sm">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-slate-600 select-none">·</span>
          <span>© 2026 Pratham Handur. All rights reserved. Built with precision and passion.</span>
        </div>

        {/* Quick Contact Links & Back to Top */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            aria-label="Call Pratham Handur"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
