import React from 'react'

function PriceDetails() {
  return (
    <form>
    <div className="flex flex-col items-center px-20 py-10 gap-10">
       <div className="flex justify-between  w-full">
        <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Rent <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="0"
            className="border border-[#7A7A7A] px-2 py-2"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Security <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="0"
            className="border border-[#7A7A7A] px-2 py-2"
          />
        </div>
      </div>


      <div className="flex justify-between  w-full">
      <div className="w-2/5 flex flex-col gap-3">
          <label className="font-semibold">
            Maintenance <span className="text-red-500">*</span>
          </label>
          <select className="border border-[#7A7A7A] px-2 py-2">
            <option>West</option>
            <option>North-East</option>
            <option>South-East</option>
            <option>North-West</option>
          </select>
        </div>
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
            Maintenance <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Total Floor"
            className="border border-[#7A7A7A] px-2 py-2"
          />
        </div>
       
      </div>


      <div className="w-full flex flex-col gap-3">
        <label className="font-semibold">
        Additional Pricing Details to convey to agent?
        </label>
        <textarea
          placeholder="Do you have any concerns regarding pricing of your property? Addd your concerns here or call us"
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
  )
}

export default PriceDetails
