import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/winding-up-of-a-company/who-tribunal.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const WhoCan = ({ cityName }: HeroProps) => {
  return (
    <div id='WhoCan' >
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>
     <div className='flex-4 justify-content-center'>
        <Image alt="Who can all file the petition for winding up of a Company by tribunal?  According to Section 272 of the Companies Act of 2013,  Before submitting the petition for the company to be wound up, the Registrar must first receive approval from the Central Government. Furthermore, before giving the Registrar such authorization, the Central Government must provide a reasonable opportunity to the company. The petition must be filed in copy form to the Registrar," className="WhoCan-img w-100" height={582} loading="lazy" src={dft} />
      </div>
      <div className='flex-7'>
         <p>1. According to Section 272 of the Companies Act of 2013, the following individuals may petition the Tribunal for winding up of a company::</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Company, as defined in Section 272(5) of the Companies Act;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Any creditor(s) or potential creditor(s) of the company; </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Any Contributors to that company, as defined in Section 272(3) of the Companies Act; </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Registrar.</li>
        </ul>
        <p>2. Before submitting the petition for the company to be wound up, the Registrar must first receive approval from the Central Government. Furthermore, before giving the Registrar such authorization, the Central Government must provide a reasonable opportunity to the company. The petition must be filed in copy form to the Registrar, who has sixty (60) days to review it and provide the Tribunal with his opinion.</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />By the Central Government or the State Government directly, if the company is operating against the interests of {cityName}’s sovereignty and integrity;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />By any individual that the Central Government grants permission to do so.</li>
        </ul>
      </div>
     
      </div>
    </div>
  )
}