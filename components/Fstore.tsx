import React from 'react'
import Image from 'next/image'

function Fstore() {
  return (
    <div>
      <div className="main">
        <div className="Fh1">
          <fieldset>
            <legend className="px-8">Top Categories to choose from</legend>
          </fieldset>
        </div>
        <div className="fstore">
          <div className="pt-3">
            <Image src="/11.webp" alt="1" width={400} height={429} />
          </div>
          <div className="pt-36">
            <Image src="/2.webp" alt="2" width={312} height={291} />
          </div>
          <div className="pt-36">
            <Image src="/3.webp" alt="3" width={312} height={291} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fstore
