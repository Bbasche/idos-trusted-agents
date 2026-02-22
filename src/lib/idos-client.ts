"use client";

import { createIDOSClient, type idOSClientLoggedIn, type idOSClientIdle } from "@idos-network/client";

const IDOS_NODE_URL = process.env.NEXT_PUBLIC_IDOS_NODE_URL || "https://nodes.idos.network";
const ENCLAVE_URL = process.env.NEXT_PUBLIC_IDOS_ENCLAVE_URL || "https://enclave.idos.network";

let idosClientInstance: idOSClientIdle | null = null;

export async function getIdOSClient(): Promise<idOSClientIdle> {
  if (idosClientInstance) return idosClientInstance;

  const config = createIDOSClient({
    nodeUrl: IDOS_NODE_URL,
    enclaveOptions: {
      container: "#idos-enclave-container",
      url: ENCLAVE_URL,
    },
  });

  idosClientInstance = await config.createClient();
  return idosClientInstance;
}

export async function loginWithWallet(
  signer: { signMessage: (message: string) => Promise<{ signedMessage: string }> },
  address: string,
): Promise<idOSClientLoggedIn> {
  const client = await getIdOSClient();
  const withSigner = await client.withUserSigner(signer as any);
  const loggedIn = await withSigner.logIn();
  return loggedIn;
}

export async function checkHasProfile(address: string): Promise<boolean> {
  const client = await getIdOSClient();
  return client.addressHasProfile(address);
}

export type { idOSClientLoggedIn, idOSClientIdle };
