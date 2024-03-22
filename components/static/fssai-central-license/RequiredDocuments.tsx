import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/fssai-central-license/Required_Documents.svg";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";

interface HeroProps { cityName: string}
export const RequiredDocuments = ({ cityName }: HeroProps) => {
  return (
    <div id="RequiredDocuments">
      <p className="main-para">
        Ensuring a smooth application process for the FSSAI Central License
        necessitates the submission of essential documents. Here is a
        comprehensive list
      </p>
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <h3>Form B</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Duly filled and signed by the applicant.
            </li>
          </ul>
          <h3>Floor Plan</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Layout of the production or processing facility, detailing
              critical areas with accurate measurements.
            </li>
          </ul>
          <h3>Key Management Personnel (for Companies)</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Complete list with names and residential proofs if seeking
              registration for a company.
            </li>
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Copy of MOA (Memorandum of Association), AOA (Articles of
              Association), and COI (Certificate of Incorporation) for private
              limited companies, OPCs (One Person Companies), and public limited
              companies.
            </li>
          </ul>
          <h3>Partnership Deed (for Partnership Firms)</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              List of partners with names, contact details, addresses, etc.
            </li>
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Copy of the partnership deed.
            </li>
          </ul>
          <h3>Co-operative Society Information</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              List of serving members in a co-operative society.
            </li>
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Registered Trust Information:
            </li>
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Copy of the trust deed.
            </li>
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Record of trustees.
            </li>
          </ul>
          <h3>Registered Trust Information</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Copy of the trust deed.
            </li>
          </ul>
          <h3>Address Proof for Business Place</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Utility bills (electricity bill, rent agreement, registry).
            </li>
          </ul>
          <h3>Food Safety Management Plan (FSMS)</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Implementation details or an equivalent protocol.
            </li>
          </ul>
          <h3>List of Machines</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Names and details of machines present at the plant.
            </li>
          </ul>
          <h3>Raw Material Suppliers</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              List of active raw material suppliers.
            </li>
          </ul>
          <h3>No Objection Certificate from Local Authorities</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Confirmation from local authorities.
            </li>
          </ul>
          <h3>Tourism Certificate (for Hotels)</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Issued by the Ministry of Tourism.
            </li>
          </ul>
          <h3>IEC Certificate (for Export)</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Issued by DGFT (Directorate General of Foreign Trade).
            </li>
          </ul>
          <h3>Import Export Code (for Import/Export)</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Relevant code in the case of import/export activities.
            </li>
          </ul>
          <h3>Declaration for Turnover Above Rs. 20 Crores</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Required in case the annual turnover exceeds Rs. 20 crores.
            </li>
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Ensuring the completeness and accuracy of these documents is vital
              for a successful application for the FSSAI Central License.Top of
              Form
            </li>
          </ul>
        </div>
        <div className='flex-4'>
          <Image alt="Required Documents for Obtaining FSSAI Central License" className="RequiredDocuments-img w-100" height={1282} loading="lazy" src={dft} />
        </div>
      </div>
    </div>
  );
};
