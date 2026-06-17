import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "隱私權政策｜和東雕刻佛具行",
  description: "和東雕刻佛具行網站隱私權政策，說明本網站如何蒐集與使用資料。",
  alternates: {
    canonical: "https://www.hedong888.com/privacy",
  },
};

const sections = [
  {
    heading: "資料蒐集",
    body: "本網站為形象展示網站，不設置會員系統，亦不主動蒐集您的個人資料。當您透過電話或 LINE 官方帳號與我們聯繫時，您所提供的姓名與聯絡方式僅用於回覆諮詢與訂製服務，不會作為其他用途。",
  },
  {
    heading: "Cookie 與流量分析",
    body: "本網站使用 Google Analytics 分析流量，以了解網站使用情形並改善服務品質。Google Analytics 會透過 Cookie 蒐集匿名的瀏覽資訊（如瀏覽頁面、停留時間、裝置類型），不包含可識別個人身分的資料。您可透過瀏覽器設定停用 Cookie。",
  },
  {
    heading: "第三方服務",
    body: "本網站嵌入 Google 地圖以提供店址資訊，並提供 LINE 官方帳號連結。當您使用這些服務時，相關資料的處理適用 Google 與 LINE 各自的隱私權政策。",
  },
  {
    heading: "政策修訂",
    body: "本政策如有修訂，將直接公告於本頁面。若您對本政策有任何疑問，歡迎來電 04-7552815 洽詢。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-cream px-6 pt-32 pb-20 lg:px-[120px]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif-tc text-3xl font-bold tracking-[2px] text-brown md:text-4xl">
            隱私權政策
          </h1>
          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif-tc text-xl font-bold text-brown">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-[1.9] text-brown-text">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
