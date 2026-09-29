import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Custom Web Design & UI/UX',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.details.trim()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real state submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Generate customized WhatsApp URL from form data
  const getCustomWhatsAppUrl = () => {
    const text = `Hi Pratham! My name is ${encodeURIComponent(formState.name || 'there')}. I'm interested in ${encodeURIComponent(formState.service)}: ${encodeURIComponent(formState.details || 'Let\'s collaborate on a project.')}`;
    return `https://wa.me/918310662724?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="rounded-3xl bg-gradient-to-b from-[#101524]/90 to-[#0a0d18] border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Title & Clear Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                <span>Start a Project</span>
                <span className="text-slate-600">·</span>
                <span>Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
                Let&apos;s Build Something Exceptional Together.
              </h2>

              <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
                Have a new web project, an app redesign, or need high-converting digital branding? Reach out directly to discuss scope, timelines, and deliverables.
              </p>

              {/* Founder Information & Quick Contact Badge */}
              <div className="mt-8 p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-4">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Founder &amp; Principal</div>
                  <div className="text-lg font-bold text-white font-display mt-0.5">{PERSONAL_INFO.name}</div>
                  <div className="text-xs text-indigo-400">{PERSONAL_INFO.title}</div>
                </div>

                {/* Clickable Phone / WhatsApp */}
                <div className="pt-3 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Phone className="w-4 h-4 text-sky-400" />
                      <span className="font-semibold text-white">Phone / WhatsApp:</span>
                    </div>
                    <button
                      onClick={copyPhoneNumber}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={`tel:${PERSONAL_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white text-xs font-mono font-medium transition-colors border border-slate-700/80"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      <span>{PERSONAL_INFO.phone}</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-semibold transition-all duration-200 border border-emerald-500/30 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              ⚡ Typical response time: <span className="text-slate-300 font-medium">Under 2 hours</span> on business days.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm">
                    Thank you, {formState.name}. Pratham will review your project requirements and respond promptly.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getCustomWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: '',
                          email: '',
                          service: 'Custom Web Design & UI/UX',
                          details: '',
                        });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service needed */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service Requested
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Consultation & Strategy">General Consultation &amp; Strategy</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details &amp; Objectives <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      placeholder="Briefly describe what you're building, target launch dates, or reference websites..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={getCustomWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center sm:text-left mt-2">
                    🔒 Strict client confidentiality. Non-disclosure agreements (NDAs) supported upon request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
