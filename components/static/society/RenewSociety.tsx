import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/society-registration/when_to_renew_society_registration.svg'
interface HeroProps { cityName: string;}
export const RenewSociety = ({ cityName }: HeroProps) => {
  return (
    <div>
   <p className='main-para'>Society Registration certificate is subject to renewal depending on the state and sometimes the kind of society you have registered. In order to renew the registration certificate, you need to keep following things in mind:</p>
    <div className='Checklist flex w-80 m-auto mobile-flex-column' id='RenewSociety'>
  
   <div className='flex-5'>
  
     <p><strong>1: </strong>The Memorandum of Association of the society along with Rules & Regulations of society must be signed by every establishing member, witness by Gazetted Officer, Notary Public, Chartered Accountant, Oath Commissioner, Advocate, Magistrate first-class or Chartered Accountant with their official stamping and complete address.</p>
     <p><strong>2: </strong>The memorandum must contain the name of the society, the object of the society. Also, it consists of details of members of the society registration along with their names, addresses, designations, and occupations. The following document has to be prepared, submitted and signed for the sake of registration</p>
     <p><strong>3: </strong>Requesting society registration by providing covering letter, signed by all establishing members.</p>
   </div>
   <div className='flex-5'>
       <Image alt="When to Renew Society Registration Certificate in India?" className="RenewSociety-img w-100" height={450} loading="lazy" src={bft} />
   </div>
   </div>
   </div>
  )
}
