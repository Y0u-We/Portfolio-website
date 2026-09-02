export const profile = {
  name: 'Yuvraj Sunar',
  role: 'Data Analyst',
  headline: 'Data Analyst | Power BI | SQL | Excel | Python',
  valueProp: 'Turning Data Into Actionable Business Insights.',
  tagline:
    'I transform raw and complex datasets into clear dashboards, meaningful insights and business-focused reports that help organizations make better data-driven decisions.',
  email: 'sunaryuvi2110@gmail.com',
  phone: '+91 8459799207',
  location: 'Pune, Maharashtra, India',
  linkedinUrl: 'https://www.linkedin.com/in/yuvraj-sunar-5b5a162a5/',
  githubUrl: 'https://github.com/Y0u-We',
  resumeUrl: 'https://drive.google.com/file/d/1uheGXUjQM2_LqI88AzoACYFwRLyRMCX6/view?usp=sharing',
  profileImage: '/Profile.png',
  openTo: 'Data Analyst | BI Analyst | Reporting Analyst | Analytics Opportunities',
  educationShort: 'MCA | CGPA 8.07',
  specialization: 'Data Analysis | Data Visualization | Dashboarding | Reporting',
  coreTools: 'Power BI | SQL | Excel | Python',
  // Optional: paste a Formspree (or similar) form endpoint here to make the
  // contact form submit silently in-page. Leave blank to keep the
  // "opens your email client" fallback behavior.
  contactFormEndpoint: '',
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
