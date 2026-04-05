import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS Landing Page – Šablona | em-dash.cz',
  description:
    'Moderní SaaS landing page šablona s hero sekcí, funkcemi, ceníkem a CTA. Vytvořeno s EMDash.',
  openGraph: {
    title: 'SaaS Landing Page – Šablona em-dash.cz',
    description: 'Profesionální landing page pro SaaS startupy.',
    url: 'https://em-dash.cz/sablony/saas-landing',
  },
}

const features = [
  {
    icon: '🚀',
    title: 'Rychlý start',
    description:
      'Nasaďte svůj produkt během minut. Žádné složité konfigurace, žádné závislosti na externích službách.',
  },
  {
    icon: '🔐',
    title: 'Bezpečnost na prvním místě',
    description:
      'End-to-end šifrování, SSO, audit logy a GDPR compliance. Vaše data jsou v bezpečí.',
  },
  {
    icon: '📊',
    title: 'Analytika v reálném čase',
    description:
      'Sledujte metriky, konverze a uživatelské chování. Dashboardy, které skutečně používáte.',
  },
  {
    icon: '🔗',
    title: 'Integrace třetích stran',
    description:
      'Slack, Zapier, Webhooks, REST API. Propojte se s nástroji, které už váš tým používá.',
  },
  {
    icon: '🌍',
    title: 'Globální CDN',
    description:
      'Automatická distribuce na 200+ edge lokacích. Rychlost pro vaše uživatele po celém světě.',
  },
  {
    icon: '🛠️',
    title: 'API-first design',
    description:
      'Kompletní REST a GraphQL API. Dokumentace generovaná automaticky z kódu.',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Zdarma',
    period: '',
    description: 'Pro jednotlivce a malé projekty',
    features: [
      'Až 3 projekty',
      '1 000 API volání/měsíc',
      'Komunitní podpora',
      'Základní analytika',
    ],
    cta: 'Začít zdarma',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '€29',
    period: '/měsíc',
    description: 'Pro rostoucí týmy',
    features: [
      'Neomezené projekty',
      '100 000 API volání/měsíc',
      'Prioritní podpora',
      'Pokročilá analytika',
      'SSO a SAML',
      'Custom domény',
    ],
    cta: 'Vyzkoušet 14 dní zdarma',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Na míru',
    period: '',
    description: 'Pro velké organizace',
    features: [
      'Vše z Pro',
      'Neomezená API volání',
      'Dedikovaný account manager',
      'SLA 99.99%',
      'On-premise nasazení',
      'Audit a compliance reporting',
    ],
    cta: 'Kontaktovat obchod',
    highlighted: false,
  },
]

const testimonials = [
  {
    quote:
      'Přechod na tuto platformu nám ušetřil 40 hodin měsíčně. Integrace byla hladká a tým si ji oblíbil od prvního dne.',
    author: 'Jana Nováková',
    role: 'CTO, TechCorp s.r.o.',
  },
  {
    quote:
      'Konečně nástroj, který opravdu funguje tak, jak je inzerovaný. API dokumentace je skvělá a podpora reaguje do hodiny.',
    author: 'Martin Dvořák',
    role: 'Lead Developer, DataFlow',
  },
  {
    quote:
      'Nasadili jsme to za odpoledne. Za týden jsme měli první platící zákazníky. Takhle rychle jsme se ještě nikdy neposunuli.',
    author: 'Petra Svobodová',
    role: 'Founder, LaunchPad.cz',
  },
]

export default function SaasLandingTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Template notice */}
      <div className="bg-indigo-600 px-4 py-2 text-center text-sm text-white">
        Toto je šablona em-dash.cz ·{' '}
        <Link href="/sablony" className="underline hover:no-underline">
          Zpět na šablony
        </Link>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-xl font-bold text-gray-900">VášProdukt</span>
          <nav className="hidden items-center gap-8 md:flex">
            <span className="text-sm font-medium text-gray-600">Funkce</span>
            <span className="text-sm font-medium text-gray-600">Ceník</span>
            <span className="text-sm font-medium text-gray-600">
              Reference
            </span>
            <span className="text-sm font-medium text-gray-600">
              Dokumentace
            </span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600">
              Přihlásit
            </span>
            <span className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
              Vyzkoušet zdarma
            </span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-sm text-indigo-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Nově: AI-powered automatizace
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Budujte{' '}
                <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  rychleji
                </span>
                , škálujte bez limitů
              </h1>

              <p className="mt-6 text-lg leading-8 text-indigo-100 sm:text-xl">
                Platforma, která vašemu týmu pomůže doručovat produkty rychleji.
                Od prototypu po produkci bez zbytečných kroků.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <span className="cursor-pointer rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-900 shadow-lg transition-transform hover:scale-105">
                  Začít zdarma
                </span>
                <span className="cursor-pointer rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  Živá ukázka →
                </span>
              </div>

              <p className="mt-6 text-sm text-indigo-300">
                Bez kreditní karty · Setup za 2 minuty · Zrušit kdykoliv
              </p>
            </div>
          </div>
        </section>

        {/* Social proof bar */}
        <section className="border-b border-gray-100 bg-gray-50 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 text-center text-sm font-medium text-gray-400">
              Důvěřuje nám 500+ týmů z celé Evropy
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xl font-bold text-gray-300">
              <span>TechCorp</span>
              <span>DataFlow</span>
              <span>LaunchPad</span>
              <span>CloudBase</span>
              <span>DevStudio</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Vše, co potřebujete
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Jeden nástroj místo deseti. Funkce navržené pro moderní
                vývojářské týmy.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:shadow-md"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Jednoduchý ceník
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Žádné skryté poplatky. Zrušte kdykoliv.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-8 ${
                    plan.highlighted
                      ? 'scale-105 border-2 border-indigo-600 bg-white shadow-xl'
                      : 'border border-gray-200 bg-white'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                      Nejoblíbenější
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500">{plan.period}</span>
                    )}
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-0.5 text-indigo-600">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <span
                      className={`block w-full cursor-pointer rounded-xl px-4 py-3 text-center text-sm font-semibold ${
                        plan.highlighted
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold text-gray-900">
              Co říkají naši zákazníci
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-8"
                >
                  <p className="leading-7 text-gray-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">
                      {t.author}
                    </div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-600 to-violet-600 py-20 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-4xl font-bold">
              Připraveni to zkusit?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Začněte zdarma a zjistěte, jak vám platforma pomůže růst.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <span className="cursor-pointer rounded-xl bg-white px-8 py-3.5 font-semibold text-indigo-700 shadow-lg transition-transform hover:scale-105">
                Vytvořit účet zdarma
              </span>
              <span className="cursor-pointer rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm hover:bg-white/20">
                Naplánovat demo →
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Produkt</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>Funkce</li>
                <li>Ceník</li>
                <li>Integrace</li>
                <li>Changelog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Podpora</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>Dokumentace</li>
                <li>API Reference</li>
                <li>Status</li>
                <li>Kontakt</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Firma</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>O nás</li>
                <li>Blog</li>
                <li>Kariéra</li>
                <li>Press kit</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Právní</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-500">
                <li>Podmínky</li>
                <li>Ochrana soukromí</li>
                <li>Cookies</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-xs text-gray-400">
            © 2026 VášProdukt s.r.o. — Šablona em-dash.cz
          </div>
        </div>
      </footer>
    </div>
  )
}
