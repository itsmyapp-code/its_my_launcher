"use client";

import React, { useState } from "react";
import { ShieldCheck, Music, Sparkles } from "lucide-react";

interface DynamicIslandProps {
  currentAppName?: string | null;
}

export function DynamicIsland({ currentAppName }: DynamicIslandProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeAlert, setActiveAlert] = useState<"security" | "music" | "status">("security");

  const getAlertTitle = () => {
    switch (activeAlert) {
      case "security":
        return "UK GDPR Certified";
      case "music":
        return "itsmyapp Audio";
      case "status":
      default:
        return "itsmyapp OS 2026";
    }
  };

  const getAlertSubtitle = () => {
    switch (activeAlert) {
      case "security":
        return "Zero persistent cookies • 7:1 AAA";
      case "music":
        return "Client-side Edge Audio";
      case "status":
      default:
        return "100dvh fluid responsive";
    }
  };

  const cycleAlert = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveAlert((prev) => {
      if (prev === "security") return "music";
      if (prev === "music") return "status";
      return "security";
    });
  };

  return (
    <div className="relative flex justify-center z-40 select-none">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Expand Dynamic Island Status"
        className={`bg-black text-white transition-all duration-300 ease-out flex items-center justify-between cursor-pointer border border-neutral-800/80 shadow-md ${
          isExpanded
            ? "w-[88%] h-14 rounded-3xl px-4 py-2 mt-1"
            : "w-28 h-6 rounded-full px-2 mt-1.5 hover:scale-105"
        }`}
      >
        {!isExpanded ? (
          <>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                {currentAppName ? currentAppName.substring(0, 7) : "UK GDPR"}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500" title="Zero Telemetry Active" />
          </>
        ) : (
          <div className="w-full flex items-center justify-between animate-fadeIn">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-emerald-400">
                {activeAlert === "security" && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                {activeAlert === "music" && <Music className="w-4 h-4 text-purple-400 animate-spin" />}
                {activeAlert === "status" && <Sparkles className="w-4 h-4 text-amber-400" />}
              </div>
              <div className="text-left leading-tight">
                <div className="text-[11px] font-semibold text-neutral-200">
                  {getAlertTitle()}
                </div>
                <div className="text-[9px] font-mono text-neutral-400">
                  {getAlertSubtitle()}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <span
                onClick={cycleAlert}
                className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition"
              >
                Toggle
              </span>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
