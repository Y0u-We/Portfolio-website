import { ArrowRight, Download, Linkedin, Github, Mail, TrendingUp, TrendingDown, Filter, User } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

function ProfilePhoto() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative h-40 w-40 sm:h-52 sm:w-52 shrink-0 mb-7">
      {/* Soft glow behind everything */}
      <span className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent-500/25 via-brand-500/20 to-accent-400/25 blur-2xl" />
      {/* Decorative dot grid */}
      <span
        className="absolute -inset-8 -z-10 opacity-70 dark:opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(28,117,245,0.35) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
          maskImage: 'radial-gradient(circle, black 45%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 72%)',
        }}
      />
      {/* Extra floating accent shapes */}
      <span className="absolute -top-4 -right-3 h-6 w-6 rounded-lg bg-accent-400/30 rotate-12 animate-pulse-soft" />
      <span className="absolute -bottom-3 -left-4 h-8 w-8 rounded-full bg-brand-500/20 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
      {/* Rotating gradient ring */}
      <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-accent-500 via-brand-500 to-accent-400 opacity-70 blur-[2px] animate-pulse-soft" />
      <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent-500 via-brand-500 to-accent-400" />
      {/* Dashed orbit ring */}
      <span
        className="absolute -inset-3 rounded-full border border-dashed border-accent-400/40 dark:border-accent-500/30 animate-[spin_18s_linear_infinite]"
        style={{ maskImage: 'radial-gradient(circle, transparent 58%, black 60%)', WebkitMaskImage: 'radial-gradient(circle, transparent 58%, black 60%)' }}
      />
      <span className="relative block h-full w-full rounded-full overflow-hidden bg-ink-100 dark:bg-ink-800 ring-2 ring-white dark:ring-ink-950">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt={`${profile.name} — ${profile.role}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="grid place-items-center h-full w-full text-ink-400 dark:text-ink-500">
            <User className="h-12 w-12" />
          </span>
        )}
      </span>
      {/* Status dot */}
      <span className="absolute bottom-2.5 right-2.5 h-6 w-6 rounded-full bg-success-500 ring-4 ring-white dark:ring-ink-950 grid place-items-center">
        <span className="h-2 w-2 rounded-full bg-white" />
      </span>
      {/* Hidden initials for accessibility fallback */}
      <span className="sr-only">{initials}</span>
    </div>
  );
}

function MiniDashboard() {
  const bars = [42, 58, 35, 70, 52, 80, 64];
  const linePoints = [20, 35, 28, 50, 44, 62, 58, 75];
  const donut = [
    { label: 'Online', value: 44, color: '#06b0d4' },
    { label: 'Retail', value: 32, color: '#1c75f5' },
    { label: 'Other', value: 24, color: '#a3b5cd' },
  ];
  const topChannels = [
    { label: 'Paid Search', value: 86, color: '#1c75f5' },
    { label: 'Organic', value: 64, color: '#06b0d4' },
    { label: 'Social', value: 48, color: '#22ccec' },
    { label: 'Referral', value: 31, color: '#6f88ad' },
  ];
  const maxBar = Math.max(...bars);
  const circumference = 2 * Math.PI * 36;
  const donutSegments = donut.map((d, i) => {
    const offset = donut.slice(0, i).reduce((s, x) => s + x.value, 0);
    return {
      ...d,
      dasharray: `${(d.value / 100) * circumference} ${circumference}`,
      dashoffset: -(offset / 100) * circumference,
    };
  });

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Floating KPI card */}
      <div className="absolute -top-4 -left-4 z-20 card px-4 py-3 w-40 animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">Avg. Order Value</p>
        <p className="font-display font-bold text-xl text-ink-900 dark:text-white mt-0.5">$184.20</p>
        <p className="text-[11px] text-success-600 dark:text-success-400 flex items-center gap-1 font-medium">
          <TrendingUp className="h-3 w-3" /> +12.4% vs last period
        </p>
      </div>

      <div className="absolute -bottom-4 -right-4 z-20 card px-4 py-3 w-40 animate-fade-up" style={{ animationDelay: '0.55s' }}>
        <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">Conversion Rate</p>
        <p className="font-display font-bold text-xl text-ink-900 dark:text-white mt-0.5">3.8%</p>
        <p className="text-[11px] text-error-500 dark:text-error-400 flex items-center gap-1 font-medium">
          <TrendingDown className="h-3 w-3" /> -0.6% vs target
        </p>
      </div>

      {/* Main dashboard panel */}
      <div className="card p-5 animate-scale-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-error-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-success-400" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-ink-400 font-medium">
            <Filter className="h-3 w-3" /> Q4 Overview
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            { label: 'Revenue', value: '$248K', trend: '+8.2%', up: true },
            { label: 'Customers', value: '1,924', trend: '+5.1%', up: true },
            { label: 'Leads', value: '3,410', trend: '-2.3%', up: false },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl bg-ink-50 dark:bg-ink-800/60 p-3">
              <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">{kpi.label}</p>
              <p className="font-display font-bold text-base text-ink-900 dark:text-white mt-0.5">{kpi.value}</p>
              <p className={`text-[10px] flex items-center gap-0.5 font-medium ${kpi.up ? 'text-success-600 dark:text-success-400' : 'text-error-500 dark:text-error-400'}`}>
                {kpi.up ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                {kpi.trend}
              </p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-5 gap-3">
          {/* Bar chart */}
          <div className="col-span-3 rounded-xl bg-ink-50 dark:bg-ink-800/60 p-3">
            <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold mb-2">Weekly Sales</p>
            <div className="flex items-end justify-between h-24 gap-1.5">
              {bars.map((b, i) => (
                <div key={i} className="flex-1 h-full flex flex-col items-center justify-end gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-brand-500 to-accent-400 origin-bottom animate-grow-bar"
                    style={{ height: `${(b / maxBar) * 100}%`, animationDelay: `${0.6 + i * 0.08}s` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Donut */}
          <div className="col-span-2 rounded-xl bg-ink-50 dark:bg-ink-800/60 p-3">
            <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold mb-2">Channels</p>
            <div className="relative grid place-items-center">
              <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                <circle cx="40" cy="40" r="36" fill="none" stroke="#e8edf3" strokeWidth="8" className="dark:stroke-ink-700" />
                {donutSegments.map((s) => (
                  <circle
                    key={s.label}
                    cx="40" cy="40" r="36" fill="none"
                    stroke={s.color} strokeWidth="8"
                    strokeDasharray={s.dasharray}
                    strokeDashoffset={s.dashoffset}
                    className="transition-all duration-700"
                  />
                ))}
              </svg>
              <div className="absolute text-center">
                <p className="font-display font-bold text-sm text-ink-900 dark:text-white">100%</p>
              </div>
            </div>
            <div className="mt-2 space-y-1">
              {donut.map((d) => (
                <div key={d.label} className="flex items-center gap-1.5 text-[10px] text-ink-500 dark:text-ink-300">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  {d.label} {d.value}%
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Line chart */}
        <div className="mt-3 rounded-xl bg-ink-50 dark:bg-ink-800/60 p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">Revenue Trend</p>
            <span className="text-[10px] font-semibold text-success-600 dark:text-success-400 flex items-center gap-0.5">
              <TrendingUp className="h-2.5 w-2.5" /> +18.6%
            </span>
          </div>
          <svg viewBox="0 0 200 60" className="w-full h-16">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b0d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b0d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[15, 30, 45].map((gy) => (
              <line key={gy} x1="0" y1={gy} x2="200" y2={gy} stroke="#a3b5cd" strokeOpacity="0.18" strokeWidth="0.5" />
            ))}
            <polygon
              fill="url(#lineGrad)"
              points={`0,60 ${linePoints.map((p, i) => `${(i / (linePoints.length - 1)) * 200},${60 - (p / 80) * 50}`).join(' ')} 200,60`}
            />
            <polyline
              fill="none"
              stroke="#06b0d4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={linePoints.map((p, i) => `${(i / (linePoints.length - 1)) * 200},${60 - (p / 80) * 50}`).join(' ')}
            />
            {linePoints.map((p, i) => (
              <circle
                key={i}
                cx={(i / (linePoints.length - 1)) * 200}
                cy={60 - (p / 80) * 50}
                r="2"
                fill="#ffffff"
                stroke="#06b0d4"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>

        {/* Top channels horizontal bars */}
        <div className="mt-3 rounded-xl bg-ink-50 dark:bg-ink-800/60 p-3">
          <p className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold mb-2.5">Top Channels by Leads</p>
          <div className="space-y-2">
            {topChannels.map((ch, i) => (
              <div key={ch.label} className="flex items-center gap-2">
                <span className="text-[10px] text-ink-500 dark:text-ink-300 font-medium w-20 shrink-0">{ch.label}</span>
                <div className="flex-1 h-2 rounded-full bg-ink-200/70 dark:bg-ink-700 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${ch.value}%`, background: ch.color }}
                  />
                </div>
                <span className="text-[10px] font-semibold text-ink-600 dark:text-ink-200 w-7 text-right">{ch.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(28,117,245,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,117,245,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div ref={ref} className="container-page grid lg:grid-cols-2 gap-12 lg:gap-8 items-center reveal">
        <div className="animate-fade-up">
          <ProfilePhoto />
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse-soft" />
            {profile.role}
          </span>
          <h1 className="heading-xl mt-4 text-ink-900 dark:text-white">
            Turning Data Into{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent-500 to-brand-600 bg-clip-text text-transparent">
                Actionable Insights.
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-accent-400 to-brand-500 opacity-60" />
            </span>
          </h1>
          <p className="heading-md mt-5 font-semibold text-ink-600 dark:text-ink-300">
            {profile.headline}
          </p>
          <p className="text-body mt-4 max-w-xl">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a href={profile.resumeUrl} download className="btn-outline">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="grid place-items-center h-11 w-11 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5 transition-all">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="grid place-items-center h-11 w-11 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5 transition-all">
              <Github className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email"
              className="grid place-items-center h-11 w-11 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:-translate-y-0.5 transition-all">
              <Mail className="h-5 w-5" />
            </a>
            <span className="text-xs text-ink-400 ml-1 hidden sm:inline">Open to opportunities</span>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <MiniDashboard />
        </div>
      </div>
    </section>
  );
}
