import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/fssai-central-license/Fundamental_Duties.svg'

interface HeroProps { cityName: string;}
export const FundamentalDuties = ({ cityName }: HeroProps) => {
  return (
    <div id="FundamentalDuties">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className='flex-7'>
          <p>
            <strong>
              Formulating Guidelines and Norms for Food Safety and Hygiene:
            </strong>
            Meticulously crafting comprehensive guidelines and norms to
            establish benchmarks for food safety practices and hygiene
            standards. Ensuring a robust regulatory framework that prevents and
            mitigates risks associated with unsafe food practices.
          </p>
          <p>
            <strong>
              Launching Initiatives Nationwide for Food Safety Awareness:
            </strong>
            Spearheading nationwide initiatives to educate and sensitize the
            masses about the critical importance of adhering to food safety
            norms. Fostering a pervasive culture of awareness to empower
            individuals and communities to make informed choices for enhanced
            public health.
          </p>
          <p>
            <strong>
              Granting Mandatory Food License and Registration to Food Business
              Operators:
            </strong>
            Issuing mandatory food licenses and registrations to food business
            operators (FBOs) engaged in the production, distribution, and sale
            of food. Reinforcing accountability and compliance within the food
            industry to guarantee the quality and safety of food products in the
            market.
          </p>
          <p>
            <strong>
              Facilitating Recommendations to GOI for New Policies:
            </strong>
            Functioning as an advisory body to facilitate recommendations to the
            Government of {cityName} (GOI) for the formulation of new policies
            related to food safety and standards. Engaging in continuous
            research and collaboration to propose innovative measures responsive
            to the evolving landscape of the food industry.
          </p>
          <p>
            <strong>
              Rolling Out Directions and Guidelines in View of FSS Act, 2006:
            </strong>
            Disseminating directives and guidelines in adherence to the Food
            Safety and Standards Act of 2006. Providing a compass for entities
            within the food sector, outlining requisite standards and protocols
            to ensure compliance with the legislative framework.
          </p>
          <p>
            <strong>Taking Legal Actions Against Illicit Practices:</strong>
            Vigilantly taking legal actions against food businesses allegedly
            involved in illicit practices such as food adulteration. Operating
            within a stringent legal framework to uphold the integrity of the
            food supply chain and safeguard the interests of consumers.
          </p>
        </div>
        <div className='flex-4 mt-5'>
              <Image alt="Fundamental Duties and Functions performed by FSSAI" className="FundamentalDuties-img w-100" height={550} loading="lazy" src={bft} />
          </div>
      </div>
      <p className='main-para'>
        In summary, the Food Safety and Standards Authority of {cityName}, through
        its multifaceted duties and functions, emerges as a stalwart guardian of
        public health and safety, actively shaping and regulating the landscape
        of the nation’s food industry to ensure the well-being of its citizens.
      </p>
    </div>
  );
};
