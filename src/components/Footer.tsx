import { BarChart3, Linkedin, Github, Mail, Download, ArrowUp } from 'lucide-react';
import { navItems, profile } from '@/data/profile';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 dark:bg-ink-950 text-ink-300">
      <div className="container-page py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-accent-500 text-white">
                <BarChart3 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-bold text-[15px] text-white">{profile.name}</p>
                <p className="text-[11px] text-ink-400">{profile.headline}</p>
              </div>
            </div>
            <p className="text-[13px] text-ink-400 mt-4 max-w-xs leading-relaxed">
              Turning data into actionable business insights through analysis, visualization and reporting.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid place-items-center h-9 w-9 rounded-lg border border-ink-700 hover:border-accent-500 hover:text-accent-400 transition-colors">
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid place-items-center h-9 w-9 rounded-lg border border-ink-700 hover:border-accent-500 hover:text-accent-400 transition-colors">
                <Github className="h-4.5 w-4.5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="grid place-items-center h-9 w-9 rounded-lg border border-ink-700 hover:border-accent-500 hover:text-accent-400 transition-colors">
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold mb-4">Quick Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((n) => (
                <button
                  key={n.href}
                  onClick={() => document.querySelector(n.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-[13px] text-ink-400 hover:text-accent-400 transition-colors"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wider text-ink-500 font-semibold mb-4">Resume</p>
            <p className="text-[13px] text-ink-400 mb-4 leading-relaxed">
              Download my resume for a complete overview of my profile.
            </p>
            <a href={profile.resumeUrl} download className="btn-accent">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-ink-500">© {year} {profile.name}. All Rights Reserved.</p>
          <button onClick={scrollTop} className="inline-flex items-center gap-1.5 text-[12px] text-ink-400 hover:text-accent-400 transition-colors">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
