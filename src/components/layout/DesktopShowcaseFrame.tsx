"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Eye,
  Palette,
  LayoutGrid,
  Check,
  Sparkles,
  ExternalLink,
  Laptop,
} from "lucide-react";
import { PhoneChassis } from "../phone/PhoneChassis";
import { CookieConsentBanner } from "../compliance/CookieConsentBanner";
import { APPS_CONFIG, RenderMode } from "@/config/apps.config";
import { COMPLIANCE_CONFIG, TRANSPARENCY_CALLOUT } from "@/config/compliance.config";
import {
  getAnonymousUid,
  getUserPreferences,
  saveUserPreferences,
} from "@/lib/firebase";

export function DesktopShowcaseFrame() {
  const [renderMode, setRenderMode] = useState<RenderMode>(APPS_CONFIG.defaultRenderMode);
  const [wallpaper, setWallpaper] = useState<string>("gradient-indigo");
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [cookieBannerDismissed, setCookieBannerDismissed] = useState<boolean>(false);
  const [analyticsOptedIn, setAnalyticsOptedIn] = useState<boolean>(false);
  const [uid, setUid] = useState<string>("guest");

  // Load preferences from Firestore cache / local state
  useEffect(() => {
    const userUid = getAnonymousUid();
    setUid(userUid);
    getUserPreferences(userUid).then((prefs) => {
      if (prefs.gridMode) setRenderMode(prefs.gridMode);
      if (prefs.wallpaper) setWallpaper(prefs.wallpaper);
      if (prefs.highContrast !== undefined) setHighContrast(prefs.highContrast);
      if (prefs.cookieConsent) {
        setCookieBannerDismissed(true);
        setAnalyticsOptedIn(prefs.cookieConsent.analytics);
      }
    });
  }, []);

  const handleModeChange = (mode: RenderMode) => {
    setRenderMode(mode);
    saveUserPreferences(uid, { gridMode: mode });
  };

  const handleWallpaperChange = (wp: string) => {
    setWallpaper(wp);
    saveUserPreferences(uid, { wallpaper: wp });
  };

  const handleHighContrastToggle = () => {
    const nextVal = !highContrast;
    setHighContrast(nextVal);
    saveUserPreferences(uid, { highContrast: nextVal });
  };

  const handleAcceptAllCookies = () => {
    setCookieBannerDismissed(true);
    setAnalyticsOptedIn(true);
    saveUserPreferences(uid, {
      cookieConsent: {
        essential: true,
        analytics: true,
        marketing: true,
        decidedAt: new Date().toISOString(),
      },
    });
  };

  const handleRejectAllCookies = () => {
    setCookieBannerDismissed(true);
    setAnalyticsOptedIn(false);
    saveUserPreferences(uid, {
      cookieConsent: {
        essential: true,
        analytics: false,
        marketing: false,
        decidedAt: new Date().toISOString(),
      },
    });
  };

  const handleCustomizeCookies = (settings: { analytics: boolean; marketing: boolean }) => {
    setCookieBannerDismissed(true);
    setAnalyticsOptedIn(settings.analytics);
    saveUserPreferences(uid, {
      cookieConsent: {
        essential: true,
        analytics: settings.analytics,
        marketing: settings.marketing,
        decidedAt: new Date().toISOString(),
      },
    });
  };

  return (
    <div
      className={`min-h-[100dvh] w-full flex flex-col justify-between font-mono transition-colors duration-200 ${
        highContrast
          ? "bg-black text-white"
          : "bg-neutral-950 text-neutral-100 selection:bg-blue-600 selection:text-white"
      }`}
    >
      {/* Top Header Showcase Navigation (Desktop & Mobile) */}
      <header className="w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Brand & Subdomain Badge */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold tracking-tight text-white block">
                  itsmyapp<span className="text-blue-400">.co.uk</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">
                  Smartphone UI Showcase Hub
                </span>
              </div>
            </Link>

            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
              UK GDPR • DUAA 2025
            </span>
          </div>

          {/* Controls & Studio Toolbar (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Grid Matrix Mode Toggles */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl p-1">
              <button
                type="button"
                onClick={() => handleModeChange("business")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  renderMode === "business"
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>3×3 Business Matrix</span>
              </button>
              <button
                type="button"
                onClick={() => handleModeChange("directory")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  renderMode === "directory"
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>4×N Software Directory</span>
              </button>
            </div>

            {/* Wallpaper Selector */}
            <div className="flex items-center space-x-1 bg-neutral-900 border border-neutral-800 rounded-xl px-2 py-1">
              <Palette className="w-3.5 h-3.5 text-neutral-400 mr-1" />
              {[
                { id: "gradient-indigo", label: "Indigo" },
                { id: "gradient-aurora", label: "Aurora" },
                { id: "gradient-sunset", label: "Sunset" },
                { id: "gradient-dark", label: "Onyx" },
              ].map((wp) => (
                <button
                  key={wp.id}
                  type="button"
                  onClick={() => handleWallpaperChange(wp.id)}
                  className={`text-[10px] px-2 py-1 rounded-md transition ${
                    wallpaper === wp.id
                      ? "bg-neutral-800 text-blue-400 font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {wp.label}
                </button>
              ))}
            </div>

            {/* WCAG AAA 7:1 High Contrast Switcher */}
            <button
              type="button"
              onClick={handleHighContrastToggle}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl border text-xs transition ${
                highContrast
                  ? "bg-white text-black border-white font-bold"
                  : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white"
              }`}
              title="Toggle WCAG AAA 7:1 High Contrast Mode"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{highContrast ? "7:1 High Contrast: ON" : "WCAG AAA 7:1"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Showcase Section */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-2 md:px-8 py-3 md:py-8 flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Side: Desktop Feature Specs & Context (Visible on lg: screens) */}
        <aside className="hidden xl:flex flex-col w-80 space-y-4 shrink-0 text-left">
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm space-y-2">
            <div className="flex items-center space-x-2 text-blue-400">
              <Smartphone className="w-4 h-4" />
              <h2 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                Physical Phone Chassis
              </h2>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
              Designed as an interactive mobile simulator. Desktop renders a centered 390px × 820px titanium bezel with interactive dynamic island, while mobile devices automatically expand to 100dvh edge-to-edge.
            </p>
            <div className="pt-2 border-t border-neutral-800 space-y-1 text-[10px] text-neutral-400 font-mono">
              <div className="flex justify-between">
                <span>Display Aspect:</span>
                <span className="text-neutral-200">19.5 : 9 Ratio</span>
              </div>
              <div className="flex justify-between">
                <span>Viewport Logic:</span>
                <span className="text-emerald-400">100dvh Safe Area</span>
              </div>
              <div className="flex justify-between">
                <span>Telemetry Status:</span>
                <span className="text-emerald-400">Zero Surveillance</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <h2 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
                DUAA 2025 Compliance
              </h2>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
              Statutory 14-day cooling off tracking, zero conversion sludge &ldquo;Same-Channel&rdquo; exit, and equal prominence consent layers.
            </p>
            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span>Controller Endpoint:</span>
              <a href="mailto:hello@itsmyapp.co.uk" className="text-blue-400 underline">
                hello@itsmyapp.co.uk
              </a>
            </div>
          </div>
        </aside>

        {/* Center: Centered Realistic Smartphone Mockup */}
        <div className="flex-1 flex justify-center items-center w-full max-w-full">
          <PhoneChassis
            mode={renderMode}
            onModeToggle={handleModeChange}
            wallpaper={wallpaper}
            analyticsOptedIn={analyticsOptedIn}
            onAnalyticsToggle={(val) => setAnalyticsOptedIn(val)}
          />
        </div>

        {/* Right Side: Quick Action Inspector & Direct Triggers (Visible on xl: screens) */}
        <aside className="hidden xl:flex flex-col w-80 space-y-4 shrink-0 text-left">
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm space-y-2.5">
            <h2 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
              Dock Utilities (Direct Links)
            </h2>
            <p className="text-[11px] text-neutral-400 font-sans">
              Click the phone bottom dock icons or use direct external triggers:
            </p>

            <div className="space-y-2 pt-1 font-mono text-xs">
              <a
                href={`tel:${APPS_CONFIG.phoneNumber}`}
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-emerald-400 transition"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call {APPS_CONFIG.phoneNumber}</span>
                </div>
                <span className="text-[10px] text-neutral-400">tel:</span>
              </a>

              <a
                href={`mailto:${APPS_CONFIG.supportEmail}`}
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-blue-400 transition"
              >
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{APPS_CONFIG.supportEmail}</span>
                </div>
                <span className="text-[10px] text-neutral-400">mailto:</span>
              </a>

              <a
                href={APPS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-teal-400 transition"
              >
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </div>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              <a
                href={APPS_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-rose-400 transition"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>London UK Office</span>
                </div>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm space-y-2">
            <span className="text-[10px] font-mono text-neutral-400">
              Client Storage Scope:
            </span>
            <div className="p-2 rounded-lg bg-neutral-950 font-mono text-[10px] text-neutral-300 break-all border border-neutral-800">
              users/{uid}/preferences
            </div>
          </div>
        </aside>
      </div>

      {/* Global Navigation Footer & Statutory Transparency Callout */}
      <footer className="w-full border-t border-neutral-800/80 bg-neutral-950 px-4 md:px-8 py-6 select-none z-30">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Public Transparency Callout (Exact Master Framework Block) */}
          <div className="p-4 md:p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-left">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-neutral-200 tracking-tight font-mono">
                  {TRANSPARENCY_CALLOUT.title}:
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans">
                  For any questions regarding your data rights, or to submit an inquiry, please contact our Data Privacy Lead directly at{" "}
                  <a
                    href="mailto:hello@itsmyapp.co.uk"
                    className="text-blue-400 hover:underline font-mono"
                  >
                    hello@itsmyapp.co.uk
                  </a>
                  . We formally acknowledge all compliance submissions within 30 days.
                </p>
              </div>
            </div>
          </div>

          {/* Statutory Route Links & Certification Meta */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 border-t border-neutral-800/60 text-xs text-neutral-400 font-mono">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link href="/terms" className="hover:text-white transition underline">
                /terms (Terms of Service)
              </Link>
              <Link href="/privacy" className="hover:text-white transition underline">
                /privacy (Privacy Policy)
              </Link>
              <Link href="/cookies" className="hover:text-white transition underline">
                /cookies (Cookie Policy)
              </Link>
              <Link href="/accessibility" className="hover:text-white transition underline">
                /accessibility (Accessibility Statement)
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-neutral-500">
              <span>© 2026 itsmyapp.co.uk</span>
              <span>•</span>
              <span>Framework: UK GDPR / DUAA / DMCCA</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {!cookieBannerDismissed && (
        <CookieConsentBanner
          onAcceptAll={handleAcceptAllCookies}
          onRejectAll={handleRejectAllCookies}
          onCustomize={handleCustomizeCookies}
        />
      )}
    </div>
  );
}
