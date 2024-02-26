import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/producer/advantages.svg'

export const Benefits = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Benefits'>
       <div className='flex-5'>
          <Image alt="Some advantages of Producer Company Registration" className="benefits-img w-100" height={600} loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
        <p>Following are some advantages of Producer Company Registration:</p>
        <p><strong>1. Separate Legal Entity:</strong></p>
        <p>It’s a separate legal entity which means it can acquire assets & incur debts in its own name and the Directors of the Company have no obligation to the lender of the Company.</p>
        <p><strong>2. 100% Income Tax Exemption:</strong></p>
        <p>In India, the Producer Company is exempted from paying Income Tax.</p>
        <p><strong>3. Loan Facility to Members:</strong></p>
        <p>Producer Company can extend the financial & credit facility to its members.</p>
        <p><strong>4. More Credibility:</strong></p>
        <p>This is offered to the registered companies as compared to the non-registered ones.</p>
        <p><strong>5. Ease in Management:</strong></p>
        <p>The applicant can make desired alterations in the Board of Management by filing some simple form with regards to the ROC.</p>
      </div>
    </div>
  )
}
