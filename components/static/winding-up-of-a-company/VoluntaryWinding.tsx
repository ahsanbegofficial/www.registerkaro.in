import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/benefit.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const VoluntaryWinding = ({ cityName }: HeroProps) => {
  return (
    <div >
        <p className='main-para mb-0'id='VoluntaryWinding'>The process for a company’s board of directors to voluntarily wind it up is as follows:</p>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
    
      <div className='flex-7'>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A resolution regarding winding up must first be passed by the company’s general meeting;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The company’s solvency for all outstanding debts must be declared;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />An audit report on the company’s financial statements must be prepared by the auditor;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The auditor’s report and the declaration of solvency must be submitted to the Registrar of Companies (ROC).</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The company must designate a liquidator for the winding up process; and </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The winding up process begins on the date that the resolution was passed.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The company must then pass the resolution by a majority.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The liquidator then prepares the report and calls a general meeting to declare the company’s final accounts prior to the wind-up process;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The board of directors then passes the resolution;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The liquidator then sends a copy of the report to the Tribunal and a copy of the statements to the ROC;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Tribunal then reviews the report and issues an order to conclude the winding-up process;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Within thirty (30) days of the Tribunal’s order being passed, the liquidator is required to send a copy of the order to ROC. The liquidator will be subject to sanctions if they fail to comply with this.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />If the ROC is satisfied, it authorizes the company’s winding up and, in the end, removes the applicant company’s name from the Registrar of Companies. </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Subsequently, ROC notifies the {cityName}n Official Gazette to publish the notification.</li>
        
        </ul>
      </div>
      <div className='flex-4 justify-content-center'>
        <Image alt="Voluntary winding up a company,Subsequently, ROC notifies the {cityName}n Official Gazette to publish the notification.,days of the Tribunal’s order being passed, the liquidator is required to send a copy of the order to ROC. The liquidator will be subject to sanctions if they fail to comply with this" className="VoluntaryWinding-img w-100" height={382} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
}