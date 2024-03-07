import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/Indian_subsidiary_registration/regularity.svg'

interface HeroProps {cityName: string;}
export const Classification = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Classification'>
      <div className='flex-7'>
       
          <p> The Ministry of Corporate Affairs (MCA) holds the pivotal responsibility of formulating and enforcing the comprehensive framework of rules and regulations that govern the intricate processes of company registration and compliance in {cityName}. Within this regulatory landscape, the Registrar of Companies (ROC) offices play a crucial role, overseeing and managing the procedural intricacies involved in the incorporation of companies. Their oversight extends to ensuring that companies meticulously adhere to the legal requirements, fostering an environment of accountability and adherence to statutory norms.</p>
          <p > Complementing this regulatory structure is the indispensable role played by the Reserve Bank of {cityName} (RBI), which assumes a pivotal position in regulating the foreign currency exchange aspects pertinent to Indian subsidiary companies. The RBI’s vigilant oversight is instrumental in ensuring the meticulous adherence of these companies to the intricate financial regulations in place. This extends to overseeing foreign investments, acquisitions, and transactions, safeguarding the financial integrity of Indian subsidiary companies and upholding the overall stability of the financial ecosystem.</p>
          <p> In essence, this collaborative triad of the Ministry of Corporate Affairs, Registrar of Companies, and Reserve Bank of {cityName} establishes a robust and comprehensive regulatory framework that not only facilitates the seamless registration and functioning of companies in {cityName} but also guarantees the strict adherence to legal and financial norms, thereby fostering an environment of transparency, accountability, and financial prudence within the corporate sector.</p>
      </div>
      <div className='flex-3'>
      <Image
          alt="The Ministry of Corporate Affairs (MCA) holds the pivotal responsibility of formulating and enforcing the comprehensive framework of rules and regulations that govern the intricate processes of company registration and compliance in India. Within this regulatory landscape, the Registrar of Companies (ROC) offices play a crucial role"
          className="Regularity-img w-100"
          loading="lazy"
          height={520}
          src={documents}
        />
      </div>
      </div>
  )
}