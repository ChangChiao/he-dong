const navItems = [
  { label: "關於我們", href: "#about" },
  { label: "作品精選", href: "#portfolio" },
  { label: "蒞臨參觀", href: "#location" },
  { label: "聯繫我們", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-dark px-6 py-12 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-noto-serif-tc)] text-2xl font-bold tracking-[4px] text-gold">
              永豐佛具店
            </span>
            <span className="text-sm text-tan">匠心雕琢・傳遞神聖</span>
          </div>
          <nav className="flex flex-wrap gap-6 sm:gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-tan-light transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-brown-mid" />

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-brown-light">
            &copy; {new Date().getFullYear()} 永豐佛具店 版權所有
          </p>
          <p className="text-[13px] text-brown-light">
            隱私權政策｜使用條款
          </p>
        </div>
      </div>
    </footer>
  );
}
