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
import nine from '../../../assets/images/pvt-reg/HowToRegister/nine.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Components = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto '  id='Components'>
      <p className='main-para'>A trust deed stands as a pivotal document delineating essential details and provisions governing a trust. It encompasses the following key clauses:</p>
    <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
    <div className='flex-6 text-justify fs-20 p-color-black text-center'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1. Operational Period:</h3>
            <p>Specifies the duration or term for which the trust will remain in operation.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2. Registered Office Address:</h3>
            <p>Indicates the official address of the trust’s registered office.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3. Geographical Scope:</h3>
            <p>Defines the geographical area or region where the trust will conduct its activities.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4. Goals and Objectives:</h3>
            <p>Outlines the goals and objectives that the trust aims to achieve.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5. Details of the Settlor:</h3>
            <p>Provides information about the person establishing the trust (settlor) and details of the assets or property being transferred to the trust.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6. Board of Trustees Information:</h3>
            <p>Includes details about the board of trustees, encompassing their membership, qualifications, terms, and tenure.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7. Roles, Responsibilities, and Powers of Trustees:</h3>
            <p>Clearly defines the roles, responsibilities, and powers of the trustees.</p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>8. Amendment Procedures:</h3>
            <p>Outlines procedures for amending the trust deed and provisions for the closure or termination of the trust.</p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>9. Legal Compliance Assurance:</h3>
            <p>Ensures that the trust operates in accordance with relevant laws and regulations.</p>
          </div>
        </div>
          <div className='flex-4'>
            <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Operational Period:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Registered Office Address:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Geographical Scope:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Goals and Objectives:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={five} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Details of the Settlor:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Board of Trustees Information:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={seven} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Roles, Responsibilities, and Powers of Trustees:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={eight} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Amendment Procedures:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={nine} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Legal Compliance Assurance:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
          </div>

      </div>
       <p className='main-para'>The trust deed serves as a legally binding document, providing clarity and guidance to all parties involved in the operations and functioning of the trust.</p>
    </div>
  )
}