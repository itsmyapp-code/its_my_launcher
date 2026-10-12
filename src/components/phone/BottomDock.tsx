"use client";

import React from "react";
import { APPS_CONFIG } from "@/config/apps.config";
import { IconRenderer } from "../ui/IconRenderer";

interface BottomDockProps {
  onQuickAction?: (actionId: string) => void;
}

export function BottomDock({ onQuickAction }: BottomDockProps) {
  return (
    <nav
      aria-label="Smartphone quick dock"
      className="absolute bottom-5 inset-x-3 z-30 select-none pointer-events-auto"
    >
      <div className="mx-auto max-w-[340px] px-3.5 py-2.5 rounded-[28px] backdrop-blur-xl bg-white/15 dark:bg-black/40 border border-white/25 dark:border-white/15 shadow-2xl flex items-center justify-between transition-all duration-300">
        {APPS_CONFIG.dockItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.ariaLabel}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={() => onQuickAction?.(item.id)}
            className="group relative flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl p-1"
          >
            {/* Squircle Icon Container */}
            <div
              className={`w-[52px] h-[52px] rounded-[16px] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 active:scale-90 ${item.color}`}
            >
              <IconRenderer name={item.icon} className="w-6 h-6 text-white drop-shadow" />
            </div>

            {/* Tiny label on hover */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute -top-7 text-[10px] font-mono tracking-wide px-2 py-0.5 rounded-md bg-black/80 text-white backdrop-blur-sm pointer-events-none whitespace-nowrap shadow-sm">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
