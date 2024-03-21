import Image from "next/image";
import dft from "../../../assets/images/static/thailand-company-reg/Why_to_start_a_business_in_Thailand.svg";

export const WhyStart = () => {
  return (
    <div id="WhyStart">
        <p className="main-para">Thailand is a popular choice among the investors and entrepreneurs for starting a business for many reasons, such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Why to start a business  in Thailand"
            className="WhyStart-img w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p><strong>Government Policies:</strong> The Thai government introduced "Thailand Plus," a fresh investment incentive program for foreigners which includes tax breaks in specific industries, new tax incentives, and streamlined procedures for foreign investors seeking work permits and visas. The nation's new e-Registration strategy has also been positively received by international corporations and investors. </p>
          <p><strong>Trade Agreements:</strong> As one of the ten members of the ASEAN Free commerce Area, which also includes Singapore and Thailand's neighbors Malaysia, Cambodia, Laos, and Myanmar, Thailand is able to benefit from increased commerce. The Thai government is aggressively working to broaden its current free trade agreements under the Thailand Plus program, especially by renewing talks with the EU and joining the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP).</p>
          <p><strong>Geographically Friendly:</strong> Thailand is becoming a target for corporations mostly because of its advantageous position, which makes it an ideal entry point into Asia. Trade has gotten quite easy between Thailand and ASEAN (Association of Southeast Asian Nations) nations like China and India.</p>
          <p><strong>Advanced Infrastructure:</strong> Thailand boasts a strong infrastructure, a cutting-edge IT and communications network, and therefore, becoming a more important international economic hub in Asia. Large corporations including General Electric CoRolls Royce, Michelin, Bausch & Lomb, and Novartis have drawn attention to the nation, which is also becoming more active in a variety of sectors, including biotechnology, the automobile industry, aerospace, and the food production sector. </p>
          <p><strong>Strong Economy:</strong> Thailand's economy has grown significantly over the years, and the IMF ranks it second in Southeast Asia in terms of GDP, only after Indonesia. Official statistics from the World Bank indicates that Thailand's GDP was 543.65 billion US dollars in 2019. Many factors, including the availability of natural resources, the demand for exports, a thriving consumer market, and a talented, reasonably priced labor force, contribute to Thailand's economy's stable and constant growth. These are only a few of the numerous factors that draw foreign investors to the nation.</p>
        </div>
       
      </div>
    </div>
  );
};
