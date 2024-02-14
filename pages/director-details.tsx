import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

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
}

const DirectorDetails = () => {
    const [directorCompanies, setDirectorCompanies] = useState<Company[]>([]);
    const router = useRouter();

    const directorDetailsParam = router.query.director || "";
    let director: Director | null = null;
    if (directorDetailsParam !== '') {
        const directorParamString = Array.isArray(directorDetailsParam)
            ? directorDetailsParam.join(",")
            : directorDetailsParam;
        director = JSON.parse(decodeURIComponent(directorParamString));
    }

    useEffect(() => {
        const fetchDirectorCompanies = async () => {
            try {
                if (director !== null) {
                    const res = await axios(`/api/company-details?directorDIN=${director.DIN}`);
                    if (res.data) {
                        setDirectorCompanies(res.data);
                    } else {
                        console.log('Director details not available')
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchDirectorCompanies();
    }, [director])

    return (
        <div className="companycheckMain">
            <Head>
                <title>Search Director Details | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/director-details" />
                <meta property="og:title" content="Search Director Details | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>

            {director == null ? (
                <p>{'search company first'}</p>
            ) : (
                <div>
                    <h1 className="companycheckTitle">
                        {director?.nameFirst || ''} {director?.nameLast || ''}
                    </h1>
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
                                {
                                    directorCompanies.map((e, i) => (
                                        <tr key={i}>
                                            <td className="wrap-bottom">{e.ID}</td>
                                            <td className="wrap-bottom">{e.CIN}</td>
                                            <td className="wrap-bottom">{e.CompanyName}</td>
                                            <td className="wrap-bottom">{e.ROCCode}</td>
                                            <td className="wrap-bottom">{e.RegistrationNumber}</td>
                                            <td className="wrap-bottom">{e.CompanyCategory}</td>
                                            <td className="wrap-bottom">{e.CompanySubCategory}</td>
                                            <td className="wrap-bottom">{e.ClassOfCompany}</td>
                                            <td className="wrap-bottom">{e.AuthorisedCapital}</td>
                                            <td className="wrap-bottom">{e.PaidupCapital}</td>
                                            <td className="wrap-bottom">{e.NumberofMembers}</td>
                                            <td className="wrap-bottom">{e.DateofIncorporation}</td>
                                            <td className="wrap-bottom">{e.RegisteredAddress}</td>
                                            <td className="wrap-bottom">{e.OtherAdr}</td>
                                            <td className="wrap-bottom">{e.EmailID}</td>
                                            <td className="wrap-bottom">{e.WhetherListedornot}</td>
                                            <td className="wrap-bottom">{e.Suspendedatstockexchange}</td>
                                            <td className="wrap-bottom">{e.DataoflastAGM}</td>
                                            <td className="wrap-bottom">{e.DateofBalanceSheet}</td>
                                            <td className="wrap-bottom">{e.CompanyStatus}</td>
                                            <td className="wrap-bottom">{e.Industry}</td>
                                            <td className="wrap-bottom">{e.IncorporationDateForm}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DirectorDetails;