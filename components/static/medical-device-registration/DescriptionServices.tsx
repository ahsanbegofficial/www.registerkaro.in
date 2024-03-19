import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/medical-device-registration/A_description_of_products_involved.svg'
import dftTwo from '../../../assets/images/static/medical-device-registration/A_description_of_products_second.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
    cityName: string;
}
export const DescriptionServices = ({ cityName }: HeroProps) => {
  return (
    <div id='DescriptionServices'>
        <p className='main-para'>Medical Device Registration involves a wide array of products and services, encompassing various healthcare equipment and technologies crucial for diagnosis, treatment, patient care and rehabilitation. These devices vary significantly in complexity, function and intended use.</p>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' >
      <div className='flex-7'>
        <ul className='tick list-unstyled'>
         
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Diagnostic Equipment:</strong> These devices aid in diagnosing medical conditions and include tools such as blood pressure monitors, thermometers, glucometers, imaging equipment (X-rays, MRI, CT Scanners) and diagnostic reagents.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Implants and Prosthetics:</strong> Implants are medical devices designed to replace, support or enhance a biological structure. This category includes joint replacements, cardiac stents, dental implants and various prosthetics like limbs or organs.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Surgical Instruments: Instruments used in surgical procedures, such as scalpels, forceps, refractors, sutures and specified procedures like laparoscopy or endoscopy.</strong></li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Therapeutic Equipment:</strong> Devices designed for treatment purposes, including infusion pumps, nebulizers, ventilators, dialysis machines, radiation therapy equipment and physiotherapy devices.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Medical Wearables and Monitoring Devices:</strong> Wearable devices like fitness trackers, continuous glucose monitors, heart rate monitors and medical-grade monitoring devices for vital signs, fetal monitoring or sleep apnea.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Assistive Devices:</strong> Devices designed to assist people with disabilities or limitations, including hearing aids, wheelchairs, orthopedic braces and mobility aids.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>In-vitro Diagnostic Devices (IVDs):</strong> Instruments, reagents or systems used in vitro for examining specimens, such as blood, tissue or urine, for diseases or conditions. This category includes pregnancy tests, blood glucose test strips and laboratory equipment.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Medical Software and Applications:</strong> Software or applications integrated with medical devices for data analysis, diagnostics, treatment planning or patient monitoring.</li></ul>
         
      </div>
       <div className='flex-3'>
          <Image alt="A description of products/services involved one" className="DescriptionServicesOne-img w-100" height={620} loading="lazy" src={dft} />
        </div>
      </div>
      <p className='main-para mt-4'>In the process of Medical Devices Registration, various types of licenses and services are involved, primarily focusing on ensuring the safety, efficacy, and quality of the devices being introduced into the market. Some of the types and distinctions of licenses/services typically associated with medical device registration are:</p>
      <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>
        
      <div className='flex-3 mt-3'>
          <Image alt="A description of products/services involved two" className="DescriptionServicesTwo-img w-100" height={782} loading="lazy" src={dftTwo} />
        </div>
        <div className='flex-7 mt-3'>
         <ul className='tick list-unstyled'> 
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Registration Certificate (RC):</strong> The primary authorization required for medical device registration in {cityName} is the Registration Certificate issued by the Central Drugs Standard Control Organization (CDSCO). It signifies that the device complies with regulatory standards and is approved for sale and distribution.</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Import License:</strong> An import license is required for manufacturers or importers to bring medical devices into the country for commercial purposes. It is obtained from the CDSCO or other relevant authorities.</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Manufacturing License:</strong> Manufacturers need a valid manufacturing license from the CDSCO to produce medical devices within {cityName}. This license ensures adherence to quality standards and regulatory compliance in the manufacturing process.</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Quality Management System (QMS) Certification:</strong> Compliance with QMS standards such as ISO 13485 is often mandatory for certain classes of medical devices. Certification ensures that the manufacturing processes and quality control meet defined standards.</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Test License/Approval for Clinical Trials: </strong>In cases where clinical data is required, manufacturers might need a test license or approval from the CDSCO to conduct clinical trials for the medical device. This allows for the evaluation of the device’s safety and efficacy in human subjects.</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>License for Special Categories:</strong> Some specialized medical devices or those falling under specific categories might require additional licenses or approvals based on their nature, complexity, or intended use. This includes devices like radioactive medical devices, etc.</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Post-Market Surveillance Services:</strong> Post-market surveillance services involve monitoring the performance of the device after it’s introduced into the market. This includes tracking adverse events, conducting safety assessments, and ensuring compliance with ongoing regulatory standards.</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /><strong>Certifications and Approvals from Recognized Bodies:</strong> Devices might require certifications or approvals from recognized international bodies or conformity assessment bodies to demonstrate compliance with specific standards, enhancing credibility and market acceptance.</li>
         </ul>
          </div>
     
      </div>
      <p className='main-para mt-4'>These licenses and services play a crucial role in ensuring that medical devices meet stringent regulatory requirements, quality standards, and safety benchmarks before being made available to healthcare providers and patients. The specific type of license or service required depends on the classification and intended use of the medical device as per regulatory guidelines</p>
    </div>
  )
}