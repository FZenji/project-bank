"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, categories, type Category } from "@/data/projects";
import Background from "@/components/Background";
import ProjectCard from "@/components/ProjectCard";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const cycleCategoryBy = useCallback(
    (direction: number) => {
      const idx = categories.indexOf(activeCategory);
      const next = (idx + direction + categories.length) % categories.length;
      setActiveCategory(categories[next]);
    },
    [activeCategory]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case "?":
          e.preventDefault();
          setShortcutsOpen((prev) => !prev);
          break;
        case "Escape":
          e.preventDefault();
          setShortcutsOpen(false);
          break;
        case "ArrowLeft":
          e.preventDefault();
          cycleCategoryBy(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          cycleCategoryBy(1);
          break;
        default: {
          // Number keys 1-9, 0 (0 = project 10)
          const num = parseInt(e.key, 10);
          if (!isNaN(num)) {
            const projectIndex = num === 0 ? 9 : num - 1;
            const project = projects[projectIndex];
            if (project) {
              e.preventDefault();
              window.open(project.url, "_blank", "noopener,noreferrer");
            }
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cycleCategoryBy]);

  return (
    <>
      <Background />

      <main className="main">
        <div className="container">
          {/* Hero */}
          <header className="hero">
            <h1 className="hero__title">
              Project <span className="hero__accent">Bank</span>
            </h1>
            <p className="hero__subtitle">
              A curated collection of interactive simulations, tools, games, and educational experiences.
            </p>
            <p className="hero__shortcut-hint">
              Press <kbd className="kbd">?</kbd> for keyboard shortcuts
            </p>
          </header>

          {/* Category Filters */}
          <nav className="filters" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeCategory === cat ? " filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
                {cat !== "All" && (
                  <> ({projects.filter((p) => p.category === cat).length})</>
                )}
              </button>
            ))}
          </nav>

          {/* Project Grid */}
          <LayoutGroup>
            <div className="project-grid">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </AnimatePresence>
            </div>
          </LayoutGroup>

          {filtered.length === 0 && (
            <div className="empty-state">
              <div className="empty-state__icon">🔍</div>
              <p className="empty-state__text">No projects in this category.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            Built by{" "}
            <a
              href="https://github.com/henrytolenaar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Henry Tolenaar
            </a>
          </div>
        </footer>
      </main>

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcuts
        isOpen={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
      />
    </>
  );
}
