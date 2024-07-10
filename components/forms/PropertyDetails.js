"use client";
import React, { useState } from "react";
import MultiRadio from "../MultiRadio";

function PropertyDetails() {
  return (
    <form>
    <div className="flex flex-col items-center px-20 py-10 gap-10">
      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          <span className="text-red-500">*</span> Property For:
        </label>
        <MultiRadio
          options={[
            { value: "rent", text: "Rent" },
            { value: "sale", text: "Sale" },
          ]}
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          <span className="text-red-500">*</span> Property Type:
        </label>
        <MultiRadio
          options={[
            { value: "residential", text: "Residential" },
            { value: "commercial", text: "Commercial" },
            { value: "land/plot", text: "Land/Plot" },
          ]}
        />
      </div>

      <div className="flex justify-between  w-full">
        <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Built up Area <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="0"
            className="border border-[#7A7A7A] px-2 py-2"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Carpet Area <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="0"
            className="border border-[#7A7A7A] px-2 py-2"
          />
        </div>
      </div>

      <div className="flex justify-between  w-full">
        <div className="w-1/5 flex flex-col gap-3">
          <label className="font-semibold">
            Property on Floor <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Floor"
            className="border border-[#7A7A7A] px-2 py-2"
          />
        </div>
        <div className="w-1/5 flex flex-col gap-3">
          <label className="font-semibold">
            Total Floors <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Total Floor"
            className="border border-[#7A7A7A] px-2 py-2"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Property Facing <span className="text-red-500">*</span>
          </label>
          <select className="border border-[#7A7A7A] px-2 py-2">
            <option>West</option>
            <option>North-East</option>
            <option>South-East</option>
            <option>North-West</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          Property Age <span className="text-red-500">*</span>
        </label>
        <Select
          options={[
            "Less than 1 Year",
            "1-3 Years",
            "3-5 Years",
            "5-10 Years",
            "Greater than 10 Years",
          ]}
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          BHK Type <span className="text-red-500">*</span>
        </label>
        <Select
          options={["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"]}
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          Bathrooms/Toilets <span className="text-red-500">*</span>
        </label>
        <Select options={["1", "2", "3", "4", "5", "6+"]} />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          Balcony <span className="text-red-500">*</span>
        </label>
        <Select options={["0", "1", "2", "3", "4+"]} />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          Tenant Preference <span className="text-red-500">*</span>
        </label>
        <Select
          options={["Any", "Family", "Bachelor (Man)", "Bachelor (Women)"]}
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          Availability <span className="text-red-500">*</span>
        </label>
        <Select
          options={[
            "Immediate",
            "within 15 days",
            "within 1 month",
            "within 2 months",
          ]}
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          Property Description <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Add a description for your property to attract the best tenant"
          rows={5}
          className="border border-[#7A7A7A] px-2 py-2"
        />
      </div>
    </div>
    <div className="bg-[#122B49] flex justify-between items-center px-10 py-3 text-white">
        <p className="font-light">
          Need Help? <span className="font-semibold">Call 9999999999</span>
        </p>

        <button type="submit" className=" bg-[#122B49] py-2 px-8 rounded-lg hover:bg-[#0f233a] border border-white">
          NEXT
        </button>
      </div>
    </form>
  );
}

const Select = ({ options }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <button
          type="button"
          className={`${
            selected === option && "bg-[#122B49] text-white"
          } border-2 rounded-3xl px-4 py-3`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PropertyDetails;
