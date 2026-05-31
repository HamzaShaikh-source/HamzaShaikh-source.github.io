export default function ReachUs() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-4xl font-normal"
        style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
      >
        Reach Us
      </h1>
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
        style={{ color: 'hsl(240, 4%, 66%)' }}
      >
        Have a question, idea, or just want to say hello? Drop us a message.
      </p>
      <div className="animate-fade-rise-delay-2 mt-16 w-full max-w-lg">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="liquid-glass rounded-xl px-5 py-4 text-sm outline-none w-full"
            style={{ color: 'hsl(0, 0%, 100%)' }}
          />
          <input
            type="email"
            placeholder="Email"
            className="liquid-glass rounded-xl px-5 py-4 text-sm outline-none w-full"
            style={{ color: 'hsl(0, 0%, 100%)' }}
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="liquid-glass rounded-xl px-5 py-4 text-sm outline-none w-full resize-none"
            style={{ color: 'hsl(0, 0%, 100%)' }}
          />
          <button
            type="submit"
            className="liquid-glass rounded-full px-14 py-4 text-base cursor-pointer transition-transform duration-300 hover:scale-[1.03] self-center"
            style={{ color: 'hsl(0, 0%, 100%)' }}
            onClick={(e) => e.preventDefault()}
          >
            Send
          </button>
        </form>
      </div>
    </main>
  )
}
