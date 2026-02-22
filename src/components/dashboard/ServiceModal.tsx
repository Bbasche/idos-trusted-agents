"use client";

import { useState, useCallback, useEffect } from "react";
import { useAppStore } from "@/lib/store";
import type { Service, IdentityGate, Credential } from "@/lib/types";

type Step = "identity" | "payment" | "result";
const STEPS: Step[] = ["identity", "payment", "result"];

const STEP_LABELS: Record<Step, string> = {
  identity: "Identity",
  payment: "Payment",
  result: "Result",
};

const GATE_REQUIRES: Record<IdentityGate, "PoP" | "KYC"> = {
  pop: "PoP",
  kyc: "KYC",
  "kyc-ag": "KYC",
  uniq: "PoP",
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateHash() {
  return (
    "0x" +
    Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
  );
}

export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const {
    hasPoP,
    hasKYC,
    setHasPoP,
    setHasKYC,
    usedServices,
    markServiceUsed,
    addCredential,
    addLog,
  } = useAppStore();

  const isUsed = usedServices.has(service.id);
  const requiresType = GATE_REQUIRES[service.gate];
  const hasCred = requiresType === "PoP" ? hasPoP : hasKYC;
  const isReuse = hasCred;
  const isAG = service.gate === "kyc-ag";

  const [step, setStep] = useState<Step>("identity");
  const [loading, setLoading] = useState(false);
  const [subStep, setSubStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Identity sub-steps vary based on gate
  const identitySubSteps = isReuse
    ? ["Checking existing credentials...", "Credential found — reusing"]
    : requiresType === "PoP"
      ? ["Initiating PoP verification...", "Submitting liveness challenge...", "idOS confirmation received"]
      : isAG
        ? [
            "Initiating KYC verification...",
            "Connecting to idOS Relay...",
            "AG re-verification in progress...",
            "Credential issued by Access Grant",
          ]
        : [
            "Initiating KYC verification...",
            "Connecting to idOS Relay...",
            "Waiting for verifier response...",
            "Credential issued",
          ];

  const paymentSubSteps = [
    `Preparing payment of ${service.price === "0.00" ? "0" : service.price} USDC...`,
    "Transaction submitted",
    "Payment confirmed",
  ];

  const runIdentityStep = useCallback(async () => {
    setLoading(true);
    setSubStep(0);
    for (let i = 0; i < identitySubSteps.length; i++) {
      setSubStep(i);
      await delay(isReuse ? 600 : 900);
    }

    // Issue credential if new
    if (!hasCred) {
      const cred: Credential = {
        type: requiresType,
        level: requiresType === "PoP" ? "Liveness" : isAG ? "Enhanced + AG" : "Standard",
        issuer: isAG ? "idOS Access Grant" : "idOS Network",
        issued: new Date().toISOString().split("T")[0],
        hash: generateHash(),
      };
      addCredential(cred);
      if (requiresType === "PoP") setHasPoP(true);
      else setHasKYC(true);
    }

    setLoading(false);
    setStep("payment");
  }, [hasCred, requiresType, isReuse, isAG, identitySubSteps.length, addCredential, setHasPoP, setHasKYC]);

  const runPaymentStep = useCallback(async () => {
    setLoading(true);
    setSubStep(0);
    for (let i = 0; i < paymentSubSteps.length; i++) {
      setSubStep(i);
      await delay(700);
    }
    setLoading(false);
    setStep("result");
  }, [paymentSubSteps.length]);

  const runResultStep = useCallback(async () => {
    setLoading(true);
    setSubStep(0);
    await delay(500);

    markServiceUsed(service.id);
    addLog({
      time: new Date().toISOString(),
      service: service.name,
      gate: service.gate,
      cost: service.price === "0.00" ? "Free" : `${service.price} USDC`,
      status: "success",
      note: isReuse ? "Credential reused" : `New ${requiresType} credential issued`,
    });

    setCompleted(true);
    setLoading(false);
  }, [service, markServiceUsed, addLog, isReuse, requiresType]);

  // Auto-run steps
  useEffect(() => {
    if (step === "identity" && !completed) {
      runIdentityStep();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = () => {
    if (step === "payment" && !loading) runPaymentStep();
  };

  const currentSubSteps =
    step === "identity"
      ? identitySubSteps
      : step === "payment"
        ? paymentSubSteps
        : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg rounded-2xl border border-b1 bg-s1 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-b1">
          <div className="flex items-center gap-3">
            <span className="text-xl">{service.icon}</span>
            <div>
              <h2 className="text-sm font-medium text-t1">{service.name}</h2>
              <span className="font-mono text-[10px] text-t4 uppercase tracking-wider">
                {service.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-b1 bg-s2 text-t4 hover:text-t1 hover:border-b2 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0 px-5 pt-4 pb-2">
          {STEPS.map((s, i) => {
            const stepIdx = STEPS.indexOf(step);
            const done = i < stepIdx || completed;
            const active = i === stepIdx && !completed;
            return (
              <div key={s} className="flex items-center flex-1">
                <div className="flex items-center gap-2 flex-1">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono border transition-colors ${
                      done
                        ? "bg-green-dim border-green/30 text-green"
                        : active
                          ? "bg-s3 border-green/40 text-green"
                          : "bg-s2 border-b1 text-t4"
                    }`}
                  >
                    {done ? "✓" : i + 1}
                  </div>
                  <span
                    className={`text-[11px] font-mono ${
                      done ? "text-green" : active ? "text-t1" : "text-t4"
                    }`}
                  >
                    {STEP_LABELS[s]}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-2 ${
                      done ? "bg-green/30" : "bg-b1"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Body */}
        <div className="px-5 py-4 min-h-[180px]">
          {/* Already used banner */}
          {isUsed && step === "identity" && !loading && !completed && (
            <div className="mb-4 px-3 py-2 rounded-lg border border-green/20 bg-green-dim">
              <p className="text-xs text-green font-mono">
                You have already used this service. Running again will add a new log entry.
              </p>
            </div>
          )}

          {/* Reuse banner */}
          {isReuse && step === "identity" && (
            <div className="mb-4 px-3 py-2 rounded-lg border border-blue/20 bg-blue-dim">
              <p className="text-xs text-blue font-mono">
                Existing {requiresType} credential detected — instant reuse flow.
              </p>
            </div>
          )}

          {/* Sub-step log */}
          {(step === "identity" || step === "payment") && (
            <div className="space-y-2">
              {currentSubSteps.map((label, i) => {
                const visible = i <= subStep;
                if (!visible) return null;
                const isCurrent = i === subStep && loading;
                return (
                  <div key={i} className="flex items-center gap-2 animate-fade-in">
                    {isCurrent ? (
                      <span className="w-3 h-3 border-2 border-green border-t-transparent rounded-full animate-spin-fast" />
                    ) : (
                      <span className="w-3 h-3 flex items-center justify-center text-green text-[8px]">
                        ✓
                      </span>
                    )}
                    <span
                      className={`font-mono text-xs ${
                        isCurrent ? "text-t2" : "text-t3"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Result step */}
          {step === "result" && !completed && !loading && (
            <div className="text-center py-6">
              <p className="text-sm text-t2 mb-2">Finalizing service access...</p>
              <span className="inline-block w-5 h-5 border-2 border-green border-t-transparent rounded-full animate-spin-fast" />
            </div>
          )}

          {step === "result" && completed && (
            <div className="text-center py-4 animate-fade-in">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-dim border border-green/30 flex items-center justify-center text-green text-lg">
                ✓
              </div>
              <h3 className="text-sm font-medium text-t1 mb-1">Service Accessed Successfully</h3>
              <p className="text-xs text-t3 mb-3">
                {service.name} has been consumed using your {requiresType} credential.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-s2 border border-b1">
                <div className="text-left">
                  <span className="block font-mono text-[10px] text-t4">Cost</span>
                  <span className="block font-mono text-xs text-t1">
                    {service.price === "0.00" ? "Free" : `${service.price} USDC`}
                  </span>
                </div>
                <span className="w-px h-6 bg-b1" />
                <div className="text-left">
                  <span className="block font-mono text-[10px] text-t4">Credential</span>
                  <span className="block font-mono text-xs text-t1">{requiresType}</span>
                </div>
                <span className="w-px h-6 bg-b1" />
                <div className="text-left">
                  <span className="block font-mono text-[10px] text-t4">Status</span>
                  <span className="block font-mono text-xs text-green">Success</span>
                </div>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-3 px-3 py-2 rounded-lg border border-red/20 bg-red-dim">
              <p className="text-xs text-red font-mono">{error}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-5 border-t border-b1">
          {completed ? (
            <button
              onClick={onClose}
              className="font-mono text-xs px-4 py-2 rounded-lg bg-green text-bg hover:bg-green/90 transition-colors cursor-pointer"
            >
              Done
            </button>
          ) : step === "identity" && !loading ? (
            <button
              onClick={() => {
                setStep("payment");
              }}
              className="font-mono text-xs px-4 py-2 rounded-lg bg-green text-bg hover:bg-green/90 transition-colors cursor-pointer"
            >
              Continue to Payment
            </button>
          ) : step === "payment" && !loading ? (
            <button
              onClick={() => runPaymentStep()}
              className="font-mono text-xs px-4 py-2 rounded-lg bg-green text-bg hover:bg-green/90 transition-colors cursor-pointer"
            >
              Confirm Payment
            </button>
          ) : step === "result" && !loading && !completed ? (
            <button
              onClick={() => runResultStep()}
              className="font-mono text-xs px-4 py-2 rounded-lg bg-green text-bg hover:bg-green/90 transition-colors cursor-pointer"
            >
              Finalize
            </button>
          ) : (
            <span className="font-mono text-[11px] text-t4">Processing...</span>
          )}
        </div>
      </div>
    </div>
  );
}
