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
    <div className="col-lg-7 mx-auto test box-shadow">
     <div className="hero-content">
      <h1>Want to incorporate company</h1>
     </div>
    </div>
  );
};

export default memo(TestimonialSmallContent)