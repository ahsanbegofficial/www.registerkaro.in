import Image from 'next/image'
import React from 'react'
import procedure from '../../../assets/images/static/opc-reg/procedure.svg'

export const Procedure = () => {
  return (
    <div className='Procedure flex w-80 m-auto  mobile-flex-column-reverse' id='Procedure'>
      <div className='flex-7'>
        <p>Following is the procedure for One Person Company Registration in India:</p>
        <p><strong>Step 1:</strong></p>
        <p>Despite the fact that the company’s everyday operations are managed by a single person, OPC offers opportunities for eternal succession. Following the death of a company member, the nominee can administer the business.</p>
        <p><strong>Step 2:</strong></p>
        <p>A one-person company member has limited liability. Because OPC is a registered corporation, it is treated as a separate legal entity, providing its members with greater protection. Members’ liability is restricted to their shares, therefore they are not accountable for any losses incurred by the firm. In the event of bankruptcy, creditors may sue the corporation rather than the director for procuring the company’s debt.</p>
        <p><strong>Step 3:</strong></p>
        <p>In a One Person Company, a single member serves as a director and is responsible for managing the company’s day-to-day operations. There is no need for an executive director to oversee daily operations in this situation. A single member is more than adequate and serves as a shareholder with full responsibility.</p>
        <p><strong>Step 4:</strong></p>
        <p>Because the OPC is considered a separate legal organisation, the individual has the ability to possess company property and other assets in their name. Other people cannot claim the properties, which include machinery factories, residential property, structures, and other assets. The OPC has the legal authority to acquire land directly in its name.</p>
        <p><strong>Step 5:</strong></p>
        <p>The ROC issues a certificate of incorporation with a PAN and TAN.</p>
        <p><strong>Step 6:</strong></p>
        <p>Open a bank account and get your business started.</p>
        <p>The entire procedure of OPC Registration can be finished in only 20 days. All you have to do is contact RegisterKaro and complete the process as soon as possible.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Procedure for One Person Company Registration" className="Procedure-img w-100" height={482} loading="lazy" src={procedure} />
      </div>
    </div>
  )
}