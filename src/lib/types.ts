export type IdentityGate = "pop" | "kyc" | "kyc-ag" | "uniq";

export interface Service {
  id: string;
  name: string;
  icon: string;
  desc: string;
  gate: IdentityGate;
  price: string;
  color: "green" | "blue" | "purple" | "orange" | "yellow";
  category: string;
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
}

export type AppScreen =
  | "catalog"
  | "activity"
  | "credentials"
  | "delegation"
  | "add-service"
  | "terminal";
