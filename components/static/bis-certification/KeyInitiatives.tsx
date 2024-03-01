import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/bis-certification/key-initiatives-by-bis.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}
export const KeyInitiatives = ({ cityName }: HeroProps) => {
  return (
    <div >
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <h3>Compulsory Registration Scheme (CRS):</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Under CRS, BIS ensures the mandatory registration of manufacturers of electronic products, providing a third-party guarantee of safety, quality, and reliability.</li>
          </ul>
        <h3>Standard Formulation:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />BIS actively formulates and updates standards to ensure the uniformity and quality of products.</li>
          </ul>
        <h3>Foreign Manufacturers Certification Scheme (FMCS):</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />FMCS facilitates foreign manufacturers in adhering to Indian standards, promoting global trade while ensuring the safety and quality of imported goods.</li>
          </ul>
        <h3>Product Certification Scheme:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />BIS certifies products to guarantee adherence to established standards, instilling confidence in consumers.</li>
          </ul>
        <h3>Hall Marking Scheme:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This scheme ensures the quality and purity of precious metals, providing consumers with assurance when purchasing items like jewelry.</li>
          </ul>
        <h3>Sale of Indian Standards:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />BIS contributes to knowledge dissemination by making Indian standards available for sale.</li>
          </ul>
        <h3>Laboratory Services:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />BIS operates laboratories to conduct testing and certification, assuring product quality and safety.</li>
          </ul>
        <h3>Laboratory Recognition Scheme:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Recognizing laboratories to uphold the highest standards of testing and certification.</li>
          </ul>
        <h3>Consumer Affairs Activities:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Engaging in activities that safeguard consumer interests and ensure fair trade practices.</li>
          </ul>
        <h3>Information Services:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Providing information and resources to enhance public awareness of quality standards.</li>
          </ul>
        <h3>Promotional Activities:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Actively promoting adherence to quality standards among manufacturers and consumers.</li>
          </ul>
        <h3>Training Services, National and International Level:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Conducting training programs to build awareness and expertise in standards compliance, both nationally and internationally.</li>
          </ul>
      </div>
      <div className='flex mt-3' id='KeyInitiatives'>
        <Image alt="Key Initiatives by BIS,Information Services,Promotional Activities" className="KeyInitiatives-img w-100" height={1082} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
}