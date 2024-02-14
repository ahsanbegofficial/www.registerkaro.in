import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const ImportantPoints = () => {
  return (
    <div className='benefits flex w-80 m-auto' id='Benefits'>
      <div className='w-50'>
        <Image alt="Private Limited Company sample" className="benefits-img" loading="lazy" src={bft} />
      </div>
      <div className='w-50'>
        <p>Following are some vital points about Section 8 Company in India:</p>
        <ol>
          <li>NGOs in India can be registered under Registrar of Societies or as a Non-Profit entity under Section 8 Company of the Companies Act, 2013</li>
          <li>Compliance with Companies Act is compulsory for Section 8 Company, including Filing returns with the ROCs, maintaining books of accounts, & complying with GST and IT Act Regulations</li>
          <li>Section 8 Company in India cannot utilise profits for purposes other than charitable objectives & cannot distribute them among shareholders of the Company</li>
          <li>Any alterations to the Charter Documents like AoA & MOA require consent from the Government</li>
          <li>Section 8 Companies are identical to the former Section 25 Companies Under the Companies Act 1956 and now, they are recognized as such under the prevailing legislation</li>
        </ol>
      </div>
    </div>
  )
}
