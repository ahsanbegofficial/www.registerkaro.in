import Image from 'next/image'
import React from 'react'
import pvtReg from '../../../assets/images/opc-reg/opc-reg.svg'

export const OPCReg = () => {
  return (
    <div className='opcReg flex w-80 m-auto mobile-flex-column-reverse' id='Features'>
      <div className='flex-7'>
        <p>Following are some important features of One Person Company in India:</p>
        <p><strong>1. Simple Succession:</strong></p>
        <p>Despite the fact that the company’s everyday operations are managed by a single person, OPC offers opportunities for eternal succession. Following the death of a company member, the nominee can administer the business.</p>
        <p><strong>2. Limitation of Liability:</strong></p>
        <p>A one-person company member has limited liability. Because OPC is a registered corporation, it is treated as a separate legal entity, providing its members with greater protection. Members’ liability is restricted to their shares, therefore they are not accountable for any losses incurred by the firm. In the event of bankruptcy, creditors may sue the corporation rather than the director for procuring the company’s debt.</p>
        <p><strong>3. Shareholder and sole directorship:</strong></p>
        <p>In a One Person Company, a single member serves as a director and is responsible for managing the company’s day-to-day operations. There is no need for an executive director to oversee daily operations in this situation. A single member is more than adequate and serves as a shareholder with full responsibility.</p>
        <p><strong>4. Ownership of Real Estate:</strong></p>
        <p>Because the OPC is considered a separate legal organisation, the individual has the ability to possess company property and other assets in their name. Other people cannot claim the properties, which include machinery factories, residential property, structures, and other assets. The OPC has the legal authority to acquire land directly in its name.</p>
      </div>
      <div className='flex-3'>
        <Image alt="some important features of One Person Company in India" className="opcReg-img w-100" height={382} loading="lazy" src={pvtReg}/>
      </div>
    </div>
  )
}