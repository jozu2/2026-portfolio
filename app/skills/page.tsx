import AnimatedSection from "@/components/AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    icon: "⌨️",
    skills: ["JavaScript", "TypeScript", "PHP", "SQL", "C++"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Chakra UI",
      "Bootstrap",
      "Redux",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Laravel", "Python"],
  },
  {
    title: "Mobile",
    icon: "📱",
    skills: ["React Native", "Android Studio"],
  },
  {
    title: "Database & Cloud",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Tools & Design",
    icon: "🛠️",
    skills: [
      "Git",
      "Photoshop",
      "Figma",
      "Adobe Illustrator",
      "ClipStudio Paint",
      "builder.io",
      "VS Code",
    ],
  },
];

const certifications = [
  { title: "Top 10 Trend Technologies to Master", year: "Mar 2022" },
  { title: "Animation Certification", year: "Jan 2020" },
];

export const metadata = {
  title: "Skills — Joshua Melendres",
  description: "Technical skills and certifications of Joshua Melendres.",
};

export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
      <AnimatedSection delay={0}>
        <div className="mb-12">
          <p className="section-title">Skills</p>
          <h1 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-3">
            Tech Stack & Tools
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
            A full-stack toolkit refined through real-world projects, client
            work, and continuous learning.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={0.1 + i * 0.07}>
            <div className="card p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{cat.icon}</span>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
                  {cat.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-200 dark:bg-dark-muted text-zinc-600 dark:text-zinc-300 border border-light-border dark:border-dark-border hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.55}>
        <section>
          <p className="section-title">Certifications</p>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center justify-between px-5 py-4 rounded-xl bg-zinc-50 dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-accent font-mono text-sm">✦</span>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    {cert.title}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 flex-shrink-0 ml-4">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
