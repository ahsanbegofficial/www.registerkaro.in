import Image from 'next/image'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import two from '../../../assets/images/pvt-reg/checklist/two.png'

interface HeroProps { cityName: string; }

export const Checklist = ({ cityName }: HeroProps) => {
  return (
    <div className='checklist' id='Checklist'>
      <p className='main-para'>Following is the important checklist for Private Limited Company Registration in { cityName }:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="A minimum of 2 Directors are required"/>
          </div>
          <p>A minimum of 2 Directors are required</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="A minimum capital of Rs. 5 lakhs required;"/>
          </div>
          <p>A minimum capital of Rs. 5 lakhs required;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Out of 10 members, at least 5 Directors are required;"/>
          </div>
          <p>Out of 10 members, at least 5 Directors are required;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
          </div>
          <p>This Company can be established by the joining of at least 2 Institutions</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={five} alt="Producer Company cannot be converted into a Public Limited Company."/>
          </div>
          <p>Producer Company cannot be converted into a Public Limited Company.</p>
        </div>
      </div>
    </div>
  )
}
