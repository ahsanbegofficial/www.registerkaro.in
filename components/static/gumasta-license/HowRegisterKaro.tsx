import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/gumasta-license/how_does_registerKaro_help_in_the_processs.svg";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";

export const HowRegisterKaro = () => {
  return (
    <div id="HowRegisterKaro">
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column">
      <div className="flex-5 justify-content-center" >
          <Image
            alt="How does RegisterKaro help in the process? RegisterKaro has earned the trust of more than 10000+ clients who
            have availed of our Gumasta License Registration Services. Their
            trust in us from a term in continuity is proof of our services
            backed by quality and assurance."
            className="HowRegisterKaro-img mt-4 w-100"
            height={502}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <h3>Pool of Experts</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              RegisterKaro holds a large pool of Experts from all over the world
              specializing in License registration. Our team of experts makes
              sure that your work is taken care of in the most effective manner
              possible.
            </li>
          </ul>
          <h3>Cost-effective</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              RegisterKaro License registration services are of premium quality
              at the most efficient rate, which suits the client’s pocket,
              making sure that quality service is not the only thing the client
              gains on our platform.
            </li>
          </ul>
          <h3>Client-oriented approach</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              Our team of experts is well trained and equipped with a
              client-oriented approach, keeping in mind that the process must be
              client-centric, focusing on meeting all the requirements of their
              business and, therefore, satisfying their needs.
            </li>
          </ul>
          <h3>Process Alteration</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              For the fact that we focus on a client-centric approach, we keep
              our process structurization open for the client to alter it as per
              their need, requirements, and vision. For us, obtaining the best
              results is the focus, along with the Client satisfaction.
            </li>
          </ul>
          <h3>Trusted partner of 10000+ Clients</h3>
          <ul className="tick list-unstyled">
            <li>
              <Image
                alt="ulArrow"
                className="ulArrow-img"
                loading="lazy"
                height={30}
                width={30}
                src={ulArrow}
              />
              RegisterKaro has earned the trust of more than 10000+ clients who
              have availed of our Gumasta License Registration Services. Their
              trust in us from a term in continuity is proof of our services
              backed by quality and assurance.
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};
