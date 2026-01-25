import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import Link from 'next/link';

export function PropertySearchForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div className="md:col-span-2">
        <label htmlFor="location" className="text-sm font-medium text-white block mb-2">Location</label>
        <Input
          id="location"
          placeholder="e.g., Sector 62, Noida"
          className="bg-white/80 text-foreground"
        />
      </div>
      <div>
        <label htmlFor="property-type" className="text-sm font-medium text-white block mb-2">Property Type</label>
        <Select>
          <SelectTrigger id="property-type" className="bg-white/80 text-foreground">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="office">Office</SelectItem>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="industrial">Industrial</SelectItem>
            <SelectItem value="warehouse">Warehouse</SelectItem>
            <SelectItem value="land">Land</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button asChild type="submit" className="w-full">
        <Link href="/properties">
            <Search className="mr-2 h-4 w-4" />
            Search
        </Link>
      </Button>
    </form>
  );
}
