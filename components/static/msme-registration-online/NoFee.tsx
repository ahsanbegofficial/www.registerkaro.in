import React from "react";
interface HeroProps { cityName: string; }
export const NoFee = ({ cityName }: HeroProps) => {
  return (
    <div>
      <p className="main-para my-2" id="NoFee">
      It is vital to understand that there is no fee to register your company as an MSME. Be cautious of services that claim to facilitate registration for a cost.
      </p>
    </div>
  );
};
