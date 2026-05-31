import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Studio from './pages/Studio'
import AboutUs from './pages/AboutUs'
import Journal from './pages/Journal'
import './index.css'

function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Studio', path: '/studio' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  const isActive = (path: string) => {
    const hash = location.hash.replace(/^#/, '') || '/'
    if (path === '/') return hash === '/'
    return hash.startsWith(path)
  }

  const handleBeginJourney = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToProjects: true } })
    } else {
      const el = document.getElementById('projects-section')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: 'hsl(201, 100%, 13%)' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      <div className="absolute inset-0 z-[1]" style={{ background: 'hsla(201, 100%, 13%, 0.55)' }} />

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 bg-transparent border-none cursor-pointer"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <span className="text-3xl tracking-tight text-foreground">R.E.V</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="nav-link text-sm bg-transparent border-none cursor-pointer"
                style={{ color: isActive(link.path) ? 'hsl(0, 0%, 100%)' : 'hsl(240, 4%, 66%)' }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={handleBeginJourney}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            style={{ color: 'hsl(0, 0%, 100%)' }}
          >
            My Journey
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>

        <footer className="px-8 py-8 text-center text-xs max-w-7xl mx-auto w-full" style={{ color: 'hsl(240, 4%, 50%)' }}>
          © {new Date().getFullYear()} — Built with curiosity
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return <Layout />
}
