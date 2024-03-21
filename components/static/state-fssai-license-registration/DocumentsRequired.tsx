import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocumentsRequired = () => {
  return (
    <div >
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p className='main-para'>The paperwork needed to apply for State FSSAI License Registration is listed below: </p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Information on important management individuals, such as directors, partners, owners, and executive members of society, including their actual addresses and phone numbers.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the property documents (if the applicant owns the business location).</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the rent agreement and landlord’s NOC (if the property is rented).</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Passport-sized photos of the license applicant.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identification and proof of address of the license applicant.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Specifics on suppliers of raw materials.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Form-B is duly filled in and signed by the applicant.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />List of machinery installed at the facility.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />NOC granted by the local municipality.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Specifics of the food category and proposed food goods to be produced at the plant.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Import Export Code issued by the DGFT or the Directorate General of Foreign Trade.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Form IX.</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Authorization letter with the name and address of the liable individual</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Food Safety Management System</li>
        </ul>
        <h3>The requisite fees:</h3>
        <p >The applicant for a state food license must pay it using one of the following methods:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Treasury Challan,</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Demand Draft (DD), or</li>
        </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Cash</li>
        </ul>
        <p >The appropriate fee changes based on the food business’s capacity for production:</p>
        <table>
                <tr>
                    <th className='first'>Manufacturer (Production Capacity)</th>
                    <th className='last'>License Fees/year (INR)</th>
                </tr>
                <tr>
                    <td>More than one million tons of milk per day, or 501 to 2500 million tons of milk solids a year.</td>
                    <td>5000/-</td>
                </tr>
                <tr>
                    <td>Lower than one Million tons of output 501 to 10,000 L/day of milk or 2.5 million tons to 500 million tons of yearly production of milk solid.</td>
                    <td>3000/-</td>
                </tr>
                <tr>
                    <td>4 stars rating hotels</td>
                    <td>5000/-</td>
                </tr>
                <tr>
                    <td>All food service providers (including restaurants, canteens, clubs, caterers, banquet halls offering food catering services, Dabbawalla system, and other FBOs)</td>
                    <td>2000/-</td>
                </tr>
                
            </table>
      </div>
      </div>
    </div>
  )
}