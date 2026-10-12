"use client";

import React from "react";
import * as LucideIcons from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export function IconRenderer({ name, className = "w-6 h-6", size }: IconRendererProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return <IconComponent className={className} size={size} aria-hidden="true" />;
}
