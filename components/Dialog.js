import React from 'react'

function Dialog({open,...buttonProps}) {

   if(!open) return null;

   return (
     <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='w-1/3 py-10 bg-white flex flex-col items-center gap-4 rounded-xl'>
          <h1>POST PROPERTY ON DYLAN ESTATE? <span className='text-red-500'>*</span></h1>
          <button {...buttonProps}  className='w-3/4 text-white bg-[#122B49] px-4 py-2'>Continue</button>
          <p className=' text-center'>By continuing you agree to our <span className='text-[#122B49] underline'>Terms and conditions & Private Privacy</span></p>
        </div>
     </div>
   )
}

export default Dialog
