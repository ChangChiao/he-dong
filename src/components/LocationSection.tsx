import { MapPin, Clock3, Car } from "lucide-react";

const locationInfo = [
  {
    icon: MapPin,
    label: "店址",
    text: "彰化縣和美鎮美寮路2段691號",
  },
  {
    icon: Clock3,
    label: "營業時間",
    text: "週一至週六 09:00 - 18:00\n週日公休",
  },
];

export default function LocationSection() {
  return (
    <section id="location" className="scroll-mt-16 bg-cream">
      <div className="flex flex-col lg:flex-row">
        {/* Map placeholder */}
        <div className="relative h-[300px] w-full bg-brown-mid lg:h-auto lg:flex-1">
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ? (
            <iframe
              src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="和東雕刻佛具行地圖位置"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <a
                href="https://maps.google.com/?q=彰化縣和美鎮美寮路2段691號"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tan-light underline hover:text-gold"
              >
                在 Google Maps 中查看地址
              </a>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex w-full flex-col gap-10 bg-brown p-10 lg:w-[500px] lg:p-[60px]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-sm font-medium tracking-[4px] text-gold">
              蒞臨參觀
            </span>
          </div>

          <h2 className="font-serif-tc text-2xl font-bold tracking-[2px] text-cream-dark md:text-4xl">
            店址與營業時間
          </h2>

          <address className="flex flex-col gap-7 not-italic">
            {locationInfo.map((item) => (
              <div key={item.label} className="flex gap-4">
                <item.icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-[13px] text-tan">{item.label}</span>
                  <span className="whitespace-pre-line text-base leading-relaxed text-cream-dark">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </address>
        </div>
      </div>
    </section>
  );
}
