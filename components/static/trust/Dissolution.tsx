import Image from 'next/image'
import React from 'react'
import categories_of_trusts_in_india from '../../../assets/images/static/trust-registration/dissolution_of_trust.svg'

interface HeroProps { cityName: string;}
export const Dissolution = ({ cityName }: HeroProps) => {
  return (
    <div id='Dissolution'> 
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' >
    <div className='flex-4'>
    <Image alt="The dissolution of a trust takes place when all the properties/assets of the trust are lawfully distributed to the beneficiaries or a comparable entity, either directly or through resettlement." className="Dissolution-img w-100" loading="lazy" src={categories_of_trusts_in_india} height={350} />
    </div>
     <div className='flex-6'>
       <p className='main-para mt-4'>The dissolution of a trust takes place when all the properties/assets of the trust are lawfully distributed to the beneficiaries or a comparable entity, either directly or through resettlement. Throughout the dissolution process, the involved parties must ensure the proper handling of any tax obligations arising from the transfer of assets. It is crucial to adhere to the approval procedures of the charity commissioner, court, or other relevant laws to mitigate the risk of legal disputes.</p>
    </div >
    
     
    </div>
    </div>
    
  )
}