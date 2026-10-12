"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { COMPLIANCE_CONFIG, TRANSPARENCY_CALLOUT } from "@/config/compliance.config";

export default function TermsPage() {
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
          <div className="flex items-center space-x-2 text-blue-400 text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Statutory Agreement • Route /terms</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-neutral-400 font-sans">
            Effective Date: {COMPLIANCE_CONFIG.effectiveDate} | Data Controller: {COMPLIANCE_CONFIG.companyName}
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-6 text-sm text-neutral-300 font-sans leading-relaxed">
          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">01.</span>
              <span>Acceptance of Terms</span>
            </h2>
            <p>
              By accessing, browsing, or utilizing any web interface, mobile showcase hub, or client application hosted under the domain <strong className="text-white">itsmyapp.co.uk</strong> (or its associated subdomains), you acknowledge that you have read, understood, and agreed to be bound by these statutory Terms of Service. If you do not accept these terms in their entirety, you must discontinue use immediately.
            </p>
          </section>

          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">02.</span>
              <span>User Responsibilities & Session Security</span>
            </h2>
            <p>
              Users assume full liability for maintaining the confidentiality of any access credentials, authentication states, and locally managed cache records (including client-side tokens and shared workspace codes). You agree to notify the Data Controller immediately upon discovering any unauthorized session activity or security vulnerability.
            </p>
          </section>

          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">03.</span>
              <span>Prohibited Conduct & Anti-Abuse Standards</span>
            </h2>
            <p>
              You are explicitly prohibited from engaging in any unlawful activity, transmitting unauthorized malware, executing automated web scraping scripts, attacking infrastructure availability, or attempting reverse engineering or decompilation of client-side code architectures deployed by itsmyapp.co.uk.
            </p>
          </section>

          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">04.</span>
              <span>Limitation of Liability (UK Law)</span>
            </h2>
            <p>
              To the maximum extent permitted under applicable law of England and Wales, all software, prototypes, and application interfaces are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind. The Data Controller accepts no liability for indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>
          </section>

          <section className="space-y-2 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <h2 className="text-base font-bold text-white font-mono flex items-center space-x-2">
              <span className="text-blue-400">05.</span>
              <span>Instant Termination Rights</span>
            </h2>
            <p>
              The Data Controller reserves the right to immediately suspend, restrict, or terminate user access to any endpoint without prior notice upon detecting a verified breach of these terms, fraudulent abuse, or security hazard.
            </p>
          </section>
        </div>

        {/* Public Transparency Callout */}
        <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs">
          <div className="flex items-center space-x-2 font-bold text-white font-mono mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>{TRANSPARENCY_CALLOUT.title}</span>
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
