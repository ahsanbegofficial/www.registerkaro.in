import Image from "next/image";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";
import dft from "../../../assets/images/static/firm-registration/documents.svg";
interface HeroProps { cityName: string;}
export const Documents = ({ cityName }: HeroProps) => {
  return (
    <div id="Documents">
      <p className="main-para">The following are the Documents required for registering a firm</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div>
          <h3>Address Proof and Identity of the Partners:</h3>

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
              Adhar Card
            </li>
          </ul>
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
              PAN Card
            </li>
          </ul>
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
              Voter Id
            </li>
          </ul>
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
              Passport
            </li>
          </ul>
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
              Driving Licence
            </li>
          </ul>

          <h3>Proof Related to Place of Business:</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />{" "}
              If the premise is rented, then a copy of the Rent Agreement
            </li>
          </ul>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />{" "}
              If the premise is owned, then a copy of the Sale Deed
            </li>
          </ul>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />{" "}
              No Objective Certificate( NOC) from the owner
            </li>
          </ul>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />{" "}
              Copy of Water Bills, Electricity Bills, Receipt of Property
            </li>
          </ul>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />{" "}
              Pan of the firm
            </li>
          </ul>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />{" "}
              Partnership Deed/LLP Agreement
            </li>
          </ul>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />{" "}
              An affidavit mentioning that the details presented in the
              documents are correct to the best of the knowledge.
            </li>
          </ul>
        </div>
        <div className="flex-4 mt-5">
          <Image
            alt="The following are the Documents required for registering a firm"
            className="Document-img w-100"
            height={650}
            loading="lazy"
            src={dft}
          />
        </div>
        </div>
      </div>

  );
};
