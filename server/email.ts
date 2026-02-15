import { Resend } from 'resend';

const NOTIFICATION_EMAIL = "uvbrand@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

export async function sendApplicationNotification(data: {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  projectTypes: string[];
  revenueGoals: string[];
  projectDescription: string;
}) {
  try {
    const resend = getResendClient();

    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Project Application: ${data.businessName}`,
      html: `
        <h2>New Project Application Received</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Contact Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.contactName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Business</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.businessName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Project Types</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.projectTypes.join(', ')}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Revenue Goals</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.revenueGoals.join(', ')}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Project Description</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.projectDescription}</td></tr>
        </table>
        <p style="margin-top: 16px; color: #666;">Reply directly to: <a href="mailto:${data.email}">${data.email}</a></p>
      `,
    });
    console.log("Application notification email sent successfully");
  } catch (error) {
    console.error("Failed to send application notification email:", error);
  }
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const resend = getResendClient();

    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Subject</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.subject}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${data.message}</td></tr>
        </table>
        <p style="margin-top: 16px; color: #666;">Reply directly to: <a href="mailto:${data.email}">${data.email}</a></p>
      `,
    });
    console.log("Contact notification email sent successfully");
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
  }
}
