import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="main">
      <div className=" mt-6 flex justify-between">
        <div className="my-10 text-left font-bold">
          <h1 className="text-4xl">Lowest Prices</h1>
          <h1 className="text-4xl">Best Quality Shopping</h1>
          <p className="my-10 mx-5 text-xl text-slate-500">
            1 Crore+ Products | 650+ Categories
          </p>
          <button className=" mx-5 rounded bg-pink-500 px-10 py-4 text-xl text-white">
            Download the Meesho App
          </button>
        </div>
        <div>
          <Image src="/1.jpg" alt="Hero" width={500} height={330} />
        </div>
      </div>
    </div>
  )
}

export default Hero
