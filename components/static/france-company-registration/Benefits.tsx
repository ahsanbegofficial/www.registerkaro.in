import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/france-company-registration/Benefits.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">France is known for its flexible market offering various benefits to the entrepreneurs operating businesses. Few of such benefits are as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Strong Economy:</strong> With 65 million customers who spend a trillion euros annually, France is the second-biggest consumer market in the European Union. 83 million visitors annually demonstrate how well the tourism sector is doing. France is the world's top supplier of pharmaceuticals and the second-biggest exporter of food and beverages worldwide.</p>
           <p><strong>Low Interest Loan:</strong> France does offer low-interest loans to the public sector. Up to EUR 1.5 million in low-interest loans could be provided to businesses to support R&D initiatives.</p>
           <p><strong>Skilled Human Resource: </strong>The workforce in France is renowned for being highly educated and skilled. The nation places a high priority on education, and its system of universities, technical schools, and research institutes is well-defined.</p>
           <p><strong>Global Market:</strong> Located in the center of Europe is France. Access to the European Union's (EU) enormous market of more than 500 million people is made possible through France. Easy access to European and international markets is made possible by its vast rail network, sophisticated ports, and airports, as well as its significant transportation and logistics infrastructure. Establishing a firm in France gives companies access to a sizable consumer base and the advantages of the nation's advantageous location.</p>
           <p><strong>Advanced Infrastructure:</strong> France is one of the world's most developed countries and renowned for its effective rail project, robust communication infrastructure, and many other things.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of Company Registration in France"
            className="Benefits-img w-100"
            height={630}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
