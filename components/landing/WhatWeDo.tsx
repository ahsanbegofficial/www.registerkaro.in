import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";
import React, { memo } from "react";
import circle from "../../assets/images/circle.svg";
import arrowDown from "../../assets/images/support/arrow-down.svg";
import arrowUp from "../../assets/images/support/arrow-up.svg";
import growth from "../../assets/images/support/growth.svg";
import img1 from "../../assets/images/support/img1.jpg";
import img2 from "../../assets/images/support/img2.jpg";
import img3 from "../../assets/images/support/img3.jpg";
import manIcon from "../../assets/images/support/man-icon.svg";
import people from "../../assets/images/support/people-icon.svg";
import Link from "next/link";

interface WhatWeDoProps {
  isBg: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ isBg }) => {
  return (
    <section className={`whatwedo section-padding ${isBg === "yes" ? "bg-one" : ""}`}>
      <div className="container">
        <div className="d-lg-flex justify-content-around align-items-center d-grid gap-3">
          <div className="col-lg-6 col-12">
            <div className="ms-lg-0 ms-sm-3">
              <p className="lh-5 fs-5">WHAT WE DO</p>
              <p className="lh-3 fw-bold h2 mt-2">Receive support at every stage of business development.</p>
              <p className="lh-4 mt-3">Launch, grow and scale with ease. Each of our clients has a dedicated team that is committed to answering all queries within 24 hours, so you can rely on our helpful and professional support throughout your business journey.</p>
              <div className="d-lg-flex mt-5 d-grid gap-3">
                <Link className="bg-orange py-3 color-primary px-5 rounded-pill border-0 color-white" href={'/business-registration'}>
                  Popular Services
                </Link>
                <Link className="ms-lg-3 bg-white text-dark py-3 px-5 rounded-pill border-1 border-secondary" href="/sitemap">
                  Get Started <ArrowRight size={28} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="d-none d-lg-flex justify-content-center align-items-center position-relative">
              <Image
                src={circle}
                className="img-fluid position-absolute h-auto"
                alt="circle"
                style={{
                  width: "35%",
                  left: "2%",
                  bottom: "-20px",
                  zIndex: 1,
                }}
              />
              <div
                className="bg-danger rounded-circle p-3 position-absolute d-inline-block bg-orange opacity-50"
                style={{
                  width: "250px",
                  height: "250px",
                  left: "20%",
                }}
              />
              <Image
                src={img2}
                className="img-fluid h-auto position-absolute"
                alt="img1"
                style={{
                  width: "248px",
                  bottom: "20px",
                  left: "80px",
                  zIndex: 2,
                }}
              />
              <Image
                src={img3}
                className="img-fluid h-auto position-absolute"
                alt="img1"
                style={{
                  width: "248px",
                  top: "3%",
                  left: "5%",
                  zIndex: 2,
                }}
              />
              <Image
                src={img1}
                alt="img"
                className="img-fluid position-absolute"
                style={{
                  width: "300px",
                  bottom: "-200px",
                  right: "0%",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-lg-flex justify-content-center align-items-center mt-25">
          <div className="d-grid gap-3 d-flex flex-column justify-content-center align-items-center">
            <MDBCard
              className="mx-3 shadow border-0 bg-secondary"
              style={{ width: "80px", height: "80px" }}
            >
              <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                <MDBCardImage src={manIcon.src} alt="..." fluid height={80} width={80}/>
              </MDBCardBody>
            </MDBCard>
            <h6 className="mt-3">Sole Trader</h6>
          </div>
          <Image
            src={arrowDown}
            alt="arrowDown"
            className="img-fluid d-none d-md-none d-lg-block mb-5"
          />
          <div className="d-grid gap-3 d-flex flex-column justify-content-center align-items-center">
            <MDBCard
              className="mx-3 shadow border-0 bg-orange"
              style={{ width: "80px", height: "80px" }}
            >
              <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                <MDBCardImage src={people.src} alt="..." fluid height={80} width={80}/>
              </MDBCardBody>
            </MDBCard>
            <h6 className="mt-3">Limited Company</h6>
          </div>
          <Image
            src={arrowUp}
            alt="arrowDown"
            className="img-fluid d-none d-md-none d-lg-block"
          />
          <div className="d-grid gap-3 d-flex flex-column justify-content-center align-items-center">
            <MDBCard
              className="mx-3 shadow border-0 bg-secondary"
              style={{ width: "80px", height: "80px" }}
            >
              <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                <MDBCardImage src={growth.src} alt="..." fluid height={80} width={80}/>
              </MDBCardBody>
            </MDBCard>
            <h6 className="mt-3">Growing Business</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhatWeDo);