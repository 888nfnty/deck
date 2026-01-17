export const DECK_META = {
  title: 'BETTER: Ushering the Era of Truth',
  tagline: 'Trade, live, earn, BETTER.',
  raiseLine: 'Raising US$500,000 via a simple agreement for future equity',
  siteUrl: 'https://tradebetter.app',
  calendlyUrl: 'https://calendly.com/aryaman-chhaya/openserv-x-better',
  telegramUrl: 'http://t.me/betterterminal',
  xUrl: 'https://x.com/tradebetterapp',
  thesisUrl: 'https://x.com/tradebetterapp/status/2001641362278748251',
  openservUrl: 'https://openserv.ai',
  email: 'arychhaya@proton.me',
  emailUrl: 'mailto:arychhaya@proton.me',
  handle: '@tradebetterapp',
} as const;

export const DECK_LINKS = [
  { label: 'Website', url: DECK_META.siteUrl },
  { label: 'X (formerly Twitter)', url: DECK_META.xUrl },
  { label: 'Telegram', url: DECK_META.telegramUrl },
  { label: 'Thesis', url: DECK_META.thesisUrl },
  { label: 'OpenServ', url: DECK_META.openservUrl },
  { label: 'Email', url: DECK_META.emailUrl },
] as const;

export const CORE_CLAIMS = {
  positioning: 'Fastest publicly available prediction market infrastructure for retail traders.',
  signalsPerDay: '10,000–40,000',
  totalSignals: 'more than ten million',
  totalSignalsWindow: 'approximately five months',
  latency: 'approximately 0.6 milliseconds',
  latencyDefinition:
    'Measured from mempool read to transaction hash on Base, then to order finality on Polymarket (Polygon).',
} as const;

export const PROBLEM_POINTS: string[] = [
  'Prediction markets settle on truth, but execution isn’t fair.',
  'Alpha decays in milliseconds; people arrive late.',
  'Retail traders are structurally disadvantaged compared with algorithmic trading desks.',
];

export const SOLUTION_POINTS: string[] = [
  'Terminal and Vaults: elite wallet signal feed and automated yield execution.',
  'OpenServ bounded agents produce decision records.',
  'Rust-first high-frequency trading execution with in-region and co-located routing.',
];

export const PRODUCT_POINTS: string[] = [
  'Best signals across prediction markets are funnelled into agents.',
  'Agents trade for users with high-frequency trading infrastructure, delivering yield to depositors.',
  'Deposit any asset with gas-free chain abstraction via Enclave into the Base vault.',
];

export const TRACTION_POINTS: string[] = [
  `${CORE_CLAIMS.totalSignals} signals collected in ${CORE_CLAIMS.totalSignalsWindow}.`,
  `${CORE_CLAIMS.signalsPerDay} elite wallet trade setups per day.`,
  `Tick-to-trade latency of ${CORE_CLAIMS.latency}.`,
];

export const MOAT_POINTS: string[] = [
  'Founder-led high-frequency trading, quantitative, and market-making background.',
  'Rails-first stack from ingestion to bounded agents, deterministic execution, and vaults.',
  'Rust-powered execution stack with co-location and in-region routing for low tick-to-trade latency.',
  'Bounded reasoning graphs from OpenServ reduce drift and cost; execution is deterministic with risk caps.',
  'Exclusive partnerships with DomeAPI’s Rust software development kit and the OpenServ agent stack.',
];

export const BUSINESS_MODEL = {
  performanceFee: 'Twenty per cent performance fee on profits only',
  performanceFeeTiming: 'charged on withdrawal',
  noLossFees:
    'No fee if USD Coin withdrawn is below entry value (based on average share price at entry).',
  accessGate:
    'Hold BETTER tokens to view the Terminal; stake the same quantity to deposit into Vaults.',
  domeApiOption:
    'Optional DomeAPI execution path: a fee of two per cent per nominal trade (split to be determined). When enabled at log-in, the Terminal access requirement halves; vault access requirements remain unchanged across fully diluted valuation tiers.',
  b2b:
    'Business-to-business: sell Rust data and execution rails to proprietary trading firms, family offices, and hedge funds building prediction market pods; revenue anchors for the ecosystem (Susquehanna International Group is hiring for prediction market traders).',
  llm:
    'After the token generation event: acquire graphics processing unit clusters to train an open-weight model tuned on BETTER alpha signals; sell application programming interface credits (second quarter of 2026).',
} as const;

