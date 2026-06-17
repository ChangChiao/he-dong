import type { Metadata, Viewport } from "next";
import { Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1612",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hedong888.com"),
  title: "和東雕刻佛具行｜彰化和美神像雕刻・佛具店推薦｜傳承三代匠人工藝",
  description:
    "和東雕刻佛具行創立於1950年，專營手工木雕神像、佛龕桌圍、祭祀禮器。彰化和美在地老店，傳承三代職人工藝，精選原木手工雕刻，量身訂製。",
  keywords: [
    "彰化神像",
    "彰化佛具",
    "彰化神像店",
    "彰化佛具店",
    "彰化神像雕刻",
    "彰化和美佛具",
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
      "創立於1950年，專營手工木雕神像、佛龕桌圍。精選原木手工雕刻，量身訂製。",
    locale: "zh_TW",
    type: "website",
    siteName: "和東雕刻佛具行",
    url: "https://www.hedong888.com",
    images: [
      {
        url: "https://www.hedong888.com/images/og_image.jpg",
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
      "創立於1950年，專營手工木雕神像、佛龕桌圍。精選原木手工雕刻，量身訂製。",
    images: ["https://www.hedong888.com/images/og_image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
              "@type": ["Store", "LocalBusiness"],
              "@id": "https://www.hedong888.com/#store",
              name: "和東雕刻佛具行",
              description:
                "傳承三代職人工藝，專營手工木雕神像、佛龕桌圍、祭祀禮器",
              url: "https://www.hedong888.com",
              image: "https://www.hedong888.com/images/og_image.jpg",
              logo: "https://www.hedong888.com/images/logo.png",
              sameAs: [
                "https://share.google/rmSbrpdS4WWdIzkmO",
                "https://lin.ee/8jQiAOa",
              ],
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
                name: "神像雕刻與佛具服務",
                itemListElement: [
                  {
                    "@type": "Offer",
                    priceCurrency: "TWD",
                    price: "38000",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hedong888.com",
                    itemOffered: {
                      "@type": "Service",
                      name: "神像製作",
                      description:
                        "遵循古法標準規格，精選原木手工雕刻神像，量身訂製各尺寸",
                      image:
                        "https://www.hedong888.com/images/create.webp",
                      areaServed: "台灣",
                    },
                  },
                  {
                    "@type": "Offer",
                    priceCurrency: "TWD",
                    price: "16800",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hedong888.com",
                    itemOffered: {
                      "@type": "Service",
                      name: "神像整修",
                      description:
                        "神像整理、粉身、修復，以專業技法重現神尊初成時的法相",
                      image:
                        "https://www.hedong888.com/images/draw.webp",
                      areaServed: "台灣",
                    },
                  },
                  {
                    "@type": "Offer",
                    priceCurrency: "TWD",
                    price: "6000",
                    availability: "https://schema.org/InStock",
                    url: "https://www.hedong888.com",
                    itemOffered: {
                      "@type": "Service",
                      name: "佛具販售",
                      description:
                        "提供佛龕桌圍、祭祀禮器等多樣化精選佛具",
                      image:
                        "https://www.hedong888.com/images/shop.webp",
                      areaServed: "台灣",
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
