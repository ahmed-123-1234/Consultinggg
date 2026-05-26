import Image from 'next/image';

const services = [
  {
    num: '01', icon: '🔍',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=75',
    title: 'Operational Audit & Process Review',
    desc: 'Comprehensive end-to-end operational audits identifying inefficiencies, control gaps, and improvement opportunities across your business functions.',
  },
  {
    num: '02', icon: '📋',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75',
    title: 'Procurement & Contract Audit',
    desc: 'Rigorous review of procurement processes, vendor selection, contract terms, and compliance with internal policies and regulatory requirements.',
  },
  {
    num: '03', icon: '📦',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75',
    title: 'Inventory & Warehouse Review',
    desc: 'Detailed assessment of inventory management systems, warehouse operations, stock accuracy, and cost optimization strategies.',
  },
  {
    num: '04', icon: '🚢',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=75',
    title: 'Logistics & Supply Chain Audit',
    desc: 'Strategic review of your entire supply chain network — from vendor performance to last-mile delivery — identifying risk and unlocking value.',
  },
  {
    num: '05', icon: '⚖️',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=75',
    title: 'Compliance & Internal Controls',
    desc: 'Design and implementation of compliance frameworks, anti-corruption controls, and internal audit systems aligned with international best practices.',
  },
  {
    num: '06', icon: '⚙️',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=75',
    title: 'SOP Development & Process Improvement',
    desc: 'Creation of clear, actionable Standard Operating Procedures and lean process redesign to drive efficiency, quality, and organizational consistency.',
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-navy-mid w-full py-24">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">What I Offer</span>
        </div>
        <h2 className="font-cormorant font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.2] mb-4">
          Consulting <em className="italic text-gold">Services</em>
        </h2>
        <p className="text-[0.95rem] leading-[1.8] text-white/60 max-w-[560px] mb-12">
          Comprehensive consulting engagements tailored to your organization's operational complexity and strategic objectives.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 1, background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.2)' }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="service-card-bar relative bg-navy-mid p-10 overflow-hidden hover:bg-navy-light transition-colors duration-300 group"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 font-cormorant text-[2rem] font-light text-[rgba(201,168,76,0.2)]">
                {s.num}
              </div>

              {/* Image header */}
              <div className="w-full h-36 -mx-10 -mt-10 mb-6 overflow-hidden relative">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover brightness-[0.4] saturate-[0.6]"
                />
                <div className="absolute bottom-3 left-4 text-2xl">{s.icon}</div>
              </div>

              <h3 className="font-cormorant text-[1.25rem] font-medium text-white mb-3">{s.title}</h3>
              <p className="text-[0.85rem] leading-[1.7] text-[#8a96ab] mb-6">{s.desc}</p>
              <a
                href="#contact"
                className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-gold flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                Engage Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
