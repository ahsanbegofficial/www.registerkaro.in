import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/germany-company-registration/Why_to_start.svg";

export const WhyStart = () => {
  return (
    <div id="WhyStart">
        <p className="main-para">Starting a business in Germany has been a popular trend in the economic market for various reasons such as:. </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Global Investment :</strong> For anyone wishing to establish a new company or grow an existing one, the German government offers a range of incentive programs and public funding options. By helping with some of the upfront costs, these incentives can support businesses looking to enter the German market. There are four categories of public funding: equity capital, public guarantees, public loans, and direct grants.</p>
           <p><strong>Strict Legislation :</strong> Germany provides robust legal protections for ideas and innovations when starting a firm, allowing investors to exercise their rights and safeguard their industrial and intellectual property. Furthermore, false representations about a business are prohibited by Germany's Competition Laws. Any person or organization that makes such a claim may face criminal charges.</p>
           <p><strong>High-tech Infrastructure :</strong> Germany has an unparalleled infrastructure for manufacturing, electricity, and communications, along with a cutting-edge transportation system. Apart from its central European location, the nation's vast infrastructure facilitates prompt and effortless access to both local and global markets. </p>
           <p><strong>Advanced Research Market :</strong> Germany places a high priority on applying research for economic gain and is ranked among the top ten most inventive and tolerant nations in the world. By providing money for research institutes, encouraging the establishment of start-up businesses, and granting intellectual property licenses to professionals who wish to pursue careers outside of academia, the government demonstrates its strong commitment to research and development. </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Why to start a business in Germany?"
            className="WhyStart-img w-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
