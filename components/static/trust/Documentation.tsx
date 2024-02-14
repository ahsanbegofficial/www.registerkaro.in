import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/pvt-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const Documentation = () => {
  return (
    <div>
        <Image alt="list of documents for private limited company registration in india that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="DocumentRequired-img w-100" loading="lazy" src={dft} height={430} />
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Documentation'>
 
     
      <div className='flex-7'>
       
        <p>To facilitate the registration of a trust, the following documents are required:</p>

        <h3>1. Trust Deed:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A Trust Deed with the appropriate stamp value.</li>
        </ul>
        <h3>2. Photographs:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Two photographs of each party involved in the trust.</li>
        </ul>
        <h3>3. PAN Cards:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN cards of the individuals associated with the trust.</li>
        </ul>
        <h3>4. Address Proof:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address proof of the individuals involved.</li>
        </ul>
        <h3>5. Identity Proof:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity proof of the individuals participating in the trust.</li>
        </ul>
        <h3>6. Authentication from Partners:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Authentication from partners, if applicable.</li>
        </ul>
        <h3>7. No Objection Certificate (NOC):</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />No Objection Certificate for using the premises, if applicable.</li>
        </ul>
        <h3>8. Utility Bill:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Any form of a utility bill serving as proof of address.</li>
        </ul>
        <h3>9. Registered Office Address Proof:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address proof of the trust’s registered office.</li>
        </ul>
        <h3>10.Income Tax Certificates:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />12A Registration and 80G Certificates issued by the respective income tax authorities, if applicable, to claim deductions.</li>
        </ul>
    </div>
    </div>
    </div>
  )
}