import axios, { AxiosResponse } from "axios";
import parse from "html-react-parser";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import SinglePageSidebar from "../../../components/child_components/SinglePageSidebar";

interface Author {
  id: number;
  slug: string;
}

interface TagNames {
  [key: string]: string;
}

const AuthorDetails = () => {
  const NEWGLOBAL_VARIABLE = process.env.NEWGLOBAL_VARIABLE

  const router = useRouter();
  const author = router.query.author as string;
  const [authorDetails, setAuthorDetails] = useState<any>(null);
  const [authorBlogs, setAuthorBlogs] = useState<any>(null);
  const [tags, setTags] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (author) {
          const usersResponse: AxiosResponse<Author[]> = await axios.get(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/users`);
          const authorData: Author | undefined = usersResponse.data.find(
            (user) => user.slug.toLowerCase() === author.toLowerCase()
          );

          if (authorData) {
            const authorBlogsResponse: AxiosResponse<any[]> = await axios.get(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/posts?author=${authorData.id}`)
            setAuthorDetails(authorData);

            const tagNames: TagNames = {};
            const tagsResponse = await Promise.all(
              authorBlogsResponse.data.map(async (blog: any) => {
                return Promise.all(
                  blog.tags.map(async (tag: string) => {
                    const tagResponse: AxiosResponse = await axios.get(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/tags/${tag}`)
                    tagNames[tag] = tagResponse.data.name;
                  })
                );
              })
            );

            setTags(tagNames);
            setAuthorBlogs(authorBlogsResponse.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [author, NEWGLOBAL_VARIABLE]);

  let hf = `https://www.registerkaro.in/categories/${author}`

  return (
    <>
      <Head>
        <title>Author | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={hf} />
        <meta property="og:title" content="Author | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <div>
        <div className="blog-hero bg-one">
          <div className="container">
            <div className="row">
              <div className="blog-title">
                <h1 className="display-3">Our Authors</h1>
                <ul className="flex-wrap">
                  <li><Link href="/">Home</Link></li>
                  <li><CaretRight size={20} /></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><CaretRight size={20} /></li>
                  <li><Link href="/blog/authors">Authors</Link></li>
                  <li><CaretRight size={20} /></li>
                  <li>{authorDetails && authorDetails.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="section-padding all-blogs">
          <div className="container">
            <div className=" row gx-xl-5">
              <div className="col-md-12 col-lg-8 mb-4 mb-md-0 all-blogs__card">
                {authorDetails && (
                  <div className="row all-blogs__card__single mb-4">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <Image className="img-fluid" src={authorDetails.avatar_urls[96]} alt="thumbnail" height={103} width={103} />
                    </div>
                    <div className="col-md-8">
                      <h3 className="my-3">{authorDetails.name}</h3>
                      <div className="all-blogs__card__single__writer">
                        <div>
                          <h5 className="mb-1">{authorDetails.yoast_head_json.og_title.split(",")[1]}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <h3 className="my-3 mx-4">AUTHOR{`'`}S BLOG</h3>
                {authorBlogs &&
                  authorBlogs.map((blog: any, i: number) => (
                    <Link key={i} href={`/blog/${blog.slug}`}>
                      <div className="row all-blogs__card__single mb-4">
                        <div className="col-md-4 mb-3 mb-md-0">
                          <Image className="img-fluid" src={blog.yoast_head_json.og_image && blog.yoast_head_json.og_image[0].url} alt="thumbnail" height={925} width={520} />
                        </div>
                        <div className="col-md-8">
                          <h3 className="my-3">{blog.title.rendered}</h3>
                          <div>{parse(`${blog.excerpt.rendered}`)}</div>
                          <div className="all-blogs__card__single__writer">
                            <div className="d-flex d-grid gap-3">
                              <p>
                                {blog.tags?.map((tag: any, i: number) => {
                                  return (
                                    <span className="mb-1 me-1" key={i}>#{tags[tag]}</span>
                                  )
                                })}
                              </p>
                            </div>
                            <div>
                              <h5 className="mb-1">{blog.yoast_head_json.author}</h5>
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
              </div>
              <aside className="col-md-12 col-lg-4 mb-4 mb-md-0 sidebar">
                <SinglePageSidebar />
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuthorDetails
