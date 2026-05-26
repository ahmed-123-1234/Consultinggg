'use client';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 20, label: 'Years of Experience' },
  { value: 5,  label: 'Projects Delivered' },
  { value: 6,  label: 'Industries Served' },
  { value: 3,  label: 'Languages: EN · AR · KU' },
];

const tags = ['Supply Chain', 'Procurement', 'Compliance', 'Risk Management', 'Process Improvement'];

function animateCounter(el: HTMLElement, target: number, duration = 2000) {
  const start = performance.now();
  const update = (time: number) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + '+';
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          el.querySelectorAll<HTMLElement>('[data-target]').forEach((num) => {
            animateCounter(num, parseInt(num.dataset.target!));
          });
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-[72px]"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg,rgba(10,22,40,0.93) 0%,rgba(10,22,40,0.78) 50%,rgba(10,22,40,0.88) 100%), url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1800&q=80) center/cover no-repeat',
        }}
      />
      <div className="absolute inset-0 grid-overlay" />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle,rgba(201,168,76,0.08) 0%,transparent 70%)',
          top: '50%', left: '60%', transform: 'translate(-50%,-50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-gold" />
            <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">
              Erbil, Kurdistan Region, Iraq
            </span>
          </div>

          <h1 className="font-cormorant font-light leading-[1.1] text-[clamp(2.8rem,5vw,4.2rem)] mb-1">
            Supply Chain
            <em className="not-italic text-gold block">Operations &</em>
            Compliance
          </h1>

          <div className="w-14 h-0.5 bg-gradient-to-r from-gold to-transparent my-6" />

          <p className="text-[0.95rem] leading-[1.8] text-white/70 max-w-[480px] mb-8">
            Over 20 years of experience in logistics, procurement, operations management, and
            compliance across Iraq and internationally. Trusted by leading organizations to drive
            efficiency and ensure integrity.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[0.72rem] font-medium tracking-[0.1em] uppercase border border-[rgba(201,168,76,0.2)] text-gold-light px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#services"
              className="bg-gold text-navy text-[0.8rem] font-semibold tracking-[0.12em] uppercase px-8 py-3.5 border-2 border-gold hover:bg-transparent hover:text-gold transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-transparent text-white text-[0.8rem] font-semibold tracking-[0.12em] uppercase px-8 py-3.5 border-2 border-white/30 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right – stats */}
        <div
          ref={statsRef}
          className="flex flex-col gap-6 border-l border-[rgba(201,168,76,0.2)] pl-12 lg:pl-12 lg:border-l border-t-0 max-lg:border-l-0 max-lg:border-t max-lg:border-[rgba(201,168,76,0.2)] max-lg:pt-8 max-lg:pl-0 max-lg:flex-row max-lg:flex-wrap"
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="font-cormorant font-light text-[3.5rem] text-gold leading-none"
                data-target={s.value}
              >
                0+
              </div>
              <div className="text-[0.75rem] font-medium tracking-[0.1em] uppercase text-[#8a96ab] mt-1">
                {s.label}
              </div>
              {i < stats.length - 1 && (
                <div className="w-10 h-px bg-[rgba(201,168,76,0.2)] mt-6 max-lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
