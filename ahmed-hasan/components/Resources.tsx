const resources = [
  { icon: '✅', title: 'Operational Audit Checklist', type: 'PDF Template' },
  { icon: '📝', title: 'SOP Template Pack',           type: 'Word / PDF' },
  { icon: '📊', title: 'Procurement Evaluation Form', type: 'Excel Template' },
  { icon: '🛡️', title: 'Compliance Control Framework', type: 'PDF Guide' },
];

export default function Resources() {
  return (
    <section id="resources" className="max-w-[1200px] mx-auto px-10 py-24 reveal">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px bg-gold" />
        <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">
          Professional Tools
        </span>
      </div>
      <h2 className="font-cormorant font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.2] mb-4">
        Downloadable <em className="italic text-gold">Resources</em>
      </h2>
      <p className="text-[0.95rem] leading-[1.8] text-white/60 max-w-[560px] mb-12">
        Practical tools and templates developed from 20+ years of operational experience. Available
        for download upon request.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((r) => (
          <div
            key={r.title}
            className="border border-[rgba(201,168,76,0.2)] bg-white/[0.04] p-6 text-center hover:border-gold hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300 group"
          >
            <span className="text-[1.75rem] block mb-4">{r.icon}</span>
            <div className="text-[0.85rem] font-medium text-white mb-2">{r.title}</div>
            <div className="text-[0.7rem] text-[#8a96ab] uppercase tracking-[0.1em]">{r.type}</div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-gold mt-4 hover:gap-2 transition-all duration-300"
            >
              Request →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
