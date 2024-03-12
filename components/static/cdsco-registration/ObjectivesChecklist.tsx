import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/cdsco-registration/who_can_apply_ CDSCO.svg'

interface HeroProps {cityName: string;}

export const ObjectivesChecklist = ({ cityName }: HeroProps) => {
  return (
    <div id='ObjectivesChecklist'>
      <p className='main-para'>Following are the applicants who can apply for online CDSCO Registration in {cityName}:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
      <div className='flex-3'>
       
       <Image alt="Who can apply for CDSCO Registration in India?" className="Whocanapply-img w-100" height={270} loading="lazy" src={bft} />

    </div>
       <div className='flex-3 mt-5'>
            <p><strong>1: </strong>Indian Agents;</p>
            <p><strong>2: </strong>Corporates;</p>
            <p><strong>3: </strong>Importers;</p>
            <p><strong>4: </strong>Foreign Enterprises holding Indian Subsidiary.</p>
       </div>
     
     
      </div>
    </div>
  )
}
