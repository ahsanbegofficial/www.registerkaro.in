import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/netherlands-company-registration/Why_start_a_business.svg"

export const WhyStart = () => {
  return (
    <div id="WhyStart">
      <p className="main-para">Choosing Netherlands for starting your business can be a decision of profit bringing the pool of advantages to you. Following are few reasons for choosing Netherlands for Company Registration:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Strict Legislature : </strong> It is advantageous to form a corporation in the Netherlands from a legal perspective for the very presence of a strict legislature which advances the employment laws, taxation regimes, and protection from Intellectual Property Infringement. Moreover, the Dutch government has developed numerous tax incentives for entrepreneurs and made it simple to start and operate a firm.</p>
           <p><strong>Tax Benefits : </strong> The Netherlands offers various forms of regimes and schemes for creating a tax friendly atmosphere. One of such regimes is the Innovation box regime which permits the deduction of taxable gains from intangible assets at a reduced tax rate, as selected by the taxpayer. The name of the regime comes from the fact that it is often applicable to earnings obtained from creative activity, subject to specified criteria.</p>
           <p><strong>High-tech Infrastructure : </strong> The technological and logistical infrastructure of the Netherlands is excellent and highly technologically driven. Since 2005, the Netherlands has been regarded as the most connected nation in the world by the DHL Global Connectedness Index, which highlights the country's extensive international connections and deep integration of trade. There is a vast network of roads, rails, and canals in addition to top-notch seaports and airports. Their excellent condition and easy navigation define these. </p>
           <p><strong>Strategic Location : </strong> Being in the heart of Europe, Netherlands is easily accessible by all means such by land, air, and water. The main transportation hubs of the nation, Rotterdam and Amsterdam, provide businesses with 24-hour access to more than 90% of Europe along with handling of more than 460 million tonnes of cargo annually through its ports.</p>
           <p><strong>Strong Financial Market : </strong> Owing to the presence of Dutch Banks, the Netherland Market is known for its financially strong market offering financial protection to its businesses. This very factor makes the Netherlands an attractive place when it comes to starting a business.</p>
        </div>
          
        <div className="flex-4">
          <Image
            alt="Why start a business in the Netherlands?"
            className="WhyStart-img w-100"
            height={800}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
