import Link from 'next/link'

const navLinks = [
  { href: '/funkce', label: 'Funkce' },
  { href: '/o-emdashu', label: 'O EMDashi' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            em—dash
          </span>
          <span className="rounded bg-indigo-600 px-1.5 py-0.5 text-xs font-semibold text-white">
            .cz
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com/generalaction/emdash"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          GitHub →
        </a>
      </div>
    </header>
  )
}
