import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 flex flex-col items-center justify-center text-center">
      <p className="text-8xl font-display font-bold text-accent/20 mb-4">404</p>
      <h1 className="text-2xl font-display font-bold text-zinc-900 dark:text-white mb-3">
        Page not found
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 font-mono">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        <HiArrowLeft size={14} />
        Back to home
      </Link>
    </div>
  )
}
