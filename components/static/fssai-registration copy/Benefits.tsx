
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Benefits = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Benefits'>
      <p className='main-para mb-2'>FSSAI License in India is based on the business turnover, types & capacity of production. Depending upon the installed capacity & turnover, Food Business Operators are eligible for Licenses such as FSSAI Basic Registration, FSSAI State License, and FSSAI Central License.</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>FSSAI Basic Registration</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>FSSAI State License</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>FSSAI Central License</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1. FSSAI Basic Registration:</h3>
            <p>
              Food Business Operators having an annual turnover of less than Rs. 12 lakhs must get FSSAI Basic Registration. The form for Basic Registration is Form-A.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2. FSSAI State License:</h3>
            <p>
              Food Business Operators having an annual turnover of more than Rs. 12 lakhs & more than Rs. 20 crores must get the FSSAI State License. The applicant has to fill out Form-B for the FSSAI State License.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3. FSSAI Central License:</h3>
            <p>
              Food Business Operators having an annual turnover of more than Rs. 20 crores must apply for FSSAI Central License. The applicant has to fill the Form-B to get an FSSAI Central License.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
