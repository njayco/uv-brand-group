import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SectionFrame, { SectionTitle } from "@/components/SectionFrame";
import { SiInstagram, SiX, SiLinkedin, SiYoutube } from "react-icons/si";
import { useSEO } from "@/hooks/use-seo";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  useSEO({
    title: "Contact",
    description: "Get in touch with Unrevealed Brand. Reach out for project inquiries, partnerships, or general questions.",
  });

  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-8">
      <SectionFrame id="contact">
        <SectionTitle subtitle="Get in Touch">
          Contact
        </SectionTitle>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary/20 mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary tracking-wider uppercase mb-2">
                    Message Sent
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We&rsquo;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Card className="p-5 sm:p-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                                  Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    data-testid="input-contact-name"
                                    className="border-foreground/20 bg-transparent"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                                  Email
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    {...field}
                                    data-testid="input-contact-email"
                                    className="border-foreground/20 bg-transparent"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                                Subject
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  data-testid="input-contact-subject"
                                  className="border-foreground/20 bg-transparent"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                                Message
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  data-testid="textarea-contact-message"
                                  rows={5}
                                  className="border-foreground/20 bg-transparent resize-none"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          disabled={mutation.isPending}
                          className="w-full tracking-wider uppercase text-xs"
                          data-testid="button-submit-contact"
                        >
                          {mutation.isPending ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message <Send className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="md:col-span-2 space-y-5">
            <Card className="p-5 sm:p-6">
              <h4 className="font-display text-sm font-bold text-primary tracking-wider uppercase mb-4">
                Connect With Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary/60" />
                  <a href="mailto:uvbrand@gmail.com" className="text-sm text-foreground hover:underline" data-testid="link-contact-email">uvbrand@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary/60" />
                  <a href="tel:917-723-9364" className="text-sm text-foreground hover:underline" data-testid="link-contact-phone">917-723-9364</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary/60" />
                  <span className="text-sm text-foreground">New York, NY</span>
                </div>
              </div>
            </Card>

            <Card className="p-5 sm:p-6">
              <h4 className="font-display text-sm font-bold text-primary tracking-wider uppercase mb-4">
                Follow Us
              </h4>
              <div className="space-y-3">
                {[
                  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
                  { icon: SiX, label: "X (Twitter)", href: "https://x.com" },
                  { icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: SiYoutube, label: "YouTube", href: "https://youtube.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-contact-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </SectionFrame>
    </div>
  );
}
