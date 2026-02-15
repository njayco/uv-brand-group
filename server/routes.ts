import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { projectApplicationSchema, contactFormSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { sendApplicationNotification, sendContactNotification } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/applications", async (req, res) => {
    try {
      const result = projectApplicationSchema.safeParse(req.body);
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ message: validationError.toString() });
      }
      const submission = await storage.submitApplication(result.data);

      sendApplicationNotification(result.data).catch((err) =>
        console.error("Email notification error:", err)
      );

      return res.status(201).json({ success: true, id: submission.id });
    } catch (error) {
      return res.status(500).json({ message: "Failed to submit application" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ message: validationError.toString() });
      }
      const submission = await storage.submitContact(result.data);

      sendContactNotification(result.data).catch((err) =>
        console.error("Email notification error:", err)
      );

      return res.status(201).json({ success: true, id: submission.id });
    } catch (error) {
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}
