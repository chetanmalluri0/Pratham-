import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Mail, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Custom Web Design & UI/UX');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hi Pratham! I'd like to talk about ${encodeURIComponent(service)}. My name is ${encodeURIComponent(name || 'Client')}. ${encodeURIComponent(message || '')}`;
    return `https://wa.me/918310662724?text=${text}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="talk-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0c101b] border border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pr-8">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
            Let&apos;s Connect
          </div>
          <h3 id="talk-modal-title" className="text-xl sm:text-2xl font-bold text-white font-display">
            Start a Conversation
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Reach out via direct WhatsApp or send a message below.
          </p>
        </div>

        {/* Direct Channels */}
        <div className="grid grid-cols-2 gap-3 my-5">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 flex flex-col items-center text-center transition-all"
          >
            <MessageCircle className="w-5 h-5 mb-1 text-emerald-400" />
            <span className="text-xs font-semibold">WhatsApp Chat</span>
            <span className="text-[10px] text-emerald-400/80 font-mono mt-0.5">+91 8310662724</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 flex flex-col items-center text-center transition-all"
          >
            <Phone className="w-5 h-5 mb-1 text-sky-400" />
            <span className="text-xs font-semibold">Direct Call</span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">+91 8310662724</span>
          </a>
        </div>

        {isSent ? (
          <div className="py-8 text-center animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white font-display">
              Request Received!
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Pratham will be in touch with you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-slate-800/80">
            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">
                Interested In
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Consultation">General Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">
                Message / Brief
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Give a brief summary of what you are aiming to build..."
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                title="Send via WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
