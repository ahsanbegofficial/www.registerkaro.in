import Image from "next/image";
import taxation_of_indian_subsidiary_companies from "../../../assets/images/static/Indian_subsidiary_registration/taxation_of_indian_new.svg";
interface HeroProps {cityName: string;}
export const Taxation = ({ cityName }: HeroProps)=> {

  return (
    <div id="Taxation">
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
     
      <div className="flex-7">
        <p>Indian subsidiary companies are governed by distinct taxation policies, characterized by the following key features:</p>
        <p><strong>1: Income Tax Applicability:</strong> Taxes are imposed on all income generated within or outside {cityName}, encompassing dividends received from foreign subsidiaries.</p>
        <p><strong>2: Tax Rates for Foreign Subsidiaries:</strong> Tax rates for foreign subsidiaries in {cityName} vary, with a rate of 50% for royalties received for technical services from the government or any Indian entity, and a rate of 40% for other forms of income.</p>
        <p><strong>3: Surcharge Rates:</strong> Surcharge rates are applied based on the company’s income:</p>
        <p><li>A 2% surcharge is levied if the income falls between Rs. 1 Crore and Rs. 10 Crores.</li></p>
        <p><li>For incomes exceeding Rs. 10 Crores, a higher surcharge of 5% is imposed.</li></p>
        <p><strong>4: Health and Education Cess:</strong> Additionally, a 4% health and education cess are added to the total tax amount, contributing to social welfare initiatives.</p>
        <p><strong>5: Concessional Tax Rates:</strong> Specific sectors, including but not limited to oil exploration, air transportation, and shipping businesses, benefit from concessional tax rates, providing favorable conditions for entities operating in these industries.</p>
      </div>
      <div className="flex-3">
        <Image
          alt="Taxation of Indian Subsidiary Companies,Indian subsidiary companies are governed by distinct taxation policies,
          characterized by the following key features,Income Tax Applicability,Tax Rates for Foreign Subsidiaries,Surcharge Rates,Health and Education Cess"
          className="Taxation-img w-100"
          loading="lazy"
          height={560}
          src={taxation_of_indian_subsidiary_companies}
        />
      </div>
    </div>
    </div>
  );
};
