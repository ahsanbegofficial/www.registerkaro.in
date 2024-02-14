import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Taxation = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Taxation'>
      <p>Indian subsidiary companies are governed by distinct taxation policies, characterized by the following key features:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
      <div className='flex-6 text-justify fs-20 p-color-black'>
        <div className={`${active === '1' ? 'active' : 'none'}`}>
          <h3>1: Income Tax Applicability</h3>
          <p>Taxes are imposed on all income generated within or outside India, encompassing dividends received from foreign subsidiaries.</p>
        </div>
        <div className={`${active === '2' ? 'active' : 'none'}`}>
          <h3>2: Tax Rates for Foreign Subsidiaries</h3>
          <p>Tax rates for foreign subsidiaries in India vary, with a rate of 50% for royalties received for technical services from the government or any Indian entity, and a rate of 40% for other forms of income.</p>
        </div>
        <div className={`${active === '3' ? 'active' : 'none'}`}>
          <h3>3: Surcharge Rates</h3>
          <p>Surcharge rates are applied based on the company’s income:
            <ul>
              <li>A 2% surcharge is levied if the income falls between Rs. 1 Crore and Rs. 10 Crores.</li>
              <li>For incomes exceeding Rs. 10 Crores, a higher surcharge of 5% is imposed.</li>
            </ul>
          </p>
        </div>
        <div className={`${active === '4' ? 'active' : 'none'}`}>
          <h3>4: Health and Education Cess</h3>
          <p>Additionally, a 4% health and education cess are added to the total tax amount, contributing to social welfare initiatives.</p>
        </div>
        <div className={`${active === '5' ? 'active' : 'none'}`}>
          <h3>5: Concessional Tax Rates</h3>
          <p>Specific sectors, including but not limited to oil exploration, air transportation, and shipping businesses, benefit from concessional tax rates, providing favorable conditions for entities operating in these industries.</p>
        </div>
      </div>
      <div className='flex-4'>
        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={one} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Income Tax Applicability</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={two} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Tax Rates for Foreign Subsidiaries</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={three} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Surcharge Rates</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={four} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Health and Education Cess</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={five} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Concessional Tax Rates</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
      </div>
      </div>
      <h6 >These taxation policies create a comprehensive framework for Indian subsidiary companies, reflecting the nuanced regulatory landscape and sector-specific considerations. Understanding and navigating these tax regulations is essential for ensuring compliance and optimizing the financial performance of such subsidiaries in the Indian business environment.</h6>
    </div>
  )
}