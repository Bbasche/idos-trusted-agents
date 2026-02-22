export type IdentityGate = "pop" | "kyc" | "kyc-ag" | "uniq";

export type AppMode = "user" | "dev";

export interface Service {
  id: string;
  name: string;
  icon: string;
  desc: string;
  scenario: string;
  ctx: string;
  gate: IdentityGate;
  price: string;
  mode?: AppMode;
}

export interface Credential {
  type: "PoP" | "KYC";
  level: string;
  issuer: string;
  issued: string;
  hash: string;
}

export interface LogEntry {
  time: string;
  service: string;
  gate: string;
  cost: string;
  status: "success" | "failed";
  note: string;
  mode: AppMode;
}

export type AppScreen =
  | "catalog"
  | "activity"
  | "credentials"
  | "delegation"
  | "add-service"
  | "terminal";
