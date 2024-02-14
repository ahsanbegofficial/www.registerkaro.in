import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../assets/data/blog.json";
import Link from "next/link";
import { CaretRight, EnvelopeOpen, LinkedinLogo, Printer, TelegramLogo, TwitterLogo, WhatsappLogo } from "phosphor-react";
import Image from "next/image";
import SinglePageSidebar from "../../components/child_components/SinglePageSidebar";
import logo from '../../assets/images/fullLogo.jpg'
import WebPage from "../../components/blogSchema/WebPage";
import FAQPage from "../../components/blogSchema/FAQPage";
import { CustomDefault } from "../../components/child_components/CustomDefault";
import axios from "axios";

interface BlogData {
  title: {
    rendered: string;
  };
  yoast_head_json: {
    author: string;
  };
  date: string;
  content: {
    rendered: string;
  };
  slug: string
}

interface BlogListData {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  date: string;
  createBy: string;
}

const NEWGLOBAL_VARIABLE = process.env.NEWGLOBAL_VARIABLE

export const getStaticPaths = async () => {
  const res = await fetch(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/posts`)
  const result = await res.json()
  const urls = result.map((e: any) => ({
    params: { blog: e.slug.toString() }
  }))

  return {
    paths: urls,
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const res = await fetch(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/posts?slug=${params.blog}`)
  const result = await res.json()
  if (!result || result.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      result: result
    },
    revalidate: 10
  }
}

