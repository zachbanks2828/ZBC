import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import './App.css'

// Sidebar component moved to components/Sidebar.jsx

function Header() {
  return (
    <header className="header">
      <div className="title-wrap">
        <h1 className="title">Zach Banks Calderin</h1>
        <p className="subtitle">Racer • Entrepreneur • CEO at StudyBoost</p>
      </div>
    </header>
  )
}

function Card({ title, children, action }) {
  return (
    <section className="card">
      <div className="card-head">
        <div className="chip" />
        <h3>{title}</h3>
        {action}
      </div>
      <div className="card-body">{children}</div>
    </section>
  )
}

function HomeTab() {
  return (
    <div className="content-grid single">
      <div className="grid-left">
        <Hero />
        <Card title="Driver Profile">
          <p>
            I lead teams and ventures with the same focus and precision found on
            the track. As CEO of StudyBoost, I build products, partnerships, and
            brand experiences that move fast and win.
          </p>
          <ul className="spec-list">
            <li>Leadership: Vision, Strategy, Team Building</li>
            <li>Business: Product, Partnerships, Growth</li>
            <li>Racing: NASCAR, Performance Mindset, Discipline</li>
          </ul>
        </Card>
        <Card title="Mission & Vision">
          <div className="mv">
            <div>
              <h4>Mission</h4>
              <p>
                Build products and opportunities that help people learn faster and
                go further, while championing the discipline and spirit of
                motorsport in business and life.
              </p>
            </div>
            <div>
              <h4>Vision</h4>
              <p>
                Create a world‑class ecosystem around StudyBoost and ZBC Racing
                where education, technology, and motorsport inspire the next
                generation of high‑performing leaders.
              </p>
            </div>
          </div>
        </Card>
        <Card title="Recent Highlights" action={<a className="link" href="#projects">View All →</a>}>
          <ul className="timeline">
            <li>
              <span className="badge">2025</span>
              Built a real‑time telemetry dashboard with live lap analytics
            </li>
            <li>
              <span className="badge">2024</span>
              Shipped a design system with dark‑mode and accessibility baked in
            </li>
            <li>
              <span className="badge">2023</span>
              Deployed a serverless API powering 100k+ monthly requests
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero card">
      <div className="hero-wrap">
        <img className="avatar" src="https://images.unsplash.com/photo-1601582585289-02b7165a1b9b?q=80&w=600&auto=format&fit=crop" alt="Zach profile" />
        <div className="hero-meta">
          <h2 className="hero-name">Zach Banks Calderin</h2>
          <p className="hero-role">Racer • Entrepreneur • CEO at StudyBoost</p>
          <div className="hero-tags">
            <span className="tech">Leadership</span>
            <span className="tech">Business Strategy</span>
            <span className="tech">Motorsport</span>
          </div>
          <div className="actions">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn secondary" href="https://www.studyboost.com" target="_blank" rel="noreferrer noopener">StudyBoost</a>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stat"><div className="num">10+ yrs</div><div className="lbl">Entrepreneurship</div></div>
        <div className="stat"><div className="num">50+</div><div className="lbl">Partnerships</div></div>
        <div className="stat"><div className="num">NASCAR</div><div className="lbl">Racing Focus</div></div>
      </div>
      <Carousel />
    </section>
  )
}

function Carousel() {
  const images = [
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532777276850-67dc6116f9b9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  ]
  const loop = [...images, ...images]
  return (
    <div className="carousel horizontal">
      <div className="strip auto">
        {loop.map((src, i) => (
          <img key={i} className="slide" src={src} alt="Racing highlight" />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ name, meta, desc, tech, href }) {
  return (
    <article className="project-card">
      <div className="project-media" aria-hidden>
        <div className="flag" />
      </div>
      <div className="project-info">
        {href ? (
          <h4>
            <a href={href} target="_blank" rel="noreferrer noopener">{name}</a>
          </h4>
        ) : (
          <h4>{name}</h4>
        )}
        <p className="meta">{meta}</p>
        <p className="desc">{desc}</p>
        <div className="techs">
          {tech.map((t) => (
            <span key={t} className="tech">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProjectsTab({ filter }) {
  const all = [
    { name: 'Pit Wall', meta: 'Telemetry Dashboard', desc: 'Live speed, RPM, and tire temp visualizations with WebSockets.', tech: ['React', 'Node', 'WebSocket'] },
    { name: 'AeroLab', meta: '3D Car Configurator', desc: 'Interactive NASCAR livery editor using WebGL shaders.', tech: ['Three.js', 'React'] },
    { name: 'RaceHub', meta: 'Results Aggregator', desc: 'Serverless scraping + API to unify standings across series.', tech: ['Node', 'Vercel', 'SQLite'] },
    { name: 'PaceNote', meta: 'Strategy Planner', desc: 'What‑if tire and fuel strategy simulator with charts.', tech: ['React', 'Chart.js'] },
    { name: 'StudyBoost', meta: 'EdTech Platform', desc: 'Explore institutions, courses, and tests. Platform powered by Azure, Spring Boot, and Java.', tech: ['Azure', 'Spring Boot', 'Java'], href: 'https://www.studyboost.com' },
    { name: 'ZBC Racing', meta: 'YouTube Channel', desc: 'Race highlights, behind‑the‑scenes, and entrepreneurship in motorsport.', tech: ['YouTube', 'Content'], href: 'https://www.youtube.com' },
  ]
  const items = (filter ? all.filter((p) => (p.name + p.meta + p.desc + p.tech.join(' ')).toLowerCase().includes(filter.toLowerCase())) : all)
  return (
    <div className="projects-grid" id="projects">
      {items.map((p) => (
        <ProjectCard key={p.name} {...p} />
      ))}
    </div>
  )
}

function AboutTab() {
  return (
    <div className="about">
      <Card title="About Zach">
        <p>
          I am a racer and entrepreneur who thrives on speed, clarity, and
          measurable results. As CEO of StudyBoost, I focus on building products
          students love, forging partnerships, and creating brand experiences that
          stand out—on and off the track.
        </p>
      </Card>
    </div>
  )
}

function ContactTab() {
  return (
    <div className="about">
      <Card title="Get in touch">
        <p>Email: zach@zbc.dev</p>
        <p>GitHub: github.com/zbc</p>
        <p>LinkedIn: linkedin.com/in/zachbankscalderin</p>
      </Card>
    </div>
  )
}

function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="app">
      <Sidebar activeTab={tab} onChange={setTab} />
      <div className="main">
        <div className="container">
          <Header />
          {tab === 'home' && <HomeTab />}
          {tab === 'projects' && <ProjectsTab />}
          {tab === 'about' && <AboutTab />}
          {tab === 'contact' && <ContactTab />}
          <div className="section-title">Gallery</div>
          <section className="gallery card">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="tile">
                <img src={`https://picsum.photos/seed/zbc${i}/600/400`} alt="Gallery" />
              </div>
            ))}
          </section>
          <div className="cta-strip">
            <div className="text">Want to collaborate on racing content or partnerships?</div>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
          <div className="footer">© {new Date().getFullYear()} Zach Banks Calderin. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default App
