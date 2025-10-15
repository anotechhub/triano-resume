"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const contactInfo = [
  {
    icon: Phone,
    label: "+62 813-2506-3397",
    href: "https://wa.me/6281325063397",
  },
  {
    icon: Mail,
    label: "anno.tri@gmail.com",
    href: "mailto:anno.tri@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trianonurhikmat/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/trianonurhikmat",
  },
];

export function Hero() {
  return (
    <Section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-cream via-cream to-mint/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-navy mb-4">
              Triano Nurhikmat
              <span className="block text-3xl md:text-4xl text-teal mt-2">
                (Anno)
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-teal font-semibold"
          >
            AI & Data Engineer — MLOps | GenAI (Gemini) | GCP & AWS
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-navy/80 max-w-3xl mx-auto"
          >
            Build & ship data/AI systems on GCP (Vertex AI, BigQuery), with
            MLOps best practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg">
              <a href="mailto:anno.tri@gmail.com">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/Triano_Nurhikmat_CV.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/trianonurhikmat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-teal hover:bg-mint/20 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <contact.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
