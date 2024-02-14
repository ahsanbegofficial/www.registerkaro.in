import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const WhatDocument = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhatDocuments'>
    <p className='main-para mb-0'>Basically, there are 2 important compliance for Producer Company in India and following are 2 Producer Company Compliance:</p>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
      <div className='flex-5 text-justify fs-20 p-color-black'>
        <div className={`${active === '1' ? 'active' : 'none'}`}>
          <h3>1: Annual Report by Auditor</h3>
          <p>Annual Report by Auditor: NDH-3 is a half-yearly return filed to check whether the Company is working under the prescribed rules or not. This Return is to be filed by 30th Sep & 31st Mar each year.</p>
        </div>
        <div className={`${active === '2' ? 'active' : 'none'}`}>
          <h3>2: Internal Audit</h3>
          <p>Internal Audit: This will be conducted at regular intervals by a CS, CA, Advocate, or CMA as per the AoA.</p>
        </div>
      </div>
      <div className='flex-5'>
        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
          <div>
            <Image src={one} alt="one" loading="lazy" width={30} height={30} /> &nbsp; Annual Report by Auditor
          </div>
          <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
        </button>
        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
          <div>
            <Image src={two} alt="two" loading="lazy" width={30} height={30} /> &nbsp; Internal Audit
          </div>
          <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
        </button>
      </div>
    </div>
  </div>
  
  )
}
