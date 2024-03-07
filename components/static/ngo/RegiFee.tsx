interface HeroProps {cityName: string;}
export const RegiFee = ({ cityName }: HeroProps)  => {
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='RegiFee'>
       <p className='main-para'>The registration fee varies based on the country, type of NGO, and governing body requirements. Additional expenses may include documentation, legal compliance, and regulatory requirements.</p>
    </div>
  )
}