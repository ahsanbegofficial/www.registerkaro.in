import Image from 'next/image';
import React, { memo } from "react";
import data from "../../assets/data/testimonial.json";
import bgImg from '../../assets/images/steps/bgImg.webp';
import Counter from '../child_components/Counter';
import TestimonialSlider from "../child_components/TestimonialSlider";

interface TestimonialProps {
  isBg: string;
}

interface CounterProps {
  className: string;
  end: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ isBg }) => {
  const { testimonial } = data;
  const { description, review, counterNumber, shapeImg1, shapeImg2, shapeImg3, shapeImg4 } = testimonial;
  const bgImage = {
    backgroundImage: `url(${bgImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '5500',
    width: '8000'
  };
  const convertedCounterNumber = Number(counterNumber);

  return (
    <div className="main-testimonial">
      <section style={bgImage} className={`section-padding testimonial mainContainer ${isBg === "yes" ? "bg-one" : ""}`} id="testimonial">
        <h3 className="headingText text-center pb-5 fs-3 fw-bold mb-5">Hear What Our <span className="headingTextStyle text-secondary">Customers</span> <br />Have To Say</h3>
        <div className="container contentDiv">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className={"section-title-left"}>
                <p className='testimonialText mt-3'><span className='text-secondary'>Register</span><span className="testimonialPara">Karo</span> is used by tens of thousands of founders to start, manage, and grow their business</p>
                <h6>
                  <Counter className="countNum" end={convertedCounterNumber} />
                  <span className="customerText">Happy Customers</span>
                </h6>
              </div>
              <p className="mb-4">{description}</p>
              <section>
                <small className="text-end"> <strong>RegisterKaro is a startup India registered company</strong> </small>
              </section>
            </div>
            <div className="col-lg-7 mx-auto">
              <div className="testimonial__slider">
                <Image className="testimonial__slider__img-1" src={shapeImg1} alt="title" height={100} width={100} />
                <Image className="testimonial__slider__img-2" src={shapeImg2} alt="title" height={100} width={100} />
                <Image className="testimonial__slider__img-3" src={shapeImg3} alt="title" height={100} width={100} />
                <Image className="testimonial__slider__img-5" src={shapeImg4} alt="title" height={100} width={100} />
                <TestimonialSlider review={review} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Testimonial)