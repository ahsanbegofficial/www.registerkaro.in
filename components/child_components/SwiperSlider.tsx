import Image from "next/image";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import aws from '../../assets/images/organic/slide/aws.png'
import myoperator from '../../assets/images/organic/slide/myoperator.png'
import yesbank from '../../assets/images/organic/slide/yesbank.png'
import hsbc from '../../assets/images/organic/slide/hsbc.png'
import zoho from '../../assets/images/organic/slide/zoho.png'
import phonepe from '../../assets/images/organic/slide/phonepe.png'
import oyo from '../../assets/images/organic/slide/oyo.png'
import myhq from '../../assets/images/organic/slide/myhq.png'
import hdfc from '../../assets/images/organic/slide/hdfc.png'

SwiperCore.use([Autoplay, Pagination]);

const data = [
    {
        img: aws,
        ht: 60,
        wt: 220
    },
    {
        img: hsbc,
        ht: 80,
        wt: 280
    },
    {
        img: zoho,
        ht: 140,
        wt: 200
    },
    {
        img: myoperator,
        ht: 100,
        wt: 280
    },
    {
        img: phonepe,
        ht: 80,
        wt: 280
    },
    {
        img: yesbank,
        ht: 100,
        wt: 280
    },
    {
        img: oyo,
        ht: 190,
        wt: 280
    },
    {
        img: myhq,
        ht: 70,
        wt: 280
    },
    {
        img: hdfc,
        ht: 180,
        wt: 230
    }    
]
export const SwiperSlider = () => {
    return (
        <div className="Slide">
            <Swiper className="swiper"
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay
                loop
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 80,
                    },
                }}
            >
                {
                    data?.map((e, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex">
                                <Image
                                    src={e.img}
                                    width={e.wt}
                                    height={e.ht}
                                    className={'card-img-top imgZoom'}
                                    alt="blog_image"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};