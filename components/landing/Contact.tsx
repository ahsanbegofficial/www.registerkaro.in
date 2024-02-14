import React from "react";
import data from "../../assets/data/contact.json";
import SectionTitle from "../child_components/SectionTitle";
import { MapPin, Phone, Clock, EnvelopeOpen } from "phosphor-react";
import ContactForm from "../child_components/ContactForm";

interface ContactProps {
  isBg: string;
}

interface ContactInformation {
  title: string;
  info: {
    one: string;
    two: string;
  };
}

interface ContactData {
  contact: {
    title: string;
    subtitle: string;
    contactInfo: ContactInformation[];
  };
}

const Contact: React.FC<ContactProps> = ({ isBg }) => {
  const { contact } = data as ContactData;
  const { title, subtitle, contactInfo } = contact;
  return (
    <section
      id="contact"
      className={`contact section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <SectionTitle title={title} subtitle={subtitle} direction="center" />
        <div className="row gx-xl-5">
          <div className="col-xl-10 mx-auto contact__wrapper">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact__address">
                  {contactInfo.map((information, i) => (
                    <div key={i} className="contact__address--single">
                      <div className="contact__address--single--icon mt-2">
                        {i === 0 ? (
                          <MapPin size={24} color="#ffa229" weight="bold" />
                        ) : i === 1 ? (
                          <Phone size={24} color="#ffa229" weight="bold" />
                        ) : i === 2 ? (
                          <Clock size={24} color="#ffa229" weight="bold" />
                        ) : i === 3 ? (
                          <EnvelopeOpen
                            size={24}
                            color="#ffa229"
                            weight="bold"
                          />
                        ) : null}
                      </div>
                      <div className="contact__address--single--content">
                        <h4>{information.title}</h4>
                        <p>
                          {information.info.one} <br /> {information.info.two}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;