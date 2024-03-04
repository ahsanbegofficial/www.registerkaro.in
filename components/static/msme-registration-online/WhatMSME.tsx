import React from "react";
interface HeroProps { cityName: string; }
export const WhatMSME = ({ cityName }: HeroProps) => {
  return (
    <div>
      <p className="main-para my-2" id="WhatMSME">
      Let us first define MSMEs. Micro, Small, and Medium-Sized Enterprises (MSMEs) comprise a diverse array of businesses concerning capital and revenue. MSMEs may work in services, manufacturing, or both. These businesses are essential to the Indian economy since they create employment and encourage entrepreneurship.
      </p>
    </div>
  );
};
