import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/sole-proprietorship/Benefits.svg'

export const Benefits = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Benefits'>
       <div className='flex-5'>
          <Image alt="The benefits of Sole Proprietorship in India and these are Ease of Dissolution, Very Less Compliance, Sole Beneficiary of Profits, Quick Decision, Complete Control over the Business" className="benefits-img w-100" height={800} loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
        <p>The following are the benefits of Sole Proprietorship in India:</p>
        <p><strong>1. Ease of Dissolution:</strong></p>
        <p>Just like it is easy to start a Sole Proprietorship in India, you can also easily dissolve, sell, or terminate the same because you aren’t required to fulfil any legal formalities like obtaining TDS. Moreover, you can easily sell the assets of the Sole Proprietorship Company or Firm to a person or an association.</p>
        <p><strong>2. Very Less Compliance:</strong></p>
        <p>This type of business can be started very easily by just a single person. There is minimum compliance that needs to be adhered to get it registered. This type of business is economical as it is very less expensive as compared to a Company or LLP.</p>
        <p><strong>3. Sole Beneficiary of Profits:</strong></p>
        <p>One of the main advantages of a Sole Proprietorship is that the owner of the proprietorship is entitled to all the profits getting from the business. Unlike other business structures in India where profits are shared among shareholders or partners, the Proprietor retains complete ownership.</p>
        <p><strong>4. Quick Decision:</strong></p>
        <p>In a Sole Proprietorship, the business owner takes all the decisions and there is no consent required for any other person or individual. Hence, an owner of a proprietorship can normally make quick decisions regarding their business affairs.</p>
        <p><strong>5. Complete Control over the Business:</strong></p>
        <p>The single owner of the Proprietorship will have complete control over the business. The owner will look after all the business aspects. Since only one person is controlling the business, confidentiality can be maintained.</p>
      </div>
    </div>
  )
}
