import Image from 'next/image'
import components_of_a_trust_deed from '../../../assets/images/static/trust-registration/Components_oof_ Trust_Deed.svg.svg'

interface HeroProps { cityName: string;}
export const Components = ({ cityName }: HeroProps) => {
 
  return (
    <div id='Components'> 
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' >
   
      <div className='flex-7'>
      <p>A trust deed stands as a pivotal document delineating essential details and provisions governing a trust. It encompasses the following key clauses:</p>
      <p><strong>Operational Period:</strong> Specifies the duration or term for which the trust will remain in operation.</p>
      <p><strong>Registered Office Address:</strong> Indicates the official address of the trust’s registered office.</p>
      <p><strong>Geographical Scope:</strong> Defines the geographical area or region where the trust will conduct its activities.</p>
      <p><strong>Goals and Objectives:</strong> Outlines the goals and objectives that the trust aims to achieve.</p>
      <p><strong>Details of the Settlor:</strong> Provides information about the person establishing the trust (settlor) and details of the assets or property being transferred to the trust.</p>
      <p><strong>Board of Trustees Information:</strong> Includes details about the board of trustees, encompassing their membership, qualifications, terms, and tenure.</p>
      <p><strong>Roles, Responsibilities, and Powers of Trustees:</strong> Clearly defines the roles, responsibilities, and powers of the trustees.</p>
      <p><strong>Amendment Procedures:</strong> Outlines procedures for amending the trust deed and provisions for the closure or termination of the trust.</p>
      <p><strong>Legal Compliance Assurance:</strong> Ensures that the trust operates in accordance with relevant laws and regulations.</p>
      </div>
      <div className='flex-3'>
     <Image alt="Components of a Trust Deed, Operational Period, Registered Office Address, Geographical Scope, Goals and Objectives, Details of the Settlor, Board of Trustees Information, Roles, Responsibilities, and Powers of Trustees, Legal Compliance Assurance" className="Components-img w-100" loading="lazy" src={components_of_a_trust_deed} height={640} />
      </div>
    </div>
    <p className='main-para mt-4'>The trust deed serves as a legally binding document, providing clarity and guidance to all parties involved in the operations and functioning of the trust.</p>
  </div>
  )
}