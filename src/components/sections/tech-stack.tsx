"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

interface TechCategory {
  title: string;
  items: string[];
}

const techStack: TechCategory[] = [
  {
    title: "Languages",
    items: ["SQL", "Python", "R"],
  },
  {
    title: "GCP",
    items: [
      "Vertex AI",
      "BigQuery",
      "Cloud Functions",
      "Cloud Run",
      "Dataflow",
      "Pub/Sub",
      "Cloud SQL",
      "AI Platform",
    ],
  },
  {
    title: "AWS",
    items: [
      "SageMaker",
      "Lambda",
      "Redshift",
      "Step Functions",
      "CloudWatch",
      "S3",
      "EC2",
    ],
  },
  {
    title: "ML/AI",
    items: [
      "Gemini",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "MLflow",
    ],
  },
  {
    title: "Analytics & Visualization",
    items: [
      "Power BI",
      "Looker Studio",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Plotly",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "Apache Airflow",
      "dbt",
      "Apache Spark",
      "Kafka",
      "Docker",
      "Git",
    ],
  },
];

export function TechStack() {
  const [copiedTech, setCopiedTech] = React.useState<string | null>(null);

  const handleCopy = (tech: string) => {
    navigator.clipboard.writeText(tech);
    setCopiedTech(tech);
    setTimeout(() => setCopiedTech(null), 2000);
  };

  return (
    <Section id="tech-stack" className="bg-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal mb-12 text-center">
            Tech Stack
          </h2>

          <div className="space-y-8">
            {techStack.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-teal mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                      }}
                    >
                      <Badge
                        variant="default"
                        className="cursor-pointer hover:bg-teal hover:text-white transition-colors group relative pr-10"
                        onClick={() => handleCopy(tech)}
                      >
                        {tech}
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label={`Copy ${tech}`}
                        >
                          {copiedTech === tech ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
