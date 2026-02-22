"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";
import type { IdentityGate, Service } from "@/lib/types";

const GATE_OPTIONS: { value: IdentityGate; label: string }[] = [
  { value: "pop", label: "Proof of Personhood (PoP)" },
  { value: "uniq", label: "Uniqueness Check (UNIQ)" },
  { value: "kyc", label: "KYC Verification" },
  { value: "kyc-ag", label: "KYC with Access Grant (AG)" },
];

const GATE_COLOR: Record<IdentityGate, Service["color"]> = {
  pop: "green",
  uniq: "yellow",
  kyc: "blue",
  "kyc-ag": "orange",
};

export default function AddService() {
  const addCustomService = useAppStore((s) => s.addCustomService);
  const setScreen = useAppStore((s) => s.setScreen);

  const [name, setName] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [gate, setGate] = useState<IdentityGate>("pop");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const service: Service = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      icon: "\u2699\uFE0F",
      desc: description.trim() || "Custom service added manually.",
      gate,
      price: parseFloat(price || "0").toFixed(2),
      color: GATE_COLOR[gate],
      category: "Custom",
    };

    addCustomService(service);
    setScreen("catalog");
  }

  const inputClass =
    "w-full rounded-lg border border-b1 bg-s2 px-4 py-2.5 font-mono text-sm text-t1 placeholder:text-t4 transition-colors focus:border-green/40 focus:outline-none focus:ring-1 focus:ring-green/20";

  const labelClass = "block text-sm font-medium text-t2 mb-1.5";

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-sans text-2xl font-semibold text-t1">
          Add Service Manually
        </h2>
        <p className="mt-1 text-sm text-t3">
          Register a custom x402-compatible service endpoint. The service will
          appear in your catalog and can be called from the agent terminal.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl space-y-5 rounded-xl border border-b1 bg-s1 p-6"
      >
        {/* Service Name */}
        <div>
          <label htmlFor="svc-name" className={labelClass}>
            Service Name
          </label>
          <input
            id="svc-name"
            type="text"
            required
            placeholder="e.g. My Verification API"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Endpoint URL */}
        <div>
          <label htmlFor="svc-endpoint" className={labelClass}>
            Endpoint URL
          </label>
          <input
            id="svc-endpoint"
            type="url"
            required
            placeholder="https://api.example.com/v1/verify"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Identity Gate */}
        <div>
          <label htmlFor="svc-gate" className={labelClass}>
            Identity Gate
          </label>
          <select
            id="svc-gate"
            value={gate}
            onChange={(e) => setGate(e.target.value as IdentityGate)}
            className={inputClass}
          >
            {GATE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price per Call */}
        <div>
          <label htmlFor="svc-price" className={labelClass}>
            Price per Call (USDC)
          </label>
          <input
            id="svc-price"
            type="number"
            step="0.01"
            min="0"
            required
            placeholder="0.50"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="svc-desc" className={labelClass}>
            Description
          </label>
          <textarea
            id="svc-desc"
            rows={3}
            placeholder="Briefly describe what this service does..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-lg bg-green px-6 py-2.5 font-mono text-sm font-semibold text-bg transition-all hover:brightness-110"
        >
          Register Service &rarr;
        </button>
      </form>
    </div>
  );
}
