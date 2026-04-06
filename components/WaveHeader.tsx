"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function WaveHeader() {
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);
  const waveCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = waveCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight ?? 300;
    };

    resize();
    window.addEventListener("resize", resize);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    let rafId = 0;

    const project = (
      x: number,
      y: number,
      z: number,
      cx: number,
      cy: number,
      fov: number,
      rotY: number,
      rotX: number,
    ) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Rotate around Y axis
      const zx = x * cosY - z * sinY;
      const zz = x * sinY + z * cosY;

      // Rotate around X axis
      const yy = y * cosX - zz * sinX;
      const zz2 = y * sinX + zz * cosX;

      const scale = fov / (fov + zz2);
      return [zx * scale + cx, yy * scale + cy, zz2] as const;
    };

    const drawGrid = (time: number) => {
      if (!canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 30;
      const fov = 700;
      const gridSize = 12;
      const spacing = 55;
      const depth = 750;

      const rotY = time * 0.00025 + mouseX * 0.6;
      const rotX = mouseY * 0.4 - 0.3;

      const startColor = [0, 245, 255]; // #00F5FF
      const endColor = [255, 0, 229]; // #FF00E5

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const lerpColor = (t: number) => {
        return [
          Math.round(lerp(startColor[0], endColor[0], t)),
          Math.round(lerp(startColor[1], endColor[1], t)),
          Math.round(lerp(startColor[2], endColor[2], t)),
        ];
      };

      ctx.lineWidth = 1.3;
      ctx.shadowBlur = 14;
      ctx.shadowColor = `rgba(${startColor.join(",")}, 0.35)`;

      for (let row = 0; row < gridSize; row += 1) {
        const z = (row / (gridSize - 1)) * depth - depth / 2;
        const t = row / (gridSize - 1);
        const [r, g, b] = lerpColor(t);

        for (let col = 0; col < gridSize - 1; col += 1) {
          const x0 = (col / (gridSize - 1) - 0.5) * gridSize * spacing;
          const x1 = ((col + 1) / (gridSize - 1) - 0.5) * gridSize * spacing;

          const y0 = Math.sin((col + row * 1.3) * 0.5 + time * 0.002) * 24;
          const y1 = Math.sin((col + 1 + row * 1.3) * 0.5 + time * 0.002) * 24;

          const [px0, py0, pz0] = project(x0, y0, z, cx, cy, fov, rotY, rotX);
          const [px1, py1] = project(x1, y1, z, cx, cy, fov, rotY, rotX);

          const alpha = Math.max(0, 1 - (pz0 / depth) * 1.1);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.45 * alpha})`;

          ctx.beginPath();
          ctx.moveTo(px0, py0);
          ctx.lineTo(px1, py1);
          ctx.stroke();
        }
      }

      rafId = requestAnimationFrame(drawGrid);
    };

    rafId = requestAnimationFrame(drawGrid);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className="wave-header max-w-2xl mx-auto w-full h-64 relative overflow-hidden">
      <canvas ref={waveCanvasRef} className="wave-canvas" />
    </header>
  );
}
