import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps { cityName: string; }
export const ChooseRegisterKaro  = ({ cityName }: HeroProps) => {
  return (
    <div id='ChooseRegisterKaro' >
     
  
       <div className='DocumentArrowWise  w-80 m-auto '>
         <h3>Pool of Experts</h3>
            <ul className='tick list-unstyled'>
                      <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />RegisterKaro holds a large pool of Experts from all over the world specializing in consumer redressal services.  Our team of experts makes sure that your work is taken care of in the most effective manner possible.</li></ul>

            <h3>Cost-effective</h3>
            <ul className='tick list-unstyled'>
                      <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />RegisterKaro legal experts are of premium quality at the most efficient rate, which suits the client’s pocket, making sure that quality service is not the only thing the client gains on our platform.</li></ul>

            <h3>Client-oriented approach</h3>
            <ul className='tick list-unstyled'>
                      <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Our team of experts is well trained and equipped with a client-oriented approach, keeping in mind that the process must be client-centric, focusing on meeting all the requirements of their business and, therefore, satisfying their needs.</li></ul>

            <h3>Process Alteration</h3>
            <ul className='tick list-unstyled'>
                      <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />For the fact that we focus on a client-centric approach, we keep our process structurization open for the client to alter it as per their need, requirements, and vision.  For us, obtaining the best results is the focus, along with the Client satisfaction.</li></ul>

            <h3>Trusted partner of 10000+ Clients</h3>
            <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />RegisterKaro has earned the trust of more than 10000+ clients who have availed themselves of our consumer complaint services.  Their trust in us from a term in continuity is proof of our services backed by quality and assurance.</li></ul>
          </div>
    </div>
  )
}