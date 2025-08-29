
import { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import { TAGS } from "../data/tags.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectFilters from "../components/ProjectFilters.jsx";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState(() => new Set());

  const toggleTag = (tag) => {
    const next = new Set(selectedTags);
    next.has(tag) ? next.delete(tag) : next.add(tag);
    setSelectedTags(next);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedTags(new Set());
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return projects.filter((p) => {
      const tech = (p.tech || []).filter((t) => TAGS.includes(t));

      const text =
        (p.title || "").toLowerCase() +
        " " +
        (p.description || "").toLowerCase() +
        " " +
        tech.join(" ").toLowerCase();

      const matchesSearch = q === "" || text.includes(q);
      const matchesTags =
        selectedTags.size === 0 || tech.some((t) => selectedTags.has(t));

      return matchesSearch && matchesTags;
    });
  }, [search, selectedTags]);

  return (
    <section style={{ padding: "56px 0" }}>
      <header className="page-header">
        <p className="page-eyebrow">View my</p>
        <h1 className="page-title">
          Projects
        </h1>
      </header>

      <ProjectFilters
        search={search}
        onSearchChange={setSearch}
        tags={TAGS}                
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        onClear={clearFilters}
      />

      <p className="muted" style={{ margin: "8px 0 24px" }}>
        {filtered.length} result{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length > 0 ? (
        <div className="cards">
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              {...p}
              // pass only allowed chips to the card
              tech={(p.tech || []).filter((t) => TAGS.includes(t))}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p><strong>No projects match your filters.</strong></p>
          <button className="tag reset" onClick={clearFilters}>Clear filters</button>
        </div>
      )}
    </section>
  );
}
