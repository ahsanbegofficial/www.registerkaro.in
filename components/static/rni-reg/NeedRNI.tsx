import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import when_do_you_need from '../../../assets/images/static/rni-registration/when_do_you_need_rni_registraion.svg'

interface HeroProps {
  cityName: string;
}

export const NeedRNI = ({ cityName }: HeroProps) => {
  return (
    <div id='NeedRNI'>
      <p className='main-para mb-2'>In summary, securing a BIS Certificate offers a myriad of benefits, including:</p>
            <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
              <div className='flex-6 pt-5'>
              <p><strong>1:Newspaper [Indian & Foreign]:</strong> To start their own newspaper, individuals must complete out the RNI newspaper registration form.</p>
              <p><strong>2:Editorials & Magazines:</strong> If you intend to release magazines on a regular basis. For magazines, you must have an RNI registration.</p>
              </div>
              <div className='flex-5 mt-2'>
              <div className='flex justify-content-center' id='ChooseRegisterKaro'>
            <Image alt="When do you need RNI Registration?" className="NeedRNI-img w-100" height={252} loading="lazy" src={when_do_you_need} />
          </div>
          </div>
        </div>
      <p className='main-para'><strong>Note: </strong>You don’t need to know how to apply for an RNI number if you operate a news site because electronic news portals are exempt from RNI regulations. Moreover, you can obtain additional details regarding the qualifying requirements by visiting the website of the Indian newspaper registrar. If time is of the essence, peruse our numerous blogs on the subject. </p>
    </div>
  )
}
