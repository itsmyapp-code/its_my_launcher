"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  LayoutGrid,
  Laptop,
  Palette,
  Eye,
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
      {/* Sleek Minimalist Studio Header */}
      <header className="w-full border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <img
              src="/logo.png"
              alt="ItsMyApp Logo"
              className="w-8 h-8 object-contain drop-shadow group-hover:scale-105 transition-transform"
            />
            <div className="text-left">
              <span className="text-base font-bold tracking-tight text-white block leading-none">
                ItsMyApp
              </span>
              <span className="text-[10px] text-neutral-400 font-sans block mt-0.5">
                Innovative Apps for Modern Life
              </span>
            </div>
          </Link>

          {/* Quick Studio Controls */}
          <div className="flex items-center space-x-3">
            {/* 3x3 vs 4xN Matrix Switcher */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl p-0.5 shadow-inner">
              <button
                type="button"
                onClick={() => handleModeChange("business")}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono transition ${
                  renderMode === "business"
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>3×3 Business</span>
              </button>
              <button
                type="button"
                onClick={() => handleModeChange("directory")}
                className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono transition ${
                  renderMode === "directory"
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Laptop className="w-3 h-3" />
                <span>4×N Directory</span>
              </button>
            </div>

            {/* Subtle Wallpaper Palette */}
            <div className="hidden sm:flex items-center space-x-1 bg-neutral-900 border border-neutral-800 rounded-xl px-2 py-0.5">
              <Palette className="w-3 h-3 text-neutral-400 mr-1" />
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
                  className={`text-[10px] px-2 py-0.5 rounded-md transition ${
                    wallpaper === wp.id
                      ? "bg-neutral-800 text-blue-400 font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {wp.label}
                </button>
              ))}
            </div>

            {/* High Contrast Mode */}
            <button
              type="button"
              onClick={handleHighContrastToggle}
              className={`hidden md:flex items-center space-x-1 px-2.5 py-1 rounded-xl border text-xs transition ${
                highContrast
                  ? "bg-white text-black border-white font-bold"
                  : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
              }`}
              title="Toggle WCAG AAA 7:1 High Contrast Mode"
            >
              <Eye className="w-3 h-3" />
              <span>{highContrast ? "AAA ON" : "7:1 AAA"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Showcase: 100% Centered Clean Phone Chassis */}
      <main className="flex-1 w-full mx-auto px-4 py-6 md:py-12 flex items-center justify-center">
        <div className="flex justify-center items-center w-full">
          <PhoneChassis
            mode={renderMode}
            onModeToggle={handleModeChange}
            wallpaper={wallpaper}
            analyticsOptedIn={analyticsOptedIn}
            onAnalyticsToggle={(val) => setAnalyticsOptedIn(val)}
          />
        </div>
      </main>

      {/* Clean Global Navigation Footer */}
      <footer className="w-full border-t border-neutral-900 bg-neutral-950/90 backdrop-blur px-4 md:px-8 py-5 select-none z-30">
        <div className="max-w-4xl mx-auto space-y-3 text-center">
          {/* Statutory Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-mono">
            <Link href="/terms" className="hover:text-white transition underline">
              /terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition underline">
              /privacy
            </Link>
            <Link href="/cookies" className="hover:text-white transition underline">
              /cookies
            </Link>
            <Link href="/accessibility" className="hover:text-white transition underline">
              /accessibility
            </Link>
            <a
              href="mailto:hello@itsmyapp.co.uk"
              className="text-blue-400 hover:underline transition"
            >
              hello@itsmyapp.co.uk
            </a>
          </div>

          <p className="text-[11px] text-neutral-500 font-sans">
            © 2026 itsmyapp.co.uk • UK GDPR / DUAA 2025 / DMCCA 2024 Framework Certified
          </p>
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
