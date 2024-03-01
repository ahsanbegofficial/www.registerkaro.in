
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
interface HeroProps {
  cityName: string;
}
export const Procedure = ({ cityName }: HeroProps)  => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Procedure'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>Following is the step-by-step procedure for obtaining ISO Certification in { cityName }:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: File an Application:</h3>
            <p className='mb-0'>Once the applicant has selected the ISO Standard & ISO Certification Body, then you have to file an application. The application must contain rights & obligations of applicant & certification bodies and includes liability issues, access rights & confidentiality.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Examination of all the Documents:</h3>
            <p className='mb-0'>The ISO Certification body will examine all the documents & quality manuals regarding various policies & procedures followed in a company or organization. Scrutiny of existing works will aid the Registrar to know the possible gaps against the requirements prescribed under ISO Standards.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Pre-Assessment:</h3>
            <p className='mb-0'>It’s an initial review of the QMS (Quality Management System) in a company to know any errors or weaknesses in the system & the registrar will provide the company with an opportunity to rectify such errors before the Registration Assessment.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Prepare a Proper Action Plan:</h3>
            <p className='mb-0'>Once the ISO Registrar finds the existing gaps in the Company, the applicant has to prepare a proper action plan to eliminate such gaps and it should contain the list of all the required tasks to be performed to meet the QMS.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Onsite Audit:</h3>
            <p className='mb-0'>After above steps, the Registrar will conduct a physical onsite Audit to review the changes made in the company, During the Audit, if the ISO Registrar finds something that doesn’t meet with the requirements of the ISO Standards, Registrar finds the severity & issue findings. Audit findings are generally known as non-conformities & fall into one of 2 categories one is Minor Non-Conformance and second is Major Non-Conformance.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: Final Audit:</h3>
            <p className='mb-0'>The ISO Registration cannot proceed further until all vital non-conformities are closed & examined by the ISO Registrar. This generally includes re-audit of the affected parts and the associated costs.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7: Obtain ISO Certificate:</h3>
            <p className='mb-0'>After all the above steps, non-conformities are addressed & all the findings are updated in the Audit Report, then the ISO Registrar will issue the Certificate.</p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>Step 8: Surveillance Audits:</h3>
            <p className='mb-0'>This Audit will be conducted mainly to ensure that the Company is properly maintaining the ISO Standards and it will be performed from time to time.</p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: File an Application:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Examination of all the Documents:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 3: Pre-Assessment:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Prepare a Proper Action Plan:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 5: Onsite Audit:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Final Audit:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 7: Obtain ISO Certificate:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 8: Surveillance Audits:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
  
}
