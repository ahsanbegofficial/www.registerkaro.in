import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/Indian_subsidiary_registration/help_register.svg'
interface HeroProps {cityName: string;}
export const HowToRegister = ({ cityName }: HeroProps) => {
  return (
    <div id="HowToRegister">
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 ">
          <Image
            alt="How Registerkaro Can Assist with Indian Subsidiary Registration?"
            className="HowToRegister-img w-100"
            loading="lazy"
            src={documents}
            height={400}
          />
        </div>
        <div className="flex-4 pt-3">

        <p>
          We simplify the entire registration process, guiding you through key
          steps such as choosing a distinctive name, acquiring vital Director
          Identification Numbers (DIN) and Digital Signature Certificates (DSC).
          Additionally, we offer assistance with PAN and TAN applications and
          facilitate the establishment of a dedicated company bank account.
        </p>
        <p>
          Our proficient team is dedicated to ensuring strict adherence to
          regulatory standards, encompassing compliance with the Foreign
          Exchange Management Act (FEMA), Companies Act, 2013, Reserve Bank of
          {cityName} (RBI) regulations, and the Income Tax Act, 1961. With
          Registerkaro as your partner, you can initiate and grow your Indian
          subsidiary business confidently and efficiently.
        </p>
        </div>
      </div>
    </div>
  );
};
