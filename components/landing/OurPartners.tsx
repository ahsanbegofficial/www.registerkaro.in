import React, { useMemo, useCallback } from "react";
import Marquee from "react-fast-marquee";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import adobe from "../../assets/images/partners/adobe.png";
import amazon from "../../assets/images/partners/amazon.png";
import amd from "../../assets/images/partners/amd.png";
import dell from "../../assets/images/partners/dell.png";
import google from "../../assets/images/partners/google.png";
import hp from "../../assets/images/partners/hp.png";
import huawei from "../../assets/images/partners/huawei.png";
import lee from "../../assets/images/partners/lee.png";
import mcDonald from "../../assets/images/partners/mcDonald.png";
import slack from "../../assets/images/partners/slack.png";
import target from "../../assets/images/partners/target.png";

interface OurPartnersProps {
  isBg: string;
}

interface Partner {
  src: string;
}

const OurPartners: React.FC<OurPartnersProps> = ({ isBg }) => {
  const partners = useMemo(() => [
    adobe,
    amazon,
    amd,
    dell,
    google,
    hp,
    huawei,
    lee,
    mcDonald,
    slack,
    target,
  ], []);

  const renderPartnerCards = useCallback((partner: Partner, index: number) => (
    <MDBCard
      className="mx-3 shadow border-0"
      style={{ width: "80px", height: "80px" }}
      key={index}
    >
      <MDBCardBody className="p-2 d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
        <MDBCardImage src={partner.src} alt="..." fluid height={126} width={168} />
      </MDBCardBody>
    </MDBCard>
  ), []);

  return (
    <section className={`partners pricing section-padding vh-100 ${isBg === "yes" ? "bg-one" : ""} d-flex flex-column justify-content-center align-items-center`}>
      <div className="container">
        <h1 className="fw-bold text-center">
          We <span className="text-orange">partner</span> with the best, <br />so that your business can flow<span className="text-orange"> seamlessly.</span>
        </h1>
        <h5 className="text-center mt-2 mb-5 text-muted">Your Business needs numerous expertise and that's why we are providing you the best services with the best names in the field .</h5>
      </div>
      <Marquee gradient={false} style={{ height: "8rem" }}>
        {partners.map((partner, index) => renderPartnerCards(partner, index))}
        {partners.map((partner, index) => renderPartnerCards(partner, index))}
      </Marquee>
      <Marquee gradient={false} style={{ height: "8rem" }} delay={3}>
        {partners.slice().reverse().map((partner, index) => renderPartnerCards(partner, index))}
        {partners.map((partner, index) => renderPartnerCards(partner, index))}
      </Marquee>
    </section>
  );
};

export default React.memo(OurPartners);
