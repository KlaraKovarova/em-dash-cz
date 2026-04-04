import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'O EMDash – Co je EMDash, YC W26 a open-source vývoj | em-dash.cz',
  description:
    'EMDash je open-source Agentic Development Environment (ADE), který umožňuje vývojářům spouštět desítky AI agentů paralelně. Projekt YC W26, MIT licence, dostupný na GitHubu.',
  openGraph: {
    title: 'O EMDash – Agentic Development Environment',
    description:
      'Co je EMDash, jak vznikl, kdo za ním stojí a proč je to přelomový nástroj pro vývojáře.',
    url: 'https://em-dash.cz/o-emdashu',
  },
}

export default function OEmdashuPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Co je EMDash?
              </h1>
              <p className="mt-4 text-lg text-indigo-200">
                Agentic Development Environment pro vývojáře, kteří chtějí
                víc než jednoho AI asistenta.
              </p>
            </div>
          </div>
        </section>

        {/* Co je EMDash */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-3xl font-bold text-gray-900">
                Agentic Development Environment
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                EMDash (čte se „em-dash") je open-source desktopová aplikace,
                která mění způsob, jakým vývojáři pracují s AI. Namísto jednoho
                chatovacího asistenta, se kterým střídavě komunikujete, EMDash
                spouští desítky AI kodérů <strong>paralelně</strong> – každý
                na svém izolovaném úkolu, ve vlastní git větvi.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Představte si to jako tým vývojářů, který pracuje najednou.
                Každý dostane svůj ticket, pracuje samostatně a výsledek vrátí
                jako pull request k vašemu schválení. Vy se soustředíte na
                architekturu a review, ne na implementaci.
              </p>
            </div>
          </div>
        </section>

        {/* Klíčové vlastnosti */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-2xl font-bold text-gray-900">
              Klíčové vlastnosti
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  icon: '🤖',
                  title: '23+ agentů najednou',
                  desc: 'Spusťte celý tým AI kodérů v jednom okně. Každý agent pracuje autonomně na přiděleném úkolu.',
                },
                {
                  icon: '🌿',
                  title: 'Izolované git worktrees',
                  desc: 'Každý agent dostane vlastní branch. Žádné konflikty, čisté oddělení změn, snadné review.',
                },
                {
                  icon: '🔗',
                  title: 'Linear, GitHub, Jira',
                  desc: 'Propojte EMDash s nástrojem pro správu projektu a tickety putují k agentům automaticky.',
                },
                {
                  icon: '🌐',
                  title: 'Jakýkoliv AI model',
                  desc: 'Claude Code, Copilot, Cursor, Qwen – EMDash funguje s libovolným AI kodérem.',
                },
                {
                  icon: '🖥️',
                  title: 'SSH/SFTP připojení',
                  desc: 'Agenti se připojí na vzdálené servery přes SSH nebo SFTP a pracují na vzdáleném kódu.',
                },
                {
                  icon: '📄',
                  title: 'MIT licence',
                  desc: 'Žádný vendor lock-in, žádné omezení. Plný přístup ke kódu, modifikujte podle potřeby.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-gray-100 bg-white p-6"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YC W26 */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🚀</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Y Combinator W26
                  </h2>
                  <p className="mt-3 leading-7 text-gray-700">
                    EMDash je součástí zimní třídy Y Combinator 2026 (YC W26) –
                    jednoho z nejprestižnějších startupových akcelerátorů na světě.
                    To svědčí o tom, že myšlenka paralelního vývoje s AI agenty
                    má reálný potenciál změnit způsob, jakým software vzniká.
                  </p>
                  <p className="mt-3 leading-7 text-gray-700">
                    Y Combinator stojí za společnostmi jako Airbnb, Stripe, Dropbox,
                    Reddit nebo OpenAI. Účast v programu znamená přístup ke
                    špičkovým mentorům, síti investorů a globální viditelnosti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open-source */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Proč open-source?
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
              <p>
                Tým za EMDash věří, že nástroje pro vývojáře by měly být
                transparentní, auditovatelné a přizpůsobitelné. Uzavřené
                proprietární platformy vás svazují podmínkami a cenovými
                plány – open-source vám dává svobodu.
              </p>
              <p>
                Pod MIT licencí si EMDash můžete stáhnout, upravit, distribuovat
                nebo integrovat do vlastních projektů – bez poplatků, bez
                potřeby souhlasu. Pokud chcete přispět, pull requesty jsou vítány.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://github.com/generalaction/emdash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800"
              >
                <span>Prozkoumat kód na GitHubu</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* O em-dash.cz */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">O em-dash.cz</h2>
            <p className="mt-4 leading-7 text-gray-600">
              em-dash.cz je nezávislý komunitní web věnovaný EMDash pro českou
              a slovenskou vývojářskou komunitu. Přinášíme novinky, průvodce,
              návody a postřehy z praxe. Nejsme oficiálním projektem autorů EMDash,
              ale nadšenci, kteří věří, že agentic development je budoucnost
              softwarového vývoje.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/zacit"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Začít s EMDash
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Číst blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
