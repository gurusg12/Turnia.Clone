'use client'
import React from 'react'
import MainBanner from './MainBanner'
import Background from './Background'
import Animatedimg from './Animatedimg'
import Divanimate from './Divanimate'
import Bg2 from './Bg2'
import Footers from './Footers'

const Hero = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full   flex flex-col justify-around '>
         <div className='w-full h-[65vh]'>
          <MainBanner />
        </div>
       </div>
       <div className='relative h-full w-full overflow-hidden  '>
        < Background  />

        <div className='relative z-10 flex h-full bg-transparent '>
          <div className=" w-[50%] h-full py-5">
            
            <div className='pl-[30%] flex flex-col  pr-9 items-start justify-center pt-3 text-lg text-start'>
              <h1 className='text-2xl font-bold text-cyan-700 font-mono pl-[30%]'>About-us</h1>


             <p className='pt-6 text-zinc-600 font-thin'> Turnia Technology has been started in city of victory Vijayapur, Karnataka in the year 2017 by professionals with more than 5 years of experience working in industry with multiple MNC’s in different domains and technologies.</p>
              <br />

           <p className='text-zinc-600 font-thin'>   The team consists of young and energetic lads who are constantly motivated and driven towards the goal oriented tasks to meet the deadlines and throttle themselves to cope with the fast moving technical world at the present times. The core team believes in the Sanskrit saying</p>

            <p className='pt-6 text-zinc-600 font-thin text-start '> उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः|

              <br />

                  न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः।।</p>
              <br />

           <p className='text-zinc-600 font-thin'>  which means “Work will get done by acting on it,not by inspiration and dreaming alone.”</p>
           <br />
           <p className='text-zinc-600 font-thin'>We are currently into development of Web Applications, Android/IOS Applications, Desktop Applications, Static/Dynamic Websites. It is the prime motto of Turnia to make user friendly and attractive applications or websites for their professional or personal use.</p>
           <br />
           <p className='text-zinc-600 font-thin'>We welcome all kinds of requirements from various different domains like Banking and Finance, Healthcare, Education, Logistics and many more. You tell us your ideas and we bring it into reality. It is our priority to make your life easier than it is.</p>
           <br />
             <p className='text-zinc-600 font-thin'>Turnia has delivered more than 5 products to customers of different domain and different technologies like Java, .Net, Android and PHP.</p>
           </div>

          
          </div>
          <div className="bg-transparent pt-44 z-50 w-[50%] flex justify-center items-center h-full">
            <Animatedimg/>
          </div>

          
        </div>
     
       </div> 
             <div className='relative  bg-sky-200 text-black flex   justify-center pt-10   h-screen  '>
              <Bg2/>
            <Divanimate/>
            
            

            
          </div>
          <Footers/>

    </div>
  )
}

export default Hero
