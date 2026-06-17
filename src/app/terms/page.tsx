import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "使用條款｜和東雕刻佛具行",
  description: "和東雕刻佛具行網站使用條款，說明本網站內容之著作權與使用規範。",
  alternates: {
    canonical: "https://www.hedong888.com/terms",
  },
};

const sections = [
  {
    heading: "內容著作權",
    body: "本網站所有文字、圖片與作品照片均為和東雕刻佛具行所有，受著作權法保護。未經書面同意，請勿擅自重製、轉載或作商業使用。",
  },
  {
    heading: "資訊參考性質",
    body: "本網站所載之服務內容、營業時間等資訊僅供參考，實際服務項目、製作工期與報價，請以來電或 LINE 洽詢之回覆為準。",
  },
  {
    heading: "外部連結",
    body: "本網站可能包含 Google 地圖、LINE 等外部服務連結，該等服務由第三方提供，本店不對其內容與可用性負責。",
  },
  {
    heading: "條款修訂與準據法",
    body: "本店保留隨時修訂本條款之權利，修訂後將公告於本頁面。本條款之解釋與適用，以中華民國法律為準據法。",
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-cream px-6 pt-32 pb-20 lg:px-[120px]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif-tc text-3xl font-bold tracking-[2px] text-brown md:text-4xl">
            使用條款
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
