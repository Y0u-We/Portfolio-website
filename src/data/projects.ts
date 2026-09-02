export type Project = {
  id: string;
  title: string;
  category: string;
  tools: string[];
  objective: string;
  businessProblem: string;
  dataset: string;
  dataPrep: string[];
  analysis: string[];
  kpis: string[];
  insights: string[];
  recommendations: string[];
  skills: string[];
  thumbnail: string;
  gallery: string[];
  githubUrl?: string;
  liveUrl?: string;
  // Path to a downloadable one-page PDF case study for this project
  // (served from /public/projects/).
  pdfUrl?: string;
  summary: string;
};

export const projects: Project[] = [
  {
    id: 'advision-dashboard',
    title: 'AdVision — Multi-Client Ad Performance Dashboard',
    category: 'Marketing Analytics',
    tools: ['Power BI', 'Windsor.ai', 'DAX', 'Power Query'],
    objective:
      'Build a single, real-time Power BI dashboard that reports multi-platform ad campaign performance for multiple clients at once, replacing manual spreadsheet reporting.',
    businessProblem:
      'Croccle Internet manages Google Ads, Meta Ads and LinkedIn Ads campaigns for many clients. Reporting was done manually in spreadsheets for each client every week — slow, error-prone and impossible to scale across 9 clients at once.',
    dataset:
      'Multi-platform ad campaign data (Google Ads, Meta Ads, LinkedIn Ads) for 9 clients, pulled through Windsor.ai into a unified data model covering spend, leads, clicks, impressions and conversions.',
    dataPrep: [
      'Connected and blended Google Ads, Meta Ads and LinkedIn Ads data via Windsor.ai',
      'Built Power Query transformations to standardize campaign, client and date fields across platforms',
      'Modeled a scalable star schema to support 9 clients from a single dataset',
      'Handled missing/blank spend and lead values without breaking rollups',
    ],
    analysis: [
      'Real-time CPL (cost-per-lead) tracking by client, platform and campaign',
      'Budget pacing against monthly targets',
      'Cross-platform performance comparison (Google vs Meta vs LinkedIn)',
      'Conditional-formatting KPI cards to flag under/over-performing campaigns at a glance',
    ],
    kpis: ['Spend', 'Leads', 'CPL', 'Budget Pacing %', 'Clicks', 'CTR'],
    insights: [
      'Centralizing 9 clients into one model cut manual weekly reporting effort dramatically.',
      'Conditional formatting made budget-pacing issues visible immediately instead of at month-end.',
      'Cross-platform CPL comparison surfaced which channel was most efficient per client.',
    ],
    recommendations: [
      'Shift more monthly budget toward the lowest-CPL platform per client.',
      'Set automated pacing alerts so under-spending campaigns are caught mid-month, not after.',
      'Standardize campaign naming across platforms to keep the model clean as new clients are added.',
    ],
    skills: ['DAX', 'Power Query', 'Data Modeling', 'Dashboard Development', 'Multi-source Integration', 'CPL Analysis'],
    thumbnail: '/projects/advision-cover.png',
    gallery: ['/dashboards/advision.png'],
    githubUrl: '',
    pdfUrl: 'https://drive.google.com/file/d/1Uu3GHPk_c6RDu80sRyPoHvnjROyJ9NFW/view?usp=drive_link',
    summary:
      'A real-time, multi-client Power BI dashboard unifying Google, Meta and LinkedIn Ads reporting for 9 clients — replacing manual spreadsheet reporting with CPL tracking and budget pacing.',
  },
  {
    id: 'prestige-university-leads',
    title: 'Prestige University — Lead Generation Analytics',
    category: 'Education Analytics',
    tools: ['Power BI', 'Excel', 'DAX', 'Power Query'],
    objective:
      'Turn a large, manually maintained lead feedback workbook into a reliable Power BI model that tracks valid leads and lead-stage progression accurately.',
    businessProblem:
      "Prestige University's lead data lived across a 16-sheet Excel feedback workbook with inconsistent stage labels, making it hard to know how many leads were genuinely valid or where they dropped off in the funnel.",
    dataset:
      'A 16-sheet Excel workbook of lead feedback data covering lead source, stage, application status and follow-up outcomes.',
    dataPrep: [
      'Consolidated 16 separate sheets into a single clean data model',
      'Built DAX measures for valid lead counts and valid lead percentage',
      "Created a custom 8-day week segmentation in Power Query to match the university's reporting cadence",
      'Replicated the existing Google Sheets pivot structure as a Lead Stage Wise matrix in Power BI',
    ],
    analysis: [
      'Valid vs invalid lead breakdown',
      'Lead Stage Wise funnel matrix (inquiry through to application)',
      'Weekly lead volume using the custom 8-day segmentation',
      'Source-wise lead quality comparison',
    ],
    kpis: ['Total Leads', 'Valid Leads', 'Valid Lead %', 'Applications', 'Weekly Lead Volume'],
    insights: [
      'A meaningful share of raw leads were invalid or duplicate — the valid-lead measure gave a much more accurate funnel view.',
      'The custom week segmentation matched internal reporting cycles far better than a standard calendar week.',
      'The Lead Stage Wise matrix made it easy to see exactly where leads stalled in the funnel.',
    ],
    recommendations: [
      'Automate the 16-sheet intake process to reduce manual consolidation each cycle.',
      'Use the valid-lead measure as the primary KPI reported to stakeholders, not raw lead count.',
      'Focus follow-up resources on the funnel stage with the highest drop-off.',
    ],
    skills: ['DAX', 'Power Query', 'Data Cleaning', 'Funnel Analysis', 'Excel Data Consolidation', 'Dashboard Development'],
    thumbnail: '/projects/prestige-university-cover.png',
    gallery: ['/dashboards/prestige.png'],
    githubUrl: '',
    pdfUrl: 'https://drive.google.com/file/d/1YQZzbK-wjzzFIEHJXR1jwjr3Df6qOPf0/view?usp=drive_link',
    summary:
      'A Power BI model built from a 16-sheet Excel workbook, with custom DAX measures for valid leads and a Lead Stage Wise matrix tracking the recruitment funnel.',
  },
  {
    id: 'crm-sales-pipeline',
    title: 'CRM Sales Pipeline Dashboard',
    category: 'Sales Analytics',
    tools: ['Power BI', 'DAX', 'Power Query'],
    objective:
      'Build a Power BI dashboard analyzing a CRM sales pipeline to track deal flow, stage conversion and sales performance.',
    businessProblem:
      'Sales teams often lack visibility into where deals stall in the pipeline and which reps or stages are driving (or blocking) revenue — this project simulates that scenario using a realistic synthetic dataset.',
    dataset:
      'A synthetic CRM dataset of 1,400 deals covering deal stage, owner, value, close date and win/loss outcome.',
    dataPrep: [
      'Designed and generated a realistic 1,400-deal CRM dataset',
      'Cleaned and structured stage, owner and outcome fields',
      'Built DAX measures for pipeline value, win rate and stage conversion',
    ],
    analysis: [
      'Pipeline funnel by stage',
      'Win rate by sales rep and deal source',
      'Average deal size and sales cycle length',
      'Revenue forecast based on weighted pipeline value',
    ],
    kpis: ['Pipeline Value', 'Win Rate', 'Average Deal Size', 'Sales Cycle Length'],
    insights: [
      'A small number of reps closed a disproportionate share of high-value deals.',
      'Certain stages showed significantly longer dwell time, indicating a bottleneck.',
      'Win rate varied meaningfully by deal source, pointing to where lead quality was strongest.',
    ],
    recommendations: [
      'Focus coaching on the pipeline stage with the longest dwell time.',
      'Prioritize lead sources with the highest historical win rate.',
      'Use weighted pipeline value, not raw pipeline value, for forecasting.',
    ],
    skills: ['DAX', 'Data Modeling', 'Sales Funnel Analysis', 'Forecasting', 'Dashboard Development'],
    thumbnail: '/projects/crm-sales-pipeline-cover.png',
    gallery: ['/dashboards/crm.png'],
    githubUrl: '',
    pdfUrl: 'https://drive.google.com/file/d/14g2eJD2Z4z_uQGZHtRtzvHAzAfjU566g/view?usp=drive_link',
    summary:
      'A Power BI dashboard built on a synthetic 1,400-deal CRM dataset, tracking pipeline value, win rate and stage conversion for sales performance analysis.',
  },
  {
    id: 'supermarket-transactions',
    title: 'Supermarket Transactions Analysis',
    category: 'Retail Analytics',
    tools: ['Power BI', 'DAX', 'Power Query'],
    objective:
      'Analyze large-scale retail transaction data to uncover sales trends, category performance and customer purchasing patterns.',
    businessProblem:
      'Retailers generate huge volumes of transaction-level data but often only look at top-line revenue — missing patterns at the category, basket and time-of-day level that could inform merchandising and staffing decisions.',
    dataset:
      'A synthetic supermarket transactions dataset of 55,000+ rows covering products, categories, quantities, prices, timestamps and store locations.',
    dataPrep: [
      'Designed and generated a 55,000+ row synthetic transactions dataset',
      'Built a date/time dimension for hourly and seasonal trend analysis',
      'Modeled relationships between products, categories and transactions',
    ],
    analysis: [
      'Revenue and basket-size trends over time',
      'Category and product-level performance ranking',
      'Peak sales hours and days by store location',
      'Basket composition and cross-category purchase patterns',
    ],
    kpis: ['Total Revenue', 'Average Basket Size', 'Units Sold', 'Top Category Share'],
    insights: [
      'Sales showed clear peak hours that varied by store location.',
      'A concentrated set of categories drove most of total revenue.',
      'Basket size and composition varied meaningfully between weekday and weekend transactions.',
    ],
    recommendations: [
      'Align staffing schedules with identified peak sales hours per location.',
      'Prioritize shelf space and promotions for top-revenue categories.',
      'Design weekend-specific bundle promotions based on basket composition patterns.',
    ],
    skills: ['DAX', 'Power Query', 'Large Dataset Handling', 'Retail Analytics', 'Time-based Trend Analysis'],
    thumbnail: '/projects/supermarket-cover.png',
    gallery: ['/dashboards/supermarket.png'],
    githubUrl: '',
    pdfUrl: 'https://drive.google.com/file/d/1rhPVDVkPx7qoyVe6GZjIkQMptryyDZoA/view?usp=drive_link',
    summary:
      'A Power BI analysis of 55,000+ synthetic supermarket transactions, surfacing sales trends, category performance and basket patterns.',
  },
];
