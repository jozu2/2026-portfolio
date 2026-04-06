"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import myImg from "@/app/images/my-dev-pic.png";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Particles from "@/components/Particles";

const timeline = [
  {
    year: "2019 - 2021",
    role: "Comic Artist",
    company: "Fiverr",
    desc: "Managed end-to-end creative workflows for diverse international clients, consistently meeting strict deadlines and high quality-standards.",
  },
  {
    year: "2021 - 2023",
    role: "Full-Stack Developer",
    company: "Onlinejobs.ph",
    desc: "Architected and deployed a high-performance feature module for an instrument trainer app, optimizing real-time audio/visual synchronization to ensure a seamless, low-latency user experience",
  },
  {
    year: "2023 - 2023",
    role: "Front-End Developer",
    company: "Dulles Glass",
    desc: "Translated high-fidelity designer mockups into responsive web interfaces, ensuring a seamless transition from concept to production. ",
  },
  {
    year: "2023 - 2024",
    role: "Full-Stack Developer",
    company: "Onlinejobs.ph",
    desc: "Collaborated directly with clients to refine project scopes, consistently delivering features that exceeded functional and aesthetic expectations.",
  },
  {
    year: "2024 - 2025",
    role: "UI/UX Designer & Front-End Developer",
    company: "Blockchain Management Corporation",
    desc: "Pioneered front-end development for fullidcheck.com and devreg.org using React.js and Tailwind CSS, focusing on high-performance, responsive layouts.",
  },
  {
    year: "2025 - 2026",
    role: "Full-Stack Developer",
    company: "Pianogod",
    desc: "Iterated on core application features based on client feedback, enhancing the overall user experience (UX) and streamlining navigation for improved workflow efficiency.",
  },
];

