import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/pvt-reg/documents.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const Regularity = () => {
  return (
    <div>  <p  className='main-para'>The Registrar of Trusts serves as the principal regulatory authority entrusted with the responsibility of overseeing trust registration in India. Their pivotal role includes maintaining a comprehensive database of all registered trusts throughout the country. The registration process for private trusts is governed by the Trusts Act of 1882.</p>
    <p className='main-para'>In the realm of public trusts, there is no singular governing act that uniformly applies. Instead, public trusts in India are obligated to undergo registration with the relevant state authority, as stipulated by the applicable state act.</p>
  
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Regularity'>
       
      <div className='flex-7'>
         <h3>Several laws play a crucial role in regulating trusts in India, including:</h3>

        <h3>1.Trusts Act of 1882: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> This legislation provides the legal framework for the registration and administration of private trusts. It delineates the rights, responsibilities, and procedures associated with the registration of private trusts.</li>
        </ul>
        
        <h3>2.Income Tax Act of 1961: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />  The Income Tax Act extends certain tax benefits and exemptions to registered trusts. Donors can avail themselves of tax deductions under this act when making contributions to registered trusts.</li>
        </ul>
        <h3>2.Societies Registration Act of 1860:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> While not directly governing trust registration, this act regulates the formation and operation of societies engaged in charitable, literary, scientific, or artistic activities. Societies often collaborate with trusts and may pursue similar objectives.</li>
        </ul>
      </div>
      <div className='flex-3'>
        <Image alt="list of documents for private limited company registration in india that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="DocumentRequired-img w-100" loading="lazy" src={documents} height={430} />
        </div>
      </div>
    </div>
  )
}