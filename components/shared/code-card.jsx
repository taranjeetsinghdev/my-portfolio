"use client";

import { motion } from "framer-motion";

const lines = [
  [
    { t: "kw", v: "function" },
    { t: "fn", v: " Developer" },
    { t: "pn", v: "() {" },
  ],
  [
    { t: "pn", v: "  " },
    { t: "kw", v: "const" },
    { t: "pn", v: " stack = [" },
    { t: "str", v: "'React.js'" },
    { t: "pn", v: ", " },
    { t: "str", v: "'Redux Toolkit'" },
    { t: "pn", v: ", " },
    { t: "str", v: "'Firebase'" },
    { t: "pn", v: "];" },
  ],
  [
    { t: "pn", v: "  " },
    { t: "kw", v: "const" },
    { t: "pn", v: " experience = " },
    { t: "str", v: "'2.5+ years'" },
    { t: "pn", v: ";" },
  ],
  [{ t: "pn", v: "" }],
  [
    { t: "pn", v: "  " },
    { t: "kw", v: "return" },
    { t: "pn", v: " (" },
  ],
  [
    { t: "pn", v: "    <" },
    { t: "tag", v: "Engineer" },
  ],
  [
    { t: "pn", v: "      " },
    { t: "attr", v: "name" },
    { t: "pn", v: "=" },
    { t: "str", v: '"Taranjeet Singh"' },
  ],
  [
    { t: "pn", v: "      " },
    { t: "attr", v: "focus" },
    { t: "pn", v: "=" },
    { t: "str", v: '"Performance-driven UI"' },
  ],
  [
    { t: "pn", v: "      " },
    { t: "attr", v: "stack" },
    { t: "pn", v: "={stack}" },
  ],
  [
    { t: "pn", v: "      " },
    { t: "attr", v: "experience" },
    { t: "pn", v: "={experience}" },
  ],
  [{ t: "pn", v: "    />" }],
  [{ t: "pn", v: "  );" }],
  [{ t: "pn", v: "}" }],
];

const tokenClass = {
  kw: "text-secondary",
  fn: "text-foreground font-semibold",
  pn: "text-muted-foreground",
  str: "text-primary",
  tag: "text-primary font-semibold",
  attr: "text-foreground",
};

export function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="glow-border w-full max-w-md rounded-xl border border-border bg-card/80 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">developer.jsx</span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 text-[13px] leading-relaxed">
        <code className="font-mono">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 select-none text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                {line.map((tok, j) => (
                  <span key={j} className={tokenClass[tok.t]}>
                    {tok.v}
                  </span>
                ))}
                {i === lines.length - 1 && (
                  <span className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] animate-blink bg-primary" />
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}
