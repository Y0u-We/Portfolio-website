export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google',
    year: '2026',
    credentialUrl: '/certifications/google-ads-search-certification.png',
    description:
      'Validated skills in building and optimizing Google Search ad campaigns, keyword strategy, and search-ads best practices. Issued Apr 1, 2026 · Valid through Apr 1, 2027 · Certificate ID: 178742532.',
  },
  {
    name: 'Excel Mastery',
    issuer: 'Skill Course',
    year: '2026',
    credentialUrl: '/certifications/excel-mastery-certificate.jpg',
    description:
      'Completed an in-depth course covering advanced Excel formulas, data analysis and reporting techniques. Issued Apr 13, 2026 · Certificate ID: SC-0C67AE8707.',
  },
  {
    name: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    credentialUrl: '/certifications/data-analytics-essentials-certificate.jpg',
    description:
      'Covered the data analytics process end-to-end — data characteristics, transforming and analyzing data, and hands-on labs using Excel, SQL and Tableau. Issued Apr 15, 2026.',
  },
  {
    name: 'Python Course for Beginners: Mastering the Essentials',
    issuer: 'Scaler Topics',
    year: '2026',
    credentialUrl: '/certifications/python-course-certificate.png',
    description:
      'Completed a beginner-to-intermediate Python curriculum spanning 121 video tutorials, 16 modules and 10 hands-on coding challenges. Issued Apr 21, 2026.',
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  org: string;
  detail: string;
  // Path to a downloadable PDF (marksheet/certificate) for this qualification.
  // Leave empty until the file is added to /public/education/.
  downloadUrl?: string;
};

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications — MCA',
    field: 'Computer Applications',
    org: 'Alard University (Alard Institute of Management Sciences)',
    detail: 'CGPA: 8.07',
    downloadUrl: 'https://drive.google.com/file/d/1jYFQgvJQcc04FL5aiB93UFkDb2teJoVG/view?usp=drive_link',
  },
  {
    degree: 'Bachelor of Computer Applications — BCA',
    field: 'Computer Applications',
    org: 'Sangamner College',
    detail: 'Undergraduate foundation in computing and applications.',
    downloadUrl: 'https://drive.google.com/file/d/1L3OEex8n1IuXxqsjktiAOFBP5inB-2q8/view?usp=drive_link',
  },
  {
    degree: 'HSC — 12th Standard',
    field: 'Higher Secondary',
    org: 'Higher Secondary Certificate',
    detail: 'Higher secondary education.',
    downloadUrl: 'https://drive.google.com/file/d/1z9wQngN38UYhtjyK3NHOniVUP_NiAA9A/view?usp=drive_link',
  },
  {
    degree: 'SSC — 10th Standard',
    field: 'Secondary School',
    org: 'Secondary School Certificate',
    detail: 'Secondary school education.',
    downloadUrl: 'https://drive.google.com/file/d/1rnGqZpgyUXnQyZHvRJyNOhRGrN3LUol2/view?usp=drive_link',
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  date: string;
  description: string;
  // Optional bullet-point highlights rendered under the description.
  highlights?: string[];
  // Optional tools/skills chips rendered at the bottom of the card.
  tools?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Data Analyst Intern',
    org: 'Croccle Internet LLP',
    date: 'Apr 2026 – Jul 2026 · 4 months',
    description:
      'Worked as a Data Analyst Intern on live client analytics, building end-to-end Power BI reporting solutions across marketing, education and lead-generation domains. Owned data pipelines from raw multi-platform sources through to polished, decision-ready dashboards used directly by internal PPC and account teams.',
    highlights: [
      'Built the AdVision Dashboard — a real-time, multi-client Power BI reporting system consolidating Google Ads, Meta Ads and LinkedIn Ads data for 9 clients via Windsor.ai, replacing manual weekly spreadsheet reporting entirely.',
      'Engineered a scalable star-schema data model in Power Query, standardizing campaign, client and date fields across three ad platforms so new clients could be onboarded from a single dataset.',
      'Wrote DAX measures for CPL, budget pacing and cross-platform performance, and used conditional-formatting KPI cards to flag under- and over-performing campaigns at a glance.',
      'Delivered lead-generation analytics for Prestige University: consolidated a 16-sheet Excel feedback workbook into one clean model, built valid-lead DAX measures and a custom 8-day-week segmentation, and recreated the Lead Stage Wise funnel matrix in Power BI.',
      'Ran a keyword- and campaign-level Google Ads analysis for NSHM across MBA, Brand, BTech and Hotel Management campaigns, identifying wasted spend and producing colour-coded pause/scale recommendation reports for the PPC team.',
      'Presented findings and reporting to internal stakeholders, translating raw campaign data into clear, actionable recommendations that fed directly into budget-allocation decisions.',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'Windsor.ai', 'Google Ads', 'Excel'],
  },
  {
    role: 'Independent Data Analytics Projects',
    org: 'Self-Directed · Portfolio Work',
    date: '2025 – 2026 · Ongoing',
    description:
      'Designed and built end-to-end analytics projects to deepen my Power BI, DAX and data-modeling skills using realistic, self-generated datasets — covering sales pipeline, retail and KPI reporting scenarios.',
    highlights: [
      'Built a CRM Sales Pipeline dashboard on a synthetic 1,400-deal dataset, modeling pipeline value, win rate, stage conversion and weighted revenue forecasting.',
      'Analyzed 55,000+ synthetic supermarket transactions to surface hourly sales trends, category performance and weekday-vs-weekend basket patterns for merchandising and staffing decisions.',
      'Practised the full analytics workflow — data generation, cleaning, star-schema modeling, DAX measures and dashboard storytelling — on each project.',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Python'],
  },
];
