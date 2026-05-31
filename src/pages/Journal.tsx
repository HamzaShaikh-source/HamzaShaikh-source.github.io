const entries = [
  {
    date: 'May 31, 2026',
    title: 'Why BFS beats DFS for block-coding games',
    excerpt: 'When mapping Newton School game terrains, breadth-first search guarantees the shortest path to the goal. Depth-first can wander into dead-end spirals. Here is how the terrain parser maps DOM elements to a traversable grid and why BFS was the right call.',
    tags: ['BFS', 'Pathfinding', 'Blockly'],
  },
  {
    date: 'May 28, 2026',
    title: 'The DOM as a game board',
    excerpt: 'The Newton Auto Game Solver treats the browser DOM as a game map. By walking React fiber trees and parsing Blockly XML, we reconstruct the game state without any official API. A look inside the DOM walking strategy and its edge cases.',
    tags: ['DOM', 'React', 'Web Extension'],
  },
  {
    date: 'May 20, 2026',
    title: 'Simulating robots, teaching algorithms',
    excerpt: 'The Robot Simulator Pro was designed to make A* and other pathfinding algorithms visible. Every step the robot takes is drawn on canvas, every decision logged. Here is how the simulation loop works and what we learned about teaching algorithms through visualization.',
    tags: ['A*', 'Canvas', 'Simulation'],
  },
  {
    date: 'April 15, 2026',
    title: 'Building in public',
    excerpt: 'Why we open-source everything. Sharing imperfect code invites better ideas. Every project here is a conversation starter — a way to learn from others who know more than we do.',
    tags: ['Open Source', 'Learning'],
  },
]

export default function Journal() {
  return (
    <main className="flex-1 px-6 py-32 max-w-3xl mx-auto w-full">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] font-normal text-center"
        style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
      >
        Journal
      </h1>
      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mx-auto mt-8 leading-relaxed text-center"
        style={{ color: 'hsl(240, 4%, 66%)' }}
      >
        Thoughts on building, breaking, and learning — one commit at a time.
      </p>

      <div className="mt-16 space-y-8">
        {entries.map((entry, i) => (
          <article
            key={i}
            className="liquid-glass rounded-2xl p-8 sm:p-10"
            style={{ animation: `slide-up 0.6s ease-out ${0.3 + i * 0.15}s both` }}
          >
            <time className="text-xs" style={{ color: 'hsl(240, 4%, 66%)' }}>{entry.date}</time>
            <h2
              className="text-xl sm:text-2xl mt-2 mb-4 font-normal leading-snug"
              style={{ fontFamily: "'Instrument Serif', serif", color: 'hsl(0, 0%, 100%)' }}
            >
              {entry.title}
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'hsl(240, 4%, 66%)' }}>
              {entry.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: 'hsla(0, 0%, 100%, 0.04)',
                    color: 'hsl(240, 4%, 66%)',
                    border: '1px solid hsla(0, 0%, 100%, 0.06)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
