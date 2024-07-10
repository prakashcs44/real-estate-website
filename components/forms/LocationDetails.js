import React from 'react'

function LocationDetails() {
  return (
    <form>
        <div className="flex flex-col items-center px-20 py-10 gap-10">
           <div className='flex justify-between  w-full'>
     <div className="w-2/5 flex flex-col gap-3">
        <label className="font-semibold">
          Building/Society Name <span className="text-red-500">*</span>
        </label>
         <select  className="border border-[#7A7A7A] px-2 py-2">
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
         </select>
      </div>
      <div className="w-2/5 flex flex-col gap-3">
        <label className="font-semibold">
          Locality/Area <span className="text-red-500">*</span>
        </label>
        <select  className="border border-[#7A7A7A] px-2 py-2">
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
         </select>
      </div>
     </div>

     <div className='flex justify-between  w-full'>
     <div className="w-2/5 flex flex-col gap-3">
        <label className="font-semibold">
          Landmark/Stree Name <span className="text-red-500">*</span>
        </label>
        <select  className="border border-[#7A7A7A] px-2 py-2">
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
         </select>
      </div>
      <div className="w-2/5 flex flex-col gap-3">
        <label className="font-semibold">
          City <span className="text-red-500">*</span>
        </label>
        <select  className="border border-[#7A7A7A] px-2 py-2">
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
            <option>vikdnvkjd</option>
         </select>
      </div>
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

export default LocationDetails
