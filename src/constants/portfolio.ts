export interface PortfolioItem {
  slug: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  category: string;
  tall: boolean;
  material: string;
  height: string;
  detail: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "mazu-golden-statue",
    title: "媽祖金身神像",
    desc: "台灣檜木 · 高度 120cm",
    image: "/images/portfolio-1.jpg",
    alt: "手工雕刻媽祖金身神像，台灣檜木材質，高度120公分",
    category: "木雕神像",
    tall: true,
    material: "台灣檜木",
    height: "120cm",
    detail:
      "以台灣檜木精心雕刻而成的媽祖金身神像，高度120公分。職人以傳統工法細膩刻畫媽祖慈悲莊嚴的神韻，金箔貼飾彰顯尊貴氣度。",
  },
  {
    slug: "guan-sheng-di-jun",
    title: "關聖帝君",
    desc: "樟木 · 高度 90cm",
    image: "/images/portfolio-2.jpg",
    alt: "手工雕刻關聖帝君神像，樟木材質，高度90公分",
    category: "木雕神像",
    tall: false,
    material: "樟木",
    height: "90cm",
    detail:
      "以樟木手工雕刻的關聖帝君像，高度90公分。刀法俐落，神態威嚴，細節處見職人功力，樟木天然香氣更添莊嚴。",
  },
  {
    slug: "guanyin-white-jade",
    title: "觀世音菩薩",
    desc: "白玉石雕 · 高度 60cm",
    image: "/images/portfolio-3.jpg",
    alt: "白玉石雕觀世音菩薩像，高度60公分",
    category: "石雕藝術",
    tall: false,
    material: "白玉石",
    height: "60cm",
    detail:
      "白玉石精雕的觀世音菩薩像，高度60公分。石質溫潤細膩，菩薩法相慈悲安詳，衣紋流暢自然，展現石雕藝術之美。",
  },
  {
    slug: "shakyamuni-gold-leaf",
    title: "釋迦牟尼佛",
    desc: "台灣檜木貼金箔 · 高度 150cm",
    image: "/images/portfolio-4.jpg",
    alt: "手工雕刻釋迦牟尼佛像，台灣檜木貼金箔，高度150公分",
    category: "木雕神像",
    tall: true,
    material: "台灣檜木貼金箔",
    height: "150cm",
    detail:
      "台灣檜木雕刻並貼飾金箔的釋迦牟尼佛像，高度150公分。佛像法相莊嚴，金箔工藝精緻，為永豐佛具店代表性作品之一。",
  },
];

export const categories = ["全新神像", "神像粉身", "訂製神像", "佛具零售"];
