import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/epf-registration/What_is_EPFO_and_objectives.svg'

export const EventBased = () => {
  return (
    <div id='EventBased'>
     <p className='main-para mb-2'>EPFO stands for Employees’ Provident Fund Organisation and is a non-constitutional body that promotes employees to save funds for retirement and this organisation is governed by the Ministry of Labor & Employment, Government of India & was launched in 1951.</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      
      <div className='flex-7 pt-5'>
      <p><strong>The following are the objectives of EPFO in India:</strong></p>
      <p>1: To make sure that every employee has only 1 EPF Account;</p>
      <p>2: To ensure that online services are reliable and trustworthy & to make improvements in their facilities;</p>
      <p>3: Encouragement & promotion of voluntary compliance;</p>
      <p>4: Ensure that organisations follow all the rules & regulations laid out by the EPFO on a regular basis;</p>
      <p>5: Compliance must be provided easily;</p>
      <p>6: Claim settlements are to be reduced from 30 days to 3 days only;</p>
      <p>7: For all EPF member accounts to be accessed online easily.</p>
      </div>
      <div className='flex-4 '>
          <Image alt="What is EPFO and its objectives?" className="objectives-img w-100" height={500} loading="lazy" src={bft} />

      </div>
     </div>
      </div>
  )
}
