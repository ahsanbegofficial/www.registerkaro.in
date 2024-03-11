import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-crs-certifiaction/implementation.svg'

interface HeroProps {  cityName: string;}
export const OtherAnnual = ({ cityName }: HeroProps)  => {
  return (
    <div id='OtherAnnual'>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
     
      <div className='flex-7 pt-5'>
      <p><strong>1: Surveillance Cost Collection:</strong>The initial step involves the collection of the surveillance cost, a crucial element to support the surveillance activities.</p>
      <p><strong>2: Packaging, Transportation, and Sample Submission:</strong>Following cost collection, the process entails meticulous packaging, secure transportation, and the submission of samples to either BIS or BIS certified laboratories.</p>
      <p><strong>3: Refund Procedures (Cancellation or Expiry):</strong>In the event of the cancellation or expiry of BIS CRS Certification, the procedure includes the initiation of refund processes as applicable.</p>
      <p><strong>4: Surveillance Cost Revision by BIS:</strong>BIS undertakes the crucial step of revising the surveillance cost as deemed necessary during the surveillance process.</p>
      <p><strong>5: Sample Drawl:</strong>The drawl of samples is a pivotal stage, involving the careful selection and extraction of representative samples for comprehensive evaluation.</p>
      <p><strong>6: Final State of Surveillance:</strong>The surveillance process reaches its final state, encompassing a comprehensive assessment of the collected samples and associated data.</p>
      <p><strong>7: Disposal of Samples or Remnants:</strong>The concluding step involves the responsible disposal of samples or any remnants, ensuring adherence to environmental and regulatory standards.</p>
     
      </div>
      <div className='flex-4 mt-2'>
          <Image alt="Implementation Steps for Surveillance Process" className="Implementation-img w-100" height={700} loading="lazy" src={bft} />
      </div>
     </div>
    </div>
  )
}
