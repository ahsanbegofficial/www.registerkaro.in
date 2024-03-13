import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/australia-company-registration/DOCUMENT_REQUIRED.svg";
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

const DocumentReq = () => {
  return (
    <div id="DocumentReq">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Completed Application Form (Form 201)</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Name Reservation</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Company Constitution or Replaceable Rules</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Submission of Form 410 for name reservation</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Australian Company Number (ACN)</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Details of shareholders and directors</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Information regarding the Registered Office Address</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Valid identification documents for incorporators, directors, and officers</li></ul>
             <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Evidence of the registered office address, such as a lease agreement or land title certificate</li></ul>
        </div>
        <div className="flex-4">
        <Image
            alt="Document Required
            ulArrow Completed Application Form (Form 201)
            ulArrow Name Reservation"
            className="DocumentReq-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentReq;


