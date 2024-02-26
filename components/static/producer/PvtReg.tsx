import Image from 'next/image'
import React from 'react'
import pvtReg from '../../../assets/images/pvt-reg/pvt-reg.svg'

export const PvtReg = () => {
  return (
    <div className='pvtReg flex w-80 m-auto mobile-flex-column-reverse' id='What'>
      <div className='flex-7'>
        <p>A common choice for new businesses is a private limited company, suitable for both small and large-scale enterprises. Initial capital can originate from the owner, family, or private equity sources. As businesses grow and require additional funds for expansion, they have the option to convert into a public limited company by offering shares on the stock exchange. Furthermore, companies can raise capital by issuing debt securities like bonds and medium-term notes. This transition allows them to access public investment and diversify their financial strategies. Private Limited Company holds certain distinctive features such as:</p>
        <p><strong>1. Owner</strong></p>
        <p>Owner in a private limited Company is known as a shareholder which should be 1 minimum and can extend maximum to 200. This shareholder can either be an individual, a trust, another entity, or a company.</p>
        <p><strong>2. Limited liability</strong></p>
        <p>The private limited company is limited in its liability, defining that the shareholders are protected against the liability of the company. As a result, when a company goes bankrupt, Shareholders and their personal assets are protected in the company’s debt recovery but only the capital invested in the company under their name is at risk.</p>
        <p><strong>3. Operation</strong></p>
        <p>A private company is operated by its board which is appointed by the shareholders of the company. The Board of Directors is responsible for all sorts of decision-making and functioning of the company. If required, a shareholder can also be a member of the Board as a Director.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Meaning of a Private Limited Company in India" className="w-100" height={382} loading="lazy" src={pvtReg}/>
      </div>
    </div>
  )
}