"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["木雕神像", "石雕藝術", "佛龕桌圍", "祭祀禮器"];

const portfolioItems = [
  {
    title: "媽祖金身神像",
    desc: "台灣檜木 · 高度 120cm",
    image: "/images/portfolio-1.jpg",
    alt: "手工雕刻媽祖金身神像，台灣檜木材質，高度120公分",
    category: "木雕神像",
    tall: true,
  },
  {
    title: "關聖帝君",
    desc: "樟木 · 高度 90cm",
    image: "/images/portfolio-2.jpg",
    alt: "手工雕刻關聖帝君神像，樟木材質，高度90公分",
    category: "木雕神像",
    tall: false,
  },
  {
    title: "觀世音菩薩",
    desc: "白玉石雕 · 高度 60cm",
    image: "/images/portfolio-3.jpg",
    alt: "白玉石雕觀世音菩薩像，高度60公分",
    category: "石雕藝術",
    tall: false,
  },
  {
    title: "釋迦牟尼佛",
    desc: "台灣檜木貼金箔 · 高度 150cm",
    image: "/images/portfolio-4.jpg",
    alt: "手工雕刻釋迦牟尼佛像，台灣檜木貼金箔，高度150公分",
    category: "木雕神像",
    tall: true,
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("木雕神像");

  return (
    <section id="portfolio" className="scroll-mt-16 bg-brown px-6 py-20 lg:px-[120px] lg:py-[100px]">
      <div className="mx-auto max-w-7xl">
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

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-4 lg:gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 text-sm transition-colors ${
                active === cat
                  ? "bg-gold font-medium text-brown"
                  : "border border-tan text-tan hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid - masonry style with 2 columns */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolioItems.filter((item) => item.category === active).map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden bg-brown-mid"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  item.tall ? "h-[280px]" : "h-[200px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={75}
                />
              </div>
              <div className="flex flex-col gap-2 px-6 py-5">
                <h3 className="font-serif-tc text-lg font-semibold text-cream-dark">
                  {item.title}
                </h3>
                <p className="text-[13px] text-tan">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
