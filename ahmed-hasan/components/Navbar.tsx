'use client';
import { useState, useEffect } from 'react';

const links = [
  { href: '#home',           label: 'Home' },
  { href: '#clients',        label: 'Clients' },
  { href: '#about',          label: 'About' },
  { href: '#services',       label: 'Services' },
  { href: '#industries',     label: 'Industries' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#resources',      label: 'Resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-10 transition-all duration-300 border-b border-[rgba(201,168,76,0.2)] backdrop-blur-xl ${
          scrolled
            ? 'h-[60px] bg-[rgba(10,22,40,0.99)] shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'h-[72px] bg-[rgba(10,22,40,0.95)]'
        }`}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 font-cinzel text-[1.05rem] tracking-widest text-white no-underline">
          <div className="w-9 h-9 border border-gold flex items-center justify-center text-gold text-sm font-cinzel">
            AH
          </div>
          Ahmed <span className="text-gold">Hasan</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link-line relative text-[#8a96ab] hover:text-gold text-[0.75rem] font-medium tracking-[0.06em] uppercase px-3 py-1.5 transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-gold text-navy text-[0.75rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 hover:bg-gold-light transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-gold transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-gold transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-gold transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-[rgba(10,22,40,0.98)] backdrop-blur-xl flex flex-col items-center justify-center gap-2 border-t border-[rgba(201,168,76,0.2)] transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-[1.1rem] font-normal tracking-widest uppercase text-[rgba(255,255,255,0.7)] hover:text-gold px-8 py-3 border-b border-transparent hover:border-[rgba(201,168,76,0.2)] transition-all duration-300"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
