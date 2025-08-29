// src/components/HomeHero.jsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function HomeHero() {
  const featured = (projects || []).slice(0, 8);

  // Treat empty strings and "#" as "no link"
  const normalize = (v) => (v && v !== "#") ? v : null;

  return (
    <section className="home-split">
      {/* Left: image */}
      <div className="home-image">
        <img src="/images/me-illustration.png" alt="" aria-hidden="true" />
      </div>

      {/* Right: dark panel with intro + list */}
      <div className="home-panel">
        <div className="home-panel-content">
          <p className="eyebrow panel-eyebrow">I’m Kerry, a designer for learning</p>
          <h1 className="home-title">
            exploring immersive media<br />and creative tech.
          </h1>
          <p className="home-strap muted-on-panel">
            I design clear, human experiences that help people learn and create with new technology.
          </p>

          <h2 className="panel-heading">Selected Projects</h2>
          <ol className="proj-list">
            {featured.map((p, i) => {
              // precedence: demo -> link -> slug -> id -> /projects
              const href =
                normalize(p.demo) ||
                normalize(p.link) ||
                (p?.slug ? `/projects/${p.slug}` :
                 p?.id ? `/projects/${p.id}` : "/projects");

              const isExternal = /^https?:\/\//i.test(href);

              return (
                <li key={p.id || p.slug || i} className="proj-item">
                  <span className="proj-no">{String(i + 1).padStart(2, "0")}</span>

                  {isExternal ? (
                    <a
                      href={href}
                      className="proj-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.title}
                    </a>
                  ) : (
                    <Link to={href} className="proj-link">
                      {p.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="panel-actions">
            <Link to="/projects" className="underline-link">See all projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
