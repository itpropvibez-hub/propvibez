"use client"

import type { Property } from "@/lib/types";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "./PropertyCard";
import { MapView } from "../map/MapView";
import { LayoutGrid, Map } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type PropertiesClientProps = {
  properties: Property[];
};

export default function PropertiesClient({ properties }: PropertiesClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [viewMode, setViewMode] = useState("grid");
  const [status, setStatus] = useState("all");

  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const searchMatch = searchTerm.length > 2 ? 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.address.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      const typeMatch = propertyType === 'all' || p.type === propertyType;
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      const statusMatch = status === 'all' || p.status === status;

      return searchMatch && typeMatch && priceMatch && statusMatch;
    });
  }, [properties, searchTerm, propertyType, priceRange, status]);

  const maxPrice = Math.max(...properties.map(p => p.price), 0);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 bg-card p-6 rounded-lg shadow-sm h-fit sticky top-24 border">
          <h2 className="text-2xl font-semibold mb-6 font-headline text-accent">Filters</h2>
          <div className="space-y-6">
             <div>
              <Label className="text-sm font-medium">Status</Label>
              <RadioGroup defaultValue="all" onValueChange={setStatus} className="flex gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="r-all" />
                  <Label htmlFor="r-all">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="For Sale" id="r-sale" />
                  <Label htmlFor="r-sale">Sale</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="For Rent" id="r-rent" />
                  <Label htmlFor="r-rent">Rent</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="search-location" className="text-sm font-medium">Search Location/Title</Label>
              <Input 
                id="search-location"
                placeholder="e.g. Sector 150" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="property-type" className="text-sm font-medium">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger id="property-type"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Plot">Plot</SelectItem>
                  <SelectItem value="Studio">Studio</SelectItem>
                  <SelectItem value="Office">Office</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium">Price Range</Label>
              <div className="mt-2">
                <Slider
                  min={0}
                  max={maxPrice}
                  step={100000}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                  <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Properties List / Map */}
        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">{filteredProperties.length} properties found</p>
            <div className="flex items-center gap-2">
              <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')}>
                <LayoutGrid className="h-5 w-5" />
              </Button>
              <Button variant={viewMode === 'map' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('map')}>
                <Map className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
             filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {filteredProperties.map(p => <PropertyCard key={p.id} property={p} />)}
                </div>
             ) : (
                <div className="text-center py-20">
                    <p className="text-muted-foreground">No properties match your current filters.</p>
                </div>
             )
          ) : (
            <div className="h-[70vh] rounded-lg overflow-hidden border">
                <MapView properties={filteredProperties} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
