"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface SkillCardProps {
  name: string;
  image: string;
  index: number;
}

const skills = [
  { name: "Python", image: "/Python-logo.png" },
  { name: "GCP", image: "/gcp.png" },
  { name: "BigQuery", image: "/bigquery.svg" },
  { name: "Vertex AI", image: "/vertex ai.png" },
  { name: "SQL", image: "/sql.png" },
  { name: "AWS", image: "/aws.png" },
  { name: "TensorFlow", image: "/tensorflow.png" },
  { name: "Docker", image: "/docker.png" },
];

function SkillCard({ name, image, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative bg-dark-card border-2 border-white/10 rounded-3xl p-6 hover:border-lime hover:shadow-xl hover:shadow-lime/20 transition-all text-center cursor-pointer"
    >
      {/* Active State Indicator - Top corners */}
      <div className="absolute -top-1 -left-1 w-3 h-3 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Image */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center p-3 group-hover:bg-lime/10 group-hover:scale-110 transition-all">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            sizes="64px"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-white group-hover:text-lime transition-colors">
        {name}
      </h3>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-lime/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

export function SkillsDark() {
  return (
    <Section id="tech-stack" className="bg-dark-lighter">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <p className="text-white/60 text-sm mb-3">My Skills</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Explore Popular
              <br />
              <span className="text-lime">Skills & Experience</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Specialized in cutting-edge data and AI technologies with proven expertise
              in building production-grade systems. Continuously learning and adapting to
              emerging technologies in the ML/AI ecosystem.
            </p>

            <Button
              asChild
              className="bg-lime text-dark hover:bg-lime/90 font-semibold rounded-full px-8"
            >
              <a href="#contact">Learn More →</a>
            </Button>
          </motion.div>

          {/* Right Content - Skills Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
