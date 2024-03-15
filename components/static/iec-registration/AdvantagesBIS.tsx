
import Image from 'next/image'
import dft from '../../../assets/images/static/iec-registration/Benefits_of_IEC.svg'
interface HeroProps {
    cityName: string;
}
export const AdvantagesBIS = ({ cityName }: HeroProps) => {

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='AdvantagesBIS'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>The following are the benefits of IEC Registration:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-7'>
           <p><strong>Lifetime Validity : </strong> There is no need to renew the IEC Code; it will be valid till the existence of the entity. After the winding up of the Company, this IEC Code expires.</p>
           <p><strong>Reduces illegal or unlawful goods transportation : </strong> One of the basic requirements for the IEC Code is that you need to submit authentic details. Without giving proper details, IEC cannot be obtained. This criterion makes the transportation of illegal products impossible.</p>
           <p><strong>No Compliance : </strong> After IEC Registration, there are no compliance requirements & hence maintaining the business is relatively simple.</p>
           <p><strong>Business Growth : </strong> This code is mandatory to avail of growth opportunities through export or import.</p>
           <p><strong>Easy Processing : </strong> It is very easy to get the IEC Code from the DGFT within 10 – 15 days after submitting the application.</p>
        </div>
        <div className='flex-4 '>
          <Image alt="Benefits of IEC Registration in India" className="benefits-img w-100" height={550} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
  
}
