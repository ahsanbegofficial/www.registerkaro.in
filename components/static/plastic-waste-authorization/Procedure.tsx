import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/plastic-waste-authorization/procedure.svg'
interface HeroProps {
    cityName: string;
}
export const Procedure = ({ cityName }: HeroProps)  => {
  return (
    <div id='Procedure'>
     <p className='main-para mb-2'>The procedure for plastic waste authorization involves the following steps:</p>
    <div className='Procedure flex w-80 m-auto mobile-flex-column' >
    <div className='flex-4 mt-5'>
          <Image alt="What is the procedure for Plastic Waste Authorization?" className="Procedure-img w-100" height={470} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1: </strong>The applicant has to submit an online application form along with the necessary documents, such as the certificate of incorporation, the proof of ownership or lease of the premises, the details of the machinery and equipment, the environmental management plan, the consent to establish and operate, etc.</p>
      <p><strong>2: </strong>The SPCB or UTPCC will verify the application and the documents and conduct an inspection of the premises to assess the suitability and capacity of the applicant.</p>
      <p><strong>3: </strong>The SPCB or UTPCC will issue the authorization or reject the application within 120 days of the receipt of the complete application.</p>
      <p><strong>4: </strong>The authorization is valid for a period of five years from the date of issue and can be renewed for another five years by submitting a renewal application at least 120 days before the expiry of the authorization.</p>
      <p><strong>5: </strong>The authorization holder has to comply with the conditions and terms of the authorization, such as maintaining records and registers, submitting annual returns, following the best practices and norms, etc.</p>
      </div>
     
     </div>
      </div>
  )
}
