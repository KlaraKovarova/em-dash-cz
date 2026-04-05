import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Šablony – Hotové stránky pro váš projekt | em-dash.cz',
  description:
    'Tři profesionální šablony vytvořené s EMDash AI agenty. SaaS landing page, vývojářské portfolio a dokumentace – vše open-source.',
  openGraph: {
    title: 'Šablony em-dash.cz – Hotové stránky pro váš projekt',
    description:
      'Profesionální šablony vytvořené AI agenty. Stáhněte si je zdarma.',
    url: 'https://em-dash.cz/sablony',
  },
}

const templates = [
  {
    slug: 'saas-landing',
    title: 'SaaS Landing Page',
    description:
      'Moderní landing page pro SaaS produkt. Hero s gradientem, sekce s funkcemi, ceník, sociální důkazy a CTA. Ideální pro startupy a nové produkty.',
    tags: ['Landing page', 'SaaS', 'Startup'],
    color: 'from-indigo-600 to-violet-600',
  },
  {
    slug: 'portfolio',
    title: 'Vývojářské portfolio',
    description:
      'Čistý, minimalistický design pro vývojáře. Sekce s projekty, technologiemi, kariérním timeline a kontaktním formulářem.',
    tags: ['Portfolio', 'Personal', 'Developer'],
    color: 'from-emerald-600 to-teal-600',
  },
  {
    slug: 'dokumentace',
    title: 'Dokumentace',
    description:
      'Strukturovaná šablona pro technickou dokumentaci. Postranní navigace, kódové bloky, sekce API reference a průvodce instalací.',
    tags: ['Docs', 'API', 'Guide'],
    color: 'from-amber-600 to-orange-600',
  },
]

export default function SablonyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-sm text-indigo-300">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />3
                šablony zdarma
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Šablony
              </h1>
              <p className="mt-4 text-lg text-indigo-200">
                Profesionální šablony stránek vytvořené s pomocí EMDash AI
                agentů. Open-source, připravené k nasazení.
              </p>
            </div>
          </div>
        </section>

        {/* Template cards */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {templates.map((template) => (
                <Link
                  key={template.slug}
                  href={`/sablony/${template.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-2xl border border-gray-100 transition-shadow hover:shadow-lg">
                    {/* Color preview bar */}
                    <div
                      className={`h-40 bg-gradient-to-br ${template.color} flex items-center justify-center`}
                    >
                      <span className="text-lg font-bold text-white/80">
                        {template.title}
                      </span>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">
                        {template.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {template.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {template.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 text-sm font-semibold text-indigo-600">
                        Zobrazit šablonu →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Vytvořeno s EMDash
            </h2>
            <p className="mt-4 text-gray-500">
              Všechny šablony byly vytvořené paralelně pomocí AI agentů v
              EMDash. Chcete vytvořit vlastní?
            </p>
            <a
              href="https://github.com/generalaction/emdash"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              Začít s EMDash
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
