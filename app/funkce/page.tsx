import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Funkce EMDash – Paralelní AI agenti, integrace a víc | em-dash.cz',
  description:
    'Podrobný přehled funkcí EMDash: 23+ AI agentů najednou, izolované git worktrees, integrace s Linear/GitHub/Jira, SSH/SFTP, podpora Claude Code, Cursor, Copilot a dalších.',
  openGraph: {
    title: 'Funkce EMDash – Vše, co potřebujete vědět',
    description:
      'Paralelní AI kodéři, izolované worktrees, integrace s nástroji pro správu projektů. Vše open-source pod MIT licencí.',
    url: 'https://em-dash.cz/funkce',
  },
}

const featureGroups = [
  {
    heading: 'Paralelní vývoj',
    features: [
      {
        icon: '⚡',
        title: 'Až 23+ AI agentů najednou',
        description:
          'EMDash spouští desítky AI kodérů současně. Každý agent dostane svůj úkol, pracuje samostatně a výsledky se vrátí k vám připravené k review. Místo čekání na jednoho agenta využijete celý tým.',
      },
      {
        icon: '🌿',
        title: 'Izolované git worktrees',
        description:
          'Každý agent pracuje v odděleném git worktree. Změny se nikdy nemíchají – každý úkol žije ve vlastní větvi, dokud ho nepřijmete. Žádné konflikty, žádný chaos v repozitáři.',
      },
      {
        icon: '🔄',
        title: 'Automatické přidělování úkolů',
        description:
          'EMDash vezme tickety z vašeho trackerového nástroje a automaticky je rozdá dostupným agentům. Vy určíte prioritu, agenti se postarají o zbytek.',
      },
    ],
  },
  {
    heading: 'Integrace s nástroji',
    features: [
      {
        icon: '📋',
        title: 'Linear',
        description:
          'Propojte EMDash s Linear a sledujte průběh úkolů přímo v Linear boardu. Agenti si vyzvedávají tickety, aktualizují stav a přidávají komentáře automaticky.',
      },
      {
        icon: '🐙',
        title: 'GitHub Issues',
        description:
          'Využívejte GitHub Issues jako zdroj úkolů. EMDash čte issues, přiřazuje je agentům a po dokončení vytvoří pull request k review.',
      },
      {
        icon: '🎯',
        title: 'Jira',
        description:
          'Stávající týmy s Jira nemusí měnit workflow. EMDash se připojí k vašemu Jira projektu a agenti začnou pracovat na vašich stávajících ticketech.',
      },
    ],
  },
  {
    heading: 'Flexibilita a přístupnost',
    features: [
      {
        icon: '🌐',
        title: 'Provider-agnostický',
        description:
          'EMDash není svázaný s žádným konkrétním AI poskytovatelem. Funguje s Claude Code, GitHub Copilot, Cursor, Qwen a dalšími. Máte svobodu volby – a tu si vždy udržíte.',
      },
      {
        icon: '🖥️',
        title: 'SSH a SFTP podpora',
        description:
          'Váš kód nemusí být na lokálním stroji. EMDash se připojí přes SSH nebo SFTP na vzdálené servery, takže agenti mohou pracovat na produkčních nebo stagingových prostředích.',
      },
      {
        icon: '🛠️',
        title: 'Open-source, MIT licence',
        description:
          'Celý zdrojový kód EMDash je veřejně dostupný na GitHubu pod MIT licencí. Přizpůsobte si ho pro svůj tým, přispějte zpět nebo jen prozkoumejte, jak funguje.',
      },
    ],
  },
  {
    heading: 'Vývojářské rozhraní',
    features: [
      {
        icon: '🖱️',
        title: 'Electron desktop aplikace',
        description:
          'EMDash je nativní desktopová aplikace postavená na Electronu a TypeScriptu. Běží přímo na vašem Macu nebo Linuxu – žádný cloud, žádné předplatné, vaše data zůstávají u vás.',
      },
      {
        icon: '📊',
        title: 'Přehled běžících agentů',
        description:
          'Sledujte v reálném čase, na čem každý agent pracuje. Zobrazení stavu, průběhu i výstupu každého agenta přímo v hlavním panelu EMDash.',
      },
      {
        icon: '✅',
        title: 'Code review workflow',
        description:
          'Agenti nevkládají kód přímo do hlavní větve. Každá změna prochází pull requestem, kde ji zkontrolujete vy nebo váš tým před mergem.',
      },
    ],
  },
]

export default function FunkePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Funkce EMDash
              </h1>
              <p className="mt-4 text-lg text-indigo-200">
                Vše, co potřebujete k tomu, aby AI agenti pracovali za vás –
                paralelně, izolovaně a s plnou kontrolou.
              </p>
            </div>
          </div>
        </section>

        {/* Feature groups */}
        {featureGroups.map((group, groupIdx) => (
          <section
            key={group.heading}
            className={groupIdx % 2 === 0 ? 'bg-white py-20' : 'bg-gray-50 py-20'}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-12 text-2xl font-bold text-gray-900">
                {group.heading}
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {group.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
                  >
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-indigo-600 py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-bold">Připraveni začít?</h2>
            <p className="mt-4 text-indigo-100">
              EMDash je zdarma, open-source a připravený k použití. Stačí ho
              nainstalovat z GitHubu.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://github.com/generalaction/emdash"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-3 font-semibold text-indigo-700 hover:bg-indigo-50"
              >
                Stáhnout na GitHubu
              </a>
              <a
                href="/zacit"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white hover:bg-white/20"
              >
                Průvodce instalací →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
