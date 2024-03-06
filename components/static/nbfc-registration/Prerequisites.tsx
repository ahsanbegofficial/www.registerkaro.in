import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/static/nbfc-registration/prerequisites_for_NBFC_Registration.svg'

interface HeroProps {
  cityName: string;
}

export const Prerequisites = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' id='Prerequisites'>
       <div className='flex-3'><Image alt="Prerequisites for NBFC Registration
        In order to register your company as an NBFC under the RBI Act 1934, there are following prerequisites to be fulfilled for the successful incorporation:" className="Prerequisites-img w-100" loading="lazy" height={600} src={ProcedureReg} /></div>
      <div className='flex-5'>
        <p>In order to register your company as an NBFC under the RBI Act 1934, there are following prerequisites to be fulfilled for the successful incorporation:</p>
        <p><strong>1:</strong>The company must be registered in accordance with the Company Act of 1956 defining that it satisfies all the requisites of that of a company.</p>
        <p><strong>2:</strong>The minimum net owned fund of the company shall be at least Rs 2,00,00,000. However, the minimum requirement for the specialized category like NBFC-MFIs, NBFC-Factors, CICs is different.</p>
        <p><strong>3:</strong>The minimum net asset owned under the company’s name must be at least Rs 200 Crores.</p>
        <p><strong>4:</strong>A five-year detailed plan to be drafted for the respective Company deemed to be registered as NBFC</p>
        <p><strong>5:</strong>Directors of the applicant organization must possess the necessary experience in banking and NBFC domains.</p>
        <p><strong>6:</strong>The company’s directors and shareholders must have good credit, and they must not have purposefully defaulted on loan payments to banks or NBFCs.</p>
        <p><strong>7:</strong>If an applicant company has received foreign investment, it must have conformed with the FEMA Act. All FDI from FATF member nations is permitted.</p>
      </div>
     
    </div>
  )
}