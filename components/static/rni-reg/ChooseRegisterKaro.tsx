import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/rni-registration/why_choose_registerkaro_for_your_rni_regsitraion.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const ChooseRegisterKaro = ({ cityName }: HeroProps) => {
  return (
    <div  id='ChooseRegisterKaro'>
      <p className='main-para'>RegisterKaro has been one stop solution for the RNI registration for the varied ranges of benefits such as:</p>
            <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
              <div className='flex-6 pt-5'>
                <p><strong>1: Pool of Experts</strong>RegisterKaro holds a large pool of Experts from all over the world specialising in RNI Registration services.  Our team of experts makes sure that your work is taken care of in the most effective manner possible.</p>
                <p><strong>2: Cost-effective</strong>RegisterKaro RNI Registration services are of premium quality at the most efficient rate, which suits the client’s pocket, making sure that quality service is not the only thing the client gains on our platform.</p>
                <p><strong>2: Client-oriented approach</strong>Our team of experts is well trained and equipped with a client-oriented approach, keeping in mind that the process must be client-centric, focusing on meeting all the requirements of their business and, therefore, satisfying their needs.</p>
                <p><strong>2: Process Alteration</strong>For the fact that we focus on a Client-centric approach, we keep our process structurization open for the client to alter it as per their need, requirements, and vision.  For us, obtaining the best results is the focus, along with the Client satisfaction.</p>
                <p><strong>2: Trusted partner of 10000+ Clients</strong>RegisterKaro has earned the trust of more than 10000+ clients who have availed our RNI Registration services.  Their trust in us from a term in continuity is proof of our services backed by quality and assurance.</p>
              </div>
              <div className='flex-5 mt-5'>
              <div className='flex justify-content-center'>   
              <Image alt="Why Choose RegisterKaro for your RNI Registration" className="ChooseRegisterKaro-img w-100" height={652} loading="lazy" src={dft} />
            </div>
          </div>
      </div>
    </div>
  )
}