import React, { useState, useEffect } from "react";
import axios from "axios";
import Author from "../../../components/child_components/Author";
import Link from "next/link";
import { CaretRight } from "phosphor-react";
import Head from "next/head";

const BlogAuthor = () => {
  const NEWGLOBAL_VARIABLE = process.env.NEWGLOBAL_VARIABLE

  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/users?per_page=100`
      )
      .then((res) => {
        setAllBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, [NEWGLOBAL_VARIABLE]);

  return (
    <>
      <Head>
        <title>Authors | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/authors" />
        <meta property="og:title" content="Authors  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <div className="blog-hero bg-invert">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3 text-invert">Our Authors</h1>
              <ul className="flex-wrap">
                <li>
                  <Link href="/" className="text-invert">
                    Home
                  </Link>
                </li>
                <li>
                  <CaretRight size={20} />
                </li>
                <li>
                  <Link href="/blog" className="text-invert">
                    Blog
                  </Link>
                </li>
                <li>
                  <CaretRight size={20} />
                </li>
                <Link href="/blog/authors" className="text-invert">
                  Authors
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <Author authors={allBlogs} />
      </section>
    </>
  );
};

export default BlogAuthor;
