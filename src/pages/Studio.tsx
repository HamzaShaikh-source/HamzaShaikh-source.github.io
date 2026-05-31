export default function Studio() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-4xl font-normal"
        style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
      >
        The Studio
      </h1>
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
        style={{ color: 'hsl(240, 4%, 66%)' }}
      >
        A digital atelier where code meets craft. Every project is forged with intention,
        blending modern tools with timeless principles of design and engineering.
      </p>
    </main>
  )
}
