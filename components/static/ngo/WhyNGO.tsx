import Image from "next/image";
import why_ngo_registration from "../../../assets/images/static/ngo/why_is_ngo_registration_required_new.svg";
interface HeroProps {cityName: string;}
export const WhyNGO = ({ cityName }: HeroProps)  => {
  
  return (
    <div className="Classification flex w-80 m-auto mobile-flex-column" id="WhyNGO">
       <div className="flex-3">
        <Image
          alt="Why Is NGO Registration Required?"
          className="WhyNGO-img w-100"
          loading="lazy"
          src={why_ngo_registration}
          height={470}
        />
      </div>
      <div className="flex-7">
        <p><strong>1: Credibility:</strong> Registered NGOs gain credibility, attracting donors, collaborators, and supporters. Registration lends authenticity to the organization’s mission.</p>
        <p><strong>2: Operational Development:</strong> NGO registration enables local operations to expand, leading to greater exposure and increased community impact.</p>
        <p><strong>3: Resource Expansion:</strong> The scope of financial and human resources expands as NGOs become eligible for income tax exemption, making them more appealing to potential volunteers and contributors.</p>
        <p><strong>4: Tax Benefits:</strong> NGOs registered under the Income Tax Act of 2013 in {cityName} enjoy various tax benefits, contributing to financial sustainability.</p>
        <p><strong>5: Asset and Liability Management:</strong> Registered NGOs can own assets, incur liabilities, and manage interest-earning claims, providing a solid foundation for organizational growth.</p>
        <p><strong>6: Stamp Duty Exemption:</strong> Section 8 companies are exempt from stamp duty, offering additional avenues for tax savings and resource allocation.</p>
      </div>
     
    </div>
  );
};
