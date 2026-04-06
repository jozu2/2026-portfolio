import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HideWaveCanvas from "@/components/HideWaveCanvas";
import ImageZoomModal from "@/components/ImageZoomModal";
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

import subImgArt6Num1 from "@/app/images/arts/art6sub1.png";
import subImgArt9Num1 from "@/app/images/arts/art9sub1.png";
import subImgArt8Num1 from "@/app/images/arts/art8sub1.png";

//template
import subImgArt13Num2 from "@/app/images/arts/template/art13num2.png";
import subImgArt13Num3 from "@/app/images/arts/template/art13num3.png";
import subImgArt13Num4 from "@/app/images/arts/template/art13num4.png";
import subImgArt13Num5 from "@/app/images/arts/template/art13num5.png";
import subImgArt13Num6 from "@/app/images/arts/template/art13num6.png";
import subImgArt13Num7 from "@/app/images/arts/template/art13num7.png";
import subImgArt13Num8 from "@/app/images/arts/template/art13num8.png";

const artItems = [
  {
    id: "project1",
    src: art1,
    title: "Creative Workspace Illustration",
    subtitle:
      "A flat-design hero asset developed in Illustrator and sketched in Photoshop.",
    stackUsed: ["PhotoShop", "Adobe Illustrator"],
  },
  {
    id: "project2",
    src: art2,
    title: "Online Shopping Illustration",
    subtitle:
      "A vector art concept showcasing a dynamic and modern online shopping experience.",
    stackUsed: ["PhotoShop", "Adobe Illustrator"],
  },
  {
    id: "project3",
    src: art3,
    title: "Growth & Launch Vector Illustration",
    subtitle:
      "A conceptual vector artwork representing progress, acceleration, and digital success.",
    stackUsed: ["PhotoShop", "Adobe Illustrator"],
  },
  {
    id: "project4",
    src: art4,
    title: "Outdoor Travel Concept Illustration",
    subtitle:
      "A vector art concept illustrating travel, exploration, and discovering new places.",
    stackUsed: ["PhotoShop", "Adobe Illustrator"],
  },
  {
    id: "project5",
    src: art5,
    title: "Data Analytics Visualization",
    subtitle:
      "A flat-design vector illustration featuring a professional character interacting with a digital dashboard.",
  },
  {
    id: "project6",
    src: art6,
    title: "Web Design: Brilliant Care",
    subtitle: "UI/UX HealthCare website project I made for a client.",
    subImg: {
      one: subImgArt6Num1,
      two: art6,
    },
    stackUsed: ["Figma", "Photoshop"],
  },
  {
    id: "project7",
    src: art7,
    title: "Geometric Animal Illustration",
    subtitle:
      "A stylized geometric animal illustration created using Adobe Illustrator.",
    stackUsed: ["Adobe Illustrator"],
  },
  {
    id: "project8",
    src: art8,
    title: "My Personal Branding UI Concept",
    subImg: {
      one: subImgArt8Num1,
      two: art6,
    },
    subtitle:
      "A UI concept created while developing a branding and outsourcing company project.",
    stackUsed: ["Figma"],
  },
  {
    id: "project9",
    src: art9,
    title: "WEB DESIGN: Fullidcheck",
    subImg: {
      one: subImgArt9Num1,
      two: art6,
    },
    subtitle:
      "I designed the UI for the fullcheckId.com platform while working at Blockchain Management Corporation. This project involved creating a clean and modern interface for a professional platform, focusing on usability and visual appeal.",
    stackUsed: ["Figma"],
  },
  {
    id: "project10",
    src: art10,
    title: "Digital Arts",

    subtitle:
      "I did this way back 2019 when I was just starting to learn digital art and to test my new drawing tablet. I have some background information on how to draw because I used to draw traditionally, but this was my first time doing digital art and I had a lot of fun experimenting with it.",
    stackUsed: ["Photoshop"],
  },
  {
    id: "project11",
    src: art11,
    title: "Random Manga Panel",
    subtitle:
      "So I tried Doing my own manga panel for fun and this is the result. I was experementing with different 3D assets and shading techniques to create a dramatic black and white manga panel. I had a lot of fun doing this and I learned a lot about composition and lighting while doing it.",
    stackUsed: ["Clip Studio Paint"],
  },
  {
    id: "project12",
    src: art12,
    title: "Webtoon Panels",
    subtitle:
      "This panels are from a webtoon project I did for fun. I was experimenting with different styles and techniques to create a unique look for the webtoon. I had a lot of fun doing this and I learned a lot about storytelling and character design while doing it.",
    stackUsed: ["Clip Studio Paint"],
  },
  {
    id: "project13",
    src: art13,
    title: "Template Design",
    template: {
      one: subImgArt13Num2,
      two: subImgArt13Num3,
      three: subImgArt13Num4,
      four: subImgArt13Num5,
      five: subImgArt13Num6,
      six: subImgArt13Num7,
      seven: subImgArt13Num8,
    },
    subtitle:
      "A template design containing layout and visual elements for a presentation.",
    stackUsed: ["Photoshop"],
  },
];

const artMap = new Map(artItems.map((item) => [item.id, item]));

export function generateStaticParams() {
  return artItems.map((item) => ({ project: item.id }));
}

export function generateMetadata({ params }: { params: { project: string } }) {
  const project = artMap.get(params.project);

  if (!project) {
    return {
      title: "Project not found",
      description: "The requested visual design project could not be found.",
    };
  }

  return {
    title: `${project.title} — Visual Design`,
    description: project.subtitle,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  const project = artMap.get(params.project);
  if (!project) {
    notFound();
  }

  const isWaveCanvas = params.project === "wave-canvas";

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-2">
      <HideWaveCanvas />

      <Link
        href="/visual-design"
        className="text-sm font-mono text-accent hover:underline"
      >
        ← Back to gallery
      </Link>

      <div
        className={`mt-4 overflow-hidden rounded-[.5rem] border-none ${
          isWaveCanvas
            ? "border-transparent bg-transparent"
            : "border-light-border dark:border-dark-border bg-white dark:bg-dark-surface"
        }`}
      >
        {project.subImg && project.subImg.one ? (
          <>
            <div className="relative h-[min(50vh,720px)] bg-black/5 dark:bg-white/0 mb-3">
              <ImageZoomModal src={project.subImg.one} alt={project.title} />
            </div>
            <div className="space-y-3 p-8 bg-transparent mb-20">
              <p className="text-4xl font-display font-bold text-zinc-900 dark:text-white">
                {project.title}
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {project.subtitle}
              </p>
              {project.stackUsed && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stackUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/20 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <div />
        )}

        {project.src ? (
          <div className="relative h-[min(50vh,720px)] bg-black/5 dark:bg-white/0">
            <ImageZoomModal src={project.src} alt={project.title} />
          </div>
        ) : (
          <div className="h-[min(70vh,720px)] bg-transparent" />
        )}

        {!project.subImg && (
          <div className="space-y-3 p-8 bg-transparent">
            <p className="text-4xl font-display font-bold text-zinc-900 dark:text-white">
              {project.title}
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              {project.subtitle}
            </p>
            {project.stackUsed && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stackUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/20 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {project.template && (
          <div className="mt-20">
            {Object.entries(project.template).map(([key, src]) => (
              <div
                key={key}
                className="relative h-[min(50vh,720px)] bg-black/5 dark:bg-white/0 mb-3"
              >
                <ImageZoomModal src={src} alt={`${project.title} - ${key}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
