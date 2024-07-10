import SignUpForm from '@/components/forms/SignUpForm'
import Image from 'next/image'
import React from 'react'


const STEPS = [
  {
    text:"Add your properties",
    boldText:"Basic Details"
  },
  {
    text:"Add property",
    boldText:"Location"
  },
  {
    text:"Add your property",
    boldText:"Features and amenities"
  },
  {
    text:"Add",
    boldText:"Price Details"
  },
  {
    text:"Add your best",
    boldText:"Property Shots"
  }
]

function Home() {
  return (
    <section className='mt-20 bg-[#122B49]  text-white pb-10'>
      <header className='pt-16 space-y-4 pl-24 text-center xl:text-start'>
        <h1 className=' text-4xl '>Sell or Rent your Property For Free</h1>
        <p>Whether you're ready to sell or looking for answers, we'll guide you with data and expertise specific to your needs.</p>
      </header>
      <div className='w-full flex flex-col items-center xl:flex-row xl:items-start justify-between mt-8 px-40 xl:gap-0 gap-12'>
        <div className='space-y-4 mt-10'>
          <h2 className='text-2xl pb-4 '>Upload your property in 5 simple steps</h2>
           {
            STEPS.map(step=>(
              <div className='flex gap-2 items-center'>
                <Image src="/steps_right.png" width={46} height={40} />
                <p>{step.text} <span className='font-bold'>{step.boldText}</span></p>
              </div>

            ))
           }
        </div>
        <SignUpForm/>
      </div>
    </section>
  )
}

export default Home
