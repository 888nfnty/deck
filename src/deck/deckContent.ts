export const DECK_META = {
  title: '$BETTER: Ushering the Era of Truth',
  tagline: 'TRADE // LIVE // EARN // BETTER',
  raiseLine: 'Raising $500k (SAFE)',
  siteUrl: 'https://tradebetter.app',
  calendlyUrl: 'https://calendly.com/aryaman-chhaya/openserv-x-better',
  email: 'arychhaya@proton.me',
  handle: '@tradebetterapp',
} as const;

export const CORE_CLAIMS = {
  positioning: 'Fastest publicly-available prediction market infra for retail.',
  signalsPerDay: '10–40k',
  totalSignals: '10M+',
  totalSignalsWindow: '~5 months',
  latency: '~0.6ms',
  latencyDefinition:
    'Measured mempool read → tx hash on Base → order finality on Polymarket (Polygon).',
} as const;

export const PROBLEM_POINTS: string[] = [
  'Prediction markets settle on truth, but execution isn’t fair.',
  'Alpha decays in milliseconds; humans arrive late.',
  'Retail is structurally disadvantaged vs algorithmic trading desks.',
];

export const SOLUTION_POINTS: string[] = [
  'Terminal + Vaults: elite-wallet signal feed + automated yield execution.',
  'BRAID-powered agents produce bounded decision records.',
  'Rust-first HFT execution with in-region/co-located routing.',
];

export const PRODUCT_POINTS: string[] = [
  'Best signals across prediction markets → funneled into agents.',
  'Agents trade for users with HFT infra → yield to depositors.',
  'Deposit USDC on Base from any chain via Enclave chain abstraction.',
];

export const TRACTION_POINTS: string[] = [
  `${CORE_CLAIMS.totalSignals} signals collected in ${CORE_CLAIMS.totalSignalsWindow}.`,
  `${CORE_CLAIMS.signalsPerDay} elite-wallet trade setups per day.`,
  `${CORE_CLAIMS.latency} tick→trade (${CORE_CLAIMS.latencyDefinition})`,
];

export const MOAT_POINTS: string[] = [
  'Founder-led HFT/quant/market-making background.',
  'World-first Rust-powered prediction market stack (vs slower Python/TS incumbents).',
  'Co-location / in-region routing for low tick-to-trade latency.',
  'BRAID bounded reasoning to reduce inference capex + improve reliability.',
  'Exclusive relationship with DomeAPI (Rust SDK) + OpenServ agentic stack.',
];

export const BUSINESS_MODEL = {
  performanceFee: '20% performance fee on profits only',
  performanceFeeTiming: 'charged on withdrawal',
  noLossFees:
    'No fee if USDC withdrawn is below entry value (based on average share price entry).',
  accessGate:
    'Hold to view Terminal; stake the same quantity to deposit into Vaults.',
  domeApiOption:
    'Optional DomeAPI execution path: 2% fee per nominal trade (split TBD) + Terminal gate halved if enabled.',
  b2b:
    'B2B: sell Rust data-ingestion stack to quant funds/bucket shops seeking prediction-market exposure (inbound interest from networks totaling ~$100M ARR).',
  llm:
    'Post-TGE: train an in-house open-source model tuned on BETTER alpha signals; sell API credits (Q2 2026).',
} as const;

export const ACCESS_GATE_PHASES = [
  {
    phase: 'Phase 1 (< $10M FDV)',
    gate: '100,000 $BETTER',
    examples: ['At $0.005 ($5M MC): ~$500', 'At $0.01 ($10M MC): ~$1,000'],
  },
  {
    phase: 'Phase 2 ($10M–$20M FDV)',
    gate: '75,000 $BETTER',
    examples: ['At $0.02 ($20M MC): ~$1,500'],
  },
  {
    phase: 'Phase 3 ($20M–$40M FDV)',
    gate: '50,000 $BETTER',
    examples: ['At $0.04 ($40M MC): ~$2,000'],
  },
  {
    phase: 'Phase 4 ($100M+ FDV)',
    gate: '10,000 $BETTER',
    examples: ['At $0.10 ($100M MC): ~$1,000'],
  },
] as const;

