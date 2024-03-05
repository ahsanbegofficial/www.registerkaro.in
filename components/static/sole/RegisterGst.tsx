import React from 'react'
import Image from 'next/image';
import register from "../../../assets/images/static/sole-proprietorship/registering_through_gst_registration.svg"
interface HeroProps { cityName: string; }
export const RegisterGst = ({ cityName }: HeroProps) => {
  return (
      <div className='Checklist w-80 flex m-auto mobile-flex-column align-center'  id='RegisterPvt'>
        <div className='flex-3'>
            <Image alt="If you are involved in the exchange of goods & services, you can do Sole Proprietorship Registration via GST Registration. Earlier, Service Tax & VAT Registration was needed & it is now done via GST Registration. It is the best way to get Sole Proprietorship but has some drawbacks. A business registered through this method must fulfill all the GST " className="RegisterGst-img" height={302} loading="lazy" src={register}/>
          </div>
          <div className='flex-7'>
          <p className='main-para'>If you are involved in the exchange of goods & services, you can do Sole Proprietorship Registration via GST Registration. Earlier, Service Tax & VAT Registration was needed & it is now done via GST Registration. It is the best way to get Sole Proprietorship but has some drawbacks. A business registered through this method must fulfill all the GST requirements & after collecting GST from customers, they should file GST Returns. Our experts at RegisterKaro will help you get GST Registration</p>
          </div>
    </div>
  )
}
