import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/society-registration/understand_the_process_for_society_registration.svg'

interface HeroProps { cityName: string;}
export const UnderstandProcess = ({ cityName }: HeroProps) => {
  return (
    <div id='UnderstandProcess'>
      <p className='main-para'>Following is the step-by-step procedure for Society Registration in {cityName}:</p>
     <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Registration'>
       
        <div className='flex-5 pt-5'>
            <p><strong>1: Gather Necessary Documents for Society Registration:</strong> Collect all required documents for society registration. Ensure a thorough review of these documents before proceeding with the application.</p>
            <p><strong>2: Complete the Online Application:</strong> Fill in the online application form. If you encounter difficulties accessing the website, seek guidance from an expert to initiate the society registration process in Delhi through offline means.</p>
            <p><strong>3: Submit Application to the Relevant Authority:</strong> Send the completed online application through the official portal. In case of any difficulty locating the portal, consider having experts visit the head office to submit the application for cooperative society registration in Delhi.</p>
            <p><strong>4: Attain Society Registration Certificate:</strong> After scrutinizing your application form, the head office will evaluate its satisfaction. Upon approval, you will be issued the society registration certificate.</p>
        </div>
        <div className='flex-5'>
          <Image alt="Following is the step-by-step procedure for Society Registration in India" className="UnderstandProcess-img w-100" height={580} loading="lazy" src={bft} />
        </div>
       </div>
    </div>
  )
}
