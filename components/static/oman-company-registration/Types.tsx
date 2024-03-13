import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/oman-company-registration/Types_of_Companies_in_Oman.svg";

const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are following forms of company structure available for registration in Oman: </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Omani Limited Liability Company [LLC] : </strong> A Limited Liability Company limits each shareholder's liability to the amount that they have invested in the business. In Oman, an LLC requires the participation of two individuals, one of whom must be an American or GCC national and hold at least 30% of the company's shares. The other must be a director, who may also be a shareholder. The minimum capital needed to incorporate an Omani LLC, the most popular company type among foreigners looking to establish a business in Oman, is 150,000 Omani Riyals, or roughly 390,117 USD. Manufacturing and trading operations benefit from this kind of corporate structure.</p>
            <p><strong>Wholly Foreign Owned LLC : </strong> In accordance with Omani law, foreign nationals who wish to establish a corporation and hold 100% of the shares must apply for permission from the Ministry of Commerce and Industry. A company must submit a comprehensive business plan with all the information about the capital investment and the anticipated benefits to the national economy—including the anticipated number of jobs that will be created locally—in order to receive approval. In addition, the firm needs a minimum capital of one million Omani Riyals, or roughly 2600780 USD, and at least two shareholders as well as one director.</p>
            <p><strong>Joint Stock Company : </strong> A Public Joint Stock Company (SAOG) is a Joint Stock Company that trades its shares in the open market. A SAOG needs two primary items. 1. A minimum share capital of 390,117 USD, or OR 150.000. Nevertheless, a Private Stock Company (SAOC), a type of joint stock company that does not sell shares to the general public, needs a minimum capital of OR50,000, or about $130,000 USD. In addition, the firm needs a minimum of three shareholders, with one of them having to be an Omani national and owning 30% of the total shares. Regardless of its nature and with involvement from foreign nationals, any joint-stock firm must do the next two actions. Must request permission from the Ministry of Industry and Commerce. A minimum capital of OR150,00, or around $390,117 USD, is required. </p>
            <p><strong>The Oman Free Zone Company : </strong> Three main requirements are met by a company that incorporates in an Omani free zone. 1. Being fully owned by foreigners; 2. Being allowed to transact business with clients in the area; and 3. Not requiring a minimum investment. A free zone business in Oman is also exempt from corporate income tax and has a lower employment threshold (10%) for Omani nationals. For manufacturing enterprises looking to use the nation as a base to extend their operations in the Middle East, free zones are typically advised.</p>
            <p><strong>Limited Partnership [LP] : </strong> An LP is a business entity that needs to have at least one registered general partner and one registered limited partner. An altered general partnership is an LP. While the general partner is accountable for the partnership's debt to the full amount of the partnership's investment, limited partners are only accountable for the money they contributed to the partnership. The limited partnership entity must be registered with the Oman Commercial Register by the Omani general partner.</p>
            <p><strong>Branch Office : </strong> An expansion of a multinational corporation that has a contract with the government or one of its agencies and is authorized to open and run a foreign branch in Oman. The license is only good for the term of the project, and a branch office must also get MOCI permission. The MOCI needs a 390,000 USD bank guarantee for this procedure.</p>
            <p><strong>Representative Office : </strong> The Omani representative branch office is not permitted to conduct direct sales within Oman, while being fully owned and controlled by a foreign entity. An Omani representative office can only conduct the following tasks: i) market research; and ii) commercial advertising for the parent company.</p>
            <p><strong>Commercial Agency : </strong> Foreign businesses can conduct business through local commercial agents in Oman if they are interested in doing so but aren't sure if they want to create a local branch or corporation there. It is necessary to register an agreement with the local agency with MOCI. Clients of commercial agencies are still required to pay annual tax reports and corporate income tax on their Omani revenue.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Types of Companies in Oman"
            className="Types-img w-100"
            height={880}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Types;
