import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import gImg from "../../assets/images/reviewTest/googleReview.webp";

interface Review {
  id: number;
  description: string;
  image: string;
  link: string;
  name: string;
  title: string;
}

interface TestimonialSliderProps {
  review: Review[] | undefined;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ review }) => {
  const swiperSlides = useMemo(
    () =>
      review?.map((blogData) => (
        <SwiperSlide key={blogData.id}>
          <div className="testimonial__slide__content grabbed">
            <div className="d-flex align-items-center">
              <Image src={gImg} alt="" width={60} height={60}/>
              <div>
                <p className="reviewStylePost">Posted on</p>
                <h2 className="reviewStyleHead">Google</h2>
              </div>
            </div>
            <p className="blogDes1">{blogData.description}</p>
            <div className="user-info p-3">
              <div className="user-info__image">
                <Image src={blogData.image} alt="title" width={100} height={100}/>
              </div>
              <div className="user-info__content">
                <h4>
                  <Link href={blogData.link} className="h4" target="__blank">{blogData.name}</Link>
                </h4>
                <p>{blogData.title}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      )),
    [review]
  );
  return (
    <Swiper modules={[Navigation, Autoplay]} navigation autoplay loop>
      {swiperSlides}
    </Swiper>
  );
};

export default TestimonialSlider;