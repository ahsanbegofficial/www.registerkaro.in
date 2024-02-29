import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const KeyInitiatives = ({ cityName }: HeroProps) => {
  return (
    <div >
        
      <div className='flex justify-content-center' id='KeyInitiatives'>
        <Image alt="Types of business structures in {cityName} and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={482} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>

      <div className='flex-7'>
        <p>To obtain ISI Mark Certification, the following essential documents are required:</p>
        <h3>Address Proof of the Manufacturing Unit:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Documentation confirming the location and address details of the manufacturing facility.</li>
          </ul>
        <h3>Copy of Certificate of Registration:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A duplicate of the official certificate validating the registration of the manufacturing unit.</li>
          </ul>
        <h3>Certified Copy of Test Report by a BSI-Certified Lab:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A verified report from a BSI-certified laboratory attesting to the product’s compliance with standards.</li>
          </ul>
        <h3>Details of Equipment Used for Testing:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Comprehensive information on the equipment utilized for testing the product.</li>
          </ul>
        <h3>Copy of Trademark Registration Certificate:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Documentation verifying the registration of the product’s trademark.</li>
          </ul>
        <h3>Packaging Details:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Information on product packaging, including size, quantity, and storage specifications.</li>
          </ul>
        <h3>Layout Plan of the Factory:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A blueprint outlining the layout of the manufacturing facility.</li>
          </ul>
        <h3>Certificate Copy from the Regulatory Authority:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A certified copy of the certificate obtained from the relevant regulatory authority.</li>
          </ul>
        <h3>Copy of the Bank Statement of the Company:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A duplicate of the company’s bank statement for financial verification.</li>
          </ul>
        <h3>Flow Chart of the Manufacturing Process:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A visual representation outlining the steps involved in the manufacturing process.</li>
          </ul>
        <h3>{cityName}n Residency Proof:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Documentation confirming the {cityName}n residency status of the manufacturing unit.</li>
          </ul>
        <h3>Particulars Regarding Raw Material Used:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Detailed information about the raw materials utilized in the manufacturing process.</li>
          </ul>
        <h3>Latest Utility Bills:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Recent utility bills, such as electricity, gas, and water tax receipts, providing evidence of ongoing operations.</li>
          </ul>
        <h3>Product or Component Drawing:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Detailed drawings or specifications of the product or its components.</li>
          </ul>
      </div>
      </div>
      <p className='main-para'>These documents collectively contribute to the thorough evaluation and verification process required for obtaining ISI Certification.</p>
    </div>
  )
}