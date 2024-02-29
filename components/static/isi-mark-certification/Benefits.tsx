
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

interface HeroProps {
  cityName: string;
}

export const Benefits = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Benefits'>
      <p className='main-para mb-2'>Obtaining ISI Mark Certification in {cityName} offers various advantages, including:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Market Advantages:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Market Access:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Competitive Edge:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Market Advantages:</h3>
            <p className='mb-0'>
             This certification significantly enhances market benefits compared to uncertified products. It facilitates smooth and uninterrupted production processes. ISI Certification serves as a testament that your products adhere to established standards, ensuring safety.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Market Access:</h3>
            <p className='mb-0'> A certified product gains access to a broader market due to its demonstrated higher quality and adherence to safety standards, instilling confidence in consumers. Products bearing the ISI mark are perceived as more trustworthy, providing manufacturers with expanded market access.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Competitive Edge:</h3>
            <p className='mb-0'> ISI certification signifies the standard quality of a product, offering manufacturers a competitive advantage. Customers tend to prefer certified products, reinforcing the manufacturer’s commitment to quality and safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
