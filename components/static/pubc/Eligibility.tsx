import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../assets/images/static/private-reg/HowToRegister/arrow.svg'
import five from '../../../assets/images/static/private-reg/HowToRegister/five.svg'
import four from '../../../assets/images/static/private-reg/HowToRegister/four.svg'
import one from '../../../assets/images/static/private-reg/HowToRegister/one.svg'
import seven from '../../../assets/images/static/private-reg/HowToRegister/seven.svg'
import eight from '../../../assets/images/static/private-reg/HowToRegister/eight.svg'
import nine from '../../../assets/images/static/private-reg/HowToRegister/nine.svg'
import six from '../../../assets/images/static/private-reg/HowToRegister/six.svg'
import three from '../../../assets/images/static/private-reg/HowToRegister/three.svg'
import two from '../../../assets/images/static/private-reg/HowToRegister/two.svg'

export const Eligibility = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='How'>
      <p className='main-para mb-0'>Following is the eligibility for Public Limited Company Registration:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="Minimum Directors" loading="lazy" width={30} height={30} /><div className='pe-4'> Minimum Directors</div>
              <Image src={arrow} alt="Minimum Directors" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="Shareholders" loading="lazy" width={30} height={30} /><div className='pe-4'> Shareholders</div>
              <Image src={arrow} alt="Shareholders" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="Authorized Capital" loading="lazy" width={30} height={30} /><div className='pe-4'> Authorized Capital</div>
              <Image src={arrow} alt="Authorized Capital" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="DIN and DSC" loading="lazy" width={30} height={30} /><div className='pe-4'> DIN and DSC</div>
              <Image src={arrow} alt="DIN and DSC" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="Name Approval" loading="lazy" width={30} height={30} /><div className='pe-4'> Name Approval</div>
              <Image src={arrow} alt="Name Approval" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="Registered Office" loading="lazy" width={30} height={30} /><div className='pe-4'> Registered Office</div>
              <Image src={arrow} alt="Registered Office" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="Compliance with Laws" loading="lazy" width={30} height={30} /><div className='pe-4'> Compliance with Laws</div>
              <Image src={arrow} alt="Compliance with Laws" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={eight} alt="Board Meetings and Annual General Meetings" loading="lazy" width={30} height={30} /><div className='pe-4'> Board Meetings and Annual General Meetings</div>
              <Image src={arrow} alt="Board Meetings and Annual General Meetings" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="Statutory Compliance" loading="lazy" width={30} height={30} /><div className='pe-4'> Statutory Compliance</div>
              <Image src={arrow} alt="Statutory Compliance" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Minimum Directors</h3>
            <p>You need a minimum of three directors to register a public limited company in India. Out of these directors, at least one must be a resident of India.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Shareholders</h3>
            <p>A public limited company should have a minimum of seven shareholders. There is no maximum limit on the number of shareholders allowed.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Authorized Capital</h3>
            <p>While there is no specific minimum requirement for authorized capital, you need to declare the amount of authorized capital during the registration process.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: DIN and DSC</h3>
            <p>All directors of the company must obtain a Director Identification Number (DIN) and a Digital Signature Certificate (DSC). The DIN can be obtained by submitting an online application to the Ministry of Corporate Affairs, and the DSC is necessary for filing documents online.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Name Approval</h3>
            <p>The proposed name for your public limited company must be unique and not resemble any existing registered companies or trademarks. It should also adhere to the naming guidelines provided by the Ministry of Corporate Affairs.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Registered Office</h3>
            <p>Your company must have a registered office address in India, which will serve as the official communication and legal address. You will need to provide documentation proving ownership or a lease agreement for the registered office.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Compliance with Laws</h3>
            <p>It is crucial to comply with all applicable laws and regulations, including the Companies Act, 2013, and other relevant statutes governing public limited companies.</p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>8: Board Meetings and Annual General Meetings</h3>
            <p>Conduct regular board meetings and an Annual General Meeting (AGM) to discuss important company matters, financial statements, and decision-making. Accurate minutes of these meetings should be maintained.</p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>9: Statutory Compliance</h3>
            <p>Fulfilling statutory compliance requirements is essential. This includes filing annual financial statements, appointing auditors, and adhering to tax and regulatory obligations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
