import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/fssai/who.svg'

export const OtherAnnual = () => {
  return (
    <div id='OtherAnnual'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={850} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p><strong>To obtain BIS Certification, applicants must provide a comprehensive set of documents, including but not limited to:</strong></p>
      <p><strong>1: </strong>Name and Address proof of the applicant and the factory.</p>
      <p><strong>2: </strong>Proof of Establishment of Manufacturing Unit, such as Certificate of Incorporation or Registration Certificate, MOA, etc.</p>
      <p><strong>3: </strong>SSI or MSME Certificate.</p>
      <p><strong>4: </strong>Details of Outsourcing of the manufacturing process.</p>
      <p><strong>5: </strong>Layout plan.</p>
      <p><strong>6: </strong>Location plan of the factory.</p>
      <p><strong>7: </strong>Manufacturing Process Flow.</p>
      <p><strong>8: </strong>Detailed List of Machinery involved.</p>
      <p><strong>9: </strong>List of Testing equipment and facilities.</p>
      <p><strong>10: </strong>Calibration Certificates of testing equipment.</p>
      <p><strong>11: </strong>3rd party laboratory test report as per the Indian Standards.</p>
      <p><strong>12: </strong>If an authorized signatory signs the Application, an authorization letter from the CEO in the name of the authorized signatory.</p>
      <p><strong>13: </strong>In the case of Overseas or foreign manufacturers, details of the Indian Agent and Nomination Form.</p>
      <p><strong>14: </strong>Technical details of products, such as PCB Layout, Schematic Diagrams, User Manual, and Critical Components List.</p>
      <p><strong>15: </strong>Acknowledgment receipt.</p>
      <p><strong>16: </strong>Letter of Consent from CEO of the Company.</p>
      <p><strong>17: </strong>Undertaking and Affidavit attested with ID Proof and the signature of the approved Indian Representative (in the case of a foreign or overseas manufacturer).</p>
      <p><strong>18: </strong>Original Test Reports from BIS Laboratory.</p>
      <p><strong>19: </strong>Undertaking related to the test report.</p>
      </div>
     </div>
    </div>
  )
}
