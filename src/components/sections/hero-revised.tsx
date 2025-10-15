"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const contactInfo = [
  {
    icon: Phone,
    label: "+62 823-2518-2322",
    href: "https://wa.me/6282325182322",
  },
  {
    icon: Mail,
    label: "trianonurhikmat03@gmail.com",
    href: "mailto:trianonurhikmat03@gmail.com",
  },
];

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

const ThreadsIcon = () => (
  <img src="https://cdn.simpleicons.org/threads/9ca3af" alt="Threads Icon" className="w-5 h-5" />
);

const socialLinks = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "http://linkedin.com/in/trianonurhikmat/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/Triano123/",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/anotechhub/",
  },
  {
    icon: ThreadsIcon,
    label: "Threads",
    href: "https://www.threads.com/@anotechhub",
  },
];

export function HeroRevised() {
  return (
    <Section id="home" className="relative min-h-screen flex items-center bg-bg pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-text mb-4">
                Triano Nurhikmat
              </h1>
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl text-primary font-semibold mb-6"
            >
              AI & Data Engineer
            </motion.p>

            {/* Pitch */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted mb-8 leading-relaxed"
            >
              Building & shipping production-ready data/AI systems on GCP (Vertex AI, BigQuery) and AWS with MLOps best practices. Specialized in GenAI (Gemini) and scalable data infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#contact" className="inline-flex items-center gap-2">
                  Hire Me
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl">
                <a href="/Triano_Nurhikmat_CV.pdf" download className="inline-flex items-center gap-2">
                  Download Resume
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 bg-dark-card border border-white/10 rounded-2xl p-4 flex-1 min-w-[200px] max-w-[280px] hover:border-lime/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0">
                    {contact.icon && <contact.icon className="w-5 h-5 text-lime" />}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white/50 text-xs mb-1">
                      {contact.icon === Phone ? "Make A Call" : "Email Us"}
                    </p>
                    <p className="text-white text-sm font-medium hover:text-lime transition-colors truncate">
                      {contact.label}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface text-muted hover:bg-border hover:text-primary transition-all border border-border"
                >
                  <social.icon />
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Image
                src="/hero-image.png"
                alt="Triano Nurhikmat"
                width={500}
                height={500}
                className="relative z-10 rounded-full w-full h-full object-cover border-4 border-primary/30 scale-110"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
