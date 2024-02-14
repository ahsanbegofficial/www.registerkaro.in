import React, { FC } from "react";
import {
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
} from "phosphor-react";
import { useRouter } from "next/router";
import Image from "next/image";

interface AuthorProps {
  authors: {
    slug: string;
    avatar_urls: string[];
    name: string;
    description?: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  }[];
}

const Author: FC<AuthorProps> = ({ authors }) => {
  const router = useRouter();
  return (
    <section id="team" className="team3 section-padding">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          {authors.map((author, i) => (
            <div
              key={i}
              className="col-sm-6 col-lg-3 mb-4 mb-lg-0 mt-3"
              onClick={() => router.push(`/blogs/authors/${author.slug}`)}
            >
              <div className="team3__wrapper__card translateEffect1">
                <Image
                  className="img-fluid rounded-circle mx-auto"
                  src={author.avatar_urls[96]}
                  alt={author.name}
                  height={150}
                  width={150}
                />
                <h4 className="mt-4 fs-4 text-capitalize">{author.name}</h4>
                <p>
                  {author.description ? author.description : "No description"}
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                  <ul className="social-icon p-0">
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={author.facebook}
                      >
                        <FacebookLogo size={24} weight="fill" color="#fff" />
                      </a>
                    </li>
                    <li>
                      <a rel="noreferrer" target="_blank" href={author.twitter}>
                        <TwitterLogo size={24} weight="fill" color="#fff" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={author.instagram}
                      >
                        <InstagramLogo size={24} weight="fill" color="#fff" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={author.linkedin}
                      >
                        <LinkedinLogo size={24} weight="fill" color="#fff" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Author;