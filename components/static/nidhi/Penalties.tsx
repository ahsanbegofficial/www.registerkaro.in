import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/nidhi-reg/penalities.svg'

export const Penalties = () => {
  return (
    <div className='Penalties flex w-80 m-auto mobile-flex-column' id='Penalties'>
       <div className='flex-5'>
          <Image alt="Private Limited Company sample" className="Penalties-img w-100" height={382} loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
        <p>It is mandatory to complete all the compliances for every Nidhi Company. Non-Compliance attracts penalties for the Nidhi Companies:</p>
        <ol>
          <li>In case the Company doesn’t meet the compliance, the organisation & the concerned officers will be fined an amount up to Rs. 5000.</li>
          <li>In the case of repetition of infringement, the company will be fined Rs. 500/day.</li>
        </ol>
      </div>
    </div>
  )
}
