import Image from 'next/image'
import benefits_of_iso_certification from '../../../assets/images/static/iso-certification/benefits_of_iso_certification.svg'
interface HeroProps {
  cityName: string;
}

export const BenefitsISO = ({ cityName }: HeroProps) => {
  return (
    <div id='BenefitsISO'>
        <p className='main-para'>Following are the benefits of ISO Certification in { cityName }:</p>
        <div className='BenefitsISO flex w-60 m-auto mobile-flex-column' >
          <div className='flex-4 mt-3'>
            <Image alt="Benefits of ISO Certification In India,It helps to improve quality managementProvides better information securityIncreased customer satisfactionImproved occupational health & safety" className="BenefitsISO-img w-100" height={352} loading="lazy" src={benefits_of_iso_certification} />
          </div>
          <div className='flex-7 pt-5'>
            <p><strong>1:</strong>It helps to improve quality management;</p>
            <p><strong>2:</strong>Provides better information security;</p>
            <p><strong>3:</strong>Increased customer satisfaction;</p>
            <p><strong>4:</strong>Improved occupational health & safety;</p>
            <p><strong>5:</strong>More Environmentally sustainable business;</p>
            <p><strong>6:</strong>Improves business credibility.</p>
          </div>
          </div>
    </div>
  )
}
