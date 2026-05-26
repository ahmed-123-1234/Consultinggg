const footerServices = [
  'Operational Audit',
  'Procurement Audit',
  'Logistics Review',
  'Compliance Controls',
  'SOP Development',
];

const footerIndustries = ['Oil & Gas', 'Logistics', 'Trading', 'NGOs', 'Healthcare'];

const footerNav = [
  { href: '#about',          label: 'About Me' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#resources',      label: 'Resources' },
  { href: '#contact',        label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[rgba(201,168,76,0.2)]">
      <div className="max-w-[1200px] mx-auto px-10 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-[rgba(201,168,76,0.2)]">

          {/* Brand col */}
          <div>
            <div className="font-cinzel text-[1.1rem] tracking-widest mb-3">
              Ahmed <span className="text-gold">Hasan</span>
            </div>
            <p className="text-[0.82rem] text-[#8a96ab] leading-[1.6] mb-6">
              Supply Chain · Operations · Compliance<br />
              Driving Efficiency, Ensuring Integrity, Creating Value
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ahmed-hasan-79502415a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#8a96ab] text-sm font-semibold hover:border-gold hover:text-gold transition-all duration-300"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="mailto:hello@ahmedhasan.com"
                className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#8a96ab] text-sm hover:border-gold hover:text-gold transition-all duration-300"
                title="Email"
              >
                @
              </a>
              <a
                href="tel:+964700000000"
                className="w-9 h-9 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#8a96ab] text-sm hover:border-gold hover:text-gold transition-all duration-300"
                title="Phone"
              >
                ☎
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gold mb-5">Services</div>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[0.82rem] text-[#8a96ab] hover:text-gold transition-colors duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gold mb-5">Industries</div>
            <ul className="flex flex-col gap-2.5">
              {footerIndustries.map((i) => (
                <li key={i}>
                  <a href="#industries" className="text-[0.82rem] text-[#8a96ab] hover:text-gold transition-colors duration-300">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gold mb-5">Navigate</div>
            <ul className="flex flex-col gap-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[0.82rem] text-[#8a96ab] hover:text-gold transition-colors duration-300">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[0.76rem] text-white/25">
            © {new Date().getFullYear()} Ahmed Hasan. All rights reserved. Erbil, Kurdistan Region, Iraq.
          </div>
          <div className="font-cinzel text-[0.76rem] text-gold opacity-70 tracking-[0.05em]">
            AhmedHasan.com
          </div>
        </div>
      </div>
    </footer>
  );
}
