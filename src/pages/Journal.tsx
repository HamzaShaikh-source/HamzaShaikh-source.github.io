export default function Journal() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-4xl font-normal"
        style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
      >
        Journal
      </h1>
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
        style={{ color: 'hsl(240, 4%, 66%)' }}
      >
        Thoughts on building, breaking, and learning — one commit at a time.
      </p>
      <div className="animate-fade-rise-delay-2 mt-16 text-left max-w-xl w-full space-y-8">
        <article className="liquid-glass rounded-2xl p-8" style={{ animation: 'slide-up 0.6s ease-out 0.4s both' }}>
          <time className="text-xs" style={{ color: 'hsl(240, 4%, 66%)' }}>May 2026</time>
          <h3 className="text-xl mt-2 mb-3 font-normal" style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}>
            First entry
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(240, 4%, 66%)' }}>
            Building for the sheer joy of it. This space will eventually hold notes on
            pathfinding algorithms, DOM internals, and robotics simulation.
          </p>
        </article>
      </div>
    </main>
  )
}
