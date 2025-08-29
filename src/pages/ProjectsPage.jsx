import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function ProjectsPage() {
  return (
    <section style={{ padding: "56px 0" }}>
      <header className="page-header">
        <p className="page-eyebrow">EDUCATION • XR • CODE • PROTOTYPING</p>
        <h1 className="page-title">
         Projects
        </h1>
      </header>

      <div className="cards">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}