import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "永豐佛具店｜台北萬華神像雕刻・佛具店推薦｜傳承三代匠人工藝",
  description:
    "永豐佛具店創立於1968年，專營手工木雕神像、石雕藝術、佛龕桌圍、祭祀禮器。台北萬華在地老店，傳承三代職人工藝，台灣檜木手工雕刻，量身訂製。",
  keywords: [
    "台北神像雕刻",
    "萬華佛具店推薦",
    "手工木雕神像",
    "台灣檜木神像",
    "佛具訂製",
    "神像雕刻工藝",
    "佛龕桌圍",
    "祭祀禮器",
    "石雕藝術",
    "永豐佛具店",
  ],
  openGraph: {
    title: "永豐佛具店｜台北萬華神像雕刻・傳承三代匠人工藝",
    description:
      "創立於1968年，專營手工木雕神像、石雕藝術、佛龕桌圍。台灣檜木手工雕刻，量身訂製。",
    locale: "zh_TW",
    type: "website",
    siteName: "永豐佛具店",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.yongfeng-buddha.com.tw",
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
              name: "永豐佛具店",
              description:
                "傳承三代職人工藝，專營手工木雕神像、石雕藝術、佛龕桌圍、祭祀禮器",
              address: {
                "@type": "PostalAddress",
                streetAddress: "貴陽街二段168號",
                addressLocality: "萬華區",
                addressRegion: "台北市",
                addressCountry: "TW",
              },
              telephone: "02-2302-1688",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              foundingDate: "1968",
            }),
          }}
        />
      </head>
      <body
        className={`${notoSerifTC.variable} ${notoSansTC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
