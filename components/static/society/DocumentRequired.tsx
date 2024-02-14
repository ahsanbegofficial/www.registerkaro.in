import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/pvt-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocumentRequired = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Documents'>
      <div >
      <div className='flex justify-content-center'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={382} loading="lazy" src={dft} />
      </div>
        <p>The following are the documents required for Society Registration in India:</p>
        <h3>PAN Card</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN card of all the members of the proposed society has to be submitted along with the application.</li>
        </ul>
        <h3>Residence Proof</h3>
        <ul className='tick list-unstyled'>
          <li>The residence proof of all the members of the society also has to be submitted. The following can be used as valid residence proof:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Bank Statement</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Aadhaar Card</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Utility Bill</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Driving License</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Passport</li>
        </ul>
        
        <h3>Memorandum of Association</h3>
        <ul className='tick list-unstyled'>
          <li>The memorandum of association has to be prepared which will contain the following clauses and information</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The work and the objectives of the society for which it is being established.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The details of the members forming the society.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />It will contain the address of the registered office of the society.</li>
        </ul>
        
        <h3>Rules & Regulations of the Society</h3>
        <ul className='tick list-unstyled'>
          <li>The rules and regulations of the society also have to be prepared which will contain the following information:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Rules and regulations by which the working of the society will be governed and the maintenance of day to day activities.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />It will contain the rules for taking the membership of the society.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The details about the meetings of the society and the frequency with which they are going to be held is to be mentioned.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Information about the Auditors.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Forms of Arbitration in case of any dispute between the members of the society.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Ways for the dissolution of the society will also be mentioned</li>
        </ul>
        
        <h3>Covering letter</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A covering letter mentioning the objective or the purpose for which the society is being formed will be annexed to the beginning of the application. It will be signed by all the founding members of the society.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Once the rules have been formed, they can be changed but the new set of rules will be signed by the President, Chairman, Vice President and the Secretary of the Society.</li>
        </ul>
        <h3>Proof of Address</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A copy of the proof of address where the registered office of the society will be located along with a NOC from the landlord if any has to be attached.</li>
        </ul>
        <h3>List of all the members</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A list of all the members of the governing body has to be given along with their signatures.</li>
        </ul>
        
        <h3>Declaration</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> A declaration has to be given by the president of the proposed society that he is willing and competent to hold the said post.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> All the above documents have to be submitted to the Registrar of Societies along with the requisite fees in 2 copies. On receiving the application, the registrar will sign the first copy as acknowledgement and return it while keeping the second copy for approval. On proper vetting of the documents, the registrar will issue an Incorporation Certificate by allotting a registration number to it.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The signed Rules & Regulations, as well as Memorandum, has to be filed with the concerned society or registrar of state with a mentioned fee. If the registrar is fulfilled with the society registration application, then they will certify that the society is registered.</li>
        </ul>
        
       
      </div>
     
    </div>
  )
}