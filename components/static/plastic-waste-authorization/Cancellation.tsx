import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/plastic-waste-authorization/cancellation.svg";
interface HeroProps {
    cityName: string;
}
export const Cancellation = ({ cityName }: HeroProps)  => {
  return (
    <div id="Cancellation">
      <p className="main-para">
        The SPCB or UTPCC can cancel, suspend, or revoke the plastic waste
        authorization if the authorization holder:
      </p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Cancellation, suspension, or revocation"
            className="Cancellation-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p><strong>1 : </strong>Fails to comply with the conditions and terms of the authorization</p>
          <p><strong>2 : </strong>Fails to submit the annual returns or the renewal application</p>
          <p><strong>3 : </strong>Provides false or misleading information or documents</p>
          <p><strong>4 : </strong>Causes or is likely to cause environmental damage or harm to human health</p>
          <p><strong>5 : </strong>Violates any provision of the Plastic Waste Management Rules, 2016 and 2018 or any other applicable law</p>
        </div>
      
      </div>

      <p className="main-para">
        The SPCB or UTPCC will issue a notice to the authorization holder,
        giving them an opportunity to show cause why the authorization should
        not be cancelled, suspended, or revoked. The SPCB or UTPCC will consider
        the response of the authorization holder and decide whether to cancel,
        suspend, or revoke the authorization or not. The SPCB or UTPCC will
        communicate the decision to the authorization holder and the CPCB within
        15 days of the decision.
      </p>
    </div>
  );
};
