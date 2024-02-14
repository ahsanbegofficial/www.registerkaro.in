import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/section-8-reg/Advantages.svg'

export const Advantages = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Advantages'>
      <div className='flex-7'>
        <p>Following are the advantages of Section 8 Company Registration in India:</p>
        <p><strong>1. Separate Legal Entity:</strong></p>
        <p>These types of companies in India are considered as a separate legal entity, which means that they can own property, sue or be sued in their name, and enter into contracts.</p>
        <p><strong>2. More Trustworthy & Credibility:</strong></p>
        <p>Due to its non-profit nature, Section 8 Companies are often viewed as more credible & trustworthy than other types of Companies.</p>
        <p><strong>3. Nil Stamp Duty:</strong></p>
        <p>These Companies are exempted from paying stamp duty on their Registration Documents.</p>
        <p><strong>4. Minimum Share Capital:</strong></p>
        <p>These companies don’t have any minimum capital requirement.</p>
        <p><strong>5. No Minimum Capital is Required:</strong></p>
        <p>In India, Section 8 Companies do not have a minimum capital requirement and they can adjust their capital structure as per their growth and give them more flexibility.</p>
        <p><strong>6. Exemption to Donors:</strong></p>
        <p>Tax exemption is only allowed to the donations received by the Section 8 Company under Section 12A & 80G of the Income Tax Act.</p>
      </div>
      <div className='flex-3'>
          <Image alt="Private Limited Company sample" className="w-100" height={382} loading="lazy" src={bft} />
      </div>
    </div>
  )
}
