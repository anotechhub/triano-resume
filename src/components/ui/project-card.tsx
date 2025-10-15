"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  client: string;
  period: string;
  description: string;
  impacts: string[];
  technologies: string[];
  onViewDetails?: () => void;
  className?: string;
}

export function ProjectCard({
  title,
  client,
  period,
  description,
  impacts,
  technologies,
  onViewDetails,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-2">
            <CardTitle className="text-2xl">{title}</CardTitle>
            {onViewDetails && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onViewDetails}
                aria-label="View case study"
              >
                <ExternalLink className="w-5 h-5" />
              </Button>
            )}
          </div>
          <div className="space-y-1">
            <CardDescription className="text-base font-semibold text-teal">
              {client}
            </CardDescription>
            <CardDescription className="text-sm">{period}</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <p className="text-navy/80 mb-4">{description}</p>

          <div className="space-y-2 mb-4">
            <h4 className="text-sm font-semibold text-teal">Key Impacts:</h4>
            <ul className="space-y-1">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-navy/80">
                  <span className="text-mint mt-0.5">▸</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex flex-wrap gap-2 w-full">
            {technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
