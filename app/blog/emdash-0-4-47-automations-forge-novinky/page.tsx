import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title:
    'EMDash v0.4.47 – Automations, Forge a další novinky | em-dash.cz',
  description:
    'Přehled novinek v EMDash v0.4.45–v0.4.47: nová funkce Automations pro plánované úkoly, podpora poskytovatele Forge, resource monitor, opravy macOS a vylepšení výkonu pro velké repozitáře.',
  openGraph: {
    title: 'EMDash v0.4.47 – Automations, Forge a další novinky',
    description:
      'Automations, Forge, resource monitor a opravy – co přináší nejnovější verze EMDash.',
    url: 'https://em-dash.cz/blog/emdash-0-4-47-automations-forge-novinky',
    type: 'article',
  },
}

export default function Emdash047Post() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-sm text-indigo-300">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span>→</span>
              <span>Novinky</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              EMDash v0.4.47 – Automations, Forge a další novinky
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-indigo-300">
              <time>6. dubna 2026</time>
              <span>·</span>
              <span>5 min čtení</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="lead text-xl leading-8 text-gray-700">
                Za poslední dva týdny EMDash vydal sérii aktualizací od verze
                0.4.40 až po dnešní v0.4.47. Největší novinkou jsou Automations
                – možnost plánovat opakující se úkoly přímo v EMDash. Ale to
                není vše.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Automations: plánované úkoly bez manuálního zásahu
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Od verze 0.4.45 EMDash podporuje Automations – funkci, která vám
                umožní nastavit opakující se úkoly pro vaše AI agenty. Chcete
                každé ráno spustit kontrolu kódu? Denní build? Noční testy?
                Stačí nastavit časový plán a EMDash se postará o zbytek.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Automations běží lokálně na vašem počítači – žádný cloud, žádné
                externí služby. Můžete je nastavit přímo v rozhraní EMDash, kde
                také vidíte historii běhů a jejich výsledky. Funkce je aktuálně
                v beta fázi.
              </p>

              <div className="my-8 rounded-2xl bg-indigo-50 p-6">
                <h3 className="font-bold text-indigo-900">
                  Co Automations umí
                </h3>
                <ul className="mt-3 space-y-2 text-indigo-800">
                  <li>
                    Časové plány (cron) – „každý den v 9:00", „každou hodinu"
                  </li>
                  <li>Webhook a API triggery pro externí spouštění</li>
                  <li>Historie běhů s logy</li>
                  <li>Manuální spuštění kdykoliv</li>
                  <li>Šablony pro běžné scénáře</li>
                </ul>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Nový poskytovatel: Forge
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Ve verzi 0.4.46 přibyla podpora pro{' '}
                <a
                  href="https://forgecode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Forge
                </a>{' '}
                – dalšího AI poskytovatele, který se řadí vedle Claude Code,
                GitHub Copilot, Cursor, Qwen, Codex CLI a Gemini CLI. EMDash tak
                nabízí ještě širší výběr AI modelů pro vaše projekty.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Výkon a stabilita
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Několik důležitých oprav a vylepšení:
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li>
                  <strong>Optimalizace git status pro velké monorepo</strong>{' '}
                  (v0.4.45) – výrazně rychlejší práce s rozsáhlými repozitáři.
                </li>
                <li>
                  <strong>Oprava padání na macOS</strong> (v0.4.46) – od verze
                  0.4.43 se některým uživatelům macOS aplikace nečekaně zavírala.
                  Opraveno.
                </li>
                <li>
                  <strong>Lepší SSH s fish shell</strong> (v0.4.46, v0.4.47) –
                  vyřešen 15sekundový delay při připojení přes SSH s fish shell.
                </li>
                <li>
                  <strong>Reveal in Finder / Open in Terminal</strong> (v0.4.47)
                  – nové položky v kontextovém menu složek pro rychlejší
                  navigaci.
                </li>
              </ul>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Resource monitor
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Od verze 0.4.40 je k dispozici volitelný resource monitor, který
                sleduje využití CPU, RAM a disku během práce agentů. Užitečné
                zejména pokud spouštíte více agentů najednou a chcete mít
                přehled o zátěži systému.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Jak aktualizovat
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Stáhněte nejnovější verzi z{' '}
                <a
                  href="https://github.com/generalaction/emdash/releases/tag/v0.4.47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 hover:text-indigo-800"
                >
                  GitHub Releases
                </a>
                . K dispozici jsou instalátory pro macOS (.dmg), Linux (.deb,
                .AppImage) i Windows (.exe, .msi).
              </p>
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-100 pt-8">
              {[
                'EMDash',
                'v0.4.47',
                'Automations',
                'Forge',
                'novinky',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-indigo-600 p-8 text-white">
              <h3 className="text-xl font-bold">Vyzkoušejte Automations</h3>
              <p className="mt-2 text-indigo-100">
                Aktualizujte na v0.4.47 a nastavte si první automatizovaný úkol
                během minut.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/generalaction/emdash/releases/tag/v0.4.47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-indigo-700 hover:bg-indigo-50"
                >
                  Stáhnout v0.4.47
                </a>
                <Link
                  href="/funkce"
                  className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-center font-semibold text-white hover:bg-white/20"
                >
                  Přehled funkcí →
                </Link>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-12">
              <Link
                href="/blog"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                ← Zpět na blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
