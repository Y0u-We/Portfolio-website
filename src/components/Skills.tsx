import { useReveal } from '@/hooks/useReveal';
import { Database, BarChart3, Server, Table2, Code2, Wrench } from 'lucide-react';

const groups = [
  {
    icon: Database,
    title: 'Data Analysis',
    items: ['Data Cleaning', 'Data Transformation', 'Exploratory Data Analysis', 'Trend Analysis', 'KPI Analysis', 'Data Interpretation', 'Business Analysis'],
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    items: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Dashboard Development', 'Interactive Reporting'],
  },
  {
    icon: Server,
    title: 'Database',
    items: ['SQL', 'SELECT', 'WHERE', 'GROUP BY', 'JOIN', 'Aggregations', 'Subqueries'],
  },
  {
    icon: Table2,
    title: 'Excel',
    items: ['Pivot Tables', 'Excel Formulas', 'Data Cleaning', 'Data Analysis', 'Excel Dashboards', 'Reporting'],
  },
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'Pandas', 'NumPy', 'Basic Data Analysis'],
  },
  {
    icon: Wrench,
    title: 'Other Tools',
    items: ['Google Sheets', 'Microsoft Office', 'Tally ERP'],
  },
];

const primary = ['Power BI', 'SQL', 'Excel', 'Data Analysis'];
const working = ['Python', 'DAX', 'Power Query'];

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="bg-ink-50/60 dark:bg-ink-950/60 border-y border-ink-100 dark:border-ink-800">
      <div className="container-page section-pad">
        <div ref={ref} className="reveal">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Technical Skills</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
              The tools and techniques I use to work with data
            </h2>
          </div>

          {/* Proficiency */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="card p-6">
              <p className="text-[11px] uppercase tracking-wider text-ink-400 font-semibold mb-3">Primary Skills</p>
              <div className="flex flex-wrap gap-2">
                {primary.map((s) => (
                  <span key={s} className="badge border-accent-300/60 dark:border-accent-700/60 bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300 font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <p className="text-[11px] uppercase tracking-wider text-ink-400 font-semibold mb-3">Working Knowledge</p>
              <div className="flex flex-wrap gap-2">
                {working.map((s) => (
                  <span key={s} className="badge-tool">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {groups.map((g, i) => (
              <div key={g.title} className="card card-hover p-6" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-bold text-[15px] text-ink-900 dark:text-white">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="badge-tool">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
