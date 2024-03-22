import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-central-license/validity.svg";
interface HeroProps { cityName: string}
export const ValidityRenewal = ({ cityName }: HeroProps) => {
  return (
    <div id="ValidityRenewal">
      <p className="main-para mb-2">
        The following are the advantages of getting FSSAI Central License:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 mt-5">
          <Image
            alt="Validity and Renewal of FSSAI Central License"
            className="ValidityRenewal-img w-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            <strong>1: Validity Duration:</strong>The Central FSSAI license
            offers a flexible validity ranging from 1 to 5 years. The associated
            cost increases in alignment with the chosen validity period.
          </p>
          <p>
            <strong>2 Renewal Process:</strong>For seamless continuity, the
            FSSAI Central License must be renewed before the expiration date,
            ideally within 30 days. Failure to renew within this timeframe may
            result in penalties.
          </p>
          <p>
            <strong>3: Renewal Requirements:</strong>
            <li>
              The renewal process mirrors the initial application, requiring the
              submission of specific documents.
            </li>
            <li>Passport-size photograph</li>
            <li>ID proof (Aadhaar Card, Voter ID, etc.)</li>
            <li>PAN Card</li>
            <li>Address proof (telephone bills, electricity bills, etc.)</li>
            <li>Copy of the Land Deed or Agreement as proof of ownership</li>
            <li>
              For rented premises, submission of the rental agreement copy and a
              No Objection Certificate from the Landlord is mandatory.
            </li>
          </p>
          <p>
            <strong>4: Renewal Application Procedure:</strong>Initiating the
            renewal process is akin to applying for a new license. The applicant
            can efficiently file for renewal by submitting the necessary
            documentation online.
          </p>
        </div>
        
      </div>
      <p className="main-para">
        Ensuring timely renewal is not only a regulatory requirement but also a
        strategic measure to maintain continuous compliance with food safety
        standards.
      </p>
    </div>
  );
};
