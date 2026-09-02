import { Download, FileText, User, Wrench, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

export default function Resume() {
  const ref = useReveal<HTMLDivElement>();
  const snapRef = useReveal<HTMLDivElement>();

  const snapshot = [
    { icon: User, label: 'Role', value: profile.role },
    { icon: Wrench, label: 'Core Tools', value: profile.coreTools },
    { icon: Briefcase, label: 'Specialization', value: profile.specialization },
    { icon: GraduationCap, label: 'Education', value: profile.educationShort },
    { icon: CheckCircle2, label: 'Open To', value: profile.openTo },
  ];

  return (
    <>
      {/* Recruiter Snapshot */}
      <section className="bg-ink-50/60 dark:bg-ink-950/60 border-y border-ink-100 dark:border-ink-800">
        <div className="container-page section-pad">
          <div ref={snapRef} className="reveal">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow">Recruiter Snapshot</span>
              <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
                Your 30-second summary of my profile
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 items-stretch">
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {snapshot.map((s) => (
                  <div key={s.label} className="card p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="grid place-items-center h-9 w-9 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900">
                        <s.icon className="h-4.5 w-4.5" />
                      </span>
                      <p className="text-[11px] uppercase tracking-wider text-ink-400 font-semibold">{s.label}</p>
                    </div>
                    <p className="text-[14px] font-semibold text-ink-800 dark:text-ink-100 leading-snug">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="card p-6 flex flex-col justify-center bg-ink-900 dark:bg-ink-950 text-white border-ink-900 dark:border-ink-800">
                <h3 className="font-display font-bold text-lg">Want the full picture?</h3>
                <p className="text-[13px] text-ink-300 mt-2 leading-relaxed">
                  Download my resume for education, technical skills, projects and certifications.
                </p>
                <a href={profile.resumeUrl} download className="btn-accent mt-5 w-full">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="container-page section-pad">
        <div ref={ref} className="reveal">
          <div className="rounded-3xl border border-ink-100 dark:border-ink-800 bg-gradient-to-br from-white to-ink-50/60 dark:from-ink-900 dark:to-ink-950 p-8 lg:p-14 text-center">
            <span className="eyebrow justify-center">My Resume</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white max-w-2xl mx-auto">
              Want to know more about my profile?
            </h2>
            <p className="text-body mt-4 max-w-xl mx-auto">
              Download my resume to explore my education, technical skills, projects and certifications.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={profile.resumeUrl} download className="btn-primary">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
                <FileText className="h-4 w-4" /> View Resume
              </a>
            </div>
            <p className="text-[11px] text-ink-400 mt-5">
              Update the resume by replacing the file at <code className="font-mono text-ink-500 dark:text-ink-300">public/resume.pdf</code> or the <code className="font-mono text-ink-500 dark:text-ink-300">resumeUrl</code> value.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
