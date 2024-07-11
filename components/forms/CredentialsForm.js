"use client"
import { useForm } from "@/hooks/useForm";
import React from "react";
import MultiRadio from "../MultiRadio";
import DropDown from "../DropDown";
import { credentialsValidator } from "@/utils/formValidators";

const CredentialsForm = ({onSubmit}) => {
    const { handleInputChange, formData,handleSubmit,errors } = useForm({
      iam: "",
      name: "",
      country: "",
      phoneNo: "",
      countryCode: "",
      email: "",
    },credentialsValidator);
  
    return (
      <form className="bg-white text-black xl:w-1/2 w-[95%] lg:w-3/4 overflow-hidden rounded-xl" onSubmit={handleSubmit(onSubmit)}>
       
        <header className="bg-[#F6EFE6] text-2xl px-20 py-3">
          LETS GET YOU STARTED!
        </header>
        <div className="flex flex-col items-center px-10 py-10 h-72 overflow-y-auto overflow-x-hidden gap-10">
        <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
          <span className="text-red-500">*</span> I am:
        </label>
        <MultiRadio
          onChange={handleInputChange}
          value = {formData.iam}
          name="iam"
         
          options={[
            { value: "owner", text: "Owner" },
            { value: "builder", text: "Builder" },
          ]}
        />
          {<span className="text-red-500">{errors.iam}</span>}
      </div>
       
       
  
        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value = {formData.name}
            type="text"
            placeholder="Name"
            className="border border-[#7A7A7A] px-2 py-2"
            onChange={handleInputChange}
          />
           {<span className="text-red-500">{errors.name}</span>}
        </div>
        
  
        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Country <span className="text-red-500">*</span>
          </label>
          <DropDown
            value = {formData.country}
            onChange={handleInputChange}
            name="country"
            options={["India", "Pakistan"]}
          />
           {<span className="text-red-500">{errors.country}</span>}
        </div>
  
       
  
        <div className="w-full flex flex-col gap-3">
          <label className="font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            <DropDown
              value = {formData.countryCode}
              onChange={handleInputChange}
              name="countryCode"
              options={["+91", "+92"]}
            />
             
  
            <input
              type="tel"
              name = "phoneNo"
              value = {formData.phoneNo}
              placeholder="9999999999"
              className="border border-[#7A7A7A] px-2 py-2 flex-grow"
              onChange={handleInputChange}
            />
            
          </div>
          {<span className="text-red-500">{errors.phoneNo}</span>}
          <span className="font-bold">Or</span>
  
          <div className="w-full flex flex-col gap-3">
            <label className="font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleInputChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Email"
              className="border border-[#7A7A7A] px-2 py-2"
            />
             {<span className="text-red-500">{errors.email}</span>}
          </div>
          {<span className="text-red-500">{errors.contactInfo}</span>}
        </div>
      </div>
        <footer className="bg-[#F6EFE6] flex justify-between items-center px-10 py-3">
          <p className="font-light">
            Need Help? <span className="font-semibold">Call 9999999999</span>
          </p>
          <button type = "submit" className="text-white bg-[#122B49] py-2 px-8 rounded-lg hover:bg-[#0f233a]">
            Next
          </button>
        </footer>
      </form>
    );
  };
  
  export default CredentialsForm
  