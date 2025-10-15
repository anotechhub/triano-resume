"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, Mail, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"), // Spam protection
});

type FormData = z.infer<typeof formSchema>;

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trianonurhikmat/",
    color: "hover:text-[#0077B5]",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/trianonurhikmat",
    color: "hover:text-[#333]",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    href: "https://wa.me/6281325063397",
    color: "hover:text-[#25D366]",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Spam protection check
      if (data.honeypot) {
        throw new Error("Bot detected");
      }

      // For now, use mailto as fallback
      // In production, this would integrate with a backend API or service like Formspree
      const mailtoLink = `mailto:anno.tri@gmail.com?subject=Contact from ${encodeURIComponent(
        data.name
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;

      window.location.href = mailtoLink;
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal mb-8 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-navy/70 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or
            just connecting. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Honeypot field for spam protection */}
                    <input
                      type="text"
                      {...register("honeypot")}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        {...register("email")}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        {...register("message")}
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <p className="text-green-600 text-sm text-center">
                        Message sent successfully!
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-red-600 text-sm text-center">
                        Failed to send message. Please try again.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>
                    Follow me on social media or reach out directly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-cream hover:bg-mint/20 transition-all hover:shadow-md hover:-translate-y-0.5 text-navy ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}

                  <div className="pt-4 border-t border-mint">
                    <p className="text-sm text-navy/70 mb-2">Email</p>
                    <a
                      href="mailto:anno.tri@gmail.com"
                      className="text-teal hover:underline font-medium break-all"
                    >
                      anno.tri@gmail.com
                    </a>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-navy/70 mb-2">Phone</p>
                    <a
                      href="tel:+6281325063397"
                      className="text-teal hover:underline font-medium"
                    >
                      +62 813-2506-3397
                    </a>
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
