import { Github, Linkedin, Mail, Phone } from "lucide-react";

import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-tight">
            Taranjeet<span className="text-primary">.</span>dev
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {"built with Next.js, Tailwind CSS"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s+/g, "")}`}
            aria-label="Phone"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-[18px] w-[18px]" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      <div className="container border-t border-border py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
