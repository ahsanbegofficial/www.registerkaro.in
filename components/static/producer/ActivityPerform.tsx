import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/producer/activites.svg'


export const ActivityPerform = () => {
  return (
    <div className='flex w-80 m-auto mobile-flex-column' id='ActivityPerform'>
        <div className='flex-3 ActivityPerform '>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={500}  loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
        <p>Following is the list of activities performed by a Producer Company in India:</p>
            <p><strong>1: </strong>Provide education to the mutual support principle to its members & others</p>
            <p><strong>2: </strong>Activities for the promotion of the interest of their members</p>
            <p><strong>3: </strong>Insurance of producers/their primary produce</p>
            <p><strong>4: </strong>Sale, supply, or manufacture of equipment, machinery, or consumables mainly to their members</p>
            <p><strong>5: </strong>Processing includes distilling, canning, preserving, brewing, packaging, drying & venting its members’ producer</p>
            <p><strong>6: </strong>Provide technical services, training, R&D, consultancy services & all other activities to promote its members’ interests</p>
            <p><strong>7: </strong>Promoting unique techniques of mutual & mutuality support</p>
            <p><strong>8: </strong>Financing of procurement, marketing, processing or other activities which comprise extending of the credit facilities or any other financial services to their members</p>
            <p><strong>9: </strong>Welfare measures/facilities for the members’ benefits as decided by the Board</p>
            <p><strong>10: </strong>Any other activity, similar to any of the actions which promote or encourage the principles of mutual support among the members in any different manner.</p> 

      </div>
    </div>
  )
}
