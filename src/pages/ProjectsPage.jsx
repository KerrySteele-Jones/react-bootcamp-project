import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function ProjectsPage() {
  return (
    <section style={{ padding: "56px 0" }}>
      <h1 className="display-title">Projects</h1>
      <p className="muted" style={{ marginBottom: 24 }}>
        Eight weekly challenges + the final project.
      </p>

      <div className="cards">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}