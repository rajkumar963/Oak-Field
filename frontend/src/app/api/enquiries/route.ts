import { NextRequest, NextResponse } from 'next/server';
import { enquiryCategories } from '../../../lib/content';
const attempts = new Map<string,{ count:number; reset:number }>();
const reply = (message:string, status:number) => NextResponse.json({message},{status});
export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const expectedOrigin = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
    : `${request.nextUrl.protocol}//${request.headers.get('host')}`;
  if (!origin || origin !== expectedOrigin) return reply('This request could not be verified. Please use the website enquiry form.',403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply('Unsupported request format.',415);
  if (Number(request.headers.get('content-length') || 0) > 16000) return reply('Your message is too long.',413);
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local'; const now = Date.now();
  for (const [key,value] of attempts) if(value.reset < now) attempts.delete(key);
  const entry = attempts.get(ip) || {count:0,reset:now + 600000};
  if(entry.count >= 5) return reply('Too many attempts. Please wait ten minutes and try again.',429);
  entry.count++; attempts.set(ip,entry);
  let data: Record<string,unknown>;
  try { const raw = await request.text(); if(raw.length > 16000) return reply('Your message is too long.',413); data = JSON.parse(raw); if(!data || typeof data !== 'object' || Array.isArray(data)) return reply('Invalid form data.',400); } catch { return reply('We could not read your message. Please try again.',400); }
  if(data.website || typeof data.startedAt !== 'number' || now-data.startedAt < 2000 || data.startedAt > now) return reply('This submission could not be verified. Please wait a moment and try again.',400);
  const name = typeof data.name === 'string' ? data.name.trim() : ''; const email = typeof data.email === 'string' ? data.email.trim() : ''; const message = typeof data.message === 'string' ? data.message.trim() : ''; const organization = typeof data.organization === 'string' ? data.organization.trim() : ''; const phone = typeof data.phone === 'string' ? data.phone.trim() : ''; const phoneDigits = phone.replace(/\D/g,'').length;
  if(name.length < 2 || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 20 || message.length > 5000 || organization.length > 120 || phone.length > 30 || !/^\+?[\d\s().-]+$/.test(phone) || phoneDigits < 7 || phoneDigits > 15 || !enquiryCategories.some(c => c.label === data.category) || data.consent !== 'on') return reply('Please check the required fields and try again.',400);
  const destination = process.env.CONTACT_WEBHOOK_URL;
  if(!destination) return reply('Enquiry delivery is not yet available. Your message has not been sent or saved. Please return once the contact service is connected.',503);
  try { if(new URL(destination).protocol !== 'https:') return reply('The enquiry service is not available. Your message has not been sent.',503); const response = await fetch(destination,{ method:'POST',headers:{'Content-Type':'application/json', ...(process.env.CONTACT_WEBHOOK_TOKEN ? {Authorization:`Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`} : {})},body:JSON.stringify({name,email,phone,organization,category:data.category,message,consent:true,receivedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000),redirect:'error'}); if(!response.ok) return reply('The enquiry service could not accept your message. Please try again later.',502); return reply('Thank you. Your enquiry has been received by our contact service.',200); } catch { return reply('We could not confirm delivery. Please try again later.',502); }
}
