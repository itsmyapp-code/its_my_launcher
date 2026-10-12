"use client";

import React, { useState } from "react";
import { ShieldCheck, Info, Sliders, ExternalLink } from "lucide-react";
import Link from "next/link";

interface CookieConsentBannerProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onCustomize: (settings: { analytics: boolean; marketing: boolean }) => void;
  isCustomizingOpen?: boolean;
}

export function CookieConsentBanner({
  onAcceptAll,
  onRejectAll,
  onCustomize,
}: CookieConsentBannerProps) {
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsOptIn, setAnalyticsOptIn] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);

  return (
    <aside
      aria-label="Consent Management Banner"
      className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:max-w-xl z-50 bg-neutral-900/95 dark:bg-black/95 text-white border border-neutral-700/80 rounded-2xl shadow-2xl backdrop-blur-xl p-5 select-none animate-fadeIn"
    >
      <div className="flex items-start space-x-3.5">
        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold tracking-tight text-white">
              UK GDPR & DUAA Privacy Standard
            </h2>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              Zero Dark Patterns
            </span>
          </div>

          <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed font-sans">
            We operate zero third-party advertising cookies and zero surveillance telemetry. Non-essential trackers are blocked by default. Under the Data (Use and Access) Act 2025, you hold complete autonomy over your session.
          </p>
        </div>
      </div>

      {showPreferences && (
        <div className="mt-4 pt-4 border-t border-neutral-800 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
            <div>
              <div className="text-xs font-semibold text-neutral-200">Strictly Necessary Storage</div>
              <div className="text-[10px] text-neutral-400 font-mono">
                Security tokens, fraud checks & UI theme preferences.
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
              Mandatory
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
            <div>
              <div className="text-xs font-semibold text-neutral-200">First-Party Optimization (DUAA)</div>
              <div className="text-[10px] text-neutral-400 font-mono">
                Anonymized UX performance. No cross-site profiling.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAnalyticsOptIn(!analyticsOptIn)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition ${
                analyticsOptIn ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-400"
              }`}
            >
              {analyticsOptIn ? "Active" : "Disabled"}
            </button>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950 border border-neutral-800">
            <div>
              <div className="text-xs font-semibold text-neutral-200">Marketing & External Trackers</div>
              <div className="text-[10px] text-neutral-400 font-mono">
                Zero scripts active. Blocked at architecture level.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMarketingOptIn(!marketingOptIn)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition ${
                marketingOptIn ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-400"
              }`}
            >
              {marketingOptIn ? "Allowed" : "Blocked"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onCustomize({ analytics: analyticsOptIn, marketing: marketingOptIn });
            }}
            className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition"
          >
            Save Selected Preferences
          </button>
        </div>
      )}

      {/* Primary Layer Buttons with EQUAL PROMINENCE:
          Identical button sizing, font weight, background color, and contrast ratios.
          First-layer rejection allows rejecting without entering secondary menus.
      */}
      <div className="mt-4 pt-3 border-t border-neutral-800 flex flex-col sm:flex-row items-center gap-2.5">
        <button
          type="button"
          onClick={onRejectAll}
          className="w-full sm:flex-1 py-2.5 px-4 rounded-xl font-mono text-xs font-semibold tracking-wide bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-600 transition active:scale-95 text-center focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer"
        >
          Reject All
        </button>

        <button
          type="button"
          onClick={onAcceptAll}
          className="w-full sm:flex-1 py-2.5 px-4 rounded-xl font-mono text-xs font-semibold tracking-wide bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-600 transition active:scale-95 text-center focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer"
        >
          Accept All
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400">
        <button
          type="button"
          onClick={() => setShowPreferences(!showPreferences)}
          className="underline hover:text-white font-mono flex items-center space-x-1"
        >
          <Sliders className="w-3 h-3" />
          <span>{showPreferences ? "Hide Customization" : "Customize Preferences"}</span>
        </button>

        <Link
          href="/cookies"
          className="underline hover:text-white font-mono flex items-center space-x-1"
        >
          <span>Read Cookie Policy</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </Link>
      </div>
    </aside>
  );
}
