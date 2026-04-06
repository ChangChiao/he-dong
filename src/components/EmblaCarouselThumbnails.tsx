"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
};

type ThumbProps = {
  selected: boolean;
  src: string;
  alt: string;
  onClick: () => void;
};

const Thumb: React.FC<ThumbProps> = ({ selected, src, alt, onClick }) => (
  <div
    className={`embla-thumbs__slide relative flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-200 ${
      selected
        ? "ring-2 ring-gold opacity-100"
        : "opacity-50 hover:opacity-75"
    }`}
    style={{ width: "100px", height: "70px" }}
    onClick={onClick}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="100px"
    />
  </div>
);

type Props = {
  slides: Slide[];
};

export default function EmblaCarouselThumbnails({ slides }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    const index = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(index);
    emblaThumbsApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
    return () => {
      emblaMainApi.off("select", onSelect);
      emblaMainApi.off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <div className="w-full">
      {/* Main carousel */}
      <div className="overflow-hidden rounded-xl" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 flex-grow-0"
              style={{ flexBasis: "100%" }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex gap-2 px-1">
          {slides.map((slide, i) => (
            <Thumb
              key={i}
              selected={i === selectedIndex}
              src={slide.src}
              alt={slide.alt}
              onClick={() => onThumbClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