export const THESIS = {
  headline: 'The space is full of application programming interface wrappers. We are building the rails.',
  body:
    'Most prediction market projects are superficial rearrangements of public application programming interfaces (Kalshi, Polymarket, and Opinion). BETTER is building a rails-first stack: ingestion, bounded agents, deterministic execution, and composable vault shares.',
} as const;

export const STRATEGY_PHASES = [
  {
    phase: 'Phase one (first quarter of 2026)',
    title: 'Tokenise the Vault to solve access',
    pain: '“I want alpha but lack time and skill.”',
    mechanism: [
      'Token-gated Terminal and stake-to-enable vault deposits; expand signal sourcing via Kalshi and Opinion builder programmes.',
      'Ratchet the gate as fully diluted valuation rises (100,000 to 75,000 to 50,000 BETTER tokens) to keep access costs stable and reward early holders.',
      'Vault execution powered by OpenServ bounded reasoning agents and Rust high-frequency trading rails.',
      'Enclave chain abstraction: gas-free deposits from any asset into Base.',
    ],
  },
  {
    phase: 'Phase two (second quarter of 2026)',
    title: 'Arbitrage flywheel to solve liquidity',
    pain: '“I need to exit without penalty.”',
    mechanism: [
      'vBETTER: a liquid receipt token for vault shares (Enzyme vault shares).',
      'Liquidity provider incentives on Aerodrome and Uniswap; secondary yield for depositors.',
      'When vBETTER trades at a premium, mint and sell to capture the spread, then buy and burn BETTER tokens.',
    ],
  },
  {
    phase: 'Phase three (fourth quarter of 2026)',
    title: 'The end game to solve leverage',
    pain: '“Spot prediction markets are binary; I want leverage or hedging.”',
    mechanism: [
      'TRUTH perpetual contract on Hyperliquid via Hyperliquid Improvement Proposal 3: an index for exposure across prediction markets (“Nasdaq of Truth”).',
      'Hyperliquid Improvement Proposal 3 barrier: stake 500,000 Hyperliquid tokens (approximately US$11 million) as a moat against copycats.',
      'Arbitrage between vault assets under management and the TRUTH perpetual contract, then buy and burn BETTER tokens.',
    ],
  },
] as const;

export const ACCESS_GATE_PHASES = [
  {
    phase: 'Phase one (below US$10 million fully diluted valuation)',
    gate: '100,000 BETTER tokens',
    examples: [
      'At US$0.005 (US$5 million market capitalisation): approximately US$500',
      'At US$0.01 (US$10 million market capitalisation): approximately US$1,000',
    ],
  },
  {
    phase: 'Phase two (US$10 million–US$20 million fully diluted valuation)',
    gate: '75,000 BETTER tokens',
    examples: ['At US$0.02 (US$20 million market capitalisation): approximately US$1,500'],
  },
  {
    phase: 'Phase three (US$20 million–US$40 million fully diluted valuation)',
    gate: '50,000 BETTER tokens',
    examples: ['At US$0.04 (US$40 million market capitalisation): approximately US$2,000'],
  },
  {
    phase: 'Phase four (US$100 million or more fully diluted valuation)',
    gate: '10,000 BETTER tokens',
    examples: ['At US$0.10 (US$100 million market capitalisation): approximately US$1,000'],
  },
] as const;

export const TOKENOMICS = {
  totalSupply: '1,000,000,000',
  allocations: [
    {
      label: 'Public sale (launchpad)',
      percent: 25,
      amount: '250,000,000',
      note: 'Unlocked at the token generation event',
    },
    {
      label: 'Liquidity (Base and USD Coin liquidity pool)',
      percent: 15,
      amount: '150,000,000',
      note: 'Locked permanently',
    },
    {
      label: 'Team',
      percent: 20,
      amount: '200,000,000',
      note: 'Zero per cent at the token generation event; six-month cliff then nine-month linear release',
    },
    {
      label: 'Treasury',
      percent: 25,
      amount: '250,000,000',
      note: 'Unlocked at the token generation event (operations and key opinion leader deals)',
    },
    {
      label: 'OpenServ token drop',
      percent: 5,
      amount: '50,000,000',
      note: 'Unlocked (claimed by OpenServ token stakers via tasks)',
    },
    {
      label: 'Programmatic Funding',
      percent: 10,
      amount: '100,000,000',
      note: 'Released across fully diluted valuation bands',
    },
  ],
} as const;

