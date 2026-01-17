import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ACCESS_GATE_PHASES,
  ASK,
  BUSINESS_MODEL,
  CORE_CLAIMS,
  DECK_LINKS,
  DECK_META,
  MOAT_POINTS,
  PARTNERS,
  PRODUCT_POINTS,
  PROGRAMMATIC_FUNDING_SCHEDULE,
  PROBLEM_POINTS,
  STRATEGY_PHASES,
  SLIDE_NAV,
  SOLUTION_POINTS,
  TEAM,
  THESIS,
  TOKENOMICS,
  TRACTION_POINTS,
} from './deckContent';
import { DeckBackground } from './components/DeckBackground';
import { DeckSidebar } from './components/DeckSidebar';
import { GlassCard } from './components/GlassCard';
import { SlideSection } from './components/SlideSection';
import { AlphaDecayTimeline } from './visuals/AlphaDecayTimeline';
import { PipelineFlow } from './visuals/PipelineFlow';
import { MoatMatrix } from './visuals/MoatMatrix';
import { RoadmapTimeline } from './visuals/RoadmapTimeline';

const SectionTitle: React.FC<{ kicker?: string; title: string; subtitle?: string }> = ({
  kicker,
  title,
  subtitle,
}) => (
  <div>
    {kicker ? (
      <div className="text-[13px] tracking-wide text-white/60">{kicker}</div>
    ) : null}
    <h2 className="mt-2 text-[30px] leading-tight text-white md:text-[44px]">
      {title}
    </h2>
    {subtitle ? (
      <div className="mt-3 max-w-2xl text-[14px] leading-7 text-white/70 md:text-[15px]">
        {subtitle}
      </div>
    ) : null}
  </div>
);

