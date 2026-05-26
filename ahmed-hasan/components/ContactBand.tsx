import Image from 'next/image';

export default function ContactBand() {
  return (
    <div className="w-full h-[260px] relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1800&q=80"
        alt="Professional consulting office"
        fill
        className="object-cover object-[center_40%] brightness-[0.35] saturate-[0.6]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold">
          Ready to Work Together?
        </div>
        <div className="font-cormorant font-light text-[clamp(1.5rem,3vw,2.2rem)] text-white text-center px-4">
          Let&apos;s Discuss Your Project
        </div>
        <a
          href="#contact"
          className="mt-2 bg-gold text-navy text-[0.75rem] font-bold tracking-[0.15em] uppercase px-8 py-3 hover:bg-gold-light transition-colors duration-300"
        >
          Get in Touch →
        </a>
      </div>
    </div>
  );
}
