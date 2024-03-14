import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {cityName: string;}
export const DocumentsRequired = ({ cityName }: HeroProps)  => {
  return (
    <div >
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>The documents or information that need to be submitted along with the application for EPR registration are as follows:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A duly filled and signed application form in the prescribed format (Form 1 or Form 1A) along with a declaration and an undertaking by the applicant that the information provided is true and correct and that the applicant will comply with the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016 and the guidelines issued by the CPCB or the SPCBs.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />An EPR plan containing the detailed plan of the applicant for achieving the EPR targets set by the CPCB or the SPCBs for the products for which the EPR obligations are to be implemented. The EPR plan should also contain the details of the collection mechanism, the channelization mechanism, the documentation mechanism, the record keeping mechanism, the reporting mechanism and the verification mechanism to be adopted by the applicant. The EPR plan should be prepared as per the guidelines and formats issued by the CPCB or the SPCBs.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the consent to establish or consent to operate or authorization or registration or license or any other document that indicates the approval of the concerned regulatory authority for the manufacture or import or sale or distribution of EEE or plastic packaging.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the agreement or MoU with the registered collection centres, dealers, e-retailers, refurbishers, dismantlers, recyclers, producer responsibility organizations (PROs) or any other entity for the collection and management of e-waste or plastic waste generated from their products.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the agreement or MoU with the authorized transporters for the transportation of e-waste or plastic waste as per the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the agreement or MoU with the authorized treatment, storage and disposal facilities for the disposal of hazardous wastes generated from e-waste or plastic waste as per the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the agreement or MoU with the authorized testing laboratories for the testing of e-waste or plastic waste for RoHS parameters or plastic identification code or any other parameter as specified by the CPCB or the SPCBs.</li>
          </ul>
        <ul className='tick list-unstyled'> 
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the agreement or MoU with the State Pollution Control Boards or the Pollution Control Committees or the Union Territory Administration for the coordination and cooperation in the implementation of the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Any other document or information that may be required by the CPCB or the SPCBs or the concerned regulatory authority for the appraisal of the proposed EPR plan.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}