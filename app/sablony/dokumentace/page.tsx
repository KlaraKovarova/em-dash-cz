import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dokumentace – Šablona | em-dash.cz',
  description:
    'Šablona pro technickou dokumentaci s navigací, kódovými bloky a API referencí. Vytvořeno s EMDash.',
  openGraph: {
    title: 'Dokumentace – Šablona em-dash.cz',
    description: 'Strukturovaná šablona pro technickou dokumentaci.',
    url: 'https://em-dash.cz/sablony/dokumentace',
  },
}

const sidebarSections = [
  {
    title: 'Začínáme',
    items: ['Úvod', 'Instalace', 'Rychlý start', 'Konfigurace'],
  },
  {
    title: 'Základy',
    items: ['Autentizace', 'Požadavky', 'Odpovědi', 'Chybové kódy'],
  },
  {
    title: 'API Reference',
    items: ['Uživatelé', 'Projekty', 'Úkoly', 'Webhooky'],
  },
  {
    title: 'Pokročilé',
    items: ['Rate limiting', 'Stránkování', 'Filtry', 'Batch operace'],
  },
]

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/users',
    description: 'Vrátí seznam všech uživatelů',
    methodColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    description: 'Vytvoří nového uživatele',
    methodColor: 'bg-blue-100 text-blue-700',
  },
  {
    method: 'GET',
    path: '/api/v1/users/:id',
    description: 'Vrátí detail uživatele',
    methodColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    method: 'PATCH',
    path: '/api/v1/users/:id',
    description: 'Aktualizuje uživatele',
    methodColor: 'bg-amber-100 text-amber-700',
  },
  {
    method: 'DELETE',
    path: '/api/v1/users/:id',
    description: 'Smaže uživatele',
    methodColor: 'bg-red-100 text-red-700',
  },
]

