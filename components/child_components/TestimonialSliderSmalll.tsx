import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

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

const TestimonialSliderSmalll: React.FC<TestimonialSliderProps> = ({ review }) => {
  const swiperSlides = useMemo( () =>
      review?.map((blogData) => (
        <SwiperSlide key={blogData.id}>
          <div className="testimonial__slide__content grabbed flex-test">
            <div className="user-info p-3 flex-image-name">
              <div className="user-info__image">
                <Image src={blogData.image} alt="title" width={50} height={50}/>
              </div>
              <div className="user-info__content">
                <p><Link href={blogData.link} target="__blank">{blogData.name}</Link></p>
              </div>
            </div>
            <p className="blogDes1">{blogData.description}</p>
          </div>
        </SwiperSlide>
      )),
    [review]
  );
  return (
    <Swiper modules={[Autoplay]} autoplay loop>
      {swiperSlides}
    </Swiper>
  );
};

export default TestimonialSliderSmalll;