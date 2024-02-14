import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'

export const Procedure = () => {
  return (
    <div className='checklist' id='Procedure'>
          <p className='main-para'>In India, a Sole Proprietorship is an easy way to commence a business. There is no legal difference between the business & the owner in the case of Sole Proprietorship. So, there are 3 different ways to register a Sole Proprietorship in India</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={one} alt="Registering under the Shops & Establishments Act"/>
                  </div>
                  <p>Registering under the Shops & Establishments Act</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={two} alt="Registering through GST Registration"/>
                  </div>
                  <p>Registering through GST Registration</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={three} alt="Getting Udyam or Udyog Aadhar under the Ministry of MSME."/>
                  </div>
                  <p>Getting Udyam or Udyog Aadhar under the Ministry of MSME.</p>
              </div>
            </div>
      </div>

  )
}
