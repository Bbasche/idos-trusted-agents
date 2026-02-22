"use client";

import { create } from "zustand";
import type { AppScreen, Credential, LogEntry, Service } from "./types";
import { DEFAULT_SERVICES } from "./services";

interface AppState {
  // Auth
  loggedIn: boolean;
  walletAddress: string | null;
  setLoggedIn: (loggedIn: boolean, address?: string) => void;

  // Identity
  hasPoP: boolean;
  hasKYC: boolean;
  hasDelegation: boolean;
  setHasPoP: (v: boolean) => void;
  setHasKYC: (v: boolean) => void;
  setHasDelegation: (v: boolean) => void;

  // Services
  services: Service[];
  customServices: Service[];
  usedServices: Set<string>;
  addCustomService: (svc: Service) => void;
  markServiceUsed: (id: string) => void;

  // Credentials
  credentials: Credential[];
  addCredential: (cred: Credential) => void;

  // Activity
  logs: LogEntry[];
  addLog: (log: LogEntry) => void;

  // Navigation
  currentScreen: AppScreen;
  setScreen: (screen: AppScreen) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Auth
  loggedIn: false,
  walletAddress: null,
  setLoggedIn: (loggedIn, address) =>
    set({ loggedIn, walletAddress: address ?? null }),

  // Identity
  hasPoP: false,
  hasKYC: false,
  hasDelegation: false,
  setHasPoP: (v) => set({ hasPoP: v }),
  setHasKYC: (v) => set({ hasKYC: v }),
  setHasDelegation: (v) => set({ hasDelegation: v }),

  // Services
  services: DEFAULT_SERVICES,
  customServices: [],
  usedServices: new Set(),
  addCustomService: (svc) =>
    set((s) => ({ customServices: [...s.customServices, svc] })),
  markServiceUsed: (id) =>
    set((s) => {
      const next = new Set(s.usedServices);
      next.add(id);
      return { usedServices: next };
    }),

  // Credentials
  credentials: [],
  addCredential: (cred) =>
    set((s) => ({ credentials: [...s.credentials, cred] })),

  // Activity
  logs: [],
  addLog: (log) => set((s) => ({ logs: [log, ...s.logs] })),

  // Navigation
  currentScreen: "catalog",
  setScreen: (screen) => set({ currentScreen: screen }),
}));
