export default function AboutUs() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-4xl font-normal"
        style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
      >
        About Us
      </h1>
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
        style={{ color: 'hsl(240, 4%, 66%)' }}
      >
        A curious developer who believes the best way to learn is to build — then break, fix, and rebuild again.
        These projects started as simple experiments and turned into deep dives into pathfinding, DOM internals,
        and robotics simulation. Every line of code is a step toward mastery.
      </p>
    </main>
  )
}
