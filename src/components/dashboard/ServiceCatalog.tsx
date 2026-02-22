"use client";

import { useState, useMemo } from "react";
import { useAppStore } from "@/lib/store";
import type { AppMode, IdentityGate, Service } from "@/lib/types";
import ServiceModal from "./ServiceModal";

const FILTERS: { label: string; gate: IdentityGate | null }[] = [
  { label: "All", gate: null },
  { label: "Proof of Personhood", gate: "pop" },
  { label: "KYC Required", gate: "kyc" },
  { label: "KYC + AG", gate: "kyc-ag" },
  { label: "Uniqueness", gate: "uniq" },
];

const GATE_LABELS: Record<IdentityGate, string> = {
  pop: "PoP",
  kyc: "KYC",
  "kyc-ag": "KYC + AG",
  uniq: "Uniqueness",
};

const GATE_COLORS: Record<IdentityGate, string> = {
  pop: "text-green bg-green-dim border-green/20",
  kyc: "text-blue bg-blue-dim border-blue/20",
  "kyc-ag": "text-orange bg-orange-dim border-orange/20",
  uniq: "text-yellow bg-yellow-dim border-yellow/20",
};

export default function ServiceCatalog() {
  const { getServices, usedServices, mode } = useAppStore();
  const [filter, setFilter] = useState<IdentityGate | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const allServices = useMemo(() => getServices(), [getServices]);

  const filtered = useMemo(() => {
    if (!filter) return allServices;
    return allServices.filter((s) => s.gate === filter);
  }, [allServices, filter]);

  const headerMap: Record<AppMode, { title: string; desc: string }> = {
    user: {
      title: "Service Catalog",
      desc: "Browse and consume services that require verified identity credentials through the idOS network.",
    },
    app: {
      title: "API Integrations",
      desc: "Integrate identity-verified APIs into your platform. Your backend agents call these endpoints on behalf of your users.",
    },
    dev: {
      title: "Developer API Catalog",
      desc: "Identity-gated APIs for the software development lifecycle. Your coding agent accesses these services using your verified credentials.",
    },
  };
  const { title: headerTitle, desc: headerDesc } = headerMap[mode];

  return (
    <div className="p-6 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-t1 mb-1">{headerTitle}</h1>
        <p className="text-sm text-t3">{headerDesc}</p>
      </div>

      {/* Disclaimer */}
      <div className="mb-6 px-4 py-3 rounded-lg border border-orange/20 bg-orange-dim">
        <p className="text-xs text-orange font-mono leading-relaxed">
          <span className="font-bold">Disclaimer:</span> These services are example scenarios that demonstrate the idOS
          Trusted Agent credential flow. No real funds are transferred and no real identity data is stored.
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {FILTERS.map((f) => {
          const active = filter === f.gate;
          return (
            <button
              key={f.label}
              onClick={() => setFilter(f.gate)}
              className={`font-mono text-[11px] px-3 py-1 rounded-full border transition-colors cursor-pointer ${
                active
                  ? "border-green/30 bg-green-dim text-green"
                  : "border-b1 bg-s2 text-t3 hover:text-t1 hover:border-b2"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Service grid */}
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {filtered.map((svc) => {
          const isUsed = usedServices.has(svc.id);
          return (
            <button
              key={svc.id}
              onClick={() => setSelectedService(svc)}
              className="group relative text-left p-4 rounded-xl border border-b1 bg-s1 hover:border-b2 hover:bg-s2 transition-all cursor-pointer"
            >
              {/* Used badge */}
              {isUsed && (
                <span className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full bg-green-dim text-green border border-green/20">
                  ✓ Used
                </span>
              )}

              {/* Icon */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{svc.icon}</span>
              </div>

              {/* Name */}
              <h3 className="text-sm font-medium text-t1 mb-1 group-hover:text-green transition-colors">
                {svc.name}
              </h3>

              {/* Context line */}
              <p className="font-mono text-[10px] text-t4 mb-1.5 leading-relaxed">
                {svc.ctx}
              </p>

              {/* Description */}
              <p className="text-xs text-t3 leading-relaxed mb-3 line-clamp-2">
                {svc.desc}
              </p>

              {/* Footer: Gate tag + Price */}
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                    GATE_COLORS[svc.gate] ?? "text-t3 bg-s2 border-b1"
                  }`}
                >
                  {GATE_LABELS[svc.gate]}
                </span>
                <span className="font-mono text-[11px] text-t4">
                  {svc.price === "0.00" ? "Free" : `${svc.price} USDC`}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-t4 text-sm">No services found for this filter.</p>
        </div>
      )}

      {/* Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
}
