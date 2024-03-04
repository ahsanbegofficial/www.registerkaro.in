import React from "react";
interface HeroProps { cityName: string; }
export const UdyamDiffrence = ({ cityName }: HeroProps) => {
  return (
    <div>
      <p className="main-para my-2" id="UdyamDiffrence">
        For MSMEs to register on the government portal, the Indian government established the Udyam registration process as a simpler alternative to Udyog Aadhaar. The new approach allows new businesses to register quickly and easily, saving them time. Previously, registration needed a plethora of categories and documents, as well as considerable paperwork. The Udyam registration process, on the other hand, is simple, and anyone may register instantly through a single window without the need for extensive documentation.
      </p>
      <p className="main-para my-2" id="UdyamRegistration">
        Udyog Aadhar and Udyam Registration (UR), commonly known as Udyam registration online, are two programs created by the Indian government to encourage and promote the growth of MSMEs in { cityName }. Both programs attempt to achieve the same goal, but there are important variations that businesses should be aware of.
      </p>
      <p className="main-para my-2" id="UdyamRegistration">
        The procedure for obtaining the unique identification number differs significantly between Udyog Aadhar and Udyam. In contrast to Udyam Registration, which simply involves self-declaration by the business, Udyog Aadhar requires businesses to disclose an enormous amount of information to the government.
      </p>
      <p className="main-para my-2" id="UdyamRegistration">
        Another distinction between Udyog Aadhar and Udyam is that Udyam has a one-page format. In other words, there is only one stage in the Udyam registration process.
      </p>
    </div>
  );
};
