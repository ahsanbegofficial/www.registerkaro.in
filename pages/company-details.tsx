import { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import Head from "next/head";
import search from '../assets/images/search.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Director {
  DIN: string;
  nameFirst: string;
  nameLast: string;
}

interface Company {
  ID: number;
  CIN: string;
  CompanyName: string;
  ROCCode: string;
  RegistrationNumber: string;
  CompanyCategory: string;
  CompanySubCategory: string;
  ClassOfCompany: string;
  AuthorisedCapital: string;
  PaidupCapital: string;
  NumberofMembers: string;
  DateofIncorporation: string;
  RegisteredAddress: string;
  OtherAdr: string;
  EmailID: string;
  WhetherListedornot: string;
  Suspendedatstockexchange: string;
  DataoflastAGM: string;
  DateofBalanceSheet: string;
  CompanyStatus: string;
  Industry: string;
  IncorporationDateForm: string;
  directors: Director[];
}

const CompanyDetails = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [data, setData] = useState<Company | null>(null);
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        if (name.length > 0) {
          const res = await axios(`/api/company-details?query=${name}`);
          setSuggestions(res.data);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSuggestions();
  }, [name]);

  const handleSuggestionClick = async (selectedCompanyName: string) => {
    setLoading(true);
    try {
      const res = await axios(`/api/company-details?name=${selectedCompanyName}`);
      setData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDirectorClick = useCallback((director: Director) => {
    setSelectedDirector(director);
    try {
      const directorDetails = encodeURIComponent(JSON.stringify(director));
      router.push(`/director-details?director=${directorDetails}`);
    } catch (error) {
      console.error(error);
    }
  },[router])

  return (
    <div className="companycheckMain">
      <Head>
        <title>Search Company Details | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/company-details" />
        <meta property="og:title" content="Search Company Details | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <h1 className="companycheckTitle">Search Company Details</h1>
      <div className='main'>
        <div className='mainDiv flex'>
          <div className='name'>Company Name:</div>
          <div className='search'>
            <div className='list'>
              <Image src={search} alt='search' height={21} width={21} />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Search for Company Name'
                required
              />
            </div>
            <div className='suggestions'>
              {suggestions.length > 0 &&
                suggestions.map((e, i) => (
                  <div className='hover' key={i} onClick={() => handleSuggestionClick(e)}>{e}</div>
                )
                )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {
          loading == true ? (<div className="loading-parent"><div className="loading-circle"></div></div>
          ) : data &&
          <div className="companycheckTable">
            <table className="trademarkTable">
              <tbody>
                <tr>
                  <th className="wrap-bottom">ID</th>
                  <th className="wrap-bottom">CIN</th>
                  <th className="wrap-bottom">CompanyName</th>
                  <th className="wrap-bottom">ROCCode</th>
                  <th className="wrap-bottom">RegistrationNumber</th>
                  <th className="wrap-bottom">CompanyCategory</th>
                  <th className="wrap-bottom">CompanySubCategory</th>
                  <th className="wrap-bottom">ClassOfCompany</th>
                  <th className="wrap-bottom">AuthorisedCapital</th>
                  <th className="wrap-bottom">PaidupCapital</th>
                  <th className="wrap-bottom">NumberofMembers</th>
                  <th className="wrap-bottom">DateofIncorporation</th>
                  <th className="wrap-bottom">RegisteredAddress</th>
                  <th className="wrap-bottom">OtherAdr</th>
                  <th className="wrap-bottom">EmailID</th>
                  <th className="wrap-bottom">WhetherListedornot</th>
                  <th className="wrap-bottom">Suspendedatstockexchange</th>
                  <th className="wrap-bottom">DataoflastAGM</th>
                  <th className="wrap-bottom">DateofBalanceSheet</th>
                  <th className="wrap-bottom">CompanyStatus</th>
                  <th className="wrap-bottom">Industry</th>
                  <th className="wrap-bottom">IncorporationDateForm</th>
                </tr>
                <tr>
                  <td className="wrap-bottom">{data.ID}</td>
                  <td className="wrap-bottom">{data.CIN}</td>
                  <td className="wrap-bottom">{data.CompanyName}</td>
                  <td className="wrap-bottom">{data.ROCCode}</td>
                  <td className="wrap-bottom">{data.RegistrationNumber}</td>
                  <td className="wrap-bottom">{data.CompanyCategory}</td>
                  <td className="wrap-bottom">{data.CompanySubCategory}</td>
                  <td className="wrap-bottom">{data.ClassOfCompany}</td>
                  <td className="wrap-bottom">{data.AuthorisedCapital}</td>
                  <td className="wrap-bottom">{data.PaidupCapital}</td>
                  <td className="wrap-bottom">{data.NumberofMembers}</td>
                  <td className="wrap-bottom">{data.DateofIncorporation}</td>
                  <td className="wrap-bottom">{data.RegisteredAddress}</td>
                  <td className="wrap-bottom">{data.OtherAdr}</td>
                  <td className="wrap-bottom">{data.EmailID}</td>
                  <td className="wrap-bottom">{data.WhetherListedornot}</td>
                  <td className="wrap-bottom">{data.Suspendedatstockexchange}</td>
                  <td className="wrap-bottom">{data.DataoflastAGM}</td>
                  <td className="wrap-bottom">{data.DateofBalanceSheet}</td>
                  <td className="wrap-bottom">{data.CompanyStatus}</td>
                  <td className="wrap-bottom">{data.Industry}</td>
                  <td className="wrap-bottom">{data.IncorporationDateForm}</td>
                </tr>
              </tbody>
            </table>
            {
              data.directors.length > 0 && (
                <div className="directors">
                  <h4>Directors</h4>
                  <ul>
                    {
                      data.directors.map((e, i) => (
                        <li key={i} onClick={() => handleDirectorClick(e)} className='hover'>{(e.nameFirst ? e.nameFirst : '') + ' ' + (e.nameLast ? e.nameLast : '')}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
        }
      </div>
    </div>
  );
};

export default CompanyDetails;