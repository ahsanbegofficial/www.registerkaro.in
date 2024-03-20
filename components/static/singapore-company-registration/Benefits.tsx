import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/singapore-company-registration/Benefits_of_Company.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
      
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
         <p><strong>Skilled Human Resource: </strong>Singapore boasts a workforce that is highly educated and skilled as the nation places a high priority on training and education. It boasts a sizable pool of seasoned experts in numerous sectors.</p>
         <p><strong>Socio-political Environment:</strong> Singapore is one of the easiest countries in the world to conduct business and boasts a business-friendly atmosphere owing to its healthy Socia-political Environment. The nation's government promotes a healthy environment by introducing policies which are encouraging, laws that are simplified, and tax rates which are modest.</p>
         <p><strong>Strategic Location: </strong>Singapore is a hub for international trade and is well situated in the center of Southeast Asia which links it to the rest of the globe making it geographically excellent. Therefore, It's the perfect place for companies, entrepreneurs, and investors who want to grow internationally.</p>
         <p><strong>Robust Economy:</strong> Singapore enjoys a strong international reputation as a stable nation with a strong financial system and an orderly economy. VCs, banks, accelerators, incubators, government grants, and more are some of the methods that funding can be obtained at each stage of development. Due in large part to this, Singapore's start-up sector has flourished, attracting cash in the form of US$3.5 billion in venture capital and private equity alone in 2016.</p>
         <p><strong>Tax Benefits:</strong> One of the primary motives for registering a company in Singapore is the tax benefits. Forming a company in Singapore is a smart decision because of the country's business-friendly tax laws and abundance of tax breaks that promote entrepreneurship and business expansion.</p>
         <p><strong>Government Schemes:</strong> In 2020, the Singaporean government planned to implement a $4 billion Stabilization and Support Package to aid local workers and Singaporean businesses, with the goal of mitigating the economic effects of the COVID-19 pandemic. The government of Singapore also assisted businesses by lowering the cost of hiring employees. For each local worker, the government will deduct 8% of their salary, up to a maximum of $3,600 per month, for a period of three months. </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of Company Registration in Singapore"
            className="Benefits-img w-100"
            height={770}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