const BulletList: React.FC<{ items: readonly string[] }> = ({ items }) => (
  <ul className="mt-6 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-[14px] leading-7 text-white/85">
        <span className="mt-[8px] h-1 w-1 flex-none rounded-full bg-white/60" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const BadgeRow: React.FC<{ items: readonly string[] }> = ({ items }) => (
  <div className="mt-5 flex flex-wrap gap-2">
    {items.map((x) => (
      <span
        key={x}
        className="border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70"
      >
        {x}
      </span>
    ))}
  </div>
);

const MetricCard: React.FC<{ label: string; value: string; note?: string }> = ({
  label,
  value,
  note,
}) => {
  const isLong = value.length > 16;
  const valueClasses = isLong
    ? 'mt-2 text-[26px] leading-tight text-white md:text-[32px] whitespace-normal tabular-nums'
    : 'mt-2 text-[32px] leading-tight text-white md:text-[40px] whitespace-normal tabular-nums';

  return (
    <GlassCard className="p-6">
      <div className="text-[12px] text-white/60">{label}</div>
      <div className={valueClasses}>
        {value}
      </div>
      {note ? <div className="mt-3 text-[12px] leading-6 text-white/60">{note}</div> : null}
    </GlassCard>
  );
};

export const DeckApp: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(SLIDE_NAV[0].id);

  const navItems = useMemo(() => SLIDE_NAV, []);

  const scrollTo = (id: string) => {
    const root = scrollRef.current;
    const el = root?.querySelector<HTMLElement>(`#${id}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-deck-slide]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        const id = visible?.target?.id;
        if (id) setActiveId(id);
      },
      { root, threshold: [0.3, 0.5, 0.7] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-void text-white">
      <DeckBackground />

      <DeckSidebar items={navItems} activeId={activeId} onNavigate={scrollTo} />

      <div className="md:pl-64">
        <div
          ref={scrollRef}
          className="h-[calc(100vh-56px)] overflow-y-auto scroll-smooth snap-y snap-mandatory md:h-screen"
        >
          {/* Slide 1 */}
          <SlideSection id="s1">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3">
                  <img
                    src="/better-isotype-light.svg"
                    alt="BETTER"
                    className="h-10 w-auto"
                  />
                  <div className="text-[13px] tracking-wide text-white/60">BETTER</div>
                </div>

                <h1 className="mt-6 text-[42px] leading-tight text-white md:text-[64px]">
                  {DECK_META.title}
                </h1>

                <div className="mt-4 text-[13px] tracking-[0.2em] text-white/70">
                  {DECK_META.tagline}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="border border-white/20 bg-white/5 px-4 py-2 text-[13px] text-white">
                    {DECK_META.raiseLine}
                  </span>
                  <a
                    href={DECK_META.calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 bg-white/10 px-4 py-2 text-[13px] text-white hover:bg-white/15"
                  >
                    Get in touch
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href={DECK_META.xUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 bg-transparent px-3 py-2 text-[13px] text-white/80 hover:bg-white/5"
                  >
                    X (formerly Twitter)
                  </a>
                  <a
                    href={DECK_META.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 bg-transparent px-3 py-2 text-[13px] text-white/80 hover:bg-white/5"
                  >
                    Telegram
                  </a>
                  <a
                    href={DECK_META.thesisUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 bg-transparent px-3 py-2 text-[13px] text-white/80 hover:bg-white/5"
                  >
                    Thesis and genesis
                  </a>
                  <a
                    href={DECK_META.openservUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 bg-transparent px-3 py-2 text-[13px] text-white/80 hover:bg-white/5"
                  >
                    OpenServ
                  </a>
                </div>

                <div className="mt-6 text-[13px] leading-7 text-white/65">
                  <div>
                    <a className="text-white/90" href={DECK_META.siteUrl} target="_blank" rel="noreferrer">
                      {DECK_META.siteUrl}
                    </a>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a className="text-white/85 hover:text-white" href={DECK_META.xUrl} target="_blank" rel="noreferrer">
                      {DECK_META.handle}
                    </a>
                    <span className="text-white/30">•</span>
                    <a className="text-white/75 hover:text-white" href={DECK_META.telegramUrl} target="_blank" rel="noreferrer">
                      t.me/betterterminal
                    </a>
                    <span className="text-white/30">•</span>
                    <a className="text-white/75 hover:text-white" href={DECK_META.emailUrl}>
                      {DECK_META.email}
                    </a>
                  </div>
                </div>

                <BadgeRow items={PARTNERS} />
              </div>

              <div className="md:col-span-5">
                <GlassCard className="p-6">
                  <div className="text-[13px] text-white/70">What BETTER is</div>
                  <div className="mt-3 text-[15px] leading-7 text-white">
                    A rails-first Terminal and Vault system that turns prediction market signals into automated yield.
                  </div>
                  <div className="mt-6 grid gap-3">
                    <div className="border border-white/10 bg-black/25 p-4">
                      <div className="text-[12px] text-white/60">Terminal</div>
                      <div className="mt-1 text-[14px] text-white">Elite wallet signal feed</div>
                    </div>
                    <div className="border border-white/10 bg-black/25 p-4">
                      <div className="text-[12px] text-white/60">Vaults</div>
                      <div className="mt-1 text-[14px] text-white">Agents trade for depositors</div>
                    </div>
                    <div className="border border-white/10 bg-black/25 p-4">
                      <div className="text-[12px] text-white/60">Infrastructure</div>
                      <div className="mt-1 text-[14px] text-white">Rust high-frequency trading stack and co-location</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </SlideSection>

          {/* Slide 2 */}
          <SlideSection id="s2">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <SectionTitle
                  kicker="Problem"
                  title="Truth-settled markets. Latency makes execution unfair."
                  subtitle="Prediction markets are growing, but the edge window is measured in milliseconds."
                />
                <BulletList items={PROBLEM_POINTS} />

                <GlassCard className="mt-8 p-6">
                  <div className="text-[13px] text-white/70">The retail reality</div>
                  <div className="mt-3 text-[14px] leading-7 text-white/80">
                    A delayed signal becomes stale odds. BETTER is built to compete at machine speed.
                  </div>
                </GlassCard>
              </div>

              <div className="md:col-span-5">
                <AlphaDecayTimeline />
              </div>
            </div>
          </SlideSection>

          {/* Slide 3 */}
          <SlideSection id="s3">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <SectionTitle
                  kicker="Solution"
                  title="Agents and high-frequency trading execution for prediction market alpha"
                  subtitle="BETTER turns informed flow into bounded, machine-executable action — then executes deterministically." 
                />
                <BulletList items={SOLUTION_POINTS} />

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  <GlassCard className="p-5">
                    <div className="text-[12px] text-white/60">Powered by</div>
                    <a
                      href={DECK_META.openservUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-[14px] text-white hover:underline"
                    >
                      OpenServ bounded reasoning
                    </a>
                    <div className="mt-2 text-[12px] leading-6 text-white/60">
                      Bounded Mermaid graphs reduce drift and improve reliability and cost efficiency.
                    </div>
                  </GlassCard>
                  <GlassCard className="p-5">
                    <div className="text-[12px] text-white/60">Built in</div>
                    <div className="mt-2 text-[14px] text-white">Rust for high-frequency trading</div>
                    <div className="mt-2 text-[12px] leading-6 text-white/60">
                      Deterministic execution and routing engineered for low tick-to-trade latency.
                    </div>
                  </GlassCard>
                </div>
              </div>

              <div className="md:col-span-5">
                <PipelineFlow />
              </div>
            </div>
          </SlideSection>

          {/* Slide 4 */}
          <SlideSection id="s4">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <SectionTitle
                  kicker="Product"
                  title="Terminal and Vaults, designed as one system"
                  subtitle="A signal feed for decision quality — and vault execution that runs while you sleep."
                />
                <BulletList items={PRODUCT_POINTS} />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <MetricCard label="Signals per day" value={CORE_CLAIMS.signalsPerDay} note="Elite wallet trade setups" />
                  <MetricCard label="Tick to trade" value={CORE_CLAIMS.latency} note={CORE_CLAIMS.latencyDefinition} />
                  <div className="md:col-span-2">
                    <MetricCard label="Markets" value="3" note="Polymarket • Kalshi • Opinion" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <GlassCard className="p-6">
                  <div className="text-[13px] text-white/70">Execution discipline</div>
                  <div className="mt-3 space-y-3 text-[14px] leading-7 text-white/80">
                    <div>• Inference is bounded; execution is deterministic.</div>
                    <div>• Admissibility, edge tests, caps, and an idempotent order lifecycle.</div>
                    <div>• If inference outputs are malformed, abstain (never unsafe trades).</div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </SlideSection>

          {/* Slide 5 */}
          <SlideSection id="s5">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <SectionTitle
                  kicker="Why now"
                  title="The structural rotation is underway"
                  subtitle="Capital is migrating from opaque perpetual futures games towards verifiable event settlement, but speed remains the gate." 
                />

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  <GlassCard className="p-6">
                    <div className="text-[12px] text-white/60">Macro shift</div>
                    <div className="mt-2 text-[14px] leading-7 text-white">
                      “Casino” fatigue in perpetual futures drives demand for truth-settled markets.
                    </div>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <div className="text-[12px] text-white/60">Tech shift</div>
                    <div className="mt-2 text-[14px] leading-7 text-white">
                      Central limit order book and on-chain data, plus agents, enable retail-grade automation.
                    </div>
                  </GlassCard>
                  <GlassCard className="p-6 md:col-span-2">
                    <div className="text-[12px] text-white/60">BETTER wedge</div>
                    <div className="mt-2 text-[14px] leading-7 text-white">
                      Unify signal quality and machine-speed execution across Polymarket, Kalshi, and Opinion.
                    </div>
                  </GlassCard>
                </div>
              </div>
              <div className="md:col-span-5">
                <GlassCard className="p-6">
                  <div className="text-[13px] text-white/70">Near-term platform plan</div>
                  <div className="mt-4 space-y-3 text-[14px] leading-7 text-white/80">
                    <div>• Start with Polymarket execution and Base deposits.</div>
                    <div>• Expand to Kalshi and Opinion by March 2026.</div>
                    <div>• Become the infrastructure partner for prediction markets.</div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </SlideSection>

          {/* Slide 6 */}
          <SlideSection id="s6">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <SectionTitle kicker="Strategy" title={THESIS.headline} subtitle={THESIS.body} />

                <GlassCard className="mt-8 p-5">
                  <div className="text-[12px] text-white/70">Links</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {DECK_LINKS.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target={l.url.startsWith('mailto:') ? undefined : '_blank'}
                        rel={l.url.startsWith('mailto:') ? undefined : 'noreferrer'}
                        className="border border-white/15 bg-white/5 px-3 py-2 text-[12px] text-white/80 hover:bg-white/10"
                        title={l.url.replace(/^mailto:/, '')}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-3 md:grid-cols-2">
                  {STRATEGY_PHASES.map((p, idx) => (
                    <GlassCard
                      key={p.phase}
                      className={`p-6 ${idx === STRATEGY_PHASES.length - 1 ? 'md:col-span-2' : ''}`}
                    >
                      <div className="text-[13px] text-white/70">{p.phase}</div>
                      <div className="mt-2 text-[16px] leading-snug text-white">{p.title}</div>
                      <div className="mt-3 text-[13px] leading-6 text-white/80">
                        <span className="text-white/60">Pain:</span> {p.pain}
                      </div>
                      <ul className="mt-4 space-y-2 text-[13px] leading-6 text-white/75">
                        {p.mechanism.map((m) => (
                          <li key={m} className="flex gap-3">
                            <span className="mt-[8px] h-1 w-1 flex-none rounded-full bg-white/50" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </SlideSection>

          {/* Slide 7 */}
          <SlideSection id="s7">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <SectionTitle
                  kicker="Traction (before the token generation event)"
                  title="Infrastructure and dataset ahead of launch"
                  subtitle="We are before the token generation event: no total value locked and no live trades yet, but the signal engine and execution stack are built and tested." 
                />

                <div className="mt-10 grid gap-3 md:grid-cols-3">
                  <MetricCard label="Signals collected" value={CORE_CLAIMS.totalSignals} note={`Over ${CORE_CLAIMS.totalSignalsWindow}`} />
                  <MetricCard label="Signals per day" value={CORE_CLAIMS.signalsPerDay} note="Elite wallet trade setups" />
                  <MetricCard label="Latency" value={CORE_CLAIMS.latency} note={CORE_CLAIMS.latencyDefinition} />
                </div>

                <GlassCard className="mt-8 p-6">
                  <div className="text-[13px] text-white/70">What counts as a signal</div>
                  <div className="mt-3 text-[14px] leading-7 text-white/80">
                    A trade setup emitted from elite wallets and traders with unfair informational access, distilled for machine execution.
                  </div>
                  <div className="mt-3 text-[13px] leading-6 text-white/60">
                    Monthly backtest snapshots will be published after the token generation event.
                  </div>
                </GlassCard>

                <div className="mt-6">
                  <BulletList items={TRACTION_POINTS} />
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="space-y-3">
                  <GlassCard className="p-6">
                    <div className="text-[13px] text-white/70">Signals, agents, and execution</div>
                    <div className="mt-4 text-[14px] leading-7 text-white/80">
                      BETTER turns signal quality into machine-speed action, targeting the short-lived alpha window.
                    </div>
                  </GlassCard>
                  <AlphaDecayTimeline />
                </div>
              </div>
            </div>
          </SlideSection>

          {/* Slide 8 */}
          <SlideSection id="s8">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <SectionTitle
                  kicker="Moat"
                  title="Execution speed and bounded agents"
                  subtitle={CORE_CLAIMS.positioning}
                />
                <BulletList items={MOAT_POINTS} />

                <div className="mt-6 text-[13px] leading-7 text-white/60">
                  Institutional partnership: <a className="text-white/85 hover:underline" href={DECK_META.openservUrl} target="_blank" rel="noreferrer">openserv.ai</a>
                </div>
              </div>
              <div className="md:col-span-5">
                <MoatMatrix />
              </div>
            </div>
          </SlideSection>

          {/* Slide 9 */}
          <SlideSection id="s9">
            <SectionTitle
              kicker="Business"
              title="Token-gated access and business-to-business infrastructure revenue"
              subtitle="BETTER monetises both retail yield automation and institutional-grade data and execution." 
            />

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              <GlassCard className="p-6">
                <div className="text-[12px] text-white/60">Vault fees</div>
                <div className="mt-2 text-[14px] leading-7 text-white">
                  {BUSINESS_MODEL.performanceFee}, {BUSINESS_MODEL.performanceFeeTiming}.
                </div>
                <div className="mt-3 text-[12px] leading-6 text-white/60">{BUSINESS_MODEL.noLossFees}</div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-[12px] text-white/60">Token utility</div>
                <div className="mt-2 text-[14px] leading-7 text-white">{BUSINESS_MODEL.accessGate}</div>
                <div className="mt-3 text-[12px] leading-6 text-white/60">{BUSINESS_MODEL.domeApiOption}</div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-[12px] text-white/60">Business-to-business and application programming interface</div>
                <div className="mt-2 text-[14px] leading-7 text-white">{BUSINESS_MODEL.b2b}</div>
                <div className="mt-3 text-[12px] leading-6 text-white/60">{BUSINESS_MODEL.llm}</div>
              </GlassCard>
            </div>
          </SlideSection>

          {/* Slide 10 */}
          <SlideSection id="s10">
            <SectionTitle
              kicker="Token"
              title="Token economics and access gate"
              subtitle={`Total supply: ${TOKENOMICS.totalSupply} BETTER tokens`} 
            />

            <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <GlassCard className="p-6">
                  <div className="text-[13px] text-white/70">Allocation</div>
                  <div className="mt-5 space-y-4">
                    {TOKENOMICS.allocations.map((a) => (
                      <div key={a.label}>
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-[14px] text-white">{a.label}</div>
                          <div className="text-[13px] text-white/60">
                            {a.percent}% · {a.amount}
                          </div>
                        </div>
                        <div className="mt-2 h-2 w-full border border-white/10 bg-black/20">
                          <div
                            className="h-full bg-better-blue"
                            style={{ width: `${a.percent}%` }}
                          />
                        </div>
                        <div className="mt-2 text-[12px] leading-6 text-white/55">{a.note}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>

              <div className="md:col-span-6 space-y-3">
                <GlassCard className="p-6">
                  <div className="text-[13px] text-white/70">Access gate (hold and stake)</div>
                  <div className="mt-4 space-y-3">
                    {ACCESS_GATE_PHASES.map((p) => (
                      <div key={p.phase} className="border border-white/10 bg-black/20 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="text-[14px] text-white">{p.phase}</div>
                          <div className="text-[13px] text-white/60">Gate: {p.gate}</div>
                        </div>
                        <ul className="mt-2 space-y-1 text-[12px] text-white/60">
                          {p.examples.map((e) => (
                            <li key={e}>• {e}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-[12px] leading-6 text-white/55">
                    The Terminal access requirement halves if a DomeAPI fee of two per cent per trade is enabled at log-in; vault access requirements remain unchanged across fully diluted valuation tiers.
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="text-[13px] text-white/70">Programmatic funding (10 per cent)</div>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[520px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="py-2 pr-3 text-[12px] font-medium text-white/60">Fully diluted valuation range</th>
                          <th className="py-2 pr-3 text-[12px] font-medium text-white/60">Sold</th>
                          <th className="py-2 pr-3 text-[12px] font-medium text-white/60">Raise</th>
                          <th className="py-2 text-[12px] font-medium text-white/60">Cumulative</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PROGRAMMATIC_FUNDING_SCHEDULE.map((row) => (
                          <tr key={row.range} className="border-b border-white/5">
                            <td className="py-2 pr-3 text-[12px] text-white/80">{row.range}</td>
                            <td className="py-2 pr-3 text-[12px] text-white/70">{row.soldPercent}</td>
                            <td className="py-2 pr-3 text-[12px] text-white/70">{row.raiseUsd}</td>
                            <td className="py-2 text-[12px] text-white/70">{row.cumulativeUsd}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </GlassCard>
              </div>
            </div>
          </SlideSection>

          {/* Slide 11 */}
          <SlideSection id="s11">
            <SectionTitle
              kicker="Team"
              title="Market-making discipline and execution engineering"
              subtitle="Two-person quantitative team: one builds the rails and one defines the trading logic." 
            />

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {TEAM.map((m) => (
                <GlassCard key={m.name} className="p-6">
                  <div className="text-[16px] text-white">{m.name}</div>
                  <div className="mt-1 text-[13px] text-white/70">{m.title}</div>
                  <ul className="mt-5 space-y-2 text-[13px] leading-6 text-white/80">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-[8px] h-1 w-1 rounded-full bg-white/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </SlideSection>

          {/* Slide 12 */}
          <SlideSection id="s12">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <SectionTitle
                  kicker="Ask"
                  title={`Raising ${ASK.amount} to ship the Terminal and Vaults`}
                  subtitle={`Runway: ${ASK.runway}. ${ASK.salaryNote}`}
                />

                <GlassCard className="mt-8 p-6">
                  <div className="text-[13px] text-white/70">Use of funds</div>
                  <div className="mt-5 space-y-3">
                    {ASK.useOfFunds.map((u) => (
                      <div key={u.label}>
                        <div className="flex items-center justify-between">
                          <div className="text-[14px] text-white">{u.label}</div>
                          <div className="text-[13px] text-white/60">{u.percent}%</div>
                        </div>
                        <div className="mt-2 h-2 w-full border border-white/10 bg-black/20">
                          <div
                            className="h-full bg-white/30"
                            style={{ width: `${u.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={DECK_META.calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 bg-white/10 px-5 py-3 text-[13px] text-white hover:bg-white/15"
                  >
                    Get in touch
                  </a>
                  <a
                    href={DECK_META.siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/20 bg-transparent px-5 py-3 text-[13px] text-white/80 hover:bg-white/5"
                  >
                    tradebetter.app
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <RoadmapTimeline />
              </div>
            </div>
          </SlideSection>
        </div>
      </div>
    </div>
  );
};

export default DeckApp;
