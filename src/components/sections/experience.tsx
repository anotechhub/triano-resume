"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Timeline, TimelineItemProps } from "@/components/ui/timeline";

const experiences: TimelineItemProps[] = [
  {
    company: "PT Datalabs",
    title: "Manager, Data Analytics & BI",
    period: "January 2022 – Present",
    responsibilities: [
      "Lead a team of data analysts and scientists in delivering data solutions for enterprise clients",
      "Architected and implemented data infrastructure and BI systems on GCP and AWS",
      "Developed data-driven strategies for financial services, retail, and government sectors",
      "Deployed production MLOps pipelines for credit scoring, risk assessment, and monitoring systems",
    ],
    technologies: [
      "GCP Vertex AI",
      "BigQuery",
      "Cloud Functions",
      "Dataflow",
      "Gemini",
      "Python",
      "SQL",
      "Tableau",
    ],
  },
  {
    company: "PT Datalabs",
    title: "Data Scientist",
    period: "October 2018 – December 2021",
    responsibilities: [
      "Developed machine learning models for credit risk, customer segmentation, and forecasting",
      "Built data pipelines and ETL processes for enterprise data warehouses",
      "Created interactive dashboards and BI reports using Tableau and Power BI",
      "Implemented computer vision models for plant disease detection using TensorFlow",
    ],
    technologies: [
      "Python",
      "R",
      "SQL",
      "AWS SageMaker",
      "Redshift",
      "TensorFlow",
      "Scikit-learn",
      "Power BI",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal mb-12 text-center">
            Experience
          </h2>
          <Timeline items={experiences} />
        </motion.div>
      </Container>
    </Section>
  );
}
