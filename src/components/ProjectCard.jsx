
import { Link } from "react-router-dom";


export default function ProjectCard({
  id,
  title,
  description,
  cover,
  demo,
  repo,
  tech = [],
}) {
  
  const target = demo || repo || `/projects#${id}`;
  const isExternal = Boolean(demo || repo);

  return (
    <article className="card">
      <figure className="card-media">
        <img src={cover} alt={`Cover for ${title}`} />
      </figure>

      <div className="card-body">
        {tech.length > 0 && (
          <p className="eyebrow">{tech.join(" • ")}</p>
        )}

        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        <div className="card-actions">
          {isExternal ? (
            <a
              href={target}
              target="_blank"
              rel="noreferrer"
              className="btn"
              aria-label={`Open ${title} in a new tab`}
            >
              See project
              <span aria-hidden="true" className="arrow">→</span>
            </a>
          ) : (
            <Link to={target} className="btn">
              See project <span aria-hidden="true" className="arrow">→</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