const interests = [
  "Creative Coding",
  "UI/UX Design",
  "Digital Art",
  "Gaming",
  "Photography",
  "Playing Music Instruments",
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-2xl mx-auto px-4 sm:px-6 pb-12 dark:bg-dark-bg"
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hero */}
      {/* <WaveHeader /> */}
      <Particles isActive={isHovered} />

      <AnimatedSection delay={0}>
        <div className="mb-12">
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-6 mt-10">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-wide text-zinc-900 dark:text-white">
                Joshua
                {` `}
                <span className="">Melendres</span>
              </h1>
              <p className="text-base font-mono text-zinc-500 dark:text-zinc-400 mt-1.5">
                Full Stack Developer
                <span className="text-secondary mx-2">/</span>
                Digital Artist
                <span className="text-secondary mx-2">/</span>
                Designer
              </p>
            </div>

            {/* Avatar placeholder */}
            <div className="flex-shrink-0 mt-[-10px]">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <div
                  className="w-full  h-full rounded-full hover-glow bg-gradient-to-tl from-accent/20 via-accent/10 to-accent-pink/20 flex items-center justify-center text-4xl font-display font-bold text-accent/30 animate-float"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* <HiCode className="h-full w-16" /> */}
                  <Image
                    src={myImg}
                    alt="Joshua"
                    width={112}
                    height={112}
                    className=" w-full h-full rounded-full object-cover border-2 border-accent"
                  />
                </div>

                {/* Replace the div above with an <Image> when you add your photo: */}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Works */}
      <AnimatedSection delay={0.1}>
        <section className="mb-10">
          <p className="section-title ">Works</p>
          <div className="prose dark:prose-invert prose-sm max-w-none text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              I&apos;m a Full Stack Developer and digital creative based in the
              Philippines with a strong passion for building elegant,
              high-performing web experiences. I thrive at the intersection of{" "}
              <span className="text-accent font-medium">
                engineering and art
              </span>{" "}
              — whether I&apos;m architecting a robust back-end system or
              crafting pixel-perfect interfaces.
            </p>
            <p>
              With a background spanning front-end frameworks like React.js and
              Tailwind to back-end technologies like Node.js, Laravel, and
              Python, I bring a versatile toolkit to every project. I have a
              designer&apos;s eye for detail, a developer&apos;s mind for
              performance, and an artist&apos;s soul for creativity.
            </p>
            <p>
              Beyond coding, I create digital artwork and design concepts —
              believing that the best software is both functional <em>and</em>{" "}
              beautiful. I&apos;m always chasing the sweet spot between
              technical excellence and visual delight.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* <Link
              href="mailto:dev.jozu@gmail.com"
              className="btn-primary border-zinc-300 dark:border-dark-muted text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent"
            >
              <MdEmail size={14} />
              Get in touch
            </Link> */}
            <Link
              href="/works"
              className="btn-primary border-zinc-300 dark:border-dark-muted text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent"
            >
              Works <HiArrowRight size={14} />
            </Link>
            <Link
              href="/visual-design"
              className="btn-primary bg-secondary text-zinc-900 dark:text-zinc-900 hover:bg-secondary/90"
            >
              Visual Design <HiArrowRight size={14} />
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Experience Timeline */}
      <AnimatedSection delay={0.2}>
        <section className="mb-14">
          <p className="section-title">Experience</p>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center group-hover:border-accent/50 transition-colors duration-200 mt-0.5 flex-shrink-0">
                    <BsBriefcaseFill size={12} className="text-accent" />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-zinc-100 dark:bg-dark-border group-hover:bg-accent/20 transition-colors duration-200" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mb-1">
                    {item.year}
                  </p>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100 text-sm">
                    {item.role}
                  </p>
                  <p className="text-xs font-mono text-accent mb-2">
                    {item.company}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.25}>
        <section className="mb-14">
          <p className="section-title">Education</p>
          <div className="card p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                <FaGlobe size={14} className="text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-zinc-800 dark:text-zinc-100 text-sm">
                  Bachelor of Information Technology
                </p>
                <p className="text-xs font-mono text-accent mt-0.5">
                  Don Honorio Ventura State University
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                  Bacolor, Pampanga, Philippines
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Interests */}
      <AnimatedSection delay={0.3}>
        <section className="mb-14">
          <p className="section-title">Interests</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span key={item} className="skill-tag cursor-default">
                {item}
              </span>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* On the web */}
      <AnimatedSection delay={0.35}>
        <section className="mb-14">
          <p className="section-title">On the web</p>
          <div className="space-y-2">
            <Link
              href="https://github.com/jozu2"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-dark-surface border border-transparent hover:border-light-border dark:hover:border-dark-border transition-all duration-200 group"
            >
              <IoLogoGithub
                size={18}
                className="text-zinc-400 group-hover:text-secondary transition-colors"
              />
              <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-accent transition-colors">
                @jozu2
              </span>
              <span className="ml-auto text-xs text-zinc-400 font-mono">
                github.com
              </span>
            </Link>
            <Link
              href="https://linkedin.com/in/joshua-melendres-155814264"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-dark-surface border border-transparent hover:border-light-border dark:hover:border-dark-border transition-all duration-200 group"
            >
              <IoLogoLinkedin
                size={18}
                className="text-zinc-400 group-hover:text-secondary transition-colors"
              />
              <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-accent transition-colors">
                joshua-melendres
              </span>
              <span className="ml-auto text-xs text-zinc-400 font-mono">
                linkedin.com
              </span>
            </Link>
            <Link
              href="https://jozu2.github.io/jozu-portfolio/"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-dark-surface border border-transparent hover:border-light-border dark:hover:border-dark-border transition-all duration-200 group"
            >
              <FaGlobe
                size={16}
                className="text-zinc-400 group-hover:text-secondary transition-colors"
              />
              <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-accent transition-colors">
                jozu-portfolio
              </span>
              <span className="ml-auto text-xs text-zinc-400 font-mono">
                github.io
              </span>
            </Link>
            <a
              href="mailto:dev.jozu@gmail.com"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-dark-surface border border-transparent hover:border-light-border dark:hover:border-dark-border transition-all duration-200 group"
            >
              <MdEmail
                size={18}
                className="text-zinc-400 group-hover:text-secondary transition-colors"
              />
              <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-accent transition-colors">
                dev.jozu@gmail.com
              </span>
              <span className="ml-auto text-xs text-zinc-400 font-mono">
                email
              </span>
            </a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
