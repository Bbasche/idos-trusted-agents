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
            <a href="#problem" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              Why
            </a>
            <a href="#compliance" className="font-mono text-xs tracking-wide text-t3 transition-colors hover:text-t1">
              Compliance Options
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
              Try Dashboard <span aria-hidden="true">→</span>
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
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-t3">
              Product Brief
            </span>
          </div>

          <h1 className="mb-6 font-serif text-5xl leading-[1.1] tracking-tight text-t1 md:text-7xl">
            idOS{" "}
            <span className="italic text-green">Trusted Agents</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl font-sans text-lg leading-relaxed text-t2 md:text-xl">
            An identity-gated API marketplace where AI agents pay with USDC
            and prove identity through{" "}
            <span className="text-t1">idOS</span> — verifiable credentials
            meet programmable payments.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 font-mono text-sm font-semibold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_20px_var(--color-green-bright)]"
            >
              Try the Interactive Dashboard
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#arch"
              className="inline-flex items-center gap-2 rounded-lg border border-b2 bg-s1 px-6 py-3 font-mono text-sm font-medium text-t2 transition-all hover:border-t4 hover:text-t1"
            >
              Technical Architecture
            </a>
          </div>
        </div>

        {/* Fade to bg */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </section>

      {/* ── Problem Section ── */}
      <section id="problem" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-green">
              The Problem
            </span>
            <h2 className="mb-4 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              x402 solved API payments.{" "}
              <span className="text-t3">Identity breaks every time.</span>
            </h2>
            <p className="text-lg text-t3">
              Agents can pay, but they cannot prove <em>who</em> is paying,
              whether the caller is a real person, or if they meet regulatory
              requirements. The identity layer is missing.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-xl border border-b1 bg-s1 p-6 transition-all hover:border-green/20 hover:bg-s2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-dim text-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mb-2 font-mono text-sm font-semibold text-t1">Zero-PII Compliance</h3>
              <p className="text-sm leading-relaxed text-t3">
                API operators verify identity requirements without ever
                receiving personally identifiable information. Credentials are
                hashed and checked on-chain.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl border border-b1 bg-s1 p-6 transition-all hover:border-blue/20 hover:bg-s2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-dim text-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mb-2 font-mono text-sm font-semibold text-t1">Verify Once, Reuse Everywhere</h3>
              <p className="text-sm leading-relaxed text-t3">
                A single idOS credential works across every API in the
                marketplace. No re-verification, no duplicate KYC, no
                friction for your agents.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl border border-b1 bg-s1 p-6 transition-all hover:border-purple/20 hover:bg-s2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-dim text-purple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="mb-2 font-mono text-sm font-semibold text-t1">Agent-Native + Delegated</h3>
              <p className="text-sm leading-relaxed text-t3">
                Humans verify once with FaceSign. Agents inherit delegated
                credentials and act autonomously — no browser popups, no
                wallet prompts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Compliance Options Section ── */}
      <section id="compliance" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-orange">
              For API Operators
            </span>
            <h2 className="mb-4 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Choose your compliance level
            </h2>
            <p className="text-lg text-t3">
              Every API sets its own identity bar. From basic proof of personhood
              to full KYC with access grants — you decide what callers must prove.
            </p>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            {/* POP */}
            <div className="rounded-xl border border-b1 bg-s1 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-dim font-mono text-xs font-bold text-green">
                  P
                </span>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-t1">POP</h3>
                  <p className="font-mono text-[11px] text-t4">Proof of Personhood</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-t3">
                Verify the caller is a real human via FaceSign liveness check.
                No personal data stored — just a cryptographic proof of humanity.
              </p>
              <div className="mt-4 rounded-md bg-s2 px-3 py-1.5">
                <span className="font-mono text-[11px] text-t4">Level: </span>
                <span className="font-mono text-[11px] text-green">Minimal</span>
              </div>
            </div>

            {/* UNIQUE */}
            <div className="rounded-xl border border-b1 bg-s1 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-dim font-mono text-xs font-bold text-blue">
                  U
                </span>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-t1">UNIQUE</h3>
                  <p className="font-mono text-[11px] text-t4">Uniqueness</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-t3">
                Ensure one-person-one-account. Prevents sybil attacks and
                rate-limit abuse while maintaining caller privacy.
              </p>
              <div className="mt-4 rounded-md bg-s2 px-3 py-1.5">
                <span className="font-mono text-[11px] text-t4">Level: </span>
                <span className="font-mono text-[11px] text-blue">Standard</span>
              </div>
            </div>

            {/* KYC */}
            <div className="rounded-xl border border-b1 bg-s1 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-dim font-mono text-xs font-bold text-orange">
                  K
                </span>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-t1">KYC</h3>
                  <p className="font-mono text-[11px] text-t4">Credential Hash Only</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-t3">
                Caller holds a verifiable KYC credential. The API checks a hash
                on-chain — never sees the underlying personal data.
              </p>
              <div className="mt-4 rounded-md bg-s2 px-3 py-1.5">
                <span className="font-mono text-[11px] text-t4">Level: </span>
                <span className="font-mono text-[11px] text-orange">Regulated</span>
              </div>
            </div>

            {/* KYC + AG */}
            <div className="rounded-xl border border-b1 bg-s1 p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-dim font-mono text-xs font-bold text-purple">
                  K+
                </span>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-t1">KYC + AG</h3>
                  <p className="font-mono text-[11px] text-t4">With Access Grant</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-t3">
                Full KYC plus an explicit access grant — the operator can
                request decrypted data if required by regulation, with user
                consent.
              </p>
              <div className="mt-4 rounded-md bg-s2 px-3 py-1.5">
                <span className="font-mono text-[11px] text-t4">Level: </span>
                <span className="font-mono text-[11px] text-purple">Full Compliance</span>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="rounded-xl border border-b1 bg-s1 p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
              <span className="font-mono text-xs text-t4">middleware-config.ts</span>
            </div>
            <pre className="overflow-x-auto rounded-lg bg-bg p-4 font-mono text-xs leading-relaxed">
              <code>
                <span className="text-purple">import</span>{" "}
                <span className="text-t1">{"{ idosMiddleware }"}</span>{" "}
                <span className="text-purple">from</span>{" "}
                <span className="text-green">{`"@idos/x402-middleware"`}</span>
                {"\n\n"}
                <span className="text-purple">export const</span>{" "}
                <span className="text-blue">complianceConfig</span>{" "}
                <span className="text-t3">=</span> {"{"}
                {"\n"}
                {"  "}<span className="text-t2">level</span>
                <span className="text-t3">:</span>{" "}
                <span className="text-green">{`"KYC"`}</span>
                <span className="text-t3">,</span>
                {"\n"}
                {"  "}<span className="text-t2">credentialType</span>
                <span className="text-t3">:</span>{" "}
                <span className="text-green">{`"idOS-KYC-v2"`}</span>
                <span className="text-t3">,</span>
                {"\n"}
                {"  "}<span className="text-t2">requireAccessGrant</span>
                <span className="text-t3">:</span>{" "}
                <span className="text-orange">false</span>
                <span className="text-t3">,</span>
                {"\n"}
                {"  "}<span className="text-t2">onVerified</span>
                <span className="text-t3">:</span>{" "}
                <span className="text-t3">(</span>
                <span className="text-t2">ctx</span>
                <span className="text-t3">)</span>{" "}
                <span className="text-purple">{"=>"}</span> {"{"}
                {"\n"}
                {"    "}<span className="text-t4">{"// credential hash verified on-chain"}</span>
                {"\n"}
                {"    "}<span className="text-purple">return</span>{" "}
                <span className="text-t2">ctx</span>
                <span className="text-t3">.</span>
                <span className="text-blue">proceed</span>
                <span className="text-t3">()</span>
                {"\n"}
                {"  }{"}
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── Request Flow Section ── */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-blue">
              Request Flow
            </span>
            <h2 className="font-serif text-3xl text-t1 md:text-4xl">
              Identity first. Payment second.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-0">
            {/* Step 1 */}
            <div className="flex flex-1 flex-col items-center rounded-xl border border-b1 bg-s1 p-5 text-center">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-s3 font-mono text-xs font-bold text-t3">
                1
              </span>
              <span className="font-mono text-xs font-semibold text-t1">Request</span>
              <span className="mt-1 font-mono text-[10px] text-t4">
                Agent calls API
              </span>
            </div>

            {/* Arrow */}
            <div className="hidden h-px w-6 bg-b2 md:block" />
            <div className="block h-6 w-px bg-b2 md:hidden" />

            {/* Step 2 */}
            <div className="flex flex-1 flex-col items-center rounded-xl border border-b1 bg-s1 p-5 text-center">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-s3 font-mono text-xs font-bold text-t3">
                2
              </span>
              <span className="font-mono text-xs font-semibold text-t1">402 Response</span>
              <span className="mt-1 font-mono text-[10px] text-t4">
                Payment + identity required
              </span>
            </div>

            <div className="hidden h-px w-6 bg-b2 md:block" />
            <div className="block h-6 w-px bg-b2 md:hidden" />

            {/* Step 3 — Highlighted */}
            <div className="flex flex-1 flex-col items-center rounded-xl border border-green/30 bg-green-dim p-5 text-center animate-pulse-ring">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-mid font-mono text-xs font-bold text-green">
                3
              </span>
              <span className="font-mono text-xs font-semibold text-green">Verify Identity</span>
              <span className="mt-1 font-mono text-[10px] text-t3">
                idOS credential check
              </span>
            </div>

            <div className="hidden h-px w-6 bg-b2 md:block" />
            <div className="block h-6 w-px bg-b2 md:hidden" />

            {/* Step 4 */}
            <div className="flex flex-1 flex-col items-center rounded-xl border border-b1 bg-s1 p-5 text-center">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-s3 font-mono text-xs font-bold text-t3">
                4
              </span>
              <span className="font-mono text-xs font-semibold text-t1">Settle Payment</span>
              <span className="mt-1 font-mono text-[10px] text-t4">
                USDC via x402
              </span>
            </div>

            <div className="hidden h-px w-6 bg-b2 md:block" />
            <div className="block h-6 w-px bg-b2 md:hidden" />

            {/* Step 5 */}
            <div className="flex flex-1 flex-col items-center rounded-xl border border-b1 bg-s1 p-5 text-center">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-s3 font-mono text-xs font-bold text-t3">
                5
              </span>
              <span className="font-mono text-xs font-semibold text-t1">Resource Served</span>
              <span className="mt-1 font-mono text-[10px] text-t4">
                API response delivered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture Section ── */}
      <section id="arch" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-purple">
              Architecture
            </span>
            <h2 className="mb-4 font-serif text-3xl leading-snug text-t1 md:text-4xl">
              Sequence diagram
            </h2>
            <p className="text-lg text-t3">
              The full request lifecycle — from agent call to resource delivery.
            </p>
          </div>

          {/* Inline SVG Sequence Diagram */}
          <div className="overflow-x-auto rounded-xl border border-b1 bg-s1 p-6 md:p-10">
            <svg viewBox="0 0 900 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto w-full min-w-[700px]">
              {/* Column labels */}
              <rect x="50" y="20" width="120" height="36" rx="8" fill="#111116" stroke="#242434" strokeWidth="1" />
              <text x="110" y="43" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#ededf2">Agent / Client</text>

              <rect x="230" y="20" width="120" height="36" rx="8" fill="#111116" stroke="#242434" strokeWidth="1" />
              <text x="290" y="43" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#ededf2">API Server</text>

              <rect x="410" y="20" width="140" height="36" rx="8" fill="#111116" stroke="#242434" strokeWidth="1" />
              <text x="480" y="43" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#ededf2">x402 Facilitator</text>

              <rect x="610" y="20" width="120" height="36" rx="8" fill="#00e87b12" stroke="#00e87b28" strokeWidth="1" />
              <text x="670" y="43" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#00e87b">idOS Network</text>

              <rect x="790" y="20" width="80" height="36" rx="8" fill="#111116" stroke="#242434" strokeWidth="1" />
              <text x="830" y="43" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" fill="#ededf2">Base L2</text>

              {/* Lifelines */}
              <line x1="110" y1="56" x2="110" y2="500" stroke="#242434" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="290" y1="56" x2="290" y2="500" stroke="#242434" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="480" y1="56" x2="480" y2="500" stroke="#242434" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="670" y1="56" x2="670" y2="500" stroke="#242434" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="830" y1="56" x2="830" y2="500" stroke="#242434" strokeWidth="1" strokeDasharray="4 4" />

              {/* Step 1: Request */}
              <line x1="110" y1="90" x2="290" y2="90" stroke="#6a6a80" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
              <text x="200" y="84" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#9c9cb5">GET /api/resource</text>

              {/* Step 2: 402 */}
              <line x1="290" y1="130" x2="110" y2="130" stroke="#ff8c3a" strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
              <text x="200" y="124" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#ff8c3a">402 Payment Required</text>
              <text x="200" y="136" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6a6a80">+ identity requirements</text>

              {/* Step 3: Agent sends payment + credential */}
              <line x1="110" y1="180" x2="290" y2="180" stroke="#4d90ff" strokeWidth="1.5" markerEnd="url(#arrowBlue)" />
              <text x="200" y="174" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4d90ff">Payment + Credential</text>

              {/* Step 4: Server forwards to facilitator */}
              <line x1="290" y1="220" x2="480" y2="220" stroke="#6a6a80" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
              <text x="385" y="214" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#9c9cb5">Verify request</text>

              {/* Step 5: Facilitator checks idOS */}
              <line x1="480" y1="260" x2="670" y2="260" stroke="#00e87b" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
              <text x="575" y="254" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#00e87b">Check credential</text>

              {/* Step 6: idOS response */}
              <line x1="670" y1="300" x2="480" y2="300" stroke="#00e87b" strokeWidth="1.5" strokeDasharray="6 3" markerEnd="url(#arrowGreen)" />
              <text x="575" y="294" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#00e87b">Credential valid</text>

              {/* Step 7: Settle payment on Base */}
              <line x1="480" y1="340" x2="830" y2="340" stroke="#9d7aff" strokeWidth="1.5" markerEnd="url(#arrowPurple)" />
              <text x="655" y="334" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#9d7aff">Settle USDC payment</text>

              {/* Step 8: Payment confirmed */}
              <line x1="830" y1="380" x2="480" y2="380" stroke="#9d7aff" strokeWidth="1.5" strokeDasharray="6 3" markerEnd="url(#arrowPurple)" />
              <text x="655" y="374" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#9d7aff">Payment confirmed</text>

              {/* Step 9: Facilitator signals server */}
              <line x1="480" y1="420" x2="290" y2="420" stroke="#6a6a80" strokeWidth="1.5" strokeDasharray="6 3" markerEnd="url(#arrowGray)" />
              <text x="385" y="414" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#9c9cb5">Verified + Paid</text>

              {/* Step 10: Server responds */}
              <line x1="290" y1="460" x2="110" y2="460" stroke="#00e87b" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
              <text x="200" y="454" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#00e87b">200 OK + Resource</text>

              {/* Arrow markers */}
              <defs>
                <marker id="arrowGray" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="none" stroke="#6a6a80" strokeWidth="1.5" />
                </marker>
                <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="none" stroke="#00e87b" strokeWidth="1.5" />
                </marker>
                <marker id="arrowOrange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="none" stroke="#ff8c3a" strokeWidth="1.5" />
                </marker>
                <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="none" stroke="#4d90ff" strokeWidth="1.5" />
                </marker>
                <marker id="arrowPurple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L8,3 L0,6" fill="none" stroke="#9d7aff" strokeWidth="1.5" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Stack Section ── */}
      <section id="stack" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block font-mono text-xs font-medium uppercase tracking-widest text-yellow">
              Stack
            </span>
            <h2 className="font-serif text-3xl text-t1 md:text-4xl">
              Built on open standards
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Open Protocols */}
            <div className="rounded-xl border border-b1 bg-s1 p-6">
              <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-t3">
                Open Protocols
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-dim font-mono text-xs font-bold text-orange">
                    402
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">x402</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      HTTP-native payment protocol. Agents negotiate and settle
                      micropayments for API calls automatically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-dim font-mono text-xs font-bold text-blue">
                    L2
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">Base L2</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      Ethereum L2 for fast, cheap USDC settlement. Low fees make
                      per-request micropayments viable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-dim font-mono text-xs font-bold text-green">
                    id
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">idOS Network</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      Decentralized identity storage. Encrypted credentials with
                      user-controlled access grants.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-dim font-mono text-xs font-bold text-purple">
                    VC
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">W3C VCs</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      Verifiable Credentials standard. Tamper-proof, portable
                      identity claims issued by trusted parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* idOS Identity Services */}
            <div className="rounded-xl border border-b1 bg-s1 p-6">
              <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-t3">
                idOS Identity Services
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-dim">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e87b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21a8 8 0 1 0-16 0" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">FaceSign</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      Biometric liveness verification. Proves human presence
                      without storing biometric data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-dim">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4d90ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h16M4 6h16M4 18h16" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">Relay</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      Gasless transaction relay. Users interact with idOS without
                      needing native tokens for gas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-dim">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9d7aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" y1="8" x2="19" y2="14" />
                      <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">Agent Delegation</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      Grant AI agents scoped permission to use your credentials.
                      Revocable, time-bound, auditable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-s2 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-dim">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff8c3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-t1">Marketplace</h4>
                    <p className="mt-1 text-xs leading-relaxed text-t3">
                      Discover identity-gated APIs. Browse, compare compliance
                      requirements, and connect agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[300px] w-[500px] rounded-full bg-green/[0.03] blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="mb-4 font-serif text-4xl text-t1 md:text-5xl">
              Verify once.{" "}
              <span className="italic text-green">Access everything.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-md text-lg text-t3">
              Start building with identity-gated APIs today. Explore the
              interactive dashboard or dive into the docs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-green px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-all hover:brightness-110 hover:shadow-[0_0_20px_var(--color-green-bright)]"
              >
                Try the Dashboard
              </Link>
              <a
                href="https://docs.idos.network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-b2 bg-s1 px-5 py-2.5 font-mono text-sm font-medium text-t2 transition-all hover:border-t4 hover:text-t1"
              >
                idOS Docs
              </a>
              <a
                href="https://github.com/idos-network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-b2 bg-s1 px-5 py-2.5 font-mono text-sm font-medium text-t2 transition-all hover:border-t4 hover:text-t1"
              >
                SDK
              </a>
              <a
                href="https://www.x402.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-b2 bg-s1 px-5 py-2.5 font-mono text-sm font-medium text-t2 transition-all hover:border-t4 hover:text-t1"
              >
                x402 Spec
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-b1 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
            <span className="font-mono text-xs text-t4">
              idOS Trusted Agents — Product Brief
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://docs.idos.network"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-t4 transition-colors hover:text-t2"
            >
              Docs
            </a>
            <a
              href="https://github.com/idos-network"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-t4 transition-colors hover:text-t2"
            >
              GitHub
            </a>
            <a
              href="https://www.x402.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-t4 transition-colors hover:text-t2"
            >
              x402
            </a>
            <a
              href="https://idos.network"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-t4 transition-colors hover:text-t2"
            >
              idOS Network
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
