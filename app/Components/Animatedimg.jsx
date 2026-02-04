'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Animatedimg = () => {
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.to(imgRef.current, {
      y: -50,          // move up 50px
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,      // infinite
      yoyo: true       // up & down
    })
  }, [])

  return (
    <div ref={imgRef}>
      <Image
        src="/globe.svg"
        alt="animation-image"
        width={600}
        height={200}
        priority
      />
    </div>
  )
}

export default Animatedimg
