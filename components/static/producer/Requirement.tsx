import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/nidhi-reg/Requirements.svg'

export const Requirement = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Benefits'>
       <div className='flex-5'>
          <Image alt="Private Limited Company sample" className="benefits-img w-100" height={600} loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
        <p>Checklist for the Registration of Producer Company</p>
        <p>Following are some checklist for Producer Company Registration in India:</p>
        <ol>
          <li>Minimum 10 members are required for the Registration in India;</li>
          <li>A minimum capital of Rs. 5 lakhs required;</li>
          <li>Out of 10 members, at least 5 Directors are required;</li>
          <li>This Company can be established by the joining of at least 2 Institutions;</li>
          <li>Producer Company cannot be converted into a Public Limited Company.</li>
        </ol>
      </div>
    </div>
  )
}
