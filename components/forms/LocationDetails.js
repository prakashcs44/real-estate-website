import React from "react";
import DropDown from "../DropDown";
import { useForm } from "@/hooks/useForm";
import { locationDetailsValidator } from "@/utils/formValidators";

function LocationDetails({ onSubmit }) {
  const { formData, handleSubmit, handleInputChange, errors } = useForm({
    buildingOrSociety: "Gokul village chs 2",
    localityOrArea: "Sheetal nagar",
    landmarkOrStreetName: "Prominent Landmark",
    city: "Mumbai Maharashtra",
  },locationDetailsValidator);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-96 overflow-auto flex flex-col items-center px-20 py-10 gap-10">
        <div className="flex justify-between  w-full">
          <div className="w-2/5 flex flex-col gap-3">
            <label className="font-semibold">
              Building/Society Name <span className="text-red-500">*</span>
            </label>
            <DropDown
              name="buildingOrSociety"
              value={formData.buildingOrSociety}
              onChange={handleInputChange}
              options={["Gokul village chs 2"]}
            />
            <span className="text-red-500">{errors.buildingOrSociety}</span>
          </div>
          <div className="w-2/5 flex flex-col gap-3">
            <label className="font-semibold">
              Locality/Area <span className="text-red-500">*</span>
            </label>
            <DropDown
              name="localityOrArea"
              value={formData.localityOrArea}
              onChange={handleInputChange}
              options={["Sheetal nagar"]}
            />
            <span className="text-red-500">{errors.localityOrArea}</span>
          </div>
        </div>

        <div className="flex justify-between  w-full">
          <div className="w-2/5 flex flex-col gap-3">
            <label className="font-semibold">
              Landmark/Stree Name <span className="text-red-500">*</span>
            </label>
            <DropDown
              name="landmarkOrStreetName"
              value={formData.landmarkOrStreetName}
              onChange={handleInputChange}
              options={["Prominent Landmark"]}
            />
            <span className="text-red-500">{errors.landmarkOrStreetName}</span>
          </div>
          <div className="w-2/5 flex flex-col gap-3">
            <label className="font-semibold">
              City <span className="text-red-500">*</span>
            </label>
            <DropDown
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              options={["Mumbai Maharashtra"]}
            />
            <span className="text-red-500">{errors.city}</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold w-full">Mark Locality on Map</h2>
        <div className="w-[90%] border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867495.582001885!2d74.12754026814912!3d18.804785566251468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720687683412!5m2!1sen!2sin"
            width={600}
            height={450}
            className="w-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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

export default LocationDetails;
