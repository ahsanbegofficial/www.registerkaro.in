interface HeroProps {  cityName: string;}
export const TimeLine = ({ cityName }: HeroProps) => {
  return (
    <div className='m-auto w-80' id='Timeline'>
      <h3 className='main-para mb-0'>The partnership firm registration process takes approximately 10 days, subject to departmental approval and reverts from the respective department.</h3>
    </div>
  )
}
