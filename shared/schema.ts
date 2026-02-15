import { z } from "zod";

export const projectApplicationSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  projectTypes: z.array(z.string()).min(1, "Select at least one project type"),
  revenueGoals: z.array(z.string()).min(1, "Select at least one revenue goal"),
  projectDescription: z.string().min(10, "Please describe your project"),
});

export type ProjectApplication = z.infer<typeof projectApplicationSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export interface AppTile {
  number: number;
  total: number;
  name: string;
  description: string;
  revenueModel: string;
  category: "internal" | "commercial";
  link?: string;
  comingSoon?: boolean;
}
