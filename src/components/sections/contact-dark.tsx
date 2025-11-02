"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ContactDark() {
  return (
    <Section id="contact" className="bg-dark-lighter">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Caption */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/60 text-sm mb-3">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s <span className="text-lime">Connect</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Open to new opportunities and collaborations. I bring 6+ years of experience building production-ready AI/ML systems on GCP and AWS.
              </p>

              <p className="text-white/60 leading-relaxed">
                Whether you&apos;re looking for a technical leader, AI/ML consultant, or hands-on engineer—let&apos;s discuss how I can help drive your team&apos;s success.
              </p>
            </motion.div>

            {/* Right Content - Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Email */}
              <a
                href="mailto:trianonurhikmat03@gmail.com"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-dark-card border border-white/10 hover:border-lime/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-all flex-shrink-0">
                  <Mail className="w-6 h-6 text-lime" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-white/50 text-xs mb-1">Email</p>
                  <p className="text-white font-medium truncate">trianonurhikmat03@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/trianonurhikmat/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-dark-card border border-white/10 hover:border-lime/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-all flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-lime" />
                </div>
                <div className="text-left">
                  <p className="text-white/50 text-xs mb-1">LinkedIn</p>
                  <p className="text-white font-medium">trianonurhikmat</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/anotechhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-dark-card border border-white/10 hover:border-lime/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-all flex-shrink-0">
                  <Instagram className="w-6 h-6 text-lime" />
                </div>
                <div className="text-left">
                  <p className="text-white/50 text-xs mb-1">Instagram</p>
                  <p className="text-white font-medium">@anotechhub</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
