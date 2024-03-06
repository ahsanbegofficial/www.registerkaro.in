
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps { cityName: string; }
export const LoanAndInvestment = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='LoanAndInvestment'>
      <p className='main-para mb-0'>Following is the list of all the vital documents required for the Registration of Producer Company in { cityName }:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={one} alt="one" loading="lazy" width={30} height={30} /> &nbsp; Loans & Advances
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={two} alt="two" loading="lazy" width={30} height={30} /> &nbsp; NABARD Loan
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /> &nbsp; Credit Facility
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
        
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Loans & Advances</h3>
            <p>
            Loans & Advances are provided to the members against security, repayable within a period not more than 7 years from the date of loan disbursement of such loans or advances.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: NABARD Loan</h3>
            <p>
            In { cityName }, NABARD provides support & financial support to meet the requirements of Producer Companies. In 2011, NABARD set up a Rs. 50 crores PODF out of its operating surplus.
            </p>
          </div> 
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Credit Facility</h3>
            <p>
            This is available to any member for a period of not more than 6 months (such facility must be in association with the business).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
