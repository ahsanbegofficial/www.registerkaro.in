import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/partnership-firm/documents_for_partnership_firm_regi_upd.svg'
interface HeroProps {  cityName: string;}
export const DocumentsForPartnership = ({ cityName }: HeroProps) => {
  return (
    <div className='m-auto w-80' id='DocumentsForPartnership'>
      <h3 className='main-para mb-7'>Following are some crucial documents required for Partnership Firm Registration in { cityName }:</h3>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
      <div className='flex-5'>
          <Image alt="Documents for Partnership Firm Registration in India. Proof of principal place of business of the firm (ownership documents or rental/lease agreement).
        However, it is usually better to register the partnership firm because a registered partnership firm has additional rights and benefits over unregistered firms." className="DocumentsForPartnership-img w-100" height={650} loading="lazy" src={bft} />
      </div>
      <div className='flex-5 pt-5'>
        <p><strong>1: </strong>   Application for registration of partnership (Form-1).</p>
        <p><strong>2: </strong>   Certified original copy of <strong>Partnership Deed</strong>.</p>
        <p><strong>3: </strong>   Specimen of an affidavit certifying all the details mentioned in the partnership deed and documents are correct.</p> 
        <p><strong>2: </strong>   PAN Card and address proof of the partners.</p>
        <p><strong>3: </strong>   Proof of principal place of business of the firm (ownership documents or rental/lease agreement).</p>  
        <p>However, it is usually better to register the partnership firm because a registered partnership firm has additional rights and benefits over unregistered firms. A partnership firm enjoys the following advantages:If the registrar is satisfied with the documents, he will register the firm in the Register of Firms and issue a Certificate of Registration. The Register of Firms contains up-to-date information on all firms and can be viewed by anybody upon payment of certain fees.</p>
      </div>
   
      </div>
    </div>
  )
}
