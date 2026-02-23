import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Fixed Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-b1 bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-t1">
            <span className="inline-block h-2 w-2 rounded-full bg-green animate-glow" />
            idOS Trusted Agents
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#erc8004" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              ERC-8004
            </a>
            <a href="#audiences" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              Who It&apos;s For
            </a>
            <a href="#compliance" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              Compliance
            </a>
            <a href="#flow" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              Flow
            </a>
            <a href="#arch" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              Architecture
            </a>
            <a href="#stack" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              Stack
            </a>
            <Link
              href="/dashboard"
              className="ml-2 rounded-md border border-green/30 bg-green-dim px-3 py-1.5 font-mono text-xs font-medium text-green transition-all hover:border-green/60 hover:bg-green-mid"
            >
              Try Prototype <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-14">
        {/* Radial glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-green/[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center animate-fade-in">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-b1 bg-s1 px-4 py-1.5">
            <span className="rounded-full bg-green-dim border border-green px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wide text-green">
              ERC-8004
            </span>
            <span className="font-mono text-[11px] text-t3">
              The Compliance Layer for Trustless Agents
            </span>
          </div>

          <h1 className="mb-6 font-serif text-5xl leading-[1.06] tracking-tight text-t1 md:text-7xl">
            idOS{" "}
            <span className="italic text-green">Trusted Agents</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl font-sans text-base leading-relaxed text-t2 md:text-lg">
            ERC-8004 gives AI agents on-chain identity, reputation, and discovery.
            idOS extends it with the missing piece — real-world credential
            verification. Agents prove their principal&apos;s KYC, age, and
            uniqueness through idOS, pay with USDC via x402, and every credential
            is portable, private, and reusable across every API in the ecosystem.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 font-mono text-sm font-semibold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_20px_var(--color-green-bright)]"
            >
              Interactive Prototype
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#audiences"
              className="inline-flex items-center gap-2 rounded-lg border border-b1 px-6 py-3 font-mono text-sm font-medium text-t1 transition-all hover:bg-s1 hover:border-b2"
            >
              Who It&apos;s For
            </a>
            <a
              href="#arch"
              className="inline-flex items-center gap-2 rounded-lg border border-b1 px-6 py-3 font-mono text-sm font-medium text-t1 transition-all hover:bg-s1 hover:border-b2"
            >
              Architecture
            </a>
          </div>
        </div>

        {/* Fade to bg */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* ── Problem Section ── */}
      <section id="problem" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <span className="mb-2 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-green">
              The Problem
            </span>
            <h2 className="mb-3 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              ERC-8004 solved agent identity.
              <br />
              <span className="text-t3">Real-world compliance breaks every time.</span>
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              AI agents have on-chain identity (ERC-8004), reputation scores, and can
              pay for any API with stablecoins (x402). But when those APIs need KYC,
              age verification, or Sybil resistance — knowing <em>which agent</em> is
              calling isn&apos;t enough. The API needs to verify the <em>human behind
              the agent</em>. That&apos;s the gap.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-b1 bg-b1 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-s1 p-6 transition-colors hover:bg-s2">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-green bg-green-dim text-sm">
                🔐
              </div>
              <h3 className="mb-1 text-sm font-semibold text-t1">Zero-PII Compliance</h3>
              <p className="text-xs leading-relaxed text-t2">
                ERC-8004 identifies the agent. idOS verifies the human. APIs check
                credential hashes — never seeing, storing, or decrypting personal
                data. All access grants auto-expire.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-s1 p-6 transition-colors hover:bg-s2">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-blue bg-blue-dim text-sm">
                ♻️
              </div>
              <h3 className="mb-1 text-sm font-semibold text-t1">Verify Once, Reuse Everywhere</h3>
              <p className="text-xs leading-relaxed text-t2">
                The agent&apos;s ERC-8004 identity is portable across chains. The
                human&apos;s idOS credential is portable across APIs. Verify once —
                both agent and principal — and every subsequent call is instant.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-s1 p-6 transition-colors hover:bg-s2">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-orange bg-orange-dim text-sm">
                🤖
              </div>
              <h3 className="mb-1 text-sm font-semibold text-t1">Agent-Native + Delegated</h3>
              <p className="text-xs leading-relaxed text-t2">
                Agents mint ERC-8004 identity NFTs, build on-chain reputation, then
                create scoped dAGs autonomously via smart account delegation.
                Session keys are limited — they can never decrypt data or move funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ERC-8004 + idOS Section ── */}
      <section id="erc8004" className="relative border-y border-b1 bg-s1 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <span className="mb-2 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-green">
              ERC-8004 + idOS
            </span>
            <h2 className="mb-3 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Agent identity meets{" "}
              <span className="text-green">human compliance.</span>
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              ERC-8004 and idOS solve different halves of the same problem. Together,
              they give every AI agent a complete trust stack — from on-chain reputation
              to real-world regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* ERC-8004 column */}
            <div className="rounded-xl border border-b1 bg-bg p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded border border-blue/30 bg-blue-dim px-2 py-0.5 font-mono text-[8px] font-bold tracking-wide text-blue">
                  ERC-8004
                </span>
                <span className="text-[11px] font-semibold text-t1">Agent Layer</span>
              </div>
              <div className="space-y-2.5">
                <div className="rounded-md border border-b1 bg-s2 px-3 py-2">
                  <h4 className="text-[10.5px] font-semibold text-blue">Identity Registry</h4>
                  <p className="mt-0.5 text-[9.5px] leading-snug text-t3">
                    ERC-721 NFT per agent. Portable, transferable on-chain identity
                    with structured metadata and service endpoints.
                  </p>
                </div>
                <div className="rounded-md border border-b1 bg-s2 px-3 py-2">
                  <h4 className="text-[10.5px] font-semibold text-blue">Reputation Registry</h4>
                  <p className="mt-0.5 text-[9.5px] leading-snug text-t3">
                    Signed feedback with anti-spam. Clients rate agents on-chain.
                    Aggregation for composable trust scores.
                  </p>
                </div>
                <div className="rounded-md border border-b1 bg-s2 px-3 py-2">
                  <h4 className="text-[10.5px] font-semibold text-blue">Validation Registry</h4>
                  <p className="mt-0.5 text-[9.5px] leading-snug text-t3">
                    Independent verification hooks — staking, zkML proofs, TEE
                    attestations. Pluggable trust models scaled to risk.
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow / bridge column */}
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="rounded-xl border border-green/30 bg-green-dim px-5 py-4 text-center">
                <div className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-green">
                  Trusted Agents
                </div>
                <p className="text-[11px] leading-snug text-t2">
                  <strong className="text-t1">The bridge.</strong> Maps ERC-8004
                  agent identities to idOS human credentials. An agent calls an API →
                  the API knows <em>which agent</em> (8004) and <em>which human</em> (idOS)
                  — without seeing any PII.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-6 w-px bg-green/30" />
                <div className="rounded-md border border-b1 bg-s2 px-3 py-1.5">
                  <p className="text-center text-[9px] leading-snug text-t3">
                    <span className="text-blue">agentId</span> + <span className="text-green">dAG</span> + <span className="text-purple">x402 payment</span>
                    <br />
                    = one authenticated, paid API call
                  </p>
                </div>
                <div className="h-6 w-px bg-green/30" />
              </div>
            </div>

            {/* idOS column */}
            <div className="rounded-xl border border-b1 bg-bg p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded border border-green/30 bg-green-dim px-2 py-0.5 font-mono text-[8px] font-bold tracking-wide text-green">
                  idOS
                </span>
                <span className="text-[11px] font-semibold text-t1">Human Layer</span>
              </div>
              <div className="space-y-2.5">
                <div className="rounded-md border border-b1 bg-s2 px-3 py-2">
                  <h4 className="text-[10.5px] font-semibold text-green">Credential Store</h4>
                  <p className="mt-0.5 text-[9.5px] leading-snug text-t3">
                    Encrypted W3C credentials on the idOS network. User-sovereign.
                    KYC, PoP, uniqueness — all portable across APIs.
                  </p>
                </div>
                <div className="rounded-md border border-b1 bg-s2 px-3 py-2">
                  <h4 className="text-[10.5px] font-semibold text-green">Delegated Access Grants</h4>
                  <p className="mt-0.5 text-[9.5px] leading-snug text-t3">
                    Scoped, time-limited dAGs let agents prove their principal&apos;s
                    credentials. Auto-expire. User-revocable.
                  </p>
                </div>
                <div className="rounded-md border border-b1 bg-s2 px-3 py-2">
                  <h4 className="text-[10.5px] font-semibold text-green">FaceSign + Relay</h4>
                  <p className="mt-0.5 text-[9.5px] leading-snug text-t3">
                    Biometric liveness auth + KYC orchestration. Verify once via
                    any trusted issuer — credential stored on idOS, data deleted
                    from provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Audiences Section ── */}
      <section id="audiences" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 max-w-2xl">
            <span className="mb-2 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-blue">
              Who It&apos;s For
            </span>
            <h2 className="mb-3 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Three audiences. One protocol.
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              Trusted Agents serves individual users with personal AI agents,
              platform developers whose backend agents serve end users, and
              developer agents — AI coding tools like Claude Code, Cursor, or
              Devin that need identity-gated APIs during the software development
              lifecycle. The identity layer is the same — the delegation model
              differs.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mb-4 flex items-start gap-2 rounded-md border border-b1 bg-s3 px-3 py-2">
            <span className="shrink-0 text-sm">ℹ️</span>
            <span className="text-[10px] leading-snug text-t3">
              The use cases below are <strong className="text-t2">example scenarios</strong> illustrating
              how real-world API providers could adopt the x402 + idOS standard. Service
              names and providers are hypothetical and for demonstration purposes only.
            </span>
          </div>

          {/* Two-column audience grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* ── Personal Agent Column ── */}
            <div className="overflow-hidden rounded-xl border border-b1 bg-s1">
              <div className="border-b border-b1 bg-green-dim px-5 py-4">
                <h3 className="flex items-center gap-2 text-[15px] font-bold text-t1">
                  <span>👤</span> Personal Agent
                </h3>
                <p className="mt-1 text-[11.5px] leading-snug text-t3">
                  &ldquo;I have an AI agent. I want it to do things for me — order wine,
                  apply for jobs, find an apartment — and those services need to know
                  I&apos;m a real, verified person.&rdquo;
                </p>
              </div>
              <div className="divide-y divide-b1 px-5 py-4">
                {/* Service 1 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">🍷</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Age Verification</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Your agent orders alcohol, restricted purchases, or age-gated content.
                      Proves you&apos;re of legal age via FaceSign liveness — no ID upload,
                      reused on every future order from any retailer.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-green/20 bg-green-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-green">
                        PoP
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$0.10</span>
                    </div>
                  </div>
                </div>
                {/* Service 2 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">📊</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Credit Report Pull</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Rate-shopping a mortgage. Your agent pulls credit from multiple bureaus
                      across lenders — today that&apos;s 5+ separate identity verifications.
                      With Trusted Agents: verify once.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-blue/20 bg-blue-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-blue">
                        KYC
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$3.50</span>
                    </div>
                  </div>
                </div>
                {/* Service 3 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">🔍</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Background Check</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Job hunting. Your agent submits to 20 employers, each triggering a
                      background check. One KYC credential, 20 instant checks. No consent fatigue.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-blue/20 bg-blue-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-blue">
                        KYC
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$35.00</span>
                    </div>
                  </div>
                </div>
                {/* Service 4 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">💰</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Income Verification</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Apartment hunting. 8 landlords need proof of income. Your agent handles
                      all 8 — the KYC credential from your background check already satisfies
                      the requirement.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-blue/20 bg-blue-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-blue">
                        KYC
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$25.00</span>
                    </div>
                  </div>
                </div>
                {/* Service 5 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">📝</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Regulated Document Filing</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Tax returns, corporate filings. The receiving authority needs re-verification
                      rights. Your credential is reused, but a scoped access grant is created for
                      the authority.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-orange/20 bg-orange-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-orange">
                        KYC + AG
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$5.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Platform Developer Column ── */}
            <div className="overflow-hidden rounded-xl border border-b1 bg-s1">
              <div className="border-b border-b1 bg-blue-dim px-5 py-4">
                <h3 className="flex items-center gap-2 text-[15px] font-bold text-t1">
                  <span>🏗️</span> Agent Applications
                </h3>
                <p className="mt-1 text-[11.5px] leading-snug text-t3">
                  &ldquo;I&apos;m building a product whose backend agents serve my end
                  users. My users verify once through my app — my agents handle the
                  rest.&rdquo;
                </p>
              </div>
              <div className="divide-y divide-b1 px-5 py-4">
                {/* Service 1 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">🔐</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Age Gate Middleware</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Building a delivery app. Regulations require age checks on every order.
                      Customers verify once via idOS — your agent checks the credential hash
                      per order. You never store their age data.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-green/20 bg-green-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-green">
                        PoP
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$0.10</span>
                    </div>
                  </div>
                </div>
                {/* Service 2 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">📊</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Credit Bureau Integration</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Building a mortgage comparison engine. Your agent fleet pulls credit from
                      3 bureaus per user. Users verify once through your idOS integration — you
                      never store their SSN.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-blue/20 bg-blue-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-blue">
                        KYC
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$3.50</span>
                    </div>
                  </div>
                </div>
                {/* Service 3 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">🏠</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Tenant Screening Pipeline</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Property management platform processing 200 applications/month. Each needs
                      credit + background + income. Applicants verify once — your fleet runs all
                      three checks per applicant.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-blue/20 bg-blue-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-blue">
                        KYC
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$45.00</span>
                    </div>
                  </div>
                </div>
                {/* Service 4 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">🏢</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Business Verification (KYB)</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      B2B procurement platform. Supplier representatives verify identity and
                      authority. Your platform gets an AG for periodic re-verification without
                      storing supplier PII.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-orange/20 bg-orange-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-orange">
                        KYC + AG
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$15.00</span>
                    </div>
                  </div>
                </div>
                {/* Service 5 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">✍️</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Regulated e-Signature API</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Legal tech contract execution. Each signer verifies via idOS. Counterparties
                      get scoped AGs for dispute resolution. Your platform never holds signer PII.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-orange/20 bg-orange-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-orange">
                        KYC + AG
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$2.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Developer Agent Column ── */}
            <div className="overflow-hidden rounded-xl border border-b1 bg-s1">
              <div className="border-b border-b1 bg-purple-dim px-5 py-4">
                <h3 className="flex items-center gap-2 text-[15px] font-bold text-t1">
                  <span>🤖</span> Developer Agent
                </h3>
                <p className="mt-1 text-[11.5px] leading-snug text-t3">
                  &ldquo;I use AI coding agents — Claude Code, Cursor, Devin — and
                  they need to access identity-gated developer APIs on my behalf
                  during the development lifecycle.&rdquo;
                </p>
              </div>
              <div className="divide-y divide-b1 px-5 py-4">
                {/* Service 1 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">☁️</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Cloud Provisioning</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Your coding agent provisions cloud infrastructure — environments,
                      VPCs, resources. The cloud provider verifies your identity once
                      via idOS.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-blue/20 bg-blue-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-blue">
                        KYC
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$2.00</span>
                    </div>
                  </div>
                </div>
                {/* Service 2 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">✍️</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Code Signing</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Sign release binaries and artifacts. KYC+AG ensures signing
                      authority is re-verifiable — critical for supply chain integrity.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-orange/20 bg-orange-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-orange">
                        KYC + AG
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$1.50</span>
                    </div>
                  </div>
                </div>
                {/* Service 3 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">📤</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Package Publishing</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Publish to npm, PyPI, crates.io. Identity-gated publishing
                      prevents supply chain attacks from compromised CI/CD pipelines.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-blue/20 bg-blue-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-blue">
                        KYC
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$0.75</span>
                    </div>
                  </div>
                </div>
                {/* Service 4 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">🛡️</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">Pentest Authorization</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Authorize automated penetration testing. KYC+AG ensures the
                      tester&apos;s identity is verifiable for legal accountability.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-orange/20 bg-orange-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-orange">
                        KYC + AG
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$50.00</span>
                    </div>
                  </div>
                </div>
                {/* Service 5 */}
                <div className="flex gap-2.5 py-2.5">
                  <span className="mt-0.5 shrink-0 text-base">📜</span>
                  <div>
                    <h4 className="text-xs font-semibold text-t1">ToS Acceptance</h4>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-t3">
                      Accept Terms of Service on behalf of your org. KYC+AG
                      ensures acceptance is legally binding and the signer is
                      re-verifiable.
                    </p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded-sm border border-orange/20 bg-orange-dim px-1.5 py-0.5 font-mono text-[7.5px] font-bold tracking-wide text-orange">
                        KYC + AG
                      </span>
                      <span className="ml-auto font-mono text-[9px] text-t4">$0.10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delegation explanation boxes */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-b1 bg-s1 p-4">
              <div className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-green">
                Personal Agent Delegation
              </div>
              <p className="text-[11px] leading-relaxed text-t2">
                Agent registers ERC-8004 identity NFT → user deploys ERC-4337 smart
                account → signs{" "}
                <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                  delegateAGSigning
                </code>{" "}
                scoping credential types + APIs → agent creates time-limited dAGs
                autonomously → reputation accrues on-chain → user can revoke anytime.
              </p>
            </div>
            <div className="rounded-lg border border-b1 bg-s1 p-4">
              <div className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-blue">
                App Fleet Delegation
              </div>
              <p className="text-[11px] leading-relaxed text-t2">
                Platform registers fleet on ERC-8004 Identity Registry → user verifies
                through platform&apos;s idOS integration → user signs{" "}
                <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                  delegateToPlatform
                </code>{" "}
                scoping credentials → fleet agents create dAGs per-user, building
                verifiable reputation → users can view/revoke from idOS dashboard.
              </p>
            </div>
            <div className="rounded-lg border border-b1 bg-s1 p-4">
              <div className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-purple">
                Developer Agent Delegation
              </div>
              <p className="text-[11px] leading-relaxed text-t2">
                Coding agent mints ERC-8004 identity → developer deploys ERC-4337
                smart account → signs{" "}
                <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                  delegateDevAgent
                </code>{" "}
                scoping dev API permissions → agent creates dAGs per API call,
                validated via ERC-8004 Validation Registry → developer can revoke
                from idOS dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance Options Section ── */}
      <section id="compliance" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <span className="mb-2 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-purple">
              For API Operators
            </span>
            <h2 className="mb-3 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Choose your identity gate
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              One middleware. Four compliance levels. Each maps to an idOS credential type.
              All verification happens before payment settlement.
            </p>
          </div>

          <div className="mb-5 grid gap-3 sm:grid-cols-2">
            {/* POP */}
            <div className="rounded-lg border border-b1 bg-s1 p-5">
              <h4 className="mb-1 flex items-center gap-2 text-[12.5px] font-bold text-t1">
                <span className="rounded border border-green/30 bg-green-dim px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-wide text-green">
                  POP
                </span>
                Proof of Personhood
              </h4>
              <p className="text-[11px] leading-relaxed text-t2">
                Verify a real human is behind the request. Prevents bot abuse and Sybil attacks.
                Based on FaceSign liveness — no documents needed. Lightest-touch compliance.
                Ideal for: age gates, rate limits, anti-bot.
              </p>
            </div>

            {/* UNIQUE */}
            <div className="rounded-lg border border-b1 bg-s1 p-5">
              <h4 className="mb-1 flex items-center gap-2 text-[12.5px] font-bold text-t1">
                <span className="rounded border border-yellow/30 bg-yellow-dim px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-wide text-yellow">
                  UNIQUE
                </span>
                Uniqueness
              </h4>
              <p className="text-[11px] leading-relaxed text-t2">
                One account per human. Combines PoP with on-chain uniqueness. Ideal for:
                airdrops, voting, fair distribution where Sybil resistance is critical.
              </p>
            </div>

            {/* KYC */}
            <div className="rounded-lg border border-b1 bg-s1 p-5">
              <h4 className="mb-1 flex items-center gap-2 text-[12.5px] font-bold text-t1">
                <span className="rounded border border-blue/30 bg-blue-dim px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-wide text-blue">
                  KYC
                </span>
                KYC — Hash Only
              </h4>
              <p className="text-[11px] leading-relaxed text-t2">
                Require a KYC credential from a trusted issuer (via idOS Relay). API verifies
                the credential hash — <strong className="text-t1">no access grant, no PII</strong>.
                Sufficient when you need assurance the user passed KYC somewhere trusted. Ideal
                for: credit, background checks, income verification.
              </p>
            </div>

            {/* KYC + AG */}
            <div className="rounded-lg border border-b1 bg-s1 p-5">
              <h4 className="mb-1 flex items-center gap-2 text-[12.5px] font-bold text-t1">
                <span className="rounded border border-orange/30 bg-orange-dim px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-wide text-orange">
                  KYC+AG
                </span>
                KYC — With Access Grant
              </h4>
              <p className="text-[11px] leading-relaxed text-t2">
                Full KYC with a scoped, time-limited AG allowing the API provider to re-verify.
                Required when regulations demand re-check ability. Ideal for: fiat ramps,
                regulated filings, e-signatures, B2B verification.
              </p>
            </div>
          </div>

          {/* Code Example */}
          <div className="overflow-x-auto rounded-lg border border-b1 bg-s1 p-4 font-mono text-[10.5px] leading-[2] text-t2">
            <span className="text-t4">{"// Middleware configuration — API operator chooses their gate"}</span>
            <br />
            <span className="text-purple">x402.paymentMiddleware</span>({"{"}
            <br />
            &nbsp;&nbsp;<span className="text-blue">{'"GET /v1/credit-report"'}</span>: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;price: <span className="text-purple">{'"$3.50"'}</span>, network: <span className="text-blue">{'"base"'}</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;agent: {"{"} <span className="text-t4">{"// ERC-8004 agent identity"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;require_registration: <span className="text-green">true</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_reputation: <span className="text-purple">0.7</span>, <span className="text-t4">{"// optional reputation threshold"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;identity: {"{"} <span className="text-t4">{"// idOS human credential"}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;provider: <span className="text-green">{'"idOS"'}</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;level: <span className="text-green">{'"kyc"'}</span>, <span className="text-t4">{`// "pop" | "unique" | "kyc" | "kyc-ag"`}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accepted_issuers: [<span className="text-green">{'"idOS Relay"'}</span>],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;require_ag: <span className="text-red">false</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
            <br />
            &nbsp;&nbsp;{"}"}
            <br />
            {"}"})
          </div>
        </div>
      </section>

      {/* ── Request Flow Section ── */}
      <section id="flow" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <span className="mb-2 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-orange">
              Request Flow
            </span>
            <h2 className="mb-3 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Identity first. Payment second.
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              The agent presents its ERC-8004 identity + the human&apos;s idOS credential.
              If either check fails, no USDC is transferred — no refunds needed,
              no failed transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-b1 bg-b1 md:grid-cols-5">
            {/* Step 1 */}
            <div className="bg-s1 p-5 text-center">
              <div className="mb-1.5 text-xl">📡</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-t4">Step 1</div>
              <h3 className="mt-1 text-[11px] font-semibold text-t1">Request</h3>
              <p className="mt-0.5 text-[10px] text-t2">Agent sends GET/POST with ERC-8004 agentId</p>
            </div>
            {/* Step 2 */}
            <div className="bg-s1 p-5 text-center">
              <div className="mb-1.5 text-xl">🚧</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-t4">Step 2</div>
              <h3 className="mt-1 text-[11px] font-semibold text-t1">402 + Requirements</h3>
              <p className="mt-0.5 text-[10px] text-t2">Server returns x402 payment terms + idOS identity requirements</p>
            </div>
            {/* Step 3 — Highlighted */}
            <div className="bg-green-dim p-5 text-center">
              <div className="mb-1.5 text-xl">🪪</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-green">Step 3</div>
              <h3 className="mt-1 text-[11px] font-semibold text-green">Verify Identity</h3>
              <p className="mt-0.5 text-[10px] text-t2">
                ERC-8004 agent identity + idOS dAG verified <strong className="text-t1">before</strong> payment
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-s1 p-5 text-center">
              <div className="mb-1.5 text-xl">💰</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-t4">Step 4</div>
              <h3 className="mt-1 text-[11px] font-semibold text-t1">Settle Payment</h3>
              <p className="mt-0.5 text-[10px] text-t2">x402 USDC settles only after identity confirmed</p>
            </div>
            {/* Step 5 */}
            <div className="bg-s1 p-5 text-center">
              <div className="mb-1.5 text-xl">✅</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-t4">Step 5</div>
              <h3 className="mt-1 text-[11px] font-semibold text-t1">Resource Served</h3>
              <p className="mt-0.5 text-[10px] text-t2">API responds. dAG auto-expires. No PII stored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture Section ── */}
      <section id="arch" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <span className="mb-2 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-purple">
              Architecture
            </span>
            <h2 className="mb-3 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Components + types
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              Every component labeled by what it is — client library, server middleware,
              smart contract, or hosted service. Showing the first-call (full verification)
              vs subsequent-call (instant reuse) flows.
            </p>
          </div>

          <div className="overflow-x-auto">
            <svg viewBox="0 0 960 570" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[900px]">
              <defs>
                <marker id="ag" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#00e87b" /></marker>
                <marker id="ab" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4d90ff" /></marker>
                <marker id="ao" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#ff8c3a" /></marker>
                <marker id="ap" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#9d7aff" /></marker>
                <marker id="ay" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#ffd84d" /></marker>
              </defs>

              {/* Columns — 6 columns */}
              <rect x="10" y="10" width="105" height="42" rx="5" fill="#0b0b0f" stroke="#00e87b" strokeWidth="1" />
              <text x="62" y="26" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">Agent / Client</text>
              <text x="62" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">JS SDK · Smart Account</text>
              <line x1="62" y1="52" x2="62" y2="540" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="155" y="10" width="110" height="42" rx="5" fill="#0b0b0f" stroke="#4d90ff" strokeWidth="1" />
              <text x="210" y="26" textAnchor="middle" fill="#4d90ff" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">API Server</text>
              <text x="210" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">Node middleware (npm)</text>
              <line x1="210" y1="52" x2="210" y2="540" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="305" y="10" width="115" height="42" rx="5" fill="#0b0b0f" stroke="#ffd84d" strokeWidth="1" />
              <text x="362" y="26" textAnchor="middle" fill="#ffd84d" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">ERC-8004</text>
              <text x="362" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">Identity · Reputation</text>
              <line x1="362" y1="52" x2="362" y2="540" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="460" y="10" width="110" height="42" rx="5" fill="#0b0b0f" stroke="#9d7aff" strokeWidth="1" />
              <text x="515" y="26" textAnchor="middle" fill="#9d7aff" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">x402 Facilitator</text>
              <text x="515" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">Hosted (Coinbase)</text>
              <line x1="515" y1="52" x2="515" y2="540" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="610" y="10" width="105" height="42" rx="5" fill="#0b0b0f" stroke="#00e87b" strokeWidth="1" />
              <text x="662" y="26" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">idOS Network</text>
              <text x="662" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">Kwil chain · Contracts</text>
              <line x1="662" y1="52" x2="662" y2="540" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="755" y="10" width="95" height="42" rx="5" fill="#0b0b0f" stroke="#ff8c3a" strokeWidth="1" />
              <text x="802" y="26" textAnchor="middle" fill="#ff8c3a" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="600">Base L2</text>
              <text x="802" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">EVM · USDC</text>
              <line x1="802" y1="52" x2="802" y2="540" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              {/* Phase 0: Agent Registration (one-time) */}
              <rect x="0" y="62" width="960" height="14" rx="0" fill="#ffd84d05" />
              <text x="480" y="72" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing=".12em">ONE-TIME SETUP — AGENT REGISTERS ON ERC-8004</text>

              <line x1="62" y1="90" x2="357" y2="90" stroke="#ffd84d" strokeWidth="1" markerEnd="url(#ay)" />
              <text x="210" y="84" textAnchor="middle" fill="#ffd84d" fontFamily="JetBrains Mono, monospace" fontSize="7">0a. register(agentURI) → mint identity NFT</text>

              <line x1="62" y1="108" x2="657" y2="108" stroke="#00e87b" strokeWidth="1" markerEnd="url(#ag)" />
              <text x="360" y="102" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7">0b. FaceSign → credential stored on idOS (encrypted)</text>

              {/* Phase 1: First call */}
              <rect x="0" y="124" width="960" height="14" rx="0" fill="#00e87b05" />
              <text x="480" y="134" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing=".12em">FIRST CALL — FULL VERIFICATION (AGENT IDENTITY → HUMAN IDENTITY → PAYMENT)</text>

              <line x1="62" y1="152" x2="205" y2="152" stroke="#4d90ff" strokeWidth="1" markerEnd="url(#ab)" />
              <text x="134" y="146" textAnchor="middle" fill="#4d90ff" fontFamily="JetBrains Mono, monospace" fontSize="7">1. GET /resource + agentId</text>

              <line x1="210" y1="170" x2="67" y2="170" stroke="#ff8c3a" strokeWidth="1" markerEnd="url(#ao)" />
              <text x="138" y="164" textAnchor="middle" fill="#ff8c3a" fontFamily="JetBrains Mono, monospace" fontSize="7">2. 402 + identity req + payment req</text>

              <line x1="62" y1="192" x2="205" y2="192" stroke="#4d90ff" strokeWidth="1" markerEnd="url(#ab)" />
              <text x="134" y="186" textAnchor="middle" fill="#ededf2" fontFamily="JetBrains Mono, monospace" fontSize="7">3. Retry: GET + agentId + dAG + payment</text>

              {/* Agent identity check box */}
              <rect x="150" y="202" width="270" height="50" rx="0" fill="#ffd84d04" stroke="#ffd84d" strokeWidth=".3" strokeDasharray="4,2" />
              <text x="285" y="213" textAnchor="middle" fill="#ffd84d" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="700" letterSpacing=".1em">AGENT IDENTITY (ERC-8004)</text>

              <line x1="210" y1="226" x2="357" y2="226" stroke="#ffd84d" strokeWidth=".8" markerEnd="url(#ay)" />
              <text x="284" y="222" textAnchor="middle" fill="#ffd84d" fontFamily="JetBrains Mono, monospace" fontSize="6.5">4. Verify agentId + reputation</text>
              <line x1="362" y1="240" x2="215" y2="240" stroke="#42424f" strokeWidth=".5" strokeDasharray="3,3" markerEnd="url(#ab)" />
              <text x="288" y="237" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6">agent ✓ (NFT + score)</text>

              {/* Human identity check box */}
              <rect x="150" y="258" width="570" height="50" rx="0" fill="#00e87b04" stroke="#00e87b" strokeWidth=".3" strokeDasharray="4,2" />
              <text x="435" y="269" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="700" letterSpacing=".1em">HUMAN IDENTITY (idOS)</text>

              <line x1="210" y1="282" x2="657" y2="282" stroke="#00e87b" strokeWidth=".8" markerEnd="url(#ag)" />
              <text x="434" y="278" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="6.5">5. Verify dAG + credential hash</text>
              <line x1="662" y1="296" x2="215" y2="296" stroke="#42424f" strokeWidth=".5" strokeDasharray="3,3" markerEnd="url(#ab)" />
              <text x="438" y="293" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6">human ✓ (hash only, 0 PII)</text>

              {/* Payment box */}
              <rect x="150" y="314" width="710" height="50" rx="0" fill="#9d7aff04" stroke="#9d7aff" strokeWidth=".3" strokeDasharray="4,2" />
              <text x="505" y="325" textAnchor="middle" fill="#9d7aff" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="700" letterSpacing=".1em">THEN PAYMENT SETTLES</text>

              <line x1="210" y1="338" x2="510" y2="338" stroke="#9d7aff" strokeWidth=".8" markerEnd="url(#ap)" />
              <text x="360" y="334" textAnchor="middle" fill="#9d7aff" fontFamily="JetBrains Mono, monospace" fontSize="6.5">6. Verify x402 payment</text>
              <line x1="515" y1="352" x2="797" y2="352" stroke="#ff8c3a" strokeWidth=".8" markerEnd="url(#ao)" />
              <text x="656" y="348" textAnchor="middle" fill="#ff8c3a" fontFamily="JetBrains Mono, monospace" fontSize="6.5">7. Settle USDC on Base</text>

              <line x1="210" y1="380" x2="67" y2="380" stroke="#00e87b" strokeWidth="1" markerEnd="url(#ag)" />
              <text x="138" y="374" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7">8. 200 OK + resource</text>

              {/* Reputation feedback */}
              <line x1="210" y1="398" x2="357" y2="398" stroke="#ffd84d" strokeWidth=".6" strokeDasharray="3,2" markerEnd="url(#ay)" />
              <text x="284" y="394" textAnchor="middle" fill="#ffd84d" fontFamily="JetBrains Mono, monospace" fontSize="6">9. Post reputation feedback</text>

              {/* Phase 2: Subsequent */}
              <rect x="0" y="414" width="960" height="14" rx="0" fill="#4d90ff05" />
              <text x="480" y="424" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing=".12em">SUBSEQUENT CALLS — INSTANT REUSE</text>

              <line x1="62" y1="446" x2="205" y2="446" stroke="#4d90ff" strokeWidth="1" markerEnd="url(#ab)" />
              <text x="134" y="440" textAnchor="middle" fill="#4d90ff" fontFamily="JetBrains Mono, monospace" fontSize="7">GET + agentId + dAG + payment</text>

              <line x1="210" y1="462" x2="357" y2="462" stroke="#ffd84d" strokeWidth=".6" markerEnd="url(#ay)" />
              <text x="284" y="458" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6">agent ✓ (cached reputation)</text>

              <line x1="210" y1="478" x2="657" y2="478" stroke="#00e87b" strokeWidth=".6" markerEnd="url(#ag)" />
              <text x="434" y="474" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6">human ✓ (existing credential, new dAG)</text>

              <line x1="210" y1="494" x2="510" y2="494" stroke="#9d7aff" strokeWidth=".6" markerEnd="url(#ap)" />
              <text x="360" y="490" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6">payment ✓</text>

              <line x1="210" y1="510" x2="67" y2="510" stroke="#00e87b" strokeWidth="1" markerEnd="url(#ag)" />
              <text x="138" y="504" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7">200 OK ⚡</text>

              <text x="480" y="536" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">Agent identity (ERC-8004) + human credential (idOS) + payment (x402). &lt;300ms on reuse.</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Stack Section ── */}
      <section id="stack" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <span className="mb-2 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-green">
              The Stack
            </span>
            <h2 className="mb-3 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Open protocols + idOS services
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              Open, vendor-neutral protocols separated from idOS-specific identity services.
              API operators depend only on the open layer.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {/* Open Protocols */}
            <div className="overflow-hidden rounded-lg border border-b1">
              <div className="flex items-center gap-1.5 border-b border-b1 bg-s2 px-3.5 py-2 font-mono text-[9.5px] font-bold uppercase tracking-wide text-blue">
                🔓 Open Protocols
              </div>
              <div className="divide-y divide-b1 bg-s1 px-3.5 py-3">
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">🤖</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">ERC-8004: Trustless Agents</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      On-chain Identity, Reputation & Validation registries for AI
                      agents. ERC-721-based agent identity NFTs. Live on mainnet.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        EIP-8004 · 8004.org
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">⚡</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">x402 Protocol</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      HTTP-native stablecoin micropayments. Open standard.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        npm: x402-middleware
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">🔗</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">Base L2</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      Coinbase EVM L2. Sub-cent gas, instant USDC settlement.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        ERC-20 USDC smart contract
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">🪪</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">idOS Network</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      Decentralized credential storage + access management.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        Kwil chain + EVM contracts
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">📋</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">W3C Verifiable Credentials</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      Industry-standard credential format.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        open standard
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* idOS Identity Services */}
            <div className="overflow-hidden rounded-lg border border-b1">
              <div className="flex items-center gap-1.5 border-b border-b1 bg-s2 px-3.5 py-2 font-mono text-[9.5px] font-bold uppercase tracking-wide text-green">
                🛡️ idOS Identity Services
              </div>
              <div className="divide-y divide-b1 bg-s1 px-3.5 py-3">
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">😊</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">idOS FaceSign</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      Biometric liveness auth. Keys derived in secure enclave.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        idOS hosted service
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">🔄</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">idOS Relay</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      KYC orchestrator → provider → credential → data deletion.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        idOS hosted service
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">🤖</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">Agent Delegation</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      ERC-4337 smart account session keys for autonomous dAGs.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        smart contract + SDK
                      </code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 py-2">
                  <span className="mt-0.5 shrink-0 text-sm">📡</span>
                  <div>
                    <h5 className="text-[11.5px] font-semibold text-t1">Trusted Agents Marketplace</h5>
                    <p className="text-[10px] leading-snug text-t3">
                      Service catalog, credentials, delegation, logs.{" "}
                      <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                        web app (proposed)
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative px-6 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[500px] rounded-full bg-green/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-4 font-serif text-4xl leading-snug text-t1 md:text-5xl">
            Verify once.
            <br />
            Access <span className="italic text-green">everything.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-t2">
            ERC-8004 gives every agent an on-chain identity. idOS gives every
            human a portable credential. Trusted Agents is the marketplace where
            they meet — and every identity-gated API becomes a single integration
            away.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_20px_var(--color-green-bright)]"
            >
              Interactive Prototype <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://docs.idos.network"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-b1 px-5 py-2.5 font-mono text-sm font-medium text-t2 transition-all hover:bg-s1 hover:border-b2 hover:text-t1"
            >
              idOS Docs
            </a>
            <a
              href="https://github.com/idos-network/idos-sdk-js"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-b1 px-5 py-2.5 font-mono text-sm font-medium text-t2 transition-all hover:bg-s1 hover:border-b2 hover:text-t1"
            >
              SDK
            </a>
            <a
              href="https://eips.ethereum.org/EIPS/eip-8004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-b1 px-5 py-2.5 font-mono text-sm font-medium text-t2 transition-all hover:bg-s1 hover:border-b2 hover:text-t1"
            >
              ERC-8004
            </a>
            <a
              href="https://www.x402.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-b1 px-5 py-2.5 font-mono text-sm font-medium text-t2 transition-all hover:bg-s1 hover:border-b2 hover:text-t1"
            >
              x402 Spec
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-b1 px-6 py-6 text-center">
        <span className="font-mono text-[9.5px] text-t4">
          idOS Trusted Agents — Built on ERC-8004 ·{" "}
          <a href="https://idos.network" target="_blank" rel="noopener noreferrer" className="text-t3 transition-colors hover:text-green">
            idos.network
          </a>{" "}
          ·{" "}
          <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener noreferrer" className="text-t3 transition-colors hover:text-green">
            ERC-8004
          </a>{" "}
          ·{" "}
          <a href="https://x402.org" target="_blank" rel="noopener noreferrer" className="text-t3 transition-colors hover:text-green">
            x402.org
          </a>
        </span>
      </footer>
    </>
  );
}
