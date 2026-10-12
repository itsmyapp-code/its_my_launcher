"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, ShieldCheck, CheckCircle2, Monitor } from "lucide-react";
import { COMPLIANCE_CONFIG, TRANSPARENCY_CALLOUT } from "@/config/compliance.config";

export default function AccessibilityPage() {
  const [highContrastTest, setHighContrastTest] = useState(false);

  return (
    <div
      className={`min-h-screen font-mono py-10 px-4 md:px-8 transition-colors duration-200 ${
        highContrastTest ? "bg-black text-white" : "bg-neutral-950 text-neutral-100"
      }`}
    >
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
          <div className="flex items-center space-x-2 text-cyan-400 text-xs uppercase tracking-wider">
            <Eye className="w-4 h-4" />
            <span>WCAG 2.1 AA / AAA Statement • Route /accessibility</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Accessibility Statement
          </h1>
          <p className="text-xs text-neutral-400 font-sans">
            Target Standardization: Web Content Accessibility Guidelines (WCAG) 2.1 Level AA & AAA Contrast
          </p>
        </header>

        {/* Interactive Contrast Tester */}
        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-white">Live 7:1 Contrast Mode Preview</div>
            <div className="text-[11px] text-neutral-400">
              Test WCAG AAA 7:1 maximum contrast state across this document.
            </div>
          </div>
          <button
            type="button"
            onClick={() => setHighContrastTest(!highContrastTest)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition ${
              highContrastTest
                ? "bg-white text-black border-white font-bold"
                : "bg-neutral-800 text-neutral-200 border-neutral-700 hover:text-white"
            }`}
          >
            {highContrastTest ? "Disable 7:1 Contrast" : "Enable 7:1 Contrast"}
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 text-sm text-neutral-300 font-sans leading-relaxed">
          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">01.</span>
              <span>Our Accessibility Commitment</span>
            </h2>
            <p>
              itsmyapp.co.uk is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards across our desktop showcase frames and mobile smartphone mockups.
            </p>
          </section>

          <section className="space-y-3 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">02.</span>
              <span>Core Layout Engineering Specifications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-emerald-400 block mb-1">Keyboard Navigation:</strong>
                All interactive app grid tiles, dock actions, and modal buttons feature native keyboard tab order and focus-visible indicators.
              </div>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-cyan-400 block mb-1">Contrast Ratios:</strong>
                Text components meet or exceed WCAG AA (4.5:1) standards with an available one-click WCAG AAA (7:1) high-contrast overlay.
              </div>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-amber-400 block mb-1">Semantic Markup:</strong>
                Logical landmark elements (<code className="text-white">&lt;header&gt;</code>, <code className="text-white">&lt;main&gt;</code>, <code className="text-white">&lt;nav&gt;</code>, <code className="text-white">&lt;footer&gt;</code>) and explicit ARIA labels.
              </div>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-purple-400 block mb-1">Screen-Reader Profiles:</strong>
                Descriptive image alt-tags, aria-modal layers, and live announcer elements for dynamic island updates.
              </div>
            </div>
          </section>

          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">03.</span>
              <span>Feedback & Assistance</span>
            </h2>
            <p>
              We welcome your feedback on the accessibility of itsmyapp.co.uk. If you encounter accessibility barriers, please contact our Lead Architect and Accessibility Coordinator directly at:
            </p>
            <p className="font-mono text-xs text-blue-400">
              <a href={`mailto:${COMPLIANCE_CONFIG.contactEmail}`} className="underline">
                {COMPLIANCE_CONFIG.contactEmail}
              </a>
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
