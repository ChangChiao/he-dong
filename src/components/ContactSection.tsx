"use client";

import { useState } from "react";
import { Phone, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      requirements: formData.get("requirements") as string,
    };

    // TODO: 替換為實際的 API 端點
    console.log("表單送出資料：", data);

    // 模擬送出延遲
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-cream px-6 py-20 lg:px-[120px] lg:py-[100px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-sm font-medium tracking-[4px] text-gold">
              聯繫我們
            </span>
            <span className="h-0.5 w-10 bg-gold" />
          </div>
          <h2 className="font-serif-tc text-3xl font-bold tracking-[2px] text-brown md:text-[42px]">
            預約諮詢・量身訂製
          </h2>
          <p className="text-base text-brown-text">
            歡迎來電或填寫表單，我們將盡速與您聯繫
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col gap-6 border border-border bg-white p-8 lg:p-12"
          >
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                感謝您的諮詢，我們將盡速與您聯繫！
              </div>
            )}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-brown">
                  姓名 *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="請輸入您的姓名"
                  className="h-12 border border-tan-light bg-[#FAFAFA] px-4 text-sm text-brown outline-none placeholder:text-tan focus:border-gold"
                  required
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="contact-phone" className="text-sm font-medium text-brown">
                  聯絡電話 *
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="請輸入您的電話"
                  className="h-12 border border-tan-light bg-[#FAFAFA] px-4 text-sm text-brown outline-none placeholder:text-tan focus:border-gold"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-requirements" className="text-sm font-medium text-brown">
                需求項目
              </label>
              <textarea
                id="contact-requirements"
                name="requirements"
                placeholder="請描述您的需求（如：神像種類、尺寸、材質等）"
                className="h-[120px] resize-none border border-tan-light bg-[#FAFAFA] p-4 text-sm text-brown outline-none placeholder:text-tan focus:border-gold"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold px-12 py-4 text-center font-semibold text-brown-dark transition-colors hover:bg-gold/90 disabled:opacity-60"
            >
              {isSubmitting ? "送出中..." : "送出諮詢"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex w-full flex-col gap-8 lg:w-[400px]">
            <div className="flex flex-col gap-5">
              <h3 className="font-serif-tc text-2xl font-bold text-brown">
                快速聯繫
              </h3>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-gold" />
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] text-tan">服務專線</span>
                  <a
                    href="tel:02-2302-1688"
                    className="text-lg font-semibold text-brown"
                  >
                    02-2302-1688
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="h-6 w-6 text-gold" />
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] text-tan">LINE 官方帳號</span>
                  <span className="text-lg font-semibold text-brown">
                    @yongfeng-buddha
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-serif-tc text-2xl font-bold text-brown">
                追蹤我們
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center bg-brown text-cream-dark transition-colors hover:bg-gold hover:text-brown-dark"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
