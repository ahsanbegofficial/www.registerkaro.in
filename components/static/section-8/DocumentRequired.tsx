import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/section-8-reg/Documents.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentRequired flex w-80 m-auto mobile-flex-column' id='Documents'>
      <div className='flex-4'>
        <Image alt="Documents Required for Section 8 Company Registration" className="DocumentRequired-img  w-100" loading="lazy" height={860} src={documents} />
      </div>
      <div className='flex-6'>
        <p>Following are some crucial documents required for Registration of Section 8 Company:</p>
        <h3>Identity/Address proof of Directors or Shareholders:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Passport size photographs of Directors/Shareholders" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Passport size photographs of Directors/Shareholders</li>
          <li><Image alt="Copy of DL or Voter ID" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Copy of DL or Voter ID</li>
          <li><Image alt="Copy of latest bank statement & utility bills" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Copy of latest bank statement & utility bills</li>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Copy of Aadhar Card</li>
          <li><Image alt="Copy of Passport (In case of NRI or Foreign National)" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Copy of Passport (In case of NRI or Foreign National)</li>
        </ul>
        <h3>Address proof of Registered Office:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Copy of latest electricity bill or water bill or gas bill (not older than 2 months)" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Copy of latest electricity bill or water bill or gas bill (not older than 2 months)</li>
          <li><Image alt="In case of rented office, Rent Agreement is required" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> In case of rented office, Rent Agreement is required</li>
          <li><Image alt="NOC from the property owner" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> NOC from the property owner</li>
        </ul>
        <h3>Other Documents:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="MoA & AoA" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> MoA & AoA</li>
          <li><Image alt="Consent of Nominee (INC-3)" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Consent of Nominee (INC-3)</li>
          <li><Image alt="DSC (Digital Signature Certificate)" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> DSC (Digital Signature Certificate)</li>
          <li><Image alt="Declaration by the 1st Director Subscriber" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Declaration by the 1st Director Subscriber (an affidavit is not required)</li>
          <li><Image alt="Copy of Incorporation Certificate of an overseas corporate body" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Copy of Incorporation Certificate of an overseas corporate body (if any)</li>
          <li><Image alt="A Resolution passed by the promoter company" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> A Resolution passed by the promoter company</li>
          <li><Image alt="Declaration of unregistered companies" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Declaration of unregistered companies</li>
          <li><Image alt="Residential & identity proof of subscribers & nominees" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Residential & identity proof of subscribers & nominees</li>
        </ul>
      </div>
    </div>
  )
}