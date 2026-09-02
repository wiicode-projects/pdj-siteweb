import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logomascotte.svg';
import Footer from '../components/Footer';
import { LanguageSelector } from '../components/ui/LanguageSelector';
import { useLanguage } from '../i18n/LanguageContext';
import { useWebsiteContent } from '../i18n/WebsiteContentContext';
import { legalUi } from '../i18n/legal/ui';
import { submitContactForm } from '../lib/websiteApi';

type SubjectKey = 'app' | 'restaurant' | 'billing' | 'technical' | 'other';

const SUBJECT_KEYS: SubjectKey[] = ['app', 'restaurant', 'billing', 'technical', 'other'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20';

type FieldErrors = Partial<Record<'firstName' | 'lastName' | 'email' | 'subject' | 'message', string>>;

export default function Contact() {
  const { lang, t } = useLanguage();
  const { supportEmail, supportPhone } = useWebsiteContent();
  const ui = legalUi[lang];
  const c = t.contact;
  const f = t.footer;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjectKey, setSubjectKey] = useState<SubjectKey | ''>('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${c.pageTitle} — Le Plat du Jour`;
  }, [lang, c.pageTitle]);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!firstName.trim()) next.firstName = c.required;
    if (!lastName.trim()) next.lastName = c.required;
    if (!email.trim()) next.email = c.required;
    else if (!EMAIL_RE.test(email.trim())) next.email = c.invalidEmail;
    if (!subjectKey) next.subject = c.required;
    if (!message.trim()) next.message = c.required;
    else if (message.trim().length < 10) next.message = c.messageTooShort;
    return next;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitError('');
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitContactForm({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        subject: c.subjects[subjectKey as SubjectKey],
        message: message.trim(),
        website: honeypot,
      });
      setSuccess(true);
    } catch {
      setSubmitError(c.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setSubjectKey('');
    setMessage('');
    setHoneypot('');
    setErrors({});
    setSubmitError('');
    setSuccess(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5 px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img src={logo} alt="Le Plat du Jour" className="h-8 w-auto" />
          <span className="font-bold text-gray-900 truncate">Le Plat du Jour</span>
        </Link>
        <div className="flex items-center gap-3 flex-shrink-0">
          <LanguageSelector />
          <Link to="/" className="text-sm text-primary font-semibold hover:underline whitespace-nowrap">
            {ui.backHome}
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{c.pageTitle}</h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 items-start">
          <aside className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">{c.infoTitle}</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{c.writeUs}</p>
                  <a href={`mailto:${supportEmail}`} className="text-primary font-semibold hover:underline break-all">
                    {supportEmail}
                  </a>
                </div>
              </li>
              {supportPhone && (
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{c.phone}</p>
                    <a
                      href={`tel:${supportPhone.replace(/\s/g, '')}`}
                      className="text-gray-800 font-semibold hover:text-primary"
                    >
                      {supportPhone}
                    </a>
                  </div>
                </li>
              )}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </span>
                <address className="not-italic text-gray-600 leading-relaxed">
                  {f.address.company.replace(/\s*\/\s*$/, '')}
                  <br />
                  {f.address.street}
                  <br />
                  {f.address.city}
                  <br />
                  {f.address.country}
                </address>
              </li>
            </ul>
          </aside>

          <section className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 sm:p-8">
            {success ? (
              <div className="text-center py-10 px-4">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" aria-hidden />
                <h2 className="text-xl font-bold text-gray-900 mb-2">{c.successTitle}</h2>
                <p className="text-gray-500 mb-8">{c.successBody}</p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {c.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="relative space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    id="contact-first-name"
                    label={c.firstName}
                    value={firstName}
                    onChange={setFirstName}
                    error={errors.firstName}
                    autoComplete="given-name"
                  />
                  <Field
                    id="contact-last-name"
                    label={c.lastName}
                    value={lastName}
                    onChange={setLastName}
                    error={errors.lastName}
                    autoComplete="family-name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    id="contact-email"
                    label={c.email}
                    type="email"
                    value={email}
                    onChange={setEmail}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <Field
                    id="contact-phone"
                    label={`${c.phone} (${c.phoneHint})`}
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-800 mb-1.5">
                    {c.subject}
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={subjectKey}
                    onChange={(e) => setSubjectKey(e.target.value as SubjectKey | '')}
                    className={inputClass}
                    aria-invalid={Boolean(errors.subject)}
                  >
                    <option value="">{c.subjectPlaceholder}</option>
                    {SUBJECT_KEYS.map((key) => (
                      <option key={key} value={key}>
                        {c.subjects[key]}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-primary">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-800 mb-1.5">
                    {c.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={c.messagePlaceholder}
                    className={`${inputClass} resize-y min-h-[140px]`}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-primary">{errors.message}</p>
                  )}
                </div>
                <div className="sr-only" aria-hidden>
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
                {submitError && (
                  <p className="text-sm text-primary" role="alert">
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {c.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {c.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className={inputClass}
        aria-invalid={Boolean(error)}
      />
      {error && <p className="mt-1.5 text-xs text-primary">{error}</p>}
    </div>
  );
}
