"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-navy/80 space-y-4">
            <p>
              Data analytics manager with 6+ years of experience specializing in
              <strong className="text-teal"> big data engineering, machine learning operations (MLOps)</strong>,
              and <strong className="text-teal">Generative AI</strong> solutions. Proven track record of
              architecting and deploying scalable AI systems on <strong className="text-teal">GCP (Vertex AI, BigQuery)</strong> and
              <strong className="text-teal"> AWS (SageMaker, Redshift)</strong>.
            </p>
            <p>
              Expert in building end-to-end data pipelines, implementing <strong className="text-teal">MLOps best practices</strong>,
              and developing production-ready AI applications using <strong className="text-teal">Gemini on Vertex AI</strong>.
              Successfully led data teams in delivering high-impact solutions for financial services, government agencies,
              and enterprise clients.
            </p>
            <p>
              Passionate about leveraging cutting-edge technologies to solve complex business problems,
              optimize data infrastructure, and drive data-driven decision-making across organizations.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
