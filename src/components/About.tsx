import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/profile';

const steps = [
  { n: '01', title: 'Understand', desc: 'Understand the business problem and define objectives.' },
  { n: '02', title: 'Collect', desc: 'Identify and gather relevant data.' },
  { n: '03', title: 'Clean', desc: 'Handle missing values, duplicates, inconsistencies and formatting issues.' },
  { n: '04', title: 'Analyze', desc: 'Explore patterns, trends, relationships and KPIs.' },
  { n: '05', title: 'Visualize', desc: 'Build clear dashboards and meaningful visualizations.' },
  { n: '06', title: 'Recommend', desc: 'Translate insights into actionable business recommendations.' },
];

export default function About() {
  const aboutRef = useReveal<HTMLDivElement>();
  const approachRef = useReveal<HTMLDivElement>();

  return (
    <>
      <section id="about" className="container-page section-pad">
        <div ref={aboutRef} className="reveal grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">About Me</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
              I turn complex datasets into clear, decision-ready insights.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5">
            <p className="text-body">
              I'm an <strong className="text-ink-800 dark:text-white">MCA graduate</strong> building my career as a{' '}
              <strong className="text-ink-800 dark:text-white">Data Analyst</strong>. I'm interested in data analysis,
              business intelligence, data visualization, dashboard development, business reporting and data-driven
              decision making.
            </p>
            <p className="text-body">
              I enjoy converting complex datasets into simple and meaningful insights. My analytical approach is
              structured and outcome-focused:
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Understand', 'Clean', 'Analyze', 'Visualize', 'Communicate'].map((s, i) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span className="badge border-accent-300/60 dark:border-accent-700/60 bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300 font-semibold">
                    {s}
                  </span>
                  {i < 4 && <span className="text-ink-300 dark:text-ink-600">→</span>}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {[
                { label: 'Role', value: profile.role },
                { label: 'Core Tools', value: 'Power BI · SQL · Excel' },
                { label: 'Education', value: 'MCA · 8.07 CGPA' },
                { label: 'Open To', value: 'Analytics Roles' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-ink-50 dark:bg-ink-800/60 p-3.5">
                  <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">{s.label}</p>
                  <p className="text-[13px] font-semibold text-ink-800 dark:text-ink-100 mt-1">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 lg:pb-28">
        <div ref={approachRef} className="reveal">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow justify-center">How I Approach Data</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
              A structured path from problem to recommendation
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="card card-hover p-6 relative overflow-hidden group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="absolute top-4 right-5 font-display font-extrabold text-4xl text-ink-100 dark:text-ink-800 group-hover:text-accent-100 dark:group-hover:text-accent-900/40 transition-colors">
                  {step.n}
                </span>
                <h3 className="font-display font-bold text-base text-ink-900 dark:text-white relative">{step.title}</h3>
                <p className="text-[13px] text-ink-500 dark:text-ink-300 mt-2 leading-relaxed relative">{step.desc}</p>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-ink-200 dark:text-ink-700 z-10">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
