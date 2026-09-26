'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { enquiryCategories } from '../lib/content';
const defaultCategory = 'General Enquiries';
export function ContactForm() {
  const [category, setCategory] = useState(defaultCategory); const [startedAt] = useState(() => Date.now());
  const [errors, setErrors] = useState<Record<string,string>>({}); const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle'); const [message, setMessage] = useState('');
  useEffect(() => { const match = enquiryCategories.find(c => c.slug === new URLSearchParams(window.location.search).get('category')); if (match) setCategory(match.label); }, []);
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; const data = Object.fromEntries(new FormData(form)); const issues: Record<string,string> = {};
    if (String(data.name || '').trim().length < 2) issues.name = 'Please enter your name (at least 2 characters).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || ''))) issues.email = 'Please enter a valid email address.';
    const phone = String(data.phone || '').trim(), digits = phone.replace(/\D/g, '').length;
    if (!/^\+?[\d\s().-]+$/.test(phone) || digits < 7 || digits > 15) issues.phone = 'Please enter a valid contact number.';
    if (String(data.message || '').trim().length < 20) issues.message = 'Please add a little more detail (at least 20 characters).';
    if (!data.consent) issues.consent = 'Please confirm that you have read the privacy notice.';
    setErrors(issues); if (Object.keys(issues).length) { setStatus('idle'); (form.elements.namedItem(Object.keys(issues)[0]) as HTMLElement)?.focus(); return; }
    setStatus('sending'); setMessage('');
    try { const response = await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, startedAt }) }); const result = await response.json(); setStatus(response.ok ? 'success' : 'error'); setMessage(result.message || 'We could not send your enquiry. Please try again.'); if (response.ok) { form.reset(); setCategory(defaultCategory); } }
    catch { setStatus('error'); setMessage('We could not connect. Your enquiry has not been sent. Please try again.'); }
  }
  const autoComplete: Record<string,string> = { name: 'name', email: 'email', phone: 'tel', organization: 'organization' };
  const field = (name: string, label: string, type = 'text', required = true) => <div className="form-field"><label htmlFor={name}>{label}{required ? ' *' : ' (optional)'}</label><input id={name} name={name} type={type} autoComplete={autoComplete[name]} required={required} maxLength={name === 'email' ? 254 : name === 'phone' ? 30 : 120} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined}/>{errors[name] && <p className="field-error" id={`${name}-error`}>{errors[name]}</p>}</div>;
  return <form className="contact-form" onSubmit={submit} noValidate><p className="form-notice">Fields marked * are required. Please keep confidential research and sensitive information out of your message.</p>
    <fieldset className="form-step"><legend><span>01</span>Your details</legend><div className="form-row">{field('name','Your name')}{field('email','Email address','email')}</div><div className="form-row">{field('phone','Contact number','tel')}{field('organization','Organization','text',false)}</div></fieldset>
    <fieldset className="form-step"><legend><span>02</span>What would you like to discuss?</legend><div className="form-chips">{enquiryCategories.map(c => <label key={c.slug} className="chip"><input type="radio" name="category" value={c.label} checked={category === c.label} onChange={() => setCategory(c.label)}/><span>{c.label}</span></label>)}</div></fieldset>
    <fieldset className="form-step"><legend><span>03</span>Your message</legend><div className="form-field"><label htmlFor="message">Your message *</label><textarea id="message" name="message" rows={5} maxLength={5000} required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}/>{errors.message && <p id="message-error" className="field-error">{errors.message}</p>}</div><div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div><label className="consent"><input type="checkbox" name="consent" required aria-describedby={errors.consent ? 'consent-error' : undefined}/><span>I have read the <Link href="/privacy">privacy notice</Link> and agree to the use of my details to respond to this enquiry. *</span></label>{errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}<button type="submit" className="button" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}<span aria-hidden="true">→</span></button></fieldset>
    <div aria-live="polite" aria-atomic="true">{message && <p className={`form-result ${status === 'error' ? 'error' : ''}`} role={status === 'error' ? 'alert' : 'status'}>{message}</p>}</div></form>;
}
