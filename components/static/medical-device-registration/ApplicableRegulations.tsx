import Image from 'next/image'
import dft from '../../../assets/images/static/medical-device-registration/applicable.svg'

interface HeroProps {
    cityName: string;
}
export const ApplicableRegulations = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ApplicableRegulations'>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className="flex-7">
          <p>
            Medical Device Rules, 2017, governed by the Central Drugs Standard
            Control Organization (CDSCO) under the Drugs and Cosmetics Act, 1940.
          </p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Applicable Rules/Acts/ Regulations"
            className="ApplicableRegulations-img w-100"
            height={260}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
