import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ca-services/What_all is_included.svg";

const Included = () => {
  return (
    <div id="Included">
        <p className="main-para">Following are the range of services you enjoy on availing the CA services from a CA service Providing Company :</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Taxation : </strong> The Statute book has a variety of tax categories. Of them, the ongoing and current tax data is equally significant and essential to the robust economies of business management. Financial accounting is related to tax assessment. In addition to taking on the duty of preparing tax returns, he also evaluates representation before income-tax authorities and is qualified to provide his customers with general tax advice.</p>
            <p><strong>Accountancy : </strong>  keeping up with accounting and creating financial statements. It offers a wide range of services, from basic bookkeeping to intricate financial analysis.</p>
            <p><strong>Auditing : </strong> The fundamental abilities of a chartered accountant are his specific training, his ability to make decisions on the spot, and his ability to apply that judgment every day. Through auditing, financial statement consumers can be sure that the accounts they are viewing were created in accordance with the right accounting standards. Furthermore, as a company's financial statements are the sole source that accurately depicts its financial situation, a company's goodwill is dependent on their accuracy. A fake financial statement could result in a bad repo and incredulity.</p>
            <p><strong>Companies Secretarial Work : </strong> Smaller businesses that participate in limited corporations but cannot afford a full-time secretary hire a professional accountant, who in addition to his many other responsibilities plays a crucial role in the management chain and provides secretarial services.</p>
            <p><strong>Cost Accounting : </strong> The position of a chartered accountant assumes great significance in cost accounting inside manufacturing or service provider firms. He needs to determine the production costs as well as the expenses that would be incurred at various stages of the process. For the appropriate administration, he must supply costing data. Developing suitable selling pricing and employing cost-controlling strategies are two more crucial responsibilities of a qualified chartered accountant.</p>
            <p><strong>GST Services : </strong> Certified Chartered accountants maintain a thorough awareness of the GST complaint process, auditing, and training related to relevant rules, regulations, and client handling compliance which ease down the complex process of GST related services.</p>
            <p><strong>Consultancy : </strong> Chartered accountant services also includes the consultation from the expert pertaining to the different aspects of financial Services such as taxation, accounting, etc.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="What all is included in CA Services?"
            className="Included-img w-100"
            height={880}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Included;


