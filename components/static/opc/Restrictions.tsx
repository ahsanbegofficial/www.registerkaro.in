import Image from 'next/image'
import React from 'react'
import Restriction from '../../../assets/images/static/opc-reg/Restrictions.svg'

export const Restrictions = () => {
  return (
      <div className='Restrictions flex w-80 m-auto  mobile-flex-column-reverse' id='Restrictions'>
        <div className='flex-7'>
          <p>Despite its many advantages, starting a one-person business comes with a number of constraints.</p>
          <p><strong>1. Not Suitable for Scalability:</strong></p>
          <p>Registering your company as an OPC is an excellent choice for a small business structure. However, if you intend to expand it up to higher levels, this may not work. The total number of persons in an OPC at any given time is always one. You cannot register your company as a One Person Company if you intend to add more members and shareholders. As a result, OPC is unlikely to obtain additional cash. This will stifle corporate expansion and growth.</p>
          <p><strong>2. Increased Restriction on Commercial Activities:</strong></p>
          <p>One Person Company is not permitted to engage in non-banking financial investment operations under the rules and regulations. Registering as an OPC does not provide you the freedom to invest in the security of other corporations.</p>
          <p><strong>3. There is no distinct distinction between ownership and management:</strong></p>
          <p>Because a single person serves as both the company’s director and its management, there is no apparent boundary between the two jobs. All decisions must be made and approved by a single individual. As a result, there is a greater likelihood of unethical behavior.</p>
        </div>
        <div className='flex-3'>
          <Image alt="A list of all the restrictions applicable of One Person Company in India" className="Restrictions-img w-100" height={382} loading="lazy" src={Restriction} />
        </div>
      </div>
      )
}