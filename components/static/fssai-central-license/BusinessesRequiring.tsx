import Image from "next/image";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";
interface HeroProps { cityName: string}
export const BusinessesRequiring = ({ cityName }: HeroProps) => {
  return (

    <div id='DocsREquired'>
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <div className="parallelContent">
          <ul className='line-start list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Restaurants</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>E-Commerce Businesses (e.g., Online Home Kitchens)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Businesses Selling Essential Food Products</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Food Business Operators of the Indian Railways</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Businesses Selling Coffee or Coffee-Based Products</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Manufacturers of Powdered Tea</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Food Vending Machines</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Businesses Selling Herbalife-Based Products</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Food Business Operators Involved in Importing or Exporting Food Products</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Food Business Operators of the Indian Airports</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Food Marketing Companies</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Businesses Exporting Cashews</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Amazon Warehouses</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Hotels</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Supermarkets</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>E-Commerce Businesses Selling Prepared Food Online (e.g., Zomato, Swiggy, Uber Eats, etc.)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>E-Commerce Businesses Selling Food Products Online</li>
           </ul>
       <div className="line"></div>
          <ul className='line-end list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Online Businesses Selling Packaged Commodities (e.g., Flipkart, Amazon, etc.)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Catering Businesses</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Event Management Businesses</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Colleges and Institutions with Canteens</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Businesses Involved in Retail, Export, or Import of Fisheries</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Agricultural Product Businesses</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Manufacturers of Packaged Products</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Manufacturers of Various Types of Oil</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Food Outlets</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Hospitals</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Manufacturers of Packaged Drinking Water</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Businesses Involved in Retail, Export, or Import of Dairy Products</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Manufacturers of Chocolate and Chocolate-Based Products</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Food Transporters</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Re-Packagers</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>Milk Chilling Units</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow}/>All Types of Food Business Operators</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="main-para">These businesses are obligated to obtain the FSSAI license to ensure compliance with food safety and standards regulations, emphasizing the importance of maintaining the quality and safety of food products in diverse sectors.Top of Form</p>
  </div>
  );
};
