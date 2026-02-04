'use client'
import React from 'react'


const Svgs = () => {
  return (
    <div className="flex gap-6 items-center text-gray-800 z-30 p-4 flex-col justify-between">



        <div className='flex w-full h-fit justify-center items-center gap-2'>
           <div className='bg-sky-700 w-1/4 flex flex-col justify-between items-center rounded-2xl p-3 hover:bg-sky-500'>  <svg
        className="w-40 h-40 text-slate-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </svg>
       <p className='text-4xl font-bold font-sans text-white  text-center'>
        05+ 
        <br />
         Partners
      </p></div>

      {/* Right mark */}
    <div className='bg-sky-800 w-1/4 flex flex-col justify-between items-center rounded-2xl p-3 hover:bg-sky-500'>  <svg
        className="w-40 h-40 text-slate-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <p className='text-4xl font-bold font-sans text-white  text-center'>
        05+ 
        <br />
         Partners
      </p>
      
      </div>

      {/* Profile */}
 

      {/* Happy emoji */}
     <div className='bg-sky-700 w-1/4 flex flex-col justify-between items-center rounded-2xl p-3 hover:bg-sky-500'> <svg
        className="w-40 h-40 text-slate-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
       <p className='text-4xl font-bold font-sans text-white  text-center'>
        05+ 
        <br />
         Partners
      </p>
      
      </div>

      {/* Coffee cup */}
    <div className=' bg-sky-800 w-1/4  flex flex-col justify-between items-center rounded-2xl p-3 hover:bg-sky-500'>  <svg
        className="w-40 h-40 text-slate-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
       <p className='text-4xl font-bold font-sans text-white  text-center'>
        05+ 
        <br />
         Partners
      </p></div>
        </div>

      

    </div>
  )
}

export default Svgs
