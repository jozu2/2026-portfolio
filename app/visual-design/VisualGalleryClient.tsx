"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import art1 from "@/app/images/arts/project1.png";
import art2 from "@/app/images/arts/project2.png";
import art3 from "@/app/images/arts/project3.png";
import art4 from "@/app/images/arts/project4.png";
import art5 from "@/app/images/arts/project5.png";
import art6 from "@/app/images/arts/project6.png";
import art7 from "@/app/images/arts/project7.png";
import art8 from "@/app/images/arts/project8.png";
import art9 from "@/app/images/arts/project9.png";
import art10 from "@/app/images/arts/project10.png";
import art11 from "@/app/images/arts/project11.png";
import art12 from "@/app/images/arts/project12.png";
import art13 from "@/app/images/arts/project13.png";

const artItems = [
  {
    id: "project1",
    src: art1,
    title: "Branding Concept",
    subtitle: "Visual identity and digital artwork",
    href: "/visual-design/project1",
  },
  {
    id: "project2",
    src: art2,
    title: "Editorial Illustration",
    subtitle: "Colorful, modern storytelling visuals",
    href: "/visual-design/project2",
  },

  {
    id: "project13",
    src: art13,
    title: "Template Design",
    subtitle:
      "A template design containing layout and visual elements for a ppt presentation",
    href: "/visual-design/project13",
  },
  {
    id: "project4",
    src: art4,
    title: "Marketing Illustration",
    subtitle: "Promotional artwork with dynamic layout",
    href: "/visual-design/project4",
  },
  {
    id: "project10",
    src: art10,
    title: "UI Concept Showcase",
    subtitle: "Interface visuals and layout exploration",
    href: "/visual-design/project10",
  },
  {
    id: "project6",
    src: art6,
    title: "Concept Sketch",
    subtitle: "Early visual development and composition studies",
    href: "/visual-design/project6",
  },

  {
    id: "project5",
    src: art5,
    title: "Workspace Illustration",
    subtitle: "Personal branding and environment design",
    href: "/visual-design/project5",
  },

  {
    id: "project12",
    src: art12,
    title: "Product Illustration",
    subtitle: "Creative visual assets for digital presentation",
    href: "/visual-design/project12",
  },
  {
    id: "project7",
    src: art7,
    title: "Comic Panel Art",
    subtitle: "Narrative artwork with dramatic black-and-white tones",
    href: "/visual-design/project7",
  },
  {
    id: "project3",
    src: art3,
    title: "UI Concept Art",
    subtitle: "App-style compositions with character details",
    href: "/visual-design/project3",
  },
  {
    id: "project8",
    src: art8,
    title: "Character Illustration",
    subtitle: "Expressive figure work and character design",
    href: "/visual-design/project8",
  },
  {
    id: "project9",
    src: art9,
    title: "Digital Painting",
    subtitle: "Painterly scene composition with moody lighting",
    href: "/visual-design/project9",
  },

  {
    id: "project11",
    src: art11,
    title: "Website Concept",
    subtitle: "Landing page imagery and branding presentation",
    href: "/visual-design/project11",
  },
];

export default function VisualGalleryClient() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
      <AnimatedSection delay={0}>
        <div className="mb-12">
          <p className="section-title"></p>
          <h1 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-3">
            Art Gallery
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
            A selection of design projects I&apos;ve created — ranging from
            UI/UX design and branding to visual identity and creative
            experiments.
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-5">
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {artItems.map((item, i) => (
              <AnimatedSection key={item.id} delay={0.15 + i * 0.05}>
                <Link
                  href={item.href}
                  className={`block h-[200px] overflow-hidden rounded-lg border border-light-border dark:border-dark-border bg-white/90 dark:bg-dark-surface shadow-sm transition-all duration-300 hover:-translate-y-1 ${i % 2 === 0 ? 'hover:shadow-accent' : 'hover:shadow-secondary'}`}
                >
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className={
                        i === 0 ? "object-cover object-top" : "object-cover"
                      }
                    />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 p-6 rounded-2xl border border-dashed border-accent/30 bg-accent/5 text-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono mb-3">
              More artwork and design explorations coming soon...
            </p>
            <Link
              href="https://github.com/jozu2"
              target="_blank"
              className="btn-primary inline-flex"
            >
              <IoLogoGithub size={14} />
              View GitHub
              <HiArrowRight size={12} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
