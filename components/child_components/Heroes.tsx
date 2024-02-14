import Image from "next/image";
import cb from "../../assets/images/services/checkbox.svg";
import page1 from "../../assets/images/services/page1.webp";
import llpD from "../../assets/images/ads/llp-desktop.jpg";
import opcD from "../../assets/images/ads/opc-desktop.jpg";
import pvtD from "../../assets/images/ads/pvt-desktop.jpg";
import nidhi from "../../assets/images/ads/nidhi.png";
import Section8 from "../../assets/images/ads/Section8.png";
import Producer from "../../assets/images/ads/Producer.png";
import Public from "../../assets/images/ads/Public.png";
import { FormAds } from "./FormAds";

interface HeroesProps {
  Query: any
  isBg: string;
  registrationName: any;
  data: {
    companyDes: string;
    days: string;
    price: string;
    pack_includes: string[];
  };
}

export const Heroes: React.FC<HeroesProps> = ({ isBg, data, Query, registrationName }) => {
  const { companyDes, days, price, pack_includes } = data;

  return (
    <div className="heroes">
      <section id="hero" className={`pt-50 ${isBg === "yes" ? "bg-one" : ""} `}>
        <div className="container d-lg-flex">
          <div className="left-from-content">
            <div className="img-container-desktop">
              {
                Query === 'llp-registration' ?
                  <Image priority={true} src={llpD} height={450} width={480} alt='page-hero' className="img-width" />
                  : Query === 'one-person-company' ? <Image priority={true} src={opcD} height={450} width={500} alt='page-hero' className="img-width" />
                    : Query === 'private-limited-company-registration' ? <Image priority={true} src={pvtD} height={450} width={550} alt='page-hero' className="img-width" />
                      : Query === 'nidhi-company-registration' ? <Image priority={true} src={nidhi} height={450} width={500} alt='page-hero' className="img-width" />
                      : Query === 'section-8-company-registration' ? <Image priority={true} src={Section8} height={450} width={500} alt='page-hero' className="img-width" />
                      : Query === 'producer-company-registration' ? <Image priority={true} src={Producer} height={450} width={500} alt='page-hero' className="img-width" />
                      : Query === 'public-limited-company-registration' ? <Image priority={true} src={Public} height={450} width={480} alt='page-hero' className="img-width" />
                        : <Image priority={true} src={page1} height={350} alt='page-hero' className="img-width" />
              }
            </div>
            <div className="img-container-mobile">
              {
                Query === 'llp-registration' ?
                  <Image priority={true} src={llpD} height={350} alt='page-hero' className="img-width" />
                  : Query === 'one-person-company' ? <Image priority={true} src={opcD} height={310} alt='page-hero' className="img-width" />
                    : Query === 'private-limited-company-registration' ? <Image priority={true} src={pvtD} height={310} alt='page-hero' className="img-width" />
                      : Query === 'nidhi-company-registration' ? <Image priority={true} src={nidhi} height={310} alt='page-hero' className="img-width" />
                      : Query === 'section-8-company-registration' ? <Image priority={true} src={Section8} height={450} alt='page-hero' className="img-width" />
                      : Query === 'producer-company-registration' ? <Image priority={true} src={Producer} height={450} alt='page-hero' className="img-width" />
                      : Query === 'public-limited-company-registration' ? <Image priority={true} src={Public} height={450} alt='page-hero' className="img-width" />
                        : <Image priority={true} src={page1} height={310} alt='page-hero' className="img-width" />
              }
            </div>
            <div>
              <h2 className="text-secondary text-center text-md-start display-6 fw-bold  mb-3 hero-banner-container">{registrationName}</h2>
              <h5 className="fw-bold fs-4 mt-3 mt-md-0 text-center text-md-start">{companyDes} <br />
                <span className="text-green">in just <span className="days-color">{days}</span></span> at
                <span className="price-color"> {price}</span> only.
              </h5>
              <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-3">
                {pack_includes?.map((i: any, n: number) => {
                  return (
                    <div className="col" key={n}>
                      <label className="d-flex d-grid gap-2">
                        <Image src={cb.src} alt="data" height={18} width={18} className="checkSvg mb-2" />
                        {i}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <FormAds Query={Query} />
        </div>
      </section>
    </div>
  );
};