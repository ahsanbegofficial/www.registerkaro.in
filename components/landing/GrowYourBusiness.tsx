import { MDBBadge } from "mdb-react-ui-kit";
import { Plus } from "phosphor-react";
import React, { memo, useCallback, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface GrowYourBusinessProps {
  isBg: string;
}

interface SliderSettings {
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  vertical: boolean;
  verticalSwiping: boolean;
  swipeToSlide: boolean;
  autoplay: boolean;
  speed: number;
  arrows?: boolean;
  autoplaySpeed: number;
  cssEase: string;
  beforeChange: (currentSlide: number, nextSlide: number) => void;
}

const business = [
  "Monthly GST fillings - Rs.10,000",
  "Quarterly TDS fillings - Rs.5,000",
  "Board Minutes preparation - Rs.1,000",
  "Annual AOC 4 filling - Rs.2,000",
  "Annual MGT - 7 filling - Rs.2,000 ",
  "DIR 3KYC for all the directors - Rs.3,000 ",
  "Bookkeeping and Accounting - Rs.5,000 ",
  "Payroll compliance - Rs.5,000",
  "Leave Management - Rs.2,000",
  "Financial Preparation and Audit support - Rs.4,000",
  "Annual general Meeting Minutes - Rs.1,000",
  "Maintenance of Statutory Registers - Rs.1,000",
  " Income Tax Return filling for the Company - Rs.4,000",
  "Income Tax Return filling of the Directors and Shareholders - Rs.4,000",
  "INC 20A filling - Rs.1,000",
  "ADT 1 filling - Rs.1,000",
];

const businessMoney = [10, 5, 1, 2, 2, 3, 5, 5, 2, 4, 1, 1, 4, 4, 1, 1];

const GrowYourBusiness: React.FC<GrowYourBusinessProps> = ({ isBg }) => {
  const [money, setMoney] = useState<number>(10);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSliderBeforeChange = useCallback(
    (currentSlide: number, nextSlide: number) => {
      setActiveSlide(nextSlide);
      if (nextSlide === 0) {
        setMoney(10);
      } else {
        setMoney((prevMoney) => prevMoney + businessMoney[nextSlide]);
      }
    },
    []
  )

  const settings: SliderSettings = useMemo(() => ({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 1500,
    cssEase: "ease-in-out",
    beforeChange: handleSliderBeforeChange,
  }), [handleSliderBeforeChange]);

  return (
    <section className={`grow_your_business about section-padding ${isBg === "yes" ? "bg-one" : ""}`} id="grow">
      <div className="container d-flex justify-content-center">
        <h1 className="business-head my-5 text-center-sm">
          <span className="text-green">Grow</span> Your Business instead of Complex <br />
          <span className="text-green">Registration</span> processes and leave it for <span className="text-green">us</span>
        </h1>
      </div>
      <div className="container d-lg-flex justify-content-around align-items-center px-5">
        <div className="col-lg-5 col-12 font-size-h3">
          <h3 className="text-center">With other service providers you would have to pay for each compliance filing individually!</h3>
          <div className="mt-3 position-relative">
            <MDBBadge
              color="warning"
              className="position-absolute top-0 start-100 translate-middle badge rounded-circle d-flex justify-content-center align-items-center"
              notification
              style={{ zIndex: 1, height: "4rem", width: "4rem" }}
            >
              <h5 className="m-0">{money}k</h5>
              <Plus
                size={20}
                weight="bold"
                color="green"
                style={{ right: "0rem", zIndex: 2 }}
                className="position-absolute top-0 translate-middle green-plus"
              />
              <Plus
                size={20}
                weight="bold"
                color="green"
                style={{ bottom: "0rem", right: "2.5rem", zIndex: 2 }}
                className="position-absolute translate-middle green-plus"
              />
              <Plus
                size={20}
                weight="bold"
                color="green"
                style={{ bottom: "0rem", right: "-1rem", zIndex: 2 }}
                className="position-absolute translate-middle green-plus"
              />
            </MDBBadge>

            <Slider
              {...settings}
              className="pricing__item overflow-hidden py-5 container"
            >
              {business.map((item, index) => (
                <div
                  className="my-2 border rounded p-md-2"
                  key={index}
                  id={`checkbox-strip-${index}`}
                >
                  <span className="d-flex justify-content-start align-items-start ms-md-4 ms-1 my-2">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span className="d-flex justify-content-center align-items-center">
                        <input className="custom-checkbox2" type="checkbox" defaultChecked />
                        <div className="ms-2 text-start lh-2 w-100">
                          {item}
                        </div>
                      </span>
                    </div>
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-lg-5 col-12 mt-5 mt-md-0">
          <h3 className="text-center">Or you could</h3>
          <div className="mt-3">
            <div
              className="pricing__item d-flex flex-column justify-content-start align-items-center"
              style={{ borderRadius: "15px", height: "28rem" }}
            >
              <div className="mt-5 border rounded py-3 w-100">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <span className="d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span className="d-flex justify-content-center align-items-center">
                        <input className="custom-checkbox2" type="checkbox" defaultChecked />
                        <div className="ms-2 text-start lh-2 w-100">
                          Use RegisterKaro
                        </div>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <div
                className="bg-green mt-5 text-center d-flex flex-column justify-content-evenly align-items-center p-3"
                style={{ borderRadius: "15px" }}
              >
                <p className="text-black">
                  Get all your <strong className="fw-900">Compliance </strong>done with the help of<strong className="fw-900"> Industry Experts</strong> and channelize that precious time to grow your<strong className="fw-900"> business</strong>.
                </p>
                <button className="text-center bg-orange px-3 btn mt-4">
                  Get Started!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(GrowYourBusiness)