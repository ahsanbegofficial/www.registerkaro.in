import React from "react";
import Image from "next/image";
import supporting_documents_required_for_msme_registration from '../../../assets/images/static/msme-registration-online/supporting_documents_required_for_msme_registration.svg'
interface HeroProps { cityName: string; }
export const SupportingDocuments = ({ cityName }: HeroProps) => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='TypeBusiness'>
      <div className='flex-3 mt-5'>
      <p className="main-para my-2" id="SupportingDocuments">
        During the application process, you may need to upload supporting
        documents such as your Aadhaar card, PAN card, and proof of company
        address.
      </p>
      <p className="main-para my-2" id="SupportingDocuments">
        The Udyam Registration process boasts no MSME registration fees and
        eliminates the need for document proofs. The Udyam Registration Portal
        seamlessly retrieves PAN and GST-linked details from Government
        databases, thanks to its integration with the Income Tax and GSTIN
        systems. Notably, GST registration is optional for enterprises not
        requiring it; however, those mandated to obtain GST registration under
        the GST law must input their GSTIN for MSME or Udyam Registration.
      </p>
      </div>
      <div className='flex-3 mt-4'>
       <Image alt="Supporting Documents Required for MSME Registration Online" className="SupportingDocuments-img w-100" height={400} loading="lazy" src={supporting_documents_required_for_msme_registration} />
      </div>
    </div>
  );
};
