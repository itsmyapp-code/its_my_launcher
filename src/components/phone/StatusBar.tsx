"use client";

import React, { useState, useEffect } from "react";
import { Wifi, BatteryMedium, BatteryCharging } from "lucide-react";
import { DynamicIsland } from "./DynamicIsland";

interface StatusBarProps {
  currentAppName?: string | null;
}

export function StatusBar({ currentAppName }: StatusBarProps) {
  const [timeStr, setTimeStr] = useState<string>("09:41");
  const [batteryLevel, setBatteryLevel] = useState<number>(98);
  const [isCharging, setIsCharging] = useState<boolean>(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTimeStr(`${hours}:${minutes}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full h-11 px-6 pt-1 flex items-center justify-between text-white text-xs select-none z-30 pointer-events-auto">
      {/* Time */}
      <div className="w-16 text-left">
        <span className="font-semibold tracking-tight text-[13px] font-mono drop-shadow-sm">
          {timeStr}
        </span>
      </div>

      {/* Dynamic Island Notch */}
      <div className="flex-1 flex justify-center -mt-1">
        <DynamicIsland currentAppName={currentAppName} />
      </div>

      {/* Signal, Wi-Fi & Battery Status */}
      <div className="w-20 flex items-center justify-end space-x-1.5 text-neutral-200">
        {/* Signal Bars SVG */}
        <div className="flex items-end space-x-[2px] h-3 mr-0.5" title="Full 5G Mobile Signal">
          <span className="w-[3px] h-[4px] bg-white rounded-2xs" />
          <span className="w-[3px] h-[6px] bg-white rounded-2xs" />
          <span className="w-[3px] h-[9px] bg-white rounded-2xs" />
          <span className="w-[3px] h-[12px] bg-white rounded-2xs" />
        </div>

        {/* Wi-Fi Icon */}
        <Wifi className="w-3.5 h-3.5 text-white" aria-label="Wi-Fi connected" />

        {/* Battery Container */}
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => {
            setIsCharging(!isCharging);
            setBatteryLevel((prev) => (prev >= 100 ? 85 : prev + 5));
          }}
          title={`Battery: ${batteryLevel}% ${isCharging ? "(Charging)" : ""}`}
        >
          <div className="relative w-5 h-2.5 rounded-[3px] border border-neutral-300 p-[1px] flex items-center">
            <div
              className={`h-full rounded-[1.5px] transition-all duration-300 ${
                batteryLevel > 20 ? "bg-white" : "bg-red-500"
              }`}
              style={{ width: `${Math.min(batteryLevel, 100)}%` }}
            />
            {/* Battery Nipple */}
            <div className="absolute -right-[3px] top-[2px] w-[2px] h-[4px] bg-neutral-300 rounded-r-xs" />
          </div>
          {isCharging ? (
            <BatteryCharging className="w-2.5 h-2.5 text-emerald-400" />
          ) : (
            <span className="text-[10px] font-mono text-neutral-300">{batteryLevel}%</span>
          )}
        </div>
      </div>
    </header>
  );
}
