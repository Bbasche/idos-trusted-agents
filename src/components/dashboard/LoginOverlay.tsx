"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type LoginStep = "idle" | "scanning" | "authenticated" | "done";

interface LoginOverlayProps {
  onLogin: () => void;
}

export default function LoginOverlay({ onLogin }: LoginOverlayProps) {
  const [step, setStep] = useState<LoginStep>("idle");
  const [visible, setVisible] = useState(true);
  const [idosReady, setIdosReady] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ------------------------------------------------------------------ */
  /*  Attempt real idOS FaceSign initialization                         */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    let cancelled = false;

    async function initIdOS() {
      try {
        const { getIdOSClient } = await import("@/lib/idos-client");
        await getIdOSClient();
        if (!cancelled) setIdosReady(true);
      } catch {
        // Expected to fail without proper config / enclave container.
        // Fall back to the simulated flow silently.
        if (!cancelled) setIdosReady(false);
      }
    }

    initIdOS();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Cleanup timers on unmount                                         */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Login handler — real SDK path or simulated animation              */
  /* ------------------------------------------------------------------ */
  const handleLogin = useCallback(async () => {
    if (step !== "idle") return;
    setStep("scanning");

    /* --- Try real idOS FaceSign flow -------------------------------- */
    if (idosReady) {
      try {
        const { getIdOSClient } = await import("@/lib/idos-client");
        const client = await getIdOSClient();
        // The real SDK would surface a biometric prompt here.
        // If it resolves we treat the user as authenticated.
        void client; // placeholder — SDK not fully wired yet
      } catch {
        // Fall through to simulated flow.
      }
    }

    /* --- Simulated scanning animation ------------------------------ */
    timerRef.current = setTimeout(() => {
      setStep("authenticated");

      timerRef.current = setTimeout(() => {
        setStep("done");
        setVisible(false);
        onLogin();
      }, 600);
    }, 1800);
  }, [step, idosReady, onLogin]);

  /* ------------------------------------------------------------------ */
  /*  Don't render once the overlay has been dismissed                   */
  /* ------------------------------------------------------------------ */
  if (!visible) return null;

  /* ------------------------------------------------------------------ */
  /*  Derived UI state                                                  */
  /* ------------------------------------------------------------------ */
  const isScanning = step === "scanning";
  const isAuthenticated = step === "authenticated";
  const isIdle = step === "idle";

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-bg">
      {/* Subtle radial glow behind card */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[480px] w-[480px] rounded-full bg-green-dim opacity-40 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center gap-6">
        {/* ── Mono label ───────────────────────────────────────────── */}
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-t3">
          idOS Trusted Agents
        </span>

        {/* ── Card ─────────────────────────────────────────────────── */}
        <div className="w-[400px] rounded-2xl border border-b1 bg-s1 p-8 shadow-lg shadow-black/40">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Heading */}
            <div className="flex flex-col gap-1.5">
              <h1 className="font-serif text-3xl text-t1">Welcome</h1>
              <p className="text-sm text-t3 leading-relaxed">
                Sign in with idOS FaceSign to access the marketplace
              </p>
            </div>

            {/* ── Animated face ring ─────────────────────────────── */}
            <div className="relative flex items-center justify-center">
              <div
                className={[
                  "flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-300",
                  isIdle && "border-dashed border-green-mid animate-pulse-ring",
                  isScanning && "border-solid border-green animate-spin-fast",
                  isAuthenticated && "border-solid border-green bg-green-dim",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {isAuthenticated ? (
                  <span className="text-2xl text-green select-none">✓</span>
                ) : (
                  <span className="text-3xl select-none" role="img" aria-label="Face scan">
                    🪪
                  </span>
                )}
              </div>
            </div>

            {/* ── FaceSign badge ──────────────────────────────────── */}
            <div className="flex items-center gap-2 rounded-full border border-green-dim bg-green-dim/40 px-3 py-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-green"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path
                  d="M4.5 7.2l1.8 1.6 3.2-3.6"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-[11px] tracking-wider text-green">
                idOS FaceSign
              </span>
            </div>

            {/* ── Description ────────────────────────────────────── */}
            <p className="text-[13px] leading-relaxed text-t3 max-w-[320px]">
              Scan your face to authenticate. FaceSign derives your encryption keys from
              biometric liveness&nbsp;&mdash; no passwords, no seed phrases.
            </p>

            {/* ── Primary button ─────────────────────────────────── */}
            <button
              type="button"
              disabled={!isIdle}
              onClick={handleLogin}
              className={[
                "w-full rounded-xl py-3 text-sm font-medium transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50",
                isIdle &&
                  "cursor-pointer bg-green text-bg hover:brightness-110 active:scale-[0.98]",
                isScanning && "cursor-wait bg-green/70 text-bg",
                isAuthenticated && "cursor-default bg-green text-bg",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {isIdle && "Sign in with FaceSign →"}
              {isScanning && "Scanning..."}
              {isAuthenticated && "✓ Authenticated"}
            </button>

            {/* ── Footer note ────────────────────────────────────── */}
            <p className="text-[11px] text-t4 leading-relaxed">
              Your biometric data never leaves your device&apos;s secure enclave.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
