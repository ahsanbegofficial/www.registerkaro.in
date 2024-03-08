import Image from 'next/image'
import sole_propretoship from "../../../assets/images/static/startup_india_registration/sole_propretoship.svg"
import partnership_deed from "../../../assets/images/static/startup_india_registration/partnership_deed.svg"
import older_than_ten_years from "../../../assets/images/static/startup_india_registration/older_than_ten_years.svg"
import annual_turnover_rupees from "../../../assets/images/static/startup_india_registration/annual_turnover_rupees.svg"
interface HeroProps {cityName: string;}
export const Checklist = ({ cityName }: HeroProps) => {
  return (
    <div className='checklist' id='Checklist'>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={sole_propretoship} alt="Sole Proprietorship;" />
          </div>
          <p>Sole Proprietorship;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={partnership_deed} alt="Firm constitute by the Notary Partnership Deed;" />
          </div>
          <p>Firm constitute by the Notary Partnership Deed;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={older_than_ten_years} alt="Company is older than 10 years;" />
          </div>
          <p>Company is older than 10 years;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={annual_turnover_rupees} alt="If the annual turnover of the company is more than Rs. 100 crores." />
          </div>
          <p>If the annual turnover of the company is more than Rs. 100 crores.</p>
        </div>
      </div>
    </div>
  )
}