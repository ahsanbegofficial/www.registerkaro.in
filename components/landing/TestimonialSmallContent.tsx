import { memo, useState } from "react";
import data from "../../assets/data/testimonial.json";
import TestimonialSliderSmalll from "../child_components/TestimonialSliderSmalll";
import info from '../../assets/images/ads/info.png'
import Image from "next/image";

const TestimonialSmallContent = () => {
  const { testimonial } = data;
  const { review } = testimonial;
  const [active, setActive] = useState('1')

  let hero = {
    "pack_includes": [
      "2 DIN and DSC for two Directors",
      "Drafting of MoA & AoA",
      "Registration fees and stamp duty",
      "Company Incorporation Certificate",
      "Company PAN and TAN",
      "ZohoBooks subscription"
    ],
    "companyDes": "Get your Private Limited Company Registration",
    "price": "Rs.1,999/-",
    "days": "14 days",
    "companyName": "Private Limited Company Registration In",
    "subtitle": " of Private Limited Company Registration",
    "subtitle2": " required For Private Limited Company Registration"
  }

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className="test box-shadow">
      <div className="hero-content mt-4">
        <p className="text-first"><strong>30,000+</strong> Businesses registered</p>
        <p className="text-second"><strong>20% of all Indian businesses register with us</strong></p>
        <div className="first-div">
          <p><strong>Step 1: Enter Company Name</strong></p>
          <p>Begin by entering your desired company name into the designated field</p>
          <p className="mt-2"><strong>Step 2: Business Age</strong></p>
          <p>Provide the age of your business by inputting the number of years since its establishment</p>
          <p className="mt-2"><strong>Step 3: No. of Employees</strong></p>
          <p>Specify the number of employees currently working in your business</p>
          <p className="mt-2"><strong>Step 4: No. of Partners</strong></p>
          <p>If applicable, indicate the number of partners involved in your business venture</p>
          <p className="mt-2"><strong>Step 5: Submit</strong></p>
          <p>Submit the form to proceed with the filing process and one of our expert will contact you</p>
        </div>
      </div>
    </div>
  );
};

export default memo(TestimonialSmallContent)