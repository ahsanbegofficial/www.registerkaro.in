interface HeroProps {
  cityName: string;
}
export const WhatFarmerProducer = ({ cityName }: HeroProps) => {
  return (
    <div className='TimeRequired w-80 m-auto' id="What">
      <p className='main-para'>It’s a hybrid between Cooperative Societies & Private Limited Companies registered under the Companies Act. They have democratic governance & each member has equal voting rights irrespective of the no. of shares held.</p>
   </div>
  )
}