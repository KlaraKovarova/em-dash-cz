const agents = [
  {
    name: 'Claude Code',
    maker: 'Anthropic',
    color: 'bg-orange-50 border-orange-200',
    dot: 'bg-orange-400',
  },
  {
    name: 'GitHub Copilot',
    maker: 'Microsoft / GitHub',
    color: 'bg-gray-50 border-gray-200',
    dot: 'bg-gray-500',
  },
  {
    name: 'Cursor',
    maker: 'Anysphere',
    color: 'bg-violet-50 border-violet-200',
    dot: 'bg-violet-500',
  },
  {
    name: 'Qwen Coder',
    maker: 'Alibaba',
    color: 'bg-blue-50 border-blue-200',
    dot: 'bg-blue-500',
  },
  {
    name: 'Codex CLI',
    maker: 'OpenAI',
    color: 'bg-green-50 border-green-200',
    dot: 'bg-green-500',
  },
  {
    name: 'Gemini CLI',
    maker: 'Google',
    color: 'bg-yellow-50 border-yellow-200',
    dot: 'bg-yellow-500',
  },
]

export default function AgentsShowcaseSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Funguje s jakýmkoliv AI agentem
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            EMDash je provider-agnostický — spusťte mix agentů od různých
            výrobců na stejném projektu.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`flex flex-col items-center rounded-2xl border p-5 text-center ${agent.color}`}
            >
              <div
                className={`h-3 w-3 rounded-full ${agent.dot} mb-3 animate-pulse`}
              />
              <div className="text-sm font-semibold text-gray-900">
                {agent.name}
              </div>
              <div className="mt-1 text-xs text-gray-500">{agent.maker}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          + jakýkoliv jiný agent s CLI rozhraním
        </p>
      </div>
    </section>
  )
}
