import Image from "next/image";

const services = [
  {
    title: "神像製作",
    subtitle: "遵循古法標準規格製作，展現最慈悲莊嚴的傳承之美",
    src: "/images/create.webp",
  },
  {
    title: "神像整修",
    subtitle: "專業技法修復歲月痕跡，重現神尊初成時的法相",
    src: "/images/draw.webp",
  },
  {
    title: "佛具販售",
    subtitle: "提供多樣化的精選佛具，輕鬆配置您的供奉空間",
    src: "/images/shop.webp",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="flex flex-col lg:flex-row lg:h-[80vh]">
      {services.map((service) => (
        <div
          key={service.title}
          className="relative flex flex-1 min-h-[400px] items-center justify-center overflow-hidden"
        >
          {/* Background image */}
          <Image
            src={service.src}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 34vw"
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
            <h2 className="font-serif-tc text-6xl font-bold tracking-[8px] text-cream-dark lg:text-7xl xl:text-8xl">
              {service.title}
            </h2>
            <div className="border border-gold/50 px-6 py-3">
              <p className="text-sm tracking-[1px] text-tan-light lg:text-xs xl:text-sm">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
