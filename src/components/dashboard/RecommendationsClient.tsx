"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { personalizedPropertyRecommendations } from "@/ai/flows/personalized-property-recommendations";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function RecommendationsClient() {
  const [searchHistory, setSearchHistory] = useState("Looking for a 3-BHK apartment in Noida near a metro station.");
  const [savedProperties, setSavedProperties] = useState("Saved a 2-BHK in Sector 78 and a 3-BHK in Sector 137.");
  const [preferences, setPreferences] = useState("My family needs at least 3 bedrooms and 2 bathrooms. A society with a pool, gym, and kids play area is a must. Our budget is around 1.5 Cr. Good connectivity to Delhi is important.");
  const [recommendations, setRecommendations] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getRecommendations = async () => {
    setIsLoading(true);
    setRecommendations("");
    try {
      const result = await personalizedPropertyRecommendations({
        searchHistory,
        savedProperties,
        preferences,
      });
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error("Error getting recommendations:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Your AI Property Assistant</CardTitle>
          <CardDescription>
            Tell us about your lifestyle and what you're looking for. Our AI will find properties that are perfect for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="search-history">Recent Search History</Label>
            <Textarea
              id="search-history"
              value={searchHistory}
              onChange={(e) => setSearchHistory(e.target.value)}
              placeholder="e.g., Searched for villas in Gurgaon, apartments in Noida"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="saved-properties">Saved Properties or Interests</Label>
            <Textarea
              id="saved-properties"
              value={savedProperties}
              onChange={(e) => setSavedProperties(e.target.value)}
              placeholder="e.g., Inquired about a property in Sector 150"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferences">Lifestyle Needs & Preferences</Label>
            <Textarea
              id="preferences"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="e.g., Family of 4, need 3 bedrooms, close to schools, budget 2Cr."
            />
          </div>
          <Button onClick={getRecommendations} disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Get AI Recommendations
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recommended For You</CardTitle>
          <CardDescription>
            Based on your input, here are some properties that match your lifestyle and budget.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex items-center justify-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {recommendations ? (
            <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap">
                {recommendations}
            </div>
          ) : (
            !isLoading && <p className="text-sm text-muted-foreground text-center pt-10">Your personalized property recommendations will appear here.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
