const steps = [
  {
    step: '01',
    title: 'Nainstalujte EMDash',
    description:
      'Stáhněte Electron aplikaci z GitHubu. Běží na macOS, Windows i Linuxu.',
  },
  {
    step: '02',
    title: 'Připojte repozitář',
    description:
      'Přidejte GitHub repo nebo se připojte přes SSH na vzdálený server.',
  },
  {
    step: '03',
    title: 'Propojte ticket systém',
    description:
      'Nastavte integraci s Linear, GitHub Issues nebo Jira pro automatické přidělování úkolů.',
  },
  {
    step: '04',
    title: 'Spusťte agenty',
    description:
      'EMDash vytvoří izolované worktrees a spustí AI agenty paralelně na vašich ticketech.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="jak-to-funguje" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Jak to funguje?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Od instalace po paralelní vývoj za pár minut.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
