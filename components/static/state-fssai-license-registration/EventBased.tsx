import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/state-fssai-license-registration/Role_of_Food_Safety_Standard_Authority.svg'

export const EventBased = () => {
  return (
    <div id='EventBased'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="Role of Food Safety Standard Authority of India" className="Safety-img w-100" height={300} loading="lazy" src={bft} />

      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1:</strong>Developing rules and standards for the food industry.</p>
      <p><strong>2:</strong>Launching food safety awareness efforts.</p>
      <p><strong>3:</strong>Establishing norms and criteria for food testing labs.</p>
      <p><strong>4:</strong>Issuing guidelines to food business owners.</p>
      <p><strong>5:</strong>Gathering data on pollutants in food goods in order to provide recommendations to the Indian government on additional provisions.</p>
      <p><strong>6:</strong>Using a quick alert system to identify problems in publicly available food products.</p>
      </div>
     </div>
      <p className='main-para mt-4'>The FSSAI has backed stringent criteria for proprietary food facilities, as the majority of them operate without any regulations. FSSAI has mandated that the following facilities obtain FSSAI license without exception. According to the FSSAI, unregistered proprietary food units are not permitted to operate without a valid food license.</p>
      <p className='main-para'>To guarantee the highest standards of food safety and hygiene, FSSAI has implemented required regulations for food bank operations and regulated the manufacturing, storage, sale, and distribution processes. In order to raise public awareness and provide reliable information on food safety and cleanliness, the authority has also established a legitimate information network.</p>
      </div>
  )
}
