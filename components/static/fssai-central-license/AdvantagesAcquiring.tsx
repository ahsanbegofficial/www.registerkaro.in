import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/fssai-central-license/Advantage.svg";
interface HeroProps { cityName: string;}
export const AdvantagesAcquiring = ({ cityName }: HeroProps) => {
  return (
    <div id="AdvantagesAcquiring">
      <p className="main-para mb-2">
        The following are the advantages of getting FSSAI Central License:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 mt-5">
          <Image
            alt="Advantages of Acquiring an FSSAI Central License"
            className="AdvantagesAcquiring-img w-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            <strong>1: Global Recognition:</strong>The FSSAI Central License
            establishes a worldwide identity for businesses, contributing to the
            creation of a brand name on a global scale.
          </p>
          <p>
            <strong>2: Facilitates Business Expansion:</strong>
            <p>
              With the FSSAI Central License in place, expanding the food
              business to new locations and opening additional outlets becomes a
              streamlined process.
            </p>
            <p>
              It enhances the ease of obtaining loans or securing funding for
              the overall development and growth of the business.
            </p>
          </p>
          <p>
            <strong>3: Legal Assurance:</strong>
            <p>
              The FSSAI License provides a sense of security and legal standing
              for all stakeholders involved in the food business.
            </p>
            <p>
              It serves as tangible evidence that the quality and safety of the
              food meet established standards, instilling confidence in both
              consumers and regulatory authorities.
            </p>
          </p>
          <p>
            <strong>4: Enhances Consumer Awareness:</strong>
            <p>
              In an era where consumers are increasingly vigilant about the
              quality of the food they consume, possessing an FSSAI License
              provides a significant advantage.
            </p>
            <p>
              The license not only assures consumers of adherence to safety
              standards but also positions the business favorably in the eyes of
              a discerning and expanding consumer base.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
