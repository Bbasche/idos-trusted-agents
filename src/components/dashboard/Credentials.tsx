"use client";

import { useAppStore } from "@/lib/store";

export default function Credentials() {
  const credentials = useAppStore((s) => s.credentials);

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-sans text-2xl font-semibold text-t1">
          My Credentials
        </h2>
        <p className="mt-1 text-sm text-t3">
          Verifiable credentials stored in the idOS network. These are used to
          satisfy identity gates when accessing gated services.
        </p>
      </div>

      {/* Credential cards */}
      {credentials.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-b1 bg-s1 py-20">
          <span className="text-3xl">&#128274;</span>
          <p className="mt-3 text-sm text-t3">
            No credentials yet. Complete identity verification to receive
            credentials.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((cred, i) => {
            const isPoP = cred.type === "PoP";
            const accent = isPoP ? "green" : "blue";
            const accentBorder = isPoP
              ? "border-green/20"
              : "border-blue/20";
            const accentBg = isPoP ? "bg-green-dim" : "bg-blue-dim";
            const accentText = isPoP ? "text-green" : "text-blue";

            return (
              <div
                key={`${cred.hash}-${i}`}
                className={`rounded-xl border ${accentBorder} ${accentBg} p-5 transition-colors hover:bg-s2`}
              >
                {/* Type badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block rounded-full border ${accentBorder} bg-s1 px-3 py-0.5 font-mono text-xs font-semibold ${accentText}`}
                  >
                    {cred.type}
                  </span>
                  <span className="text-xs text-t4">Credential</span>
                </div>

                {/* Details */}
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-t3">Issuer</span>
                    <span className="font-medium text-t1">{cred.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-t3">Level</span>
                    <span className="font-medium text-t1">{cred.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-t3">Issued</span>
                    <span className="font-mono text-xs text-t2">
                      {cred.issued}
                    </span>
                  </div>
                </div>

                {/* Hash */}
                <div className="mt-4 rounded-lg border border-b1 bg-s1 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wider text-t4">
                    Content Hash
                  </p>
                  <p className="mt-0.5 truncate font-mono text-xs text-t3">
                    {cred.hash}
                  </p>
                </div>

                {/* Storage info */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-t4">
                  <svg
                    className={`h-3 w-3 ${accentText}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                  Encrypted &middot; idOS Network &middot; User-controlled
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
