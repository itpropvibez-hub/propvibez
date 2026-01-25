import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Bell, Bot } from "lucide-react";
import RecommendationsClient from "@/components/dashboard/RecommendationsClient";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline">Your Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your properties and preferences.</p>
      </div>
      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="favorites"><Heart className="w-4 h-4 mr-2" />Favorites</TabsTrigger>
          <TabsTrigger value="alerts"><Bell className="w-4 h-4 mr-2" />Alerts</TabsTrigger>
          <TabsTrigger value="recommendations"><Bot className="w-4 h-4 mr-2" />AI Assistant</TabsTrigger>
        </TabsList>
        <TabsContent value="favorites">
          <Card>
            <CardHeader>
              <CardTitle>Saved Properties</CardTitle>
              <CardDescription>You have not saved any properties yet.</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Property Alerts</CardTitle>
              <CardDescription>You have no active alerts.</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="recommendations">
          <RecommendationsClient />
        </TabsContent>
      </Tabs>
    </div>
  );
}
