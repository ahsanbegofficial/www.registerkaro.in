import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/firm-registration/structure_business.svg";
interface HeroProps { cityName: string;}
export const Structure = ({ cityName }: HeroProps) => {
  return (
    <div id="Structure">
      <p className="main-para">
        The structure of business that we choose to register our firm is very
        important. Following are the structures with the features generally by
        which a firm is registered.
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 mt-5">
          <Image
            alt="Structure of Business
            The structure of business that we choose to register our firm is very important. Following are the structures with the features generally by which a firm is registered."
            className="Structure-img w-100"
            height={850}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            <strong>LLP : </strong>LLP business structure is chosen, by
            businesses that want to operate based on partnership, by keeping
            their personal assets safe, and without going through much of the
            formalities of a company. The main feature that distinguishes LLP
            from a Partnership structure are the limited liability and the
            perpetual succession feature. Limited Liability means that the
            partners cannot be made liable personally for any business debts
            thereby, keeping the personal asset safe. And the perpetual
            succession makes the business unbothered by the changes in its
            partnership structure. One more distinct feature is that it acts as
            a separate legal entity, different from those of its partners. The
            minimum no. of people required to start an LLP is two, and there is
            no cap on the maximum no. of members. The functions, profit-sharing
            and all the important aspects relating to running the business are
            mentioned in the LLP Agreement, which governs how the partnership
            would operate:
          </p>
          <p>It is governed by:</p>
          <ul>
            <p>
              <strong>A: </strong>Limited Liability Act, 2008
            </p>
            <p>
              <strong>B: </strong>Limited Liability Partnership Rule, 2009
            </p>
            <p>
              <strong>C: </strong>LLP Agreement
            </p>
          </ul>

          <p>
            <strong>Partnership : </strong>The Partnership Business Structure
            does not have limited liability separate legal entity, or even
            perpetual succession these features can lead to multiple benefits
            like building more trust between the partners. A partnership
            requires a minimum of two partners and maximum there can be 20
            partners It does not have as much compliance as that of an LLP to be
            registered. It is represented by its partner and does not act as a
            separate legal entity, change in partners completely alters the
            business methodology. It operates on a contractual basis between the
            partners which is governed by the Partnership Deed. Partnership
            Business is governed by:
          </p>
          <ul>
            <p>
              <strong>A: </strong>Indian Partnership Act, 1932
            </p>
            <p>
              <strong>B: </strong>Partnership Deed
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};
