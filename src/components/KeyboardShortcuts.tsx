"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Shortcut {
  keys: string[];
  label: string;
}

const sections: { title: string; shortcuts: Shortcut[] }[] = [
  {
    title: "Navigation",
    shortcuts: [
      { keys: ["1", "–", "0"], label: "Open project 1 – 10" },
      { keys: ["←", "→"], label: "Cycle category filters" },
      { keys: ["/"], label: "Focus search (when added)" },
    ],
  },
  {
    title: "General",
    shortcuts: [
      { keys: ["?"], label: "Toggle this modal" },
      { keys: ["Esc"], label: "Close modal" },
    ],
  },
];

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal__title">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10" />
              </svg>
              Keyboard Shortcuts
            </h2>

            {sections.map((section) => (
              <div key={section.title} className="modal__section">
                <div className="modal__section-title">{section.title}</div>
                {section.shortcuts.map((shortcut) => (
                  <div key={shortcut.label} className="modal__row">
                    <span className="modal__label">{shortcut.label}</span>
                    <span className="modal__keys">
                      {shortcut.keys.map((key) => (
                        <kbd key={key} className="kbd">
                          {key}
                        </kbd>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            ))}

            <div className="modal__close-hint">
              Press <kbd className="kbd">Esc</kbd> or <kbd className="kbd">?</kbd> to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
