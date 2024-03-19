
import Image from 'next/image'
import dft from '../../../assets/images/static/medical-device-registration/Medical_Device_registration_.svg'

interface HeroProps {
    cityName: string;
}
export const MedicalDevice = ({ cityName }: HeroProps) => {

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MedicalDevice'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className="flex-4 mt-5">
          <Image
            alt="Medical Device Registration Process in India"
            className="MedicalDevice-img w-100"
            height={960}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className='flex-7'>
          <p><strong>Classification of Medical Devices:</strong> Devices are categorized into different classes based on their potential risk to patients. The classification is in line with the Global Harmonization Task Force (GHTF) guidelines and is crucial in determining the registration pathway.</p>
          <p><strong>Registration Application:</strong> Manufacturers or their authorized representatives must apply for registration to CDSCO along with the necessary documentation. This includes technical details, manufacturing information, clinical data (if applicable), and evidence of conformity to Indian or International Standards.</p>
          <p><strong>Quality Management System (QMS) Certification:</strong> For certain classes of Medical Devices, certification of conformity with QMS standards such as ISO 13485 is mandatory. This ensures that the manufacturing process adheres to defined quality standards.</p>
          <p><strong>Clinical Data Requirements:</strong> Depending on the risk classification, some medical devices might require clinical data to establish safety and efficiency. This could involve clinical trials conducted in {cityName} or other countries, with the data submitted for review by the CDSCO.</p>
          <p><strong>Review and Evaluation:</strong> The CDSCO examines the submitted documents, labeling, and risk assessment. They assess whether the device meets safety and performance standards as per Indian Regulations.</p>
          <p><strong>Approval or Rejection:</strong> Based on the evaluation, the CDSCO may approve the medical device’s registration if it complies with all requirements. In cases of non-compliance, additional information or modifications may be requested, or the application might be rejected.</p>
          <p><strong>Post-Market Surveillance:</strong> Once approved, manufacturers are obligated to monitor the device’s performance in the market and report any adverse events. The CDSCO conducts periodic audits and inspections to ensure ongoing compliance with regulatory standards.</p>
          <p><strong>Import and Distribution:</strong> Upon successful registration, the device can be imported and distributed in the Indian Market. Importers and distributors must comply with regulations concerning storage, transportation, and sale of medical devices.</p>
          <p><strong>Renewal and Modifications:</strong> Registrations are typically valid for a certain period and need to be renewed periodically. Any modifications to the device or manufacturing process also require prior approval from the CDSCO.</p>
          <p><strong>Regulatory Amendments:</strong> Manufacturers must stay updated with any changes in regulations or guidelines issued by the CDSCO and ensure compliance with evolving requirements,</p>
        </div>  
       
      </div>
        <p className='main-para'>Navigating the Medical Device registration process in {cityName} requires meticulous attention to regulatory requirements, documentation, and compliance with quality standards to ensure successful approval and market access. Our organization excels in such matters.</p>
    </div>
  )
  
}
