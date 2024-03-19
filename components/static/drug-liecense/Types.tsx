import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/drug-license/Types_of_Drug_License_Registration.svg";

interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
      <p className="main-para">
          There are numerous kinds of licensing for drugs. However, depending on its needs, a business unit can need a different permit. Here are some common categories of drug licenses:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-7 pt-5">
          <p><strong>1 : </strong> Manufacturing License: This license is intended for a company that produces allopathic and homeopathic medications.</p>
          <p><strong>2 : </strong> Sale License: Depending on the firm's operations, the sale license falls into one of two subcategories:</p>
          <p className="ms-2">License for Drug Wholesale: The applicant must register under the wholesale category if his company deals in drugs.</p>
          <p className="ms-2">Drug Retail License: In the event that the candidate agrees to sell the medications through pharmacies, retail stores, and medical facilities. Next, he needs to register himself using the drug sale license application exclusively.</p>
          <p><strong>3 : </strong> Loan License: In accordance with the Drugs and Cosmetic Act, the applicant must get a loan license in order to manufacture drugs if he plans to use staff, machinery, or other resources belonging to a previously registered manufacturer.</p>
          <p><strong>4 : </strong> Import License: Let's say the applicant wants to bring medications into {cityName} from any other country. If so, in order to acquire the required licenses to sell them in {cityName}, they would need to apply for an import license with CDSCO.</p>
          <p><strong>5 : </strong> Food and Drug Administration (FDA) License: Before a business may sell food, medications, cosmetics, or medical supplies in the United States, it must obtain an FDA license. They ensure that using these goods is safe for consumers. So, if a company wants to sell any of these products in the USA, they have to get an FDA license first. </p>

        </div>
        <div className="flex-4 mt-5">
          <Image
            alt="Types of Drug License Registration"
            className="Types-img w-100"
            height={600}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    
    </div>
  );
};
