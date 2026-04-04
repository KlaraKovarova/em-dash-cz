import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Jak začít s EMDash – Instalace a první kroky | em-dash.cz',
  description:
    'Průvodce instalací a prvními kroky s EMDash. Nainstalujte EMDash, propojte ho s vaším repozitářem a spusťte první AI agenty za méně než 10 minut.',
  openGraph: {
    title: 'Jak začít s EMDash – Průvodce instalací',
    description:
      'Krok za krokem: stažení, instalace, první agenti. EMDash je připravený ke spuštění za méně než 10 minut.',
    url: 'https://em-dash.cz/zacit',
  },
}

const steps = [
  {
    number: '01',
    title: 'Stáhněte EMDash z GitHubu',
    description:
      'Přejděte na GitHub repozitář EMDash a stáhněte si nejnovější release pro váš operační systém (macOS nebo Linux). EMDash je desktopová aplikace – žádný cloud, žádné předplatné.',
    code: 'git clone https://github.com/generalaction/emdash\ncd emdash\nnpm install',
    tip: 'Pro macOS doporučujeme stáhnout .dmg soubor přímo z Releases sekce na GitHubu.',
  },
  {
    number: '02',
    title: 'Spusťte aplikaci',
    description:
      'Po instalaci závislostí spusťte EMDash příkazem níže. Aplikace se otevře v novém okně. Při prvním spuštění proběhne průvodce nastavením.',
    code: 'npm run dev\n# nebo pro produkční build:\nnpm start',
    tip: null,
  },
  {
    number: '03',
    title: 'Připojte váš repozitář',
    description:
      'V průvodci nastavením vyberte lokální složku vašeho git repozitáře, nebo se připojte přes SSH/SFTP na vzdálený server. EMDash vytvoří izolované worktrees pro každého agenta automaticky.',
    code: null,
    tip: 'Ujistěte se, že váš repozitář má čistý hlavní branch (main/master) bez nesloučených změn.',
  },
  {
    number: '04',
    title: 'Nastavte AI poskytovatele',
    description:
      'EMDash je provider-agnostický – funguje s Claude Code, GitHub Copilot, Cursor, Qwen a dalšími. V nastavení zadejte API klíče nebo nakonfigurujte lokální model podle vašeho výběru.',
    code: null,
    tip: 'Pro začátek doporučujeme Claude Code od Anthropicu – nabízí výbornou schopnost porozumění a editace kódu.',
  },
  {
    number: '05',
    title: 'Propojte správce úkolů (volitelně)',
    description:
      'Propojte EMDash s Linear, GitHub Issues nebo Jira, aby agenti dostávali úkoly automaticky. V nastavení zvolte integraci, autorizujte přístup a vyberte projekt nebo board.',
    code: null,
    tip: 'Bez integrace se správcem úkolů můžete agentům zadávat úkoly ručně přímo v rozhraní EMDash.',
  },
  {
    number: '06',
    title: 'Spusťte první agenty',
    description:
      'Klikněte na tlačítko „Spustit agenty" a vyberte, kolik jich chcete aktivovat najednou (doporučujeme začít se 2–3). Sledujte v reálném čase, jak každý agent pracuje na svém úkolu v odděleném worktree.',
    code: null,
    tip: 'Každý agent automaticky vytvoří pull request po dokončení úkolu. Vy pak PR zkontrolujete a schválíte nebo odmítnete.',
  },
]

export default function ZacitPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Začněte s EMDash
              </h1>
              <p className="mt-4 text-lg text-indigo-200">
                Od instalace k prvním AI agentům za méně než 10 minut.
                Průvodce krok za krokem.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-indigo-300">
                <span>⏱ Cca 10 minut</span>
                <span>·</span>
                <span>🆓 Zcela zdarma</span>
                <span>·</span>
                <span>🛠️ macOS / Linux</span>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                    {step.code && (
                      <pre className="mt-4 overflow-x-auto rounded-xl bg-gray-900 p-4 text-sm text-green-400">
                        <code>{step.code}</code>
                      </pre>
                    )}
                    {step.tip && (
                      <div className="mt-3 flex gap-2 rounded-lg bg-indigo-50 p-3 text-sm text-indigo-700">
                        <span>💡</span>
                        <span>{step.tip}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-2xl font-bold text-gray-900">
              Časté dotazy
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: 'Funguje EMDash na Windows?',
                  a: 'Momentálně je EMDash optimalizovaný pro macOS a Linux. Podpora Windows je plánována v budoucích verzích.',
                },
                {
                  q: 'Musím mít placené API klíče?',
                  a: 'Záleží na AI poskytovateli. Většina nabízí bezplatné tierové plány nebo zkušební kredity. EMDash samotný je zdarma.',
                },
                {
                  q: 'Jak EMDash nakládá s mým kódem?',
                  a: 'EMDash běží lokálně na vašem stroji. Kód neopouští váš počítač – posílají se pouze prompty AI poskytovateli dle vaší volby.',
                },
                {
                  q: 'Kolik agentů mohu spustit najednou?',
                  a: 'Technicky je limit závislý na výkonu vašeho hardware a API rate limitech poskytovatele. V praxi uživatelé běžně spouští 10–23+ agentů paralelně.',
                },
              ].map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  <p className="mt-1 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-bold">Stále máte otázky?</h2>
            <p className="mt-4 text-indigo-100">
              Přečtěte si více o funkcích EMDash nebo se podívejte na blog.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/funkce"
                className="rounded-xl bg-white px-8 py-3 font-semibold text-indigo-700 hover:bg-indigo-50"
              >
                Přehled funkcí
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white hover:bg-white/20"
              >
                Přejít na blog →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