export const PROGRAMMATIC_FUNDING_SCHEDULE = [
  {
    range: 'US$1 million–US$5 million fully diluted valuation',
    soldPercent: '2 per cent',
    raiseUsd: 'US$60,000',
    cumulativeUsd: 'US$60,000',
  },
  {
    range: 'US$5 million–US$10 million fully diluted valuation',
    soldPercent: '2 per cent',
    raiseUsd: 'US$150,000',
    cumulativeUsd: 'US$210,000',
  },
  {
    range: 'US$10 million–US$20 million fully diluted valuation',
    soldPercent: '2 per cent',
    raiseUsd: 'US$300,000',
    cumulativeUsd: 'US$510,000',
  },
  {
    range: 'US$20 million–US$50 million fully diluted valuation',
    soldPercent: '2 per cent',
    raiseUsd: 'US$700,000',
    cumulativeUsd: 'US$1,210,000',
  },
  {
    range: 'US$50 million–US$100 million fully diluted valuation',
    soldPercent: '2 per cent',
    raiseUsd: 'US$1,500,000',
    cumulativeUsd: 'US$2,710,000',
  },
] as const;

export const ASK = {
  amount: 'US$500,000 via a simple agreement for future equity',
  runway: '9 months',
  useOfFunds: [
    { label: 'Infrastructure, engineering, and compute', percent: 50 },
    { label: 'Audits', percent: 15 },
    { label: 'Legal and operations', percent: 10 },
    { label: 'Growth and community', percent: 15 },
    { label: 'Liquidity', percent: 5 },
    { label: 'Marketing', percent: 5 },
  ],
  salaryNote: 'Founders take no salary from this raise.',
} as const;

export const ROADMAP = [
  {
    when: '21 January 2026',
    what: 'Token generation event (Terminal live at a minimum that week)',
  },
  { when: 'January 2026', what: 'Vaults live' },
  {
    when: 'March 2026 (first quarter)',
    what: 'Kalshi and Opinion integrations complete',
  },
  {
    when: 'End of the first quarter of 2026',
    what: 'Business-to-business Rust data ingestion product (Polymarket and Kalshi)',
  },
  {
    when: 'Second quarter of 2026',
    what: 'In-house open-source model training and application programming interface credits',
  },
  { when: 'First quarter of 2026', what: 'Tokenised vault shares (vBETTER)' },
  { when: 'Second quarter of 2026', what: 'Arbitrage flywheel' },
  { when: 'Fourth quarter of 2026', what: 'TRUTH perpetual contract on Hyperliquid' },
] as const;

export const TEAM = [
  {
    name: 'Aryaman Chhaya',
    title: 'Founder • Quantitative developer',
    bullets: [
      'Bachelor of Actuarial Studies.',
      'Buy-side quantitative researcher: engineered Bitcoin futures market-making in Rust, approximately US$75,000 per week profit and loss on approximately US$500,000 of inventory, with low-latency execution.',
      'Managed US$1.2 million–US$9 million Bitcoin calendar spread books (monthly and weekly futures), refining delta exposure in continuous markets.',
      'Sortino ratio above seven regime filter backtest (from 2010 onwards): long spot when the global liquidity rate of change turned positive.',
    ],
  },
  {
    name: 'Cooper Winton',
    title: 'Quantitative researcher (trading logic)',
    bullets: [
      'Bachelor of Statistics.',
      'Mean-reversion and pairs selection: Ornstein–Uhlenbeck framework and Ordering Points To Identify the Clustering Structure and Density-Based Spatial Clustering of Applications with Noise clustering (Sarmento and Horta); back-tested and paper-traded using QuantConnect.',
      'Solana high-frequency trading research and development: cross-decentralised-exchange arbitrage and front-running detectors; Rust and runtime-level understanding.',
      'Hardware-oriented low-latency design (Xenon field-programmable gate array and ExaNIC); targeting sub-millisecond tick-to-trade via co-location.',
    ],
  },
] as const;

export const PARTNERS = [
  'Polymarket',
  'Kalshi',
  'Opinion',
  'OpenServ',
  'DomeAPI',
  'Enclave',
  'Enzyme',
  'Hyperliquid (Improvement Proposal 3)',
] as const;

export const SLIDE_NAV = [
  { id: 's1', label: '01 Vision' },
  { id: 's2', label: '02 Problem' },
  { id: 's3', label: '03 Solution' },
  { id: 's4', label: '04 Product' },
  { id: 's5', label: '05 Why now' },
  { id: 's6', label: '06 Strategy' },
  { id: 's7', label: '07 Traction' },
  { id: 's8', label: '08 Moat' },
  { id: 's9', label: '09 Business' },
  { id: 's10', label: '10 Token' },
  { id: 's11', label: '11 Team' },
  { id: 's12', label: '12 Ask' },
] as const;
