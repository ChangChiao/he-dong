"use client";

import EmblaCarouselThumbnails from "@/components/EmblaCarouselThumbnails";

const slides = [
  { src: "/images/601538989.145322_1_11zon.webp", alt: "和東雕刻佛具行 手工木雕伏虎羅漢" },
  { src: "/images/IMG_0390_5_11zon.webp", alt: "和東雕刻佛具行 手工木雕文衡聖帝" },
  { src: "/images/IMG_0399_6_11zon.webp", alt: "和東雕刻佛具行 手工木雕媽祖天后聖母" },
  { src: "/images/IMG_0612_7_11zon.webp", alt: "和東雕刻佛具行 手工木雕保生大帝" },
  { src: "/images/IMG_0633_8_11zon.webp", alt: "和東雕刻佛具行 手工木雕觀世音菩薩" },
  { src: "/images/IMG_1080_9_11zon.webp", alt: "和東雕刻佛具行 手工木雕池府王爺" },
  { src: "/images/IMG_1346_10_11zon.webp", alt: "和東雕刻佛具行 手工木雕觀世音菩薩" },
  { src: "/images/IMG_1420_12_11zon.webp", alt: "和東雕刻佛具行 手工木雕媽祖天后聖母" },
  { src: "/images/IMG_1440_13_11zon.webp", alt: "和東雕刻佛具行 手工木雕關聖帝君" },
  { src: "/images/IMG_1616_14_11zon.webp", alt: "和東雕刻佛具行 手工木雕劉部宣靈公" },
  { src: "/images/IMG_1936_15_11zon.webp", alt: "和東雕刻佛具行 手工木雕三頭八臂中壇元帥" },
  { src: "/images/IMG_2111_16_11zon.webp", alt: "和東雕刻佛具行 手工木雕哪吒三太子中壇元帥" },
  { src: "/images/IMG_2560_18_11zon.webp", alt: "和東雕刻佛具行 手工木雕阿彌陀佛" },
  { src: "/images/IMG_2909_20_11zon.webp", alt: "和東雕刻佛具行 手工木雕觀世音菩薩坐姿" },
  { src: "/images/IMG_2965_21_11zon.webp", alt: "和東雕刻佛具行 手工木雕乘龍觀音" },
  { src: "/images/IMG_3054_22_11zon.webp", alt: "和東雕刻佛具行 手工木雕神位牌位" },
  { src: "/images/IMG_6809_23_11zon.webp", alt: "和東雕刻佛具行 手工木雕五星星君五德真君" },
  { src: "/images/IMG_9411_24_11zon.webp", alt: "和東雕刻佛具行 手工木雕關聖帝君關公" },
  { src: "/images/IMG_9977_25_11zon.webp", alt: "和東雕刻佛具行 手工木雕觀世音菩薩立姿" },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-16 bg-brown px-6 py-20 lg:px-[120px] lg:py-[100px]"
    >
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
            每一件作品都是師傅心血的結晶，承載著對神聖的敬畏與對美的追求
          </p>
        </div>

        {/* Carousel */}
        <EmblaCarouselThumbnails slides={slides} />
      </div>
    </section>
  );
}
