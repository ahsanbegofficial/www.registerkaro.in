import React, { useCallback, useEffect, useState } from "react";
import SinglePageSidebar from "../../components/child_components/SinglePageSidebar";
import axios from "axios";
import Link from "next/link";
import parse from "html-react-parser";
import { CaretRight } from "phosphor-react";
import Image from "next/image";
import Head from "next/head";
import logo from '../../assets/images/fullLogo.jpg'
import { Loading } from "../../components/child_components/Loading";

export default function Home({ result }: { result: any }) {
  const NEWGLOBAL_VARIABLE = process.env.NEWGLOBAL_VARIABLE

  const [allBlogs, setAllBlogs] = useState<any>(null);
  const [tags, setTags] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);

  // const getTagName = useCallback((tag: string) => {
  //   axios
  //     .get(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/tags/${tag}`)
  //     .then((res) => {
  //       setTags((prev: any) => ({ ...prev, [tag]: res.data.name }));
  //     })
  //     .catch((err) => console.log(err));
  // }, [NEWGLOBAL_VARIABLE]);

  const handlePageChange = (pageNumber: number) => {
    console.log('handle', pageNumber);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const getTagName = (tag: string) => {
      axios
        .get(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/tags/${tag}`)
        .then((res) => {
          setTags((prev: any) => ({ ...prev, [tag]: res.data.name }));
        })
        .catch((err) => console.log(err));
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.registerkaro.in/wordpress/wp-json/wp/v2/posts?page=${currentPage}&per_page=5`);
        console.log('r', response);
        setAllBlogs(response.data);
        allBlogs.forEach((blog: any) => {
          blog.tags.forEach((tag: string) => {
            getTagName(tag);
          });
        });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData()
  }, [currentPage, NEWGLOBAL_VARIABLE])


  return (
    <>
      <Head>
        <title>Blog | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/blog" />
        <meta property="og:title" content="Blog  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <div className="blog-hero bg-one">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3">Blog</h1>
              <ul className="flex-wrap">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <CaretRight size={20} />
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding all-blogs">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-md-12 col-lg-8 mb-4 mb-md-0 all-blogs__card">
              {allBlogs === null ? <Loading /> :
                allBlogs.map((blog: any, i: number) => (
                  <Link key={i} href={`/post/${blog.slug}`}>
                    <div className="row all-blogs__card__single mb-4">
                      <div className="col-md-4 mb-3 mb-md-0">
                        <Image
                          className="img-fluid"
                          src={
                            blog.yoast_head_json.og_image ?
                              blog.yoast_head_json.og_image[0].url : logo
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
                          {/* <div className="d-flex d-grid gap-3">
                            <p>
                              {blog.tags?.map((tag: string, index: number) => {
                                return (
                                  <span className="mb-1 me-1" key={index}>
                                    {tags[tag]}
                                  </span>
                                );
                              })}
                            </p>
                          </div> */}
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

              <div className="all-blogs__pagination">
                <nav aria-label="Page navigation example">
                  <ul className="d-flex align-items-center gap-2">
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </button>
                    </li>
                    <li className={`page-item ${currentPage === 1 && 'bg-disable'}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">1</span>
                      </button>
                    </li>
                    <li className={`page-item ${currentPage === 2 && 'bg-disable'}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(2)}
                        disabled={currentPage === 2}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">2</span>
                      </button>
                    </li>
                    <li className={`page-item ${currentPage === 3 && 'bg-disable'}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(3)}
                        disabled={currentPage === 3}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">3</span>
                      </button>
                    </li>
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === 12}
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
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