import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/fssai/DocsRequire.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const DocsREquired = ({ cityName }: HeroProps) => {
  return (
    <div >
        <p className='main-para mb-0'id='DocsREquired'>Following is the list of crucial documents required for FSSAI Registration in {cityName}:</p>
      <div className='flex justify-content-center'>
        <Image alt="Documents Required for FSSAI Registration" className="DifferentTypes-img w-100" height={482} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
         <h3>1. Documents for FSSAI Basic Registration:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Identity proof of the FBOs" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity proof of the FBOs;</li>
          <li><Image alt="usiness Certificate such as Certificate of Incorporation" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Business Certificate such as Certificate of Incorporation, Shop & Establishment License, Partnership Deed or other Business Registration Certificate;</li>
          <li><Image alt="FSMS or Food Safety Management System Plan" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />FSMS or Food Safety Management System Plan;</li>
          <li><Image alt="Details of Bank Account" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details of Bank Account;</li>
          <li><Image alt="Possession proof of the business premises" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Possession proof of the business premises i.e., No Objection Certificate, Rental Agreement from the owner of the rented premises, utility bills, etc.;</li>
          <li><Image alt="List of food items processed or manufactured" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />List of food items processed or manufactured.</li>
        </ul>
        <h3>2. Apart from the basic documents mentioned above, there are certain specific documents required for FSSAI State License:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Duly filled & signed Form-B" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Duly filled & signed Form-B;</li>
          <li><Image alt="Name & list of machinery and equipment used with the number & installed capacity" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Name & list of machinery and equipment used with the number & installed capacity;</li>
          <li><Image alt="Report analysis of water to be used in the process to confirm the portability" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Report analysis of water to be used in the process to confirm the portability;</li>
          <li><Image alt="List of Partners or Directors or Proprietors with complete address, photo id & contact details" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />List of Partners or Directors or Proprietors with complete address, photo id & contact details;</li>
          <li><Image alt="Processing unit plan showing the dimensions & operation-wise area allocation" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Processing unit plan showing the dimensions & operation-wise area allocation;</li>
          <li><Image alt="Letter of Authority from the manufacturer nominated a responsible person’s name & address" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Letter of Authority from the manufacturer nominated a responsible person’s name & address;</li>
          <li><Image alt="A copy of a certificate obtained under the Coop Act 1861 or Multi-State Coop Act 2002" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of a certificate obtained under the Coop Act 1861 or Multi-State Coop Act 2002.</li>
        </ul>
        <h3>3. Apart from basic documents, the following is the list of documents required for the FSSAI Central License:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Duly filled & signed Form-B" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Duly filled & signed Form-B;</li>
          <li><Image alt="Name & list of machinery and equipment used with the number & installed capacity" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Name & list of machinery and equipment used with the number & installed capacity;</li>
          <li><Image alt="Report analysis of water to be used in the process to confirm the portability" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Report analysis of water to be used in the process to confirm the portability;</li>
          <li><Image alt="List of Partners or Directors or Proprietors with complete address" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />List of Partners or Directors or Proprietors with complete address, photo id & contact details;</li>
          <li><Image alt="Processing unit plan showing the dimensions & operation-wise area allocation" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Processing unit plan showing the dimensions & operation-wise area allocation;</li>
          <li><Image alt="Letter of Authority from the manufacturer nominated a responsible person’s name & address" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Letter of Authority from the manufacturer nominated a responsible person’s name & address;</li>
          <li><Image alt="Source of raw material for meat" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Source of raw material for meat, milk, etc.;</li>
          <li><Image alt="IEC document issued by DGFT" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />IEC document issued by DGFT;</li>
          <li><Image alt="Form IX" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Form IX;</li>
          <li><Image alt="Ministry of Commerce Certificate for 100% EOU" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Ministry of Commerce Certificate for 100% EOU;</li>
          <li><Image alt="Supporting documents for proof of turnover & transportation" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Supporting documents for proof of turnover & transportation;</li>
          <li><Image alt="Declaration Form" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Declaration Form;</li>
          <li><Image alt="PA/NOC documents issued by FSSAI" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PA/NOC documents issued by FSSAI;</li>
          <li><Image alt="Recall plans whenever required" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Recall plans whenever required.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}