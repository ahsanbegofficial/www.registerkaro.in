

import Image from 'next/image'
import dft from '../../../assets/images/static/medical-device-registration/why_bookkeeping_acc.svg'

interface HeroProps {
    cityName: string;
}
export const MandatoryCom = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCom'>
    <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className="flex-4 ">
            <Image
              alt="Mandatory Compliance Attached with Service"
              className="MandatoryCom-img w-100"
              height={220}
              loading="lazy"
              src={dft}
            />
          </div>
        <div className="flex-7">
          <p>
          Post-market surveillance, adverse event reporting, compliance with labeling and advertising requirements, conformity with manufacturing standards, and maintaining an effective quality management system are mandatory for manufacturers
          </p>
        </div>
      
      </div>
    </div>
  );
};
