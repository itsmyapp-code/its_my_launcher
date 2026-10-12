export type RenderMode = "business" | "directory";

export interface ShowcaseApp {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  image?: string;
  badgeText?: string;
  bgColor: string;
  iconColor?: string;
  destinationUrl: string;
  openInModal: boolean;
  category?: "core" | "zero-server" | "full-stack" | "websites" | "legal";
  description?: string;
  features?: { title: string; description: string }[];
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
  companyName: "ItsMyApp",
  domain: "itsmyapp.co.uk",
  supportEmail: "hello@itsmyapp.co.uk",
  phoneNumber: "+442080000000",
  whatsappUrl: "https://wa.me/447000000000?text=Hello%20ItsMyApp%20team,%20I%20would%20like%20to%20discuss%20an%20app",
  mapsUrl: "https://maps.google.com/?q=Dartmouth,+Devon,+UK",
  defaultRenderMode: "business",

  // Mode 1: Core Showcase 9-Grid (3x3 Matrix) - Flagship Apps & Services
  businessGrid: [
    {
      id: "packit-trackit",
      title: "Packit Trackit",
      subtitle: "AI Visual Box Inventory",
      image: "/Packit_Trackit.png",
      badgeText: "AI",
      bgColor: "from-blue-600 via-indigo-600 to-indigo-950",
      destinationUrl: "https://packittrackit.co.uk/",
      openInModal: true,
      category: "full-stack",
      description: "Digital X-Ray Vision for your boxes. Snap a photo, let AI catalog the contents, and instantly search your entire physical inventory.",
      features: [
        { title: "🤖 AI Auto-Manifest", description: "Powered by Gemini Flash. Itemize box contents from a single photo." },
        { title: "📷 Visual Inventory", description: "Scan QR codes to see high-res photo gallery of contents." },
        { title: "🔍 Global Search", description: "Find exactly which box and room items are stored in." },
      ],
    },
    {
      id: "time-track-invoice",
      title: "Time Track",
      subtitle: "Invoicing for Freelancers",
      image: "/timetrackinvoice.png",
      badgeText: "POPULAR",
      bgColor: "from-emerald-600 via-teal-600 to-slate-900",
      destinationUrl: "https://timetrackinvoice.co.uk/",
      openInModal: true,
      category: "full-stack",
      description: "Effortless Time Tracking, Professional Invoicing. Move beyond messy spreadsheets with an intuitive dashboard.",
      features: [
        { title: "⏱️ Simple Time Tracking", description: "Track every billable minute with a single tap." },
        { title: "📄 PDF Invoices", description: "Generate professional client invoices in seconds." },
        { title: "📈 Reporting", description: "Real-time visibility into project profitability." },
      ],
    },
    {
      id: "bar-gp",
      title: "Bar GP",
      subtitle: "Gross Profit Calculator",
      image: "/Data_BarGP_Logo.png",
      badgeText: "HOSPITALITY",
      bgColor: "from-amber-500 via-orange-600 to-neutral-900",
      destinationUrl: "https://BarGP.co.uk",
      openInModal: true,
      category: "full-stack",
      description: "The definitive tool for calculating Gross Profit percentages and optimizing bar margins and beverage costs.",
      features: [
        { title: "💰 Margin Tracking", description: "Accurately compute pricing to meet target gross profit." },
        { title: "📊 Beverage Costing", description: "Organize keg, spirit, wine, and cocktail costs." },
      ],
    },
    {
      id: "its-my-keys",
      title: "Its My Keys",
      subtitle: "Digital Key & Asset Log",
      image: "/its-my-keys-logo.png",
      badgeText: "QR SCAN",
      bgColor: "from-cyan-600 via-blue-700 to-indigo-950",
      destinationUrl: "https://www.itsmykeys.co.uk/",
      openInModal: true,
      category: "full-stack",
      description: "The digital replacement for physical key logs. Track keys, vehicles, and assets in real-time with QR scanning.",
      features: [
        { title: "🔑 Real-Time Tracking", description: "Know who has what key and when it is due back." },
        { title: "🔔 Overdue Alerts", description: "Automatic notifications for overdue loans." },
      ],
    },
    {
      id: "its-my-keybox",
      title: "Its My Keybox",
      subtitle: "Property Code Vault",
      image: "/Its-My-Keybox.png",
      bgColor: "from-indigo-600 via-purple-700 to-slate-900",
      destinationUrl: "https://its-my-keybox.web.app/",
      openInModal: true,
      category: "full-stack",
      description: "The secure solution for holiday let hosts and property managers to store and dispatch lockbox access codes.",
      features: [
        { title: "🔐 Central Management", description: "Securely store codes for all properties." },
        { title: "✉️ Guest Mail Sharing", description: "Email codes directly with welcome templates." },
      ],
    },
    {
      id: "its-my-cutlist",
      title: "It's My Cutlist",
      subtitle: "2D Cabinetry Optimizer",
      image: "/cutlist-logo.png",
      badgeText: "PRO",
      bgColor: "from-blue-700 via-slate-800 to-neutral-950",
      destinationUrl: "https://its-my-cutlist.vercel.app/",
      openInModal: true,
      category: "full-stack",
      description: "Parametric 2D sheet material optimizer for cabinetry workshops. Minimize waste and export workshop PDF manifests.",
      features: [
        { title: "📊 2D Optimization", description: "Arrange parts onto 2440x1220mm sheets with kerf calculation." },
        { title: "🔄 Shared Inventory", description: "Track offcuts across your workshop team." },
      ],
    },
    {
      id: "its-my-subs",
      title: "Its My Subs",
      subtitle: "Subscription Tracker",
      image: "/its-my-subs-logo.png",
      bgColor: "from-rose-600 via-pink-700 to-neutral-900",
      destinationUrl: "https://its-my-subs.web.app/",
      openInModal: true,
      category: "zero-server",
      description: "Stop subscription creep. Log recurring payments from Netflix to council tax and take control of your cash flow.",
      features: [
        { title: "💳 Expense Logging", description: "Spot forgotten subscriptions draining your accounts." },
        { title: "⏰ Renewal Alerts", description: "Get alerted before trials automatically renew." },
      ],
    },
    {
      id: "win-hub",
      title: "Win Hub",
      subtitle: "Retail Spin & Voucher Hub",
      image: "/win-hub.png",
      badgeText: "ENGAGE",
      bgColor: "from-purple-600 via-fuchsia-700 to-indigo-950",
      destinationUrl: "https://spin.itsmyapp.co.uk/",
      openInModal: true,
      category: "full-stack",
      description: "Turn footfall into repeat revenue with branded spin, scratch, and voucher gamification campaigns.",
      features: [
        { title: "🎁 Digital Vouchers", description: "Zero paper, instant mobile voucher delivery." },
        { title: "🛡️ One-Time Burn", description: "Staff-side burn controls to prevent duplicate claims." },
      ],
    },
    {
      id: "its-my-merge",
      title: "Its My Merge",
      subtitle: "Private In-Browser PDF Tool",
      image: "/its_my_merge.png",
      badgeText: "PRIVATE",
      bgColor: "from-amber-600 via-red-700 to-slate-900",
      destinationUrl: "https://its-my-merge.web.app/",
      openInModal: true,
      category: "zero-server",
      description: "Zero-server PDF merger. Reorder pages, insert headers, footers, and page numbers with 100% client-side privacy.",
      features: [
        { title: "📄 Zero-Server", description: "Files never leave your browser or touch a cloud server." },
        { title: "📑 Numbering", description: "Add professional headers, footers, and stamps." },
      ],
    },
  ],

