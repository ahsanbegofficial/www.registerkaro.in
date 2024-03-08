import React from 'react'
import Image from 'next/image'
import how_register from "../../../assets/images/static/startup_india_registration/help_register.svg"
interface HeroProps {cityName: string;}
export const HowToRegister = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='HowToRegister'>
      
        <div className='flex-5 pt-5'>
          <p className='main-para'>RegisterKaro is the best legal services platform for Startup {cityName} Registration offering a variety of Company Incorporation services like LLP, Private Limited, Public Limited, Partnership, OPC, Section 8 Company, Producer Company, Indian Subsidiary, etc. RegisterKaro will help you with Startup {cityName} Registration from the comfort of your home offering you services that are very specialized & tailored for each individual.</p>
          </div>
          <div className='flex-4'>
          <Image alt="RegisterKaro is the best legal services platform for Startup India Registration offering a variety of Company Incorporation services like LLP, Private Limited, Public Limited, Partnership, OPC, Section 8 Company, Producer Company" className="HowToRegister-img w-100" loading="lazy" height={360} src={how_register} />
        </div>
    </div>
  )
}