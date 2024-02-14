import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { ArrowRight, ArrowCircleRight } from "phosphor-react";
import annual from "../../assets/images/our-services/annualCompliance.svg";
import book from "../../assets/images/our-services/bookkeeping.svg";
import company from "../../assets/images/our-services/companyForm.svg";
import companySec from "../../assets/images/our-services/companySecretor.svg";
import gst from "../../assets/images/our-services/gstFilling.svg";
import live from "../../assets/images/our-services/liveWebinar.svg";
import payroll from "../../assets/images/our-services/payroll.svg";
import virtual from "../../assets/images/our-services/virtual.svg";
import Link from "next/link";

const OurServices = ({ isBg }: { isBg: string }) => {
  return (
    <section
      className={`about myservices section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="text-center">
        <h2 className="badge-text mt-3 mb-5">Our Services</h2>
        <div className="container w-75 d-flex flex-column justify-content-center align-items-between">
          <div className="d-md-flex justify-content-around align-items-center d-grid gap-3">
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                  <MDBCardImage src={company.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">
                Company <br /> Formation
              </h6>
            </div>
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center overflow-hidden">
                  <MDBCardImage src={companySec.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">
                Company Secretarial <br /> Services
              </h6>
            </div>
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                  <MDBCardImage src={virtual.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">
                Virtual <br /> Office Address
              </h6>
            </div>
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                  <MDBCardImage src={annual.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">
                Annual Compliance <br /> Services
              </h6>
            </div>
          </div>
          <br />
          <div className="mb-3 d-md-flex justify-content-around align-items-center mt-5 d-grid gap-3">
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                  <MDBCardImage src={gst.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">
                VAT Registration, <br /> Preparation & Filing
              </h6>
            </div>
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                  <MDBCardImage src={payroll.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">Payroll Services</h6>
            </div>
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                  <MDBCardImage src={book.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">
                Bookkeeping <br /> Services
              </h6>
            </div>
            <div className="d-grid gap-3 col-md-3 d-flex flex-column justify-content-center align-items-center">
              <MDBCard
                className="mx-3 shadow border-0"
                style={{ width: "80px", height: "80px" }}
              >
                <MDBCardBody className="p-0 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                  <MDBCardImage src={live.src} alt="..." fluid height={80} width={80}/>
                </MDBCardBody>
              </MDBCard>
              <h6 className="mt-3">
                Live Online <br /> Webinars & Workshops
              </h6>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="d-lg-flex justify-content-lg-between">
            <p className="our_client text-start">
              Our Client Services Team is always happy to talk to you about what
              is best for your needs. Contact our team to find out if we are the
              right fit for you.
            </p>
            <div className="d-md-flex justify-content-center align-items-center">
              {/* <button className="btn px-3 py-0 h-50 bg-orange rounded-pill border-0 clientBtn1">
                Get Started
              </button> */}
              <Link href={'/business-registration'} className="py-2 px-4 rounded-pill bg-transparent border-0 clientBtn2">
                Explore our services <ArrowRight size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="our-services-bg py-5">
        <div className="mt-4 container d-lg-flex justify-content-lg-around justify-content-sm-center align-items-center d-grid gap-3">
          <div className="col-lg-8 col-12 card d-lg-flex flex-lg-row justify-content-center align-items-center about3 rounded-4 p-3 translateEffect1">
            <div className="p-3 d-grid gap-3">
              <h5>Small business & Startup Accounts</h5>
              <p className="my-2">
                Make sure your business meets its statutory requirements.
              </p>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">
                  Number of employees <br />0 - 10
                </p>
                
                <Link href='/private-limited-company-registration'><ArrowCircleRight className="mt-3" size={28} /></Link>
              </div>
            </div>
            <div
              className="vr me-2 bg-dark fw-bold d-none d-lg-block"
              style={{ width: "2px" }}
            ></div>
            <hr
              className="d-block d-lg-none d-sm-block"
              style={{ width: "100%" }}
            />
            <div className="p-3 d-grid gap-3">
              <h5>Growing Business Package</h5>
              <p className="my-2">
                Additional support to help you reach your business goals.
              </p>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">
                  Number of employees <br />
                  11 - 50
                </p>
                <Link href='/private-limited-company-registration'><ArrowCircleRight className="mt-3" size={28} /></Link>
              </div>
            </div>
            <div
              className="vr me-2 bg-dark fw-bold d-none d-lg-block"
              style={{ width: "2px" }}
            ></div>
            <hr
              className="d-block d-lg-none d-sm-block"
              style={{ width: "100%" }}
            />
            <div className="p-lg-2 p-3 d-grid gap-3">
              <h5>Scale-Up Company Offer</h5>
              <p className="my-2">
                Compliance, reporting & analysis of performance.
              </p>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">
                  Number of employees <br />
                  50 +
                </p>
                <Link href='/private-limited-company-registration'><ArrowCircleRight className="mt-3" size={28} /></Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-12 card d-flex flex-column justify-content-center align-items-start text-start pricing__item translateEffect1 p-5 bg-orange shadow text-black"
            style={{ height: "17rem" }}
          >
            <h5 className="text-reset">Setting up a business</h5>
            <p className="my-3">
              Make sure your business meets its statutory requirements.
            </p>
            <p className="fw-bold d-flex justify-content-center align-items-center">
              Company Formation Services
              <Link href='/private-limited-company-registration'><ArrowCircleRight className="mt-3" size={30} /></Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;