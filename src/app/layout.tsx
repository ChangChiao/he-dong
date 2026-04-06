import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin", "chinese-traditional"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin", "chinese-traditional"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "和東雕刻佛具行｜彰化和美神像雕刻・佛具店推薦｜傳承三代匠人工藝",
  description:
    "和東雕刻佛具行創立於1950年，專營手工木雕神像、石雕藝術、佛龕桌圍、祭祀禮器。彰化和美在地老店，傳承三代職人工藝，精選原木手工雕刻，量身訂製。",
  keywords: [
    "彰化神像雕刻",
    "和美佛具店推薦",
    "手工木雕神像",
    "精選原木神像",
    "佛具訂製",
    "神像雕刻工藝",
    "佛龕桌圍",
    "神像整修",
    "神像粉身",
    "神像整理",
    "神像修復",
    "佛具販售",
    "和東雕刻佛具行",
  ],
  openGraph: {
    title: "和東雕刻佛具行｜彰化和美神像雕刻・傳承三代匠人工藝",
    description:
      "創立於1950年，專營手工木雕神像、石雕藝術、佛龕桌圍。精選原木手工雕刻，量身訂製。",
    locale: "zh_TW",
    type: "website",
    siteName: "和東雕刻佛具行",
    url: "https://www.hedong888.com",
    images: [
      {
        url: "https://www.hedong888.com/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "和東雕刻佛具行｜彰化和美傳承三代匠人工藝",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "和東雕刻佛具行｜彰化和美神像雕刻・傳承三代匠人工藝",
    description:
      "創立於1950年，專營手工木雕神像、石雕藝術、佛龕桌圍。精選原木手工雕刻，量身訂製。",
    images: ["https://www.hedong888.com/images/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.hedong888.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "@id": "https://www.hedong888.com/#store",
              name: "和東雕刻佛具行",
              description:
                "傳承三代職人工藝，專營手工木雕神像、石雕藝術、佛龕桌圍、祭祀禮器",
              url: "https://www.hedong888.com",
              image: "https://www.hedong888.com/images/og_image.png",
              logo: "https://www.hedong888.com/images/og_image.png",
              priceRange: "$$",
              currenciesAccepted: "TWD",
              paymentAccepted: "Cash, Credit Card",
              address: {
                "@type": "PostalAddress",
                streetAddress: "美寮路2段691號",
                addressLocality: "和美鎮",
                addressRegion: "彰化縣",
                postalCode: "508",
                addressCountry: "TW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.1023,
                longitude: 120.4918,
              },
              telephone: "04-7552815",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "12:00",
                closes: "21:00",
              },
              foundingDate: "1950",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "佛具與神像作品",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "手工木雕神像",
                      description: "精選原木手工雕刻神像，量身訂製各尺寸",
                      image:
                        "https://www.hedong888.com/images/601538989.145322_1_11zon.webp",
                      material: "精選原木",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "木雕佛像",
                      description: "精選原木手工雕刻佛像，精工細琢",
                      image:
                        "https://www.hedong888.com/images/IMG_0390_5_11zon.webp",
                      material: "精選原木",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "神像雕刻",
                      description: "手工雕刻神像，莊嚴精緻",
                      image:
                        "https://www.hedong888.com/images/IMG_1080_9_11zon.webp",
                      material: "精選原木",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "佛龕桌圍",
                      description: "精雕細琢佛龕與桌圍，量身訂製",
                      image:
                        "https://www.hedong888.com/images/IMG_1936_15_11zon.webp",
                      material: "精選原木",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${notoSerifTC.variable} ${notoSansTC.variable} antialiased`}
      >
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
