
import Image from 'next/image'
import dft from '../../../assets/images/static/medical-device-registration/device_medical.svg'

interface HeroProps {
    cityName: string;
}
export const MedicalDeviceRegistration = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MedicalDeviceRegistration'>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
      
        <div className="flex-7">
          <p>
          Involves document submission, CDSCO evaluation, potential queries, review periods, and final approval or rejection, varying based on application complexity
          </p>
        </div>
        <div className="flex-4 ">
            <Image
              alt="What is the Medical Device Registration procedural timeline of the service involved?"
              className="MedicalDeviceRegistration-img w-100"
              height={260}
              loading="lazy"
              src={dft}
            />
          </div>
      
      </div>
    </div>
  );
};

