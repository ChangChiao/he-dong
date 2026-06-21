"use client";

import EmblaCarouselThumbnails from "@/components/EmblaCarouselThumbnails";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  // 手工木雕作品
  { src: "/images/601538989.145322_1_11zon.webp", alt: "和東雕刻佛具行 客訂神尊" },
  { src: "/images/IMG_0390_5_11zon.webp", alt: "和東雕刻佛具行 南天文衡聖帝" },
  { src: "/images/IMG_0399_6_11zon.webp", alt: "和東雕刻佛具行 瑤池金母" },
  { src: "/images/IMG_0612_7_11zon.webp", alt: "和東雕刻佛具行 關聖帝君" },
  { src: "/images/IMG_0633_8_11zon.webp", alt: "和東雕刻佛具行 觀世音菩薩" },
  { src: "/images/IMG_1080_9_11zon.webp", alt: "和東雕刻佛具行 池府王爺" },
  { src: "/images/IMG_1346_10_11zon.webp", alt: "和東雕刻佛具行 觀世音菩薩" },
  { src: "/images/IMG_1420_12_11zon.webp", alt: "和東雕刻佛具行 瑤池金母" },
  { src: "/images/IMG_1440_13_11zon.webp", alt: "和東雕刻佛具行 關聖帝君" },
  { src: "/images/IMG_1616_14_11zon.webp", alt: "和東雕刻佛具行 劉部宣靈公" },
  { src: "/images/IMG_1936_15_11zon.webp", alt: "和東雕刻佛具行 中壇元帥" },
  { src: "/images/IMG_2111_16_11zon.webp", alt: "和東雕刻佛具行 太子" },
  { src: "/images/IMG_2560_18_11zon.webp", alt: "和東雕刻佛具行 阿彌陀佛" },
  { src: "/images/IMG_2909_20_11zon.webp", alt: "和東雕刻佛具行 觀世音菩薩" },
  { src: "/images/IMG_2965_21_11zon.webp", alt: "和東雕刻佛具行 乘龍觀音" },
  { src: "/images/IMG_6809_23_11zon.webp", alt: "和東雕刻佛具行 五方令牌" },
  { src: "/images/IMG_9411_24_11zon.webp", alt: "和東雕刻佛具行 關聖帝君關公" },
  { src: "/images/IMG_9977_25_11zon.webp", alt: "和東雕刻佛具行 觀世音菩薩立姿" },
  { src: "/images/IMG_0127.webp", alt: "和東雕刻佛具行 媽祖天上聖母" },
  { src: "/images/IMG_4973.webp", alt: "和東雕刻佛具行 玄天上帝" },
  { src: "/images/S__29753349.webp", alt: "和東雕刻佛具行 果凍三太子" },
  { src: "/images/IMG_1938.webp", alt: "和東雕刻佛具行 五財神" },
  { src: "/images/IMG_1788.webp", alt: "和東雕刻佛具行 土地公" },
  { src: "/images/IMG_0130.webp", alt: "和東雕刻佛具行 關聖帝君" },
  { src: "/images/IMG_0172.webp", alt: "和東雕刻佛具行 盧府王爺" },
  { src: "/images/IMG_2292.webp", alt: "和東雕刻佛具行 華佗" },
  { src: "/images/IMG_0714.webp", alt: "和東雕刻佛具行 三官大帝" },
  { src: "/images/IMG_5224.webp", alt: "和東雕刻佛具行 玄天上帝" },
  { src: "/images/IMG_6101.webp", alt: "和東雕刻佛具行 廣澤尊王" },
  { src: "/images/IMG_5312.webp", alt: "和東雕刻佛具行 𢁉卦童子" },
  { src: "/images/IMG_8577.webp", alt: "和東雕刻佛具行 王爺" },
  { src: "/images/IMG_5724.webp", alt: "和東雕刻佛具行 濟公" },
  { src: "/images/IMG_7743.webp", alt: "和東雕刻佛具行 五財神" },
  { src: "/images/IMG_0004.webp", alt: "和東雕刻佛具行 五財神" },
  { src: "/images/IMG_1497.webp", alt: "和東雕刻佛具行 太子" },
  { src: "/images/IMG_5382.webp", alt: "和東雕刻佛具行 黃太尉" },
  { src: "/images/IMG_5651.webp", alt: "和東雕刻佛具行 玄天上帝" },
  { src: "/images/IMG_5427.webp", alt: "和東雕刻佛具行 欽差太尉" },
  { src: "/images/IMG_6423.webp", alt: "和東雕刻佛具行 玄天上帝" },
  { src: "/images/IMG_2342.webp", alt: "和東雕刻佛具行 媽祖天上聖母" },
  { src: "/images/IMG_3757.webp", alt: "和東雕刻佛具行 太子" },
  { src: "/images/IMG_0692.webp", alt: "和東雕刻佛具行 蓮花太子" },
  { src: "/images/584639199.439043.webp", alt: "和東雕刻佛具行 Q版太子" },
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
