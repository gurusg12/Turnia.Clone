import React from 'react'
import Background from '../Components/Background'
import Manimg from '../Components/Manimg'

const page = () => {
  return (
    <div className=' h-full  relative w-screen bg-white flex justify-center flex-col '>
       <Background />
       <Background/>
       <div><div className='absolute top-0 left-[15%] h-[400] w-[70vw] flex justify-around items-center bg-slate-300 z-20'>
        <div className='h-full w-[50%]  '>

          <p className='text-3xl font-bold font-mono text-slate-500 p-3.5'> WE are Hiring!</p>
          <p className='pt-8 pl-3.5'>
            <span className='text-2xl text-sky-400 font-mono font-bold'> INTERNS</span>
            <br />
             <span className='text-black font-bold font-mono text-xl pl-9'>B.E/M.Tech/MCA</span></p>
         
        </div>
        <div className='h-[90%] w-[45%] bg-amber-500  relative overflow-hidden'> <Manimg/></div>

       </div>

       <form action="" className='h-[800] w-[45vw] bg-slate-300 m-auto absolute top-[30%] left-[29%] rounded-3xl flex justify-around flex-col p-12 '>
        <h1 className='text-3xl text-cyan-600 font-mono font-bold'>Pivot Your Career</h1>

        <input type="text" placeholder='Your First Name' className='text-slate-600 border-b border-slate-200 placeholder:text-xl' />
        <input type="text" placeholder='Your Last Name' className='text-slate-600 border-b border-slate-200 placeholder:text-xl' />
        <input type="text" placeholder='Your Contact Number' className='text-slate-600 border-b border-slate-200 placeholder:text-xl' />
        <input type="text" placeholder='Your Email' className='text-slate-600 border-b border-slate-200 placeholder:text-xl' />
       <div className='flex flex-col gap-1.5 text-slate-800'> <label>Upload Your Resume:</label>
        <input type="file"   className='text-slate-600 border h-7 w-23 pl-0.5  border-slate-900 placeholder:text-xl' />
        </div>

        <button className='bg-green-500 py-0.5 px-1 rounded w-20'>Apply</button>
       
        </form>
        </div>
    </div>
  )
}

export default page