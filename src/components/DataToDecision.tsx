import { useReveal } from '@/hooks/useReveal';
import { Database, Sparkles, Search, BarChart3, Lightbulb, CheckCircle2 } from 'lucide-react';

const stages = [
  { icon: Database, title: 'Raw Data', desc: 'Messy spreadsheets and datasets', tone: 'text-ink-500 dark:text-ink-400', bg: 'bg-ink-100 dark:bg-ink-800' },
  { icon: Sparkles, title: 'Data Preparation', desc: 'Cleaning and transformation', tone: 'text-brand-600 dark:text-brand-400', bg: 'bg-brand-50 dark:bg-brand-500/10' },
  { icon: Search, title: 'Analysis', desc: 'Patterns, trends and KPIs', tone: 'text-accent-600 dark:text-accent-400', bg: 'bg-accent-50 dark:bg-accent-500/10' },
  { icon: BarChart3, title: 'Visualization', desc: 'Power BI and Excel dashboards', tone: 'text-success-600 dark:text-success-400', bg: 'bg-success-50 dark:bg-success-500/10' },
  { icon: Lightbulb, title: 'Insight', desc: 'Meaningful business findings', tone: 'text-warning-600 dark:text-warning-400', bg: 'bg-warning-50 dark:bg-warning-500/10' },
  { icon: CheckCircle2, title: 'Decision', desc: 'Actionable recommendations', tone: 'text-ink-900 dark:text-white', bg: 'bg-ink-900 dark:bg-white text-white dark:text-ink-900' },
];

export default function DataToDecision() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-ink-900 dark:bg-ink-950 text-white">
      <div className="absolute inset-0 -z-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
      </div>
      <div className="container-page section-pad relative">
        <div ref={ref} className="reveal">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow text-accent-400">From Data to Decision</span>
            <h2 className="heading-lg mt-3 text-white">
              The real value of a Data Analyst, visualized
            </h2>
            <p className="text-[15px] leading-relaxed text-ink-300 mt-4">
              Data alone doesn't drive decisions. The value is in the transformation — from raw, messy inputs to
              clear, actionable recommendations a business can act on.
            </p>
          </div>

          <div className="grid lg:grid-cols-6 gap-4 lg:gap-3 items-stretch">
            {stages.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5 hover:bg-white/[0.08] transition-colors">
                  <span className={`grid place-items-center h-11 w-11 rounded-xl ${s.bg} ${s.tone} mb-4`}>
                    <s.icon className="h-5.5 w-5.5" />
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">Step {i + 1}</p>
                  <h3 className="font-display font-bold text-[15px] text-white mt-1">{s.title}</h3>
                  <p className="text-[12px] text-ink-300 mt-1.5 leading-relaxed">{s.desc}</p>
                </div>
                {i < stages.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-2 z-10 text-accent-400 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
