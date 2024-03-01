
import React from 'react'
import Image from 'next/image';
import renewal_of_gumasta_license from "../../../assets/images/static/gumasta-license/renewal_of_gumasta_license.svg"
interface HeroProps {
  cityName: string;
}

export const RenewalGumasta = ({ cityName }: HeroProps) => {
  return (
    <div id='RenewalGumasta'>
      <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
       
      <div className='flex-7 justify-content-center'>
        <p >Regardless of the company’s turnover, all enterprises that employ ten or more people must acquire the Gumasta License. The registration of a Gumasta License is a crucial piece of evidence supporting a store, company, or business’s legal status and granting the employer the freedom to conduct business. This Gumasta License is often required by banks in order to open business bank accounts and is typically valid for a year, despite the government’s best efforts to keep records through it. Once the required amount has been paid in this regard, it can be given for a longer duration, even up to 10 years. However, a renewal is always necessary when the registration period expires. Gumasta renewal is necessary in order to lawfully continue business operations, and it is as important as getting the registration done for the first time.</p>
        </div>
        <div className='flex-4 mt-1'>
          <Image alt="Renewal of Gumasta License" className="RenewalGumasta-img w-100" height={350} loading="lazy" src={renewal_of_gumasta_license} />
      </div>
        </div>
        
    </div>
  )
}