import { useReveal } from '@/hooks/useReveal';
import { Briefcase, GraduationCap, Award, ExternalLink, Calendar, Download, CheckCircle2 } from 'lucide-react';
import { experiences, education, certifications } from '@/data/credentials';

export default function Experience() {
  const expRef = useReveal<HTMLDivElement>();
  const eduRef = useReveal<HTMLDivElement>();
  const certRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Experience */}
      <section id="experience" className="container-page section-pad">
        <div ref={expRef} className="reveal">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Experience</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
              Internships, freelance work and projects
            </h2>
            <p className="text-body mt-4">
              A timeline of my hands-on analytics experience — from a live client-facing internship
              building real-time Power BI dashboards, to independent projects sharpening my data
              modeling, DAX and reporting skills.
            </p>
          </div>
          <div className="relative max-w-3xl">
            <span className="absolute left-[19px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-800" />
            <div className="space-y-6">
              {experiences.map((e) => (
                <div key={e.role} className="relative pl-14">
                  <span className="absolute left-0 top-1 grid place-items-center h-10 w-10 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div className="card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-[15px] text-ink-900 dark:text-white">{e.role}</h3>
                      <span className="inline-flex items-center gap-1.5 text-[12px] text-ink-400 font-medium">
                        <Calendar className="h-3.5 w-3.5" /> {e.date}
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold text-accent-600 dark:text-accent-400 mt-1">{e.org}</p>
                    <p className="text-[13px] text-ink-500 dark:text-ink-300 mt-2 leading-relaxed">{e.description}</p>
                    {e.highlights && e.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {e.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5 text-[13px] text-ink-600 dark:text-ink-300 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-accent-500 dark:text-accent-400" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {e.tools && e.tools.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-ink-100 dark:border-ink-800">
                        {e.tools.map((t) => (
                          <span key={t} className="badge-tool text-[11px]">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-ink-50/60 dark:bg-ink-950/60 border-y border-ink-100 dark:border-ink-800">
        <div className="container-page section-pad">
          <div ref={eduRef} className="reveal">
            <div className="max-w-2xl mb-12">
              <span className="eyebrow">Education</span>
              <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">Academic background</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
              {education.map((ed) => (
                <div key={ed.degree} className="card card-hover p-6">
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 mb-4">
                    <GraduationCap className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="font-display font-bold text-[15px] text-ink-900 dark:text-white">{ed.degree}</h3>
                  {ed.org && <p className="text-[13px] text-ink-500 dark:text-ink-300 mt-1">{ed.org}</p>}
                  {ed.detail && (
                    <p className="mt-3 text-[13px] font-semibold text-accent-600 dark:text-accent-400">
                      {ed.detail}
                    </p>
                  )}
                  <div className="mt-4">
                    {ed.downloadUrl ? (
                      <a
                        href={ed.downloadUrl}
                        download
                        className="inline-flex items-center gap-1.5 rounded-lg border border-accent-300/60 dark:border-accent-700/60 bg-accent-50 dark:bg-accent-500/10 px-3 py-1.5 text-[12px] font-semibold text-accent-700 dark:text-accent-300 hover:border-accent-400 hover:bg-accent-100/70 dark:hover:bg-accent-500/20 transition-colors"
                      >
                        <Download className="h-3.5 w-3.5" /> Download Certificate
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[12px] text-ink-400">
                        Certificate coming soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="container-page section-pad">
        <div ref={certRef} className="reveal">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Certifications</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">Professional certifications</h2>
            <p className="text-body mt-4">
              Credentials earned across advertising, spreadsheets, data analytics and programming.
            </p>
          </div>
          {certifications.length === 0 && (
            <div className="card p-8 text-center text-[13px] text-ink-400">
              Certifications will appear here once added.
            </div>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {certifications.map((c, i) => (
              <div key={c.name} className="card card-hover p-6 flex flex-col" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 mb-4">
                  <Award className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display font-bold text-[14px] text-ink-900 dark:text-white leading-snug">{c.name}</h3>
                <p className="text-[12px] text-ink-500 dark:text-ink-300 mt-1.5">{c.issuer}</p>
                <p className="text-[12px] text-ink-400 mt-2 flex-1">{c.description}</p>
                {c.credentialUrl ? (
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent-600 dark:text-accent-400 hover:underline"
                    >
                      View <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={c.credentialUrl}
                      download
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent-600 dark:text-accent-400 hover:underline"
                    >
                      Download <Download className="h-3 w-3" />
                    </a>
                  </div>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-ink-400 mt-3">
                    Credential link placeholder
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
