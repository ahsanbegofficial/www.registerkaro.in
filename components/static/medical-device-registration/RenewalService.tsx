
import Image from 'next/image'
import dft from '../../../assets/images/static/medical-device-registration/renewal.svg'

interface HeroProps {
    cityName: string;
}
export const RenewalService = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='RenewalService'>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className="flex-4 ">
            <Image
              alt="Validity/Renewal of Service"
              className="RenewalService-img w-100"
              height={220}
              loading="lazy"
              src={dft}
            />
          </div>
        <div className="flex-7">
          <p>
          Registration Certificate validity typically ranges from 1 to 5 years, subject to renewal before expiration
          </p>
        </div>
      
      </div>
    </div>
  );
};


