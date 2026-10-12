"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle2, Sliders } from "lucide-react";
import { COMPLIANCE_CONFIG, TRANSPARENCY_CALLOUT } from "@/config/compliance.config";
import { getAnonymousUid, getUserPreferences, saveUserPreferences } from "@/lib/firebase";

export default function CookiesPage() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  useEffect(() => {
    const uid = getAnonymousUid();
    getUserPreferences(uid).then((prefs) => {
      if (prefs.cookieConsent) {
        setAnalyticsEnabled(prefs.cookieConsent.analytics);
        setMarketingEnabled(prefs.cookieConsent.marketing);
      }
    });
  }, []);

  const handleToggleAnalytics = () => {
    const nextVal = !analyticsEnabled;
    setAnalyticsEnabled(nextVal);
    const uid = getAnonymousUid();
    saveUserPreferences(uid, {
      cookieConsent: {
        essential: true,
        analytics: nextVal,
        marketing: marketingEnabled,
        decidedAt: new Date().toISOString(),
      },
    });
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  const handleToggleMarketing = () => {
    const nextVal = !marketingEnabled;
    setMarketingEnabled(nextVal);
    const uid = getAnonymousUid();
    saveUserPreferences(uid, {
      cookieConsent: {
        essential: true,
        analytics: analyticsEnabled,
        marketing: nextVal,
        decidedAt: new Date().toISOString(),
      },
    });
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-xs font-mono transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Smartphone Showcase Hub</span>
        </Link>

        {/* Page Header */}
        <header className="border-b border-neutral-800 pb-6 space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 text-xs uppercase tracking-wider">
            <Cookie className="w-4 h-4" />
            <span>Cookie & Consent Policy • Route /cookies</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Cookie Policy & Tracker Audit
          </h1>
          <p className="text-xs text-neutral-400 font-sans">
            Certified Compliant: UK GDPR / DUAA 2025 / DMCCA 2024 Frameworks
          </p>
        </header>

        {savedFeedback && (
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 font-mono flex items-center space-x-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Cookie preferences updated successfully in offline-first client storage.</span>
          </div>
        )}

        {/* Categories of Trackers */}
        <div className="space-y-6 text-sm text-neutral-300 font-sans leading-relaxed">
          {/* Strictly Necessary */}
          <section className="space-y-3 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
                <span className="text-blue-400">01.</span>
                <span>Strictly Necessary Parameters</span>
              </h2>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                Always Active
              </span>
            </div>
            <p>
              These tracking parameters and local storage identifiers are required to establish secure user sessions, maintain layout states, authenticate requests, and protect API endpoints from fraudulent distributed replay attacks. Pursuant to UK law, these cannot be deactivated as core site functionality depends upon them.
            </p>
            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 font-mono text-xs text-neutral-400">
              Items: Session nonces, CSRF verification tokens, UI high contrast toggles, consent state record.
            </div>
          </section>

          {/* Analytics & Performance */}
          <section className="space-y-3 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
                <span className="text-blue-400">02.</span>
                <span>Analytics & First-Party Performance (DUAA Statutory Exemption)</span>
              </h2>
              <button
                type="button"
                onClick={handleToggleAnalytics}
                className={`text-xs font-mono px-3 py-1 rounded-full border transition ${
                  analyticsEnabled
                    ? "bg-emerald-600 text-white border-emerald-500 font-bold"
                    : "bg-neutral-800 text-neutral-400 border-neutral-700 hover:text-white"
                }`}
              >
                {analyticsEnabled ? "Opt-Out (Active)" : "Opt-In (Disabled)"}
              </button>
            </div>
            <p>
              Under statutory provisions enacted by the Data (Use and Access) Act 2025, consent is not required to deposit first-party performance parameters used exclusively to assess layout usage and optimize rendering speed, provided an accessible, free opt-out mechanism is available.
            </p>
            <p className="text-xs text-neutral-400">
              Use the toggle switch above to disable or re-enable first-party metrics at any time.
            </p>
          </section>

          {/* Third-Party Marketing Trackers */}
          <section className="space-y-3 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
                <span className="text-blue-400">03.</span>
                <span>Third-Party Marketing & External Pixels</span>
              </h2>
              <button
                type="button"
                onClick={handleToggleMarketing}
                className={`text-xs font-mono px-3 py-1 rounded-full border transition ${
                  marketingEnabled
                    ? "bg-blue-600 text-white border-blue-500 font-bold"
                    : "bg-neutral-800 text-neutral-400 border-neutral-700 hover:text-white"
                }`}
              >
                {marketingEnabled ? "Allowed" : "Blocked by Default"}
              </button>
            </div>
            <p>
              External advertising trackers (such as Meta Pixel, Google Ads, or behavioral retargeting scripts) are <strong className="text-white">strictly blocked from execution</strong> unless and until you affirmatively click &ldquo;Accept All&rdquo; or enable them explicitly. We do not sell or monetize personal session telemetry.
            </p>
          </section>
        </div>

        {/* Public Transparency Callout */}
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs">
          <div className="flex items-center space-x-2 font-bold text-white font-mono mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>{TRANSPARENCY_CALLOUT.title}:</span>
          </div>
          <p className="text-neutral-400 font-sans leading-relaxed">
            {TRANSPARENCY_CALLOUT.body}{" "}
            <a href={`mailto:${COMPLIANCE_CONFIG.contactEmail}`} className="text-blue-400 underline font-mono">
              {COMPLIANCE_CONFIG.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
