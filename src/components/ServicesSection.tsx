import Image from "next/image";

const services = [
  {
    title: "神像製作",
    subtitle: "遵循古法標準規格製作，展現最慈悲莊嚴的傳承之美",
    src: "/images/create.webp",
    alt: "和東雕刻佛具行師傅手工雕刻製作神像",
  },
  {
    title: "神像整修",
    subtitle: "專業技法修復歲月痕跡，重現神尊初成時的法相",
    src: "/images/draw.webp",
    alt: "和東雕刻佛具行師傅為神像整修上漆",
  },
  {
    title: "佛具販售",
    subtitle: "提供多樣化的精選佛具，輕鬆配置您的供奉空間",
    src: "/images/shop.webp",
    alt: "和東雕刻佛具行門市陳列各式精選佛具",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16">
      <h2 className="sr-only">神像雕刻與佛具服務</h2>
      <div className="flex flex-col lg:h-[80vh] lg:flex-row">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative flex min-h-[400px] flex-1 items-center justify-center overflow-hidden"
          >
            {/* Background image */}
            <Image
              src={service.src}
              alt={service.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 34vw"
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
              <h3 className="font-serif-tc text-6xl font-bold tracking-[8px] text-cream-dark lg:text-7xl xl:text-8xl">
                {service.title}
              </h3>
              <div className="border border-gold/50 px-6 py-3">
                <p className="text-sm tracking-[1px] text-tan-light lg:text-xs xl:text-sm">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
