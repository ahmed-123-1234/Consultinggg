import Image from 'next/image';

const industries = [
  { icon: '🛢️', name: 'Oil & Gas Services',      sub: 'Upstream · Midstream · Oilfield Services', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=75' },
  { icon: '🚛', name: 'Logistics & Freight',      sub: 'Forwarding · Customs · Distribution',       img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=75' },
  { icon: '🏪', name: 'Trading & Distribution',   sub: 'Import · Export · Wholesale',               img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=75' },
  { icon: '🌍', name: 'NGOs & Aid Organizations', sub: 'Humanitarian · Development · Compliance',   img: 'https://images.unsplash.com/photo-1469571486292-b53601010376?w=500&q=75' },
  { icon: '💊', name: 'Pharma & Healthcare',      sub: 'Cold Chain · Regulatory · Distribution',    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=75' },
  { icon: '🏗️', name: 'Construction & Engineering', sub: 'Project Procurement · Site Logistics',   img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=75' },
];

export default function Industries() {
  return (
    <section id="industries" className="max-w-[1200px] mx-auto px-10 py-24 reveal">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px bg-gold" />
        <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">Sectors I Serve</span>
      </div>
      <h2 className="font-cormorant font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.2] mb-4">
        Industry <em className="italic text-gold">Expertise</em>
      </h2>
      <p className="text-[0.95rem] leading-[1.8] text-white/60 max-w-[560px] mb-12">
        Deep sector knowledge across Iraq's most critical industries enables context-aware consulting
        that delivers real-world results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="relative min-h-[180px] flex items-end border border-[rgba(201,168,76,0.2)] overflow-hidden hover:border-gold transition-all duration-300 group"
          >
            <Image
              src={ind.img}
              alt={ind.name}
              fill
              className="object-cover brightness-[0.35] saturate-[0.6] group-hover:brightness-[0.45] transition-all duration-300"
            />
            <div
              className="relative z-10 p-6 w-full border-t border-[rgba(201,168,76,0.3)]"
              style={{ background: 'linear-gradient(0deg,rgba(10,22,40,0.9) 0%,transparent 100%)' }}
            >
              <span className="text-2xl block mb-2">{ind.icon}</span>
              <div className="font-cormorant text-[1.1rem] font-medium mb-1">{ind.name}</div>
              <div className="text-[0.78rem] text-[#8a96ab]">{ind.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
