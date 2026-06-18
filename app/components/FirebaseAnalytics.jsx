"use client";

import { useEffect } from "react";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBJ6qNi-y67-xWDzCDUTqs0gumKROH9wj0",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "webgen-4f6c8.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "webgen-4f6c8",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "webgen-4f6c8.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "192793233248",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:192793233248:web:35f620646e67d999bf8005",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-9H2GT0DF29"
};

function getFirebaseApp() {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export default function FirebaseAnalytics() {
  useEffect(() => {
    let active = true;

    isSupported()
      .then((supported) => {
        if (!active || !supported) return;
        getAnalytics(getFirebaseApp());
      })
      .catch(() => {
        // Analytics is best-effort and should never break preview rendering.
      });

    return () => {
      active = false;
    };
  }, []);

  return null;
}
