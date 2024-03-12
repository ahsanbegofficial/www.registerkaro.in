import Image from "next/image";
import dft from "../../../assets/images/static/cdsco-registration/What_Eligibility.svg";
interface HeroProps {cityName: string;}
export const AdvantagesBIS = ({ cityName }: HeroProps) => {


  return (
    <div id="AdvantagesBIS">
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
        <p><strong>Legal Entity or Authorized Representative : </strong> Manufacturers or their authorized representatives intending to market pharmaceuticals, medical devices, cosmetics, or diagnostics in {cityName} are eligible.</p>
        <p><strong>Compliance with Quality Standards : </strong> Entities seeking registration must adhere to stringent quality management systems and standards specified by CDSCO. This includes compliance with Good Manufacturing Practices (GMP), Good Clinical Practices (GCP), and other applicable norms.</p>
        <p><strong>Necessary Testing Data : </strong> Submission of comprehensive testing data and documentation verifying the safety, efficacy, and quality of the product is mandatory. This includes detailed information on formulation, manufacturing process, stability data, and clinical trial results, if applicable.</p>
        <p><strong>Conformity with Regulatory Norms : </strong> Demonstrating conformity with regulatory requirements specific to the category of the product (pharmaceuticals, medical devices, cosmetics, etc.) is essential. This involves compliance with relevant Drugs and Cosmetics Act provisions, Medical Device Rules, and other applicable guidelines.</p>
        <p><strong>Quality Management System (QMS) Certification : </strong> Having a robust QMS in place is mandatory. Obtaining certifications such as ISO 13485, which outlines requirements for a quality management system for medical devices, is often necessary for medical device registration.</p>
        <p><strong>Documentation and Data Integrity : </strong> Providing accurate and comprehensive documentation that maintains data integrity throughout the regulatory process is fundamental. Any falsification or misleading information can lead to the rejection or cancellation of the registration application.</p>
        <p><strong>Labeling and Packaging Compliance : </strong> Ensuring compliance with labeling and packaging regulations set by CDSCO is critical. Clear and accurate labeling with essential information, such as product composition, dosage, instructions for use, and warnings, is mandatory.</p>
        <p><strong>Clinical Trial Data (If Applicable) : </strong> If the product requires clinical trial data, providing evidence from well-designed and conducted trials is essential. This data substantiates claims regarding the product’s safety and efficacy.</p>

        </div>
        <div className='flex-3'>
          <Image alt="What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites" className="Eligibility-img w-100" height={890} loading="lazy" src={dft} />
        </div>
      </div>

    </div>
  );
};
