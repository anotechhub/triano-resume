"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle2, Loader2, ArrowRight, User, Mail as MailIcon, MessageSquare, Phone as PhoneIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number required"),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof formSchema>;

const features = [
  "6+ Years Of Experience",
  "Professional AI & Data Engineer",
  "Cloud Architecture Expert",
  "Custom ML Solutions Support",
];

export function ContactDark() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (data.honeypot) {
        throw new Error("Bot detected");
      }

      const mailtoLink = `mailto:anno.tri@gmail.com?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
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
    <Section id="contact" className="bg-dark-lighter">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 text-sm mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Talk For your
              <br />
              <span className="text-lime">Next Projects</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Ready to transform your data challenges into actionable insights?
              Let&apos;s discuss how I can help architect and deploy your next
              AI/ML solution.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-lime/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-lime" />
                  </div>
                  <span className="text-white/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                {...register("honeypot")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <Input
                      {...register("name")}
                      placeholder="Richard D. Hammond"
                      className="bg-dark-card border-white/10 text-white pl-12 h-14 rounded-2xl focus:border-lime"
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="support@gmail.com"
                      className="bg-dark-card border-white/10 text-white pl-12 h-14 rounded-2xl focus:border-lime"
                    />
                    <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <Input
                      {...register("phone")}
                      placeholder="+880 (123) 456 88"
                      className="bg-dark-card border-white/10 text-white pl-12 h-14 rounded-2xl focus:border-lime"
                    />
                    <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Input
                      {...register("subject")}
                      placeholder="Subject"
                      className="bg-dark-card border-white/10 text-white pl-12 h-14 rounded-2xl focus:border-lime"
                    />
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  </div>
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <Textarea
                  {...register("message")}
                  placeholder="write message"
                  className="bg-dark-card border-white/10 text-white rounded-2xl min-h-[140px] focus:border-lime resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lime text-dark hover:bg-lime/90 font-semibold h-14 rounded-full text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Us Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="text-lime text-sm text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
