"use client";

import { motion } from "framer-motion";
import { Code, GitBranch, Gauge, MonitorSmartphone } from "lucide-react";

import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const icons = [Code, GitBranch, Gauge, MonitorSmartphone];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          tag="Skills"
          title="The toolbox"
          description="Grouped the way I reach for it: build, ship, verify, run."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/15 text-secondary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-semibold">{group.label}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
