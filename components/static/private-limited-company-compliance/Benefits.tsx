import React from "react";
import dft from "../../../assets/images/static/private-limited-company-compliance/What_are_the_Benefits.svg";
import Image from "next/image";
interface HeroProps {
    cityName: string;
}
export const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="Benefits">
      <p className="main-para mb-2">
        Following are some important benefits of Private Limited Company
        Compliance in {cityName}:
      </p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Helps to attract investors:</strong> Financial records &
            compliance are the main points of focus with regard to investors.
            Before investing in your business, investors check the regularity of
            filing annual returns on the MCA portal. Hence, regular filing of
            Private Limited Company Compliance is an important part of getting
            investors.
          </p>
          <p>
            <strong>
              Helps to maintain the active status of your company:
            </strong>{" "}
            Filing annual compliance for a Private Limited Company on time is
            vital to avoid penalties on accounting services. Failure to file may
            also reduce the business or company status. Furthermore, the Company
            will also be declared “in-operational” & removed from ROC. Such
            Companies’ Directors are debarred from all future businesses in
            {cityName}.
          </p>
          <p>
            <strong>Credibility:</strong> The date of filing Private Limited
            Company Compliance is shown on the MCA portal. Thus, regularity in
            filing compliance increases your business credibility, attracting
            customers, helping obtain Government Tenders & attaining loan
            approvals.
          </p>
          <p>
            <strong>Provide Financial Assistance:</strong> The financial
            department of a business must meet several standards in terms of
            taxes and accounting. Failure to meet such standards not only leads
            to losses but also legal issues.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="What are the Benefits of Private Limited Company Compliance in India?"
            className="Benefits-img w-100"
            height={482}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
