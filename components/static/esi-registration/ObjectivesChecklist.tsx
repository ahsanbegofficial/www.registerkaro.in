import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/esi-registration/Various_Entities_covered_under_ESIC.svg'

interface HeroProps {
    cityName: string;
}
export const ObjectivesChecklist = ({ cityName }: HeroProps) => {
  return (
    <div id='ObjectivesChecklist'>
      <p className='main-para'>Under Section 1(5) of the ESI Act, the following entities are covered under ESIC:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
       <div className='flex-3 justify-content-center'>
          <Image alt="Various Entities covered under ESIC" className="Various-img w-100" height={450} loading="lazy" src={dft} />
        </div>
        <div className='flex-6 pt-5'>
          <p><strong>1 : </strong>Private medical institutions;</p>
          <p><strong>2 : </strong>Road motor transport establishments;</p>
          <p><strong>3 : </strong>Cinemas;</p>
          <p><strong>4 : </strong>Shops;</p>
          <p><strong>5 : </strong>Newspaper establishments that are not covered under the Factory Act;</p>
          <p><strong>6 : </strong>Road motor transport establishments;</p>
          <p><strong>7 : </strong>Hotels or restaurants engaged only in sales.</p>
        </div>
       
      </div>
      <p className='main-para'>When all the above-mentioned establishments employ 10 or more individuals, the employer of the establishment must mandatorily apply for ESIC Registration.</p>
    </div>
  )
}
