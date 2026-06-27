"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Sparkles } from "lucide-react";

import { personal, education, experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const facts = [
  {
    icon: Briefcase,
    label: "Currently",
    value: `${experience[0].role} @ ${experience[0].company}`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: personal.location,
  },
  {
    icon: Sparkles,
    label: "Focused on",
    value: "Performance & the Next.js App Router",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          tag="About"
          title="The short version"
          description="What I've spent 2.5 years getting good at, and where I'm pointed next."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {personal.summary}
            </p>

            <Card className="bg-muted/30">
              <CardContent className="flex items-start gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary/15 text-secondary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">{education.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {education.school}, {education.location}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {education.start} – {education.end} · {education.score}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {facts.map((fact) => (
              <Card key={fact.label} className="bg-muted/30">
                <CardContent className="flex items-center gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <fact.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="font-display text-sm font-semibold">{fact.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
