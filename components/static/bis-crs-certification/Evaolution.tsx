import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-crs-certifiaction/CRS_and_Product_Expansion.svg'
interface HeroProps {  cityName: string;}
export const Evaolution = ({ cityName }: HeroProps)  => {
  return (
    <div id='Evaolution'>
      <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-2'>
          <Image alt="Evolution of CRS and Product Expansion: A Regulatory Timeline" className="Evaolution-img w-100" height={470} loading="lazy" src={bft} />
      </div>
      <div className='flex-6 pt-5'>
       <p className='main-para my-2'>The Ministry of Electronics and Information Technology, in October 2012, unveiled the Electronics & Information Technology Goods (Requirement for Compulsory Registration) Order, 2021, initially covering 15 electronic product categories. Subsequently, on November 13, 2014, 15 more categories were added, and in October 2016, Indian Language Support for Mobile Phones was notified. Expansions continued with an additional 13 categories in August 2017 and 5 more products under Solar Photovoltaics in September 2017.</p>
       <p className='main-para my-2'>The stringent order stipulates adherence to Indian Standards, prohibiting the manufacturing, storage, import, or distribution of products lacking the Standard Mark and a unique Registration Number from the Bureau of Indian Standard (BIS).</p>
       </div>

       </div>
    </div>
  )
}