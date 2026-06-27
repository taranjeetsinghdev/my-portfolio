"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Renders each section's eyebrow as the opening tag of a JSX component,
 * e.g. <Experience> ... tying the page's structure back to the
 * subject's own craft.
 */
export function SectionHeading({ tag, title, description, align = "left", className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mb-10 flex flex-col gap-3 sm:mb-14",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="tag-eyebrow">
        <span className="text-secondary">{"<"}</span>
        {tag}
        <span className="text-secondary">{">"}</span>
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("max-w-2xl text-muted-foreground", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