export default function Home({ result }: { result: any }) {
  let blog = result[0]
  console.log(blog);
  const date = blog?.date
  const modified = blog?.modified
  const description = blog?.yoast_head_json?.description
  const Id = blog?.id
  const router = useRouter();

  const { blogv3 } = data;
  const { button, blogList } = blogv3;
  let hf = `https://www.registerkaro.in/post/${blog?.slug}`
  let tl = blog?.slug?.replace(/-/g, " ").replace(/\b\w/g, (char: any) => char.toUpperCase())

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://www.registerkaro.in/wordpress/wp-json/jwt-auth/v1/token', {
        username: 'wordpressuser',
        password: 'Slpl11@@@',
      });
      console.log('res', response);
      // const token = response.data.token;
      // localStorage.setItem('jwtToken', token);
      // await submitComment();
    } catch (error) {
      alert('token is not storing')
      console.log('e', error);
    }
  };

  const submitComment = async () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        const response = await axios.post('https://www.registerkaro.in/wordpress/wp-json/wp/v2/comments', {
          post: Id,
          author_name: name,
          author_email: email,
          content: content,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 201) {
          alert('Comment posted successfully');
          setName('')
          setEmail('')
          setSubject('')
          setContent('')
        } else {
          alert('Failed to post comment');
        }
      } catch (err) {
        alert('Something went wrong');
        console.error(err);
      }
    }
    else {
      alert('You need to log in to comment');
    }
  }

  if (blog === undefined) {
    return (
      <CustomDefault />
    )
  }

  return (
    <div>
      <Head>
        <title>{blog?.slug?.replace(/-/g, " ").replace(/\b\w/g, (char: any) => char.toUpperCase())} | RegisterKaro</title>
        <meta name="description" content={tl} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={hf} />
        <meta property="og:title" content={tl} />
        <meta property="og:description" content={tl} />
        <meta property="og:url" content={hf} />
      </Head>
      <WebPage hf={hf} tl={tl} date={date} modified={modified} description={description} />
      <FAQPage />
      {
        blog && (
          <section className="section-padding blog-details">
            <div className="container">
              <div className="row gx-xl-5">
                <div className="col-md-12 col-lg-8 mb-4 mb-md-0 blog-details__content">
                  <div className="post__top">
                    <div className="container">
                      <div className="row">
                        <div className="blog-title">
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
                            <li className="text-capitalize">
                              <Link href={`/blog/${blog?.slug}`}>
                                {blog?.slug?.replace(/-/g, " ")}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-4">{blog.title.rendered}</h1>
                    {
                      blog.yoast_head_json.og_image && <Image
                        src={logo}
                        height={400}
                        className="blog-post-img"
                        alt="feature image"
                      />
                    }
                    <div className="post__top__writer">
                      <div>
                        <h5>{blog.yoast_head_json.author}</h5>
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
                  <div className="post__main">
                    <div className="post__main__share" dangerouslySetInnerHTML={{ __html: blog.content.rendered }}></div>
                    {/* <div className="my-4 d-flex d-grid gap-3">
                    <a
                      href={`https://api.whatsapp.com/send?text=${blog.title.rendered}+${encodeURI(window.location.href)}`}
                      target="__blank"
                      rel="noreferrer noopener"
                    >
                      <WhatsappLogo size={38} color="#57e389" weight="fill" />
                    </a>
                    <a
                      href={`mailto:?subject=${blog.title.rendered}&body=${encodeURI(window.location.href)}`}
                      target="__blank"
                      rel="noreferrer noopener"
                    >
                      <EnvelopeOpen size={38} color="#e01b24" weight="fill" />
                    </a>
                    <a
                      href={`https://t.me/share/url?url=${encodeURI(
                        window.location.href
                      )}&text=${blog.title.rendered}`}
                      target="__blank"
                      rel="noreferrer noopener"
                    >
                      <TelegramLogo size={38} color="#1c71d8" weight="fill" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${blog.title.rendered}&url=${encodeURI(window.location.href)}`}
                      target="__blank"
                      rel="noreferrer noopener"
                    >
                      <TwitterLogo size={38} color="#3584e4" weight="fill" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(
                        window.location.href
                      )}&title=${blog.title.rendered}`}
                      target="__blank"
                      rel="noreferrer noopener"
                    >
                      <LinkedinLogo size={38} color="#1a5fb4" weight="fill" />
                    </a>
                    <a
                      href={`https://www.printfriendly.com/print?url=${encodeURI(
                        window.location.href
                      )}`}
                      target="__blank"
                      rel="noreferrer noopener"
                    >
                      <Printer size={38} color="#865e3c" weight="fill" />
                    </a>
                  </div> */}
                  </div>
                  <div className="post__bottom">
                    <div className="post__bottom__comment-box">
                      <h3>
                        <span>Comment</span>
                      </h3>
                      <hr />
                      <div className="post__bottom__comment-box__form">
                        <div className="flex-input">
                          <input type="text" placeholder="john doe" onChange={(e) => setName(e.target.value)} />
                          <input type="email" placeholder="johndoe@email.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <input type="text" placeholder="your subject here" onChange={(e) => setSubject(e.target.value)} />
                        <textarea
                          placeholder="content is very informative"
                          cols={30}
                          rows={5}
                          onChange={(e) => setContent(e.target.value)}
                        />
                        <span className="btn__primary">
                        {/* <span className="btn__primary" onClick={handleSubmit}> */}
                          <span>Comment</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <aside className="col-md-12 col-lg-4 mb-4 mb-md-0 sidebar">
                  <SinglePageSidebar />
                </aside>
              </div>
              <div className="related-blogs">
                <h3 className="mb-4">Related Blog</h3>
                <div className="row gx-xl-5 justify-content-center">
                  {blogList.map((data, i) => (
                    <div key={data.id} className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                      <div className="blog3__card translateEffect1 h-100">
                        <Image className="img-fluid" src={logo} alt="title" height={80} width={100} />
                        <p className="subtitle">{data.subtitle}</p>
                        <h5>{data.title}</h5>
                        <hr />
                        <div className="d-flex align-items-center justify-content-around postman">
                          <div className="d-flex align-items-center me-4">
                            <i className="icofont-calendar" />
                            <p className="ms-2">{data.date}</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <i className="icofont-business-man" />
                            <p className="ms-2">{data.createBy}</p>
                          </div>
                        </div>
                        <Link href="/blog" className="btn__primary">
                          <span>{button}</span>
                          <i className="icofont-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      }
    </div >
  );
}
