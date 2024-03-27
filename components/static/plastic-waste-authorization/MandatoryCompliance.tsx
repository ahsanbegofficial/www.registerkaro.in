import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/plastic-waste-authorization/mandatory.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
    cityName: string;
}
export const MandatoryCompliance  = ({ cityName }: HeroProps)  => {
  return (
    <div  id='MandatoryCompliance'>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div>
        <p>The plastic waste authorization holder has to comply with the following mandatory compliance:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The authorization holder has to maintain records and registers of the plastic waste generated, processed, or recycled by them, such as the quantity, category, source, destination, mode of transportation, etc.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The authorization holder has to submit annual returns to the SPCB or UTPCC and the CPCB by the 31st day of January every year, containing the details of the plastic waste generated, processed, or recycled by them in the previous calendar year.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The authorization holder has to follow the standards and guidelines issued by the CPCB and the MoEFCC for plastic waste management, such as collection, storage, transport, processing, recycling, disposal, etc.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The authorization holder has to ensure the health and safety of the workers and the public involved in the plastic waste activities, such as providing personal protective equipment, training, medical check-ups, etc.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The authorization holder has to ensure environmental protection and pollution control during plastic waste activities, such as preventing the release of hazardous substances, minimizing waste generation, maximizing resource recovery, etc.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The authorization holder has to follow the best practices and norms for plastic waste management, such as extended producer responsibility, collection and channelization, segregation and transportation, etc.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}