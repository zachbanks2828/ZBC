import { useState, useEffect } from 'react'
import studyboostImg from './assets/IMG_5670 (2).png'
import zbcracingImg from './assets/ZBC Racing Logos.png'
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
        <Card title="2026 NASCAR Euro Series Campaign">
          <div className="progress">
            <div className="progress-bar" style={{ width: '52%' }} aria-valuenow={52} aria-valuemin={0} aria-valuemax={100} role="progressbar">
              <span className="progress-label">52% funded</span>
            </div>
          </div>
          <div className="small-link-wrap">
            <a className="small-link" href="#funding">See how you can help →</a>
          </div>
        </Card>
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

function ProjectCard({ name, meta, desc, tech, href, image }) {
  const Content = (
    <>
      <div className="project-media" aria-hidden>
        {image ? (
          <img src={image} alt={`${name} media`} />
        ) : (
          <div className="flag" />
        )}
      </div>
      <div className="project-info">
        <h4>{name}</h4>
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
    </>
  )

  if (href) {
    return (
      <a className="project-card" href={href} target="_blank" rel="noreferrer noopener">
        {Content}
      </a>
    )
  }

  return (
    <article className="project-card">
      {Content}
    </article>
  )
}

function StatsGrid({ stats, className }) {
  return (
    <div className={"stats-grid pretty" + (className ? ` ${className}` : '')}>
      {stats.map((s) => (
        <div key={s.label} className={"stat-card pretty" + (s.color ? ` ${s.color}` : '')}>
          <div className="num">{s.value}</div>
          <div className="lbl">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function ProjectsTab({ filter }) {
  const all = [
    { name: 'StudyBoost', meta: 'EdTech Platform', desc: 'Explore institutions, courses, and tests. Platform powered by Azure, Spring Boot, and Java.', tech: ['Azure', 'Spring Boot', 'Java'], href: 'https://www.studyboost.com', image: studyboostImg },
    { name: 'ZBC Racing', meta: 'YouTube Channel', desc: 'Race highlights, behind‑the‑scenes, and entrepreneurship in motorsport.', tech: ['YouTube', 'Content'], href: 'https://youtube.com/@zbcracing', image: zbcracingImg },
  ]
  const items = (filter ? all.filter((p) => (p.name + p.meta + p.desc + p.tech.join(' ')).toLowerCase().includes(filter.toLowerCase())) : all)
  return (
    <div className="projects-grid two" id="projects">
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
      <div className="about-stats-row">
        <Card title="Career Statistics">
          <StatsGrid
            className="two"
            stats={[
              { label: 'Wins', value: 90, color: 'purple' },
              { label: 'Championships', value: 7, color: 'gold' },
            ]}
          />
        </Card>
        <Card title="Sim Racing Statistics">
          <StatsGrid
            className="two"
            stats={[
              { label: 'Online Wins', value: '1000+', color: 'cyan' },
              { label: 'Win Ratio', value: '43%', color: 'rose' },
            ]}
          />
        </Card>
        <Card title="Audience Reach">
          <div className="stats-grid pretty one audience-stat">
            <div className="stat-card pretty cyan compact"><div className="num">1m+</div><div className="lbl">Total Views Across Social</div></div>
          </div>
        </Card>
      </div>
      <Card title="Notable Events">
        <ul className="timeline">
          <li>
            <span className="badge">2018–2021</span>
            Streak of 39 wins in 40 races over a three‑year span
          </li>
          <li>
            <span className="badge">Homestead</span>
            Won 7 consecutive karting races at Homestead‑Miami Speedway
          </li>
        </ul>
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

function FundingTab() {
  return (
    <div className="about">
      <Card title="2026 NASCAR Euro Series Campaign">
        <p>
          This campaign is dedicated to funding a full championship season in the 2026 NASCAR Euro Series. Your support fuels
          testing, race entries, tires, fuel, travel, and the engineering resources required to run at the front.
        </p>
        <p>
          Explore partnership tiers, one-time contributions, and in-kind support opportunities. Every contribution directly advances
          the program and will be acknowledged with behind‑the‑scenes access and deliverables.
        </p>
        <div className="actions" style={{ marginTop: '14px' }}>
          <a className="btn" href="mailto:zach@zbc.dev?subject=2026%20NASCAR%20Euro%20Series%20Support">Email to Support</a>
          <a className="btn secondary" href="#home">Back to Home</a>
        </div>
      </Card>
      <Card title="Corporate Sponsorships">
        <div className="tiers-grid">
          <div className="tier">
            <div className="price">Primary • $30,000</div>
            <h4>Lead Partner Placement</h4>
            <ul>
              <li>Hood primary logo and center racesuit placement</li>
              <li>First‑priority on car livery, hauler, and team apparel</li>
              <li>First‑position in all marketing, PR, and social content</li>
              <li>Two VIP race weekend hospitality passes (4 marquee events)</li>
              <li>Custom content series and product integration</li>
              <li>Quarterly performance and brand impact reports</li>
            </ul>
          </div>
          <div className="tier">
            <div className="price">Secondary • $10,000</div>
            <h4>High‑Visibility Supporter</h4>
            <ul>
              <li>Quarter‑panel and upper chest racesuit logos</li>
              <li>Shared placement on car livery and team apparel</li>
              <li>Inclusion in press releases and monthly social features</li>
              <li>Two VIP hospitality passes (2 events of your choice)</li>
              <li>Co‑branded giveaway or activation opportunity</li>
            </ul>
          </div>
          <div className="tier">
            <div className="price">Associate • $5,000</div>
            <h4>Program Partner</h4>
            <ul>
              <li>Contingency logo placement on car and racesuit</li>
              <li>Thank‑you mentions across social and post‑race recaps</li>
              <li>One VIP hospitality pass (1 selected event)</li>
              <li>Team meet‑and‑greet plus photo assets for internal use</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: '10px' }}>
          Looking for a custom package, B2B integration, or multi‑race program? Let’s tailor a plan.
        </p>
      </Card>
    </div>
  )
}

function App() {
  const initialTab = typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : 'home'
  const [tab, setTab] = useState(initialTab)

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash.replace('#', '') || 'home'
      setTab(next)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const current = window.location.hash.replace('#', '')
    if (tab !== current) {
      window.location.hash = `#${tab}`
    }
  }, [tab])

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
          {tab === 'funding' && <FundingTab />}
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
