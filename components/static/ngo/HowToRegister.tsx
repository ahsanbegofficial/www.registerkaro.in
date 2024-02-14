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
import ten from '../../../assets/images/pvt-reg/HowToRegister/ten.svg'
import eleven from '../../../assets/images/pvt-reg/HowToRegister/eleven.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const HowToRegister = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='HowToRegister'>
      <p className='main-para'>The following is the process for NGO Registration in India:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Type Determination</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Name Selection</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Drafting MoA and AoA</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Governing Body Formation</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={five} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Registered Office Designation</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Documentation Preparation</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={seven} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Registration Application Submission</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={eight} alt="pu step 8" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Review and Approval</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={nine} alt="pu step 9" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Registration Certificate Obtention</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={ten} alt="pu step 10" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Tax Exemption Application</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('11')} className={`btn flex ${active === '11' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={eleven} alt="pu step 11" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Compliance and Reporting</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        </div>
        <div className='flex-6 text-justify fs-20 p-color-black text-center'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Type Determination</h3>
            <p>Choose the suitable NGO structure – Trust, Society, or Section 8 Company – based on your organization’s objectives.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Name Selection</h3>
            <p>Choose a unique name reflecting your mission.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Drafting MoA and AoA</h3>
            <p>Prepare the Memorandum and Articles of Association.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Governing Body Formation</h3>
            <p>Establish a governing body or managing committee.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Registered Office Designation</h3>
            <p>Provide an official address for communication.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Documentation Preparation</h3>
            <p>Gather required identity proofs, address proofs, and photographs.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Registration Application Submission</h3>
            <p>Submit the application to the relevant authority – Registrar of Trusts, Registrar of Societies, or Registrar of Companies.</p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>8: Review and Approval</h3>
            <p>Await review, with possible clarification requests.</p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>9: Registration Certificate Obtention</h3>
            <p>Upon approval, obtain the registration certificate.</p>
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>10: Tax Exemption Application</h3>
            <p>Apply for tax exemptions under relevant sections.</p>
          </div>
          <div className={`${active === '11' ? 'active' : 'none'}`}>
            <h3>11: Compliance and Reporting</h3>
            <p>Adhere to statutory requirements, including accounts maintenance, annual returns filing, and audited financial statements submission.</p>
          </div>
        </div>
      </div>
    </div>
  )
}