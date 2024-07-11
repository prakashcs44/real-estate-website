import React from "react";
import MultiRadio from "../MultiRadio";
import MultiSelect from "../MultiSelect";
import { useForm } from "@/hooks/useForm";
import { featuresAndAmenitiesValidator } from "@/utils/formValidators";
import { SOCIETY_AMENITIES } from "@/constants";


function FeaturesAndAmenities({ onSubmit }) {
  const { formData, handleInputChange, handleSubmit, errors } = useForm({
    nonVeg: "",
    pets: "",
    electricity: "",
    waterSupply: "",
    furnishing: "",
    additionalFeatures: "",
    tiles: "",
    safety: "",
    societyAmenities: "",
  },featuresAndAmenitiesValidator);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-96 overflow-auto flex flex-col items-center px-20 py-10 gap-10">
        <h1 className="font-bold text-xl text-start w-full">
          General Features
        </h1>
        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            <span className="text-red-500">*</span> Non-Veg
          </label>
          <MultiRadio
            name="nonVeg"
            value={formData.nonVeg}
            onChange={handleInputChange}
            options={[
              { value: "allowed", text: "Allowed" },
              { value: "not-allowed", text: "Not Allowed" },
            ]}
          />
          <span className="text-red-500">{errors.nonVeg}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            <span className="text-red-500">*</span> Pets Allowed
          </label>
          <MultiRadio
            name="pets"
            value={formData.pets}
            onChange={handleInputChange}
            options={[
              { value: "yes", text: "Yes" },
              { value: "no", text: "No" },
            ]}
          />
           <span className="text-red-500">{errors.pets}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            <span className="text-red-500">*</span> Electricity
          </label>
          <MultiRadio
            name="electricity"
            value={formData.electricity}
            onChange={handleInputChange}
            options={[
              { value: "rare", text: "Rare/No Powercut" },
              { value: "frequent", text: "Frequent Powercut" },
            ]}
          />
           <span className="text-red-500">{errors.electricity}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            <span className="text-red-500">*</span> Water Supply
          </label>
          <MultiRadio
            name="waterSupply"
            value={formData.waterSupply}
            onChange={handleInputChange}
            options={[
              { value: "bmc", text: "Municipal Corporation (BMC)" },
              { value: "borewell", text: "Borewell" },
              { value: "both", text: "Both" },
            ]}
          />
           <span className="text-red-500">{errors.waterSupply}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-bold space-x-1">
            <span className="text-red-500">*</span>
            Furnishing
          </label>
          <MultiSelect
            name="furnishing"
            value={formData.furnishing}
            onChange={handleInputChange}
            options={[
              { value: "fully", text: "Fully Furnished" },
              { value: "semi", text: "Semi Furnished" },
              { value: "not", text: "Unfurnished" },
            ]}
          />
           <span className="text-red-500">{errors.furnishing}</span>
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-bold space-x-1">Additional Features</label>
          <MultiSelect
            name="additionalFeatures"
            value={formData.additionalFeatures}
            onChange={handleInputChange}
            options={[
              { value: "air-onditioning", text: "Air Conditioning" },
              { value: "ceiling-fans", text: "Ceiling Fans" },
              { value: "refrigerator", text: "Refrigerator" },
              { value: "washing-machine", text: "Washing Machine" },
              { value: "microwave", text: "Microwave" },
              { value: "oven", text: "Oven" },
            ]}
          />
          
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-bold space-x-1">Tiles</label>
          <MultiSelect
            name="tiles"
            value={formData.tiles}
            onChange={handleInputChange}
            options={[
              { value: "normal", text: "Normal White Tiles" },
              { value: "marble", text: "Marble" },
              { value: "vitrified", text: "Vitrified Tiles" },
            ]}
          />
        </div>

        <div className="w-full flex flex-col gap-3">
          <label className="font-bold space-x-1">
            <span className="text-red-500">*</span>
            Safety
          </label>
          <MultiSelect
            name="safety"
            value={formData.safety}
            onChange={handleInputChange}
            options={[
              {
                value: "gated-security",
                text: "24/7 Security Personnel (Gated Security)",
              },
              { value: "cctv", text: "Security Systems-CCTV" },
            ]}
          />
           <span className="text-red-500">{errors.safety}</span>
        </div>

        <div className="w-full flex flex-col gap-14">
          <label className="font-bold space-x-1">SOCIETY AMENITIES</label>
          <MultiSelect
            name="societyAmenities"
            value={formData.societyAmenities}
            onChange={handleInputChange}
            isLogo={true}
            options={SOCIETY_AMENITIES}
          />
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

export default FeaturesAndAmenities;
