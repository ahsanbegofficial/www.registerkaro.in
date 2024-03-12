import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-office/Key_Features_of_Virtual_Office.svg";
interface HeroProps { cityName: string;}
const Features = ({ cityName }: HeroProps) => {
  return (
    <div id="Features">
        <p className="main-para">The following are the key features of Virtual Offices:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3">
            <Image
                alt="Key Features of Virtual Office"
                className="Features-img w-100"
                height={1080}
                loading="lazy"
                src={bft}
            />
         </div>
        <div className="flex-7">
            <p><strong>Prestigious Business Address:</strong> A virtual office provides businesses with a prestigious mailing address in a prime location, creating a professional image. This address can be used for official correspondence, business registration, and marketing purposes, enhancing credibility and trust among clients and partners.</p>
            <p><strong>Mail Handling and Forwarding:</strong> Virtual offices offer mail handling services where incoming mail and packages are received on behalf of the client. The service may include mail forwarding to the client’s preferred address or providing notifications for mail pickup, ensuring that important communications are managed efficiently.</p>
            <p><strong>Telephone Answering and Call Management:</strong> Virtual offices often include telephone answering services. A dedicated phone number is provided, and trained professionals manage incoming calls, providing personalized greetings and forwarding calls based on predefined instructions. Call forwarding to a designated number ensures that important calls are never missed.</p>
            <p><strong>Meeting Room Access:</strong> One of the valuable features of a virtual office is access to meeting rooms and conference facilities on an as-needed basis. Clients can schedule meetings, presentations, or interviews at professional spaces equipped with necessary amenities like audiovisual equipment, Wi-Fi, and catering services.</p>
            <p><strong>Professional Receptionist Services:</strong> Many virtual office providers offer the services of professional receptionists who handle administrative tasks such as greeting guests, managing appointments, and providing administrative support during meetings or events hosted at the virtual office premises.</p>
            <p><strong>Business Support Services:</strong> Additional business support services may include fax services, courier handling, scanning, printing, and secretarial assistance. These services help streamline administrative tasks and support the day-to-day operations of remote businesses.</p>
            <p><strong>Flexibility and Scalability:</strong> Virtual offices offer flexibility in terms of scaling services based on business needs. Businesses can easily upgrade or downgrade their service plans, add or remove services, and change the duration of their subscription, providing the flexibility to adapt to changing circumstances.</p>
            <p><strong>Cost-Effectiveness:</strong> Compared to traditional office setups, virtual offices are cost-effective as they eliminate expenses associated with leasing physical office space, maintenance, utilities, and staffing. Businesses can access essential office functions at a fraction of the cost, making it an attractive option for startups and small businesses.</p>
            <p><strong>Global Presence:</strong> Virtual offices enable businesses to establish a presence in multiple locations or even internationally without the need for physical offices in each location. This global presence enhances market reach and allows businesses to target diverse geographic markets.</p>
            <p><strong>Business Identity and Branding:</strong> By using a prestigious business address and professional telephone answering services, virtual offices assist in building a strong brand identity and credibility in the market. Consistent branding across communications contributes to a professional image.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Features;
