import Image from "next/image";
import React from "react";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";
import bft from "../../../assets/images/static/hong-kong-company-registration/Process_of_incop_in_hong_kong.svg";

export const Incorporation = () => {
  return (
    <div id="Incorporation">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 mt-5">
          <Image
            alt="Process of incorporation in Hong Kong"
            className="Incorporation-img w-100"
            height={1100}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            <strong>Documents required : </strong>
            Depending upon the specific needs of the company the required
            documents vary: But the following are the common documents required
            in every company incorporation:
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
                Name of the company, which is unique and not used by any other
                company
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
                Office Address
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
                Identity of the owners
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
                Identity details of the owners of the company.
              </li>
            </ul>
            <p>
              Others as specified by the company registry, this varies depending
              upon the type of company the business owner is incorporating or
              the business structure it wants to operate on.
            </p>
          </p>

          <p>
            <strong>Steps of incorporation : </strong>
            The following involves the steps of incorporation:
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
                Choice of the company name
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
                Choice of business structure
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
                Submit required documents as per the type of company
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
                Appointing a company secretary to carry out important business
                activities and approving important documents.
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
                Application for incorporation to be submitted
              </li>
            </ul>
            <p>
              After these steps are followed the application will be checked for
              errors and check the correctness of the details provided. If all
              the things are done as prescribed following this an incorporation
              certificate will be provided.
            </p>
          </p>

          <p>
            <strong>Fees of incorporation : </strong>
            The fees of incorporation of the company are as follows:
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
                Company Name Search and Reserving of the name - HKD 295
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
                Annual Business Registration - HKD 2000( per year)
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
