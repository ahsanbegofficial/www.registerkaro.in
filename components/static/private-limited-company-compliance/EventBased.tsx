import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-limited-company-compliance/event_based_compliance.svg'
interface HeroProps {
    cityName: string;
}
export const EventBased = ({ cityName }: HeroProps) => {
  return (
    <div id='EventBased'>
      <p className='main-para mb-1'> Following is the list of event-based compliance for Private Limited Company:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      
     
       <div className='flex-5 pt-5'>
          <p><strong>1: </strong>Change in the company’s authorized capital or the paid-up capital of the company;</p>
          <p><strong>2: </strong>Allotment of new shares or transfer of new shares;</p>
          <p><strong>3: </strong>Giving loans to other companies;</p>
          <p><strong>4: </strong>Giving loans to directors;</p>
          <p><strong>5: </strong>Appointment of managing/whole-time Director & their payment;</p>
          <p><strong>6: </strong>When a bank account is opened or closed, or there is a change in the signatories of a bank account.</p>
          <p><strong>7: </strong>If there is an appointment/change of the statutory auditors of the company.</p>
           </div>
           <div className='flex-5'>
          <Image alt="Event-Based Compliance for Private Limited Company" className="EventBased-img w-100" height={350} loading="lazy" src={bft} />
          </div>
        </div>
        <p className='main-para'><strong>Note: </strong>It is vital to file different forms with the Registrar for all such events within a specific period. In case of missing out on this, additional fees/penalties might be levied. Therefore, it is vital to meet such compliance on time.</p>
      </div>
  )
}
