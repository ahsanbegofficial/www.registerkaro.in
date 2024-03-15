
import Image from 'next/image'
import dft from '../../../assets/images/static/iec-registration/What_is_the_eligibility _get.svg'

interface HeroProps {
    cityName: string;
}
export const Eligibility = ({ cityName }: HeroProps) => {
  return (
    <div  id='Eligibility'>
      <div className=' flex w-80 m-auto mobile-flex-column'>
        <div className='flex-4 '>
            <Image alt="What is the eligibility to get the Import Export Code in India?" className="Eligibility-img w-100" height={300} loading="lazy" src={dft} />
        </div>
        <div className='flex-6 pt-5'>
             <p>Any type of business such as Private Limited Companies, Partnership, Sole Proprietorship, or charitable organisations dealing with Imports and Exports in {cityName} can apply for IEC Registration, irrespective of the business size. However, IEC Number is not needed for import or export of products for personal use, which aren’t connected with manufacture, agriculture, or trade and there is no need for business set up.</p>
        </div>

        </div>
    </div>
  )
}