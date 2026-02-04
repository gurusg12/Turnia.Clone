'use client'
import React, { useEffect, useState } from 'react'
import Svgs from './Svgs';

const Divanimate = () => {

  const content = ["Turnia has delivered more than 5 products to customers of different domain and different technologies like Java, .Net, Android and PHP.", "which means “Work will get done by acting on it,not by inspiration and dreaming alone.", "encountering with their current products. We promise to hear your complaints and issues for all the services opted from us with our ears open for you round the clock."]
  const [index, setindex] = useState(1);

  useEffect(() => {
    const intervel = setInterval(() => {

      setindex(j => (j + 1) % content.length);



    }, 3000);

    return () => clearInterval(intervel)
  }, [])



  return (
    <div className='flex gap-3 flex-col  z-50 h-[300]'>
      <div className='flex flex-col m-auto justify-center items-center gap-3.5 text-3xl w-[50vw] h-[200] mb-5 text-start font-mono capitalize py-3'>

        {content[index]}
        <div>
          <div className='flex gap-2.5'>  <div className={`${index === 0 ? "h-4 w-4 bg-slate-800 rounded-full" : "bg-slate-400 border-2 h-4 w-4 rounded-full "}`}></div>
            <div className={`${index === 1 ? "h-4 w-4 bg-slate-800 rounded-full" : "bg-slate-400 border-2 h-4 w-4 rounded-full "}`}></div>
            <div className={`${index === 2 ? "h-4 w-4 bg-slate-800 rounded-full" : "bg-slate-400 border-2 h-4 w-4 rounded-full "}`}></div></div>
        </div>

      </div>
      <div className='m-auto h-[400] w-screen'>
        <Svgs />
      </div>
    </div>
  )
}

export default Divanimate