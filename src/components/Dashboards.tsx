import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import Placeholder from './Placeholder';

// Add an `image` path (e.g. '/dashboards/sales-analytics.png') per entry once
// you have the actual Power BI screenshots — see CONTENT_NEEDED.md.
const dashboards: { title: string; desc: string; category: string; image?: string }[] = [
  { title: 'AdVision — Ad Performance', desc: 'Multi-client, multi-platform ad spend, CPL and budget pacing.', category: 'Marketing Analytics', image: '/dashboards/advision.png' },
  { title: 'Prestige University — Lead Funnel', desc: 'Valid leads, lead stages and weekly volume tracking.', category: 'Education Analytics', image: '/dashboards/prestige.png' },
  { title: 'NSHM — Keyword & Campaign', desc: 'Wasted spend, keyword performance and CPL by program.', category: 'Marketing Analytics', image: '/dashboards/nshm.png' },
  { title: 'CRM Sales Pipeline', desc: 'Pipeline funnel, win rate and rep performance.', category: 'Sales Analytics', image: '/dashboards/crm.png' },
  { title: 'Supermarket Transactions', desc: 'Revenue trends, category performance and basket analysis.', category: 'Retail Analytics', image: '/dashboards/supermarket.png' },
  { title: 'KPI Reporting', desc: 'Executive KPI scorecard with trend indicators.', category: 'KPI Reporting', image: '/dashboards/kpi.png' },
];

export default function Dashboards() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="dashboards" className="container-page section-pad">
      <div ref={ref} className="reveal">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Power BI Dashboard Showcase</span>
          <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
            A gallery of dashboard previews across analytics domains
          </h2>
          <p className="text-body mt-4">
            A visual gallery of dashboard previews across marketing, sales, education, retail and
            executive KPI reporting — each built in Power BI with DAX measures, Power Query modeling
            and interactive, decision-ready visuals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dashboards.map((d, i) => (
            <div
              key={d.title}
              className="card card-hover overflow-hidden group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                {d.image ? (
                  <img
                    src={d.image}
                    alt={d.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Placeholder label={d.category} className="h-full w-full rounded-none border-0" icon="image" />
                )}
                <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors grid place-items-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity btn-accent px-3 py-2 text-[12px]">
                    <ArrowUpRight className="h-3.5 w-3.5" /> View Details
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-wider text-accent-600 dark:text-accent-400 font-semibold">
                  {d.category}
                </span>
                <h3 className="font-display font-bold text-[15px] text-ink-900 dark:text-white mt-1">{d.title}</h3>
                <p className="text-[13px] text-ink-500 dark:text-ink-300 mt-1.5 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
