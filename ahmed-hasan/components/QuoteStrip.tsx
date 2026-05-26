import Image from 'next/image';

export default function QuoteStrip() {
  return (
    <div className="w-full h-[320px] relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1800&q=80"
        alt="Container port operations"
        fill
        className="object-cover object-[center_60%] brightness-[0.45] saturate-[0.7]"
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            'linear-gradient(90deg,rgba(10,22,40,0.8) 0%,rgba(10,22,40,0.3) 50%,rgba(10,22,40,0.8) 100%)',
        }}
      >
        <div className="text-center px-6">
          <blockquote className="font-cormorant font-light text-[clamp(1.6rem,3vw,2.5rem)] text-white tracking-[0.04em]">
            &ldquo;Driving Efficiency, Ensuring Integrity, Creating Value&rdquo;
          </blockquote>
          <div className="w-14 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>
    </div>
  );
}
