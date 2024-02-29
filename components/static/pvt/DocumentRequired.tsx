import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/private-reg/documents.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}
export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Documents'>
      <div className='flex-7'>
        <p>To continue with the successful private limited company registration, you will require the following documents required Private Limited Company Registration</p>
        <h3>Documents submitted by Directors and Shareholders</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Permanent Account Number" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Permanent Account Number</li>
          <li><Image alt="Governmental Identity Proof [Aadhar Card, Driving License, Voter ID]" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Governmental Identity Proof [Aadhar Card, Driving License, Voter ID]</li>
          <li><Image alt="Bank Statement" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Bank Statement</li>
          <li><Image alt="Passport Size Photographs" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Passport Size Photographs</li>
        </ul>
        <h3>Proof of registered office of the Company</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Utility Bills such as Electricity Bill, Gas bill, or any other utility bills (make sure it shouldn't older than 2 months)" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Utility Bills such as Electricity Bill, Gas bill, or any other utility bills (make sure it shouldn't older than 2 months)</li>
          <li><Image alt="No Objection Certificate from the property owner" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />No Objection Certificate from the property owner</li>
          <li><Image alt="In case of rented office, you need to submit Rent Agreement" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />In case of rented office, you need to submit Rent Agreement</li>
        </ul>
      </div>
      <div className='flex-3'>
        <Image alt="list of documents for private limited company registration in {cityName} that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="DocumentRequired-img w-100" loading="lazy" src={documents} height={430} />
      </div>
    </div>
  )
}