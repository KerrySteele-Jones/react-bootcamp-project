
import { projects } from "../data/projects.js";

export default function ProjectsPage() {
  return (
    <section style={{ padding: "56px 0" }}>
       <h1 className="display-title">Projects</h1>
      <p className="muted">Eight weekly challenges + final project.</p>

      <ul className="list-reset" style={{ marginTop: 16 }}>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.tech.join(", ")}
          </li>
        ))}
      </ul>
    </section>
  );
}
