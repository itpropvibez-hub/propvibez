
"use server";

import { z } from "zod";

// --- Schemas ---

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(phoneRegex, { message: "Please enter a valid phone number." }).optional().or(z.literal('')),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const careerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(phoneRegex, { message: "Please enter a valid phone number." }),
  position: z.string().min(2, { message: "Position of interest is required." }),
  resumeUrl: z.string().url({ message: "Please provide a valid URL for your resume." }),
});

const propertyInquirySchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().regex(phoneRegex, { message: "Please enter a valid phone number." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
    propertyTitle: z.string(),
});


// --- State Type ---

export type FormState = {
  message: string;
  errors?: Record<string, string[] | undefined>;
  success: boolean;
};

// --- Server Actions ---

export async function handleContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  // --- INTEGRATION POINT ---
  // In a real application, you would replace this console.log with your integration logic.
  // 1. Send data to Google Sheets API.
  // 2. Trigger an email to the sales team.
  console.log("New Contact Form Submission:", {
    ...validatedFields.data,
    submittedAt: new Date().toISOString(),
  });

  return { success: true, message: "Thank you for your message! We'll be in touch soon." };
}

export async function handleCareerForm(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = Object.fromEntries(formData.entries());
    const validatedFields = careerFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: "Please correct the errors and try again.",
          success: false,
        };
    }

    // --- INTEGRATION POINT ---
    // In a real application, this data would be saved to a Google Sheet or an Applicant Tracking System (ATS).
    // You would also trigger an email to the HR/admin team here.
    console.log("New Career Application:", {
        ...validatedFields.data,
        submittedAt: new Date().toISOString(),
    });

    return { success: true, message: "Thank you for your application! We will review it and get in touch if there's a good fit." };
}

export async function handlePropertyInquiry(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = Object.fromEntries(formData.entries());
    const validatedFields = propertyInquirySchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please correct the errors and try again.",
            success: false,
        };
    }

    // --- INTEGRATION POINT ---
    // This is where you would send the inquiry to your CRM, Google Sheets,
    // and trigger an immediate email notification to your sales team.
    console.log("New Property Inquiry:", {
        ...validatedFields.data,
        submittedAt: new Date().toISOString(),
    });

    return { success: true, message: "Thank you for your inquiry! Our agent will contact you shortly." };
}
