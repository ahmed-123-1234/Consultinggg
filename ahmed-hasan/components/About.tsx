import Image from 'next/image';

const strengths = [
  'Supply Chain Expertise',
  'Procurement Management',
  'Compliance & Controls',
  'Risk Management',
  'Leadership & Mentoring',
  'Multi-Country Exposure',
  'EN · AR · KU Languages',
  'Process Improvement',
];

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-10 py-24 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Portrait */}
        <div className="relative max-w-[340px] lg:max-w-none">
          <div className="relative w-full aspect-[3/4] border border-[rgba(201,168,76,0.2)] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80"
              alt="Professional consultant"
              fill
              className="object-cover brightness-[0.85] contrast-[1.05]"
            />
            {/* Corners */}
            <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-gold" />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 w-[120px] h-[120px] bg-gold flex flex-col items-center justify-center">
            <div className="font-cormorant text-[2.5rem] font-semibold text-navy leading-none">20+</div>
            <div className="text-[0.6rem] font-bold tracking-[0.1em] uppercase text-navy-mid text-center mt-1">
              Years<br />Experience
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-gold">About Ahmed Hasan</span>
          </div>
          <h2 className="font-cormorant font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.2] mb-4">
            Driving Efficiency,<br />
            <em className="italic text-gold">Ensuring Integrity</em>
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-white/60 mb-4">
            A senior consultant with over two decades of hands-on experience in supply chain
            management, logistics operations, procurement, and compliance. Based in Erbil,
            Kurdistan Region, Iraq, Ahmed brings deep expertise across multiple industries and
            international contexts.
          </p>
          <p className="text-[0.88rem] leading-[1.8] text-white/55 mb-8">
            Fluent in English, Arabic, and Kurdish, Ahmed has led complex operational transformation
            programs for organizations ranging from multinational oil &amp; gas companies to NGOs
            and trading firms. His approach combines analytical rigor with pragmatic implementation,
            ensuring compliance frameworks are both robust and operationally viable.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {strengths.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 px-4 py-3 border border-[rgba(201,168,76,0.2)] bg-white/[0.04] text-[0.82rem] font-medium text-white/75 hover:border-gold hover:text-white transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
