import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Image from "next/image";
import styles from '../../public/assets/styles/components/LatestBlog.module.css';
import logo from '../../assets/images/fullLogo.png';
import SectionTitle from "../child_components/SectionTitle";

interface BlogData {
  id: number;
  slug: string;
  title: { rendered: string };
  yoast_head_json: {
    og_image?: { url: string }[];
    author: string;
  };
  date: string;
}

interface BlogProps {
  isBg: string;
}

const Blog: React.FC<BlogProps> = ({ isBg }) => {
  const NEWGLOBAL_VARIABLE = process.env.NEWGLOBAL_VARIABLE

  const [blogList, setBlogList] = useState<BlogData[]>([]);

  useEffect(() => {
    axios
      .get<BlogData[]>(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/posts`)
      .then((res) => {
        setBlogList(res.data);
      })
      .catch((err) => console.log(err));
  }, [NEWGLOBAL_VARIABLE]);

  return (
    <section
      className={`section-padding blog ${isBg === "yes" ? "bg-one" : ""}`}
      id="blog"
    >
      <div className="container">
        <SectionTitle
          title="Popular blog & stories"
          subtitle="Latest blog"
          direction="center"
        />
        <div className="row blog__wrapper">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              loop
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {blogList &&
                blogList?.map((blogData) => (
                  <SwiperSlide key={blogData.id}>
                    <div className="card" data-index={blogData.id}>
                      <Image
                        src={
                          blogData.yoast_head_json.og_image
                            ? blogData.yoast_head_json.og_image[0].url
                            : logo
                        }
                        width={300}
                        height={50}
                        className={`blog_feature_image ${styles.imgZoom}`}
                        alt="feature image"
                      />
                      <div className="card-body">
                        <div className="h5 card-title">
                          <a
                            href={`post/${blogData.slug}`}
                            className="text-reset"
                          >
                            {blogData.title.rendered}
                          </a>
                        </div>
                        <p className="card-text">
                          {new Date(blogData.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </p>
                        <p className="fw-bold h6 mt-n3">
                          Written by {blogData.yoast_head_json.author}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;