"use client";

import React from "react";
import { ShowcaseApp, RenderMode } from "@/config/apps.config";
import { IconRenderer } from "../ui/IconRenderer";

interface AppGridProps {
  mode: RenderMode;
  businessApps: ShowcaseApp[];
  directoryApps: ShowcaseApp[];
  onOpenApp: (app: ShowcaseApp) => void;
}

export function AppGrid({
  mode,
  businessApps,
  directoryApps,
  onOpenApp,
}: AppGridProps) {
  if (mode === "business") {
    // Mode 1: Business 9-Grid (3x3 Matrix)
    return (
      <div className="w-full h-full flex flex-col justify-start px-4 pt-3 pb-24 overflow-y-auto no-scrollbar">
        {/* Section Header / Brand Pill */}
        <div className="mb-3 px-2 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold tracking-tight text-white drop-shadow">
              itsmyapp<span className="text-blue-400 font-mono">.co.uk</span>
            </h2>
            <p className="text-[10px] font-mono text-neutral-300 drop-shadow">
              Core Enterprise Matrix (3×3)
            </p>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
            9 Core Hubs
          </span>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 gap-3.5 my-auto">
          {businessApps.slice(0, 9).map((app) => (
            <button
              key={app.id}
              type="button"
              onClick={() => onOpenApp(app)}
              className="group relative flex flex-col items-center justify-start p-2.5 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/30 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 active:scale-95 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {/* Optional Badge */}
              {app.badgeText && (
                <span className="absolute -top-1.5 -right-1 z-10 text-[8px] font-mono font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-blue-600 text-white shadow-sm border border-white/20">
                  {app.badgeText}
                </span>
              )}

              {/* App Icon Squircle */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.bgColor} p-3 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 group-hover:shadow-blue-500/25`}
              >
                <IconRenderer
                  name={app.icon}
                  className={`w-7 h-7 ${app.iconColor || "text-white"}`}
                />
              </div>

              {/* Title & Micro-subtitle */}
              <span className="mt-2 text-xs font-semibold text-white tracking-tight drop-shadow truncate w-full">
                {app.title}
              </span>
              <span className="text-[9px] font-mono text-neutral-300 truncate w-full leading-tight">
                {app.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Mode 2: Software Directory (4xN Matrix)
  return (
    <div className="w-full h-full flex flex-col justify-start px-3.5 pt-2 pb-24 overflow-y-auto no-scrollbar">
      {/* Section Header */}
      <div className="mb-2 px-1 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-white drop-shadow">
            Client Ecosystem
          </h2>
          <p className="text-[10px] font-mono text-neutral-300 drop-shadow">
            Software Directory (4×N)
          </p>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
          {directoryApps.length} Deployed Apps
        </span>
      </div>

      {/* 4xN Matrix */}
      <div className="grid grid-cols-4 gap-x-2 gap-y-3.5 pt-1">
        {directoryApps.map((app) => (
          <button
            key={app.id}
            type="button"
            onClick={() => onOpenApp(app)}
            className="group relative flex flex-col items-center justify-start text-center focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 active:scale-90 transition-transform duration-150"
          >
            {/* Optional Badge */}
            {app.badgeText && (
              <span className="absolute -top-1 -right-0.5 z-10 text-[7px] font-mono font-bold tracking-tight px-1 py-0.2 rounded-full bg-emerald-600 text-white shadow-sm border border-white/20">
                {app.badgeText}
              </span>
            )}

            {/* iOS/Android Squircle Icon */}
            <div
              className={`w-[50px] h-[50px] rounded-[15px] bg-gradient-to-br ${app.bgColor} p-2.5 flex items-center justify-center shadow-md border border-white/10 group-hover:scale-105 group-hover:shadow-lg transition-all duration-200`}
            >
              <IconRenderer
                name={app.icon}
                className={`w-6 h-6 ${app.iconColor || "text-white"}`}
              />
            </div>

            {/* Micro-label */}
            <span className="mt-1 text-[10px] font-medium text-white tracking-tight drop-shadow truncate w-full px-0.5">
              {app.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
