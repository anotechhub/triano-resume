"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  tools: string[];
  index: number;
}

const projects = [
  {
    title: "Social Media Monitoring with AI",
    company: "Otoritas Jasa Keuangan",
    period: "Jan - Aug 2024",
    description: "Developed an AI-powered social media monitoring system to detect and analyze financial fraud patterns across multiple platforms, enabling proactive regulatory oversight and consumer protection.",
    tools: ["Vertex AI", "Gemini", "BigQuery", "Cloud Run", "Python"],
  },
  {
    title: "Customer Risk Scoring Management",
    company: "PT Pegadaian",
    period: "Sept - Jan 2024",
    description: "Built an automated ML-based customer risk scoring system using Gemini AI for loan evaluation and credit decision-making, improving risk assessment accuracy and processing speed.",
    tools: ["Vertex AI", "Gemini", "BigQuery", "Dataflow", "Python"],
  },
  {
    title: "Object Detection for Plant Disease",
    company: "PT Dharma Guna Wibawa",
    period: "Mar - Sep 2023",
    description: "Developed a computer vision solution using CNN models for early detection and classification of plant diseases, achieving 93% accuracy and deployed on Vertex AI for real-time inference.",
    tools: ["Vertex AI", "TensorFlow", "Cloud Storage", "Pub/Sub", "Python"],
  },
  {
    title: "Data Warehouse and Sales Dashboard",
    company: "KB Finansia Multi Finance",
    period: "Aug - Mar 2023",
    description: "Designed and implemented an enterprise data warehouse with comprehensive sales analytics dashboards, enabling data-driven decision-making across sales and finance departments.",
    tools: ["BigQuery", "Looker Studio", "Cloud Composer", "Python"],
  },
  {
    title: "Credit Model using Machine Learning",
    company: "Bank BTPNS",
    period: "April - Aug 2022",
    description: "Developed predictive ML models for credit risk assessment and loan approval automation, improving credit decision accuracy and reducing manual review time.",
    tools: ["Vertex AI", "BigQuery", "XGBoost", "Python", "Cloud Functions"],
  },
  {
    title: "Financial Data Warehouse & Dashboard Phase 2",
    company: "PT Star Capital",
    period: "Jan - April 2022",
    description: "Extended the financial data warehouse with advanced portfolio analytics, risk metrics, and executive dashboards for strategic decision support.",
    tools: ["BigQuery", "Looker Studio", "dbt", "Airflow", "Python"],
  },
  {
    title: "Financial Data Warehouse & Dashboard",
    company: "PT Star Capital",
    period: "May - Dec 2021",
    description: "Built enterprise-grade financial data warehouse infrastructure with integrated BI dashboards for portfolio management and financial reporting.",
    tools: ["BigQuery", "Looker Studio", "Cloud Composer", "Python"],
  },
  {
    title: "Enhancing Data Warehouse",
    company: "PT HM Sampoerna Tbk",
    period: "Jan - Apr 2021",
    description: "Optimized and enhanced existing data warehouse architecture, improving query performance and data quality for enterprise analytics and reporting.",
    tools: ["BigQuery", "dbt", "Airflow", "Python", "SQL"],
  },
];

function ProjectCard({
  title,
  company,
  period,
  description,
  tools,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ x: 8 }}
      className="group relative bg-dark-card border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-lime/30 transition-all"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-lime/0 group-hover:bg-lime transition-all rounded-l-2xl" />

      <div className="flex items-start gap-3 sm:gap-4">
        {/* Number badge */}
        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lime/10 flex items-center justify-center border border-lime/20 group-hover:bg-lime/20 transition-all">
          <span className="text-lime font-bold text-xs sm:text-sm">{String(index + 1).padStart(2, '0')}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-lime transition-colors">
                {title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-medium">{company}</p>
            </div>
            <span className="text-white/40 text-xs font-medium whitespace-nowrap mt-1">
              {period}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="border-white/10 text-white/70 text-xs hover:border-lime/50 hover:text-lime transition-all"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-5 h-5 text-lime/50" />
      </div>
    </motion.div>
  );
}

export function ProjectsDark() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Section id="projects" className="bg-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-white/60 text-sm mb-3">Latest Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Explore My Popular
            <br />
            <span className="text-lime">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 mb-1 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-lime/10 hover:bg-lime/20 text-lime border border-lime/30 rounded-full font-medium transition-all group"
            >
              {showAll ? "Show Less Projects" : "Explore All Projects"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
