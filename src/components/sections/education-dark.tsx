"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
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

export function EducationDark() {
  return (
    <Section id="education" className="bg-dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="text-white/60 text-sm mb-3">Education & Certifications</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Academic & Professional
              <br />
              <span className="text-lime">Credentials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 hover:border-lime/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-lime" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{education.degree}</h3>
                  <p className="text-white/60 text-sm">{education.period}</p>
                </div>
              </div>

              <p className="font-semibold text-lime mb-4">
                {education.institution}
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    Thesis:
                  </p>
                  <p className="text-sm text-white/60">{education.thesis}</p>
                </div>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <span className="text-lime mt-0.5">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 hover:border-lime/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-lime" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-l-2 border-lime/30 pl-4 py-2 hover:border-lime transition-colors"
                  >
                    <h4 className="font-semibold text-white mb-2">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-lime/10 text-lime border-lime/30 hover:bg-lime/20">
                        {cert.issuer}
                      </Badge>
                      <span className="text-sm text-white/60">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
