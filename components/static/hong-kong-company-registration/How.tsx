import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hong-kong-company-registration/how_does.svg";

export const How = () => {
  return (
    <div id="How">
      <p className="main-para">
        RegisterKaro has been a one-stop solution for registering businesses in
        various countries for the varied ranges of benefits such as:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-5">
          <p>
            <strong>Pool of Experts : </strong>
            RegisterKaro holds a large pool of Experts from all over the world
            specializing in registration services in different countries. Our
            team of experts makes sure that your work is taken care of in the
            most effective manner possible.
          </p>

          <p>
            <strong>Cost-effective : </strong>
            RegisterKaro business registration services are of premium quality
            at the most efficient rate, which suits the client's pocket, making
            sure that quality service is not the only thing the client gains on
            our platform.
          </p>

          <p>
            <strong>Client-oriented approach : </strong>
            Our team of experts is well-trained and equipped with a
            client-oriented approach, keeping in mind that the process must be
            client-centric, focusing on meeting all the requirements of their
            business and, therefore, satisfying their needs.
          </p>

          <p>
            <strong>Process Alteration : </strong>
            For the fact that we focus on a Client-centric approach, we keep our
            process structurization open for the client to alter it as per their
            need, requirements, and vision. For us, obtaining the best results
            is the focus, along with the Client satisfaction.
          </p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="How does Register Karo help?"
            className="How-img w-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
