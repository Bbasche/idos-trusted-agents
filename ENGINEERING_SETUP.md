# idOS Trusted Agents — Engineering Setup Requirements

## Overview

This is a Next.js app implementing an identity-gated API marketplace prototype. It integrates with the idOS SDK (client, consumer, credentials packages from PR #1338), FaceSign for biometric auth, and simulates x402 payments. Below is everything we need from the idOS engineering team to complete the integration.

---

## 1. idOS Node Configuration

- **We need:** the correct `nodeUrl` for the idOS Kwil network (testnet or production)
- **Currently defaulting to:** `https://nodes.idos.network`
- **Env var:** `NEXT_PUBLIC_IDOS_NODE_URL`
- **Question:** Is this the correct endpoint? Do we need a chain ID?

---

## 2. Enclave / FaceSign Configuration

- **We need:** the correct enclave URL for FaceSign
- **Currently defaulting to:** `https://enclave.idos.network`
- **Env var:** `NEXT_PUBLIC_IDOS_ENCLAVE_URL`
- **References:** <https://github.com/idos-network/idos-sdk-js/tree/main/apps/facesign-enclave>

**Questions:**

- What is the production/staging enclave URL?
- Does the enclave need any app-specific registration/allowlisting?
- Is there a FaceTec license key or similar requirement?
- Reference: <https://github.com/idos-network/nitro-enclave-experiment/>

---

## 3. idOS Relay — KYC Credential Issuance

- **We need:** documentation on the idOS Relay API for orchestrating KYC
- **Currently:** KYC flow is simulated in the UI

**Questions:**

- What is the Relay API endpoint for initiating KYC?
- What KYC providers are available (Sumsub, etc.)?
- How does the credential issuance callback work?
- What is the format of the issued W3C Verifiable Credential?
- How does the Relay self-revoke its access grant?
- Is there a staging/sandbox environment for testing?

---

## 4. Credential Verification (Consumer/Server-Side)

- **We need:** guidance on how an API operator verifies a credential hash
- **Currently:** we use `@idos-network/consumer` package

**Questions:**

- How does a server verify a dAG (delegated Access Grant)?
- What is the flow for verifying a credential hash on-chain without accessing PII?
- Is there an example of server-side middleware that checks idOS credentials?

---

## 5. Access Grants (dAGs)

- **We need:** clarity on creating and managing delegated Access Grants
- The app uses `requestDAGMessage()` and `requestAccessGrant()` from the client SDK

**Questions:**

- What are the parameters for a properly scoped dAG?
- What is the maximum/recommended TTL?
- How does the auto-expiry mechanism work?
- How does the ERC-4337 session key delegation work for agents?

---

## 6. x402 Payment Integration

- **Status:** Currently mocked — we simulate 402 responses and USDC settlement
- **When ready to integrate:**
  - We'll need x402 facilitator credentials from Coinbase
  - Reference: <https://www.x402.org>
  - The app is designed to show payment flow but doesn't execute real transactions yet

---

## 7. Environment Variables Needed

```env
NEXT_PUBLIC_IDOS_NODE_URL=         # idOS Kwil node endpoint
NEXT_PUBLIC_IDOS_ENCLAVE_URL=      # FaceSign enclave URL
NEXT_PUBLIC_IDOS_CHAIN_ID=         # Optional: Kwil chain ID if needed
NEXT_PUBLIC_BASE_RPC_URL=          # Base L2 RPC for USDC payments (when ready)
```

---

## 8. SDK Packages Used

We're using the packages from PR #1338:

```
@idos-network/client@1338
@idos-network/consumer@1338
@idos-network/credentials@1338
```

**Install:**

```bash
npm i https://pkg.pr.new/idos-network/idos-sdk-js/@idos-network/client@1338
```

---

## 9. Testing Checklist

Once engineering provides the above, we need to verify:

- [ ] FaceSign enclave loads in iframe and completes biometric auth
- [ ] Wallet signer connects and creates a Kwil session
- [ ] User profile check (hasProfile) works against the node
- [ ] Credential storage and retrieval works
- [ ] dAG creation and verification flow works end-to-end
- [ ] Credential hash verification works for server-side checks

---

## Architecture Reference

The app implements the flow described in the product brief:

1. Agent requests API
2. Gets 402 + identity requirements
3. Identity verified via idOS (dAG + credential hash)
4. Payment settles (x402 USDC)
5. Resource served

All identity verification happens **BEFORE** payment settlement.

---

*Generated for idOS Trusted Agents v1 — <https://github.com/Bbasche/idos-trusted-agents>*
