import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/nidhi-reg/requirements.svg'

export const Requirement = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Requirement'>
       <div className='flex-5'>
          <Image alt="vital requirements for Nidhi Company Registration" className="Requirement-img w-100" height={600} loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
        <p>The following are some vital requirements for Nidhi Company Registration in India:</p>
        <ol>
          <li>The Nidhi Company must have at least 200 members or shareholders before the end of the first year.</li>
          <li>The NOF should be greater than Rs. 10 lakhs.</li>
          <li>The NOF-to-deposit ratio should be more than 1:20.</li>
          <li>The amount of unencumbered term deposits shall not be less than 10% of the total amount of outstanding deposits.</li>
          <li>Nidhi can pay up to 12.5% interest on FDs and RDs and 6% on savings accounts.</li>
          <li>Nidhi has the ability to deposit up to 20 times the amount invested.</li>
          <li>Every year, it must file Annual Returns, Income Tax Returns, and Financial Statements.</li>
        </ol>
      </div>
    </div>
  )
}
