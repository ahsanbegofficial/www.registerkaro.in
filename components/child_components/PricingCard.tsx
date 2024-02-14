import Router from "next/router";
import { ArrowCircleRight, CheckCircle } from "phosphor-react";
import React from "react";
import data from "../../assets/data/pricing.json";

interface PricingCardData {
  tag: string;
  format: string;
  price: number;
  pricingDetails: { item: string }[];
  link: string;
}

interface PricingService {
  subtitle: string;
  pricingCards: PricingCardData[];
}

interface Pricing {
  title: string;
  button: string;
  service: PricingService[];
}


const PricingCard: React.FC = () => {
  const { pricing: { title, button, service } } = data;
  const router = Router;

  return (
    <section className={`pricing section-padding `}>
      <div className="m-3">
        <div className="container d-flex justify-content-center align-items-center d-grid gap-1">
          <span className="fw-bold section-title text-center font-28">
            <span className="badge-text text-capitalize">{title}</span>
          </span>
        </div>
        <div className="row blog__wrapper px-lg-5">
          {service.map((data, i) => (
            <div key={data.id} className="my-5">
              <div className="mb-2 container d-flex justify-content-center align-items-center d-grid gap-1">
                <span className="fw-bold section-title text-center font-28">
                  <span className="text-capitalize">{data.subtitle}</span>
                </span>
              </div>
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                {data.pricingCards.map((card, i) => (
                  <div key={card.id}>
                    <div className="pricing__item translateEffect1 m-4 p-4">
                      <span className="pricing__item__tag">{card.tag}</span>
                      <h4 className="mt-5 font-Montserrat">{card.format}</h4>
                      <p className="h5 mt-2 pb-3 font-helvetica">₹{card.price}</p>
                      <hr />
                      <div className="pricing__item__list">
                        <ul className="pt-3">
                          {card.pricingDetails.map((detail, i) => (
                            <li key={i}>
                              <CheckCircle size={26} color="#ffa229" weight="light" />
                              <p className="text-start mb-0">{detail.item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="btn__primary" onClick={() => router.push(card.link)}>
                        <span>{button}{" "}
                          <ArrowCircleRight size={40} color="#ffffff" weight="fill" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCard;