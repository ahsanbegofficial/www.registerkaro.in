import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocRequirement = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='DocRequirement'>
      <div className='flex-5'>
        <div className='flex-3'>
         
          <p>Following are the crucial documents required for Trademark Registration Online in India:</p>
        </div>
        <h3>For Individual: </h3>
        <p> Any one of the following documents are required for individuals:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Copy of Aadhar Card;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN Card;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Driving License (Permanent)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>For Startup:</strong> For Startup, one is required to provide the Certificate of Recognition issued by the DPIIT.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>For Sole Proprietorship:</strong> GST Registration Certificate is required for Registration.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>For Partnership Firm or LLP:</strong></li>
        </ul>
        <p>If the Registration of Trademark is done by a Partnership Firm then they must provide the following documents:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Partnership Deed (if any);</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Udyam Aadhar Registration Certificate (it’s optional);</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />GST Certificate.</li>
        </ul>
        <p>If the Registration of Trademark is done by an LLP then they must provide the following documents:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />LLP Incorporation Certificate;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />LLP Deed;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />GST Certificate;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Udyam Aadhar Registration Certificate (optional).</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>For MSME:</strong> If the Registration is done by MSME then they should provide Udyam Aadhar Registration Certificate issued by MSME.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>For Private Limited Company:</strong> If the application for Trademark Registration is filed by a Private Limited Company, then they should provide the following documents along with the application:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Incorporation Certificate;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Udyam Aadhar Registration Certificate (optional).</li>
        </ul>
        <h3>For HUF (Hindu Undivided Family): </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN Card of HUF;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Deed of the Constitution of HUF.</li>
        </ul>
        <h3>For a Trust: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Trust Deed;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Registration Certificate;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN Card in the Trust Name.</li>
        </ul>
        <h3>For a Society:  </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />  If a Society is pursuing the Trademark Registration Process then it shall submit the Registration Certificate which is issued by the Registrar of Co-operative Societies.</li>
        </ul>
        <h3>Following are some common documents required for Trademark Registration Online in India: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />User affidavit;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Graphical Representation of Trademark;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Power of Authorization of an Agent.</li>
        </ul>
        
      </div>
    </div>
  )
}
