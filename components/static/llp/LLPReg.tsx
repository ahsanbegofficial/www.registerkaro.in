import Image from 'next/image'
import React from 'react'
import pvtReg from '../../../assets/images/static/private-reg/pvt-reg.svg'

export const LLPReg = () => {
  return (
    <div className='pvtReg flex w-80 m-auto mobile-flex-column-reverse' id='What'>
      <div className='flex-4'>
        <p>LLP or Limited Liability Partnership has become a popular form of organization among entrepreneurs in India. A Limited Liability Partnership  gives the benefits of a Company & a Partnership Firm. An LLP in India is a Partnership Firm established by at least 2 Partners who enter into an LLP Agreement. However, the LLP Partner have limited liability and the LLP has perpetual succession just like a Company.</p>
      </div>
      <div className='flex-6'>
        <Image alt="Two partners are joining together and establishing an LLP" className="LLPReg w-100" height={300} loading="lazy" src={pvtReg} />
      </div>
    </div>
  )
}