import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/winding-up-of-a-company/diffrent-ways.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const DiffrentWays = ({ cityName }: HeroProps) => {
  return (
    <div id='DiffrentWays' >

      <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>
        <div className='flex-4 justify-content-center'>
          <Image alt="What are the different ways of winding up of a company? The process of winding up has been further subdivided into two parts; according to Section 270," className="DiffrentWays-img w-100" height={382} loading="lazy" src={dft} />
        </div>
        <div className='flex-7'>

          <p>1. According to the Companies Act of 2013, the process of winding up of a Company has been divided into following ways:</p>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Strike off a company</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Winding up of the company</li>
          </ul>
          <p>2. The process of winding up has been further subdivided into two parts; according to Section 270, a company can be wound up in the following ways:</p>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Compulsory Winding up of Company by Tribunal</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Voluntary Winding up of the Company</li>
          </ul>
        </div>

      </div>
    </div>
  )
}