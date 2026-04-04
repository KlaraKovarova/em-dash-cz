import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Co je EMDash a proč ho potřebujete | em-dash.cz',
  description:
    'EMDash mění způsob práce s AI kodéry. Místo jednoho asistenta spouštíte desítky agentů paralelně v izolovaných git větvích. Přečtěte si, proč je to revoluce ve vývoji softwaru.',
  openGraph: {
    title: 'Co je EMDash a proč ho potřebujete',
    description:
      'Paralelní AI kodéři, izolované worktrees a integrace s Linear, GitHub a Jira. EMDash je jiný, než si myslíte.',
    url: 'https://em-dash.cz/blog/co-je-emdash-a-proc-ho-potrebujete',
    type: 'article',
  },
}

export default function CoJeEmdashPost() {
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
              <span>EMDash</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Co je EMDash a proč ho potřebujete
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-indigo-300">
              <time>4. dubna 2026</time>
              <span>·</span>
              <span>6 min čtení</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="lead text-xl leading-8 text-gray-700">
                Pokud pracujete s AI kodérem, pravděpodobně znáte ten pocit:
                zadáte úkol, čekáte, dostanete výsledek, opravíte, zadáte
                další. Jeden agent, jeden úkol, sekvenčně. EMDash to mění
                od základu.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Problém: AI kodéři pracují pomalu, protože čekají na vás
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Typický workflow s AI asistentem vypadá takto: otevřete chat,
                zadáte požadavek, přečtete výstup, schválíte nebo opravíte,
                pak zadáte další úkol. Mezi každým krokem jste sami bottleneckem.
                AI model je připravený pracovat, ale čeká na váš input.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Pokud máte seznam 20 ticketů, zpracujete je sekvenčně –
                jeden za druhým. To trvá hodiny nebo dny, přestože samotná
                AI práce by zabrala minuty u každého.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Řešení: paralelní agenti v izolovaných větvích
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                EMDash přistupuje k problému jinak. Namísto jednoho asistenta,
                se kterým komunikujete, spouští <strong>desítky autonomních
                agentů paralelně</strong>. Každý agent dostane vlastní úkol
                a vlastní izolovaný git worktree – oddělená větev, kam nikdo
                jiný nezasahuje.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Výsledek? Váš seznam 20 ticketů se nezpracovává 20 hodin,
                ale 20 agentů ho zpracuje najednou za dobu přibližně
                nejdelšího jednoho úkolu. Vy mezitím děláte code review
                a schvalujete pull requesty.
              </p>

              <div className="my-8 rounded-2xl bg-indigo-50 p-6">
                <h3 className="font-bold text-indigo-900">
                  Jak to funguje v praxi
                </h3>
                <ol className="mt-3 space-y-2 text-indigo-800">
                  <li>
                    1. EMDash se propojí s vaším Linear, GitHub Issues nebo
                    Jira boardem
                  </li>
                  <li>
                    2. Tickety v stavu „Todo" se automaticky přidělí
                    dostupným agentům
                  </li>
                  <li>
                    3. Každý agent dostane vlastní git worktree a začne
                    pracovat autonomně
                  </li>
                  <li>
                    4. Po dokončení agent vytvoří pull request s výsledkem
                  </li>
                  <li>
                    5. Vy zkontrolujete PR, schválíte nebo vrátíte s komentářem
                  </li>
                </ol>
              </div>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Provider-agnostický přístup
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Jedna z klíčových vlastností EMDash je, že není svázaný
                s žádným konkrétním AI poskytovatelem. Funguje s Claude Code
                od Anthropicu, GitHub Copilotem, Cursorem, Qwenem a dalšími.
                Můžete dokonce mixovat různé poskytovatele pro různé úkoly –
                jeden agent na backendu, jiný na frontendu.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Tento přístup vás chrání před vendor lock-inem. Pokud se
                změní ceny nebo kvalita jednoho poskytovatele, přepnete
                na jiného bez nutnosti měnit workflow nebo konfiguraci projektu.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Open-source a MIT licence
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                EMDash je plně open-source pod MIT licencí. To znamená,
                že si ho můžete stáhnout, prozkoumat zdrojový kód, upravit
                pro potřeby svého týmu nebo přispět zpět do projektu.
                Žádné předplatné, žádné poplatky za běžící agenty.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Jediné náklady jsou API poplatky AI poskytovatele, které
                by vám vznikly tak jako tak – EMDash je jen vrstva,
                která orchestruje, jak agenti pracují.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                YC W26: startup, který mění vývoj softwaru
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                EMDash je součástí zimní třídy Y Combinator 2026. YC je
                akcelerátor, který stojí za Airbnb, Stripe nebo OpenAI –
                takže přítomnost EMDash v jejich portfoliu je silný signál,
                že jde o projekt s reálnou trakci a potenciálem.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Agentic development – tedy přístup, kdy autonomní AI agenti
                řídí celé vývojové cykly – je podle mnoha analytiků
                přelomový posun v tom, jak bude software vznikat
                v příštích letech.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-gray-900">
                Proč vyzkoušet EMDash právě teď?
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                EMDash je ještě relativně nový projekt, ale základní
                workflow – paralelní agenti, izolované worktrees, integrace
                s trackery – funguje spolehlivě. Vývojáři, kteří ho zkouší,
                hlásí výrazné zrychlení při zpracování backlogu a možnost
                soustředit se na skutečně kreativní a architektonické části práce.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                Pokud trávíte čas implementací rutinních úkolů místo
                přemýšlení o systému, EMDash stojí za vyzkoušení.
                Instalace zabere méně než 10 minut a je zdarma.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-100 pt-8">
              {['EMDash', 'AI agenti', 'agentic development', 'YC W26', 'open-source'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-indigo-600 p-8 text-white">
              <h3 className="text-xl font-bold">Připraveni vyzkoušet EMDash?</h3>
              <p className="mt-2 text-indigo-100">
                Stáhněte si EMDash z GitHubu a spusťte první agenty za méně
                než 10 minut.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/generalaction/emdash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-indigo-700 hover:bg-indigo-50"
                >
                  Stáhnout na GitHubu
                </a>
                <Link
                  href="/zacit"
                  className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-center font-semibold text-white hover:bg-white/20"
                >
                  Průvodce instalací →
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
