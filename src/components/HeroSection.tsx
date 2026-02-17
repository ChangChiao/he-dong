import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="永豐佛具店工作室內手工雕刻神像場景"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={80}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center md:gap-10">
        <span className="bg-gold px-6 py-2 text-sm font-medium tracking-[2px] text-brown-dark">
          創立於 1968 年
        </span>

        <h1 className="font-[family-name:var(--font-noto-serif-tc)] text-4xl font-bold tracking-[4px] text-cream-dark md:text-6xl lg:text-[72px] lg:tracking-[8px]">
          匠心雕琢，傳遞神聖
        </h1>

        <p className="font-[family-name:var(--font-noto-serif-tc)] text-xl tracking-[6px] text-gold md:text-2xl lg:text-4xl lg:tracking-[12px]">
          永豐佛具店
        </p>

        <p className="max-w-[600px] text-base leading-[1.8] text-tan-light md:text-lg">
          承襲三代職人工藝，以虔誠之心雕琢每一尊神像
          <br className="hidden md:block" />
          為您的信仰空間注入莊嚴與靈性
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#contact"
            className="bg-gold px-12 py-4 text-center font-semibold text-brown-dark transition-colors hover:bg-gold/90"
          >
            預約參觀
          </a>
          <a
            href="#contact"
            className="border-2 border-gold px-11 py-4 text-center font-medium text-gold transition-colors hover:bg-gold/10"
          >
            立即諮詢
          </a>
        </div>
      </div>
    </section>
  );
}
