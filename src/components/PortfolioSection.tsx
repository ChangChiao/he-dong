"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, categories } from "@/constants/portfolio";

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
              className={`px-6 py-3 text-sm transition-colors ${active === cat
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
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group overflow-hidden bg-brown-mid"
            >
              <div
                className={`relative w-full overflow-hidden ${item.tall ? "h-[280px]" : "h-[200px]"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
