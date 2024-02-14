import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/nidhi-reg/procedur.svg'

export const Procedure = () => {
  return (
    <div className='Procedure  flex w-80 m-auto mobile-flex-column-reverse' id='Procedure'>

      <div className='flex-7'>
        <p>The detailed process for applying for Trust Registration is outlined below:</p>
        <p><strong>1. Name of the Trust:</strong></p>
        <p>Choose an appropriate name for the trust that adheres to the provisions of relevant acts, including Trademarks, Copyrights Act, Intellectual Property Rights Act, and Emblems and Names Act, 1950.</p>
        <p><strong>2. Settlers of the Trust:</strong></p>
        <p>Determine the individuals who will act as settlers of the trust. While there is no restriction on the number of trustees, a minimum of two trustees is required. The author of the trust cannot be a trustee, and all trustees must be residents of India.</p>
        <p><strong>3. Memorandum of Association (MOA):</strong></p>
        <p>Prepare a Memorandum of Association (MOA) outlining the objectives and purpose for which the trust is being formed. Ensure that the goals stated in the MOA are legally permissible.</p>
        <p><strong>4. Draft the Trust Deed:</strong></p>
        <p>Create a legally binding trust deed that establishes the trust. The trust deed, containing all terms and conditions agreed upon by the author, trustees, and beneficiaries, must be presented to the registrar during the registration process.</p>
        <p><strong>5. Submission to the Registrar:</strong></p>
        <p>Submit the drafted trust deed and other required documents to the registrar. This involves the active participation of the author, trustees, and beneficiaries.</p>
        <p><strong>6. Review by the Registrar:</strong></p>
        <p>After reviewing the submitted documents, the trust will be registered if the registrar is satisfied with their validity and compliance.</p>
        <p><strong>7. Certificate of Trust Registration:</strong></p>
        <p> Upon approval, the registrar will issue a trust registration certificate. Trustees and the trustor should retain this certificate. Subsequently, the trust, now registered, can open a bank account in its name.</p>
       
      </div>
      <div className='flex-3'>
        <Image alt="Private Limited Company sample" className="Procedure-img w-100" loading="lazy" height={430} src={ProcedureReg} />
      </div>
    </div>
  )
}