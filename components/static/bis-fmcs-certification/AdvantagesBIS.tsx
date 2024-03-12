import Image from "next/image";
import bft from "../../../assets/images/static/bis-fmcs-certification/key_guidlines.svg";

interface HeroProps { cityName: string;}
export const AdvantagesBIS = ({ cityName }: HeroProps)  => {
  return (
    <div id="AdvantagesBIS">
      <p className="main-para mb-5">
        It is mandatory for Foreign Manufacturers to nominate an AIR or
        Authorized Indian Representative in {cityName} to obtain a License. The
        Authorized Indian Representative serves as the local representative
        responsible for managing and submitting the Certification application,
        as well as addressing any inquiries. Before nominating the AIR, the
        following points must be adhered to:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-7">
          <p>
            <strong>Indian Residency Requirement:</strong>
            The nominated Authorized Indian Representative must be an Indian
            resident.
          </p>

          <p>
            <strong>Zero Conflict of Interest:</strong>
            The Authorized Indian Representative should have no conflicts of
            interest related to the testing of a product sample in third-party
            labs.
          </p>

          <p>
            <strong>Inclusion in License Documents:</strong>
            The name of the Authorized Indian Representative must be included in
            the License documents.
          </p>

          <p>
            <strong>Minimum Qualification Criteria:</strong>
            The minimum qualification for an Authorized Indian Representative is
            a bachelor’s degree, along with knowledge of the provisions of the
            BIS Act, 2016, Rules, and Regulations.
          </p>

          <p>
            <strong>Consent and Responsibility:</strong>
            The Authorized Indian Representative must provide explicit consent
            and acknowledge responsibility for compliance with the provisions of
            the BIS Act, Terms and Conditions, and Rules & Regulations specified
            in the BIS License.
          </p>

          <p>
            <strong>Exclusive Representation:</strong>
            An Authorized Indian Representative can represent only one Foreign
            Manufacturer at a given time and is not allowed to represent other
            foreign manufacturers concurrently.
          </p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers"
            className="KeyGuidelines-img w-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
