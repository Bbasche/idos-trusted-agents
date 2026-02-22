"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useAppStore } from "@/lib/store";
import type { AppMode, LogEntry, Service } from "@/lib/types";

interface TermLine {
  text: string;
  color: "blue" | "orange" | "green" | "purple" | "gray" | "red" | "default";
}

export default function Terminal() {
  const getServices = useAppStore((s) => s.getServices);
  const customServices = useAppStore((s) => s.customServices);
  const hasPoP = useAppStore((s) => s.hasPoP);
  const hasKYC = useAppStore((s) => s.hasKYC);
  const mode = useAppStore((s) => s.mode);
  const userDelegation = useAppStore((s) => s.userDelegation);
  const appDelegation = useAppStore((s) => s.appDelegation);
  const devAgentDelegation = useAppStore((s) => s.devAgentDelegation);
  const usedServices = useAppStore((s) => s.usedServices);
  const markServiceUsed = useAppStore((s) => s.markServiceUsed);
  const addLog = useAppStore((s) => s.addLog);

  const delegationMap: Record<AppMode, boolean> = {
    user: userDelegation,
    app: appDelegation,
    dev: devAgentDelegation,
  };
  const hasDelegation = delegationMap[mode];

  const [lines, setLines] = useState<TermLine[]>([
    { text: "# idOS Agent Terminal v1.0", color: "gray" },
    {
      text: "# Select a service below to simulate an autonomous agent call.",
      color: "gray",
    },
    { text: "", color: "default" },
  ]);
  const [running, setRunning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allServices = getServices();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  function canUseService(svc: Service): boolean {
    if (svc.gate === "pop") return hasPoP;
    if (svc.gate === "kyc" || svc.gate === "kyc-ag") return hasKYC;
    if (svc.gate === "uniq") return hasPoP;
    return false;
  }

  const addLine = useCallback(
    (text: string, color: TermLine["color"]) => {
      setLines((prev) => [...prev, { text, color }]);
    },
    [],
  );

  async function simulateCall(svc: Service) {
    if (running) return;
    setRunning(true);

    const timestamp = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const endpoint = `https://api.${svc.id}.example.com/v1`;

    addLine(`$ agent call "${svc.name}"`, "default");
    addLine("", "default");

    await delay(400);
    addLine(`# Step 1: Initial request`, "gray");
    addLine(`GET ${endpoint}`, "blue");

    await delay(600);
    addLine(`← 402 Payment Required`, "orange");
    addLine(
      `  x-payment: ${svc.price} USDC | gate: ${svc.gate.toUpperCase()}`,
      "orange",
    );

    await delay(500);
    addLine("", "default");
    addLine(`# Step 2: Identity verification via idOS`, "gray");
    addLine(
      `idOS.createDelegatedAG({ gate: "${svc.gate}", credential: "..." })`,
      "blue",
    );

    await delay(700);
    if (!canUseService(svc)) {
      addLine(`← ERROR: Missing credential for gate ${svc.gate}`, "red");
      addLine(`  Agent does not have the required credential.`, "red");

      const logEntry: LogEntry = {
        time: timestamp,
        service: svc.name,
        gate: svc.gate,
        cost: "$0.00",
        status: "failed",
        note: `Missing ${svc.gate} credential`,
        mode,
      };
      addLog(logEntry);
      addLine("", "default");
      setRunning(false);
      return;
    }

    addLine(`← 200 OK — Identity verified`, "green");
    addLine(
      `  accessGrant: "ag_${Math.random().toString(36).slice(2, 10)}"`,
      "green",
    );

    await delay(500);
    addLine("", "default");
    addLine(`# Step 3: x402 payment`, "gray");
    addLine(
      `x402.signPayment({ amount: "${svc.price}", token: "USDC" })`,
      "purple",
    );

    await delay(600);
    addLine(
      `← Payment signed: 0x${Math.random().toString(16).slice(2, 18)}...`,
      "purple",
    );

    await delay(400);
    addLine("", "default");
    addLine(`# Step 4: Authenticated request with payment`, "gray");
    addLine(
      `GET ${endpoint} [x-payment: signed] [x-ag: delegated]`,
      "blue",
    );

    await delay(700);
    addLine(`← 200 OK`, "green");
    addLine(
      `  Response: { "status": "verified", "result": "..." }`,
      "green",
    );
    addLine("", "default");
    addLine(
      `# Done. Service call completed successfully in ${(Math.random() * 800 + 400).toFixed(0)}ms`,
      "gray",
    );
    addLine("", "default");

    const logEntry: LogEntry = {
      time: timestamp,
      service: svc.name,
      gate: svc.gate,
      cost: `$${svc.price}`,
      status: "success",
      note: "Autonomous agent call",
      mode,
    };
    addLog(logEntry);
    markServiceUsed(svc.id);
    setRunning(false);
  }

  const colorMap: Record<TermLine["color"], string> = {
    blue: "text-blue",
    orange: "text-orange",
    green: "text-green",
    purple: "text-purple",
    gray: "text-t4",
    red: "text-red",
    default: "text-t2",
  };

  const titleMap: Record<AppMode, string> = {
    user: "Agent Terminal",
    app: "API Test Console",
    dev: "Agent Terminal",
  };
  const terminalTitle = titleMap[mode];

  const descriptionMap: Record<AppMode, string> = {
    user: "Simulate autonomous agent calls to x402-gated services. The agent handles identity verification, credential presentation, and micropayments — all without user intervention.",
    app: "Test your platform's agent fleet calls to x402-gated APIs. Agents handle identity verification, credential presentation, and micropayments on behalf of your users.",
    dev: "Simulate your coding agent's calls to developer lifecycle APIs. The agent handles identity verification, credential presentation, and micropayments for dev infrastructure.",
  };
  const terminalDesc = descriptionMap[mode];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-sans text-2xl font-semibold text-t1">
          {terminalTitle}
        </h2>
        <p className="mt-1 text-sm text-t3">{terminalDesc}</p>
      </div>

      {/* Delegation status */}
      <div className="flex items-center gap-2 text-sm">
        <span
          className={`inline-block h-2 w-2 rounded-full ${
            hasDelegation ? "bg-green animate-glow" : "bg-t4"
          }`}
        />
        <span className={hasDelegation ? "text-green" : "text-t3"}>
          {hasDelegation
            ? "Delegation active — agent can operate autonomously"
            : "Delegation inactive — enable delegation to use the terminal"}
        </span>
      </div>

      {/* Service selection */}
      <div className="flex flex-wrap gap-2">
        {allServices.map((svc) => {
          const enabled = hasDelegation && canUseService(svc) && !running;
          const used = usedServices.has(svc.id);

          return (
            <button
              key={svc.id}
              onClick={() => simulateCall(svc)}
              disabled={!enabled}
              className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                !hasDelegation || !canUseService(svc)
                  ? "cursor-not-allowed border-b1 bg-s2 text-t4"
                  : running
                    ? "cursor-wait border-b1 bg-s2 text-t4"
                    : used
                      ? "border-green/20 bg-green-dim text-green hover:bg-green/20"
                      : "border-b2 bg-s3 text-t1 hover:border-green/30 hover:bg-s4"
              }`}
            >
              {svc.icon} {svc.name}
              {used && " \u2713"}
            </button>
          );
        })}
      </div>

      {/* Terminal output */}
      <div className="overflow-hidden rounded-xl border border-b1 bg-bg">
        {/* Terminal chrome */}
        <div className="flex items-center gap-2 border-b border-b1 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green/60" />
          <span className="ml-2 font-mono text-[10px] text-t4">
            agent-terminal
          </span>
          {running && (
            <span className="ml-auto h-2 w-2 animate-spin-fast rounded-sm bg-green" />
          )}
        </div>

        {/* Output area */}
        <div
          ref={scrollRef}
          className="h-96 overflow-y-auto p-4 font-mono text-xs leading-relaxed"
        >
          {lines.map((line, i) => (
            <div key={i} className={colorMap[line.color]}>
              {line.text || "\u00A0"}
            </div>
          ))}
          {running && (
            <span className="inline-block h-3.5 w-1.5 animate-pulse bg-green/60" />
          )}
        </div>
      </div>
    </div>
  );
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
