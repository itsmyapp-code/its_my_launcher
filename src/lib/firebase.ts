import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "itsmyapp-co-uk",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (typeof window !== "undefined" && firebaseConfig.apiKey) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    });
  } catch {
    if (app) {
      db = getFirestore(app);
    }
  }
}

export { app, db };

export interface UserPreferences {
  uid: string;
  gridMode: "business" | "directory";
  theme: "dark" | "light" | "system";
  highContrast: boolean;
  wallpaper: string;
  installedAppIds: string[];
  cookieConsent: {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    decidedAt: string;
  } | null;
  lastUpdated: string;
}

const STORAGE_PREFIX = "itsmyapp_firestore_cache:";

export function getAnonymousUid(): string {
  if (typeof window === "undefined") return "anon_guest_server";
  let uid = localStorage.getItem("itsmyapp_session_uid");
  if (!uid) {
    uid = "usr_" + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
    localStorage.setItem("itsmyapp_session_uid", uid);
  }
  return uid;
}

export async function getUserPreferences(uid: string): Promise<UserPreferences> {
  const defaultPrefs: UserPreferences = {
    uid,
    gridMode: "business",
    theme: "dark",
    highContrast: false,
    wallpaper: "gradient-indigo",
    installedAppIds: [
      "packit-trackit",
      "time-track-invoice",
      "bar-gp",
      "its-my-keys",
      "its-my-keybox",
      "its-my-cutlist",
      "its-my-subs",
      "win-hub",
      "its-my-merge",
    ],
    cookieConsent: null,
    lastUpdated: new Date().toISOString(),
  };

  if (typeof window === "undefined") return defaultPrefs;

  const scopedPath = `users/${uid}/preferences`;
  const cached = localStorage.getItem(STORAGE_PREFIX + scopedPath);
  if (cached) {
    try {
      return { ...defaultPrefs, ...JSON.parse(cached) };
    } catch {
      return defaultPrefs;
    }
  }

  return defaultPrefs;
}

export async function saveUserPreferences(
  uid: string,
  updates: Partial<UserPreferences>
): Promise<UserPreferences> {
  const current = await getUserPreferences(uid);
  const updated: UserPreferences = {
    ...current,
    ...updates,
    uid,
    lastUpdated: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    const scopedPath = `users/${uid}/preferences`;
    localStorage.setItem(STORAGE_PREFIX + scopedPath, JSON.stringify(updated));
  }

  return updated;
}
