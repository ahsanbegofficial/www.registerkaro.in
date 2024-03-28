import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nidhi-company-compliance/Post-Incorporation.svg";
interface HeroProps {
    cityName: string;
}
const PostIncorporation = ({ cityName }: HeroProps) => {
  return (
    <div id="PostIncorporation">
        <p className="main-para">Nidhi Company compliance is categorized into two categories following incorporation:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 ">
         
            <h3>1. General Compliance :</h3>
            <p>A Nidhi company must meet the following requirements within one year of incorporation:</p>
            <div className="ps-3">
            <p><strong>1 : </strong>Within one year of incorporation, the number of members should increase to at least 200.</p>
            <p><strong>2 : </strong>Net owned funds must be Rs. 20 lakhs (as amended by the Nidhi (Amendment) Rules, 2022).</p>
            <p><strong>3 : </strong>The ratio of net owned funds to deposits shall not exceed 1:20, i.e., Net Owned Funds: Deposits = 1:20.</p>
            <p><strong>4 : </strong>Unencumbered term deposits must account for at least 10% of total outstanding deposits, as defined in Rule 14 of the Nidhi Rules 2014.</p>
            <p><strong>5 : </strong>The Nidhi Company must keep books of accounts and statutory registers.</p>
            <p><strong>6 : </strong>The Nidhi Company must hold Statutory Meetings.</p>
            </div>
            <h3>2. Yearly Compliance : </h3>
            <div className="ps-3">
            <p>The Nidhi Company’s yearly compliance is periodic, and these Compliance are frequently filed annually, therefore they must be filed regularly after specified time intervals. The goal of these annual Compliance is to provide a clear image of the company’s work state and Nidhi Company’s performance throughout a specific period. Nidhi Company must comply with all of the requirements outlined in the Companies Act 2013 and the Nidhi Rules 2014.</p>
            </div>
        </div>
        <div className="flex-3">
        <Image
            alt="Post-Incorporation Nidhi Company Compliance"
            className="PostIncorporation-img w-100"
            height={640}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default PostIncorporation;


