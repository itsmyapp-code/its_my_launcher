"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Star,
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
            className={`w-6 h-6 rounded-lg bg-gradient-to-br ${app.bgColor} flex items-center justify-center p-0.5 shadow-sm overflow-hidden`}
          >
            {app.image ? (
              <img src={app.image} alt={app.title} className="w-full h-full object-contain" />
            ) : (
              <IconRenderer name={app.icon || "HelpCircle"} className="w-3.5 h-3.5 text-white" />
            )}
          </div>
          <span
            id="modal-app-title"
            className="text-xs font-semibold tracking-tight text-neutral-200 truncate max-w-[140px]"
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
        {/* Header Hero Banner with Real App Image */}
        <div
          className={`p-4 rounded-2xl bg-gradient-to-br ${app.bgColor} text-white shadow-xl relative overflow-hidden flex items-start justify-between gap-3`}
        >
          <div className="relative z-10 flex-1">
            <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 inline-block mb-1.5">
              {app.badgeText || "ItsMyApp Official"}
            </span>
            <h1 className="text-lg font-bold tracking-tight">{app.title}</h1>
            <p className="text-xs text-white/90 font-sans mt-0.5 leading-snug">{app.subtitle}</p>
          </div>

          {app.image ? (
            <div className="w-14 h-14 rounded-2xl bg-white/10 p-2 backdrop-blur-sm border border-white/20 shrink-0 flex items-center justify-center shadow-lg">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-contain drop-shadow"
              />
            </div>
          ) : (
            <div className="opacity-20 shrink-0">
              <IconRenderer name={app.icon || "HelpCircle"} className="w-12 h-12 text-white" />
            </div>
          )}
        </div>

        {/* Description */}
        <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5">
          <h3 className="text-xs font-semibold text-neutral-200">About {app.title}</h3>
          <p className="text-xs text-neutral-300 leading-relaxed font-sans">
            {app.description || "A user-friendly app built to solve real-world problems and make everyday operations seamless."}
          </p>
        </div>

        {/* Features Checklist if defined */}
        {app.features && app.features.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-neutral-300 font-mono">
              Key Capabilities:
            </h3>
            <div className="space-y-1.5">
              {app.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs space-y-0.5"
                >
                  <div className="font-semibold text-white flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 pl-5 font-sans">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Direct Launch / Website Action */}
        {app.destinationUrl && (
          <a
            href={app.destinationUrl}
            target={app.destinationUrl.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-medium text-xs text-white transition active:scale-95 shadow-lg shadow-blue-600/30"
          >
            <span>Launch {app.title}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
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
