import Image from "next/image";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";
import docuemntation_for_trust_registration from "../../../assets/images/static/trust-registration/Documentation.svg";
interface HeroProps { cityName: string;}
export const Documentation = ({ cityName }: HeroProps) => {
  return (
    <div id="Documentation">
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Documentation for Trust Registration,Trust Deed, photographs, PAN Cards, address proof, identity proof, authentication"
            className="Documentation-img w-100"
            loading="lazy"
            src={docuemntation_for_trust_registration}
            height={950}
          />
         
        </div>
        <div className="flex-7">
          <p>
            To facilitate the registration of a trust, the following documents
            are required:
          </p>

          <h3>1. Trust Deed:</h3>
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
              A Trust Deed with the appropriate stamp value.
            </li>
          </ul>
          <h3>2. Photographs:</h3>
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
              Two photographs of each party involved in the trust.
            </li>
          </ul>
          <h3>3. PAN Cards:</h3>
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
              PAN cards of the individuals associated with the trust.
            </li>
          </ul>
          <h3>4. Address Proof:</h3>
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
              Address proof of the individuals involved.
            </li>
          </ul>
          <h3>5. Identity Proof:</h3>
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
              Identity proof of the individuals participating in the trust.
            </li>
          </ul>
          <h3>6. Authentication from Partners:</h3>
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
              Authentication from partners, if applicable.
            </li>
          </ul>
          <h3>7. No Objection Certificate (NOC):</h3>
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
              No Objection Certificate for using the premises, if applicable.
            </li>
          </ul>
          <h3>8. Utility Bill:</h3>
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
              Any form of a utility bill serving as proof of address.
            </li>
          </ul>
          <h3>9. Registered Office Address Proof:</h3>
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
              Address proof of the trust’s registered office.
            </li>
          </ul>
          <h3>10.Income Tax Certificates:</h3>
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
              12A Registration and 80G Certificates issued by the respective
              income tax authorities, if applicable, to claim deductions.
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};
