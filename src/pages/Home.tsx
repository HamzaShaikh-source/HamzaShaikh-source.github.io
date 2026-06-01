import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const projects = [
  {
    title: 'Newton Auto Game Solver',
    url: 'https://hamzashaikh-source.github.io/newton-auto-game-solver/',
    tag: 'Extension',
    desc: 'A browser extension that auto-solves Newton School block-coding games using BFS pathfinding, DOM parsing, and React fiber tree walking. Six unique games, terrain mapping, and conditional block generation.',
    tech: ['BFS', 'DOM', 'Blockly', 'React'],
  },
  {
    title: 'Robot Simulator Pro',
    url: 'https://hamzashaikh-source.github.io/robot-prep/',
    tag: 'Web App',
    desc: 'A browser-based robot simulation environment for practicing coding and algorithm design. Features A* pathfinding, 4 API modes, live CodeMirror editor, procedural map generation, and an auto-optimizer.',
    tech: ['A*', 'Canvas', 'CodeMirror', 'JS'],
  },
  {
    title: 'The Orchestrator',
    url: 'https://hamzashaikh-source.github.io/the-orchestrator/',
    tag: 'Blueprint',
    desc: 'A browser-native AI orchestration engine that coordinates multiple free AI websites into a multi-agent pipeline. No API keys, no servers, no costs. Full architecture blueprint and implementation plan.',
    tech: ['AI', 'Orchestration', 'Chrome Ext', 'Automation'],
  },
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state && (location.state as any).scrollToProjects) {
      setTimeout(() => {
        const el = document.getElementById('projects-section')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }
  }, [location.state])

  return (
    <>
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal"
          style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
        >
          Where <em className="not-italic" style={{ color: 'hsl(240, 4%, 66%)' }}>dreams</em> rise<br />
          <em className="not-italic" style={{ color: 'hsl(240, 4%, 66%)' }}>through the silence.</em>
        </h1>
        <p
          className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          style={{ color: 'hsl(240, 4%, 66%)' }}
        >
          We're designing tools for deep thinkers, bold creators, and quiet rebels.
          Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>
      </section>

      {/* Projects */}
      <section id="projects-section" className="px-6 pb-32 max-w-5xl mx-auto w-full" style={{ animation: 'slide-up 0.8s ease-out 0.6s both' }}>
        <h2
          className="text-4xl sm:text-5xl text-center mb-16 leading-[1.1] tracking-[-1.5px] font-normal"
          style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card liquid-glass rounded-2xl p-8 flex flex-col group cursor-pointer no-underline"
              style={{ animation: `slide-up 0.6s ease-out ${0.8 + i * 0.2}s both` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{
                    background: 'hsla(0, 0%, 100%, 0.06)',
                    color: 'hsl(240, 4%, 66%)',
                    border: '1px solid hsla(0, 0%, 100%, 0.08)',
                  }}
                >
                  {p.tag}
                </span>
                <span
                  className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: 'hsl(240, 4%, 66%)' }}
                >
                  ↗
                </span>
              </div>
              <h3
                className="text-2xl font-normal mb-3 transition-colors duration-300 group-hover:opacity-80"
                style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'hsl(240, 4%, 66%)' }}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: 'hsla(0, 0%, 100%, 0.04)',
                      color: 'hsl(240, 4%, 66%)',
                      border: '1px solid hsla(0, 0%, 100%, 0.06)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-32 max-w-3xl mx-auto w-full text-center" style={{ animation: 'slide-up 0.8s ease-out 1s both' }}>
        <h2
          className="text-4xl sm:text-5xl mb-8 leading-[1.1] tracking-[-1.5px] font-normal"
          style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
        >
          About
        </h2>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'hsl(240, 4%, 66%)' }}>
          A curious developer who believes the best way to learn is to build — then break, fix, and rebuild again.
          These projects started as simple experiments and turned into deep dives into pathfinding, DOM internals,
          and robotics simulation. Every line of code is a step toward mastery.
        </p>
      </section>
    </>
  )
}
