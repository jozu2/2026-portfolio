"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { HiX } from "react-icons/hi";

interface ImageZoomModalProps {
  src: StaticImageData;
  alt: string;
}

export default function ImageZoomModal({ src, alt }: ImageZoomModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block h-full w-full cursor-zoom-in"
      >
        <div className="absolute inset-0 z-10 bg-black/0 transition group-hover:bg-black/10" />
        <div className="relative h-full w-full">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="relative max-h-[95vh] w-full max-w-[95vw] overflow-hidden rounded-3xl bg-zinc-950/95 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
              aria-label="Close zoom modal"
            >
              <HiX size={18} />
            </button>

            <div className="relative h-[calc(95vh-110px)] w-full overflow-hidden bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image src={src} alt={alt} fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
