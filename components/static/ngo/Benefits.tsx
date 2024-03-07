import Image from 'next/image'
import benefits_of_ngo_registration from '../../../assets/images/static/ngo/benefits_of_ngo_registration_new.svg'

interface HeroProps {cityName: string;}
export const Benefits = ({ cityName }: HeroProps)  => {
 
  
  return (
    <div className='Classification flex w-80 m-auto mobile-flex-column-reverse' id='Benefits'>
    <div className='flex-7'>
      <p>The following are the benefits of NGO Registration in {cityName}:</p>
      <p><strong>1: Tax Exemption:</strong> NGOs registered under Sections 12A and 80G of the Income Tax Act enjoy tax benefits, encouraging financial support.</p>
      <p><strong>2: Asset Ownership: </strong>Registered NGOs can acquire, retain, and sell assets, enhancing financial stability and organizational capability.</p>
      <p><strong>3: Transparent Financial Operations:</strong> Opening a bank account under the NGO’s name ensures transparency in financial transactions, instilling trust in donors and stakeholders.</p>
      <p><strong>4: Enhanced Credibility: </strong>Registration elevates the credibility of NGOs, attracting collaborators and donors who prefer working with recognized and accountable entities.</p>
      <p><strong>5: Stability and Succession:</strong> A registered NGO is perceived as more stable, with provisions for perpetual succession, ensuring sustained impact.</p>
      <p><strong>6: Access to Credit:</strong> Registered NGOs can secure loans for various initiatives, broadening their financial capabilities and supporting expansion.</p>
      <p><strong>7: Name Preservation:</strong> Registration protects the NGO’s name, preventing unauthorized use and safeguarding its brand and reputation.</p>
      <p><strong>8: Bank Account Necessity:</strong> A registered NGO can convey transparency by operating through a corporate bank account, instilling confidence in donors and stakeholders.</p>
    </div>
    <div className='flex-3'>
    <div className='flex-3'>
        <Image alt="the benefits of NGO Registration in India" className="Benefits-img w-100" loading="lazy" src={benefits_of_ngo_registration} height={620} />
      </div>
    </div>
    </div>
  )
}