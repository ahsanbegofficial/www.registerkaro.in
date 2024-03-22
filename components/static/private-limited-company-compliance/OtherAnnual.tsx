import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-limited-company-compliance/Other Annual_Compliance_for_Private_Limited_Company_in_India.svg'
interface HeroProps {
    cityName: string;
}
export const OtherAnnual = ({ cityName }: HeroProps) => {
  return (
    <div id='OtherAnnual'>
      <p className='main-para mb-2'> Following are some other annual compliance for Private Limited Company in {cityName}:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-5'>
          <Image alt="Other Annual Compliance for Private Limited Company in India" className="Other-img w-100" height={550} loading="lazy" src={bft} />
      </div>
     
      <div className='flex-5 pt-5'>
     <p><strong>1: </strong>GST returns, monthly, quarterly, and annual</p>
     <p><strong>2: </strong>Periodic TDS returns</p>
     <p><strong>3: </strong>Calculation of the tax liability in advance</p>
     <p><strong>4: </strong>Income tax return filing</p>
     <p><strong>5: </strong>Report of tax audit filed</p>
     <p><strong>6: </strong>Submitting semi-annual easy returns</p>
     <p><strong>7: </strong>Submitting PF returns</p>
     <p><strong>8: </strong>Professional tax return filing</p>
     <p><strong>9: </strong>Regulation evaluation and reporting by various laws (Eg. Environment and Protection Act, Competition Act, Factory Act, etc.)</p>
      </div>
      </div>
      </div>
  )
}
