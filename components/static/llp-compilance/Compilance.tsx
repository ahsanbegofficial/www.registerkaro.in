import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/llp-compliance/What_are_LLP_Second_Amendment.svg'

export const Compilance = () => {
  return (
    <div>
      <p className='main-para mb-2'>There are some vital changes have been made via LLP (Second Amendment) Rules, 2022, which are as follows:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Compilance'>
       <div className='flex-5'>
          <Image alt="What are LLP (Second Amendment) Rules, 2022?" className="WhatLLp-img w-100" height={350} loading="lazy" src={bft} />
      </div>

      <div className='flex-5 pt-5'>
     <p><strong>1: </strong>There can be 5 Partners instead of 2 Designated Partners (without having DIN) during Incorporation;</p>
     <p><strong>2: </strong>Limited Liability Partnerships shall be allotted their TAN & PAN along with the CoI (Certificate of Incorporation) itself;</p>
     <p><strong>3: </strong>For filing Consent of Partners, a web-based Form-9 shall be made;</p>
     <p><strong>4: </strong>The Statement of Account & Solvency shall now be signed on behalf of the LLP by its interim resolution professional;</p>
     <p><strong>5: </strong>All the LLP forms have now become web-based or online-based.</p>
      </div>
      </div>
      </div>
  )
}
