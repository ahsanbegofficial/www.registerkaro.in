import Image from 'next/image'
import procedure_for_indian_subsidiary_registration from '../../../assets/images/static/Indian_subsidiary_registration/procedure_for_indian_subsidiary_registration_new.svg'
interface HeroProps {cityName: string;}
export const Procedure = ({ cityName }: HeroProps) => {


  return (
    <div  id='Procedure'>
        <p className='main-para'>Establishing an Indian subsidiary company involves a comprehensive series of steps and compliance measures. Below is a detailed guide outlining the step-by-step process for Indian Subsidiary Registration in {cityName}:</p>
    <div  className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Procedure'>
      
      <div className='flex-7'>
        <p><strong>Determine the Type of Company:</strong> Decide on the specific type of subsidiary company you intend to establish.</p>
        <p><strong>Obtain Digital Signature Certificate (DSC):</strong> Since the registration process is conducted online, secure a Digital Signature Certificate (DSC) for the proposed directors of the company. This certificate is essential for electronically signing the necessary documents during the registration process.</p>
        <p><strong>Apply for Director Identification Number (DIN):</strong> Directors of the subsidiary company must obtain a Director Identification Number (DIN) from the Ministry of Corporate Affairs (MCA). This is achieved by submitting the DIN application online.</p>
        <p><strong>Name Approval:</strong> Choose a distinctive name for your subsidiary company and apply for its approval through the MCA’s online portal. Ensure that the chosen name complies with the naming guidelines provided by the MCA.</p>
        <p><strong>Draft Memorandum of Association (MoA) and Articles of Association (AoA):</strong> Prepare the legal documents, MoA and AoA, which delineate the company’s objectives, rules, and regulations, following the guidelines of the Companies Act 2013.</p>
        <p><strong>File Incorporation Documents:</strong> Once the chosen name is approved, file the incorporation documents, including MoA, AoA, and other required forms, with the Registrar of Companies (ROC) through the MCA’s online portal. The SPICe+ form is typically used for the incorporation process on the Ministry of Corporate Affairs portal.</p>
        <p><strong>Payment of Registration Fees: </strong>Pay the applicable registration fees to the ROC based on the authorized capital of the subsidiary company.</p>
        <p><strong>Obtain a Certificate of Incorporation (COI):</strong> If all submitted documents and information are in order, the ROC will issue a Certificate of Incorporation, officially confirming the registration of the subsidiary company.</p>
        <p><strong>Apply for Permanent Account Number (PAN) and Tax Registration:</strong> After obtaining the COI, apply for a Permanent Account Number and a Tax Deduction and Collection Account Number from the Income Tax Department for the subsidiary company.</p>
        <p><strong>Open Bank Account:</strong> Conclude the process by opening a bank account in the name of the subsidiary company in {cityName}.</p>
        <p><strong>Compliance with Other Regulations:</strong> Apart from the company registration process, ensure compliance with other relevant regulations.</p>
        <p><strong>Obtain a GST Number:</strong> Goods and Services Tax (GST) registration is required after completing the aforementioned steps, particularly if the company engages in various business activities. Every Indian company must apply for a GST number for taxation purposes.</p>
        <p><strong>Initiating Business Operations:</strong> Once all the preceding steps are completed, the subsidiary company can commence its business operations. This marks the culmination of the comprehensive process of registering and initiating operations for an Indian subsidiary company.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Procedure for Indian Subsidiary Registration,Determine the Type of Company,Obtain Digital Signature Certificate (DSC),Apply for Director Identification Number" className="Procedure-img w-100" loading="lazy" width={350} src={procedure_for_indian_subsidiary_registration} />
      </div>
     
    </div>
    </div>

  )
}
