import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Blog – EMDash, AI agenti a agentic development | em-dash.cz',
  description:
    'Články, průvodce a postřehy o EMDash, AI kodérech a agentic developmentu pro českou vývojářskou komunitu.',
  openGraph: {
    title: 'Blog em-dash.cz – O EMDash a AI vývoji',
    description:
      'Čtěte o EMDash, paralelních AI agentech a budoucnosti softwarového vývoje.',
    url: 'https://em-dash.cz/blog',
  },
}

const posts = [
  {
    slug: 'emdash-0-4-47-automations-forge-novinky',
    title: 'EMDash v0.4.47 – Automations, Forge a další novinky',
    date: '6. dubna 2026',
    readTime: '5 min čtení',
    excerpt:
      'Největší novinka: Automations – plánované opakující se úkoly pro AI agenty. Nový poskytovatel Forge, resource monitor, opravy macOS a optimalizace pro velké repozitáře.',
    tags: ['EMDash', 'Automations', 'novinky'],
  },
  {
    slug: 'co-je-emdash-a-proc-ho-potrebujete',
    title: 'Co je EMDash a proč ho potřebujete',
    date: '4. dubna 2026',
    readTime: '6 min čtení',
    excerpt:
      'EMDash mění způsob, jakým vývojáři pracují s AI. Místo jednoho chatovacího asistenta spouštíte desítky kodérů najednou. Vysvětlujeme, jak to funguje a proč je to jiné, než jste čekali.',
    tags: ['EMDash', 'AI agenti', 'agentic development'],
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Blog
              </h1>
              <p className="mt-4 text-lg text-indigo-200">
                Články, průvodce a postřehy o EMDash a agentic developmentu pro
                českou vývojářskou komunitu.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <time>{post.date}</time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-indigo-600">
                        {post.title}
                      </h2>
                      <p className="mt-3 leading-7 text-gray-600">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 text-sm font-semibold text-indigo-600">
                        Číst článek →
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
