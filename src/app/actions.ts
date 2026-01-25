"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const careerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Please provide a valid phone number."),
  position: z.string().min(2, "Position of interest is required."),
  resumeUrl: z.string().url("Please provide a valid URL for your resume."),
});

export async function handleContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would integrate with a service to send an email
  // or save the data to a database/Google Sheet.
  console.log("New Contact Form Submission:", {
    ...validatedFields.data,
    submittedAt: new Date().toISOString(),
  });

  // This is where you would trigger an email to the admin.
  // For example: await sendAdminNotificationEmail(validatedFields.data);

  return { success: true, message: "Thank you for your message! We'll be in touch soon." };
}


export async function handleCareerForm(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const validatedFields = careerFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
        errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    // In a real application, this data would be saved to a database,
    // an Applicant Tracking System (ATS), or a Google Sheet.
    console.log("New Career Application:", {
        ...validatedFields.data,
        submittedAt: new Date().toISOString(),
    });

    // This is where you would trigger an email to the HR/admin team.
    // For example: await sendCareerApplicationEmail(validatedFields.data);

    return { success: true, message: "Thank you for your application! We will review it and get in touch if there's a good fit." };
}
