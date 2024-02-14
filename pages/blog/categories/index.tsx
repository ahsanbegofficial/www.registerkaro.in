import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { CaretRight } from "phosphor-react";
import Image from "next/image";
import Head from "next/head";
const NEWGLOBAL_VARIABLE=process.env.NEWGLOBAL_VARIABLE

export const getStaticProps = async () => {
  const res = await fetch(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/categories?per_page=100`)
  const result = await res.json()
  return {
    props: {
      result: result
    }
  }
}

const BlogCategory = ({ result }: { result: any }) => {
  const [category, setCategory] = useState<any>(null);
  useEffect(() => {
    setCategory(result)
  }, [result]);
  return (
    <>
      <Head>
        <title>Categories | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/categories" />
        <meta property="og:title" content="Categories  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <div className="blogIndex">
        <div className="blog-hero bg-one">
          <div className="container">
            <div className="row">
              <div className="blog-title">
                <h1 className="display-3">Categories</h1>
                <ul className="flex-wrap">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <CaretRight size={20} />
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <CaretRight size={20} />
                  </li>
                  <li>
                    <Link href="/blog/categories">Categories</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="blog-details section-padding">
          <div className="container">
            <div className="px-3 row row-cols-lg-2 d-flex justify-content-center align-items-center">
              {category?.map((categories: any, i: number) => (
                <Link
                  href={"/blog/categories/" + encodeURIComponent(categories.id)}
                  className="text-reset"
                  key={i}
                >
                  <div
                    className="service__card translateEffect2 my-3 mx-3 pe-5"
                    style={{ width: "100%" }}
                  >
                    <div className="row align-items-center">
                      <div className="col-sm-4 p-0">
                        <div className="service__item-img d-md-block d-none">
                          <Image
                            className="img-fluid m-2 rounded"
                            src={`/${categories.yoast_head_json.og_image &&
                              categories.yoast_head_json.og_image[0].url
                              }`}
                            alt="title"
                            height={158}
                            width={852}
                          />
                        </div>
                      </div>
                      <div className="col-sm-8 py-3">
                        <div className="service__item-content ms-2">
                          <h3 className="mt-0">{categories.name}</h3>
                          <p>{categories.yoast_head_json.og_description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogCategory;
