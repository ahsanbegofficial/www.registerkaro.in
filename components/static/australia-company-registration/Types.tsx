import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/australia-company-registration/Types_of_Company_in_Australia.svg";

const Types = () => {
  return (
    <div id="Types">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>Proprietorship Company :</strong>
            The structure closely resembling a Limited Liability Company is the Proprietary Limited company ("Pty Ltd"). It is highly favoured in Australia and ideal for foreign investors. A minimum of one resident director is required for incorporation, unless a nominee director is appointed. Pty. Ltd companies are open to full foreign ownership with a minimum share capital of $1. We can help establish your Pty. Ltd company in Australia.</p>
            <p><strong>Australian Public Company:</strong>
            Public companies in Australia are typically established by entrepreneurs seeking investment from a larger pool of investors, as opposed to Pty Ltd companies. The management of these companies is typically separate from the owners. Similar to Proprietary Limited Companies, they require a minimum of 3 directors (at least two of whom must be Australian residents), along with a Company Secretary and Public Officer for tax purposes.</p>
            <p><strong>Australian Branch Office:</strong>
            Foreign companies can register their Australian branch through ASIC and The Australian Taxation Office, allowing them to establish a presence in the country and consolidate earnings from their home nation. An agent in the local area must be designated to receive notifications on behalf of the business, and an address within Australia must be created. Branch offices are taxed on their Australian earnings and are required to submit financial reports to ASIC annually.</p>
            <p><strong>Partnership Firm:</strong>
            Partnerships in Australia are commonly used to offer accounting and legal services. General partners in a partnership may be jointly liable for its activities or only responsible for their own contributions. At least one partner must be an Australian resident to establish a partnership. Although a partnership is not required to pay taxes on profits, each partner must declare their share of profits and pay personal taxes.</p>
            <p><strong>Australian Representative Office:</strong>
            The Australian Representative Office allows only non-commercial and limited activities, making it a preferred choice for companies wanting to expand internationally or conduct market research. Setting up a Representative Office in Australia is straightforward, but it is more cost-effective to establish a Branch or another business form to save time and resources.</p>
            <p><strong>Trust :</strong>
            Trust is a popular business structure among small Australian businesses. Discretionary trusts are typically preferred by family-owned businesses, while unit trusts are favored by larger companies with multiple family members involved. Trusts, which are not legal entities, do not pay taxes as long as all earnings are distributed to beneficiaries, who are then responsible for their own tax obligations. Trusts are established through deeds and do not require registration with authorities.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Types of Company in Australia"
            className="Types-img w-100"
            height={700}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Types;


