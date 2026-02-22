"use client";

import { create } from "zustand";
import type { AppMode, AppScreen, Credential, LogEntry, Service } from "./types";
import { USER_SERVICES, DEV_SERVICES } from "./services";

interface AppState {
  // Auth
  loggedIn: boolean;
  walletAddress: string | null;
  setLoggedIn: (loggedIn: boolean, address?: string) => void;

  // Mode
  mode: AppMode;
  setMode: (mode: AppMode) => void;

  // Identity
  hasPoP: boolean;
  hasKYC: boolean;
  userDelegation: boolean;
  devDelegation: boolean;
  setHasPoP: (v: boolean) => void;
  setHasKYC: (v: boolean) => void;
  setUserDelegation: (v: boolean) => void;
  setDevDelegation: (v: boolean) => void;

  // Services
  getServices: () => Service[];
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

export const useAppStore = create<AppState>((set, get) => ({
  // Auth
  loggedIn: false,
  walletAddress: null,
  setLoggedIn: (loggedIn, address) =>
    set({ loggedIn, walletAddress: address ?? null }),

  // Mode
  mode: "user",
  setMode: (mode) => set({ mode, currentScreen: "catalog" }),

  // Identity
  hasPoP: false,
  hasKYC: false,
  userDelegation: false,
  devDelegation: false,
  setHasPoP: (v) => set({ hasPoP: v }),
  setHasKYC: (v) => set({ hasKYC: v }),
  setUserDelegation: (v) => set({ userDelegation: v }),
  setDevDelegation: (v) => set({ devDelegation: v }),

  // Services
  getServices: () => {
    const state = get();
    const base = state.mode === "user" ? USER_SERVICES : DEV_SERVICES;
    const custom = state.customServices.filter((s) => s.mode === state.mode);
    return [...base, ...custom];
  },
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
