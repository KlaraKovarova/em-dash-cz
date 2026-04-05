import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="em-dash.cz"
              width={120}
              height={30}
            />
            <p className="mt-2 text-sm text-gray-500">
              Česká komunita kolem EMDash – open-source Agentic Development
              Environment.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Stránky</h3>
            <ul className="mt-3 space-y-2">
              {[
                { href: '/funkce', label: 'Funkce' },
                { href: '/sablony', label: 'Šablony' },
                { href: '/zacit', label: 'Začínáme' },
                { href: '/o-emdashu', label: 'O EMDashi' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Zdroje</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://github.com/generalaction/emdash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/generalaction/emdash/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  MIT Licence
                </a>
              </li>
              <li>
                <a
                  href="https://www.hostinger.com/cz?REFERRALCODE=TAEZACHMILYI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Hosting od Hostinger
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} em-dash.cz — Nezávislý komunitní web o
          EMDash (YC W26)
        </div>
      </div>
    </footer>
  )
}
