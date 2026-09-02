import { useState } from 'react';
import { ArrowUpRight, Github, Eye } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { useReveal } from '@/hooks/useReveal';
import Placeholder from './Placeholder';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-ink-50/60 dark:bg-ink-950/60 border-y border-ink-100 dark:border-ink-800">
      <div className="container-page section-pad">
        <div ref={ref} className="reveal">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Featured Data Analytics Projects</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
              Projects demonstrating how I use data, technology and analytical thinking to solve business problems.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {projects.map((p, i) => (
              <article
                key={p.id}
                className="card card-hover overflow-hidden group flex flex-col"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  {p.thumbnail ? (
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Placeholder label={`${p.category} Dashboard`} className="h-full w-full rounded-none border-0" icon="image" />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="badge border-white/40 bg-white/90 backdrop-blur text-ink-700 text-[11px] font-semibold">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-ink-900 dark:text-white">{p.title}</h3>
                  <p className="text-[13px] text-ink-500 dark:text-ink-300 mt-2 leading-relaxed flex-1">
                    {p.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tools.map((t) => (
                      <span key={t} className="badge-tool text-[11px]">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-5 pt-5 border-t border-ink-100 dark:border-ink-800">
                    <button
                      onClick={() => setActive(p)}
                      className="btn-primary px-4 py-2.5 text-[13px] flex-1"
                    >
                      <Eye className="h-4 w-4" /> View Project
                    </button>
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                        className="grid place-items-center h-10 w-10 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                      >
                        <Github className="h-4.5 w-4.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
