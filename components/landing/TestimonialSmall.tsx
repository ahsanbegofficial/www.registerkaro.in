import { memo, useState } from "react";
import data from "../../assets/data/testimonial.json";
import TestimonialSliderSmalll from "../child_components/TestimonialSliderSmalll";
import info from '../../assets/images/ads/info.png'
import Image from "next/image";

const TestimonialSmall = () => {
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
        <h2 className="text-secondary text-center text-md-start display-6 fw-bold  mb-3 hero-banner-container">Private Limited Company Registration</h2>
        <h5 className="fw-bold fs-4 mt-3 mt-md-0 text-center">
          <span className="text-green">in just <span className="days-color">{hero.days}</span></span> at
          <span className="price-color"> {hero.price}</span> only.
        </h5>
        <div className="box-shadow active-main-container">
          <div className="all-btn">
            <div onClick={() => handleActive('1')} className={`${active === '1' ? 'active-btn' : 'none-btn first-none'}`}>Package Includes</div>
            <div onClick={() => handleActive('2')} className={`${active === '2' ? 'active-btn' : 'none-btn'}`}>Steps</div>
            <div onClick={() => handleActive('3')} className={`${active === '3' ? 'active-btn' : 'none-btn'}`}>Benefits</div>
            <div onClick={() => handleActive('4')} className={`${active === '4' ? 'active-btn' : 'none-btn'}`}>Documents</div>
            <div onClick={() => handleActive('5')} className={`${active === '5' ? 'active-btn fifth' : 'none-btn'}`}>Why Choose Us</div>
          </div>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h4 className="text-center fw-600">Everything you will require to get your business off the ground</h4>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-3 pl-10">
              {hero.pack_includes?.map((i: any, n: number) => {
                return (
                  <div className="col" key={n}>
                    <label className="d-flex d-grid gap-2 color-black">
                      <div className="checkmark"></div>
                      {i}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`pl-5  color-black ${active === '2' ? 'active' : 'none'}`}>
            <h4 className="text-center fw-600 price-color">Get your company registered in 4 simple steps</h4>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-3 pl-10">
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Fill up the forms
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Submit the Documents
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Pay only Professional fee
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Get your Company Registered
                </label>
              </div>
            </div>
          </div>
          <div className={`pl-5 color-black ${active === '3' ? 'active' : 'none'}`}>
            <h4 className="text-center fw-600 price-color">Why should you register a Private Limited Company?</h4>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-3 pl-10">
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Limited Liability Protection to Directors personal assets
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Better image and credibility in Market
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Easy to raise fund,capital and loans
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Favorite Business structure for Investors
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Easy to attract Employees and workers
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Quite easy to sell and deal with
                </label>
              </div>
            </div>
          </div>
          <div className={`color-black ${active === '4' ? 'active' : 'none'}`}>
            <h4 className="text-center fw-600 price-color">We would require scanned copies of the documents below</h4>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-3 pl-10">
              <div className="col">
                <div className="black">Required for directors/shareholders</div>
                <div className="col">
                  <label className="d-flex d-grid gap-2 color-black">
                    <div className="checkmark"></div>
                    PAN Card
                  </label>
                </div>
                <div className="col">
                  <label className="d-flex d-grid gap-2 color-black">
                    <div className="checkmark"></div>
                    Photograph
                  </label>
                </div>
                <div className="col">
                  <label className="d-flex d-grid gap-2 color-black">
                    <div className="checkmark"></div>
                    <div>Identity Proof <span className="tooltip"><Image height={20} width={20} src={info} alt='info' /><span className="tooltiptext">Aadhar card or Voter ID or Passport or Driving License of Shareholders and Directors.</span></span></div>
                  </label>
                </div>
                <div className="col">
                  <label className="d-flex d-grid gap-2 color-black">
                    <div className="checkmark"></div>
                    <div>Director's Address Proof <span className="tooltip"><Image height={20} width={20} src={info} alt='info' /><span className="tooltiptext">Latest Telephone Bill /Electricity Bill/ Bank Account Statement of Shareholders and Directors.</span></span></div>
                  </label>
                </div>
              </div>


              <div className="col">
                <div className="black">Required for directors/shareholders</div>
                <div className="col">
                  <label className="d-flex d-grid gap-2 color-black">
                    <div className="checkmark"></div>
                    <div>Business Address Proof <span className="tooltip"><Image height={20} width={20} src={info} alt='info' /><span className="tooltiptext">Latest Electricity Bill/ Telephone Bill of the registered office address.</span></span></div>
                  </label>
                </div>
              </div>
            </div>

          </div>
          <div className={`pl-5 color-black ${active === '5' ? 'active' : 'none'}`}>
          <h4 className="text-center fw-600 price-color">Register your company with India's highest-rated incorporation service provider</h4>
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-3 pl-10">
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  95 % OF OUR CUSTOMERS RATE US 5 STAR
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  300+ SERVICES
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  REASONABLE PRICE
                </label>
              </div>
              <div className="col">
                <label className="d-flex d-grid gap-2 color-black">
                  <div className="checkmark"></div>
                  Quick Turn Around Time
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="business-reviews">
        <h4><span className="fw-600 tex-color">Register</span><span className="fw-600 price-color">Karo</span> is used by <span className="fw-600 price-color">20,000</span> of founders to start, manage, and grow their business</h4>
      </div>
      <TestimonialSliderSmalll review={review} />
    </div>
  );
};

export default memo(TestimonialSmall)