"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          tag="Experience"
          title="Where the metrics came from"
          description="Two roles, one continuous thread: ship the interface, then go back and make it faster."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-border sm:block"
          />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col gap-4 sm:flex-row sm:gap-8"
              >
                <div className="flex shrink-0 items-start gap-4 sm:w-44 sm:flex-col sm:gap-2">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div className="pt-1.5 sm:pt-0">
                    <p className="font-mono text-xs text-muted-foreground">
                      {job.start} &ndash; {job.end}
                    </p>
                    {job.current && (
                      <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[0.65rem] text-primary">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                        current
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 rounded-lg border border-border bg-card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                    <span className="text-sm text-muted-foreground">{job.location}</span>
                  </div>
                  <p className="font-mono text-sm text-secondary">{job.company}</p>

                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
