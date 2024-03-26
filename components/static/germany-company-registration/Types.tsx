import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/germany-company-registration/Types_of_Companies_in_Germany.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Following are some structure prescribed in German Framework for registering a company:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in Germany"
              className="Types-img w-100"
              height={800}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 :Limited Liability Company [GmBh]:</strong> In Germany, limited liability companies (GmbH) are the most common type of business organization. A GmbH must have a minimum share capital of EUR 25,000 in order to be incorporated. A German limited liability company is not permitted to sell its shares to the general public or list them on a stock exchange.</p>
           <p><strong>2 :German Joint Stock Company [AG]:</strong> Larger businesses should choose German Joint Stock Company (AG) since it can increase its initial capital by listing its equities on a stock exchange. The minimum share capital required for an AG firm to register as a German joint stock company is EUR 50,000. The amount of capital that each member is liable for is capped at what they have invested.</p>
           <p><strong>3 :German Limited Partnership:</strong> A legal organization in which there are two partners is known as a German Limited Partnership. While the other member is a limited partner, one of the members is a general partner. The limited partner's ownership position in the company is limited to their real contribution, while the general partner's obligations are unbounded. The limited members of the German limited partnership are not allowed to participate in any administrative decision-making processes; instead, the general members hold the power of decision-making</p>
           <p><strong>4 :Sole Proprietorship:</strong> In Germany, a sole proprietorship is the simplest and least regulated kind of corporate entity where the legal structure can be formed with just one person known as Sole Proprietor. The value of individual income tax is applied to a sole proprietorship's earnings. Moreover, the sole proprietor does not have limited liability, and therefore is responsible for both profit and loss occurring in the business.</p>
           <p><strong>5 :Branch Office:</strong> When registering a business in Germany, most foreign entrepreneurs choose to use a Branch Office as their legal structure. Since a branch is a representative of its parent company and does not have its own legal structure, it is one of the most popular organizational forms in Germany. The parent company has full responsibility for all debts and liabilities of its branch office.</p>
        </div>
        
      </div>
    </div>
  );
};
