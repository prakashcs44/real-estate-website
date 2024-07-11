"use client"
import React from "react";
import {useRouter} from "next/navigation";
import { otpValidator } from "@/utils/formValidators";
import { useForm } from "@/hooks/useForm";

const OtpForm = () => {

    const router = useRouter();
  
    
   
    const { handleInputChange, formData,handleSubmit,errors } = useForm({
     otp:""
    },otpValidator);
    
    const onSubmit = ()=>{
      router.push("/property-listing");
    }
  
    return (
      <form className="bg-white text-black w-1/2 overflow-hidden rounded-xl" onSubmit={handleSubmit(onSubmit)}>
      <header className="bg-[#F6EFE6] text-2xl px-20 py-3">
        LETS GET YOU STARTED!
      </header>
      <div className="flex flex-col items-center px-10 py-10 h-72 overflow-y-auto overflow-x-hidden gap-10">
      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-between">
          <label className="font-semibold">
            Enter OTP 999999999 sent on <span className="text-red-500">*</span>
          </label>
          <button className="text-blue-500 underline">Change</button>
        </div>
  
        <input
         value={formData.otp}
          onChange={handleInputChange}
          type="text"
          name = "otp"
          placeholder="OTP"
          className="border border-[#7A7A7A] px-2 py-2"
        />
        {<span className="text-red-500">{errors.otp}</span>}
      </div>
  
      <button className="text-blue-500 underline">Resend OTP</button>
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
  
  export default OtpForm;
  