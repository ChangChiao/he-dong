import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/cover.webp"
          alt="和東雕刻佛具行工作室內手工雕刻神像場景"
          fill
          priority
          className="animate-ken-burns object-cover"
          sizes="100vw"
          quality={80}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center md:gap-10">
        <span
          className="animate-fade-in-up bg-gold px-6 py-2 text-sm font-medium tracking-[2px] text-brown-dark"
          style={{ animationDelay: "0.1s" }}
        >
          創立於 1950 年
        </span>

        <h1
          className="animate-fade-in-up font-serif-tc text-4xl font-bold tracking-[4px] text-cream-dark md:text-6xl lg:text-[72px] lg:tracking-[8px]"
          style={{ animationDelay: "0.35s" }}
        >
          匠心雕琢，傳遞神聖
        </h1>

        <p
          className="animate-fade-in-up font-serif-tc text-xl tracking-[6px] text-gold md:text-2xl lg:text-4xl lg:tracking-[12px]"
          style={{ animationDelay: "0.6s" }}
        >
          和東雕刻佛具行
        </p>

        <p
          className="animate-fade-in-up text-sm tracking-[3px] text-tan-light md:text-base"
          style={{ animationDelay: "0.725s" }}
        >
          彰化和美・三代傳承・手工木雕神像
        </p>

        <p
          className="animate-fade-in-up max-w-[600px] text-base leading-[1.8] text-tan-light md:text-lg"
          style={{ animationDelay: "0.85s" }}
        >
          傳承工藝，誠心禮佛
          <br className="hidden md:block" />
          和東雕刻佛具行 — 真材實料・細膩工法
        </p>

        <div
          className="animate-fade-in-up flex flex-col gap-4 sm:flex-row sm:gap-6"
          style={{ animationDelay: "1.1s" }}
        >
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
