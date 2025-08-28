import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid" role="contentinfo">
        {/* Left: big CTA */}
        <div className="footer-cta">
          <p className="eyebrow">Looking to collaborate?</p>
          <h2 className="lets">LET’S TALK</h2>

          <div className="footer-cta-actions">
            {/* update these to your real links */}
            <a href="mailto:hello@yourdomain.com" className="underline-link">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/your-handle"
              target="_blank"
              rel="noreferrer"
              className="underline-link"
            >
              LinkedIn
            </a>
            <Link to="/contact" className="underline-link">Contact</Link>
          </div>
        </div>

        {/* Right: compact nav + copyright */}
        <nav className="footer-links" aria-label="Footer">
          <ul className="list-reset">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <small className="muted copyright">
            © {new Date().getFullYear()} Kerry Steele-Jones
          </small>
        </nav>
      </div>
    </footer>
  );
}
