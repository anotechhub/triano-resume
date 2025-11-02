"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function HeroDark() {
  return (
    <Section id="home" className="relative min-h-screen flex items-center bg-dark pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white/60 text-sm mb-2">Hello, i&apos;m</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Triano Nurhikmat
                <br />
                <span className="text-lime">(Anno)</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                AI & Data Engineer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-base max-w-xl leading-relaxed"
            >
              Building & shipping production-ready data/AI systems on GCP (Vertex AI, BigQuery) and AWS, with MLOps best practices. Specialized in GenAI (Gemini) and scalable data infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-lime text-dark hover:bg-lime/90 font-semibold rounded-full px-8"
              >
                <a href="mailto:trianonurhikmat03@gmail.com" className="inline-flex items-center gap-2">
                  Hire Me <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/10 text-white hover:bg-white/5 rounded-full px-8"
              >
                <a href="/Triano_Nurhikmat_CV.pdf" download className="inline-flex items-center gap-2">
                  Download Resume <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Decorative Circle Background */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-lime/20 to-teal/20 blur-3xl" />

            {/* Profile Circle */}
            <div className="relative">
              <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-dark-card to-dark-lighter overflow-hidden border-8 border-lime/30">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal/20 to-lime/20">
                  <span className="text-9xl text-lime">AN</span>
                </div>
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 -right-4 bg-dark-card border border-white/10 rounded-2xl p-6 shadow-xl"
              >
                <p className="text-4xl font-bold text-lime">6+</p>
                <p className="text-white/60 text-sm mt-1">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-1/3 -right-8 bg-dark-card border border-white/10 rounded-2xl p-6 shadow-xl"
              >
                <p className="text-4xl font-bold text-lime">20+</p>
                <p className="text-white/60 text-sm mt-1">Projects Complete</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12 -right-4 bg-dark-card border border-white/10 rounded-2xl p-6 shadow-xl"
              >
                <p className="text-4xl font-bold text-lime">98%</p>
                <p className="text-white/60 text-sm mt-1">Client Satisfaction</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-16 flex flex-wrap gap-6 items-center justify-center lg:justify-start"
        >
          <a
            href="https://wa.me/6281325063397"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-dark-card border border-white/10 hover:border-lime/50 transition-all"
          >
            <Phone className="w-4 h-4 text-lime" />
            <span className="text-sm text-white/70">+62 813-2506-3397</span>
          </a>
          <a
            href="mailto:trianonurhikmat03@gmail.com"
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-dark-card border border-white/10 hover:border-lime/50 transition-all"
          >
            <Mail className="w-4 h-4 text-lime" />
            <span className="text-sm text-white/70">trianonurhikmat03@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/trianonurhikmat/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-dark-card border border-white/10 hover:border-lime/50 transition-all"
          >
            <Linkedin className="w-4 h-4 text-lime" />
            <span className="text-sm text-white/70">LinkedIn</span>
          </a>
          <a
            href="https://github.com/trianonurhikmat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-dark-card border border-white/10 hover:border-lime/50 transition-all"
          >
            <Github className="w-4 h-4 text-lime" />
            <span className="text-sm text-white/70">GitHub</span>
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
