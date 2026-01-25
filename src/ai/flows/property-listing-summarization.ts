'use server';

/**
 * @fileOverview A property listing summarization AI agent.
 *
 * - summarizePropertyListing - A function that handles the property listing summarization process.
 * - SummarizePropertyListingInput - The input type for the summarizePropertyListing function.
 * - SummarizePropertyListingOutput - The return type for the summarizePropertyListing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePropertyListingInputSchema = z.object({
  propertyDetails: z
    .string()
    .describe('Detailed information about the property, including size, layout, specific features, etc.'),
  imageUris: z
    .array(z.string())
    .describe(
      'A list of image URIs of the property, as data URIs that must include a MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.'
    ),
  propertyType: z.string().describe('The type of property (e.g., Apartment, House, Office, Retail, Industrial).'),
  location: z.string().describe('The location of the property (e.g., Noida, Gurgaon, Delhi).'),
  price: z.number().describe('The price of the property (sale or lease).'),
});
export type SummarizePropertyListingInput = z.infer<
  typeof SummarizePropertyListingInputSchema
>;

const SummarizePropertyListingOutputSchema = z.object({
  summary: z
    .string()
    .describe('A compelling and professional summary of the property listing, aimed at attracting potential buyers or renters.'),
});
export type SummarizePropertyListingOutput = z.infer<
  typeof SummarizePropertyListingOutputSchema
>;

export async function summarizePropertyListing(
  input: SummarizePropertyListingInput
): Promise<SummarizePropertyListingOutput> {
  return summarizePropertyListingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePropertyListingPrompt',
  input: {schema: SummarizePropertyListingInputSchema},
  output: {schema: SummarizePropertyListingOutputSchema},
  prompt: `You are an expert real estate copywriter. Your task is to create a compelling, professional, and concise summary for a property listing that will attract potential buyers or tenants.

  Given the following details, write a summary that highlights the key advantages and investment potential of the property.

  Property Type: {{{propertyType}}}
  Location: {{{location}}}
  Price: {{{price}}}
  Details: {{{propertyDetails}}}
  Images: {{#each imageUris}} {{media url=this}} {{/each}}

  Focus on a professional tone and emphasize features that are critical for the target audience (e.g., lifestyle benefits for residential, business advantages for commercial).
  `,
});

const summarizePropertyListingFlow = ai.defineFlow(
  {
    name: 'summarizePropertyListingFlow',
    inputSchema: SummarizePropertyListingInputSchema,
    outputSchema: SummarizePropertyListingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
