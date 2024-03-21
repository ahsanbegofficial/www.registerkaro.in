import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/state-fssai-license-registration/Penalties_Under_the_FSSAI_Act.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const PenaltiesUnder = () => {
  return (
    <div  id='PenaltiesUnder' >
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>Penalties for infractions committed by several categories of companies, such as One Person Companies, Private Limited Companies, and Limited Companies, are outlined in detail in the Food Safety and Standards Authority of India Act.</p>
        <h3>Misbranded and Sub-Standard</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A person receives a fine of up to Rs 5 lakhs if they manufacture, market, or engage in other activities involving misbranded food meant for human consumption.</li>
         </ul>
         <h3>Involvement in Sub-Standard Food</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Anyone directly involved in the manufacturing, distribution, storage, or import of food supplies that do not fulfill stated quality criteria for human consumption, whether personally or through a representative, will be held liable. Such conduct might result in fines of up to Rs 5 lakh.</li>
         </ul>
         <h3>Operating a Food Business without a License</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Individuals or Food Business Operators who engage in activities such as selling, distributing, and so on of food goods without an FSSAI license, with the exception of those granted exemption under the FSSAI Act, face penalties of up to 6 months in prison and a fine of up to Rs 5 lakhs.</li>
         </ul>
         <h3>Unhygienic Food Processing or Manufacturing</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Penalties shall be imposed when people process or manufacture food meant for human consumption in unhygienic conditions, either directly or through representatives. Penalties could reach as much as one lakh rupees.</li>
         </ul>
         <h3>Containing Extrinsic Matter</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Penalties may be enforced if a person or an FBO sells food to customers without following the terms of the FSSAI Act, the established guidelines, or failing to meet the buyer’s requirements for food quality or substance. The punishment for such infractions cannot exceed Rs 5 lakhs.</li>
         </ul>
         <h3>Selling Food without Meeting Quality Demands</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Penalties will be imposed on those who, directly or through agents, manufacture food items for human consumption that contain extraneous substances with the intention of selling, storing, distributing, or importing them. Penalties may reach a maximum of Rs. 1 lakh.</li>
         </ul>
         <p>Furthermore, persons falling under Section 31, subsection 2, who fail to comply with the conditions may face FSSAI Act penalties of up to Rs 25,000.</p>
      </div>
      <div className='flex-4' >
        <Image alt="Penalties Under the FSSAI Act " className="Penalties-img w-100" height={882} loading="lazy" src={dft} />
      </div>
     
      </div>

    </div>
  )
}