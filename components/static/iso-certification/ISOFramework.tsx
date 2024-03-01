import Image from 'next/image'
import iso_framework_and_controls from '../../../assets/images/static/iso-certification/iso_framework_and_controls.svg'
interface HeroProps {
  cityName: string;
}

export const ISOFramework = ({ cityName }: HeroProps) => {
  return (
    <div id='ISOFramework'>
        <p className='main-para'>ISO has developed various framework designed to aid organisations or companies better manage their business in their particular areas including:</p>
        <div className='ISOFramework flex w-40 m-auto mobile-flex-column-reverse' >
            <div className='flex-5 pt-5'>
              <p><strong>1:</strong>Safety;</p>
              <p><strong>2:</strong>Business Risk;</p>
              <p><strong>3:</strong>Environmental Impacts;</p>
              <p><strong>4:</strong>IT Security;</p>
              <p><strong>5:</strong>Quality;</p>
              <p><strong>6:</strong>Assets.</p>
            </div>
            <div className='flex-5 mt-3'>
              <Image alt="ISO Framework & Controls, ISO has developed various framework designed to aid organisations or companies better manage their business in their particular areas including:" className="ISOFramework-img w-100" height={352} loading="lazy" src={iso_framework_and_controls} />
            </div>
          </div>
    </div>
  )
}
