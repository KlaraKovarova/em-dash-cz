const features = [
  {
    icon: '⚡',
    title: 'Paralelní agenti',
    description:
      'Spusťte 23 nebo více AI kodérů současně. Každý pracuje v izolované git větvi, bez konfliktů.',
  },
  {
    icon: '🔒',
    title: 'Izolované worktrees',
    description:
      'Každý agent dostane vlastní git worktree. Změny jsou oddělené, čisté a připravené k review.',
  },
  {
    icon: '🔗',
    title: 'Integrace s nástroji',
    description:
      'Propojte EMDash s Linear, GitHub Issues nebo Jira. Tickety se automaticky přidělují agentům.',
  },
  {
    icon: '🌐',
    title: 'Provider-agnostický',
    description:
      'Claude Code, GitHub Copilot, Cursor, Qwen – EMDash funguje s jakýmkoliv AI kodérem.',
  },
  {
    icon: '🖥️',
    title: 'SSH/SFTP podpora',
    description:
      'Pracujte na vzdálených repozitářích přes SSH nebo SFTP. Agenti se připojí odkudkoliv.',
  },
  {
    icon: '🛠️',
    title: 'Open-source & MIT',
    description:
      'Plný přístup ke kódu. Upravte si EMDash pro svůj tým. Žádné vendor lock-in.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Proč EMDash?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Navrženo pro vývojáře, kteří chtějí vytěžit maximum z AI.
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
  )
}
