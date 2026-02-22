"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";
import type { AppMode } from "@/lib/types";

const USER_DELEGATION_CONFIG = {
  sessionKey: "0x7a3b...f9e2",
  smartAccount: "0x4337...aa01",
  principal: "0xdead...beef",
  permissions: {
    createDAG: true,
    scopedCredentials: true,
    maxDAG_TTL: "30s",
    decryptData: false,
    transferFunds: false,
    revokeCredentials: false,
  },
  expires: "2026-03-22T00:00:00Z",
};

const APP_DELEGATION_CONFIG = {
  platformAccount: "0x4337...bb02",
  fleetSize: 8,
  userDelegations: 142,
  permissions: {
    createDAG: true,
    perUser: true,
    scopedCredentials: ["kyc-ag"],
    maxDAG_TTL: "60s",
    decryptUserData: false,
    accessUserFunds: false,
  },
  userRevokeEndpoint: "https://app.example.com/idos/revoke",
};

const DEV_AGENT_DELEGATION_CONFIG = {
  sessionKey: "0x8b4c...d1f3",
  smartAccount: "0x4337...cc03",
  principal: "0xdead...beef",
  permissions: {
    createDAG: true,
    scopedCredentials: true,
    infraProvisioning: true,
    codeSigning: true,
    packagePublishing: true,
    maxDAG_TTL: "30s",
    decryptData: false,
    transferFunds: false,
  },
  expires: "2026-03-22T00:00:00Z",
};

const USER_STEPS = [
  {
    num: "1",
    title: "Deploy Smart Account",
    desc: "An ERC-4337 smart account is deployed or connected, serving as the on-chain identity for your agent.",
  },
  {
    num: "2",
    title: "Sign delegateAGSigning",
    desc: "You sign a scoped delegation that grants the agent permission to create delegated Access Grants on your behalf.",
  },
  {
    num: "3",
    title: "Agent Gets Session Key",
    desc: "A temporary session key is issued to the agent, bound to the smart account with limited permissions.",
  },
  {
    num: "4",
    title: "dAGs Logged",
    desc: "Every delegated Access Grant the agent creates is logged transparently for your auditing.",
  },
  {
    num: "5",
    title: "Revoke from Dashboard",
    desc: "You can revoke the delegation at any time from this dashboard, instantly disabling the agent's signing authority.",
  },
];

const APP_STEPS = [
  {
    num: "1",
    title: "Deploy Platform Smart Account",
    desc: "A platform-level ERC-4337 smart account is deployed to represent your application's agent fleet.",
  },
  {
    num: "2",
    title: "User Verifies Through App's idOS",
    desc: "Each user verifies their identity through your application's idOS integration — your platform never handles raw PII.",
  },
  {
    num: "3",
    title: "User Signs delegateToPlatform",
    desc: "The user signs a scoped delegation granting your platform permission to create dAGs on their behalf.",
  },
  {
    num: "4",
    title: "Fleet Creates Per-User dAGs",
    desc: "Your agent fleet creates per-user delegated Access Grants as needed, each scoped to the user's credential.",
  },
  {
    num: "5",
    title: "Users Can View/Revoke from idOS Dashboard",
    desc: "Users retain full control — they can view all active delegations and revoke any platform's access from their idOS dashboard.",
  },
];

const DEV_AGENT_STEPS = [
  {
    num: "1",
    title: "Deploy Developer Smart Account",
    desc: "An ERC-4337 smart account is deployed for your developer identity, serving as the on-chain anchor for your coding agent.",
  },
  {
    num: "2",
    title: "Sign delegateDevAgent",
    desc: "You sign a scoped delegation granting the coding agent permission to access dev lifecycle APIs — infra, code signing, publishing — on your behalf.",
  },
  {
    num: "3",
    title: "Agent Gets Session Key",
    desc: "A temporary session key is issued to the coding agent, bound to the smart account with permissions scoped to developer APIs only.",
  },
  {
    num: "4",
    title: "dAGs Logged Per API Call",
    desc: "Every API call the coding agent makes (provisioning, signing, publishing) creates a logged dAG for full auditability.",
  },
  {
    num: "5",
    title: "Revoke from Dashboard",
    desc: "You can revoke the coding agent's delegation at any time, instantly disabling its access to all developer APIs.",
  },
];

