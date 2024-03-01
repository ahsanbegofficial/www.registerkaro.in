import Image from 'next/image'
import documents_required_for_iso_certifiaction_in_india from '../../../assets/images/static/iso-certification/documents_required_for_iso_certifiaction_in_india.svg'
interface HeroProps {
  cityName: string;
}

export const DocumentsRequired = ({ cityName }: HeroProps) => {
  return (
    <div id='DocumentsRequired'>
        <p className='main-para'>Documents required for ISO Certification in { cityName } depend upon the type of Certification you want. One of the most commonly used Certifications is ISO 9001 Quality Management. Some of the documents are mentioned below:</p>
        <div className='DocumentsRequired flex w-50 m-auto mobile-flex-column-reverse' >
          
          <div className='flex-5 pt-5'>
            <p><strong>1:</strong>PAN Card of the Company;</p>
            <p><strong>2:</strong>Company Profile;</p>
            <p><strong>3:</strong>Address proof of the Company</p>
            <p><strong>4:</strong>Company Letterhead;</p>
            <p><strong>5:</strong>Visiting Card of the Company</p>
            <p><strong>6:</strong>Copy of Sales & Purchase Bill;</p>
            <p><strong>7:</strong>Certificate of Incorporation, MoA, AoA.</p>
          </div>
          <div className='flex-5 mt-3'>
            <Image alt="Documents Required for ISO Certification in India,PAN Card of the Company ,Company Profile ,Address proof of the Compan ,Company Letterhead ,Visiting Card of the Compan" className="DocumentsRequired-img w-100" height={352} loading="lazy" src={documents_required_for_iso_certifiaction_in_india} />
          </div>
          </div>
    </div>
  )
}
