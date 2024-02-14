import Image from 'next/image'
import pvtReg from '../../../assets/images/pvt-reg/pvt-reg.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const EventBased = () => {
  return (
    <div className='pvtReg flex w-80 m-auto' id='What'>
      <div className='w-70'>
        <p>These compliances are required to be filed only once during the incorporation process. Following is the list of event-based compliances:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Transfer of Shares</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Appointment or Resignation or Removal of Director</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Any change in the name of the Company</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Increase in the Authorized Capital of the Company</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Any changes in the Company’s objective</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Change in registered office address</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Any other changes that are event-based</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Appointment of the KMP (Key Managerial Personnel)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Increase in the authorized capital of the Company</li>
        </ul>
      </div>
      <div className='w-30'>
        <Image alt="Private Limited Company sample" className="PvtReg-img" loading="lazy" src={pvtReg}/>
      </div>
    </div>
  )
}