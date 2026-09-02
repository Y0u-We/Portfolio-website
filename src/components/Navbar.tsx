import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Download, BarChart3 } from 'lucide-react';
import { navItems, profile } from '@/data/profile';
import { useActiveSection, useTheme } from '@/hooks/useReveal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const active = useActiveSection(navItems.map((n) => n.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-ink-950/85 backdrop-blur-xl border-b border-ink-100 dark:border-ink-800 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 lg:h-18">
        <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 group-hover:bg-accent-600 dark:group-hover:bg-accent-500 dark:group-hover:text-white transition-colors">
            <BarChart3 className="h-5 w-5" />
          </span>
          <span className="text-left leading-tight">
            <span className="block font-display font-bold text-[15px] text-ink-900 dark:text-white">
              {profile.name}
            </span>
            <span className="block text-[11px] font-medium text-ink-500 dark:text-ink-400">
              {profile.role}
            </span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                  isActive
                    ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10'
                    : 'text-ink-500 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white hover:bg-ink-50 dark:hover:bg-ink-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid place-items-center h-10 w-10 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex btn-accent px-4 py-2.5 text-[13px]"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden grid place-items-center h-10 w-10 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-ink-950 border-b border-ink-100 dark:border-ink-800`}
      >
        <div className="container-page py-4 grid grid-cols-2 gap-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                active === item.href.slice(1)
                  ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10'
                  : 'text-ink-600 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="col-span-2 btn-accent px-4 py-3 mt-2"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
