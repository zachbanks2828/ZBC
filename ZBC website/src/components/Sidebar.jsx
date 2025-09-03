import { Home, FolderKanban, Info, Mail, Instagram, Youtube } from 'lucide-react'

function FilledBolt({ size = 28, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Sidebar({ activeTab, onChange }) {
  const items = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'funding', label: 'Campaign', icon: FilledBolt },
    { key: 'projects', label: 'Projects', icon: FolderKanban },
    { key: 'about', label: 'About', icon: Info },
    { key: 'contact', label: 'Contact', icon: Mail },
  ]
  return (
    <aside className="sidebar">
      <div className="brand">
        <FilledBolt size={28} className="bolt" />
        <span className="brand-text">ZBC</span>
      </div>
      <nav className="nav">
        {items.map((item) => (
          <button
            key={item.key}
            className={`nav-item ${activeTab === item.key ? 'active' : ''}`}
            onClick={() => onChange(item.key)}
          >
            {item.icon ? <item.icon size={18} /> : <span className="dot" />}
            {item.label}
          </button>
        ))}
      </nav>
      <div className="socials">
        <a className="soc" href="https://youtube.com/@zbcracing" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
          <Youtube size={18} />
        </a>
        <a className="soc" href="https://instagram.com/zbcracing" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
          <Instagram size={18} />
        </a>
      </div>
    </aside>
  )
}

export default Sidebar


