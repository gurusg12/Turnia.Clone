import React from 'react'

const Footers = () => {
  return (
    <div className='w-screen h-[60] border-t-4 border-sky-600 bg-slate-800 z-30  top-56 text-white flex justify-around items-center'>
        <div className='flex justify-around items-center w-29'>Follow Us: <span>  <svg
    className="w-6 h-6 text-sky-400"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z" />
  </svg></span></div>

  <div>Copyright© 2020 <span className='text-sky-500'> Turnia Technology </span>All Rights Reserved.</div>
    </div>
  )
}

export default Footers