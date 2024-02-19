import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/public-reg/documents.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

export const DocumentRequired = () => {
  return (
    <div className='DocumentRequired flex w-80 m-auto mobile-flex-column' id='DocumentRequired'>
      <div className='flex-4 DocumentRequired-img'>
        <Image alt="Documents Required for Public Limited Company Registration" className="DocumentRequired-img w-100" height={382} loading="lazy" src={documents} />
      </div>
      <div className='flex-7'>
        <p>Following is the list of all the vital documents for Public Limited Company Registration in India:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="Identity proof of all the Directors & Shareholders of the Company" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Identity proof of all the Directors & Shareholders of the Company</li>
          <li><Image alt="Address proof of all the Directors & Shareholders of the Company" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Address proof of all the Directors & Shareholders of the Company</li>
          <li><Image alt="AOA & MOA of the Company" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> AOA & MOA of the Company</li>
          <li><Image alt="DIN and DSC of all the Directors of the Company" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> DIN and DSC of all the Directors of the Company</li>
          <li><Image alt="NOC or No Objection Certificate from the landlord where the office will be located" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> NOC or No Objection Certificate from the landlord where the office will be located</li>
          <li><Image alt="Latest utility bills (not more than 2 months older) of the proposed registered office of the Company" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Latest utility bills (not more than 2 months older) of the proposed registered office of the Company</li>
        </ul>
      </div>
    </div>
  )
}