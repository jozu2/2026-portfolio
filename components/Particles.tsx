"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  colorType: "accent" | "secondary";
};

const PARTICLE_COUNT = 90;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function Particles({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Cyberpunk colors - magenta and cyan
    const accentColor = "rgba(255, 0, 229, 0.8)";
    const secondaryColor = "rgba(100, 255, 218, 0.8)";

    // Initialize particles from bottom
    const initializeParticles = () => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }).map(() => ({
        x: randomBetween(0, window.innerWidth),
        y: canvas.height + 30, // Start from bottom
        vx: randomBetween(-0.2, 0.2),
        vy: randomBetween(-0.9, -0.3),
        size: randomBetween(3, 11),
        alpha: randomBetween(0.4, 1),
        colorType: Math.random() > 0.5 ? "accent" : "secondary",
      }));
    };

    if (isActive) {
      initializeParticles();
    }

    let rafId = 0;

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isActive) {
        particlesRef.current = [];
        rafId = requestAnimationFrame(draw);
        return;
      }

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -60) {
          p.y = canvas.height + 30;
          p.x = randomBetween(0, canvas.width);
        }

        if (p.x < -80) p.x = canvas.width + 30;
        if (p.x > canvas.width + 80) p.x = -30;

        const color = p.colorType === "accent" ? accentColor : secondaryColor;
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha;

        // Draw square/box
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);

        ctx.globalAlpha = 1;
      });

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
