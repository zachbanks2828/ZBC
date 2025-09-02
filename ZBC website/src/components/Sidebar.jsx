import { Zap, Home, FolderKanban, Info, Mail, Twitter, Facebook, Instagram } from 'lucide-react'

function Sidebar({ activeTab, onChange }) {
  const items = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'projects', label: 'Projects', icon: FolderKanban },
    { key: 'about', label: 'About', icon: Info },
    { key: 'contact', label: 'Contact', icon: Mail },
  ]
  return (
    <aside className="sidebar">
      <div className="brand">
        <Zap size={18} className="bolt" />
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
        <a className="soc" href="https://x.com" target="_blank" rel="noreferrer noopener" aria-label="X">
          <Twitter size={18} />
        </a>
        <a className="soc" href="https://facebook.com" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
          <Facebook size={18} />
        </a>
        <a className="soc" href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
          <Instagram size={18} />
        </a>
      </div>
    </aside>
  )
}

export default Sidebar


