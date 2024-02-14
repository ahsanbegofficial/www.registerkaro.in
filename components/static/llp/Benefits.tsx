import Image from 'next/image'
import React from 'react'
import benefit from '../../../assets/images/llp-reg/benefit.svg'

export const Benefits = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Benefits'>
      <div className='flex-5'>
        <Image alt="Five primary benefits of online LLP Registration in India" className="benefits-img w-100" height={600} loading="lazy" src={benefit} />
      </div>
      <div className='flex-5'>
        <p>The following are the benefits of LLP Registration in India:</p>
        <p><strong>1. Low Cost and Less Compliance:</strong></p>
        <p>The overall cost of establishing a Limited Liability Partnership is low compared to the cost of registering a Private or Public Limited Company in India. The compliances to be followed by the LLP are also low. The LLP needs to file only 2 Statements yearly (i.e., an Annual Return and a Statement of Accounts and Solvency.</p>
        <p><strong>2. Liabilities are limited:</strong></p>
        <p>Limited Liability Partnership provides a limited liability benefit to all the designated partners. In case of s business insolvency or loss, the partners’ liability is restricted to the capital contribution as per the LLP agreement. Moreover, one partner is not held responsible for the actions of negligence/misconduct of any other partner.</p>
        <p><strong>3. Separate Legal Existence:</strong></p>
        <p>Just like a Company, an LLP has a separate legal entity. The Limited Liability Partnership is different from its partners. An LLP in India can sue & be sued in its own name. The Contracts are signed in the name of the Limited Liability Partnership (LLP) which helps to gain the trust of various stakeholders & gives the customers and suppliers a sense of confidence in the business.</p>
        <p><strong>4. Tax Benefits:</strong></p>
        <p>It is also exempted from various taxes like DDT (Dividend Distribution Tax) & Minimum Alternative Tax. The tax rate on LLP is less than that of the Company.</p>
        <p><strong>5. No Minimum Capital:</strong></p>
        <p>For the LLP formation in India, no minimum capital is required. No minimum capital contribution is required from partners. An LLP can be incorporated even with Rs. 2000 as a total capital contribution.</p>
      </div>
    </div>
  )
}
