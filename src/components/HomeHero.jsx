import { Link } from "react-router-dom";
import { projects } from "../data/projects"; // we'll use the first 5; OK if this file has only a couple for now

export default function HomeHero() {
  // Take 5 items for the list (fallback if fewer)
  const featured = projects.slice(0, 5);

  return (
    <section className="home-split">
      {/* Left: image / visual */}
      <div className="home-image">
        <img src="/images/placeholder-hero.png" alt="" aria-hidden="true" />
      </div>

      {/* Right: dark panel with text + list */}
      <div className="home-panel">
        <div className="home-panel-content">
          {/* Intro */}
          <p className="eyebrow panel-eyebrow">I’m Kerry, a digital designer</p>
          <h1 className="home-title">
            exploring immersive media<br />and creative tech.
          </h1>
          <p className="home-strap muted-on-panel">
            I design interactive experiences that connect people with stories and technology.
          </p>

          {/* Projects list */}
          <h2 className="panel-heading">Selected Projects</h2>

          <ol className="proj-list">
            {featured.map((p, i) => (
              <li key={p.id} className="proj-item">
                <span className="proj-no">{String(i + 1).padStart(2, "0")}</span>
                {/* Link to Projects for now; later I can deep-link by id */}
                <Link to="/projects" className="proj-link">
                  {p.title}
                </Link>
              </li>
            ))}
          </ol>

          <div className="panel-actions">
            <Link to="/projects" className="underline-link">See all projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
