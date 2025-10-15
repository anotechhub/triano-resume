"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  description: string;
  index: number;
}

const experiences = [
  {
    period: "Jan 2022 – Present",
    title: "Manager, Data Analytics and BI",
    company: "PT. Datalabs",
    description: "As Data Analytics and Business Intelligence Manager, I lead a team of analysts, developing data-driven strategies to optimize business operations and inform decision-making. I oversee the development, implementation, and maintenance of data infrastructure and BI solutions, ensuring data quality, integrity, and accessibility across the organization. My focus is on leveraging data to unlock insights, improve processes, and drive strategic growth.",
  },
  {
    period: "Oct 2018 – Dec 2021",
    title: "Data Scientist",
    company: "PT. Datalabs",
    description: "Responsible for building a machine learning model that would have an immediate and massive impact on the business of the customer. Collaborated with other data scientists and data engineers to build an ecosystem of machine learning.",
  },
];

function ExperienceCard({ period, title, company, description, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative bg-dark-card border border-white/10 rounded-3xl p-8 hover:border-lime/30 transition-all"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0">
            <ArrowUpRight className="w-5 h-5 text-lime" />
          </div>
          <span className="text-white/40 text-sm font-medium">{period}</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime transition-colors">
        {title}
      </h3>
      <p className="text-white/60 text-base mb-4 font-medium">{company}</p>

      <p className="text-white/50 text-sm leading-relaxed">
        {description}
      </p>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lime/0 via-lime/50 to-lime/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export function ExperienceDark() {
  return (
    <Section id="experience" className="bg-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-white/60 text-sm mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-lime">Experience</span> &<br />
            Career Growth
          </h2>
        </motion.div>

        {/* Experience Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-6">
            Want to see more details about my experience?
          </p>
          <a
            href="/Triano_Nurhikmat_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-lime/10 hover:bg-lime/20 text-lime border border-lime/30 rounded-full font-medium transition-all"
          >
            Download Full CV
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
