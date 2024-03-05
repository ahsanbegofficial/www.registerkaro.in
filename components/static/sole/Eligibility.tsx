import Image from 'next/image'

import applicant_must_be_a_tax_paying_citizen from '../../../assets/images/static/sole-proprietorship/applicant_must_be_a_tax_paying_citizen.svg'
import applicants_must_obtain_GST_registration_for_their_business from '../../../assets/images/static/sole-proprietorship/applicants_must_obtain_GST_registration_for_their_business.svg'
import register_a_bank_account_in_the_name from '../../../assets/images/static/sole-proprietorship/register_a_bank_account_in_the_name.svg'
interface HeroProps { cityName: string; }
export const Eligibility = ({ cityName }: HeroProps) => {
  return (
    <div className='checklist' id='Eligibility'>
          <p className='main-para'>Following are the eligibility criteria for Sole Proprietorship Registration in { cityName }:</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={applicants_must_obtain_GST_registration_for_their_business} alt="Applicants must obtain GST Registration for their business"/>
                  </div>
                  <p>Applicants must obtain GST Registration for their business</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={applicant_must_be_a_tax_paying_citizen} alt="Applicant must be a tax-paying citizen"/>
                  </div>
                  <p>Applicant must be a tax-paying citizen</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={register_a_bank_account_in_the_name} alt="Register a Bank Account in the name of Proprietorship."/>
                  </div>
                  <p>Register a Bank Account in the name of Proprietorship.</p>
              </div>
          </div>
      </div>

  )
}
