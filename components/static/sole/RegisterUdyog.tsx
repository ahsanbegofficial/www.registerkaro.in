import React from 'react'
import Image from 'next/image';
import register from "../../../assets/images/static/sole-proprietorship/registeration_through_udyog_or.svg"
interface HeroProps { cityName: string; }
export const RegisterUdyog = ({ cityName }: HeroProps) => {
  return (

      <div className='Checklist flex m-auto mobile-flex-column-reverse align-center'  id='RegisterUdyog'>
          <div className='flex-5'>
          <p className='main-para'>The MSME issues Udyog Aadhar which are unique identification numbers. A single owner can apply for Udyog Aadhar with the Ministry. Compared to other methods, the Udyog Aadhar is a new method. When a Sole Proprietor registers with the Ministry of MSME, they become eligible for benefits like bank loans, reimbursements & subsidies among other things. They also benefit from getting a unique identity for their Company which is known as Sole Proprietorship Registration. The Registration process of Udyog Aadhar is very simple, our experts will help you with this.</p>

          </div>
          <div className='flex-3'>
            <Image alt="The MSME issues Udyog Aadhar which are unique identification numbers. A single owner can apply for Udyog Aadhar with the Ministry. Compared to other methods, the Udyog Aadhar is a new method. When a Sole Proprietor registers with the Ministry of MSME, they become eligible for benefits like bank loans, reimbursements & subsidies among other things. They also benefit from getting a unique identity for their Company which is known as Sole Proprietorship Registration." className="RegisterPvt-img" height={302} loading="lazy" src={register}/>
          </div>
      
    </div>
  )
}
