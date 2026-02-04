'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NetworkSphereSVG = () => {
  const svgRef = useRef(null)

  useEffect(() => {
    gsap.to(svgRef.current, {
      y: -50,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <div ref={svgRef}>
      <svg
        viewBox="0 0 600 600"
        width="600"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradients */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2f92" />
            <stop offset="50%" stopColor="#7b5cff" />
            <stop offset="100%" stopColor="#2de2e6" />
          </linearGradient>

          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#2de2e6" />
          </radialGradient>
        </defs>

        {/* Lines */}
        <g stroke="url(#lineGradient)" strokeWidth="1" opacity="0.6">
          <line x1="300" y1="80" x2="450" y2="200" />
          <line x1="300" y1="80" x2="150" y2="200" />
          <line x1="150" y1="200" x2="300" y2="350" />
          <line x1="450" y1="200" x2="300" y2="350" />
          <line x1="200" y1="300" x2="400" y2="300" />
          <line x1="250" y1="150" x2="350" y2="450" />
          <line x1="100" y1="300" x2="500" y2="300" />
        </g>

        {/* Nodes */}
        <g fill="url(#nodeGradient)">
          <circle cx="300" cy="80" r="6" />
          <circle cx="150" cy="200" r="6" />
          <circle cx="450" cy="200" r="6" />
          <circle cx="300" cy="350" r="6" />
          <circle cx="200" cy="300" r="5" />
          <circle cx="400" cy="300" r="5" />
          <circle cx="250" cy="150" r="4" />
          <circle cx="350" cy="450" r="4" />
          <circle cx="100" cy="300" r="4" />
          <circle cx="500" cy="300" r="4" />
        </g>

        {/* Outer ring */}
        <circle
          cx="300"
          cy="300"
          r="220"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}

export default NetworkSphereSVG
