"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const services = [
  "MLOps & AI Platform Engineering",
  "Data Engineering & ETL Pipelines",
  "GenAI Solutions (Gemini on Vertex AI)",
  "Cloud Architecture (GCP & AWS)",
];

export function AboutDark() {
  return (
    <Section id="about" className="bg-dark-lighter">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-white/60 text-sm mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional{" "}
              <span className="text-lime">Problem Solutions</span>
              <br />
              For Data & AI Products
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-white/60 leading-relaxed mb-6">
              Data analytics manager with 6+ years of experience specializing in
              big data engineering, machine learning operations (MLOps), and
              Generative AI solutions. Proven track record of architecting and
              deploying scalable AI systems on GCP (Vertex AI, BigQuery) and AWS
              (SageMaker, Redshift).
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              Expert in building end-to-end data pipelines, implementing MLOps best
              practices, and developing production-ready AI applications. Successfully
              led data teams in delivering high-impact solutions for financial services,
              government agencies, and enterprise clients.
            </p>

            {/* Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-lime mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{service}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-sm mx-auto"
          >
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal/20 rounded-full blur-2xl" />

              {/* Image */}
              <div className="relative bg-dark-card rounded-3xl overflow-hidden border border-white/10">
                <div className="w-full">
                  <Image
                    src="/about-image.png"
                    alt="About Triano Nurhikmat"
                    width={400}
                    height={533}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </Container>
    </Section>
  );
}
