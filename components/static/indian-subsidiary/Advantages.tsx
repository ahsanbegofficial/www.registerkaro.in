import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Advantages = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Advantages'>
      <p className='main-para'>Indian Subsidiary Registration in India comes with numerous compelling advantages:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Entry into the Indian Market</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Foreign Direct Investment (FDI) in India</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Perpetual Succession</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Limited Liability</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Scope of Diversification</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Separate Legal Identity</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Property Ownership and Rental</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>

        </div>

        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Entry into the Indian Market</h3>
            <p>India’s competitive business landscape offers a multitude of investment opportunities that attract foreign entrepreneurs to establish their subsidiary companies in the country.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Foreign Direct Investment (FDI) in India</h3>
            <p>FDI involves investments by foreign companies in Indian private enterprises through share subscriptions or acquisitions. In 2020, the Indian government mandated prior approval for investments from countries sharing a border with India, making the registration of Indian subsidiaries an appealing option for foreign investors.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Perpetual Succession</h3>
            <p>The concept of perpetual succession ensures that a company’s existence remains unaffected by events such as changes in management, transfers of membership, or insolvency. The company operates seamlessly, providing stability and continuity.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Limited Liability</h3>
            <p>Limited liability is a significant advantage that encourages individuals to choose company formation. This principle extends to Indian subsidiary companies, safeguarding the personal assets of shareholders and directors. The company bears responsibility for its debts to third parties, shielding the personal assets of its stakeholders.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Scope of Diversification</h3>
            <p>Establishing an Indian subsidiary company provides a strategic avenue for foreign businesses to expand operations, contributing to the growth of the Indian economy. It also introduces a variety of goods and services, fostering healthy competition.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Separate Legal Identity</h3>
            <p>According to the Companies Act, a company is recognized as a distinct legal entity separate from its shareholders and directors. This legal status empowers the company to engage in agreements with other entities, initiate legal actions, and respond to allegations before the judicial system in its own name.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Property Ownership and Rental</h3>
            <p>Property Ownership and Rental: As a legal entity, a subsidiary company has the authority and right to purchase or rent properties in India for its business activities. Acquiring such properties in the company’s name aligns with the principle of perpetual succession and helps prevent potential conflicts among company members.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
