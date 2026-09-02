import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReveal } from '@/hooks/useReveal';

type Errors = { name?: string; email?: string; subject?: string; message?: string };

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setFailed(false);

    if (profile.contactFormEndpoint) {
      // Submit in-page to a form backend (e.g. Formspree) — no email client needed.
      setSending(true);
      try {
        const res = await fetch(profile.contactFormEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(ev.target as HTMLFormElement),
        });
        if (res.ok) {
          setSent(true);
          setForm({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSent(false), 5000);
        } else {
          setFailed(true);
        }
      } catch {
        setFailed(true);
      } finally {
        setSending(false);
      }
      return;
    }

    // Fallback: opens the user's email client with a pre-filled message.
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const update = (k: keyof typeof form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  return (
    <section id="contact" className="container-page section-pad">
      <div ref={ref} className="reveal">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
              Let's Turn Data Into Insights.
            </h2>
            <p className="text-body mt-4 max-w-md">
              I'm open to Data Analyst opportunities, analytics projects, business intelligence work and professional
              collaborations.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 card p-4 hover:border-accent-400 transition-colors">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-ink-400 font-semibold">Email</span>
                  <span className="block text-[14px] font-semibold text-ink-800 dark:text-ink-100">{profile.email}</span>
                </span>
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 card p-4 hover:border-accent-400 transition-colors">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Linkedin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-ink-400 font-semibold">LinkedIn</span>
                  <span className="block text-[14px] font-semibold text-ink-800 dark:text-ink-100">View my profile</span>
                </span>
              </a>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 card p-4 hover:border-accent-400 transition-colors">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200">
                  <Github className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-ink-400 font-semibold">GitHub</span>
                  <span className="block text-[14px] font-semibold text-ink-800 dark:text-ink-100">View my code</span>
                </span>
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-[12px] text-ink-500 dark:text-ink-300">
              <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> {profile.phone}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {profile.location}</span>
            </div>
          </div>

          {/* Form */}
          <div className="card p-6 lg:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[12px] font-semibold text-ink-700 dark:text-ink-200 mb-1.5">Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={update('name')} placeholder="Your name" className="input-field" />
                  {errors.name && <p className="text-[11px] text-error-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[12px] font-semibold text-ink-700 dark:text-ink-200 mb-1.5">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={update('email')} placeholder="you@email.com" className="input-field" />
                  {errors.email && <p className="text-[11px] text-error-500 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[12px] font-semibold text-ink-700 dark:text-ink-200 mb-1.5">Subject</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={update('subject')} placeholder="What's this about?" className="input-field" />
                {errors.subject && <p className="text-[11px] text-error-500 mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-[12px] font-semibold text-ink-700 dark:text-ink-200 mb-1.5">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={update('message')} placeholder="Tell me about the opportunity or project..." className="input-field resize-none" />
                {errors.message && <p className="text-[11px] text-error-500 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
                {sending ? (
                  <>Sending…</>
                ) : sent ? (
                  <><CheckCircle2 className="h-4 w-4" /> {profile.contactFormEndpoint ? 'Message sent!' : 'Opening your email…'}</>
                ) : (
                  <><Send className="h-4 w-4" /> Send Message</>
                )}
              </button>
              {failed && (
                <p className="text-[11px] text-error-500 text-center">
                  Something went wrong sending your message. Please try again or email me directly at {profile.email}.
                </p>
              )}
              <p className="text-[11px] text-ink-400 text-center">
                {profile.contactFormEndpoint
                  ? 'Your message is sent directly — no email client required.'
                  : 'This form opens your email client with your message pre-filled.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
