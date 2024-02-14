import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import eight from '../../../assets/images/pvt-reg/HowToRegister/eight.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Benefits = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Benefits'>
      <p className='main-para'>The process of trust registration provides several benefits to both individuals and organizations. Here are the key advantages:</p>
    <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
    <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Charitable Engagement:</h3>
            <p>Establishing a Charitable Trust allows individuals to benefit themselves, their beneficiaries, and their chosen charitable causes.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Tax Exemptions:</h3>
            <p>Registered trusts in India have access to tax exemptions provided by the Income Tax Department, enabling them to benefit from tax relaxations.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Financial Assistance:</h3>
            <p>Registered trusts contribute essential financial support to the underprivileged and the public through various charitable activities.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Legal Safeguards:</h3>
            <p>The Indian Trusts Act of 1882 ensures comprehensive legal protection, safeguarding the trust’s legal standing against unnecessary claims.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Family Wealth Management:</h3>
            <p>Trusts assist in allocating specific assets, preserving and managing family wealth that may be challenging to divide individually.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Probate Avoidance:</h3>
            <p>Trust registration facilitates the transfer of assets to heirs without probate, streamlining the asset distribution process.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Immigration/Emigration Benefits:</h3>
            <p>Establishing a trust proves advantageous during relocation, offering benefits such as tax mitigation, asset safeguarding, and flexibility in asset organization.</p>
          </div>
        </div>
          <div className='flex-4'>
            <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Charitable Engagement:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Tax Exemptions:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Financial Assistance:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Legal Safeguards:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={five} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Family Wealth Management:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Probate Avoidance:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={seven} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Immigration/Emigration Benefits:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
          </div>

      </div>
       <p className='main-para'>By undergoing trust registration, individuals can enjoy these benefits, encompassing financial advantages, legal protection, and flexibility in asset management.</p>
    </div>
  )
}