  // Mode 2: Complete Software & Client Directory (4xN Matrix)
  directoryGrid: [
    {
      id: "packit-trackit-dir",
      title: "Packit Trackit",
      subtitle: "AI Box Cataloging",
      image: "/Packit_Trackit.png",
      badgeText: "AI",
      bgColor: "from-blue-600 to-indigo-700",
      destinationUrl: "https://packittrackit.co.uk/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "timetrack-dir",
      title: "Time Track",
      subtitle: "Invoicing Tool",
      image: "/timetrackinvoice.png",
      bgColor: "from-emerald-600 to-teal-700",
      destinationUrl: "https://timetrackinvoice.co.uk/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "bargp-dir",
      title: "Bar GP",
      subtitle: "Gross Profit Tool",
      image: "/Data_BarGP_Logo.png",
      bgColor: "from-amber-500 to-orange-700",
      destinationUrl: "https://BarGP.co.uk",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "itsmykeys-dir",
      title: "Its My Keys",
      subtitle: "Asset & Key Log",
      image: "/its-my-keys-logo.png",
      bgColor: "from-cyan-600 to-blue-800",
      destinationUrl: "https://www.itsmykeys.co.uk/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "itsmykeybox-dir",
      title: "Keybox",
      subtitle: "Code Vault",
      image: "/Its-My-Keybox.png",
      bgColor: "from-indigo-600 to-purple-800",
      destinationUrl: "https://its-my-keybox.web.app/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "itsmysubs-dir",
      title: "Its My Subs",
      subtitle: "Payment Tracker",
      image: "/its-my-subs-logo.png",
      bgColor: "from-rose-600 to-pink-800",
      destinationUrl: "https://its-my-subs.web.app/",
      openInModal: true,
      category: "zero-server",
    },
    {
      id: "itsmymerge-dir",
      title: "Its My Merge",
      subtitle: "PDF Merger",
      image: "/its_my_merge.png",
      badgeText: "LOCAL",
      bgColor: "from-orange-600 to-red-800",
      destinationUrl: "https://its-my-merge.web.app/",
      openInModal: true,
      category: "zero-server",
    },
    {
      id: "itsmyidea-dir",
      title: "Its My Idea",
      subtitle: "PIN Note Vault",
      image: "/its_my_idea_logo.png",
      bgColor: "from-yellow-600 to-amber-800",
      destinationUrl: "https://its-my-idea-1950e.web.app/",
      openInModal: true,
      category: "zero-server",
    },
    {
      id: "itsmybanking-dir",
      title: "Its My Banking",
      subtitle: "Account Dashboard",
      image: "/its-my-banking-logo.png",
      bgColor: "from-blue-700 to-indigo-900",
      destinationUrl: "https://its-my-banking.web.app/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "itsmypaint-dir",
      title: "Its My Paint",
      subtitle: "Decorators Logger",
      image: "/its-my-paint.png",
      bgColor: "from-teal-600 to-emerald-800",
      destinationUrl: "https://its-my-paint.vercel.app/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "cutlist-dir",
      title: "Its My Cutlist",
      subtitle: "Cabinetry Optimizer",
      image: "/cutlist-logo.png",
      badgeText: "2D",
      bgColor: "from-slate-700 to-neutral-900",
      destinationUrl: "https://its-my-cutlist.vercel.app/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "modeler-dir",
      title: "3D Modeler",
      subtitle: "Furniture Design",
      image: "/modeler-logo.png",
      badgeText: "3D",
      bgColor: "from-purple-700 to-indigo-900",
      destinationUrl: "https://its-my-cutlist.vercel.app/furniture",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "room-inventory-dir",
      title: "Room Inventory",
      subtitle: "HMO & Property Pro",
      image: "/room-inventory-pro-logo.png",
      bgColor: "from-emerald-700 to-teal-900",
      destinationUrl: "/room-inventory-pro",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "win-hub-dir",
      title: "Win Hub",
      subtitle: "Gamified Vouchers",
      image: "/win-hub.png",
      bgColor: "from-fuchsia-600 to-purple-800",
      destinationUrl: "https://spin.itsmyapp.co.uk/",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "pool-mate-dir",
      title: "Pool Mate",
      subtitle: "Pocket Referee",
      image: "/Pool_Mate.webp",
      bgColor: "from-blue-600 to-slate-800",
      destinationUrl: "/pool-mate",
      openInModal: true,
      category: "zero-server",
    },
    {
      id: "killer-pool-dir",
      title: "Killer Pool",
      subtitle: "Eliminator Deck",
      image: "/Killer_Pool.webp",
      bgColor: "from-red-600 to-rose-900",
      destinationUrl: "/killer-pool",
      openInModal: true,
      category: "zero-server",
    },
    {
      id: "voice-ai-dir",
      title: "Voice AI",
      subtitle: "AI Receptionist",
      image: "/its-myapp-voice-logo.webp",
      badgeText: "VOICE",
      bgColor: "from-cyan-600 to-blue-900",
      destinationUrl: "/voice-ai",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "support-bot-dir",
      title: "AI Support",
      subtitle: "Flash Assistant",
      image: "/support-chatbot-logo.png",
      bgColor: "from-violet-600 to-purple-900",
      destinationUrl: "/support-chatbot",
      openInModal: true,
      category: "full-stack",
    },
    {
      id: "residence-dir",
      title: "The Residence",
      subtitle: "Dartmouth Co-Living",
      image: "/the_residence_small.png",
      bgColor: "from-amber-700 to-slate-900",
      destinationUrl: "https://theresidencedartmouth.co.uk/",
      openInModal: true,
      category: "websites",
    },
    {
      id: "whole-hosp-dir",
      title: "Whole Hosp.",
      subtitle: "GP & Audit Platform",
      image: "/whole_hospitality_logo.png",
      bgColor: "from-emerald-800 to-neutral-900",
      destinationUrl: "https://wholehospitality.co.uk/",
      openInModal: true,
      category: "websites",
    },
    {
      id: "sistine-dir",
      title: "Sistine",
      subtitle: "Decorators Dartmouth",
      image: "/sistine_logo.jpg",
      bgColor: "from-slate-700 to-neutral-900",
      destinationUrl: "https://sistine.uk/",
      openInModal: true,
      category: "websites",
    },
    {
      id: "ship-inn-dir",
      title: "The Ship Inn",
      subtitle: "Porlock Weir Hotel",
      image: "/the_ship_inn_logo.jpg",
      bgColor: "from-blue-900 to-slate-950",
      destinationUrl: "https://www.theshipinnporlockweir.co.uk/",
      openInModal: true,
      category: "websites",
    },
    {
      id: "arcade-dir",
      title: "Its My Arcade",
      subtitle: "80s Retro Pac Maze",
      image: "/its-my-arcade-logo.png",
      bgColor: "from-yellow-500 to-orange-700",
      destinationUrl: "/retro-arcade",
      openInModal: true,
      category: "zero-server",
    },
    {
      id: "work-pics-dir",
      title: "Work Pics",
      subtitle: "Private Photo Folder",
      image: "/WorkPhotoApp.png",
      badgeText: "APK",
      bgColor: "from-green-600 to-emerald-800",
      destinationUrl: "https://firebasestorage.googleapis.com/v0/b/its-my-app-platform.firebasestorage.app/o/downloads%2FWork_Photo.apk?alt=media",
      openInModal: true,
      category: "zero-server",
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
      ariaLabel: "Call ItsMyApp office at +44 20 8000 0000",
    },
    {
      id: "dock-email",
      title: "Email",
      icon: "Mail",
      href: "mailto:hello@itsmyapp.co.uk?subject=ItsMyApp%20Enquiry",
      color: "bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-blue-500/30",
      ariaLabel: "Send email to hello@itsmyapp.co.uk",
    },
    {
      id: "dock-maps",
      title: "Dartmouth",
      icon: "MapPin",
      href: "https://maps.google.com/?q=Dartmouth,+Devon,+UK",
      color: "bg-gradient-to-tr from-red-500 to-rose-400 text-white shadow-rose-500/30",
      ariaLabel: "Open Google Maps location for ItsMyApp Dartmouth HQ",
    },
    {
      id: "dock-chat",
      title: "WhatsApp",
      icon: "MessageCircle",
      href: "https://wa.me/447000000000?text=Hello%20ItsMyApp%20team,%20I%20would%20like%20to%20discuss%20a%20project",
      color: "bg-gradient-to-tr from-teal-500 to-emerald-500 text-white shadow-teal-500/30",
      ariaLabel: "Direct WhatsApp chat with ItsMyApp lead developer",
    },
  ],
};
