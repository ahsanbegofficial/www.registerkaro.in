import Image from "next/image";
import Link from "next/link";
import React, { memo, useMemo } from "react";
import data from "../../assets/data/hero-counter.json";
import image from "../../assets/images/hero_model.webp";
import Counter from "../child_components/Counter";

interface HeroInfo {
  subtitle: string;
  title: string;
  description: string;
  button: string;
  badgeOne: {
    counterNumber: number;
    title: string;
  };
  badgeTwo: {
    counterNumber: number;
    title: string;
  };
  badgeThree: {
    counterNumber: number;
    title: string;
  };
}

const Hero: React.FC = () => {
  const { heroInfo } = useMemo(() => data as { heroInfo: HeroInfo }, []);
  const { badgeOne, badgeTwo, badgeThree } = heroInfo;

  return (
    <section id="hero" className={`hero d-flex flex-md-row flex-column justify-content-center align-items-center`}>
      <div className="circle x1" />
      <div className="container">
        <div className="row">
          <div className={"col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center text-center text-md-start"}>
            <div className="hero__content">
              <h4 className="fw-bold">{heroInfo.subtitle}</h4>
              <h1 className="hero__title  display-4 mb-4 text-capitalize fw-bold ">
                <span className="text-secondary">Register</span><span className="text-primary">Karo</span>
              </h1>
              <p className="mb-4 fs-5 ">{heroInfo.description}</p>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 position-relative">
                <Link href="/business-registration" className="btn__primary btn btn-md bg-primary px-3 py-1 text-white rounded smooth">
                  <span>{heroInfo.button}</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <div className="image-shape" />
              <div className="image-shape-2 svg-pattern" />
              <div className="image-shape-3 svg-pattern" />
              <Image priority={true} className="img-desktop" src={image} alt={heroInfo.title} />
              <div className="hero__image__badge-1">
                <h3>
                  <Counter end={badgeOne.counterNumber} />
                </h3>
                <p>{heroInfo.badgeOne.title}</p>
              </div>
              <div className="hero__image__badge-2">
                <h3>
                  <Counter end={badgeTwo.counterNumber} />
                </h3>
                <p>{heroInfo.badgeTwo.title}</p>
              </div>
              <div className="hero__image__badge-3">
                <h3>
                  <Counter end={badgeThree.counterNumber} />
                </h3>
                <p>{heroInfo.badgeThree.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);