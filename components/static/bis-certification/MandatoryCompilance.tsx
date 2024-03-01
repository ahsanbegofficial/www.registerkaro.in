
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps {
  cityName: string;
}
export const MandatoryCompilance = ({ cityName }: HeroProps)  => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }


  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCompilance'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>The BIS Certification process involves both licensing and surveillance. Here are the steps for each:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Licensing Process:</h3>
            <p className='mb-0'>
             Applicant fills the application form in the correct form as prescribed by BIS.
            </p>
            <p className='my-0'>
             Applications are submitted with all the required documents.
            </p>
            <p className='my-0'>
              A BIS Officer visits the applicant’s factory after receiving the application for a preliminary inspection.
            </p>
            <p className='my-0'>
             The BIS Officer examines the product samples.
            </p>
            <p className='mt-0'>
             After completing all evaluations, the BIS Officer prepares the final test report.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Surveillance Process:</h3>
            <p className='mb-0'>The examining authority visits the factory to testify to the test reports.
            </p>
            <p className='my-0'>BIS Officer sends the samples to the laboratory.
            </p>
            <p className='my-0'>The test report provides feedback or a brief on the inspection.
            </p>
            <p className='my-0'>A performance review report is prepared.
            </p>
            <p className='mt-0'>After examining all the reports, BIS issues the Certificate.
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
        </div>
      </div>
    </div>
  )
  
}
