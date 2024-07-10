"use client";
import React, { useState } from "react";
import PropertyDetails from "@/components/forms/PropertyDetails";
import LocationDetails from "@/components/forms/LocationDetails";
import FeaturesAndAmenities from "@/components/forms/FeaturesAndAmenities";
import PriceDetails from "@/components/forms/PriceDetails";
import PropertyImages from "@/components/forms/PropertyImages";

const FORM_SECTIONS = [
  {
    name: "PROPERTY DETAILS",
    Component: PropertyDetails,
  },
  {
    name: "LOCATION DETAILS",
    Component: LocationDetails,
  },
  {
    name: "FEATURES & AMENITIES",
    Component: FeaturesAndAmenities,
  },
  {
    name: "PRICE DETAILS",
    Component: PriceDetails,
  },
  {
    name: "PROPERTY IMAGES",
    Component: PropertyImages,
  },
];

function page() {
  const [section, setSection] = useState(0);

  const CurrentForm = FORM_SECTIONS[section].Component;

  return (
    <div className="mt-32 mx-auto bg-white text-black w-3/4 overflow-hidden rounded-xl shadow-xl">
      <header className="bg-[#F6EFE6] text-lg">
        <ul className="flex">
          {FORM_SECTIONS.map((form, index) => (
            <li
              key = {form.name}
              className={`border-b-8 transition-[border] duration-200 ${
                index < section && "border-black"
              } ${
                section === index && "bg-slate-100"
              } py-4 px-10 cursor-pointer`}
              onClick={() => setSection(index)}
            >
              {form.name}
            </li>
          ))}
        </ul>
      </header>

      <div className="h-96 overflow-x-hidden overflow-y-auto">
        {<CurrentForm />}
      </div>
    </div>
  );
}

export default page;
