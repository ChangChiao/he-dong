import { Phone, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";

export default function ContactSection() {
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
            歡迎來電，我們將盡速與您聯繫
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col items-center gap-12">
          {/* Contact Info */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-5">
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

            <div className="flex flex-col items-center gap-4">
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