export default function Delegation() {
  const mode = useAppStore((s) => s.mode);
  const userDelegation = useAppStore((s) => s.userDelegation);
  const appDelegation = useAppStore((s) => s.appDelegation);
  const devAgentDelegation = useAppStore((s) => s.devAgentDelegation);
  const setUserDelegation = useAppStore((s) => s.setUserDelegation);
  const setAppDelegation = useAppStore((s) => s.setAppDelegation);
  const setDevAgentDelegation = useAppStore((s) => s.setDevAgentDelegation);
  const [enabling, setEnabling] = useState(false);

  const delegationMap: Record<AppMode, boolean> = {
    user: userDelegation,
    app: appDelegation,
    dev: devAgentDelegation,
  };
  const hasDelegation = delegationMap[mode];

  const stepsMap: Record<AppMode, typeof USER_STEPS> = {
    user: USER_STEPS,
    app: APP_STEPS,
    dev: DEV_AGENT_STEPS,
  };
  const steps = stepsMap[mode];

  const configMap: Record<AppMode, object> = {
    user: USER_DELEGATION_CONFIG,
    app: APP_DELEGATION_CONFIG,
    dev: DEV_AGENT_DELEGATION_CONFIG,
  };
  const config = configMap[mode];

  const titleMap: Record<AppMode, string> = {
    user: "Agent Delegation",
    app: "Fleet Delegation",
    dev: "Agent Delegation",
  };

  const descMap: Record<AppMode, string> = {
    user: "Delegate signing authority to the agent so it can autonomously verify identity and pay for services using your smart account.",
    app: "Configure fleet-level delegation so your platform agents can create per-user dAGs and call gated services on behalf of your users.",
    dev: "Delegate signing authority to your coding agent so it can autonomously access developer APIs — provisioning, signing, publishing — using your smart account.",
  };

  const cardTitleMap: Record<AppMode, string> = {
    user: "Personal Agent Delegation",
    app: "Platform Agent Fleet",
    dev: "Coding Agent Delegation",
  };

  const cardDescMap: Record<AppMode, string> = {
    user: "Uses ERC-4337 account abstraction to grant a scoped session key to the agent. No private keys are shared — the smart account validates each UserOperation against your configured permissions.",
    app: "Uses ERC-4337 account abstraction to manage a fleet of agents operating under a platform smart account. Users delegate to your platform via idOS — your agents create per-user dAGs without ever accessing raw user data.",
    dev: "Uses ERC-4337 account abstraction to grant a scoped session key to your coding agent. Permissions are limited to developer lifecycle APIs — the agent cannot access personal data or transfer funds.",
  };

  const scopeDescMap: Record<AppMode, string> = {
    user: "The active session configuration defining what the agent is permitted to do.",
    app: "The active fleet configuration defining what the platform agents are permitted to do on behalf of users.",
    dev: "The active session configuration defining what the coding agent is permitted to do across developer APIs.",
  };

  function handleEnable() {
    setEnabling(true);
    setTimeout(() => {
      const setterMap: Record<AppMode, (v: boolean) => void> = {
        user: setUserDelegation,
        app: setAppDelegation,
        dev: setDevAgentDelegation,
      };
      setterMap[mode](true);
      setEnabling(false);
    }, 1200);
  }

  function handleRevoke() {
    const setterMap: Record<AppMode, (v: boolean) => void> = {
      user: setUserDelegation,
      app: setAppDelegation,
      dev: setDevAgentDelegation,
    };
    setterMap[mode](false);
  }

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-sans text-2xl font-semibold text-t1">
          {titleMap[mode]}
        </h2>
        <p className="mt-1 text-sm text-t3">
          {descMap[mode]}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Card 1 — Delegation explanation */}
        <div className="rounded-xl border border-b1 bg-s1 p-6">
          <h3 className="text-lg font-semibold text-t1">
            {cardTitleMap[mode]}
          </h3>
          <p className="mt-1 text-sm text-t3">
            {cardDescMap[mode]}
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
            {scopeDescMap[mode]}
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
                <code>{JSON.stringify(config, null, 2)}</code>
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
