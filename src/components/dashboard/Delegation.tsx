"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";

const DELEGATION_CONFIG = {
  sessionKey: "0x7a3b...f9e2",
  smartAccount: "0x4337...aa01",
  permissions: [
    "idOS.readCredentials",
    "idOS.createDelegatedAG",
    "x402.signPayment",
  ],
  expiry: "2026-03-22T00:00:00Z",
  maxSpendPerTx: "5.00 USDC",
  allowedGates: ["pop", "kyc", "kyc-ag", "uniq"],
};

const steps = [
  {
    num: "1",
    title: "Session Key Generation",
    desc: "A temporary key pair is generated in-browser. The private key never leaves your device.",
  },
  {
    num: "2",
    title: "Smart Account Binding",
    desc: "Your ERC-4337 smart account is configured to accept the session key as an authorized signer.",
  },
  {
    num: "3",
    title: "idOS Credential Access",
    desc: "The agent receives scoped read access to your idOS credentials for identity gate verification.",
  },
  {
    num: "4",
    title: "Payment Authorization",
    desc: "The session key can sign x402 micropayments up to a configurable per-transaction limit.",
  },
  {
    num: "5",
    title: "Autonomous Operation",
    desc: "The agent can now independently verify identity and pay for gated services on your behalf.",
  },
];

export default function Delegation() {
  const hasDelegation = useAppStore((s) => s.hasDelegation);
  const setHasDelegation = useAppStore((s) => s.setHasDelegation);
  const [enabling, setEnabling] = useState(false);

  function handleEnable() {
    setEnabling(true);
    setTimeout(() => {
      setHasDelegation(true);
      setEnabling(false);
    }, 1200);
  }

  function handleRevoke() {
    setHasDelegation(false);
  }

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-sans text-2xl font-semibold text-t1">
          Agent Delegation
        </h2>
        <p className="mt-1 text-sm text-t3">
          Delegate signing authority to the agent so it can autonomously verify
          identity and pay for services using your smart account.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Card 1 — Delegation explanation */}
        <div className="rounded-xl border border-b1 bg-s1 p-6">
          <h3 className="text-lg font-semibold text-t1">
            Smart Account Signer Delegation
          </h3>
          <p className="mt-1 text-sm text-t3">
            Uses ERC-4337 account abstraction to grant a scoped session key to
            the agent. No private keys are shared — the smart account validates
            each UserOperation against your configured permissions.
          </p>

          {/* Steps */}
          <ol className="mt-5 space-y-4">
            {steps.map((step) => (
              <li key={step.num} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-green/20 bg-green-dim font-mono text-xs font-bold text-green">
                  {step.num}
                </span>
                <div>
                  <p className="text-sm font-medium text-t1">{step.title}</p>
                  <p className="text-xs text-t3">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={handleEnable}
              disabled={hasDelegation || enabling}
              className={`rounded-lg px-5 py-2 font-mono text-sm font-semibold transition-all ${
                hasDelegation
                  ? "cursor-not-allowed bg-s3 text-t4"
                  : enabling
                    ? "animate-pulse bg-green/20 text-green"
                    : "bg-green text-bg hover:brightness-110"
              }`}
            >
              {enabling
                ? "Enabling..."
                : hasDelegation
                  ? "Delegation Active"
                  : "Enable Delegation"}
            </button>

            <button
              onClick={handleRevoke}
              disabled={!hasDelegation}
              className={`rounded-lg border px-5 py-2 font-mono text-sm font-semibold transition-all ${
                hasDelegation
                  ? "border-red/30 bg-red-dim text-red hover:bg-red/20"
                  : "cursor-not-allowed border-b1 bg-s2 text-t4"
              }`}
            >
              Revoke
            </button>
          </div>
        </div>

        {/* Card 2 — Delegation scope */}
        <div className="rounded-xl border border-b1 bg-s1 p-6">
          <h3 className="text-lg font-semibold text-t1">Delegation Scope</h3>
          <p className="mt-1 text-sm text-t3">
            The active session configuration defining what the agent is
            permitted to do.
          </p>

          {hasDelegation ? (
            <div className="mt-4 overflow-hidden rounded-lg border border-b1 bg-bg">
              <div className="flex items-center gap-2 border-b border-b1 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green/60" />
                <span className="ml-2 font-mono text-[10px] text-t4">
                  delegation.json
                </span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-t2">
                <code>{JSON.stringify(DELEGATION_CONFIG, null, 2)}</code>
              </pre>
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-center justify-center rounded-lg border border-dashed border-b2 bg-s2/50 py-14">
              <span className="text-2xl">&#128274;</span>
              <p className="mt-2 text-sm text-t4">
                Enable delegation to view the active scope configuration.
              </p>
            </div>
          )}

          {/* Status indicator */}
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                hasDelegation ? "bg-green animate-glow" : "bg-t4"
              }`}
            />
            <span className={hasDelegation ? "text-green" : "text-t4"}>
              {hasDelegation ? "Delegation active" : "Delegation inactive"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
