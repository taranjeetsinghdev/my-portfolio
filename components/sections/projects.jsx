"use client";

import { motion } from "framer-motion";
import { Layers, ExternalLink  } from "lucide-react";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          tag="Projects"
          title="Things I've shipped"
          description="Production builds covering payments, real-time bidding, and multi-vendor booking."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <Card className="group relative flex h-full flex-col transition-colors hover:border-primary/40">
                <CardContent className="flex flex-1 flex-col p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <Layers className="h-5 w-5" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {project.role}
                  </p>
                  <h3 className="mt-1 flex items-center gap-1.5 font-display text-lg font-semibold">
                    {project.name}
                    {project.link && (
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    )}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                 {project.link && (
                   <a
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={`Visit ${project.name} — opens in a new tab`}
                   className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                 />
               )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
