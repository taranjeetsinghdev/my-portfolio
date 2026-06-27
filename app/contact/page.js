"use client";

import * as React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";

import { personal } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const contactLinks = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: personal.linkedinLabel, href: personal.linkedin },
];

export default function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sending, setSending] = React.useState(false);

  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Fill in every field before sending.");
      return;
    }

    if (!isConfigured) {
      // Graceful fallback when EmailJS env vars aren't set up yet —
      // opens the visitor's mail client with the message pre-filled.
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      toast.info("Opening your email client — EmailJS isn't configured yet.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: personal.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      toast.success("Message sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Couldn't send that. Try again or email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          tag="Contact"
          title="Let's build something"
          description="Open to React.js and Next.js front-end roles — reach out directly or drop a message."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                <Card className="transition-colors hover:border-primary/40">
                  <CardContent className="flex items-center gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <link.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-display text-sm font-semibold">{link.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the role or project…" required />
            </div>
            <Button type="submit" size="lg" disabled={sending} className="self-start">
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {sending ? "Sending…" : "Send message"}
            </Button>
            {!isConfigured && (
              <p className="font-mono text-xs text-muted-foreground">
                {"// EmailJS keys not set — falls back to your default mail app."}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
