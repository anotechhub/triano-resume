"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface TimelineItemProps {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface TimelineProps {
  items: TimelineItemProps[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-mint/30 transform md:-translate-x-1/2" />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex flex-col md:flex-row gap-8 items-start",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal rounded-full border-4 border-white shadow-md transform -translate-x-[7px] md:-translate-x-1/2 mt-2" />

            {/* Content */}
            <div
              className={cn(
                "flex-1 pl-8 md:pl-0",
                index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
              )}
            >
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-teal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-navy mb-1">
                    {item.company}
                  </p>
                  <p className="text-sm text-navy/60">{item.period}</p>
                </div>

                <ul className="space-y-2 mb-4 text-navy/80">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-mint mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={cn(
                    "flex flex-wrap gap-2",
                    index % 2 === 0 ? "md:justify-end" : ""
                  )}
                >
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
