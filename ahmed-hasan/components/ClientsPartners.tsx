const clients = [
  {
    icon: '🏙️',
    name: 'Remas City',
    category: 'Real Estate Development',
    service: 'Supply Chain & Procurement Consulting',
  },
  {
    icon: '🏗️',
    name: 'Lana City',
    category: 'Urban Development Project',
    service: 'Operations & Compliance Advisory',
  },
  {
    icon: '🏢',
    name: 'Kingstone Project',
    category: 'Construction & Infrastructure',
    service: 'Procurement & Logistics Management',
  },
];

export default function ClientsPartners() {
  return (
    <div id="clients" className="bg-navy-mid border-t border-b border-[rgba(201,168,76,0.2)]">
      <div className="max-w-[1200px] mx-auto px-10 py-20">

        {/* Our Clients heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-px bg-gold" />
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-gold">Trusted By</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-cormorant font-normal text-[clamp(1.8rem,3vw,2.5rem)] text-white">
            Our <em className="italic text-gold">Clients</em>
          </h2>
        </div>

        {/* Client cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {clients.map((c) => (
            <div
              key={c.name}
              className="relative border border-[rgba(201,168,76,0.2)] bg-white/[0.03] p-8 text-center overflow-hidden transition-all duration-300 hover:border-gold group"
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

              <div className="w-16 h-16 border border-[rgba(201,168,76,0.3)] rounded-full flex items-center justify-center mx-auto mb-5 bg-[rgba(201,168,76,0.07)] text-2xl group-hover:bg-[rgba(201,168,76,0.12)] transition-colors duration-300">
                {c.icon}
              </div>
              <div className="font-cormorant text-[1.3rem] font-medium text-white mb-1">{c.name}</div>
              <div className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-gold mb-3">{c.category}</div>
              <div className="w-8 h-px bg-[rgba(201,168,76,0.3)] mx-auto mb-3" />
              <div className="text-[0.78rem] text-white/45">{c.service}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-[rgba(201,168,76,0.15)]" />
          <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/25">
            Strategic Partnership
          </div>
          <div className="flex-1 h-px bg-[rgba(201,168,76,0.15)]" />
        </div>

        {/* Partner heading */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-px bg-gold" />
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-gold">Strategic Partner</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-cormorant font-normal text-[clamp(1.8rem,3vw,2.5rem)] text-white">
            Our <em className="italic text-gold">Partner</em>
          </h2>
        </div>

        {/* KeenTech card */}
        <div className="max-w-[480px] mx-auto">
          <div className="relative border border-[rgba(201,168,76,0.35)] bg-gradient-to-br from-[rgba(201,168,76,0.07)] to-[rgba(255,255,255,0.02)] p-10 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

            <div className="w-18 h-18 w-[72px] h-[72px] border-2 border-[rgba(201,168,76,0.5)] rounded-sm flex items-center justify-center mx-auto mb-6 bg-[rgba(201,168,76,0.1)] text-3xl">
              💡
            </div>
            <div className="font-cinzel text-[1.5rem] font-semibold text-white tracking-[0.05em] mb-1">KeenTech</div>
            <div className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">
              Odoo Developer & ERP Solutions
            </div>
            <div className="w-10 h-px bg-[rgba(201,168,76,0.4)] mx-auto mb-4" />
            <p className="text-[0.83rem] leading-[1.7] text-white/55">
              Certified Odoo development partner delivering enterprise resource planning, supply chain
              automation, and digital transformation solutions across Iraq and the region.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
