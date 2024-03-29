import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const Benefits = () => {
  return (
    <div className='benefits flex w-80 m-auto' id='Benefits'>
       <div className='w-50'>
          <Image alt="Private Limited Company sample" className="benefits-img" loading="lazy" src={bft} />
      </div>
      <div className='w-50'>
        <p>The following are the benefits of Nidhi Company Registration:</p>
        <p><strong>1. Capital Requirement:</strong></p>
        <p>As per Nidhi Rules, 2014, the minimum capital requirement for Nidhi Company Registration in India is Rs. 10 lakhs only.</p>
        <p><strong>2. Encourages Savings:</strong></p>
        <p>It aids in the development of the habit of saving and thrifting among its members.</p>
        <p>There is no <strong>outside involvement</strong> because it is not governed by any trusts or committees. It is an investing feature that the investors possess. Nidhi funds are thus governed by their members. </p>
        <p><strong>3. Borrowings:</strong></p>
        <p>A member can borrow money at a lower interest rate than a bank and with fewer responsibilities.</p>
        <p><strong>4. Uninterrupted Operations:</strong></p>
        <p>The normal operations of a Nidhi Company Registration are not uninterrupted even at the death, insanity, insolvency, or retirement of any member. However, the Nidhi Company will remain in operation irrespective of any such inevitable change in any type of membership.</p>
      </div>
    </div>
  )
}
