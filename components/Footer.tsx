import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="border-t border-light-border dark:border-dark-border mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} Joshua Melendres
          <span className="text-accent mx-1">·</span>
          Built with Next.js & Tailwind
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/jozu2"
            target="_blank"
            className="text-zinc-400 hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <IoLogoGithub size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/joshua-melendres-155814264"
            target="_blank"
            className="text-zinc-400 hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin size={18} />
          </Link>
          <Link
            href="mailto:webdevjozu@gmail.com"
            className="text-zinc-400 hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <MdEmail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
