import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/pro-authorization/Eligibility.svg'
interface HeroProps {
    cityName: string;
}
export const Eligibility = ({ cityName }: HeroProps) => {
  return (
    <div id='Eligibility'>
     <p className='main-para mb-2'>The eligibility, pre-licensing and mandatory pre-requisites for obtaining PRO authorization are as follows:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
     
      <div className='padding-margin-top-0 flex-7 pt-5'>
      <p><strong>1: </strong>The applicant should be a legal entity registered under the Companies Act, 2013 or the Societies Registration Act, 1860 or the Indian Trusts Act, 1882 or any other relevant act.</p>
      <p><strong>2: </strong>The applicant should have a valid PAN card and GSTIN.</p>
      <p><strong>3: </strong>The applicant should have a minimum net worth of Rs. 10 crore as per the latest audited balance sheet.</p>
      <p><strong>4: </strong>The applicant should have a minimum experience of three years in the field of e-waste management or related activities.</p>
      <p><strong>5: </strong>The applicant should have a valid agreement or MoU with the producers for whom the PRO will take the responsibility of collecting and channelizing the e-waste.</p>
      <p><strong>6: </strong>The applicant should have a valid agreement or MoU with the registered collection centres, dealers, e-retailers, refurbishers, dismantlers and recyclers for the collection and channelization of e-waste.</p>
      <p><strong>7: </strong>The applicant should have a valid agreement or MoU with the State Pollution Control Boards or the Pollution Control Committees for the coordination and cooperation in the implementation of the E-Waste (Management) Rules, 2016.</p>
      <p><strong>8: </strong>The applicant should have a valid agreement or MoU with the authorized testing laboratories for the testing of e-waste for RoHS parameters.</p>
      <p><strong>9: </strong>The applicant should have a valid agreement or MoU with the authorized transporters for the transportation of e-waste as per the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016.</p>
      <p><strong>10: </strong>The applicant should have a valid agreement or MoU with the authorized treatment, storage and disposal facilities for the disposal of hazardous wastes generated from e-waste as per the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016.</p>
      </div>
      <div className='padding-margin-top-0 flex-4 mt-5'>
          <Image alt="Eligibility/ Pre-Licensing/ Mandatory Prerequisites" className="Eligibility-img w-100" height={650} loading="lazy" src={bft} />
      </div>
     </div>
      </div>
  )
}
