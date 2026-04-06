"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiMenu, HiX } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/visual-design", label: "Visual Design" },
  { href: "/skills", label: "Skills" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const accentText = "text-accent";
  const accentBg = "bg-secondary";
  const accentBgSoft = "bg-secondary/10";
  const accentHover = "hover:text-secondary";
  const accentShadow = "group-hover:shadow-secondary/30";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-light-border dark:border-dark-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className={`w-8 h-8 ${accentBg} rounded-lg flex items-center justify-center text-dark-bg font-bold font-mono text-sm group-hover:shadow-lg ${accentShadow} transition-all duration-200`}
          >
            JM
          </div>
          <span className="font-display font-semibold text-sm hidden sm:block text-zinc-700 dark:text-zinc-200">
            Portfolio<span className={accentText}></span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-mono ${
                  active
                    ? `${accentText} ${accentBgSoft}`
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-light-border dark:hover:bg-dark-muted"
                }`}
              >
                {active && <span className={`${accentText} mr-1`}>▹</span>}
                {link.label}
              </Link>
            );
          })}

          <Link
            href="https://github.com/jozu2"
            target="_blank"
            className={`px-3 py-2 rounded-lg text-sm text-zinc-500 dark:text-zinc-400 ${accentHover} transition-colors duration-200 flex items-center gap-1.5 font-mono`}
          >
            <IoLogoGithub size={16} />
            <span>GitHub</span>
          </Link>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 ${accentHover} hover:bg-light-border dark:hover:bg-dark-muted transition-all duration-200`}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <BsSun size={15} />
              ) : (
                <BsMoonStarsFill size={15} />
              )}
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 ${accentHover} hover:bg-dark-muted transition-all duration-200`}
          >
            {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl border-b border-light-border dark:border-dark-border">
          <div className="max-w-3xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-mono transition-all duration-200 ${
                    active
                      ? `${accentText} ${accentBgSoft}`
                      : `text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 ${accentHover} hover:bg-dark-muted`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="https://github.com/jozu2"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-mono text-zinc-500 dark:text-zinc-400 ${accentHover} transition-colors flex items-center gap-2`}
            >
              <IoLogoGithub size={16} />
              GitHub
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
