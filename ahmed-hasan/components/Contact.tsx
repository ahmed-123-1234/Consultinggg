'use client';
import { useState } from 'react';

const contactItems = [
  { icon: '📍', label: 'Location', value: 'Erbil, Kurdistan Region, Iraq', href: null },
  { icon: '📧', label: 'Email',    value: 'hello@ahmedhasan.com',           href: 'mailto:hello@ahmedhasan.com' },
  { icon: '📞', label: 'Phone',    value: '+964 7XX XXX XXXX',              href: 'tel:+964700000000' },
  {
    icon: '💼', label: 'LinkedIn',
    value: 'linkedin.com/in/ahmed-hasan-79502415a',
    href: 'https://www.linkedin.com/in/ahmed-hasan-79502415a/',
  },
];

const serviceOptions = [
  'Operational Audit & Process Review',
  'Procurement & Contract Audit',
  'Inventory & Warehouse Review',
  'Logistics & Supply Chain Audit',
  'Compliance & Internal Controls',
  'SOP Development & Process Improvement',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="contact" className="bg-navy-mid w-full py-24">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">Get in Touch</span>
        </div>
        <h2 className="font-cormorant font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.2] mb-4">
          Start a <em className="italic text-gold">Conversation</em>
        </h2>
        <p className="text-[0.95rem] leading-[1.8] text-white/60 max-w-[560px] mb-12">
          Ready to discuss how I can help your organization optimize operations, strengthen
          compliance, or improve procurement? Reach out today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Info */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 items-start p-5 border border-[rgba(201,168,76,0.2)] bg-white/[0.04] hover:border-gold transition-all duration-300"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-gold mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-[0.88rem] text-white/80 hover:text-gold transition-colors duration-300 underline-offset-2 decoration-[rgba(201,168,76,0.4)] underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-[0.88rem] text-white/80">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Domain */}
            <div className="border border-[rgba(201,168,76,0.2)] p-5 bg-white/[0.04]">
              <div className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-gold mb-2">
                Preferred Domain
              </div>
              <div className="font-cinzel text-[1.1rem] text-white">AhmedHasan.com</div>
              <div className="text-[0.75rem] text-[#8a96ab] mt-1">
                Also: AhmedHasanIQ.com · AhmedHasanConsulting.com
              </div>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.05)] p-12 text-center">
              <div className="text-3xl mb-4">✅</div>
              <div className="font-cormorant text-[1.5rem] text-white mb-2">Message Sent</div>
              <div className="text-[0.88rem] text-white/60">
                Thank you for reaching out. Ahmed will get back to you shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#8a96ab]">Full Name</label>
                  <input required type="text" placeholder="Your name" className="bg-white/[0.04] border border-[rgba(201,168,76,0.2)] text-white px-4 py-3 text-[0.88rem] outline-none focus:border-gold focus:bg-[rgba(201,168,76,0.04)] transition-all duration-300 placeholder-white/30" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#8a96ab]">Organization</label>
                  <input type="text" placeholder="Your company" className="bg-white/[0.04] border border-[rgba(201,168,76,0.2)] text-white px-4 py-3 text-[0.88rem] outline-none focus:border-gold focus:bg-[rgba(201,168,76,0.04)] transition-all duration-300 placeholder-white/30" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#8a96ab]">Email Address</label>
                  <input required type="email" placeholder="your@email.com" className="bg-white/[0.04] border border-[rgba(201,168,76,0.2)] text-white px-4 py-3 text-[0.88rem] outline-none focus:border-gold focus:bg-[rgba(201,168,76,0.04)] transition-all duration-300 placeholder-white/30" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#8a96ab]">Phone Number</label>
                  <input type="tel" placeholder="+964 7XX..." className="bg-white/[0.04] border border-[rgba(201,168,76,0.2)] text-white px-4 py-3 text-[0.88rem] outline-none focus:border-gold focus:bg-[rgba(201,168,76,0.04)] transition-all duration-300 placeholder-white/30" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#8a96ab]">Service of Interest</label>
                <select className="bg-navy-mid border border-[rgba(201,168,76,0.2)] text-white/80 px-4 py-3 text-[0.88rem] outline-none focus:border-gold transition-all duration-300 cursor-pointer">
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#8a96ab]">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project or challenge briefly..."
                  className="bg-white/[0.04] border border-[rgba(201,168,76,0.2)] text-white px-4 py-3 text-[0.88rem] outline-none focus:border-gold focus:bg-[rgba(201,168,76,0.04)] transition-all duration-300 resize-y placeholder-white/30"
                />
              </div>
              <button
                type="submit"
                className="self-start bg-gold text-navy text-[0.8rem] font-bold tracking-[0.12em] uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
