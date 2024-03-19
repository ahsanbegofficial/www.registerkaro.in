import Image from 'next/image'
import dft from '../../../assets/images/static/medical-device-registration/eligibility.svg'

interface HeroProps {
    cityName: string;
}
export const EligibilyMandatory = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='EligibilyMandatory'>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className="flex-4 ">
            <Image
              alt="What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites for Medical Device Registration?"
              className="EligibilyMandatory-img w-100"
              height={260}
              loading="lazy"
              src={dft}
            />
          </div>
        <div className="flex-7">
          <p>
          Manufacturers or their authorized representatives are eligible to apply. Pre-requisites include adherence to quality management system standards, product testing data and compliance with relevant standards
          </p>
        </div>
      
      </div>
    </div>
  );
};
