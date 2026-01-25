'use server';
/**
 * @fileOverview Provides personalized property recommendations based on user data.
 *
 * - personalizedPropertyRecommendations - A function to generate personalized property recommendations.
 * - PersonalizedPropertyRecommendationsInput - The input type for the personalizedPropertyRecommendations function.
 * - PersonalizedPropertyRecommendationsOutput - The return type for the personalizedPropertyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPropertyRecommendationsInputSchema = z.object({
  searchHistory: z.string().describe("The user's recent property search history (e.g., property types, locations, budget)."),
  savedProperties: z.string().describe('A list of properties the user has shown interest in.'),
  preferences: z.string().describe("The user's stated lifestyle needs and preferences (e.g., family size, required size, specific amenities like a pool or gym, budget, proximity to schools or offices)."),
});
export type PersonalizedPropertyRecommendationsInput = z.infer<typeof PersonalizedPropertyRecommendationsInputSchema>;

const PersonalizedPropertyRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe("A list of personalized property recommendations with justifications based on the user's data."),
});
export type PersonalizedPropertyRecommendationsOutput = z.infer<typeof PersonalizedPropertyRecommendationsOutputSchema>;

export async function personalizedPropertyRecommendations(input: PersonalizedPropertyRecommendationsInput): Promise<PersonalizedPropertyRecommendationsOutput> {
  return personalizedPropertyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPropertyRecommendationsPrompt',
  input: {schema: PersonalizedPropertyRecommendationsInputSchema},
  output: {schema: PersonalizedPropertyRecommendationsOutputSchema},
  prompt: `You are an expert real estate advisor for the Delhi NCR (Noida, Gurgaon, Delhi) market. Your goal is to provide highly relevant property recommendations to potential clients for both residential and commercial needs.

  Based on the client's search history, saved properties, and stated preferences, provide a list of personalized property recommendations. For each recommendation, briefly explain *why* it's a good fit for their lifestyle or business.

  Client Search History: {{{searchHistory}}}
  Client Saved Properties: {{{savedProperties}}}
  Client Lifestyle/Business Needs & Preferences: {{{preferences}}}

  Provide the recommendations in a clear, concise list.
`,
});

const personalizedPropertyRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedPropertyRecommendationsFlow',
    inputSchema: PersonalizedPropertyRecommendationsInputSchema,
    outputSchema: PersonalizedPropertyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
