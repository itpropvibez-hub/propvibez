import { properties } from "@/lib/data"
import PropertiesClient from "@/components/properties/PropertiesClient";

export default function PropertiesPage() {
  // In a real app, you would fetch properties from an API
  const allProperties = properties;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline text-accent">Find Your Perfect Space</h1>
        <p className="text-muted-foreground mt-2">Search through the best properties in Noida, Gurgaon, Delhi and more.</p>
      </div>
      <PropertiesClient properties={allProperties} />
    </div>
  )
}
