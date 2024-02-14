import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const UnderstandProcess = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='UnderstandProcess'>
      <p className='main-para'>Following is the step-by-step procedure for Society Registration in India:</p>
      
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
        <div className='flex-4'>
            <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Gather Necessary Documents for Society Registration</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={two} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Complete the Online Application</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={three} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Submit Application to the Relevant Authority</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={four} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Attain Society Registration Certificate</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
             </button>
          </div>
        
      <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Gather Necessary Documents for Society Registration</h3>
            <p>Collect all required documents for society registration. Ensure a thorough review of these documents before proceeding with the application.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Complete the Online Application</h3>
            <p>Fill in the online application form. If you encounter difficulties accessing the website, seek guidance from an expert to initiate the society registration process in Delhi through offline means.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Submit Application to the Relevant Authority</h3>
            <p>Send the completed online application through the official portal. In case of any difficulty locating the portal, consider having experts visit the head office to submit the application for cooperative society registration in Delhi</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Attain Society Registration Certificate</h3>
            <p>After scrutinizing your application form, the head office will evaluate its satisfaction. Upon approval, you will be issued the society registration certificate</p>
          </div>
      </div>
      
      </div>
    </div>
  )
}