export default function DokumentaceTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Template notice */}
      <div className="bg-amber-600 px-4 py-2 text-center text-sm text-white">
        Toto je šablona em-dash.cz ·{' '}
        <Link href="/sablony" className="underline hover:no-underline">
          Zpět na šablony
        </Link>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gray-900">VášProjekt</span>
            <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
              docs
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <span className="text-sm font-medium text-gray-600">
              Dokumentace
            </span>
            <span className="text-sm font-medium text-gray-600">
              API Reference
            </span>
            <span className="text-sm font-medium text-gray-600">
              Changelog
            </span>
            <span className="text-sm font-medium text-gray-600">Podpora</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-400 sm:block">
              Hledat... ⌘K
            </div>
            <span className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
              GitHub
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-gray-100 px-4 py-8 lg:block">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {section.title}
              </h4>
              <ul className="mt-2 space-y-1">
                {section.items.map((item, i) => (
                  <li key={item}>
                    <span
                      className={`block rounded-lg px-3 py-1.5 text-sm ${
                        section.title === 'Začínáme' && i === 0
                          ? 'bg-amber-50 font-medium text-amber-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      } cursor-pointer`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 px-4 py-12 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
              <span>Docs</span>
              <span>/</span>
              <span>Začínáme</span>
              <span>/</span>
              <span className="text-gray-900">Úvod</span>
            </div>

            {/* Page title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Úvod
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-500">
              VášProjekt je API-first platforma pro správu projektů a úkolů.
              Tento průvodce vás provede základní konfigurací a prvním API
              voláním.
            </p>

            {/* Info box */}
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <p className="font-semibold text-amber-800">Tip</p>
                  <p className="mt-1 text-sm text-amber-700">
                    Pokud chcete začít co nejrychleji, přeskočte na{' '}
                    <span className="cursor-pointer font-medium underline">
                      Rychlý start
                    </span>
                    . Tento úvod vysvětluje koncepci a architekturu.
                  </p>
                </div>
              </div>
            </div>

            {/* Content sections */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">Instalace</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Nainstalujte klientskou knihovnu pomocí vašeho oblíbeného
                package manageru:
              </p>

              {/* Code block */}
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
                  <span className="text-xs font-medium text-gray-500">
                    bash
                  </span>
                  <span className="cursor-pointer text-xs text-gray-400 hover:text-gray-600">
                    Kopírovat
                  </span>
                </div>
                <pre className="overflow-x-auto bg-gray-900 p-4 text-sm leading-6 text-gray-100">
                  <code>{`# npm
npm install @vasprojekt/sdk

# yarn
yarn add @vasprojekt/sdk

# pnpm
pnpm add @vasprojekt/sdk`}</code>
                </pre>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Autentizace
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Všechny API požadavky vyžadují API klíč. Klíč najdete v
                nastavení vašeho projektu.
              </p>

              {/* Code block */}
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
                  <span className="text-xs font-medium text-gray-500">
                    typescript
                  </span>
                  <span className="cursor-pointer text-xs text-gray-400 hover:text-gray-600">
                    Kopírovat
                  </span>
                </div>
                <pre className="overflow-x-auto bg-gray-900 p-4 text-sm leading-6 text-gray-100">
                  <code>{`import { Client } from '@vasprojekt/sdk'

const client = new Client({
  apiKey: process.env.VASPROJEKT_API_KEY,
  baseUrl: 'https://api.vasprojekt.cz/v1',
})

// Ověření připojení
const me = await client.users.me()
console.log('Připojeno jako:', me.name)`}</code>
                </pre>
              </div>
            </section>

            {/* Warning box */}
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <p className="font-semibold text-red-800">
                    Bezpečnostní upozornění
                  </p>
                  <p className="mt-1 text-sm text-red-700">
                    Nikdy nevkládejte API klíč přímo do zdrojového kódu. Vždy
                    používejte environment proměnné nebo secret manager.
                  </p>
                </div>
              </div>
            </div>

            {/* API Reference section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                API Reference: Uživatelé
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Kompletní přehled endpointů pro správu uživatelů.
              </p>

              <div className="mt-8 space-y-3">
                {apiEndpoints.map((endpoint) => (
                  <div
                    key={`${endpoint.method}-${endpoint.path}`}
                    className="flex items-center gap-4 rounded-xl border border-gray-100 px-4 py-3 transition-colors hover:bg-gray-50"
                  >
                    <span
                      className={`w-16 shrink-0 rounded px-2 py-1 text-center text-xs font-bold ${endpoint.methodColor}`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-medium text-gray-900">
                      {endpoint.path}
                    </code>
                    <span className="ml-auto text-sm text-gray-400">
                      {endpoint.description}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Response example */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Příklad odpovědi
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Všechny odpovědi jsou ve formátu JSON a obsahují standardní
                obálku.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                      200
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      application/json
                    </span>
                  </div>
                  <span className="cursor-pointer text-xs text-gray-400 hover:text-gray-600">
                    Kopírovat
                  </span>
                </div>
                <pre className="overflow-x-auto bg-gray-900 p-4 text-sm leading-6 text-gray-100">
                  <code>{`{
  "data": {
    "id": "usr_abc123",
    "name": "Jan Novák",
    "email": "jan@example.com",
    "role": "admin",
    "createdAt": "2026-01-15T10:30:00Z"
  },
  "meta": {
    "requestId": "req_xyz789"
  }
}`}</code>
                </pre>
              </div>
            </section>

            {/* Table */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">
                Chybové kódy
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                API používá standardní HTTP status kódy.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-900">
                        Kód
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-900">
                        Název
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-900">
                        Popis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                          400
                        </code>
                      </td>
                      <td className="px-4 py-3 text-gray-600">Bad Request</td>
                      <td className="px-4 py-3 text-gray-500">
                        Chybný formát požadavku
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                          401
                        </code>
                      </td>
                      <td className="px-4 py-3 text-gray-600">Unauthorized</td>
                      <td className="px-4 py-3 text-gray-500">
                        Chybí nebo je neplatný API klíč
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                          404
                        </code>
                      </td>
                      <td className="px-4 py-3 text-gray-600">Not Found</td>
                      <td className="px-4 py-3 text-gray-500">
                        Zdroj neexistuje
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                          429
                        </code>
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        Too Many Requests
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        Překročen rate limit
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                          500
                        </code>
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        Internal Error
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        Chyba na straně serveru
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Next/prev navigation */}
            <div className="mt-16 flex justify-between border-t border-gray-200 pt-8">
              <div />
              <div className="text-right">
                <span className="text-xs text-gray-400">Další</span>
                <div className="cursor-pointer text-sm font-semibold text-amber-600 hover:text-amber-700">
                  Instalace →
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-xs text-gray-400">
              © 2026 VášProjekt — Šablona em-dash.cz
            </div>
            <div className="flex gap-6 text-xs text-gray-400">
              <span className="cursor-pointer hover:text-gray-600">GitHub</span>
              <span className="cursor-pointer hover:text-gray-600">
                Discord
              </span>
              <span className="cursor-pointer hover:text-gray-600">
                Twitter
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
