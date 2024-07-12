import React from 'react'
import { SOCIETY_AMENITIES } from '@/constants'
function page() {
  return (
    <div className='px-10 pb-20'>
      <button className='border-2 bg-white px-2 py-2 ml-4 mt-4'>Back</button>
      <div >
       <div className='flex justify-between  mt-10 '>
        <h1 className='text-3xl'>1 BHK Flat/apartment for rent in Gokul village chs 2 (545 Sq.Ft.)</h1>
        <div className=' text-xl flex gap-4 py-4 px-10 bg-[#F6EFE6]'>
           <p>$ <span className='font-bold'>20,000</span> / Month (Rent-negotiable)</p>
           <p>$<span className='font-bold'>20,000</span> (deposit)</p>
        </div>

       </div>
       <div className='space-y-4'>
         <h2 className='text-lg'>Gokul village chs 2 shanti park,near st. Xaviours High school</h2>
         <div className='flex gap-20 '>
            <div className='  w-3/4 space-y-8'>
              <div className='h-80 bg-slate-300 '/>
              <div className='space-y-10 shadow-md py-10 px-4'>
                <h1 className='text-3xl'>Property Overview</h1>
                <div className='flex flex-wrap gap-20 px-10'>
                  <div>
                    <p>Two(2)</p>
                    <p>Bedrooms</p>
                  </div>
                  <div>
                    <p>One(1)</p>
                    <p>Bathrooms</p>
                  </div>
                  <div>
                    <p>580</p>
                    <p>Sq.Ft.</p>
                  </div>

                  <div>
                    <p>Ground</p>
                    <p>Property on floor</p>
                  </div>
                  <div>
                    <p>4</p>
                    <p>Total Floors</p>
                  </div>
                  <div>
                    <p>4</p>
                    <p>Total Floors</p>
                  </div>
                  <div>
                    <p>4</p>
                    <p>Total Floors</p>
                  </div>
                  <div>
                    <p>4</p>
                    <p>Total Floors</p>
                  </div>
                </div>
               
              </div>
              <div className='shadow-lg  py-8 space-y-10 px-4'>
                <h1 className='text-3xl'>Amenities</h1>
                <div className='flex flex-wrap gap-20 px-10'>
                  {SOCIETY_AMENITIES.map(s=>(<div className='flex flex-col items-center'>
                    <span>{s.logo}</span>
                    <span>{s.text}</span>
                  </div>))}
                </div>

                </div>
                <div className='shadow-lg  py-8 space-y-10 px-4'>
                <h1 className='text-3xl'>Description</h1>
                 <p className='py-4'>
                  Spread over 510 sq.ft. this home is an ideal place to to live in.Access to bus station
                  & medical store is very easy & convenient from this house
                 </p>

                </div>
            </div>
            <div className='py-4 px-10 bg-[#F6EFE6] rounded-lg space-y-4 h-fit sticky top-32'>
                <h1 className='text-xl font-bold'>Send an inquiry for this property?</h1>
                <p className='font-light text-sm'>Contact Person:Melvin Lasrado</p>
                <form className='flex flex-col gap-5 mt-4'>
                    <p className='py-2 px-4 shadow-md border bg-white font-semibold'>+91-9999999999</p>
                    <input type='text' placeholder='Name' className='py-2 px-4 shadow-md border'/>
                    <input type='emal' placeholder='Email' className='py-2 px-4 shadow-md border'/>
                    <div className='flex gap-2'>
                        <input value = "+91" type='text' disabled className='py-2 px-4 shadow-md bg-white w-1/6 border'/>
                        <input type='text' placeholder='999-999-9999' className='py-2 px-4 shadow-md border'/>
                    </div>
                    <textarea className='py-2 px-4 shadow-md border resize-none' placeholder='i would like more information about sector 5,shanti nagar, anubhav society'/>
                    <button className='px-4 py-2 bg-[#122B49] text-white rounded-lg'>SEND INQUIRY</button>
                </form>
            </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default page
