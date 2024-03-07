import Image from 'next/image'
import compliance_requirements_for_indian_subsidiary_registration from '../../../assets/images/static/Indian_subsidiary_registration/compliance_requirements_for_indian_subsidiary_registration.svg'
interface HeroProps { cityName: string; }
export const Compilance = ({ cityName }: HeroProps) => {

  return (
    <div id='Compilance'>
      <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' >
        <div className='flex-3'>
          <Image alt="Compliance Requirements for Indian Subsidiary Registration,Foreign Exchange Management Act,Companies Act, 2013,Reserve Bank of India" className="Compilance-img w-100" loading="lazy" height={680} src={compliance_requirements_for_indian_subsidiary_registration} />
        </div>
        <div className='flex-7'>
          <p>Ensuring the establishment of a legally sound and valid Indian subsidiary company necessitates strict adherence to specific regulatory requirements, including:</p>
          <p><strong>1: Foreign Exchange Management Act (FEMA):</strong> Foreign companies operating in {cityName} must meticulously comply with the laws and regulations governing foreign exchange, as stipulated by the Foreign Exchange Management Act, 1999.</p>
          <p><strong>1: Companies Act, 2013: </strong>All Indian subsidiary companies are obligated to adhere to the provisions outlined in the Companies Act, 2013, ensuring compliance with the statutory framework governing corporate entities.</p>
          <p><strong>1: Reserve Bank of {cityName} (RBI) Compliances: </strong>Indian subsidiary companies are subject to various foreign exchange management compliances mandated by the Reserve Bank of {cityName} (RBI), contributing to the overall regulatory landscape.</p>
          <p><strong>1: Income Tax Act, 1961: </strong>Annual filing of income tax returns is a mandatory requirement for Indian subsidiaries, with compliance under the provisions of the Income Tax Act, 1961. The current corporate tax rate in {cityName} stands at 25%.</p>
          <p><strong>1: Annual Returns:</strong> Companies are obligated to submit annual returns to both the Ministry of Corporate Affairs (MCA) and the Registrar of Companies, reinforcing transparency and adherence to regulatory standards.</p>
          <p><strong>1: SEBI (Listing Obligations and Disclosure Regulations):</strong> Should the subsidiary opt to list its securities on a stock exchange, strict compliance with the Securities and Exchange Board of {cityName} (SEBI) regulations, specifically the Listing Obligations and Disclosure Regulations, becomes imperative.</p>
        </div>

      </div>
      <p className='main-para mt-4'>The confluence of these regulatory frameworks ensures that an Indian subsidiary company operates within the bounds of legality and remains compliant with the diverse aspects of corporate governance, financial transparency, and regulatory obligations.</p>
    </div>
  )
}