import { type ProjectApplication, type ContactForm } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  submitApplication(application: ProjectApplication): Promise<{ id: string }>;
  submitContact(contact: ContactForm): Promise<{ id: string }>;
}

export class MemStorage implements IStorage {
  private applications: Map<string, ProjectApplication & { id: string; createdAt: string }>;
  private contacts: Map<string, ContactForm & { id: string; createdAt: string }>;

  constructor() {
    this.applications = new Map();
    this.contacts = new Map();
  }

  async submitApplication(application: ProjectApplication): Promise<{ id: string }> {
    const id = randomUUID();
    this.applications.set(id, { ...application, id, createdAt: new Date().toISOString() });
    return { id };
  }

  async submitContact(contact: ContactForm): Promise<{ id: string }> {
    const id = randomUUID();
    this.contacts.set(id, { ...contact, id, createdAt: new Date().toISOString() });
    return { id };
  }
}

export const storage = new MemStorage();
