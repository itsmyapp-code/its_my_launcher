"use client";

import React, { useState } from "react";
import { StatusBar } from "./StatusBar";
import { AppGrid } from "./AppGrid";
import { BottomDock } from "./BottomDock";
import { MiniOSModal } from "./MiniOSModal";
import { ShowcaseApp, RenderMode, APPS_CONFIG } from "@/config/apps.config";

interface PhoneChassisProps {
  mode: RenderMode;
  onModeToggle: (mode: RenderMode) => void;
  wallpaper: string;
  analyticsOptedIn: boolean;
  onAnalyticsToggle: (enabled: boolean) => void;
}

export function PhoneChassis({
  mode,
  onModeToggle,
  wallpaper,
  analyticsOptedIn,
  onAnalyticsToggle,
}: PhoneChassisProps) {
  const [activeApp, setActiveApp] = useState<ShowcaseApp | null>(null);

  const handleOpenApp = (app: ShowcaseApp) => {
    if (app.openInModal) {
      setActiveApp(app);
    } else if (app.destinationUrl) {
      if (app.destinationUrl.startsWith("http")) {
        window.open(app.destinationUrl, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = app.destinationUrl;
      }
    }
  };

  const wallpaperClasses: Record<string, string> = {
    "gradient-indigo": "bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950",
    "gradient-aurora": "bg-gradient-to-b from-slate-950 via-teal-950/60 to-purple-950/80",
    "gradient-dark": "bg-gradient-to-b from-neutral-950 via-neutral-900 to-black",
    "gradient-sunset": "bg-gradient-to-b from-slate-950 via-rose-950/60 to-indigo-950",
  };

  const bgStyle = wallpaperClasses[wallpaper] || wallpaperClasses["gradient-indigo"];

  return (
    <div className="relative flex justify-center items-center w-full max-w-full">
      {/* Physical Hardware Buttons (Visible on desktop md: and above) */}
      <div className="hidden md:block absolute -left-3.5 top-28 w-1.5 h-10 bg-neutral-700 rounded-l-md shadow-md" title="Action Button" />
      <div className="hidden md:block absolute -left-3.5 top-44 w-1.5 h-14 bg-neutral-700 rounded-l-md shadow-md" title="Volume Up" />
      <div className="hidden md:block absolute -left-3.5 top-62 w-1.5 h-14 bg-neutral-700 rounded-l-md shadow-md" title="Volume Down" />
      <div className="hidden md:block absolute -right-3.5 top-36 w-1.5 h-20 bg-neutral-700 rounded-r-md shadow-md" title="Power Button" />

      {/* Main Chassis Frame:
          - Desktop (md:): 390px x 820px with realistic titanium bezel & curved corners
          - Mobile (<md): 100vw x 100dvh borderless native mobile layout
      */}
      <div
        className={`relative flex flex-col overflow-hidden transition-all duration-300 ${
          // Desktop chassis styling
          "md:w-[390px] md:h-[820px] md:rounded-[54px] md:border-[10px] md:border-neutral-800 md:ring-1 md:ring-neutral-700/50 md:shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
        } ${
          // Mobile full screen styling
          "w-full h-[100dvh] rounded-none border-0 shadow-none"
        }`}
      >
        {/* Subtle Titanium Inner Bezel Ring (Desktop only) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none rounded-[44px] ring-1 ring-white/10 z-30" />

        {/* Screen Background with Wallpaper & Glow */}
        <div className={`absolute inset-0 z-0 ${bgStyle} transition-colors duration-500`}>
          {/* Subtle Ambient Wallpaper Lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Virtual Screen Content Container */}
        <div className="relative z-10 flex flex-col h-full w-full justify-between">
          {/* Top Status Bar with Dynamic Island Notch */}
          <StatusBar currentAppName={activeApp?.title || null} />

          {/* Quick OS Mode Switcher Bar */}
          <div className="px-5 pt-1 pb-1 flex items-center justify-between z-20">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
              Launcher Mode
            </span>
            <div className="flex bg-black/40 backdrop-blur-md p-0.5 rounded-full border border-white/10">
              <button
                type="button"
                onClick={() => onModeToggle("business")}
                className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full transition-all ${
                  mode === "business"
                    ? "bg-blue-600 text-white font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                3×3 Matrix
              </button>
              <button
                type="button"
                onClick={() => onModeToggle("directory")}
                className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full transition-all ${
                  mode === "directory"
                    ? "bg-emerald-600 text-white font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                4×N Directory
              </button>
            </div>
          </div>

          {/* Main App Grid (Matrix Navigation) */}
          <main className="flex-1 overflow-hidden relative">
            <AppGrid
              mode={mode}
              businessApps={APPS_CONFIG.businessGrid}
              directoryApps={APPS_CONFIG.directoryGrid}
              onOpenApp={handleOpenApp}
            />
          </main>

          {/* Persistent Glassmorphism Bottom Dock */}
          <BottomDock
            onQuickAction={(actionId) => {
              // Action feedback
            }}
          />

          {/* Bottom Physical Home Bar Pill */}
          <div className="w-full flex justify-center pb-2 pt-1 pointer-events-none z-30">
            <div className="w-32 h-1 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* Mini-OS In-App Modal Layer (Embedded Preview) */}
        {activeApp && (
          <MiniOSModal
            app={activeApp}
            onClose={() => setActiveApp(null)}
            onAnalyticsToggle={onAnalyticsToggle}
            analyticsEnabled={analyticsOptedIn}
          />
        )}
      </div>
    </div>
  );
}
