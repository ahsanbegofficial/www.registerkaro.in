import Image from 'next/image'

import PAN_ard_of_the_proprietor from '../../../assets/images/static/sole-proprietorship/PAN_ard_of_the_proprietor.svg'
import Registration_under_the_shop_and_establishment_Act from '../../../assets/images/static/sole-proprietorship/Registration_under_the_shop_and_establishment_Act.svg'
import applicants_must_obtain_GST_registration_for_their_business from '../../../assets/images/static/sole-proprietorship/applicants_must_obtain_GST_registration_for_their_business.svg'
import complete_name_address_of_the_business from '../../../assets/images/static/sole-proprietorship/complete_name_address_of_the_business.svg'
import register_a_bank_account_in_the_name from '../../../assets/images/static/sole-proprietorship/register_a_bank_account_in_the_name.svg'

export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
          <p className='main-para'>Following is the checklist required for Sole Proprietorship in India</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={PAN_ard_of_the_proprietor} alt="PAN Card of the Proprietor"/>
                  </div>
                  <p>PAN Card of the Proprietor</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={Registration_under_the_shop_and_establishment_Act} alt="Registration under the Shop & Establishment Act of the respective state"/>
                  </div>
                  <p>Registration under the Shop & Establishment Act of the respective state</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={applicants_must_obtain_GST_registration_for_their_business} alt="Registration under GST, if the turnover of the business exceeds Rs. 20 lakhs"/>
                  </div>
                  <p>Registration under GST, if the turnover of the business exceeds Rs. 20 lakhs</p>
              </div>
             
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
            <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={register_a_bank_account_in_the_name} alt="Bank account in the business name"/>
                  </div>
                  <p>Bank account in the business name</p>
            </div>
            <div className="checklist-divs flex flex-column text-center align-center">
                <div>
                    <Image height={125} width={125} src={complete_name_address_of_the_business} alt="Complete name & address of the business"/>
                </div>
                <p>Complete name & address of the business</p>
            </div>
          </div>
      </div>

  )
}
