"use client";

import { useEffect } from "react";

export default function HideWaveCanvas() {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>(".wave-canvas");
    const header = document.querySelector<HTMLElement>(".wave-header");
    const previousCanvasDisplay = canvas?.style.display;
    const previousHeaderDisplay = header?.style.display;

    if (canvas) {
      canvas.style.display = "none";
    }
    if (header) {
      header.style.display = "none";
    }

    return () => {
      if (canvas) {
        canvas.style.display = previousCanvasDisplay || "";
      }
      if (header) {
        header.style.display = previousHeaderDisplay || "";
      }
    };
  }, []);

  return null;
}
