import Image from "next/image";

const yearsSince1950 = new Date().getFullYear() - 1950;

const features = [
  { number: `${yearsSince1950}+`, label: "年專業經驗" },
  { number: "8000+", label: "件作品完成" },
  { number: "100%", label: "手工雕刻" },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:gap-20 lg:px-[120px] lg:py-[100px]">
        {/* Image */}
        <div className="relative aspect-[500/450] w-full max-w-[500px] shrink-0 overflow-hidden">
          <Image
            src="/images/IMG_1352_11_11zon.webp"
            alt="和東雕刻佛具行師傅手工雕刻木雕神像過程"
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 500px"
            quality={80}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-sm font-medium tracking-[4px] text-gold">
              關於我們
            </span>
          </div>

          <h2 className="font-serif-tc text-3xl font-bold tracking-[2px] text-brown md:text-[42px]">
            傳承三代的匠人精神
          </h2>

          <div className="space-y-6 text-base leading-[1.9] text-brown-text">
            <p>
              和東雕刻佛具行創立於1950年，歷經三代傳承，始終秉持「以誠為本、精雕細琢」的理念。
            </p>
            <p>
              由資深師傅手工雕刻每一尊神像。從選材、設計到完工，每個環節都經過嚴格把關，只為呈現最莊嚴的神聖之美。
            </p>
            <p>
              無論是神像、佛龕，或是各式祭祀禮器，我們都能依照您的需求量身訂製，讓每一件作品都成為獨一無二的藝術傳承。
            </p>
          </div>

          <div className="flex flex-wrap gap-8 pt-2 sm:gap-12">
            {features.map((feat) => (
              <div key={feat.label} className="flex flex-col gap-2">
                <span className="font-serif-tc text-3xl font-bold text-gold md:text-4xl">
                  {feat.number}
                </span>
                <span className="text-sm text-brown-text">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
