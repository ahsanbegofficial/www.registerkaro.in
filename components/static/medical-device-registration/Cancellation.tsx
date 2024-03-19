
import Image from 'next/image'
import dft from '../../../assets/images/static/medical-device-registration/future.svg'
interface HeroProps {
    cityName: string;
}

export const Cancellation = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Cancellation'>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
       
        <div className="flex-7">
          <p>
          The CDSCO reserves the right to cancel, suspend, or revoke the Registration Certificate due to non-compliance, safety concerns, or inadequate surveillance
          </p>
        </div>
        <div className="flex-4 ">
            <Image
              alt="Cancellation/Suspension/Revocation of Service"
              className="Cancellation-img w-100"
              height={260}
              loading="lazy"
              src={dft}
            />
          </div>
      
      </div>
    </div>
  );
};


