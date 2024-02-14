import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/pvt-reg/documents.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocumentRequired = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Documents'>
      <div className='flex-7'>
        <p>Following is the list of all the vital documents required for the Registration of Producer Company in India:</p>
        <h3>Documents of the applicant:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Latest passport-size photos;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN Card;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity Proof;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address Proof;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Producer Activity Proof.</li>
        </ul>
        <h3>Premises Documents:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Proof of Registered Office Address;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />NOC from the owner;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Rent Agreement or Property Documents;</li>
        </ul>
        <h3>Other Legal Drafts:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Consent of Directors in Form DIR-2;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Signed Subscriber Sheet;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Questionnaire for Registration;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Specimen Signature of Directors.</li>
        </ul>
      </div>
      <div className='flex-3'>
        <Image alt="list of documents for producer company registration in india that is passport size photos, PAN card, identity proof, address proof, producer activity proof, premises documents such as utility bills, NOC, rent agreement, and other legal drafts" className="DocumentRequired-img w-100" loading="lazy" src={documents} height={430}/>
      </div>
    </div>

  )
}