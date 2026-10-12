"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Calendar,
  Layers,
  Star,
  Sparkles,
  Lock,
  ArrowRight,
  HelpCircle,
  FileText,
  AlertCircle,
  Check,
} from "lucide-react";
import { ShowcaseApp } from "@/config/apps.config";
import { COMPLIANCE_CONFIG, TRANSPARENCY_CALLOUT } from "@/config/compliance.config";
import { IconRenderer } from "../ui/IconRenderer";

interface MiniOSModalProps {
  app: ShowcaseApp | null;
  onClose: () => void;
  onAnalyticsToggle?: (enabled: boolean) => void;
  analyticsEnabled?: boolean;
}

export function MiniOSModal({
  app,
  onClose,
  onAnalyticsToggle,
  analyticsEnabled = false,
}: MiniOSModalProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [bookingDate, setBookingDate] = useState<string>("2026-10-15");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [coolingOffCancelled, setCoolingOffCancelled] = useState<boolean>(false);
  const [sarSubmitted, setSarSubmitted] = useState<boolean>(false);

  if (!app) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-app-title"
      className="absolute inset-0 z-50 bg-neutral-950/95 backdrop-blur-2xl text-white flex flex-col animate-slideUp overflow-hidden select-none"
    >
      {/* Top App OS Navigation Bar */}
      <div className="relative pt-12 pb-3 px-4 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between shrink-0">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to Home Screen"
          className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 font-mono text-xs px-2 py-1 rounded-lg hover:bg-neutral-800/60 transition active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Home</span>
        </button>

        <div className="flex items-center space-x-2">
          <div
            className={`w-6 h-6 rounded-lg bg-gradient-to-br ${app.bgColor} flex items-center justify-center p-1 shadow-sm`}
          >
            <IconRenderer name={app.icon} className="w-3.5 h-3.5 text-white" />
          </div>
          <span
            id="modal-app-title"
            className="text-xs font-semibold tracking-tight text-neutral-200"
          >
            {app.title}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Application"
          className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition active:scale-95"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* App Body Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-left">
        {/* Header Hero Banner */}
        <div
          className={`p-4 rounded-2xl bg-gradient-to-br ${app.bgColor} text-white shadow-xl relative overflow-hidden`}
        >
          <div className="relative z-10">
            <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 inline-block mb-1.5">
              {app.badgeText || "itsmyapp verified"}
            </span>
            <h1 className="text-xl font-bold tracking-tight">{app.title}</h1>
            <p className="text-xs text-white/90 font-sans mt-0.5">{app.subtitle}</p>
          </div>
          <div className="absolute -right-3 -bottom-3 opacity-15">
            <IconRenderer name={app.icon} className="w-24 h-24 text-white" />
          </div>
        </div>

        {/* Dynamic In-App Views */}
        {app.id === "services" && (
          <div className="space-y-3">
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              We engineer enterprise web applications, mobile software, and custom APIs optimized for high performance and full UK GDPR compliance.
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-neutral-200">Mobile & Progressive Web Apps</h3>
                  <span className="text-[10px] font-mono text-emerald-400">iOS & Android</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Cross-platform fluid experiences with 100dvh viewport locking, offline persistence, and haptic animations.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-neutral-200">Full UK GDPR & DUAA Systems</h3>
                  <span className="text-[10px] font-mono text-blue-400">Certified</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Privacy-by-design consent layers, equal prominence cookie models, and zero-knowledge data pipelines.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-neutral-200">Edge & Cloud Infrastructure</h3>
                  <span className="text-[10px] font-mono text-purple-400">Sub-50ms</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Vercel Edge, AWS London, and multi-tenant Firestore deployments with zero server-side maintenance burden.
                </p>
              </div>
            </div>

            <a
              href="mailto:hello@itsmyapp.co.uk?subject=Enquiry%20regarding%20Services"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-medium text-xs text-white transition active:scale-95 shadow-lg shadow-blue-600/30"
            >
              <Mail className="w-4 h-4" />
              <span>Request Project Scope</span>
            </a>
          </div>
        )}

        {app.id === "pricing" && (
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
              <div className="font-semibold flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>DMCCA 2024 Anti-Drip Pricing</span>
              </div>
              <p className="text-[11px] text-emerald-400/90 mt-1">
                The prices shown are absolute totals with zero hidden fees, administrative costs, or drip surcharges.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold text-white">Starter Sprint</h3>
                    <p className="text-[10px] text-neutral-400">Essential smartphone showcase / MVP</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white font-mono">£1,495</span>
                    <span className="text-[10px] text-neutral-500 block">Total cost</span>
                  </div>
                </div>
                <ul className="text-[11px] text-neutral-300 mt-2 space-y-1">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Realistic mobile chassis & responsive 100dvh</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Equal Prominence UK GDPR cookie setup</span>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900 border border-blue-500/40 ring-1 ring-blue-500/20">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-mono text-blue-400 bg-blue-500/20 px-1.5 py-0.5 rounded">
                      MOST POPULAR
                    </span>
                    <h3 className="text-xs font-bold text-white mt-1">Production Hub Pro</h3>
                    <p className="text-[10px] text-neutral-400">Full client ecosystem + mini-OS apps</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-blue-400 font-mono">£3,450</span>
                    <span className="text-[10px] text-neutral-500 block">Total cost</span>
                  </div>
                </div>
                <ul className="text-[11px] text-neutral-300 mt-2 space-y-1">
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>3x3 Business & 4xN Directory matrices</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Offline-first Firestore persistence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Same-Channel Exit & Statutory Cooling Off Showcase */}
            <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-[11px] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-300">Statutory 14-Day Cooling-Off:</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {coolingOffCancelled ? "Cancelled & Refunded" : "Active & Protected"}
                </span>
              </div>
              <p className="text-neutral-400 text-[10px]">
                Under UK consumer rights, you can cancel within 14 days with zero conversion sludge or phone delays.
              </p>
              <button
                type="button"
                onClick={() => setCoolingOffCancelled(!coolingOffCancelled)}
                className="w-full py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition active:scale-95"
              >
                {coolingOffCancelled
                  ? "↺ Reset Cooling-Off Status"
                  : "Simulate 'Same-Channel' 1-Click Cancellation"}
              </button>
            </div>
          </div>
        )}

        {app.id === "booking" && (
          <div className="space-y-3">
            <p className="text-xs text-neutral-300 font-sans">
              Schedule a 30-minute scoping call directly with our technical lead. No automated sales bots.
            </p>

            {bookingSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-xs font-bold text-white">Discovery Session Reserved!</h3>
                <p className="text-[11px] text-emerald-300 font-mono">
                  {bookingDate} at {selectedTime}
                </p>
                <p className="text-[10px] text-neutral-400">
                  A calendar invite and Google Meet link have been prepared for your session.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingSuccess(false)}
                  className="text-xs text-emerald-400 underline font-mono mt-2"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Select Discovery Date:</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Available UK Time Slots:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["10:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-mono border transition ${
                          selectedTime === slot
                            ? "bg-blue-600 text-white border-blue-500"
                            : "bg-neutral-950 text-neutral-300 border-neutral-800 hover:border-neutral-700"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setBookingSuccess(true)}
                  className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition active:scale-95 shadow-lg shadow-amber-600/30"
                >
                  Confirm 30-Minute Discovery Call
                </button>
              </div>
            )}
          </div>
        )}

        {app.id === "reviews" && (
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-yellow-950/30 border border-yellow-500/30 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <span className="text-[10px] text-neutral-400 font-mono">
                  Verified UK Client Ratings
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-300 bg-neutral-900 px-2 py-1 rounded">
                28 Audited Projects
              </span>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono mb-1">
                <span>Alastair M. — FinTech Co-Founder</span>
                <span>London, UK</span>
              </div>
              <p className="text-neutral-200">
                &ldquo;itsmyapp replaced our convoluted legacy web portal with an ultra-responsive smartphone-styled hub. Our mobile conversion shot up by 42%.&rdquo;
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
              <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono mb-1">
                <span>Dr. Priya S. — MedTech Lead</span>
                <span>Cambridge, UK</span>
              </div>
              <p className="text-neutral-200">
                &ldquo;The DUAA & UK GDPR compliance guarantees gave our legal officers complete peace of mind. Zero cookie friction, zero bloat.&rdquo;
              </p>
            </div>
          </div>
        )}

        {app.id === "portfolio" && (
          <div className="space-y-3">
            <p className="text-xs text-neutral-300">
              Selected production systems developed and maintained under our zero-telemetry architecture:
            </p>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
              <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">
                FINANCIAL SERVICES
              </span>
              <h3 className="text-xs font-bold text-white">Stripe & Direct Debit Portal</h3>
              <p className="text-[11px] text-neutral-400">
                Engineered for high-volume transactions with anti-drip validation and automated dispute receipts.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                HEALTHCARE PORTAL
              </span>
              <h3 className="text-xs font-bold text-white">Patient Record Vault</h3>
              <p className="text-[11px] text-neutral-400">
                UK GDPR Article 9 architecture with localized AES-256 client encryption and 100dvh mobile access.
              </p>
            </div>
          </div>
        )}

        {app.id === "faq" && (
          <div className="space-y-2">
            {[
              {
                q: "Who owns the code and intellectual property?",
                a: "You do. Upon project completion and final milestone sign-off, all source code, design assets, and repository rights are fully assigned to your business with zero recurring royalties.",
              },
              {
                q: "How does the smartphone showcase work on desktop vs mobile?",
                a: "On desktop (>=md), it displays inside an authentic centered smartphone mockup with physical borders and dynamic island. On mobile (<md), the borders disappear seamlessly and it fills 100dvh natively.",
              },
              {
                q: "What makes your UK GDPR compliance unique?",
                a: "We adhere to DUAA 2025 and DMCCA 2024 standards: equal prominence cookie buttons, zero persistent marketing cookies without explicit opt-in, and instant 1-click subscription exits.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <h3 className="text-xs font-semibold text-white">{faq.q}</h3>
                <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        )}

        {app.id === "contact" && (
          <div className="space-y-3">
            {contactSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-xs font-bold text-white">Message Dispatched!</h3>
                <p className="text-[11px] text-neutral-300">
                  Our Data Privacy Lead and Principal Architect acknowledge all inquiries within 24-48 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setContactSubmitted(false)}
                  className="text-xs text-emerald-400 underline font-mono"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-2.5 p-3 rounded-xl bg-neutral-900 border border-neutral-800"
              >
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Your Name / Organisation:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.co.uk"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-red-500 font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1">Project Details or Query:</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your app concept or compliance requirements..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition active:scale-95 shadow-lg shadow-rose-600/30"
                >
                  Submit Inquiry to Tech Lead
                </button>
              </form>
            )}

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPLIANCE_CONFIG.phone}`}
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center space-x-1.5 text-xs text-emerald-400 font-mono transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Phone</span>
              </a>
              <a
                href={`mailto:${COMPLIANCE_CONFIG.contactEmail}`}
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center space-x-1.5 text-xs text-blue-400 font-mono transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        )}

        {/* Legal & Compliance In-App Modules */}
        {(app.id === "compliance-shield" || app.id === "terms-policy") && (
          <div className="space-y-3">
            <div className="flex space-x-1 bg-neutral-900 p-1 rounded-xl text-[11px] font-mono border border-neutral-800">
              {["cookies", "privacy", "sar"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1 rounded-lg text-center transition ${
                    activeTab === tab
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {activeTab === "cookies" && (
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
                <h3 className="text-xs font-semibold text-white">DUAA First-Party Analytics Toggle</h3>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  First-party usage metrics under statutory DUAA exemptions. No third-party tracking scripts or advertising cookies are loaded.
                </p>
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                  <span className="text-xs text-neutral-300">Analytics Active</span>
                  <button
                    type="button"
                    onClick={() => onAnalyticsToggle?.(!analyticsEnabled)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition ${
                      analyticsEnabled
                        ? "bg-emerald-600 text-white"
                        : "bg-neutral-800 text-neutral-400"
                    }`}
                  >
                    {analyticsEnabled ? "ENABLED" : "DISABLED"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "sar" && (
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <h3 className="text-xs font-semibold text-white">Subject Access Request (SAR) Portal</h3>
                <p className="text-[11px] text-neutral-400">
                  Submit a statutory access or deletion request pursuant to UK GDPR Article 15/17.
                </p>
                {sarSubmitted ? (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-[11px] text-emerald-300">
                    SAR Registered. Statutory 30-day resolution timeline initiated.
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSarSubmitted(true)}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-mono text-white transition"
                  >
                    Generate Test SAR Dispatch
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Generic App Description if not specialized */}
        {!["services", "pricing", "booking", "reviews", "portfolio", "faq", "contact", "compliance-shield", "terms-policy"].includes(app.id) && (
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-xs font-semibold text-neutral-200">About {app.title}</h3>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                {app.description || "Production-grade cloud module engineered with strict client-side encryption and zero-knowledge storage."}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between text-neutral-400">
                <span>Architecture:</span>
                <span className="text-white">Next.js Client / Edge</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Compliance:</span>
                <span className="text-emerald-400">UK GDPR Certified</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Status:</span>
                <span className="text-blue-400">Live Production</span>
              </div>
            </div>

            {app.destinationUrl && app.destinationUrl.startsWith("http") && (
              <a
                href={app.destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 font-mono text-xs text-white transition active:scale-95"
              >
                <span>Launch Subdomain</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

        {/* Public Transparency Callout */}
        <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-[10px] text-neutral-400 space-y-1">
          <div className="flex items-center space-x-1 font-semibold text-neutral-300">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>{TRANSPARENCY_CALLOUT.title}</span>
          </div>
          <p className="leading-relaxed">{TRANSPARENCY_CALLOUT.body}</p>
        </div>
      </div>

      {/* Bottom Virtual Home Bar (iOS style pull-up pill) */}
      <div className="pt-2 pb-3 px-4 flex justify-center bg-neutral-900/80 border-t border-neutral-800/60 shrink-0">
        <button
          type="button"
          onClick={onClose}
          aria-label="Swipe up to exit to home grid"
          className="w-32 h-1 bg-neutral-500/70 hover:bg-neutral-300 rounded-full transition-colors active:scale-95 cursor-pointer"
        />
      </div>
    </div>
  );
}
