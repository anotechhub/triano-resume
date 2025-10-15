"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProjectCard, ProjectCardProps } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";

const projects: (ProjectCardProps & { tags: string[] })[] = [
  {
    title: "Social Media Monitoring with AI",
    client: "OJK (Financial Services Authority)",
    period: "2023",
    description:
      "Built an AI-powered social media monitoring system using Gemini to detect financial fraud and violations.",
    impacts: [
      "Automated detection of fraudulent financial schemes across social platforms",
      "Reduced manual review time by 70% through AI classification",
      "Real-time alerting system for high-priority violations",
    ],
    technologies: ["Vertex AI", "Gemini", "Cloud SQL", "Cloud Run", "Python"],
    tags: ["GenAI", "GCP", "MLOps"],
  },
  {
    title: "Customer Risk Scoring System",
    client: "Pegadaian (National Pawn Shop)",
    period: "2023",
    description:
      "Developed ML-based customer risk scoring using Gemini for loan assessment and fraud detection.",
    impacts: [
      "Improved loan approval accuracy by 35%",
      "Reduced default rate by 20% through better risk assessment",
      "Automated credit decisioning with explainable AI",
    ],
    technologies: ["Vertex AI", "Gemini", "Dataflow", "BigQuery", "Python"],
    tags: ["ML", "GCP", "GenAI"],
  },
  {
    title: "Object Detection for Plant Disease",
    client: "Agricultural Research Institute",
    period: "2022",
    description:
      "Implemented computer vision model for early detection of plant diseases using CNN on Vertex AI.",
    impacts: [
      "93% accuracy in disease classification across 10+ plant species",
      "Early detection reduced crop loss by 40%",
      "Deployed real-time inference API for mobile applications",
    ],
    technologies: ["Cloud SQL", "Vertex AI", "Dataflow", "Pub/Sub", "TensorFlow"],
    tags: ["ML", "GCP", "CV"],
  },
  {
    title: "Data Warehouse & Sales Dashboard",
    client: "KB Finansia Multi Finance",
    period: "2022",
    description:
      "Architected enterprise data warehouse and built executive sales dashboards for financial insights.",
    impacts: [
      "Unified data from 15+ sources into single source of truth",
      "Enabled real-time sales performance monitoring",
      "Reduced reporting time from days to minutes",
    ],
    technologies: ["BigQuery", "Tableau", "Cloud Functions", "Python", "SQL"],
    tags: ["Data Engineering", "GCP", "BI"],
  },
  {
    title: "Credit Scoring Model",
    client: "Bank BTPN Syariah",
    period: "2021",
    description:
      "Developed production credit scoring model using AWS SageMaker with automated retraining pipeline.",
    impacts: [
      "Improved credit approval accuracy by 28%",
      "Automated monthly model retraining with MLOps best practices",
      "Reduced processing time from hours to seconds",
    ],
    technologies: ["AWS SageMaker", "Redshift", "Tableau", "Step Functions", "Python"],
    tags: ["ML", "AWS", "MLOps"],
  },
  {
    title: "Financial Data Warehouse & Dashboards",
    client: "Star Capital Asset Management",
    period: "2021",
    description:
      "Built comprehensive financial data warehouse with portfolio analytics and risk dashboards.",
    impacts: [
      "Integrated data from 20+ financial instruments and markets",
      "Automated daily portfolio valuation and risk reporting",
      "Enabled real-time compliance monitoring",
    ],
    technologies: ["BigQuery", "Looker Studio", "Google Sheets API", "Python"],
    tags: ["Data Engineering", "GCP", "BI"],
  },
  {
    title: "Data Warehouse Enhancement",
    client: "HM Sampoerna (Philip Morris International)",
    period: "2020",
    description:
      "Enhanced existing data warehouse with advanced ETL pipelines and automated monitoring.",
    impacts: [
      "Optimized ETL processes reducing runtime by 60%",
      "Implemented automated data quality checks",
      "Built alerting system for pipeline failures",
    ],
    technologies: ["Python", "AWS Lambda", "CloudWatch", "Redshift", "SQL"],
    tags: ["Data Engineering", "AWS"],
  },
];

export function Projects() {
  const [selectedTag, setSelectedTag] = React.useState<string>("All");

  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filteredProjects = selectedTag === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <Section id="projects" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal mb-8 text-center">
            Selected Projects
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                client={project.client}
                period={project.period}
                description={project.description}
                impacts={project.impacts}
                technologies={project.technologies}
                onViewDetails={() => {
                  // Modal can be implemented here
                  alert(`Case study for "${project.title}" - Coming soon!`);
                }}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
