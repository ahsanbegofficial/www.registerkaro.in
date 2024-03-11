import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-crs-certifiaction/BIS_CRS_Certification_Process-Step_Guide.svg'
interface HeroProps {  cityName: string;}
export const EventBased = ({ cityName }: HeroProps)  => {
  return (
    <div id='EventBased'>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
     
      <div className='flex-7 pt-5'>
      <p><strong>1: Product Identification (Step 1): </strong>To initiate the BIS CRS Certification, begin by identifying your product and obtaining its ISI number, as detailed in the provided table.</p>
      <p><strong>2: Testing Sample Submission (Step 2):</strong>Following product identification, submit a testing sample to a BIS certified laboratory for thorough examination and evaluation.</p>
      <p><strong>3: Application Filing (Step 3): </strong>Once the testing phase is completed, proceed to file and submit the application along with all requisite documents and test reports.</p>
      <p><strong>4: Document Submission (Step 4): </strong>After compiling all necessary documents and submitting the application, the next step involves the submission of the complete set to BIS.</p>
      <p><strong>5: Application Review and Approval (Step 5): </strong>BIS will rigorously examine the submitted application and accompanying documents. Upon their satisfaction with the application, the final step involves the issuance of the BIS CRS Certification Certificate.</p>
      </div>
      <div className='flex-4 mt-2'>
          <Image alt="BIS CRS Certification Process: A Step-by-Step Guide" className="Process-img w-100" height={450} loading="lazy" src={bft} />
      </div>
     </div>
      <p className='main-para'>This streamlined procedure ensures a systematic approach to BIS CRS Certification, from product identification to the issuance of the coveted registration certificate.</p>
      </div>
  )
}
