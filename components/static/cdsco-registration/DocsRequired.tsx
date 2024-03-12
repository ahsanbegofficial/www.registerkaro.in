import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/cdsco-registration/A_description_of_products.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {cityName: string;}
export const DocsREquired = ({ cityName }: HeroProps) => {
  return (
    <div id='DocsREquired'>
        <p className='main-para mb-2'>The CDSCO (Central Drugs Standard Control Organization) in {cityName} oversees the registration and regulation of various products and services falling under its purview. The products/services involved in CDSCO registration are:</p>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>
      <div className='flex-3 ' >
          <Image alt="A description of products/services Involved The CDSCO (Central Drugs Standard Control Organization) in India oversees the registration and regulation of various products and" className="description-img w-100" height={940} loading="lazy" src={dft} />
        </div>
      <div className='flex-7 mt-5'>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Pharmaceuticals:</strong> This category includes drugs and medications used for therapeutic purposes. Pharmaceuticals encompass a wide range of formulations such as tablets, capsules, injections, syrups, ointments, and more. CDSCO regulates their manufacturing, import, export, sale, and distribution in {cityName}.</li></ul>
        <ul className='tick list-unstyled'>          
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Medical Devices:</strong>Medical devices cover a broad spectrum of equipment, instruments, implants, and apparatus used for the diagnosis, treatment, monitoring, or prevention of diseases or medical conditions. It includes items like cardiac implants, diagnostic machines, surgical instruments, prosthetics, and more. CDSCO oversees its registration, import, and manufacturing standards.</li></ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Cosmetics:</strong>Cosmetics involve products used for personal care and beautification purposes, including skincare, haircare, makeup, perfumes, toiletries, and more. CDSCO ensures the safety, quality, and labeling compliance of cosmetics marketed in {cityName}.</li></ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Diagnostics:</strong>Diagnostics encompass a range of products used for diagnosing various diseases, conditions, or infections. This category includes medical tests, reagents, kits, imaging devices, laboratory equipment, and other diagnostic tools. CDSCO regulates their import, manufacturing, and distribution to ensure accuracy and reliability.</li></ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Clinical Trials:</strong>CDSCO oversees the approval and regulation of clinical trials conducted on pharmaceuticals, medical devices, or other healthcare-related products in {cityName}. This involves assessing trial protocols, participant safety, and ethical considerations.</li></ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Import/Export Licensing:</strong>The CDSCO grants licenses and approvals for the import and export of pharmaceuticals, medical devices, cosmetics, and diagnostics to ensure compliance with international standards and regulatory requirements.</li></ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Manufacturing Approvals:</strong>CDSCO provides manufacturing approvals for facilities producing pharmaceuticals, medical devices, or related products. This involves verifying compliance with GMP (Good Manufacturing Practices) and other quality standards.</li></ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Regulatory Approvals and Certifications:</strong>Various regulatory approvals and certifications such as New Drug Approval (NDA), Import Licenses, Manufacturing Licenses, Product Registrations, and Certifications (such as ISO 13485 for medical devices) are managed by CDSCO to ensure adherence to regulatory norms and standards.</li>
         </ul>
      </div>
      
      </div>
    </div>
  )
}