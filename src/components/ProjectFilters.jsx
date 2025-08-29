export default function ProjectFilters({
  tags,
  selectedTags,
  onToggleTag,
  onClear,
}) {
  return (
    <div className="filters">
      {/* Tags only */}
      <div className="tags" role="group" aria-label="Filter by technology">
        {tags.map((tag) => {
          const active = selectedTags.has(tag);
          return (
            <button
              key={tag}
              type="button"
              className={`tag pill ${active ? "is-active" : ""}`}
              onClick={() => onToggleTag(tag)}
              aria-pressed={active}
            >
              <span aria-hidden="true" className="dot" />
              <span>{tag}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="tag reset"
        onClick={onClear}
        disabled={selectedTags.size === 0}
      >
        Clear filters
      </button>
    </div>
  );
}
