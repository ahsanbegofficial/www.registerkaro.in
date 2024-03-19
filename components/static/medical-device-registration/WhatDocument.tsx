import Image from "next/image";
import React from "react";
import bft from '../../../assets/images/static/medical-device-registration/What_are_the_Documents_or_Paperwork_required_for_Medical_Device_Registration.svg'
interface HeroProps {
    cityName: string;
}
export const WhatDocument = ({ cityName }: HeroProps) => {
  return (
    <div id="WhatDocument">
      <p className="main-para mb-2">
        The documentation and paperwork required for Medical Device Registration
        in {cityName} typically include a comprehensive set of technical, clinical,
        and manufacturing information to ensure compliance with regulatory
        standards. The specific documents may vary based on the device
        classification and the regulatory pathway chosen. Here is a general list
        of the documents/paperwork often required from the client:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-7 pt-5">
          <p>
            <strong>1: Device Details: </strong> Description of the medical device, including its intended use, specifications, technical characteristics, and components.
          </p>
          <p>
            <strong>2: Manufacturing Information: </strong> Details about the manufacturing process, quality management system (QMS), standard operating procedures (SOPs), and conformity with ISO 13485 or equivalent quality standards.
          </p>
          <p>
            <strong>3: Product Testing Data: </strong> Testing reports and data showcasing the device’s safety, performance, and efficacy. This includes preclinical and clinical evaluation data, where applicable.
          </p>
          <p>
            <strong>4: Conformity to Standards: </strong> Evidence of conformity with Indian or international standards applicable to the specific device category.
          </p>
          <p>
            <strong>5: Labelling and Instructions for Use (IFU): </strong> Labels, packaging details, and comprehensive instructions for use, ensuring clarity and compliance with labeling requirements.
          </p>
          <p>
            <strong>6: Stability Data: </strong> Data demonstrating the stability of the device under various conditions to ensure its effectiveness over its shelf life.
          </p>
          <p>
            <strong>7: Clinical Data (if required): </strong> Clinical trial reports, study protocols, and data demonstrating the device’s safety and efficacy in clinical settings, especially for higher-risk devices.
          </p>
          <p>
            <strong>8: Biocompatibility Data: </strong> Documentation proving the device’s biocompatibility, indicating it’s safe for use within the human body.
          </p>
          <p>
            <strong>9: Risk Management Documentation: </strong> Risk assessment reports, hazard analysis, and mitigation plans demonstrating how potential risks associated with the device are managed.
          </p>
          <p>
            <strong>10: Registration Fees and Application Forms: </strong> Submission of the prescribed application forms along with the required fees as per regulatory guidelines.
          </p>
          <p>
            <strong>11: Authorized Representation Documents: </strong> For foreign manufacturers, documents appointing an authorized representative in {cityName} for regulatory purposes.
          </p>
          <p>
            <strong>12: Certificates and Declarations: </strong> Certificates of free sale, non-circulation, or non-toxicity, along with declarations of conformity or compliance.
          </p>
        </div>
        <div className="flex-4 mt-5">
          <Image
            alt="What are the Documents or Paperwork required for Medical Device Registration?"
            className="WhatDocument-img w-100"
            height={960}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para">It’s crucial to note that the specific requirements and the extent of documentation may vary based on the classification of the medical device, its intended use, risk level, and the regulatory pathway chosen for registration. Manufacturers or applicants should ensure that all documents provided are accurate, complete, and compliant with the regulatory standards outlined by the Central Drugs Standard Control Organization (CDSCO) and the Medical Device Rules, 2017.</p>
    </div>
  );
};
