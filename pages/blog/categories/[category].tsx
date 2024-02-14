import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { CaretRight } from "phosphor-react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import SinglePageSidebar from "../../../components/child_components/SinglePageSidebar";
import Image from "next/image";
import Head from "next/head";

const BlogCategory = () => {
const NEWGLOBAL_VARIABLE=process.env.NEWGLOBAL_VARIABLE

  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryData, setCategoryData] = useState<any>(null);
  const [tags, setTags] = useState<any>({});
  const router = useRouter();

  const getTagName = useCallback((tag: string) => {
    axios
      .get(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/tags/${tag}`)
      .then((res) => {
        setTags((prev: any) => ({ ...prev, [tag]: res.data.name }));
      })
      .catch((err) => console.log(err));
    }, [NEWGLOBAL_VARIABLE]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const category = router.query.category as string;
      axios
        .get(
          `${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/posts?categories=${category}`
        )
        .then((res) => {
          axios
            .get(
              `${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/categories/${category}?per_page=100`
            )
            .then((res) => {
              setCategoryName(res.data.name);
            })
            .catch((err) => console.log(err));
          res.data.map((blog: any) => {
            blog.tags.map((tag: string) => {
              getTagName(tag);
            });
            return null;
          });
          setCategoryData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [router.query,NEWGLOBAL_VARIABLE,getTagName]);

  let hf = `https://www.registerkaro.in/categories/${categoryName}`

  return (
     <>
      <Head>
        <title>Category | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={hf} />
        <meta property="og:title" content="Category  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <div className="blog-hero bg-one">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3">{categoryName}</h1>
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
                <li>
                  <CaretRight size={20} />
                </li>
                <li>
                  <Link href="/blog/categories">{categoryName}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-details section-padding">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-md-12 col-lg-8 mb-4 mb-md-0 all-blogs__card">
              {categoryData &&
                categoryData.map((blog: any, i: number) => (
                  <Link key={i} href={`/post/${blog.slug}`}>
                    <div className="row all-blogs__card__single mb-4">
                      <div className="col-md-4 mb-3 mb-md-0">
                        <Image
                          className="img-fluid"
                          src={
                            blog.yoast_head_json.og_image &&
                            blog.yoast_head_json.og_image[0].url
                          }
                          alt="thumbnail"
                          height={158}
                          width={852}
                        />
                      </div>
                      <div className="col-md-8">
                        <h3 className="my-3">{blog.title.rendered}</h3>
                        <p>{parse(`${blog.excerpt.rendered}`)}</p>
                        <div className="all-blogs__card__single__writer">
                          <div className="d-flex d-grid gap-3">
                            <p>
                              {blog.tags?.map((tag: string, index: number) => {
                                return (
                                  <span className="mb-1 me-1" key={index}>
                                    #{tags[tag]}
                                  </span>
                                );
                              })}
                            </p>
                          </div>
                          <div>
                            <h5 className="mb-1">
                              {blog.yoast_head_json.author}
                            </h5>
                            <p>
                              {new Date(blog.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              {categoryData == 0 && <h5>No blog found!</h5>}
            </div>
            <aside className="col-md-12 col-lg-4 mb-4 mb-md-0 sidebar">
              <SinglePageSidebar />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCategory;
