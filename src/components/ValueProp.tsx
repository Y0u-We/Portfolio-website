import { Database, BarChart3, Database as SqlIcon, Table2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const items = [
  {
    icon: Database,
    title: 'Data Analysis',
    desc: 'Transform raw datasets into useful insights.',
    color: 'text-accent-600 dark:text-accent-400',
    bg: 'bg-accent-50 dark:bg-accent-500/10',
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    desc: 'Build interactive dashboards and KPI reports.',
    color: 'text-brand-600 dark:text-brand-400',
    bg: 'bg-brand-50 dark:bg-brand-500/10',
  },
  {
    icon: SqlIcon,
    title: 'SQL',
    desc: 'Extract, filter, join and analyze data.',
    color: 'text-ink-700 dark:text-ink-200',
    bg: 'bg-ink-100 dark:bg-ink-800',
  },
  {
    icon: Table2,
    title: 'Excel',
    desc: 'Perform analysis, reporting and data management.',
    color: 'text-success-600 dark:text-success-400',
    bg: 'bg-success-50 dark:bg-success-500/10',
  },
];

export default function ValueProp() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="container-page -mt-2 lg:-mt-6 relative z-10">
      <div ref={ref} className="reveal grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="card card-hover p-5 lg:p-6"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className={`grid place-items-center h-11 w-11 rounded-xl ${item.bg} ${item.color} mb-4`}>
              <item.icon className="h-5.5 w-5.5" />
            </span>
            <h3 className="font-display font-bold text-[15px] text-ink-900 dark:text-white">{item.title}</h3>
            <p className="text-[13px] text-ink-500 dark:text-ink-300 mt-1.5 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
