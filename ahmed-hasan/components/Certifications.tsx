const certs = [
  { icon: '🏆', name: 'CSCP — Certified Supply Chain Professional', body: 'APICS (Association for Supply Chain Management)', status: '15+ Years', active: true },
  { icon: '⚖️', name: 'Compliance & Anti-Corruption Training',       body: 'International Standards & Best Practices',           status: 'Practiced', active: true },
  { icon: '📜', name: 'Contract & Legal Management',                 body: 'Practical experience in contract drafting, negotiation & administration', status: 'Experienced', active: true },
  { icon: '🔗', name: 'Supply Chain Management',                     body: 'Advanced professional training in SCM principles and practice',           status: 'Practiced', active: true },
  { icon: '🛢️', name: 'Oil & Gas Industry Expertise',               body: 'Hands-on operational experience in oilfield services procurement & logistics', status: '10+ Years', active: true },
  { icon: '📊', name: 'Internal Audit & Controls',                   body: 'Operational audit methodology and internal controls framework design',       status: 'Practiced', active: true },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-[1200px] mx-auto px-10 py-24 reveal">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px bg-gold" />
        <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">Credentials</span>
      </div>
      <h2 className="font-cormorant font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.2] mb-4">
        Certifications & <em className="italic text-gold">Training</em>
      </h2>
      <p className="text-[0.95rem] leading-[1.8] text-white/60 max-w-[560px] mb-12">
        Professional development grounded in globally recognized frameworks and continuous learning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((c) => (
          <div
            key={c.name}
            className="flex gap-4 items-start p-6 border border-[rgba(201,168,76,0.2)] bg-white/[0.04] hover:border-gold transition-all duration-300"
          >
            <div className="w-11 h-11 flex-shrink-0 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-xl">
              {c.icon}
            </div>
            <div>
              <div className="font-cormorant text-[1rem] font-medium mb-1">{c.name}</div>
              <div className="text-[0.78rem] text-[#8a96ab] mb-2">{c.body}</div>
              <span className="inline-block text-[0.65rem] font-semibold tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(201,168,76,0.15)] text-gold">
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
