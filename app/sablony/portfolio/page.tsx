import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vývojářské portfolio – Šablona | em-dash.cz',
  description:
    'Minimalistická šablona portfolia pro vývojáře. Projekty, technologie, timeline a kontakt. Vytvořeno s EMDash.',
  openGraph: {
    title: 'Vývojářské portfolio – Šablona em-dash.cz',
    description: 'Čistý design pro vývojářské portfolio.',
    url: 'https://em-dash.cz/sablony/portfolio',
  },
}

const projects = [
  {
    title: 'TaskFlow',
    description:
      'Open-source nástroj pro správu úkolů s kanban boardem, time trackingem a integrací s GitHub Issues.',
    tags: ['TypeScript', 'React', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'DataPipe',
    description:
      'ETL pipeline framework pro real-time zpracování streamovaných dat. Podpora Kafka, Redis a S3.',
    tags: ['Go', 'Kafka', 'Docker'],
    link: '#',
  },
  {
    title: 'PixelSnap',
    description:
      'Desktopová aplikace pro porovnání designových mockupů s implementací. Pixel-perfect kontrola.',
    tags: ['Electron', 'Canvas API', 'Rust'],
    link: '#',
  },
  {
    title: 'CloudMetrics',
    description:
      'Monitorovací dashboard pro multi-cloud infrastrukturu. Alerting, anomaly detection, cost tracking.',
    tags: ['Python', 'Grafana', 'Terraform'],
    link: '#',
  },
]

const skills = [
  { category: 'Jazyky', items: ['TypeScript', 'Go', 'Python', 'Rust'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vue'] },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
]

const timeline = [
  {
    year: '2024–',
    role: 'Senior Software Engineer',
    company: 'TechCorp',
    description:
      'Architektura microservices platformy, mentoring juniorních vývojářů, vedení technických rozhodnutí.',
  },
  {
    year: '2021–2024',
    role: 'Full-stack Developer',
    company: 'StartupXYZ',
    description:
      'Vývoj MVP od nuly, implementace platebního systému, optimalizace výkonu pro 100k+ uživatelů.',
  },
  {
    year: '2019–2021',
    role: 'Junior Developer',
    company: 'WebAgency',
    description:
      'Tvorba webových aplikací pro klienty, práce s React a Node.js, první zkušenosti s CI/CD.',
  },
]

export default function PortfolioTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Template notice */}
      <div className="bg-emerald-600 px-4 py-2 text-center text-sm text-white">
        Toto je šablona em-dash.cz ·{' '}
        <Link href="/sablony" className="underline hover:no-underline">
          Zpět na šablony
        </Link>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-xl font-bold text-gray-900">JM</span>
          <nav className="hidden items-center gap-8 md:flex">
            <span className="text-sm font-medium text-gray-600">Projekty</span>
            <span className="text-sm font-medium text-gray-600">
              Dovednosti
            </span>
            <span className="text-sm font-medium text-gray-600">
              Zkušenosti
            </span>
            <span className="text-sm font-medium text-gray-600">Kontakt</span>
          </nav>
          <span className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
            Stáhnout CV
          </span>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-emerald-950 to-teal-900 py-28 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
              {/* Avatar placeholder */}
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-emerald-700/50 text-5xl font-bold text-emerald-200">
                JM
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-300">Ahoj, jsem</p>
                <h1 className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Jan Malý
                </h1>
                <p className="mt-4 text-lg leading-8 text-emerald-100">
                  Senior Software Engineer se zaměřením na full-stack vývoj,
                  systémový design a open-source. Stavím nástroje, které lidem
                  šetří čas.
                </p>
                <div className="mt-6 flex gap-4">
                  <span className="cursor-pointer rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 transition-transform hover:scale-105">
                    Kontaktovat
                  </span>
                  <span className="cursor-pointer rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
                    GitHub →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900">Projekty</h2>
            <p className="mt-2 text-gray-500">
              Výběr z open-source a komerčních projektů.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-2xl border border-gray-100 p-8 transition-shadow hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Technologie a dovednosti
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {group.category}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900">Zkušenosti</h2>
            <div className="mt-12 space-y-12">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="flex flex-col gap-4 border-l-2 border-emerald-200 pl-8 md:flex-row md:gap-8"
                >
                  <div className="w-28 shrink-0 text-sm font-semibold text-emerald-600">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.role}</h3>
                    <p className="text-sm text-gray-500">{item.company}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-600 py-20 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-4xl font-bold">Pojďme spolupracovat</h2>
            <p className="mt-4 text-lg text-emerald-100">
              Hledáte vývojáře pro svůj projekt? Ozvěte se a domluvíme se.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <span className="cursor-pointer rounded-xl bg-white px-8 py-3.5 font-semibold text-emerald-700 shadow-lg transition-transform hover:scale-105">
                Napsat e-mail
              </span>
              <span className="cursor-pointer rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white hover:bg-white/20">
                LinkedIn →
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center text-xs text-gray-400 sm:px-6">
          © 2026 Jan Malý — Šablona em-dash.cz
        </div>
      </footer>
    </div>
  )
}
