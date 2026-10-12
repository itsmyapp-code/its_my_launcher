export type RenderMode = "business" | "directory";

export interface ShowcaseApp {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badgeText?: string;
  bgColor: string;
  iconColor?: string;
  destinationUrl: string;
  openInModal: boolean;
  category?: "core" | "solutions" | "client-apps" | "legal";
  description?: string;
}

export interface DockItem {
  id: string;
  title: string;
  icon: string;
  href: string;
  color: string;
  ariaLabel: string;
}

export interface AppLauncherConfig {
  companyName: string;
  domain: string;
  supportEmail: string;
  phoneNumber: string;
  whatsappUrl: string;
  mapsUrl: string;
  defaultRenderMode: RenderMode;
  businessGrid: ShowcaseApp[];
  directoryGrid: ShowcaseApp[];
  dockItems: DockItem[];
}

export const APPS_CONFIG: AppLauncherConfig = {
  companyName: "itsmyapp.co.uk",
  domain: "itsmyapp.co.uk",
  supportEmail: "hello@itsmyapp.co.uk",
  phoneNumber: "+442080000000",
  whatsappUrl: "https://wa.me/447000000000?text=Hello%20itsmyapp.co.uk%20team,%20I%20would%20like%20to%20discuss%20a%20project",
  mapsUrl: "https://maps.google.com/?q=Silicon+Roundabout,+Old+Street,+London,+EC1Y+1BE,+UK",
  defaultRenderMode: "business",

  // Mode 1: Business 9-Grid (3x3 Matrix)
  businessGrid: [
    {
      id: "services",
      title: "Services",
      subtitle: "Bespoke Web & App Engineering",
      icon: "Layers",
      badgeText: "POPULAR",
      bgColor: "from-blue-600 via-indigo-600 to-indigo-800",
      iconColor: "text-white",
      destinationUrl: "/services",
      openInModal: true,
      category: "core",
      description: "Custom web development, mobile applications, cloud architectures, and edge solutions tailored for UK and international enterprises.",
    },
    {
      id: "portfolio",
      title: "Portfolio",
      subtitle: "Shipped Client Case Studies",
      icon: "Briefcase",
      badgeText: "2026",
      bgColor: "from-purple-600 via-violet-600 to-indigo-900",
      iconColor: "text-white",
      destinationUrl: "/portfolio",
      openInModal: true,
      category: "core",
      description: "Explore our latest production software, high-frequency web platforms, and mobile apps built with strict performance standards.",
    },
    {
      id: "pricing",
      title: "Pricing",
      subtitle: "Transparent Anti-Drip Packages",
      icon: "BadgePercent",
      badgeText: "UK GDPR",
      bgColor: "from-emerald-500 via-teal-600 to-emerald-900",
      iconColor: "text-white",
      destinationUrl: "/pricing",
      openInModal: true,
      category: "core",
      description: "All-inclusive, fixed quotes without surprise add-ons. Full 14-day statutory cooling-off guarantee and same-channel exit guarantees.",
    },
    {
      id: "booking",
      title: "Booking",
      subtitle: "Book Discovery Session",
      icon: "CalendarCheck",
      badgeText: "SLOTS OPEN",
      bgColor: "from-amber-500 via-orange-600 to-amber-900",
      iconColor: "text-white",
      destinationUrl: "/booking",
      openInModal: true,
      category: "core",
      description: "Schedule a high-impact 30-minute scoping workshop with our lead software architects. No sales pressure, pure technical insight.",
    },
    {
      id: "reviews",
      title: "Reviews",
      subtitle: "Verified Client Feedback",
      icon: "Star",
      badgeText: "4.9/5",
      bgColor: "from-yellow-500 via-amber-600 to-amber-800",
      iconColor: "text-white",
      destinationUrl: "/reviews",
      openInModal: true,
      category: "core",
      description: "Read transparent testimonials and audit reports from UK founders and IT directors who deployed mission-critical software with us.",
    },
    {
      id: "about",
      title: "About Us",
      subtitle: "Team, Mission & Principles",
      icon: "Compass",
      bgColor: "from-cyan-500 via-blue-600 to-slate-900",
      iconColor: "text-white",
      destinationUrl: "/about",
      openInModal: true,
      category: "core",
      description: "Founded on zero-surveillance, ultra-fast client-side execution, and certified UK GDPR compliance under the DUAA and DMCCA frameworks.",
    },
    {
      id: "gallery",
      title: "Gallery",
      subtitle: "UI/UX & Mobile Mockups",
      icon: "Sparkles",
      bgColor: "from-fuchsia-500 via-pink-600 to-rose-900",
      iconColor: "text-white",
      destinationUrl: "/gallery",
      openInModal: true,
      category: "core",
      description: "High-resolution screenshots, component libraries, and interactive design tokens showing our craftsmanship.",
    },
    {
      id: "faq",
      title: "FAQ",
      subtitle: "Tech, Timelines & Guarantees",
      icon: "HelpCircle",
      bgColor: "from-slate-600 via-slate-700 to-slate-900",
      iconColor: "text-white",
      destinationUrl: "/faq",
      openInModal: true,
      category: "core",
      description: "Direct answers regarding our IP assignment, timeline estimates, security practices, and post-launch maintenance terms.",
    },
    {
      id: "contact",
      title: "Contact",
      subtitle: "Direct Channel to Tech Lead",
      icon: "MessageSquare",
      badgeText: "FAST RESP.",
      bgColor: "from-rose-500 via-red-600 to-rose-900",
      iconColor: "text-white",
      destinationUrl: "/contact",
      openInModal: true,
      category: "core",
      description: "Reach our engineers instantly. All compliance queries and project tenders receive formal response within 24-48 business hours.",
    },
  ],

  // Mode 2: Software Directory (4xN Matrix)
  directoryGrid: [
    {
      id: "crm-engine",
      title: "CRM Studio",
      subtitle: "Client Relations Hub",
      icon: "Users2",
      badgeText: "v3.2",
      bgColor: "from-blue-500 to-cyan-500",
      destinationUrl: "https://crm.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Pipeline management, contact sync, and deal flow metrics built with client-side zero-knowledge encryption.",
    },
    {
      id: "pay-nexus",
      title: "PayNexus",
      subtitle: "Stripe & Direct Debit",
      icon: "CreditCard",
      bgColor: "from-emerald-500 to-teal-600",
      destinationUrl: "https://pay.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "FCA-aligned billing portal with anti-drip pricing logic and automated statutory cooling-off triggers.",
    },
    {
      id: "cloud-drive",
      title: "VaultDrive",
      subtitle: "Encrypted Storage",
      icon: "HardDrive",
      badgeText: "AES-256",
      bgColor: "from-indigo-500 to-blue-700",
      destinationUrl: "https://vault.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Zero-telemetry asset storage hosted exclusively within UK data centers adhering to UK GDPR standards.",
    },
    {
      id: "pulse-metrics",
      title: "PulseAnalytics",
      subtitle: "DUAA-Compliant Stats",
      icon: "Activity",
      bgColor: "from-amber-500 to-orange-600",
      destinationUrl: "https://pulse.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Privacy-first performance tracking without cross-site third-party cookies or intrusive canvas fingerprinting.",
    },
    {
      id: "booking-engine",
      title: "CalFlow",
      subtitle: "Automated Calendar",
      icon: "CalendarCheck",
      bgColor: "from-violet-500 to-purple-700",
      destinationUrl: "https://cal.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Real-time timezone synchronization, instant Google/Outlook calendar binding, and client SMS alerts.",
    },
    {
      id: "chat-matrix",
      title: "TeamSync",
      subtitle: "Internal Messaging",
      icon: "MessageCircle",
      badgeText: "E2EE",
      bgColor: "from-teal-500 to-emerald-700",
      destinationUrl: "https://chat.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Peer-to-peer encrypted communications, channels, and instant file dispatching with zero centralized log storage.",
    },
    {
      id: "inventory-pro",
      title: "StockFlow",
      subtitle: "Real-Time Inventory",
      icon: "Package",
      bgColor: "from-rose-500 to-pink-700",
      destinationUrl: "https://stock.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Barcode scanning, automated re-order thresholds, and warehouse dispatch logging.",
    },
    {
      id: "compliance-shield",
      title: "GDPR Guard",
      subtitle: "Automated Governance",
      icon: "ShieldCheck",
      badgeText: "CERTIFIED",
      bgColor: "from-sky-500 to-blue-800",
      destinationUrl: "/cookies",
      openInModal: true,
      category: "legal",
      description: "DUAA 2025 consent auditor, SAR request dispatcher, and cookie policy tracker.",
    },
    {
      id: "ai-copilot",
      title: "AppPilot",
      subtitle: "Local LLM Assistant",
      icon: "Bot",
      badgeText: "LOCAL",
      bgColor: "from-purple-600 to-indigo-900",
      destinationUrl: "https://ai.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "In-browser edge AI assistant running client-side with zero user prompt retention or model training.",
    },
    {
      id: "docs-wiki",
      title: "DocuHub",
      subtitle: "Knowledge Base",
      icon: "BookOpen",
      bgColor: "from-amber-600 to-yellow-700",
      destinationUrl: "https://docs.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Instant markdown search, technical specifications, and interactive developer API references.",
    },
    {
      id: "status-page",
      title: "StatusHub",
      subtitle: "99.99% Uptime Monitor",
      icon: "Radio",
      badgeText: "OPERATIONAL",
      bgColor: "from-emerald-600 to-green-700",
      destinationUrl: "https://status.itsmyapp.co.uk",
      openInModal: true,
      category: "client-apps",
      description: "Live multi-region health checks, latency charts, and automated incident status bulletins.",
    },
    {
      id: "terms-policy",
      title: "Legal & Terms",
      subtitle: "Statutory Agreements",
      icon: "FileText",
      bgColor: "from-slate-600 to-gray-800",
      destinationUrl: "/terms",
      openInModal: true,
      category: "legal",
      description: "Complete Terms of Service, Privacy Policy, Cookies and Accessibility disclosures.",
    },
  ],

  // Fixed Bottom Dock (4 Core Utilities)
  dockItems: [
    {
      id: "dock-phone",
      title: "Phone",
      icon: "PhoneCall",
      href: "tel:+442080000000",
      color: "bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-emerald-500/30",
      ariaLabel: "Call itsmyapp office at +44 20 8000 0000",
    },
    {
      id: "dock-email",
      title: "Email",
      icon: "Mail",
      href: "mailto:hello@itsmyapp.co.uk?subject=Project%20Enquiry%20from%20Showcase%20Hub",
      color: "bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-blue-500/30",
      ariaLabel: "Send email to hello@itsmyapp.co.uk",
    },
    {
      id: "dock-maps",
      title: "Location",
      icon: "MapPin",
      href: "https://maps.google.com/?q=Silicon+Roundabout,+Old+Street,+London,+EC1Y+1BE,+UK",
      color: "bg-gradient-to-tr from-red-500 to-rose-400 text-white shadow-rose-500/30",
      ariaLabel: "Open Google Maps location for itsmyapp London office",
    },
    {
      id: "dock-chat",
      title: "WhatsApp",
      icon: "MessageCircle",
      href: "https://wa.me/447000000000?text=Hello%20itsmyapp.co.uk%20team,%20I%20would%20like%20to%20discuss%20a%20project",
      color: "bg-gradient-to-tr from-teal-500 to-emerald-500 text-white shadow-teal-500/30",
      ariaLabel: "Direct WhatsApp chat with itsmyapp tech lead",
    },
  ],
};
