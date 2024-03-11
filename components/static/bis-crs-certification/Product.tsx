import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-crs-certifiaction/catalog.svg'
interface HeroProps {  cityName: string;}
export const Product = ({ cityName }: HeroProps)  => {
  return (
    <div id='Product'>
      <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-2'>
          <Image alt="Product Catalog under Compulsory Registration Scheme" className="Product-img w-100" height={270} loading="lazy" src={bft} />
      </div>
      <div className='flex-6 pt-5'>
       <p className='main-para my-2'>A meticulous list, ranging from amplifiers and data processing machines to LED lamps and solar modules, outlines the product categories necessitating a BIS CRS Certification Certificate.</p>
       </div>
       </div>
    </div>
  )
}