import Link from "next/link";
import { FC, useState } from 'react';

interface RegistrationLinksProps {
  formattedQuery: string;
  city: string[]
  state: string[]
  Query: string
}

function formatString(input: string) {
  let words = input.split('-')
  let formattedString = words.map((word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
  return formattedString;
}

export const RegistrationLinks: FC<RegistrationLinksProps> = ({ formattedQuery, state, city, Query }) => {
  const [activeState, setActiveState] = useState(false)
  const [activeCity, setActiveCity] = useState(false)

  const displayedStates = activeState ? state : state.slice(0, 10);
  const displayedCities = activeCity ? city : city.slice(0, 10);
  return (
    <div className="registration-links">
      <h3>{formatString(Query)} in State</h3>
      <div className="links">
        {
          displayedStates?.map((state: string, i: number) => <div key={i} className="main"><div><div className="arrow right"></div></div><div><Link href={`/${Query}/${Query}-in-${state}`}>{formatString(Query) + ' in ' + formatString(state)}</Link></div></div>)
        }
      </div>
      <div className="load-more-parent">
        <button className="load-more" onClick={() => { setActiveState(!activeState) }}>{activeState ? "LOAD LESS STATES" : "LOAD MORE STATES"}</button>
      </div>
      <h3>{formattedQuery} in City</h3>
      <div className="links">
        {
          displayedCities?.map((city: string, i: number) => <div key={i} className="main"><div><div className="arrow right"></div></div><div><Link href={`/${Query}/${Query}-in-${city}`}>{formatString(Query) + ' in ' + formatString(city)}</Link></div></div>)
        }
      </div>
      <div className="load-more-parent second-btn">
        <button className="load-more" onClick={() => { setActiveCity(!activeCity) }}>{activeCity ? "LOAD LESS CITIES" : "LOAD MORE CITIES"}</button>
      </div>
    </div>
  );
};