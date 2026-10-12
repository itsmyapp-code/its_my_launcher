"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { COMPLIANCE_CONFIG, TRANSPARENCY_CALLOUT } from "@/config/compliance.config";

export default function PrivacyPage() {
  const [sarSubmitted, setSarSubmitted] = useState(false);
  const [sarType, setSarType] = useState<"access" | "erasure" | "rectification">("access");

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
          <div className="flex items-center space-x-2 text-emerald-400 text-xs uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Statutory Privacy Policy • Route /privacy</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Privacy Policy & Data Rights
          </h1>
          <p className="text-xs text-neutral-400 font-sans">
            Framework: UK GDPR / Data (Use and Access) Act 2025 | Endpoint:{" "}
            <a href={`mailto:${COMPLIANCE_CONFIG.contactEmail}`} className="text-blue-400 underline">
              {COMPLIANCE_CONFIG.contactEmail}
            </a>
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-6 text-sm text-neutral-300 font-sans leading-relaxed">
          {/* Data Minimization */}
          <section className="space-y-3 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">01.</span>
              <span>Data Minimization & Cloud Architecture</span>
            </h2>
            <p>
              In accordance with UK GDPR Article 5(1)(c), personal data processing is strictly minimized to what is necessary for service execution. The explicit data items processed by itsmyapp.co.uk include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-neutral-200 pt-1">
              <li className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-blue-400 block">• Identity Data:</strong> Name or corporate moniker (provided during booking or enquiry).
              </li>
              <li className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-emerald-400 block">• Contact Data:</strong> Email address and telephone number for project communication.
              </li>
              <li className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-purple-400 block">• Technical Data:</strong> Anonymized IP hash, device screen aspect ratio, browser agent.
              </li>
              <li className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <strong className="text-amber-400 block">• Usage Data:</strong> Client-side UI toggles and preference states scoped under local cache.
              </li>
            </ul>
            <p className="text-xs text-neutral-400">
              All network transmissions utilize TLS 1.3 encryption. Cloud hosting is deployed through UK and EEA data center zones maintaining strict physical and cryptographic security barriers.
            </p>
          </section>

          {/* Recognized Legitimate Interests */}
          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">02.</span>
              <span>Recognized Legitimate Interests (DUAA Framework)</span>
            </h2>
            <p>
              Pursuant to Article 6 of the UK GDPR (as updated under the Data (Use and Access) Act 2025), data processing activities carried out strictly to safeguard system security, isolate malware vectors, mitigate network abuse, and maintain emergency infrastructure resilience are designated under <strong className="text-white">Recognized Legitimate Interests</strong>. Under statutory provisions, these operations omit the requirement for an individual balancing test.
            </p>
          </section>

          {/* Automated Decision-Making & AI */}
          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">03.</span>
              <span>Automated Decision-Making & AI Transparency</span>
            </h2>
            <p>
              If automated systems or AI engines assist in assessing project scoping, credit verification, or security threat scores carrying legal or significant consequences, you retain the explicit statutory right to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-300">
              <li>Receive a clear, human-understandable explanation of the automated logic applied.</li>
              <li>Challenge and contest the algorithmic assessment.</li>
              <li>Demand manual human intervention and review by our designated Lead Architect.</li>
            </ul>
          </section>

          {/* Subject Access Requests (SARs) */}
          <section className="space-y-3 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">04.</span>
              <span>Subject Access Requests (SARs) & Data Erasure</span>
            </h2>
            <p>
              You possess the statutory right to request access to, rectification of, or permanent erasure of your personal data. Searches conducted will be <strong className="text-white">&ldquo;reasonable and proportionate&rdquo;</strong> in scope. Note that the standard statutory 30-day resolution timeline may be temporarily paused while identity verification or scoping clarification is underway.
            </p>

            {/* Interactive SAR Dispatch Simulator */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white">Electronic SAR Dispatch Portal</span>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                  30-Day Guarantee
                </span>
              </div>

              {sarSubmitted ? (
                <div className="p-3 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    SAR Formally Recorded. Acknowledgement dispatched to your endpoint. Compliance ticket registered under statutory one-month clock.
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    {(["access", "erasure", "rectification"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSarType(t)}
                        className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition ${
                          sarType === t
                            ? "bg-blue-600 text-white border-blue-500 font-semibold"
                            : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                        }`}
                      >
                        {t === "access" ? "Access (Copy)" : t === "erasure" ? "Right to Erasure" : "Rectification"}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSarSubmitted(true)}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-semibold transition"
                  >
                    Transmit Statutory SAR to hello@itsmyapp.co.uk
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Complaints Workflow */}
          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">05.</span>
              <span>Complaints Workflow & Supervisory Escalation</span>
            </h2>
            <p>
              We commit to formal electronic acknowledgment of all data protection and privacy submissions within <strong className="text-white">30 calendar days</strong> of receipt. If you remain dissatisfied with our resolution, you have the statutory right to lodge an escalation complaint directly with the UK supervisory authority:
            </p>
            <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300">
              Information Commissioner&apos;s Office (ICO)<br />
              Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF<br />
              Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">https://ico.org.uk</a> | Helpline: +44 303 123 1113
            </div>
          </section>
        </div>

        {/* Public Transparency Callout (Duplicated inside contact/SAR module) */}
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
