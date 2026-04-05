"use client";

import EmblaCarouselThumbnails from "@/components/EmblaCarouselThumbnails";

const slides = [
  { src: "/images/601538989.145322_1_11zon.webp", alt: "和東雕刻作品 1" },
  { src: "/images/IMG_0084_3_11zon.webp", alt: "和東雕刻作品 2" },
  { src: "/images/IMG_0390_5_11zon.webp", alt: "和東雕刻作品 3" },
  { src: "/images/IMG_0399_6_11zon.webp", alt: "和東雕刻作品 4" },
  { src: "/images/IMG_0612_7_11zon.webp", alt: "和東雕刻作品 5" },
  { src: "/images/IMG_0633_8_11zon.webp", alt: "和東雕刻作品 6" },
  { src: "/images/IMG_1080_9_11zon.webp", alt: "和東雕刻作品 7" },
  { src: "/images/IMG_1346_10_11zon.webp", alt: "和東雕刻作品 8" },
  { src: "/images/IMG_1352_11_11zon.webp", alt: "和東雕刻作品 9" },
  { src: "/images/IMG_1420_12_11zon.webp", alt: "和東雕刻作品 10" },
  { src: "/images/IMG_1440_13_11zon.webp", alt: "和東雕刻作品 11" },
  { src: "/images/IMG_1616_14_11zon.webp", alt: "和東雕刻作品 12" },
  { src: "/images/IMG_1936_15_11zon.webp", alt: "和東雕刻作品 13" },
  { src: "/images/IMG_2111_16_11zon.webp", alt: "和東雕刻作品 14" },
  { src: "/images/IMG_2560_18_11zon.webp", alt: "和東雕刻作品 15" },
  { src: "/images/IMG_2909_20_11zon.webp", alt: "和東雕刻作品 16" },
  { src: "/images/IMG_2965_21_11zon.webp", alt: "和東雕刻作品 17" },
  { src: "/images/IMG_3054_22_11zon.webp", alt: "和東雕刻作品 18" },
  { src: "/images/IMG_6809_23_11zon.webp", alt: "和東雕刻作品 19" },
  { src: "/images/IMG_9411_24_11zon.webp", alt: "和東雕刻作品 20" },
  { src: "/images/IMG_9977_25_11zon.webp", alt: "和東雕刻作品 21" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-16 bg-brown px-6 py-20 lg:px-[120px] lg:py-[100px]">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-sm font-medium tracking-[4px] text-gold">
              作品精選
            </span>
            <span className="h-0.5 w-10 bg-gold" />
          </div>
          <h2 className="font-serif-tc text-3xl font-bold tracking-[2px] text-cream-dark md:text-[42px]">
            匠心獨具的藝術傳承
          </h2>
          <p className="text-base text-tan">
            每一件作品都是職人心血的結晶，承載著對神聖的敬畏與對美的追求
          </p>
        </div>

        {/* Carousel */}
        <EmblaCarouselThumbnails slides={slides} />
      </div>
    </section>
  );
}
