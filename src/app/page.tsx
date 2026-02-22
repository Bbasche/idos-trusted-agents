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
              Product Brief
            </span>
            <span className="font-mono text-[11px] text-t3">
              Identity-Gated API Marketplace
            </span>
          </div>

          <h1 className="mb-6 font-serif text-5xl leading-[1.06] tracking-tight text-t1 md:text-7xl">
            idOS{" "}
            <span className="italic text-green">Trusted Agents</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl font-sans text-base leading-relaxed text-t2 md:text-lg">
            An identity-gated API marketplace where AI agents pay with USDC
            and prove their principal&apos;s identity through idOS — once. KYC,
            proof-of-personhood, and uniqueness credentials are portable, private,
            and reusable across every API in the ecosystem.
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
              x402 solved payments.
              <br />
              <span className="text-t3">Identity breaks every time.</span>
            </h2>
            <p className="text-sm leading-relaxed text-t2">
              AI agents can pay for any API with stablecoins. But when those APIs
              need KYC, age verification, or Sybil resistance — the agent hits a wall.
              Worse: every API demands re-verification from scratch. Credit checks,
              background checks, age gates — each one siloed.
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
                APIs verify credential hashes — never seeing, storing, or decrypting
                personal data. All access grants auto-expire.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-s1 p-6 transition-colors hover:bg-s2">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-blue bg-blue-dim text-sm">
                ♻️
              </div>
              <h3 className="mb-1 text-sm font-semibold text-t1">Verify Once, Reuse Everywhere</h3>
              <p className="text-xs leading-relaxed text-t2">
                One KYC credential powers every API. A PoP check from one service
                satisfies the next. No re-verification, no new accounts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-s1 p-6 transition-colors hover:bg-s2">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-orange bg-orange-dim text-sm">
                🤖
              </div>
              <h3 className="mb-1 text-sm font-semibold text-t1">Agent-Native + Delegated</h3>
              <p className="text-xs leading-relaxed text-t2">
                Agents create scoped dAGs autonomously via smart account delegation.
                Session keys are limited — they can never decrypt data or move funds.
              </p>
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
                User deploys ERC-4337 smart account → signs{" "}
                <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                  delegateAGSigning
                </code>{" "}
                scoping which credential types and APIs → agent gets session key → creates
                time-limited dAGs autonomously → user can revoke from idOS dashboard.
              </p>
            </div>
            <div className="rounded-lg border border-b1 bg-s1 p-4">
              <div className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-blue">
                App Fleet Delegation
              </div>
              <p className="text-[11px] leading-relaxed text-t2">
                Platform deploys smart account → user verifies through platform&apos;s idOS
                integration → user signs{" "}
                <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                  delegateToPlatform
                </code>{" "}
                scoping credentials → platform&apos;s agent fleet creates dAGs per-user → users
                can view/revoke from idOS dashboard.
              </p>
            </div>
            <div className="rounded-lg border border-b1 bg-s1 p-4">
              <div className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-purple">
                Developer Agent Delegation
              </div>
              <p className="text-[11px] leading-relaxed text-t2">
                Developer deploys ERC-4337 smart account → signs{" "}
                <code className="rounded border border-b1 bg-s3 px-1 py-0.5 font-mono text-[9px] text-green">
                  delegateDevAgent
                </code>{" "}
                scoping developer API permissions (infra, signing, publishing) → coding agent
                gets session key → creates dAGs per API call → developer can revoke from
                idOS dashboard.
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
            &nbsp;&nbsp;&nbsp;&nbsp;identity: {"{"}
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
              If the credential check fails, no USDC is transferred — no refunds needed,
              no failed transactions. This is true for both personal agents and platform
              agent fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-b1 bg-b1 md:grid-cols-5">
            {/* Step 1 */}
            <div className="bg-s1 p-5 text-center">
              <div className="mb-1.5 text-xl">📡</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-t4">Step 1</div>
              <h3 className="mt-1 text-[11px] font-semibold text-t1">Request</h3>
              <p className="mt-0.5 text-[10px] text-t2">Agent sends GET/POST to x402-enabled endpoint</p>
            </div>
            {/* Step 2 */}
            <div className="bg-s1 p-5 text-center">
              <div className="mb-1.5 text-xl">🚧</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-t4">Step 2</div>
              <h3 className="mt-1 text-[11px] font-semibold text-t1">402 + Requirements</h3>
              <p className="mt-0.5 text-[10px] text-t2">Server returns payment terms + identity requirements</p>
            </div>
            {/* Step 3 — Highlighted */}
            <div className="bg-green-dim p-5 text-center">
              <div className="mb-1.5 text-xl">🪪</div>
              <div className="font-mono text-[8px] uppercase tracking-wide text-green">Step 3</div>
              <h3 className="mt-1 text-[11px] font-semibold text-green">Verify Identity</h3>
              <p className="mt-0.5 text-[10px] text-t2">
                dAG + credential hash verified on idOS <strong className="text-t1">before</strong> payment
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
      <section id="arch" className="relative border-y border-b1 bg-s1 px-6 py-24 md:py-32">
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
            <svg viewBox="0 0 820 520" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[780px]">
              <defs>
                <marker id="ag" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#00e87b" /></marker>
                <marker id="ab" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#4d90ff" /></marker>
                <marker id="ao" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#ff8c3a" /></marker>
                <marker id="ap" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="#9d7aff" /></marker>
              </defs>

              {/* Columns */}
              <rect x="10" y="10" width="110" height="42" rx="5" fill="#0b0b0f" stroke="#00e87b" strokeWidth="1" />
              <text x="65" y="26" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">Agent / Client</text>
              <text x="65" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7">JS SDK · Smart Account</text>
              <line x1="65" y1="52" x2="65" y2="490" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="175" y="10" width="120" height="42" rx="5" fill="#0b0b0f" stroke="#4d90ff" strokeWidth="1" />
              <text x="235" y="26" textAnchor="middle" fill="#4d90ff" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">API Server</text>
              <text x="235" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7">Node middleware (npm)</text>
              <line x1="235" y1="52" x2="235" y2="490" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="355" y="10" width="120" height="42" rx="5" fill="#0b0b0f" stroke="#9d7aff" strokeWidth="1" />
              <text x="415" y="26" textAnchor="middle" fill="#9d7aff" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">x402 Facilitator</text>
              <text x="415" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7">Hosted service (Coinbase)</text>
              <line x1="415" y1="52" x2="415" y2="490" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="535" y="10" width="100" height="42" rx="5" fill="#0b0b0f" stroke="#00e87b" strokeWidth="1" />
              <text x="585" y="26" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">idOS Network</text>
              <text x="585" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7">Kwil chain · Contracts</text>
              <line x1="585" y1="52" x2="585" y2="490" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              <rect x="695" y="10" width="100" height="42" rx="5" fill="#0b0b0f" stroke="#ff8c3a" strokeWidth="1" />
              <text x="745" y="26" textAnchor="middle" fill="#ff8c3a" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">Base L2</text>
              <text x="745" y="42" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7">EVM · USDC contract</text>
              <line x1="745" y1="52" x2="745" y2="490" stroke="#242434" strokeWidth=".5" strokeDasharray="3,3" />

              {/* Phase 1: First call */}
              <rect x="0" y="62" width="820" height="14" rx="0" fill="#00e87b05" />
              <text x="410" y="72" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing=".12em">FIRST CALL — FULL VERIFICATION (IDENTITY → PAYMENT)</text>

              <line x1="65" y1="90" x2="230" y2="90" stroke="#4d90ff" strokeWidth="1" markerEnd="url(#ab)" />
              <text x="147" y="84" textAnchor="middle" fill="#4d90ff" fontFamily="JetBrains Mono, monospace" fontSize="7.5">1. GET /resource</text>

              <line x1="235" y1="108" x2="70" y2="108" stroke="#ff8c3a" strokeWidth="1" markerEnd="url(#ao)" />
              <text x="152" y="102" textAnchor="middle" fill="#ff8c3a" fontFamily="JetBrains Mono, monospace" fontSize="7.5">2. 402 + identity req + payment req</text>

              <rect x="10" y="118" width="110" height="36" rx="4" fill="#00e87b06" stroke="#00e87b" strokeWidth=".5" />
              <text x="65" y="130" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7">3. FaceSign → Relay →</text>
              <text x="65" y="144" textAnchor="middle" fill="#ff8c3a" fontFamily="JetBrains Mono, monospace" fontSize="7">KYC provider → credential</text>

              <line x1="65" y1="164" x2="580" y2="164" stroke="#00e87b" strokeWidth="1" markerEnd="url(#ag)" />
              <text x="322" y="158" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7.5">4. Credential stored on idOS (encrypted)</text>

              <line x1="65" y1="186" x2="230" y2="186" stroke="#4d90ff" strokeWidth="1" markerEnd="url(#ab)" />
              <text x="147" y="180" textAnchor="middle" fill="#ededf2" fontFamily="JetBrains Mono, monospace" fontSize="7.5">5. Retry: GET + dAG + payment</text>

              {/* Identity check box */}
              <rect x="170" y="196" width="480" height="56" rx="0" fill="#00e87b04" stroke="#00e87b" strokeWidth=".3" strokeDasharray="4,2" />
              <text x="410" y="207" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" letterSpacing=".1em">IDENTITY VERIFIED FIRST</text>

              <line x1="235" y1="220" x2="580" y2="220" stroke="#00e87b" strokeWidth=".8" markerEnd="url(#ag)" />
              <text x="407" y="216" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7">6. Verify dAG + credential hash</text>
              <line x1="585" y1="236" x2="240" y2="236" stroke="#42424f" strokeWidth=".5" strokeDasharray="3,3" markerEnd="url(#ab)" />
              <text x="412" y="233" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">identity ✓ (hash only, 0 PII)</text>

              {/* Payment box */}
              <rect x="170" y="260" width="590" height="54" rx="0" fill="#9d7aff04" stroke="#9d7aff" strokeWidth=".3" strokeDasharray="4,2" />
              <text x="465" y="271" textAnchor="middle" fill="#9d7aff" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" letterSpacing=".1em">THEN PAYMENT SETTLES</text>

              <line x1="235" y1="284" x2="410" y2="284" stroke="#9d7aff" strokeWidth=".8" markerEnd="url(#ap)" />
              <text x="322" y="280" textAnchor="middle" fill="#9d7aff" fontFamily="JetBrains Mono, monospace" fontSize="7">7. Verify x402 payment</text>
              <line x1="415" y1="298" x2="740" y2="298" stroke="#ff8c3a" strokeWidth=".8" markerEnd="url(#ao)" />
              <text x="577" y="294" textAnchor="middle" fill="#ff8c3a" fontFamily="JetBrains Mono, monospace" fontSize="7">8. Settle USDC on Base</text>

              <line x1="235" y1="330" x2="70" y2="330" stroke="#00e87b" strokeWidth="1" markerEnd="url(#ag)" />
              <text x="152" y="324" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7.5">9. 200 OK + resource</text>

              {/* Phase 2: Subsequent */}
              <rect x="0" y="348" width="820" height="14" rx="0" fill="#4d90ff05" />
              <text x="410" y="358" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing=".12em">SUBSEQUENT CALLS — INSTANT REUSE (SAME FOR PERSONAL AGENTS + PLATFORM FLEETS)</text>

              <line x1="65" y1="380" x2="230" y2="380" stroke="#4d90ff" strokeWidth="1" markerEnd="url(#ab)" />
              <text x="147" y="374" textAnchor="middle" fill="#4d90ff" fontFamily="JetBrains Mono, monospace" fontSize="7.5">GET + dAG + payment (1 request)</text>

              <line x1="235" y1="396" x2="580" y2="396" stroke="#00e87b" strokeWidth=".6" markerEnd="url(#ag)" />
              <text x="407" y="392" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">identity ✓ (existing credential, new dAG)</text>

              <line x1="235" y1="412" x2="410" y2="412" stroke="#9d7aff" strokeWidth=".6" markerEnd="url(#ap)" />
              <text x="322" y="408" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">payment ✓</text>

              <line x1="235" y1="430" x2="70" y2="430" stroke="#00e87b" strokeWidth="1" markerEnd="url(#ag)" />
              <text x="152" y="424" textAnchor="middle" fill="#00e87b" fontFamily="JetBrains Mono, monospace" fontSize="7.5">200 OK ⚡</text>

              <text x="410" y="460" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">0 verification. Same credential. New scoped dAG. &lt;300ms.</text>
              <text x="410" y="475" textAnchor="middle" fill="#42424f" fontFamily="JetBrains Mono, monospace" fontSize="6.5">Personal agents: delegated session key. Platform agents: fleet delegation per-user.</text>
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
            Every identity-gated API — credit bureaus, background checks, age gates,
            regulated filings — becomes a potential idOS integration. Trusted Agents is
            the marketplace that ties it all together.
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
          idOS Trusted Agents — Product Brief ·{" "}
          <a href="https://idos.network" target="_blank" rel="noopener noreferrer" className="text-t3 transition-colors hover:text-green">
            idos.network
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
