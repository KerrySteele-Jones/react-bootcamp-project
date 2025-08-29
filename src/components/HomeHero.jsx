import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function HomeHero() {
  const featured = (projects || []).slice(0, 8);

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
            {featured.map((p, i) => (
              <li key={p.id} className="proj-item">
                <span className="proj-no">{String(i + 1).padStart(2, "0")}</span>
                <Link to="/projects" className="proj-link">{p.title}</Link>
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
