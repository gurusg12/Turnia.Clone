'use client'
import React from 'react'
import { gsap } from 'gsap'
import Footers from '../Components/Footers'

const FlipCard = ({ svg, backText }) => {
  const cardRef = React.useRef(null)

  const handleHover = () => {
    gsap.to(cardRef.current, {
      rotateY: 180,
      duration: 0.6,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  const handleHoverOut = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  return (
    <div
      className="w-72 h-80 perspective cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full flex justify-center items-center bg-sky-700 rounded-2xl p-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {svg}
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full flex justify-center items-start bg-sky-800 rounded-2xl p-4 overflow-auto"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-white p-4 font-medium text-base text-left">
            {backText}
          </p>
        </div>
      </div>
    </div>
  )
}

const page = () => {
  const cards = [
    {
      svg: (
        <svg
          className="w-24 h-24 text-white p-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
      ),
      backText: `Software development is done in a systematic way by experienced and well qualified technocrats. 
Development work is not easy but our software development firm has professionals who work in such a way 
that they are able to achieve their targets well within time. Quality work is evident by the satisfied clients. 
We understand that we have just one chance to prove us in this competitive world, so we help put vision to our client’s idea 
and launch a successful creation.`,
    },
    {
      svg: (
        <svg
          className="w-24 h-24 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      backText: 'With the Mobile First Technology seaming into every humans palm right now, it is imperative to reach out to your clients and customers through mobile applications.Our Quality Assurance Team affirms application from every single conceivable perspective and guarantees up-to-date execution.Analysers discover the bugs, check the security and blemish. We remember the overall achievement of application which results in a decent number of active downloads. Get the best help for all administrations identified with portable application testing.',
    },
    {
      svg: (
        <svg
          className="w-24 h-24 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      backText: 'Web Design & DevelopmentA website is an investment and the only medium to convert clicks into business. Turnia is a web design firm and has an upper hand in developing focused, budgeted and one of its kind website for business opportunities.As a leading Web Design Company: we listen to your requirements and design and develop your expectations via internet. Our web development team consists of web developers who develop programs as per clients’ needs. Provides single permanent solution to secondary assignments through graphic designers and information systems technicians.Services are provided as per clients’ requirements and budget to the best of our efforts.',
    },
    {
      svg: (
        <svg
          className="w-24 h-24 text-white p-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      backText: 'Electronic commerce is also sometimes referred to as e-business and entails the buying and selling of services and goods. However, the thing that sets it apart from the physical marketplace is the fact that this is done over an electronic system, namely the Internet. The rapidly increasing usage of the internet as well as the development in the technology has ensured increased adaptability of the system. This has led to an ever-increasing trend in internet usage. Consequently, e-commerce has been booming for the past few years',
    },
  ]

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center w-[950] m-auto gap-6 p-8">
      {cards.map((card, index) => (
        <FlipCard key={index} svg={card.svg} backText={card.backText} />
      ))}

      
    </div>
    <Footers/>
    </div>
  )
}

export default page
