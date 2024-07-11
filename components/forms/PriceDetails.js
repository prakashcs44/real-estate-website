import React from 'react'
import DropDown from '../DropDown'
import { useForm } from '@/hooks/useForm'
import { priceDetailsValidator } from '@/utils/formValidators'

function PriceDetails({onSubmit}) {

  const {formData,handleInputChange,handleSubmit,errors} = useForm({
    rent:0,
    security:0,
    maintenanceType:"Included in rent",
    maintenanceFee:0,
    maintenanceDuration:"Monthly",
    additionalDetails:"",
  },priceDetailsValidator)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="h-96 overflow-auto flex flex-col items-center px-20 py-10 gap-10">
       <div className="flex justify-between  w-full">
        <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Rent <span className="text-red-500">*</span>
          </label>
          <input
            name = "rent"
            value = {formData.rent}
            onChange={handleInputChange}
            type="text"
            placeholder="0"
            className="border border-[#7A7A7A] px-2 py-2"
          />
          <span className='text-red-500'>{errors.rent}</span>
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Security <span className="text-red-500">*</span>
          </label>
          <input
            name = "security"
            value = {formData.security}
            onChange={handleInputChange}
            type="text"
            placeholder="0"
            className="border border-[#7A7A7A] px-2 py-2"
          />
          <span className="text-red-500">{errors.security}</span>
        </div>
      </div>


      <div className="flex gap-32  w-full">
      <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Maintenance <span className="text-red-500">*</span>
          </label>
          <DropDown name = "maintenanceType" value = {formData.maintenanceType} onChange = {handleInputChange} options={["Included in rent","Extra maintenance"]}/>
          <span className="text-red-500">{errors.maintenanceType}</span>
        </div>
        <div className="w-1/5 flex flex-col gap-3">
          <label className="font-semibold">
            Maintenance <span className="text-red-500">*</span>
          </label>
          <div className='flex gap-10'>
          <input
           name = "maintenanceFee"
           value={formData.maintenanceFee}
           onChange={handleInputChange}

            type="text"
            placeholder="Maintenance"
            className="border border-[#7A7A7A] px-2 py-2"
          />
         
          <DropDown name = "maintenanceDuration" value = {formData.maintenanceDuration} onChange = {handleInputChange}  options={["Monthly"]}/>
          
          </div>
          <span className="text-red-500 ">{errors.maintenanceDuration||errors.maintenanceFee}</span>
        </div>
       
       
      </div>


      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
        Additional Pricing Details to convey to agent?
        </label>
        <textarea
          name = "additionalDetails"
          value={formData.additionalDetails}
          onChange={handleInputChange}
          placeholder="Do you have any concerns regarding pricing of your property? Addd your concerns here or call us"
          rows={5}
          className="border border-[#7A7A7A] px-2 py-2"
        />
        <span className="text-red-500">{errors.additionalDetails}</span>
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
  )
}

export default PriceDetails
