export default function AboutUs() {
  return (
    <main className="flex-1 px-6 py-32 max-w-4xl mx-auto w-full">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal text-center"
        style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
      >
        About Us
      </h1>
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mx-auto mt-8 leading-relaxed text-center"
        style={{ color: 'hsl(240, 4%, 66%)' }}
      >
        A curious developer driven by the belief that the best way to learn is to build —
        then break, fix, and rebuild again.
      </p>

      <div className="mt-24 space-y-16">
        <section className="liquid-glass rounded-2xl p-8 sm:p-10" style={{ animation: 'slide-up 0.6s ease-out 0.4s both' }}>
          <h2 className="text-2xl font-normal mb-4" style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}>
            The Story
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(240, 4%, 66%)' }}>
            It started with a simple question: how do the tools we use actually work? That curiosity
            led down a rabbit hole of browser internals, rendering pipelines, and algorithm design.
            What began as small experiments — a pathfinder here, a game solver there — turned into
            a sustained practice of building genuine tools for learning and creation.
          </p>
          <p className="text-sm leading-relaxed mt-4" style={{ color: 'hsl(240, 4%, 66%)' }}>
            Every project in this portfolio was born from a need to understand something deeper.
            The Newton Auto Game Solver wasn't just about solving block-coding games — it was
            about understanding DOM trees, React fiber architecture, and how to teach a machine
            to navigate unfamiliar terrain. The Robot Simulator Pro grew from a desire to make
            algorithmic thinking tangible — to see A* search unfold in real time.
          </p>
        </section>

        <section className="liquid-glass rounded-2xl p-8 sm:p-10" style={{ animation: 'slide-up 0.6s ease-out 0.5s both' }}>
          <h2 className="text-2xl font-normal mb-4" style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}>
            Approach
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(240, 4%, 66%)' }}>
            Build first, ask questions later. Prototype early, iterate often. We believe in
            shipping real code, learning from failure, and sharing everything. No gatekeeping,
            no black boxes — just clear, thoughtful engineering that anyone can learn from.
          </p>
        </section>

        <section className="liquid-glass rounded-2xl p-8 sm:p-10" style={{ animation: 'slide-up 0.6s ease-out 0.6s both' }}>
          <h2 className="text-2xl font-normal mb-4" style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}>
            Beyond Code
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(240, 4%, 66%)' }}>
            When not building, you'll find us exploring algorithmic art, reading about
            systems design, or thinking about how to make complex ideas accessible.
            This space is a living document of that journey.
          </p>
        </section>
      </div>
    </main>
  )
}
