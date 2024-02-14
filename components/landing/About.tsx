import React, { useMemo, useCallback, memo } from "react";
import { CheckCircle } from "phosphor-react";
import Image from "next/image";
import data from "../../assets/data/about.json";
import name from "../../assets/images/about/logo-w-n.png";
import mobile from "../../assets/images/about/mobile.png";
import why_bg from "../../assets/images/about/why_bg.svg";
import man from "../../assets/images/about/why_model.png";
import SectionTitle from "../child_components/SectionTitle";

const About = ({ isBg }: { isBg: string }) => {
  const { about: { title, subtitle, items, description, ratings, trustedBy } } = useMemo(() => data, []);

  const renderItems = useCallback(() => {
    return items.map((data, i) => (
      <li key={i}>
        <CheckCircle size={26} color="#ffa229" weight="light" />
        <p className="mb-0">{data.title}</p>
      </li>
    ));
  }, [items]);

  return (
    <section id="about" className={`about3 section-padding ${isBg === "yes" ? "bg-one" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="about3__image position-relative">
              <Image className="img-fluid" src={why_bg} alt="about us" height={640} width={506} />
              <Image className="man img-fluid position-absolute" src={man} alt="about us model" height={461} width={435} />
              <div className="position-absolute" style={{ bottom: "0%", left: "-5%", zIndex: 2 }}>
                <Image className="img-fluid w-75 h-auto position-relative" src={mobile} alt="about us" />
                <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 3, marginLeft: "-84px" }}>
                  <Image className="img-fluid mb-1" src={name} alt="about us" style={{ width: "40%" }} />
                  {new Array(2).fill(0).map((e, i) => (
                    <div key={i}>
                      <div className="card pricing__item-new rounded text-center bg-orange mt-2" style={{ width: "70px", marginBottom: "-1px", zIndex: 3 }}>
                        <p className="" style={{ fontSize: "7px" }}>Form your LLC</p>
                      </div>
                      <div className="card pricing__item-new rounded p-2 bg-orange" style={{ width: "100px" }}>
                        {new Array(3).fill(0).map((e, i) => (
                          <div key={i} className="border rounded-1 py-1" style={{ fontSize: "6px" }}>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                              <span className="d-flex justify-content-center align-items-center">
                                <input className="custom-checkbox2" type="checkbox" defaultChecked />
                                <div className="ms-2 text-start lh-2 w-100">Use RegisterKaro</div>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about3__image__brand">
                <div className="about3__image__brand--rating">
                  <span className="about3__image__brand--rating--percent">{ratings}</span>
                  <div className="about3__image__brand--rating--count">{ratings}</div>
                </div>
                <div className="about3__image__brand--trust">
                  <p>Trusted by <strong>{trustedBy}+</strong> clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1 mb-4 mb-xl-0">
            <div className="about3__content">
              <SectionTitle title={title} subtitle={subtitle} description={description} />
              <ul>{renderItems()}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);