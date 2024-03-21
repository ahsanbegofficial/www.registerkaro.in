import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/state-fssai-license-registration/Benefits_of.svg'


export const BenefitsOfState = () => {
  return (
    <div id='BenefitsOfState'>
      <p className='main-para'>The following are the benefits of State FSSAI License Registration:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
          <div className='flex-6 mt-4'>
          <p>Builds significant brand recognition among target end-users and the general public.</p>
          <p>Increases a company’s creditworthiness.</p>
          <p>Allows a company to attract more customers.</p>
          <p>It Provides legal stability that unregistered rivals do not.</p>
          <p>Assists the business owner in implementing best practices to ensure food safety.</p>
          </div>
          <div className='flex-4'>

          <Image alt="Benefits of State FSSAI License Registration" className="Benefits-img w-100" height={300} loading="lazy" src={bft} />

          </div>
      </div>
    </div>
  )
}
