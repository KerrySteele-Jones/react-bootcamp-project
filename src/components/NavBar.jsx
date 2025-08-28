import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="container header-row">
        {/* Brand */}
        <Link to="/" aria-label="Home" className="brand brand-stack">
          <span className="brand-eyebrow">Portfolio</span>
          <span className="brand-title">KERRY STEELE-JONES</span>
         
        </Link>

        {/* Nav */}
        <nav aria-label="Primary" className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
