import React from "react";

const ContactForm = () => {
  return (
    <div className="contact__form">
      <form id="contact-form" method="post" action="">
        <div className="message col">
          <p className="email-loading alert alert-warning">
            &nbsp;&nbsp;&nbsp;Sending...
          </p>
          <p className="email-success alert alert-success">
            <i className="icon icon-icon-check-alt2" /> Your quote has
            successfully been sent.
          </p>
          <p className="email-failed alert alert-danger">
            <i className="icon icon-icon-close-alt2" /> Something went wrong!
          </p>
        </div>
        <div className="mb13">
          <label htmlFor="contact-name">Name</label>
          <input
            name="name"
            className="contact-name"
            id="contact-name"
            type="text"
            placeholder={"Your name"}
            required
          />
        </div>
        <div className="mb13">
          <label htmlFor="contact-email">Email</label>
          <input
            name="email"
            className="contact-email"
            id="contact-email"
            type="email"
            placeholder={"Your email"}
            required
          />
        </div>
        <div className="mb13">
          <label htmlFor="contact-subject">Subject</label>
          <input
            name="subject"
            className="contact-subject"
            id="contact-subject"
            type="text"
            placeholder={""}
            required
          />
        </div>
        <div className="mb30">
          <label htmlFor="contact-message">Message</label>
          <textarea
            name="message"
            className="contact-message"
            id="contact-message"
            placeholder={""}
            required
          />
        </div>
        <div className="btn__primary">
          <span>Send now</span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;