export const TOKENOMICS = {
  totalSupply: '1,000,000,000',
  allocations: [
    { label: 'Public Sale (Launchpad)', percent: 25, amount: '250,000,000', note: 'Unlocked at TGE' },
    { label: 'Liquidity (Base/USDC LP)', percent: 15, amount: '150,000,000', note: 'Locked permanently' },
    {
      label: 'Team',
      percent: 20,
      amount: '200,000,000',
      note: '0% at TGE; 6mo cliff then 9mo linear',
    },
    {
      label: 'Treasury',
      percent: 25,
      amount: '250,000,000',
      note: 'Unlocked at TGE (ops + KOL deals)',
    },
    {
      label: 'OpenServ ($SERV) Drop',
      percent: 5,
      amount: '50,000,000',
      note: 'Unlocked (claimed by $SERV stakers via tasks)',
    },
    {
      label: 'Programmatic Funding',
      percent: 10,
      amount: '100,000,000',
      note: 'Released across FDV valuation bands',
    },
  ],
} as const;

export const PROGRAMMATIC_FUNDING_SCHEDULE = [
  { range: '$1M–$5M FDV', soldPercent: '2%', raiseUsd: '$60,000', cumulativeUsd: '$60,000' },
  { range: '$5M–$10M FDV', soldPercent: '2%', raiseUsd: '$150,000', cumulativeUsd: '$210,000' },
  { range: '$10M–$20M FDV', soldPercent: '2%', raiseUsd: '$300,000', cumulativeUsd: '$510,000' },
  { range: '$20M–$50M FDV', soldPercent: '2%', raiseUsd: '$700,000', cumulativeUsd: '$1,210,000' },
  { range: '$50M–$100M FDV', soldPercent: '2%', raiseUsd: '$1,500,000', cumulativeUsd: '$2,710,000' },
] as const;

export const ASK = {
  amount: '$500k SAFE',
  runway: '9 months',
  useOfFunds: [
    { label: 'Infra / Eng / Compute', percent: 50 },
    { label: 'Audits', percent: 15 },
    { label: 'Legal + Ops', percent: 10 },
    { label: 'Growth + Community', percent: 15 },
    { label: 'Liquidity', percent: 5 },
    { label: 'Marketing', percent: 5 },
  ],
  salaryNote: 'Founders take no salary from this raise.',
} as const;

export const ROADMAP = [
  { when: 'Jan 21, 2026', what: 'TGE (Terminal live minimum that week)' },
  { when: 'Jan 2026', what: 'Vaults live' },
  { when: 'Mar 2026 (Q1)', what: 'Kalshi + Opinion integrations complete' },
  { when: 'End of Q1 2026', what: 'B2B Rust data-ingestion product (Polymarket + Kalshi)' },
  { when: 'Q2 2026', what: 'In-house open-source model training + API credits' },
  { when: 'Q1 2026', what: 'Tokenized vault shares (vBETTER)' },
  { when: 'Q2 2026', what: 'Arbitrage flywheel' },
  { when: 'Q4 2026', what: '$TRUTH-PERP on Hyperliquid' },
] as const;

export const FOUNDER = {
  name: 'Aryaman Chhaya',
  title: 'Founder • Quantitative Developer',
  bullets: [
    'Quantitative Researcher (buy-side hedge fund): built BTC futures market-making in Rust, ~+$75k/week P&L on ~$500k inventory.',
    'Worked with senior traders on $1.2M–$9M BTC calendar spread books.',
    'Building sub-ms HFT systems on Solana (Rust + hardware-oriented low-latency design).',
  ],
} as const;

export const PARTNERS = ['Polymarket', 'Kalshi', 'Opinion', 'OpenServ', 'DomeAPI'] as const;

export const SLIDE_NAV = [
  { id: 's1', label: '01 Vision' },
  { id: 's2', label: '02 Problem' },
  { id: 's3', label: '03 Solution' },
  { id: 's4', label: '04 Product' },
  { id: 's5', label: '05 Why Now' },
  { id: 's6', label: '06 Traction' },
  { id: 's7', label: '07 Moat' },
  { id: 's8', label: '08 Business' },
  { id: 's9', label: '09 Token' },
  { id: 's10', label: '10 Ask' },
] as const;
