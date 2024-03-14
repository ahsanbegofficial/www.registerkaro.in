import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ca-services/Benefits_of_availing_CA.svg";

const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="Benefits flex w-80 m-auto mobile-flex-column">
        
        <div className="flex-3">
        <Image
            alt="Benefits of availing CA Services"
            className="Benefits-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Certified Chartered Accountants :</strong> Keeping your accounting records current is crucial for all sizes of businesses, but if you lack the necessary expertise, attempting to handle this task alone may prove to be a poor choice. When you work with qualified chartered accountants, they use their accounting knowledge and experience to assist you with bookkeeping, tax preparation, and business consulting.</p>
            <p><strong>Time Effectiveness :</strong> Establishing a profitable company is never an easy feat. You have a plethora of responsibilities when it comes to your business, such as enhancing your offerings, increasing revenue, and expanding the enterprise. Your finances will be handled by the top CA firms in Mumbai, freeing you up to focus more on these important company aspects.</p>
            <p><strong>Errorless Operations :</strong> The expert counsel you require to maintain the efficient operation of your company can be obtained from chartered accountants. They discover audit concerns, lower your tax burden, and enhance your company's performance by routinely analyzing your finances. It's a given that your accounts are flawless, even in the event of an audit.</p>
            <p><strong>Complex Financial Decision Making :</strong> When it comes to determining the value of assets in merger, acquisition, or divestment scenarios, certified public accountants are essential. As part of the negotiation process, they make sure that deals are carried out equitably and that assets are priced appropriately.</p>
            <p><strong>Compliance Adherence :</strong> For a business, adhering to accounting standards and rules is essential. Mumbai's chartered accounting businesses are knowledgeable about the most recent laws and guidelines in India. Maintaining accurate and current financial records lowers the likelihood of fines or legal problems, which helps you uphold a positive reputation with stakeholders..</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;


