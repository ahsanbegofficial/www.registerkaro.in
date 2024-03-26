import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/shop-and-establishment-act-registration/advantages.svg'

interface HeroProps {
    cityName: string;
}
export const AdvantagesShop = ({ cityName }: HeroProps) => {

  return (
    <div className="DocumentButtonWise w-80 m-auto" id="AdvantagesShop">
      <p className="main-para">
        Following is the list of benefits that you can avail after getting Shop
        and Establishment Act Registration:
      </p>

      <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
        <div className="flex-7">
         <p><strong>1: Provides Legal Protection:</strong>
         
            This Licence provides legal protection to the business and its
            employees. It also ensures that the business is following all the
            labour laws and regulations, and protects employees from
            exploitation & unfair treatment.
          </p>

          <p><strong>2: Avoid unethical business practice:</strong>
       
            Child labour is very common in the unorganized sector. Despite a law
            prohibiting such activities, adolescents can be found working in a
            number of industries for extremely low rates from a café to a
            fabrication industry. The Shop & Establishment Act includes some
            strong anti-child labour regulations.
          </p>

          <p> <strong>3: Business Expansion:</strong>
          
            Essentially, an owner of the business who devotes 100% to the Shop
            Act’s requirements will be able to enjoy unanticipated rewards in
            the long term. The Shop and Establishment Act gives an entity or a
            company a legal status, allowing the business owner to have better
            exposure to a neglected part of the market over time.
          </p>

          <p> <strong>4: Avail Government Schemes and Subsidies:</strong>

            Many Government subsidies & schemes are available only to businesses
            that have a valid Shop & Establishment License. Businesses that have
            Shop & Establishment Act License can take benefit of these subsidies
            & schemes to lessen their operating costs & grow their business.
          </p>

          <p> <strong>
            5: Ease of opening Current bank account of the business:
          </strong>
        
            As per RBI regulations, every business must have a separate business
            account to manage its money. Under the Act, only a Shop and
            Establishment Act Registration Certificate can be used to create
            this business account.
          </p>
        </div>
        <div className='flex-4'>
          <Image alt="Advantages of Shop and Establishment Act Registration" className="AdvantagesShop-img w-100" height={650} loading="lazy" src={bft} />
      </div>
      </div>
    </div>
  );
};
