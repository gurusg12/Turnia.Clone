"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://www.turnia.in/turnia/img/n6.png",
  "https://www.turnia.in/turnia/img/n5.jpg",
  "https://www.turnia.in/turnia/img/n1.png",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervel = setInterval(() => {

      setIndex(g=>(
        (g+1)%images.length
      ))
      
    }, 3000);

    return ()=> clearInterval(intervel)
  }, []);


  return (
    <div className="relative w-full h-[65vh]">
      <Image
        src={images[index]}
        alt="slide"
        fill
        className="object-cover transition-all duration-500"
        priority
      />
    </div>
  );
}
