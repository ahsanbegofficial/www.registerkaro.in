import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/esi-registration/vital_docs.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
    cityName: string;
}
export const KeyInitiatives = ({ cityName }: HeroProps) => {
  return (
    <div   id='KeyInitiatives'>
        
    
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>

      <div className='flex justify-content-center'>
          <Image alt="What are the vital documents required for online ESI Registration in India?" className="vital-img w-100" height={382} loading="lazy" src={dft} />
        </div>
      <div className='flex-7'>
        <p>Following are some essential documents for online ESI Registration in {cityName}:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>1: </strong> Registration Certificate obtained under Shops & Establishment Act and Factory Act;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>2: </strong> In the case of a Company, a Certificate of Incorporation is required;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>3: </strong> In the case of a Partnership Firm, Partnership Deed is required;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>4: </strong> GST Registration of the establishment;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>5: </strong> MoA & AoA of the Company;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>6: </strong> Address proof of the establishment, any one of the following can be submitted as address proof:</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Latest utility bills such as electricity bill, telephone bill, gas bill, etc.;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Rental Agreement of the land where the establishment is situated;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Property tax receipts of the land on which the establishment is situated.</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>7: </strong> List of all the employees who are working;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>8: </strong> PAN Card of the establishment;</li>
          </ul>
        
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>9: </strong> List of all the Directors & Shareholders of the Company;</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>10: </strong> A cancelled cheque from the Company’s bank account;</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>11: </strong> A register containing the employees’ attendance.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}