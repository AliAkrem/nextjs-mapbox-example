"use client";
import Image from "next/image";
import MapAria from "./mapAria";

import React, { useState } from "react";
import { Search, MapPin, Menu, List } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./toggle-scheme";


export function DashboardComponent() {
  const [isListingSheetOpen, setIsListingSheetOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4 bg-gray-800">

        <div className="text-2xl font-bold">MapBOX</div>
        <div className="hidden md:flex items-center space-x-4">
          <Input
            className="w-64 bg-gray-700"
            placeholder="Search for properties"
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1+">1+</SelectItem>
              <SelectItem value="2+">2+</SelectItem>
              <SelectItem value="3+">3+</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Home Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-gray-800"
          >
            <div className="grid gap-4 py-4">
              <Input
                className="bg-gray-700"
                placeholder="Search for properties"
              />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1+">1+</SelectItem>
                  <SelectItem value="2+">2+</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Home Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                </SelectContent>
              </Select>
              <Button>Search</Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex flex-col md:flex-row flex-1 overflow-hidden relative">
        <div className="w-full h-full bg-gray-700 p-0">
          {/* Empty map area */}
          <div
            className="h-full flex items-center justify-center text-gray-500"
            aria-label="Map area (intentionally left empty)"
          >
            <MapAria />
          </div>
        </div>
        <div className="hidden md:block w-1/3 overflow-y-auto">
          {places.map((item, idx) => (
            <div key={idx} className="p-4 border-b border-gray-700">
              <div
                className="aspect-video bg-gray-800 mb-2"
                aria-label={`Property image ${item}`}
              >
                <Image
                    alt="image"
                    src={item.imageUrl}
                    width={600}
                    height={480}
                  ></Image>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <div className="text-xl font-bold">
                    ${(2000000 + idx * 100000).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">
                    4bd 3ba 2,000 sqft
                  </div>
                  <div className="text-sm text-gray-400 flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                    123 Main St, Anytown, USA
                  </div>
                </div>
                <Button size="sm" className="w-full sm:w-auto">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Sheet open={isListingSheetOpen} onOpenChange={setIsListingSheetOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed right-4 bottom-4 rounded-full md:hidden"
            onClick={() => setIsListingSheetOpen(true)}
          >
            <List className="h-6 w-6" />
            <span className="sr-only">Show listings</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh] bg-gray-800">
          <div className="overflow-y-auto h-full">
            {places.map((item, idx) => (
              <div key={idx} className="p-4 border-b border-gray-700">
                <div
                  className="aspect-video bg-gray-800 mb-2"
                  aria-label={`Property image ${idx}`}
                >
                  <Image
                    alt="image"
                    src={item.imageUrl}
                    width={600}
                    height={480}
                  ></Image>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <div className="text-xl font-bold">
                      ${(2000000 + idx * 100000).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">
                      4bd 3ba 2,000 sqft
                    </div>
                    <div className="text-sm text-gray-400 flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                      123 Main St, Anytown, USA
                    </div>
                  </div>
                  <Button size="sm" className="w-full sm:w-auto">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}



const places = [
  {
    imageUrl:
      "https://assets.lummi.ai/assets/QmWwCxjhggPRvcxnT3uwbrVsqWPrQ6TPXG25JnEkiJgQDL?auto=format&w=1500",
    describe: "4bd 3ba 2,000 sqft",
    location: "123 Main St, Anytown, USA",
  },
  {
    imageUrl:
      "https://assets.lummi.ai/assets/QmSxyZdpaTH3wcdt3QCXTeQeCQC4RYKJERGRM4CiRNr5S9?auto=format&w=1500",

    describe: "4bd 3ba 2,000 sqft",
    location: "123 Main St, Anytown, USA",
  },
  {
    imageUrl:
      "https://assets.lummi.ai/assets/QmSxyZdpaTH3wcdt3QCXTeQeCQC4RYKJERGRM4CiRNr5S9?auto=format&w=1500",

    describe: "4bd 3ba 2,000 sqft",
    location: "123 Main St, Anytown, USA",
  },
  {
    imageUrl:
      "https://assets.lummi.ai/assets/QmWe6hPYbEc7U3VeXuxGQj8MZ8VxxjkdgkS95rFKmfGBPP?auto=format&w=1500",

    describe: "4bd 3ba 2,000 sqft",
    location: "123 Main St, Anytown, USA",
  },
  {
    imageUrl:
      "https://assets.lummi.ai/assets/QmSVmU7RFhKywEJzq517W6V3m2fWuX812HnCwfKHu4LrXs?auto=format&w=1500",

    describe: "4bd 3ba 2,000 sqft",
    location: "123 Main St, Anytown, USA",
  },
];
