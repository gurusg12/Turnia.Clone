import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='h-15 bg-blue-400  flex px-3.5 justify-between items-center'>

      <div className='flex justify-between items-center w-[20%]'> <Image
        src="https://www.turnia.in/turnia/img/favicon.ico"
        alt="logo"
        width={30}
        height={30}
      /> <p className='font-mono text-white font-bold text-2xl flex pl-3.5 gap-5 w-[50vh]  items-center'>
            Turnia Technology
          </p> </div>
      <div className='flex justify-between items-center text-slate-300 w-[30%]'>
        <Link className="text-slate-100 hover:text-white" href='/Home'>Home</Link>
        <Link className="text-slate-100 hover:text-white" href='/Services'>Service</Link>
        <div>Products</div>
        <div>Career</div>
        <div>Contact-us</div>
      </div>


    </div>
  )
}

export default Nav