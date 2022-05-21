import React from 'react'
import Image from 'next/image'

function NavBar() {
  return (
    <div>
      <div className="mx-60 mt-6 flex justify-between">
        <div className="j flex">
          <Image src="/mlogo.png" alt="Logo" width={200} height={45} />
          <input
            className="rounded  border border-black px-40 py-3 placeholder:font-serif placeholder:italic placeholder:text-slate-400 "
            type="text"
            placeholder="Search by Product Code"
            name="search"
          />
        </div>
        <div className="my-2 flex text-center hover:cursor-pointer">
          <a className="mx-2 ">Download App</a>
          <a className="border-x-2 border-slate-300 px-2">Become a Supplier</a>
          <a className="mx-2">Profile Cart</a>
        </div>
      </div>
      <div className="border-slate-150 mt-2 border-y-2">
        <div className="mx-60 flex justify-between py-5">
          <a>Women Ethnic</a>
          <a>Women Western</a>
          <a>Jewellery & Accessories</a>
          <a>Men</a>
          <a>Beauty & Health</a>
          <a>Bags & Footwear</a>
          <a>Home & Kitchen</a>
          <a>Kids</a>
          <a>Electronics</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
