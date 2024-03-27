import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/plastic-waste-authorization/Requirements_for_Authorization.svg'
interface HeroProps {
    cityName: string;
}
export const RequirementsAuthorizationRules = ({ cityName }: HeroProps)  => {
  return (
    <div id='RequirementsAuthorizationRules'>
     <p className='main-para mb-2'>The requirements for authorization vary depending on the type and capacity of the plastic waste activities undertaken by the entity. However, some of the common requirements are:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-3'>
          <Image alt="Requirements for Authorization" className="RequirementsAuthorizationRules-img w-100" height={550} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1: </strong>The entity must have a valid certificate of incorporation or registration.</p>
      <p><strong>2: </strong>The entity must have a proof of ownership or lease of the premises where the plastic waste activities are carried out.</p>
      <p><strong>3: </strong>The entity must have the necessary machinery and equipment for collection, storage, transport, processing, or recycling of plastic waste.</p>
      <p><strong>4: </strong>The entity must have an environmental management plan, including the measures for pollution control, waste disposal, health and safety, etc.</p>
      <p><strong>5: </strong>The entity must have a consent to establish and operate from the SPCB or UTPCC.</p>
      <p><strong>5: </strong>The entity must comply with the standards and guidelines issued by the CPCB and the MoEFCC for plastic waste management.</p>
      <p><strong>5: </strong>The entity must maintain records and registers of the plastic waste generated, processed, or recycled by it.</p>
      <p><strong>5: </strong>The entity must submit annual returns to the SPCB or UTPCC and the CPCB.</p>
      </div>
     </div>
      </div>
  )
}
