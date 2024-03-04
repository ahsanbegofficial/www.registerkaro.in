import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/consumer-complaints/how-can.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps { cityName: string; }
export const HowCanRegisterKaro  = ({ cityName }: HeroProps) => {
  return (
    <div id='HowCanRegisterKaro' >
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
     
      <div className='flex-7'>
        <h3>Step 1. Assistance with Notice</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />We primarily assist you in drafting a detailed and well-mannered notice to dispatch to the vendor you are seeking relief against. We make sure that all the aspects of the matter are covered within the notice so that it can be a proof of good faith. We dispatch the notice for you and keep track of the response of the vendor in case he aims to resolve the dispute amicably.</li>
        </ul>
        <h3>Step 2. Choose the right forum</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> In case the vendor responds in a negative way or does not even respond to the notice, we assist you in proceeding ahead with the process of consumer complaints. Here, the process begins with choosing the right forum for your complaint, which is chosen as per the nature of your complaint and the claimed amount.</li>
        </ul>
        <h3>Step 3. Preparation of Consumer Complaint</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Each of the forums has its own set of formats for the submission of consumer complaints, as per which the complaint is required to be drafted. On the basis of a chosen forum, we will select the format for your complaints and then prepare your complaints as per the same, with details and essentials added to the same.</li>
        </ul>
        <h3>Step 4. Detailed analysis of the case</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Once your matter has been filed with the forum, the case will proceed in the form of trials, which require a detailed analysis of the matter. It is required to understand the strengths of the case and project the weakness of the same to further make a plan of action to present the case before the forum in a strong manner.</li>
        </ul>
        <h3>Step 5. Trial process assistance</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This analysis is further used in the preparation of the documentation and applications to be filed in the court. The process might also include the submission of the evidence. This definitely requires expert assistance in drafting the petitions, applications, documentation, affidavits, evidence, etc.</li>
        </ul>
      </div>
      <div className='flex-4 justify-content-center'>
        <Image alt="How can RegisterKaro assist you?,Choose the right forum,Preparation of Consumer Complaint,Detailed analysis of the case, Assistance with Notice" className="HowCanRegisterKaro-img w-100" height={830} loading="lazy" src={dft} />
      </div>
     
      </div>
    </div>
  )
}