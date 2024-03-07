import Image from "next/image";
import ngo_registration_process from "../../../assets/images/static/ngo/ngo_registration_process_new.svg";
interface HeroProps {cityName: string;}
export const HowToRegister = ({ cityName }: HeroProps)  => {

  return (
    <div className="Classification flex w-80 m-auto mobile-flex-column-reverse"id="HowToRegister" >
      <div className="flex-6">
        <p>The following is the process for NGO Registration in {cityName}:</p>
        <p><strong>1: Type Determination:</strong> Choose the suitable NGO structure – Trust, Society, or Section 8 Company – based on your organization’s objectives.</p>
        <p><strong>2: Name Selection:</strong> Choose a unique name reflecting your mission.</p>
        <p><strong>3: Drafting MoA and AoA:</strong> Prepare the Memorandum and Articles of Association.</p>
        <p><strong>4: Governing Body Formation:</strong> Establish a governing body or managing committee.</p>
        <p><strong>5: Registered Office Designation:</strong> Provide an official address for communication.</p>
        <p><strong>6: Documentation Preparation: </strong>Gather required identity proofs, address proofs, and photographs.</p>
        <p><strong>7: Registration Application Submission:</strong> Submit the application to the relevant authority – Registrar of Trusts, Registrar of Societies, or Registrar of Companies.</p>
        <p><strong>8: Review and Approval:</strong> Await review, with possible clarification requests.</p>
        <p><strong>9: Registration Certificate Obtention:</strong> Upon approval, obtain the registration certificate.</p>
        <p><strong>10: Tax Exemption Application:</strong> Apply for tax exemptions under relevant sections.</p>
        <p><strong>11: Compliance and Reporting:</strong> Adhere to statutory requirements, including accounts maintenance, annual returns filing, and audited financial statements submission.</p>
      </div>
      <div className="flex-4">

        <Image
          alt="the process for NGO Registration in India"
          className="HowToRegister-img w-100"
          loading="lazy"
          src={ngo_registration_process}
          height={790}
        />
      </div>
    </div>
  );
};
