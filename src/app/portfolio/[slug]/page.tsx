import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { portfolioItems } from "@/constants/portfolio";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);
  if (!item) return {};

  const baseUrl = "https://www.yongfeng-buddha.com.tw";

  return {
    title: `${item.title}｜和東雕刻佛具行作品精選`,
    description: item.detail,
    openGraph: {
      title: `${item.title}｜和東雕刻佛具行作品精選`,
      description: item.detail,
      url: `${baseUrl}/portfolio/${item.slug}`,
      images: [
        {
          url: `${baseUrl}${item.image}`,
          width: 1200,
          height: 630,
          alt: item.alt,
        },
      ],
      locale: "zh_TW",
      type: "article",
      siteName: "和東雕刻佛具行",
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title}｜和東雕刻佛具行作品精選`,
      description: item.detail,
      images: [`${baseUrl}${item.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/portfolio/${item.slug}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.title,
    description: item.detail,
    image: `https://www.yongfeng-buddha.com.tw${item.image}`,
    material: item.material,
    brand: {
      "@type": "Brand",
      name: "和東雕刻佛具行",
    },
    manufacturer: {
      "@type": "Organization",
      name: "和東雕刻佛具行",
      url: "https://www.yongfeng-buddha.com.tw",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首頁",
          item: "https://www.yongfeng-buddha.com.tw",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "作品精選",
          item: "https://www.yongfeng-buddha.com.tw/#portfolio",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: item.title,
          item: `https://www.yongfeng-buddha.com.tw/portfolio/${item.slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-cream">
        {/* Breadcrumb */}
        <nav
          aria-label="麵包屑導覽"
          className="bg-brown px-6 pt-6 pb-4 lg:px-[120px]"
        >
          <ol className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-tan">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                首頁
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/#portfolio"
                className="hover:text-gold transition-colors"
              >
                作品精選
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-cream-dark">{item.title}</li>
          </ol>
        </nav>

        {/* Content */}
        <article className="bg-brown px-6 py-12 lg:px-[120px] lg:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-gold" />
                <span className="text-sm font-medium tracking-[4px] text-gold">
                  {item.category}
                </span>
              </div>

              <h1 className="font-serif-tc text-3xl font-bold tracking-[2px] text-cream-dark md:text-5xl">
                {item.title}
              </h1>

              <dl className="flex flex-col gap-4 text-base text-tan">
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 text-gold">材質</dt>
                  <dd>{item.material}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 text-gold">高度</dt>
                  <dd>{item.height}</dd>
                </div>
              </dl>

              <p className="text-base leading-relaxed text-cream-dark/80">
                {item.detail}
              </p>

              <Link
                href="/#portfolio"
                className="mt-4 inline-flex w-fit items-center gap-2 border border-gold px-6 py-3 text-sm text-gold transition-colors hover:bg-gold hover:text-brown"
              >
                <ArrowLeft className="h-4 w-4" />
                返回作品精選
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
