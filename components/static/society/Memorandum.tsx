import Image from 'next/image'
import bft from '../../../assets/images/static/society-registration/memorandum_of_association.svg'
import React from 'react'
interface HeroProps { cityName: string;}
export const Memorandum = ({ cityName }: HeroProps) => {
  return (
    <div className='Checklist flex w-80 m-auto mobile-flex-column-reverse' id='Memorandum'>
      
      <div className='flex-5'>
      <p>Following are some checklist for Society Registration in {cityName}:</p>
        <p><strong>1: </strong>The Memorandum of Association of the society along with Rules & Regulations of society must be signed by every establishing member, witness by Gazetted Officer, Notary Public, Chartered Accountant, Oath Commissioner, Advocate, Magistrate first-class or Chartered Accountant with their official stamping and complete address.</p>
        <p><strong>2: </strong>The memorandum must contain the name of the society, the object of the society. Also, it consists of details of members of the society registration along with their names, addresses, designations, and occupations. The following document has to be prepared, submitted and signed for the sake of registration</p>
        <p><strong>3: </strong>Requesting society registration by providing covering letter, signed by all establishing members.</p>
        <p><strong>4: </strong>Duplicate copy of Memorandum of Association of society along with certified copy.</p>
        <p><strong>5: </strong>Duplicate copy of Rules & Regulations of society along with duplicate copy duly signed by all establishing members.</p>
        <p><strong>6: </strong>Address proof of registered office of society as well as no-objection certificate (NOC) issued by landlord.</p>
        <p><strong>7: </strong>Affidavit avowed by secretary or president of society declaring relationship among subscribers</p>
        <p><strong>8: </strong>Few minutes of meeting regarding the society registration along with providing some essential documents.</p>
      </div>
      <div className='flex-5'>
          <Image alt=" The Memorandum of Association of the society along with Rules & Regulations of society must be signed by every establishing member, witness by Gazetted Officer, Notary Public," className="Memorandum-img w-100" height={650} loading="lazy" src={bft} />
      </div>
    </div>
  )
}
