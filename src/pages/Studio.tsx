export default function Studio() {
  return (
    <main className="flex-1 px-6 py-32 max-w-4xl mx-auto w-full">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal text-center"
        style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
      >
        The Studio
      </h1>
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mx-auto mt-8 leading-relaxed text-center"
        style={{ color: 'hsl(240, 4%, 66%)' }}
      >
        A digital atelier where code meets craft. Every project is forged with intention,
        blending modern tools with timeless principles of design and engineering.
      </p>

      <div className="mt-24 space-y-20">
        <section className="animate-fade-rise-delay-2" style={{ animation: 'slide-up 0.6s ease-out 0.4s both' }}>
          <h2 className="text-3xl sm:text-4xl font-normal mb-6" style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}>
            Philosophy
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'hsl(240, 4%, 66%)' }}>
            We believe in building tools that sharpen the mind. Not fleeting apps optimized for engagement,
            but environments that demand focus, reward patience, and cultivate skill. Every pixel, every
            interaction, every algorithm is chosen with deliberate care. The goal isn't simplicity — it's clarity.
          </p>
        </section>

        <section style={{ animation: 'slide-up 0.6s ease-out 0.5s both' }}>
          <h2 className="text-3xl sm:text-4xl font-normal mb-6" style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}>
            Tools & Craft
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'hsl(240, 4%, 66%)' }}>
            We work at the intersection of low-level systems thinking and modern web capabilities.
            From DOM traversal and BFS pathfinding to canvas-based simulation and real-time code
            analysis — the stack is chosen for depth, not trend.
          </p>
          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'React', 'Canvas API', 'Web Extensions', 'BFS/DFS', 'A*', 'Blockly', 'Tailwind CSS'].map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: 'hsla(0, 0%, 100%, 0.04)',
                  color: 'hsl(240, 4%, 66%)',
                  border: '1px solid hsla(0, 0%, 100%, 0.06)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section style={{ animation: 'slide-up 0.6s ease-out 0.6s both' }}>
          <h2 className="text-3xl sm:text-4xl font-normal mb-6" style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}>
            Current Focus
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'hsl(240, 4%, 66%)' }}>
            Deepening understanding of pathfinding algorithms through applied game solving,
            expanding the robot simulator into a full teaching platform, and exploring how
            constraint-based systems can make coding education more intuitive. Every project
            is open-source and built in public.
          </p>
        </section>
      </div>
    </main>
  )
}
