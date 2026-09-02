import { useReveal } from '@/hooks/useReveal';
import {
  Sparkles, Search, LayoutDashboard, Target, Table2, Database, LineChart, Lightbulb,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Data Cleaning & Preparation',
    desc: 'Transform messy and inconsistent datasets into analysis-ready data.',
  },
  {
    icon: Search,
    title: 'Exploratory Data Analysis',
    desc: 'Identify patterns, trends, relationships and anomalies.',
  },
  {
    icon: LayoutDashboard,
    title: 'Power BI Dashboard Development',
    desc: 'Build interactive dashboards that make business performance easy to understand.',
  },
  {
    icon: Target,
    title: 'KPI & Performance Reporting',
    desc: 'Track important business metrics and create decision-focused reports.',
  },
  {
    icon: Table2,
    title: 'Excel Data Analysis',
    desc: 'Use Excel, formulas and Pivot Tables to analyze and summarize data.',
  },
  {
    icon: Database,
    title: 'SQL Data Analysis',
    desc: 'Query, filter, join and aggregate data from relational databases.',
  },
  {
    icon: LineChart,
    title: 'Data Visualization',
    desc: 'Convert complex datasets into intuitive visual stories.',
  },
  {
    icon: Lightbulb,
    title: 'Business Insights',
    desc: 'Translate analytical findings into practical recommendations.',
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="container-page section-pad">
      <div ref={ref} className="reveal">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">What I Can Do With Data</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            Capabilities that turn raw data into business decisions
          </h2>
          <p className="text-body mt-4">
            I don't just create dashboards. I use data to answer business questions, identify insights and support
            better decisions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card card-hover p-6 group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <s.icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="font-display font-bold text-[15px] text-ink-900 dark:text-white">{s.title}</h3>
              <p className="text-[13px] text-ink-500 dark:text-ink-300 mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
