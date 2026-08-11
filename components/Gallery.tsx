"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

const photos = [
  { src: "/images/lawn-wide.svg", alt: "Freshly mowed green front lawn", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/lawn-care.svg", alt: "CF Lawn Services maintaining a residential lawn", className: "" },
  { src: "/images/lake-sunset.svg", alt: "Lake Cities neighborhood at sunset", className: "" },
  { src: "/images/lawn-close.svg", alt: "Healthy green lawn after service", className: "md:col-span-2" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current: number | null) => current === null ? null : (current + 1) % photos.length);
      if (event.key === "ArrowLeft") setActive((current: number | null) => current === null ? null : (current - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return <>
    <div className="grid auto-rows-[230px] grid-cols-1 gap-4 md:grid-cols-4">
      {photos.map((photo, index) => <button key={photo.src} type="button" className={`photo group relative overflow-hidden rounded-2xl bg-gray-200 ${photo.className}`} onClick={() => setActive(index)} aria-label={`Open image: ${photo.alt}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500" />
        <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">View photo</span>
      </button>)}
    </div>
    {active !== null && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setActive(null)}>
      <button ref={closeButton} type="button" className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/20" onClick={() => setActive(null)} aria-label="Close image viewer">×</button>
      <div className="relative h-[85vh] w-full max-w-5xl" onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
        <Image src={photos[active].src} alt={photos[active].alt} fill sizes="100vw" className="object-contain" />
      </div>
    </div>}
  </>;
}
