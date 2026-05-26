'use client';
import { useEffect, useRef } from 'react';

const tickerItems = [
  'Supply Chain Management',
  'Procurement & Contracting',
  'Compliance & Internal Controls',
  'Logistics & Operations',
  'Risk Management',
  'SOP Development',
  'Process Improvement',
  'Operational Audit',
];

const counters = [
  { value: 20, label: 'Years Experience' },
  { value: 5,  label: 'Projects Delivered' },
  { value: 6,  label: 'Industries Served' },
  { value: 3,  label: 'Languages' },
];

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

export default function TickerCounters() {
  const stripRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = stripRef.current;
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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const all = [...tickerItems, ...tickerItems]; // duplicate for seamless loop

  return (
    <>
      {/* Ticker */}
      <div className="w-full bg-navy-mid border-t border-b border-[rgba(201,168,76,0.2)] overflow-hidden py-3">
        <div className="ticker-animate flex gap-16 whitespace-nowrap">
          {all.map((item, i) => (
            <div key={i} className="flex items-center gap-4 flex-shrink-0">
              <div className="w-1 h-1 rounded-full bg-gold" />
              <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Counters */}
      <div ref={stripRef} className="bg-[rgba(201,168,76,0.06)] border-t border-b border-[rgba(201,168,76,0.2)]">
        <div className="max-w-[1200px] mx-auto px-10 py-12 grid grid-cols-2 lg:grid-cols-4 text-center">
          {counters.map((c, i) => (
            <div
              key={i}
              className={`px-4 py-4 ${i < counters.length - 1 ? 'border-r border-[rgba(201,168,76,0.2)] max-lg:border-r-0 max-lg:border-b' : ''}`}
            >
              <span
                className="block font-cormorant font-light text-[3.5rem] text-gold leading-none"
                data-target={c.value}
              >
                0+
              </span>
              <span className="block text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-[#8a96ab] mt-2">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
