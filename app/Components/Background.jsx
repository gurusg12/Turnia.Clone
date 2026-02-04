import Image from 'next/image';
import React from 'react';

const Background = () => {
  return (
    <div className="relative w-full h-screen bg-white">
      <Image
        src="https://www.turnia.in/turnia/img/backimage.jpg"
        alt="Background Image"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default Background;
