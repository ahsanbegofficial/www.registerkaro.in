import Image from 'next/image'


import Getting_udyam_or_udyog_aadhar_under_the_ministry_of_MSME from '../../../assets/images/static/sole-proprietorship/Getting_udyam_or_udyog_aadhar_under_the_ministry_of_MSME.svg'
import Registration_under_the_shop_and_establishment_Act from '../../../assets/images/static/sole-proprietorship/Registration_under_the_shop_and_establishment_Act.svg'
import applicants_must_obtain_GST_registration_for_their_business from '../../../assets/images/static/sole-proprietorship/applicants_must_obtain_GST_registration_for_their_business.svg'
export const Procedure = () => {
  return (
    <div className='checklist' id='Procedure'>
          <p className='main-para'>In India, a Sole Proprietorship is an easy way to commence a business. There is no legal difference between the business & the owner in the case of Sole Proprietorship. So, there are 3 different ways to register a Sole Proprietorship in India</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={Registration_under_the_shop_and_establishment_Act} alt="Registering under the Shops & Establishments Act"/>
                  </div>
                  <p>Registering under the Shops & Establishments Act</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={applicants_must_obtain_GST_registration_for_their_business} alt="Registering through GST Registration"/>
                  </div>
                  <p>Registering through GST Registration</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={Getting_udyam_or_udyog_aadhar_under_the_ministry_of_MSME} alt="Getting Udyam or Udyog Aadhar under the Ministry of MSME."/>
                  </div>
                  <p>Getting Udyam or Udyog Aadhar under the Ministry of MSME.</p>
              </div>
            </div>
      </div>

  )
}
