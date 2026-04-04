export default function CTASection() {
  return (
    <section className="bg-indigo-600 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white">
          Připraveni zrychlit vývoj?
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          EMDash je zdarma, open-source a připraven k použití. Začněte dnes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/generalaction/emdash"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-8 py-3.5 font-semibold text-indigo-600 shadow-lg transition-transform hover:scale-105"
          >
            Stáhnout z GitHubu
          </a>
          <a
            href="/o-emdashu"
            className="rounded-xl border border-white/30 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Více o EMDashi
          </a>
        </div>
      </div>
    </section>
  )
}
