"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = {
  degree: "Bachelor of Statistics (B.Stat)",
  institution: "Universitas Islam Indonesia",
  period: "2014 - 2018",
  thesis: "Image Classification Using Convolutional Neural Networks (CNN)",
  achievements: [
    "Focused on machine learning and statistical modeling",
    "Research in computer vision and deep learning",
  ],
};

const certifications = [
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    title: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    year: "2023",
  },
  {
    title: "Google Cloud Professional Database Engineer",
    issuer: "Google Cloud",
    year: "2022",
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2022",
  },
];

export function Education() {
  return (
    <Section id="education" className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal mb-12 text-center">
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-teal" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{education.degree}</CardTitle>
                      <CardDescription className="text-base">
                        {education.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-teal mb-4">
                    {education.institution}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">
                        Thesis:
                      </p>
                      <p className="text-sm text-navy/80">{education.thesis}</p>
                    </div>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-navy/80"
                        >
                          <span className="text-mint mt-0.5">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center">
                      <Award className="w-6 h-6 text-teal" />
                    </div>
                    <CardTitle className="text-2xl">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border-l-2 border-mint pl-4 py-2"
                      >
                        <h4 className="font-semibold text-navy mb-1">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{cert.issuer}</Badge>
                          <span className="text-sm text-navy/60">{cert.year}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
