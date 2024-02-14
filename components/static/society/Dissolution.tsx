import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Dissolution = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Dissolution'>
      <p className='main-para'>As per the provisions of the Society Registration Act, the dissolution of a society registered under the Act can be initiated by either the Registrar of Cooperative Societies or at least one-tenth of the society members through a court of competent jurisdiction. The court, upon due consideration, may decree the dissolution of the society based on various grounds, including:</p>
      
      <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
      <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Violation of Act Provisions</h3>
            <p>If the society is found to have contravened any stipulation outlined in the Act</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Inadequate Society Membership</h3>
            <p>If the number of society members drops below seven, breaching the prescribed minimum</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Extended Period of Inactivity</h3>
            <p>Should the society remain non-functional for a period exceeding three years</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Financial Incapacity</h3>
            <p> In the event that the society is unable to settle its debts or fulfill its financial obligations</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Cancellation of Registration due to Public Policy Opposition</h3>
            <p> If the society’s registration is revoked due to activities or proposed actions conflicting with public policy</p>
          </div>
      </div>
        <div className='flex-4'>
         <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Violation of Act Provisions</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={two} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Inadequate Society Membership</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={three} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'> Extended Period of Inactivity</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={four} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'> Financial Incapacity</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
         <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2' >
                <Image src={five} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Cancellation of Registration due to Public Policy Opposition</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
        </div>
       
      </div>
    </div>
  )
}
