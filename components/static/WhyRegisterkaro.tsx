import Image from 'next/image'
import React from 'react'
import expert from '../../assets/images/pvt-reg/expert.svg'
import starRating from '../../assets/images/pvt-reg/starRating.svg'
import assistance from '../../assets/images/pvt-reg/Assistance.svg'
import quick from '../../assets/images/pvt-reg/quick.svg'
import complete from '../../assets/images/pvt-reg/complete.svg'

export const WhyRegisterkaro = () => {
  return (
    <div className="WhyRegisterkaro flex mobile-flex-column" id='Why'>
      <div className="divs flex">
        <div>
          <Image height={125} width={125} src={expert} alt="250+ Experts" />
        </div>
        <p>250+ Experts</p>
      </div>
      <div className="divs flex">
        <div>
          <Image height={125} width={125} src={starRating} alt="Google Rating" />
        </div>
        <p>4.5* Google Rating</p>
      </div>
      <div className="divs flex">
        <div>
          <Image height={125} width={125} src={assistance} alt="Assistance" />
        </div>
        <p>24/7 Assistance</p>
      </div>
      <div className="divs flex">
        <div>
          <Image height={125} width={125} src={quick} alt="Quick and Easy Process" />
        </div>
        <p>Quick and Easy Process</p>
      </div>
      <div className="divs flex">
        <div>
          <Image height={125} width={125} src={complete} alt="Complete Online Process" />
        </div>
        <p>Complete Online Process</p>
      </div>
    </div>
  )
}
