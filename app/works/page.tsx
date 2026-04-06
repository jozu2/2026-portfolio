import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { HiExternalLink, HiArrowRight } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";

const projects = [
  {
    id: "angkas-atad",
    title: "Angkas Atad – Ride Along App",
    year: "Aug – Dec 2023",
    tags: ["React Native", "Firebase", "Node.js", "Android Studio"],
    description:
      "A collaborative ride-along mobile app developed for Don Honorio Ventura State University. Built with React Native to provide seamless ride-sharing functionality with real-time tracking and user authentication.",
    type: "University Project",
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20",
    icon: "🛵",
    github: "https://github.com/jozu2",
    demo: null,
  },
  {
    id: "femlife",
    title: "FemLife – Women's Health Platform",
    year: "Oct – Dec 2023",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "A comprehensive platform for female patients to track and monitor their menstrual cycles. Fosters better communication with healthcare professionals by providing detailed health logs and insights to doctors.",
    type: "University Project",
    color: "from-accent-pink/10 to-accent-pink/5",
    border: "border-accent-pink/20",
    icon: "💜",
    github: "https://github.com/jozu2",
    demo: null,
  },
  {
    id: "fullcheck",
    title: "fullcheckId.com & devreg.org",
    year: "2024",
    tags: ["React.js", "Tailwind CSS", "builder.io", "Figma"],
    description:
      "Contributed to front-end development for two professional platforms at Blockchain Management Corporation. Leveraged builder.io Figma extension to convert designs into responsive components, improving website loading speed and overall UX.",
    type: "Professional Work",
    color: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/20",
    icon: "🔗",
    github: null,
    demo: "https://fullcheckid.com",
  },
  {
    id: "pianogod",
    title: "Pianogod.com Optimization",
    year: "2023 – 2024",
    tags: ["Python", "React", "Node.js", "Performance"],
    description:
      "Optimized the pianogod.com platform by resolving critical front-end and back-end issues, improving server reliability, and adding new features requested by the client. Resulted in measurable improvements in performance and user satisfaction.",
    type: "Freelance",
    color: "from-accent-orange/10 to-accent-orange/5",
    border: "border-accent-orange/20",
    icon: "🎹",
    github: null,
    demo: null,
  },
];

export const metadata = {
  title: "Works — Joshua Melendres",
  description: "Portfolio of projects and works by Joshua Melendres.",
};

export default function Works() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
      <AnimatedSection delay={0}>
        <div className="mb-12">
          <p className="section-title"></p>
          <h1 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-3">
            Projects
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
            {/* A selection of projects I&apos;ve built — ranging from mobile apps
            and full-stack platforms to freelance client work and creative
            experiments. */}
            Currently Work in progress
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-5">
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} delay={0.1 + i * 0.08}>
            <article
              className={`card group p-6 bg-gradient-to-br ${project.color} border ${project.border}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                  {project.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        {project.type}
                      </span>
                      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mt-0.5">
                        {project.title}
                      </h2>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 flex-shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/10 dark:bg-white/5 border border-white/10 text-zinc-500 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
                      >
                        <IoLogoGithub size={13} />
                        Source
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors duration-200"
                      >
                        <HiExternalLink size={13} />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-accent/30 bg-accent/5 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono mb-3">
            More projects coming soon...
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
  );
}
