
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
// import dft from '../../../assets/images/fssai/'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const MandatoryCompilance = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }


  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCompilance'>
        <div className='flex justify-content-center'>
        {/* <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={382} loading="lazy" src={dft} /> */}
        <p className='main-para mb-2'>Following is the complete procedure for FSSAI Registration in India:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Filing the Application Form:</h3>
            <p>
              First, the Food Business Operator can get FSSAI Registration online by simply filling & submitting the Form (Form-A for Basic Registration, Form-B for State & Central License) on the FoSCoS portal. The Food Business Operator can also file & submit the Form offline to the Department.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Documentation:</h3>
            <p>
              After filing the application form for the Registration/License, the documents must be uploaded to the portal.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Examination of application and Documents:</h3>
            <p>
              The form can be accepted or it may be rejected by the Food Department within 7 days from the date of receipt of FSSAI application either online or physically via the FoSCoS portal. If the FSSAI application is rejected it has to be intimated to the FBO in writing. Also, the department will examine the documents submitted.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Inspection of the Food Premises:</h3>
            <p>
              The Food Department may conduct a proper inspection of the food premises, before obtaining the FSSAI Certificate or License, if necessary.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Issuance of FSSAI Certificate:</h3>
            <p>
              If the Food Department is completely satisfied that the Food Business Operator meets all the criteria, then it will issue an FSSAI Certificate along with the Registration Number & the applicant’s photo and email id. Also, after getting the Certificate, all FBOs should display the Certificate at the premises during business hours.
            </p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Filing the Application Form</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Documentation</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Examination of application and Documents</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Inspection of the Food Premises</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Issuance of FSSAI Certificate</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
  
}
