import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const WhyNGO = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhyNGO'>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Credibility</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Operational Development</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Resource Expansion</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Tax Benefits</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Asset and Liability Management</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Stamp Duty Exemption</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
        </div>

        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Credibility</h3>
            <p>Registered NGOs gain credibility, attracting donors, collaborators, and supporters. Registration lends authenticity to the organization’s mission.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Operational Development</h3>
            <p>NGO registration enables local operations to expand, leading to greater exposure and increased community impact.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Resource Expansion</h3>
            <p>The scope of financial and human resources expands as NGOs become eligible for income tax exemption, making them more appealing to potential volunteers and contributors.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Tax Benefits</h3>
            <p>NGOs registered under the Income Tax Act of 2013 in India enjoy various tax benefits, contributing to financial sustainability.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Asset and Liability Management</h3>
            <p>Registered NGOs can own assets, incur liabilities, and manage interest-earning claims, providing a solid foundation for organizational growth.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Stamp Duty Exemption</h3>
            <p>Section 8 companies are exempt from stamp duty, offering additional avenues for tax savings and resource allocation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}