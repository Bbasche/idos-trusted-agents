"use client";

import { useAppStore } from "@/lib/store";
import type { AppMode, AppScreen } from "@/lib/types";
import LoginOverlay from "@/components/dashboard/LoginOverlay";

function getNavGroups(mode: AppMode) {
  return [
    {
      label: mode === "user" ? "Personal Agent" : "Platform",
      items: [
        { screen: "catalog" as AppScreen, label: mode === "user" ? "Service Catalog" : "API Integrations", icon: "◫" },
        { screen: "activity" as AppScreen, label: "Activity Log", icon: "◷" },
      ],
    },
    {
      label: "Identity",
      items: [
        { screen: "credentials" as AppScreen, label: "My Credentials", icon: "⬡" },
        { screen: "delegation" as AppScreen, label: mode === "user" ? "Agent Delegation" : "Fleet Delegation", icon: "⇌" },
      ],
    },
    {
      label: "Advanced",
      items: [
        { screen: "add-service" as AppScreen, label: "Add Service", icon: "+" },
        { screen: "terminal" as AppScreen, label: mode === "user" ? "Agent Terminal" : "API Test Console", icon: "▸" },
      ],
    },
  ];
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { loggedIn, setLoggedIn, currentScreen, setScreen, hasPoP, hasKYC, walletAddress, mode, setMode } = useAppStore();

  if (!loggedIn) {
    return (
      <LoginOverlay
        onLogin={() => setLoggedIn(true, "0xde4a...beef")}
      />
    );
  }

  const displayAddress = mode === "user"
    ? (walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "0x000...0000")
    : "yourapp.eth";

  const navGroups = getNavGroups(mode);

  return (
    <div className="flex flex-col h-screen bg-bg overflow-hidden">
      {/* ── Top bar ── */}
      <header className="h-12 min-h-12 flex items-center justify-between px-4 border-b border-b1 bg-s1/80 backdrop-blur-sm z-20">
        {/* Left: Logo + Mode toggle */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="font-mono text-sm text-t2 tracking-tight">
              idOS<span className="text-green">·</span>agents
            </span>
          </div>

          {/* Mode toggle */}
          <div className="flex items-center bg-s3 rounded-lg p-0.5 gap-0.5">
            <button
              onClick={() => setMode("user")}
              className={`font-mono text-[9px] px-2.5 py-1 rounded transition-colors cursor-pointer ${
                mode === "user"
                  ? "bg-s1 text-t1 border border-b1"
                  : "bg-transparent text-t3 border border-transparent"
              }`}
            >
              👤 Personal Agent
            </button>
            <button
              onClick={() => setMode("dev")}
              className={`font-mono text-[9px] px-2.5 py-1 rounded transition-colors cursor-pointer ${
                mode === "dev"
                  ? "bg-s1 text-t1 border border-b1"
                  : "bg-transparent text-t3 border border-transparent"
              }`}
            >
              🛠️ Platform Developer
            </button>
          </div>
        </div>

        {/* Right pills */}
        <div className="flex items-center gap-2">
          {/* PoP pill */}
          <span
            className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${
              hasPoP
                ? "border-green/30 bg-green-dim text-green"
                : "border-b1 bg-s2 text-t4"
            }`}
          >
            PoP {hasPoP ? "✓" : "—"}
          </span>

          {/* KYC pill */}
          <span
            className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${
              hasKYC
                ? "border-blue/30 bg-blue-dim text-blue"
                : "border-b1 bg-s2 text-t4"
            }`}
          >
            KYC {hasKYC ? "✓" : "—"}
          </span>

          {/* Divider */}
          <span className="w-px h-4 bg-b1" />

          {/* Address */}
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-b1 bg-s2 text-t3">
            {displayAddress}
          </span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ── */}
        <aside className="w-[220px] min-w-[220px] border-r border-b1 bg-s1/50 flex flex-col py-4 overflow-y-auto">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-5">
              <span className="block px-5 mb-1.5 font-mono text-[10px] uppercase tracking-widest text-t4">
                {group.label}
              </span>
              {group.items.map((item) => {
                const active = currentScreen === item.screen;
                return (
                  <button
                    key={item.screen}
                    onClick={() => setScreen(item.screen)}
                    className={`w-full flex items-center gap-2.5 px-5 py-1.5 text-left text-[13px] transition-colors cursor-pointer ${
                      active
                        ? "text-green bg-green-dim border-r-2 border-green"
                        : "text-t3 hover:text-t1 hover:bg-s2"
                    }`}
                  >
                    <span className="font-mono text-xs w-4 text-center opacity-60">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          ))}

          {/* Bottom spacer */}
          <div className="mt-auto px-5 pt-4 border-t border-b1">
            <span className="font-mono text-[10px] text-t4">
              idOS Trusted Agents v0.1
            </span>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 overflow-y-auto bg-bg">
          {children}
        </main>
      </div>
    </div>
  );
}
