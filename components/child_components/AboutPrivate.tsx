import React, { FC } from "react";
import SectionTitle from "./SectionTitle";

interface AboutPrivateProps {
  isBg: string;
  aboutData: {
    title: string;
    subtitle: string;
    description: string;
    itemsIcon: string;
    items: { title: string; desc: string }[];
  };
}

const AboutPrivate: FC<AboutPrivateProps> = ({ isBg, aboutData }) => {
  const { title, subtitle, description, itemsIcon, items } = aboutData;
  return (
    <section
      id="about"
      className={`about2 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <SectionTitle
              subtitle={subtitle}
              title={title}
              description={description}
            />

            <div className="about2__items">
              {items.map((data, i) => (
                <div key={i} className="about2__items--single">
                  <div className="about2__items--single--icon">
                    <i className={itemsIcon} />
                  </div>
                  <div className="about2__items--text">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPrivate;