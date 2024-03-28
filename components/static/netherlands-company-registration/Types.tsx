import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/netherlands-company-registration/Types_ofcompanies.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">In the Netherlands, there exist two main broad categories for the company registration; one specifying the Corporate legal personality and another for Non-corporate legal personality, which are as follows:</p>
        <div className="benefits flex w-80 m-auto mobile-flex-column">
          <div className="flex-4">
              <Image
                alt="Types of companies for Company Registration in Netherlands"
                className="Types-img w-100"
                height={1060}
                loading="lazy"
                src={dft}
              />
          </div>
        <div className="flex-7">
          <h3>Legal Personality:</h3>
           <p><strong>Private limited company [besloten vennootschap/BV] : </strong> A corporate structure with legal personality is a private limited company or besloten vennootschap (bv) in the Netherlands. This implies that BV, not you personally, is usually responsible for any debts. As the only director and major shareholder (DGA), you may form a Dutch bv by yourself, with other people, or with other legal organizations, and therefore work for BV and represent it. The equity of a private limited business is allocated among its owners in the form of shares.</p>
           <p><strong>Public limited company [naamloze vennootschap/NV] : </strong> A NV and a BV are primarily distinguished by their size, with the former being a larger business with more directors. A public limited company's capital is divided into shares, each of which is owned by a shareholder. These shareholders hold the ultimate power but are permitted to make choices regarding the business. The board may also be appointed and removed by them. Bearer shares are not permitted by Nevada; only registered shares may be issued.</p>
           <p><strong>Cooperative [coöperatie] : </strong> A cooperative can be established with one or more participants. For instance, one member can delegate tasks to the other if they get sick as the members of the cooperative make it up. The cooperative's existence is not in jeopardy when members join or leave. In contrast, partners in a professional or business partnership (maatschap) are not free to depart at any time.</p>
           <p><strong>Association [vereniging] : </strong> An association is a type of organization where profit is not the primary goal. The majority of associations concentrate on planning social events. Any money that an association makes ought to be put back into the organization as sharing the profits with other members is not permitted. There are two or more members of the association who all are qualified to cast a vote and the entire power and authority is vested in the gathering of members, or ledenvergadering. The Committee, which is composed of (at least) a chair, secretary, and treasurer, is appointed by the ledenvergadering [no stockholders].</p>
           <p><strong>Foundation [Stichting] : </strong> Foundation stands to be like that of an association where the motive is not profit making, therefore promoting non-profit or social cause.However, this type of organization can also be subject to operation as that of a business but important to note that the profit must only be used for the foundation’s cause only. Unlike an association, it neither has shareholders, not members.</p>
           </div>
           </div>
          <div className="benefits  flex w-80  mobile-flex-column-reverse mt-10">
             
              <div className="flex-7 mt-10">
                <h3>Non-Legal Personality:</h3>
                <p><strong>Sole Proprietorship [eenmanszaak]:</strong> Sole Proprietor is one of the non-legal personalities meaning that the operator of the business is solely responsible for all of the business profit and debts. In this form of business, the business is not considered separate from the owner who is also known as Sole Proprietor.</p>
                <p><strong>General or Commercial Partnership [vof/vennootschap onder firma]:</strong> General Partnership or commonly known as Commercial partnership is such a business structure where two or more people come together to work under one business name. It is important that all of the partners constituting the partnership are contributing in some way whether it be money, labor, or other form of resources. Like that of the sole proprietorship, this form of business is also not separate from its partner, defining that the partners are liable for all its profit and loss depending on their contribution.</p>
                <p><strong>Professional or Public Partnership [maatschap]:</strong> Professional or Public Partnership is a form of collection of Individual professionals intending to be self-employed along with like forms. This might include doctors, lawyers, accountants, architects, etc. In this form of structure, the members are called partners and are entirely responsible for the company's liabilities.</p>
                <p><strong>Limited Partnership [CV/commanditaire vennootschap]:</strong> Limited Partnership consists of two more partners where one is mandatory to be an unlimited partner and the rest to be the limited one. It means that the unlimited partner is not considered separate from the entity and is liable for all the actions taken place in the business, either resulting in profit or loss. However, on the other hand, the limited partner is only liable for the amount of contribution he or she has made in the business.</p>
            </div>
            <div className="flex-4">
                  <Image
                    alt="Types of companies for Company Registration in Netherlands"
                    className="Types-img w-100"
                    height={780}
                    loading="lazy"
                    src={dft}
                  />
              </div>
        </div>
    </div>
  );
};
