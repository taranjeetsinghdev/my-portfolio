"use client";

import { motion } from "framer-motion";

import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section aria-label="Impact metrics" className="border-y border-border bg-muted/30">
      <div className="container grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col gap-1.5 px-6 py-8 text-center sm:text-left"
          >
            <span className="font-mono text-4xl font-semibold text-primary sm:text-5xl">
              {stat.value}
            </span>
            <span className="font-display text-sm font-medium">{stat.label}</span>
            <span className="text-xs text-muted-foreground">{stat.detail}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
