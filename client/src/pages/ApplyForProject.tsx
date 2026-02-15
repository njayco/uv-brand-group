import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { projectApplicationSchema, type ProjectApplication } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
import { useSEO } from "@/hooks/use-seo";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Mobile App",
  "Web Platform",
  "Logo & Brand System",
  "E-Commerce",
  "Infrastructure / API",
];

const revenueGoals = [
  "Increase sales",
  "Automate operations",
  "Build new product",
  "Improve customer experience",
];

export default function ApplyForProject() {
  useSEO({
    title: "Apply for a Project",
    description: "Submit a commercial development application to Unrevealed Brand. Standard builds from $200 with 5-24 hour turnaround.",
  });

  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProjectApplication>({
    resolver: zodResolver(projectApplicationSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      projectTypes: [],
      revenueGoals: [],
      projectDescription: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ProjectApplication) => {
      const res = await apiRequest("POST", "/api/applications", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ProjectApplication) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-8">
      <SectionFrame id="apply-form">
        <SectionTitle subtitle="Commercial Development Application">
          Apply for a Project
        </SectionTitle>

        <div className="max-w-2xl mx-auto">
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
                <h3 className="font-display text-2xl font-bold text-primary tracking-wider uppercase mb-3">
                  Application Received
                </h3>
                <div className="inline-block border-2 border-primary/40 px-6 py-2 mb-4">
                  <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase font-bold">
                    Stamped &bull; Approved
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Your project application has been submitted. Our team will review and respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Card className="p-5 sm:p-6 lg:p-8">
                  <div className="mb-6 pb-4 border-b border-primary/10">
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground/50 tracking-[0.2em] uppercase">
                      Unrevealed Brand &bull; Commercial Development Division
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                              Business Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                data-testid="input-business-name"
                                className="border-foreground/20 bg-transparent"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                              Contact Name
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                                Email Address
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  {...field}
                                  data-testid="input-email"
                                  className="border-foreground/20 bg-transparent"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                                Phone Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  {...field}
                                  data-testid="input-phone"
                                  className="border-foreground/20 bg-transparent"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="h-px bg-primary/10" />

                      <FormField
                        control={form.control}
                        name="projectTypes"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                              Project Type
                            </FormLabel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                              {projectTypes.map((type) => (
                                <FormField
                                  key={type}
                                  control={form.control}
                                  name="projectTypes"
                                  render={({ field }) => (
                                    <FormItem className="flex items-center gap-2">
                                      <FormControl>
                                        <Checkbox
                                          data-testid={`checkbox-type-${type.toLowerCase().replace(/\s+/g, "-")}`}
                                          checked={field.value?.includes(type)}
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              field.onChange([...field.value, type]);
                                            } else {
                                              field.onChange(field.value?.filter((v: string) => v !== type));
                                            }
                                          }}
                                        />
                                      </FormControl>
                                      <Label className="text-xs text-foreground/80 font-normal cursor-pointer">
                                        {type}
                                      </Label>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="revenueGoals"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                              Primary Revenue Goal
                            </FormLabel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                              {revenueGoals.map((goal) => (
                                <FormField
                                  key={goal}
                                  control={form.control}
                                  name="revenueGoals"
                                  render={({ field }) => (
                                    <FormItem className="flex items-center gap-2">
                                      <FormControl>
                                        <Checkbox
                                          data-testid={`checkbox-goal-${goal.toLowerCase().replace(/\s+/g, "-")}`}
                                          checked={field.value?.includes(goal)}
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              field.onChange([...field.value, goal]);
                                            } else {
                                              field.onChange(field.value?.filter((v: string) => v !== goal));
                                            }
                                          }}
                                        />
                                      </FormControl>
                                      <Label className="text-xs text-foreground/80 font-normal cursor-pointer">
                                        {goal}
                                      </Label>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="h-px bg-primary/10" />

                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs tracking-wider uppercase font-semibold">
                              Project Description
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                data-testid="textarea-description"
                                rows={5}
                                className="border-foreground/20 bg-transparent resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={mutation.isPending}
                          className="w-full tracking-wider uppercase text-xs"
                          data-testid="button-submit-application"
                        >
                          {mutation.isPending ? (
                            "Submitting..."
                          ) : (
                            <>
                              Submit Application <Send className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>

                  <div className="mt-6 pt-4 border-t border-primary/10 text-center">
                    <p className="text-[9px] text-muted-foreground/40 tracking-[0.15em] uppercase">
                      Standard Build: $100 deposit + $100 delivery &bull; Turnaround: 5&ndash;24 hours
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SectionFrame>
    </div>
  );
}
