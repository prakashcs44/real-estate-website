"use client";
import React, { useState } from "react";
import MultiRadio from "../MultiRadio";
import { useForm } from "@/hooks/useForm";
import DropDown from "../DropDown";
import { propertyDetailsValidator } from "@/utils/formValidators";

function PropertyDetails({ onSubmit }) {
  const { handleSubmit, errors, handleInputChange, formData } = useForm(
    {
      propertyFor: "",
      propertyType: "",
      builtUpArea: 0,
      carpetArea: 0,
      propertyOnFloor: "",
      totalFloors: 0,
      propertyFacing: "West",
      propertyAge: "",
      bhkType: "",
      bathrooms: "",
      balcony: "",
      tenantPreference: "",
      availability: "",
      propertyDescription: "",
    },
    propertyDetailsValidator
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-96 overflow-auto flex flex-col items-center px-20 py-10 gap-10">
        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            <span className="text-red-500">*</span> Property For:
          </label>
          <MultiRadio
            name="propertyFor"
            value={formData.propertyFor}
            onChange={handleInputChange}
            options={[
              { value: "rent", text: "Rent" },
              { value: "sale", text: "Sale" },
            ]}
          />
          <span className="text-red-500">{errors.propertyFor}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            <span className="text-red-500">*</span> Property Type:
          </label>
          <MultiRadio
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            options={[
              { value: "residential", text: "Residential" },
              { value: "commercial", text: "Commercial" },
              { value: "land/plot", text: "Land/Plot" },
            ]}
          />
          <span className="text-red-500">{errors.propertyType}</span>
        </div>

        <div className="flex justify-between  w-full">
          <div className="w-2/5 flex flex-col gap-3">
            <label className="font-semibold">
              Built up Area <span className="text-red-500">*</span>
            </label>
            <input
              name="builtUpArea"
              value={formData.builtUpArea}
              onChange={handleInputChange}
              type="text"
              placeholder="0"
              className="border border-[#7A7A7A] px-2 py-2"
            />
            <span className="text-red-500">{errors.builtUpArea}</span>
          </div>
          <div className="w-2/5 flex flex-col gap-3">
            <label className="font-semibold">
              Carpet Area <span className="text-red-500">*</span>
            </label>

            <input
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleInputChange}
              type="text"
              placeholder="0"
              className="border border-[#7A7A7A] px-2 py-2"
            />

            <span className="text-red-500">{errors.carpetArea}</span>
          </div>
        </div>

        <div className="flex justify-between  w-full">
          <div className="w-1/5 flex flex-col gap-3">
            <label className="font-semibold">
              Property on Floor <span className="text-red-500">*</span>
            </label>
            <input
              name="propertyOnFloor"
              value={formData.propertyOnFloor}
              onChange={handleInputChange}
              type="text"
              placeholder="Floor"
              className="border border-[#7A7A7A] px-2 py-2"
            />
            <span className="text-red-500">{errors.propertyOnFloor}</span>
          </div>
          <div className="w-1/5 flex flex-col gap-3">
            <label className="font-semibold">
              Total Floors <span className="text-red-500">*</span>
            </label>
            <input
              name="totalFloors"
              value={formData.totalFloors}
              onChange={handleInputChange}
              type="text"
              placeholder="Total Floor"
              className="border border-[#7A7A7A] px-2 py-2"
            />
            <span className="text-red-500">{errors.totalFloors}</span>
          </div>
          <div className="w-2/5 flex flex-col gap-3">
            <label className="font-semibold">
              Property Facing <span className="text-red-500">*</span>
            </label>
            <DropDown
              name="propertyFacing"
              value={formData.propertyFacing}
              onChange={handleInputChange}
              options={["West", "North-East", "South-East", "North-West"]}
            />
            <span className="text-red-500">{errors.propertyFacing}</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Property Age <span className="text-red-500">*</span>
          </label>
          <Select
            name="propertyAge"
            value={formData.propertyAge}
            onChange={handleInputChange}
            label="property age"
            options={[
              "Less than 1 Year",
              "1-3 Years",
              "3-5 Years",
              "5-10 Years",
              "Greater than 10 Years",
            ]}
          />
          <span className="text-red-500">{errors.propertyAge}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            BHK Type <span className="text-red-500">*</span>
          </label>
          <Select
            name="bhkType"
            value={formData.bhkType}
            onChange={handleInputChange}
            label="bhk type"
            options={["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"]}
          />
          <span className="text-red-500">{errors.bhkType}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Bathrooms/Toilets <span className="text-red-500">*</span>
          </label>
          <Select
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            label="bathrooms"
            options={["1", "2", "3", "4", "5", "6+"]}
          />
          <span className="text-red-500">{errors.bathrooms}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Balcony <span className="text-red-500">*</span>
          </label>
          <Select
            name="balcony"
            value={formData.balcony}
            onChange={handleInputChange}
            label="balcony"
            options={["0", "1", "2", "3", "4+"]}
          />
          <span className="text-red-500">{errors.balcony}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Tenant Preference <span className="text-red-500">*</span>
          </label>
          <Select
            name="tenantPreference"
            value={formData.tenantPreference}
            onChange={handleInputChange}
            label="tenent preference"
            options={["Any", "Family", "Bachelor (Man)", "Bachelor (Women)"]}
          />
          <span className="text-red-500">{errors.tenantPreference}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Availability <span className="text-red-500">*</span>
          </label>
          <Select
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            label="availability"
            options={[
              "Immediate",
              "within 15 days",
              "within 1 month",
              "within 2 months",
            ]}
          />
          <span className="text-red-500">{errors.availability}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Property Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="propertyDescription"
            value={formData.propertyDescription}
            onChange={handleInputChange}
            placeholder="Add a description for your property to attract the best tenant"
            rows={5}
            className="border border-[#7A7A7A] px-2 py-2"
          />
          <span className="text-red-500">{errors.propertyDescription}</span>
        </div>
      </div>
      <div className="bg-[#122B49] flex justify-between items-center px-10 py-3 text-white">
        <p className="font-light">
          Need Help? <span className="font-semibold">Call 9999999999</span>
        </p>

        <button
          type="submit"
          className=" bg-[#122B49] py-2 px-8 rounded-lg hover:bg-[#0f233a] border border-white"
        >
          NEXT
        </button>
      </div>
    </form>
  );
}

const Select = ({ label, options, onChange, ...props }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (ev) => {
    const { checked, value } = ev.target;
    if (!checked) setSelected("");
    else setSelected(value);
    if (onChange) onChange(ev);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <div key={`${option}-${label}`}>
          <input
            {...props}
            value={option}
            id={`${option}-${label}`}
            type="checkbox"
            className="opacity-0 size-0"
            onChange={handleChange}
            checked={selected === option}
          />
          <label
            htmlFor={`${option}-${label}`}
            className={`cursor-pointer border-2 rounded-3xl px-4 py-3 ${
              selected === option && "bg-[#122B49] text-white"
            }`}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
