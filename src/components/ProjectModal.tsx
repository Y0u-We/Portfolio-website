import { useEffect, useState } from 'react';
import { X, Github, ArrowUpRight, CheckCircle2, Target, Database, BarChart3, Lightbulb, Wrench, FileSpreadsheet, Download } from 'lucide-react';
import type { Project } from '@/data/projects';
import Placeholder from './Placeholder';

type Props = { project: Project | null; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-white dark:bg-ink-900 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-5 lg:p-6 bg-white/95 dark:bg-ink-900/95 backdrop-blur border-b border-ink-100 dark:border-ink-800">
          <div>
            <span className="badge border-accent-300/60 dark:border-accent-700/60 bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300">
              {project.category}
            </span>
            <h3 className="font-display font-bold text-xl lg:text-2xl text-ink-900 dark:text-white mt-2.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid place-items-center h-10 w-10 rounded-xl border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-800 shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 lg:p-6 space-y-7">
          {/* Thumbnail */}
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-56 object-cover rounded-xl" />
          ) : (
            <Placeholder label="Dashboard Screenshot" className="h-56 w-full" icon="image" />
          )}

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-3">
              {project.gallery.map((src, i) => (
                <img
                  key={src + i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-40 object-cover rounded-xl border border-ink-100 dark:border-ink-800"
                />
              ))}
            </div>
          )}

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="badge-tool">{t}</span>
            ))}
          </div>

          {/* Overview */}
          <Block icon={Target} title="Project Overview">
            <p className="text-body">{project.summary}</p>
          </Block>

          {/* Business Problem */}
          <Block icon={Target} title="Business Problem">
            <p className="text-body">{project.businessProblem}</p>
          </Block>

          {/* Objective */}
          <Block icon={Target} title="Objective">
            <p className="text-body">{project.objective}</p>
          </Block>

          {/* Dataset */}
          <Block icon={Database} title="Dataset">
            <p className="text-body">{project.dataset}</p>
          </Block>

          {/* Data Preparation */}
          <Block icon={FileSpreadsheet} title="Data Preparation">
            <ul className="space-y-2">
              {project.dataPrep.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[14px] text-ink-600 dark:text-ink-300">
                  <CheckCircle2 className="h-4 w-4 text-accent-500 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </Block>

          {/* Analysis */}
          <Block icon={BarChart3} title="Analysis">
            <ul className="space-y-2">
              {project.analysis.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[14px] text-ink-600 dark:text-ink-300">
                  <CheckCircle2 className="h-4 w-4 text-accent-500 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </Block>

          {/* KPIs */}
          <Block icon={BarChart3} title="Key KPIs">
            <div className="flex flex-wrap gap-2">
              {project.kpis.map((k) => (
                <span key={k} className="badge border-brand-300/60 dark:border-brand-700/60 bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-300 font-semibold">
                  {k}
                </span>
              ))}
            </div>
          </Block>

          {/* Insights */}
          <Block icon={Lightbulb} title="Key Insights">
            <ul className="space-y-2">
              {project.insights.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[14px] text-ink-600 dark:text-ink-300">
                  <Lightbulb className="h-4 w-4 text-warning-500 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </Block>

          {/* Recommendations */}
          <Block icon={Lightbulb} title="Recommendations">
            <ul className="space-y-2">
              {project.recommendations.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[14px] text-ink-600 dark:text-ink-300">
                  <ArrowUpRight className="h-4 w-4 text-success-600 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </Block>

          {/* Skills */}
          <Block icon={Wrench} title="Skills Demonstrated">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <span key={s} className="badge-tool">{s}</span>
              ))}
            </div>
          </Block>

          {/* Links */}
          {(project.githubUrl || project.liveUrl || project.pdfUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.pdfUrl && (
                <a href={project.pdfUrl} download className="btn-primary">
                  <Download className="h-4 w-4" /> Download Case Study (PDF)
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-outline">
                  <Github className="h-4 w-4" /> View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-accent">
                  <ArrowUpRight className="h-4 w-4" /> Live Dashboard
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Block({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-display font-bold text-[15px] text-ink-900 dark:text-white mb-3">
        <Icon className="h-4.5 w-4.5 text-accent-500" />
        {title}
      </h4>
      {children}
    </div>
  );
}
