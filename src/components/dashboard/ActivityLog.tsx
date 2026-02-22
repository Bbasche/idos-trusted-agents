"use client";

import { useAppStore } from "@/lib/store";
import type { AppMode } from "@/lib/types";

const gateColor: Record<string, string> = {
  pop: "bg-green-dim text-green border border-green/20",
  kyc: "bg-blue-dim text-blue border border-blue/20",
  "kyc-ag": "bg-orange-dim text-orange border border-orange/20",
  uniq: "bg-yellow-dim text-yellow border border-yellow/20",
};

const gateLabel: Record<string, string> = {
  pop: "POP",
  kyc: "KYC",
  "kyc-ag": "KYC-AG",
  uniq: "UNIQ",
};

export default function ActivityLog() {
  const logs = useAppStore((s) => s.logs);
  const mode = useAppStore((s) => s.mode);

  const filteredLogs = logs.filter((l) => l.mode === mode);

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-sans text-2xl font-semibold text-t1">
          Activity Log
        </h2>
        <p className="mt-1 text-sm text-t3">
          {({
            user: "Transparent auditing of every service call made through the idOS agent. Each entry records the gate used, cost paid, and outcome.",
            app: "Transparent auditing of every API call made through the platform agent fleet. Each entry records the gate used, cost paid, and outcome.",
            dev: "Transparent auditing of every API call made through your coding agent. Each entry records the gate used, cost paid, and outcome.",
          } as Record<AppMode, string>)[mode]}
        </p>
      </div>

      {/* Table */}
      {filteredLogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-b1 bg-s1 py-20">
          <span className="text-3xl">&#128203;</span>
          <p className="mt-3 text-sm text-t3">
            No activity yet. Use a service to see logs here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-b1 bg-s1">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-b1 text-t3">
                <th className="px-5 py-3 font-medium">Time</th>
                <th className="px-5 py-3 font-medium">Service</th>
                <th className="px-5 py-3 font-medium">Gate</th>
                <th className="px-5 py-3 font-medium">Cost</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-b1">
              {filteredLogs.map((log, i) => (
                <tr
                  key={`${log.time}-${i}`}
                  className="transition-colors hover:bg-s2"
                >
                  <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-t3">
                    {log.time}
                  </td>
                  <td className="px-5 py-3 text-t1">{log.service}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-xs font-medium ${
                        gateColor[log.gate.toLowerCase()] ??
                        "bg-s3 text-t2 border border-b1"
                      }`}
                    >
                      {gateLabel[log.gate.toLowerCase()] ??
                        log.gate.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-t2">
                    {log.cost}
                  </td>
                  <td className="px-5 py-3">
                    {log.status === "success" ? (
                      <span className="inline-flex items-center gap-1.5 text-green">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
                        Success
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-red">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-red" />
                        Failed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
