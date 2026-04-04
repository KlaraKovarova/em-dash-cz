export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-sm text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            Open-source · MIT · YC W26
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Kóduj s{' '}
            <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              23+ AI agenty
            </span>{' '}
            najednou
          </h1>

          <p className="mt-6 text-lg leading-8 text-indigo-100 sm:text-xl">
            EMDash je Agentic Development Environment, který spouští desítky AI
            kodérů paralelně v izolovaných git větvích. Integruje se s Linear,
            GitHub a Jira. Funguje s Claude Code, Cursor, Copilot i Qwen.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/generalaction/emdash"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-900 shadow-lg transition-transform hover:scale-105"
            >
              Začít zdarma na GitHubu
            </a>
            <a
              href="#jak-to-funguje"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Jak to funguje?
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {[
              { value: '23+', label: 'AI agentů najednou' },
              { value: '100%', label: 'Open-source (MIT)' },
              { value: '∞', label: 'Poskytovatelů AI' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-indigo-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
