import Head from "next/head";
import React, { FormEvent, useCallback, useState } from "react";
import axios from "axios";
import { Congratulation } from "../components/child_components/Congratulation";

interface AlertDescription {
  alertType: string;
  alertDescription: string;
}

interface TradeMarkData {
  TradeMarkName: string;
  ApplicationNo: string;
  ProprietorName: string;
  ProprietorAddress: string;
  ApplicationStatus: string;
  Class: string;
}

interface ApiResponse {
  supportDataTrademark: TradeMarkData[][];
  errorTab: AlertDescription[];
  supportDataTab: { companyName: string }[];
}

const api = axios.create({
  baseURL: "/api",
});

export default function App() {
  const [name, setName] = useState<string>('')
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedComponent, setSelectedComponent] = useState<string>("NameSimilarityAlerts");

  const handleSubmit = useCallback((e: FormEvent) => {
    setLoading(true)
    e.preventDefault();

    const fetchData = async () => {
      try {
        const response = await api.post("/company-name-check", {
          formData: `formData=%7B%22formData%22%3A%7B%22companyType%22%3A%22%22%2C%22companyClass%22%3A%22%22%2C%22companyCategory%22%3A%22%22%2C%22companySubCategory%22%3A%22%22%2C%22proposedName1%22%3A%22${name}%22%2C%22NICCode1%22%3A%22%22%2C%22Description1%22%3A%22%22%2C%22formIntegrationId%22%3A%221%22%2C%22continueFlag%22%3A%22N%22%2C%22LLPIN%22%3A%22%22%2C%22NICCode2%22%3A%22%22%2C%22Description2%22%3A%22%22%2C%22NICCode3%22%3A%22%22%2C%22Description3%22%3A%22%22%2C%22proposedName2%22%3A%22%22%7D%2C%22formDescription%22%3A%22SPICE+PART+A%22%2C%22formName%22%3A%22Spice%2B+Part+A%22%2C%22formVersion%22%3A%221%22%2C%22userId%22%3A%22REGISTERKARO.INFO1%40GMAIL.COM%22%2C%22integrationId%22%3A%221%22%2C%22prefill%22%3A%22false%22%2C%22status%22%3A%22Draft%2FPending+Submission%22%2C%22operation%22%3A%22Save%22%2C%22referenceNumber%22%3A%22%22%2C%22srn%22%3A%22%22%2C%22formId%22%3A%22%22%2C%22Approvedname%22%3A%22%22%2C%22serveAction%22%3A%22autocheck%22%7D`
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [name]);

  const handleTableHeaderClick = useCallback((componentName: string) => {
    setSelectedComponent(componentName);
  }, []);

  return (
    <div className="companycheckMain NIC">
      <Head>
        <title>Company Name Check - Search For Your Company Name | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/company-name-check" />
        <meta property="og:title" content="Company Name Check - Search For Your Company Name | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <h1 className="title1 center bold">Company Name Check Tool</h1>
      <p className="center">Company Name is the most important step before the Incorporation. Have you ever thought about what it should be? Use our tool now to check if your Company Name is available.</p>
      <div className="companycheck">
        <form onSubmit={handleSubmit}>
          <div className="companycheckForm">
            <div>
              <div>
                <p>Proposed Company Name:</p>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit">Check availability</button>
          </div>
        </form>
        {
          loading == true ? (<div className="loading-parent"><div className="loading-circle"></div></div>
          ) :
            data !== null
              ? data?.supportDataTrademark.length > 0
                ? (
                  <div>
                    <div className="companycheckTable">
                      <p className="companycheckReason">Reasons why your company name is not available</p>
                      <div>
                        <div>
                          {
                            data?.errorTab
                              .filter((element) => element.alertType !== "Error")
                              .map((e, i) => {
                                if (!e.alertDescription) {
                                  return null
                                }
                                return (
                                  <ul key={i}>
                                    <li>{e.alertDescription}</li>
                                  </ul>
                                )
                              })
                          }
                        </div>
                      </div>
                    </div>
                    <div className="companycheckTable">
                      <div className="tableHead">
                        <div
                          className={`${selectedComponent === "NameSimilarityAlerts" ? "selectedHeader" : "unselectedHeader"
                            } leftDiv`}
                          onClick={() => handleTableHeaderClick("NameSimilarityAlerts")}
                        >
                          Name Similarity Alerts
                        </div>
                        <div
                          className={`${selectedComponent === "TrademarkSimilarityAlerts" ? "selectedHeader" : "unselectedHeader"
                            } rightDiv`}
                          onClick={() => handleTableHeaderClick("TrademarkSimilarityAlerts")}
                        >
                          Trademark Similarity Alerts
                        </div>
                      </div>
                      {selectedComponent === "NameSimilarityAlerts" && (
                        <p className="companyth">Name of the existing company/LLP with similar name</p>
                      )}
                      {selectedComponent === "NameSimilarityAlerts" &&
                        data?.supportDataTab.map((item: any, i) => (
                          <ul key={i}>
                            <li>{item[0]?.companyName}</li>
                          </ul>
                        ))}
                      <table className="trademarkTable">
                        <tbody>
                          {selectedComponent === "TrademarkSimilarityAlerts" && (
                            <tr>
                              <th className="wrap-bottom">Trademark Name</th>
                              <th className="wrap-bottom">Application No.</th>
                              <th className="wrap-bottom">Proprietor Name</th>
                              <th className="wrap-bottom">Proprietor Address</th>
                              <th className="wrap-bottom">Application Status</th>
                              <th className="wrap-bottom">Trademark Class</th>
                            </tr>
                          )}
                          {selectedComponent === "TrademarkSimilarityAlerts" &&
                            data?.supportDataTrademark[0]?.map((e, i) => (
                              <tr key={i}>
                                <td className="wrap-bottom">{e.TradeMarkName}</td>
                                <td className="wrap-bottom">{e.ApplicationNo}</td>
                                <td className="wrap-bottom">{e.ProprietorName}</td>
                                <td className="wrap-bottom">{e.ProprietorAddress}</td>
                                <td className="wrap-bottom">{e.ApplicationStatus}</td>
                                <td className="wrap-bottom">{e.Class}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
                : (
                  <Congratulation />
                )
              : null
        }
      </div>
      <h2 className="heading2 bold">What is Company Name Check?</h2>
      <p>When starting a new Company in India, the first step you need to do before Company Incorporation is conduct a Company Name Search to make sure that the Company name you choose is available. Choosing a right Company Name is a vital part of the Company Incorporation process for many businesses in India. Checking the availability of a Company Name before starting the process lessens the chances that the formation of a Company will be rejected by the Authorities. The Ministry of Corporate Affairs has introduced a regulatory framework that you should consider when choosing your Company Name. Your application for Company Name may be rejected if your Company Name doesn't comply with the set rules of the MCA.</p>
      <h2 className="heading2 bold">Why is it necessary to conduct a Company Name Search?</h2>
      <p>When you are commencing your business or a company in India, it is important to ensure that the Company name you choose is available and not already in use by another registered company or business. A Company Name Search in India can help you to find out whether the name you have selected is available or not. Following are some reasons why you need to conduct a Company Name Search in India:</p>
      <ol className="numbered-list">
        <li>
          <p>It helps you avoid any legal problems that could arise if you use a name that is already in use;</p>
        </li>
        <li>
          <p>It safeguards your brand identity by ensuring that no one else is using a similar or identical name;</p>
        </li>
        <li>
          <p>Company Name Search can help you identify potential customers & partners;</p>
        </li>
        <li>
          <p>It also can help you to create a unique & unforgettable brand for your business.</p>
        </li>
      </ol>
      <h2 className="heading2 bold">Important Guidelines to know while choosing your Company Name</h2>
      <p>The following are some of the vital guidelines to know while choosing your Company Name:</p>
      <ol className="numbered-list">
        <li>
          <p><span className="bold">Similar or Identical Name: </span>The Company Name cannot be similar to an existing or already registered Company, LLP, or Trademark. Joining/separating words, different tenses, spacing, plural versions, the addition of the place, titles, and other small differences wouldn't make the Company Name unique & different.</p>
        </li>
        <li>
          <p><span className="bold">Government Relevance: </span>The name cannot have words such as Hindustan, Central, National, Government, Union, or Ministry in it unless prior approval from the Government is obtained.</p>
        </li>
        <li>
          <p><span className="bold">Trademark: </span>The Name of the Company cannot infringe on a registered Trademark or an application for Trademark Registration.</p>
        </li>
        <li>
          <p><span className="bold">Financial Terms: </span>The name of the Company shouldn’t include any financial terms like insurance, bank, stock exchange, venture capital, asset management, mutual funds, or other financial activities unless a declaration is received from IRDAI, RBI, SEBI, etc.</p>
        </li>
        <li>
          <p><span className="bold">Constitution: </span>There cannot be words that signify a business-type constitution or legal individual or any connotation. For example, words like Trust, Proprietor, HUF, Co-Operative, Sehkari, etc., cannot be a part of a Company Name.</p>
        </li>
        <li>
          <p><span className="bold">Check for Plurals: </span>If the Company name chosen is merely the plural version of an existing Company name, then the name is not considered unique or distinct. For example, if the Company name is Rixon Game Private Limited, then the name Rixon Games Private Limited is not unique & will stand rejected.</p>
        </li>
        <li>
          <p><span className="bold">Spaces between letter case, words, punctuations, etc., </span>Making changes to the letter cases or the spacing between the words or to the punctuation marks in an already existing name doesn’t render the name unique. If the Company’s name is Rixon Game Private Limited, then the name Rixon Game Pvt Ltd or RIXON GAME Private Limited is not unique & cannot be registered.</p>
        </li>
        <li>
          <p><span className="bold">Disjoining or Combining the words: </span>Arriving at a Company Name by detaching or joining the words of an existing Company Name will not be considered a new or unique name. If the Company’s Name is Rixon Game Private Limited then the name RiXon Game Private Limited or RixonGame Private Limited will not be approved.</p>
        </li>
        <li>
          <p><span className="bold">Reversing the Combination of Words: </span>Reversing or rearranging the order of words in an existing title cannot be considered as uniqueness. For example, if the name is AB and XY Private Limited changing it to XY and AB Private Limited is not considered to be unique.</p>
        </li>
      </ol>
      <h2 className="heading2 bold">Reasons behind Company Name Rejection</h2>
      <p>As per the MCA guidelines, a Company Name also has a higher chance of rejection if the Company Name features any of the mistakes mentioned below:</p>
      <ol className="numbered-list">
        <li>
          <p>The name of the Company is offensive in any language;</p>
        </li>
        <li>
          <p>The Company name contains commas or full stops;</p>
        </li>
        <li>
          <p>The name is falsely indicative of the business activities;</p>
        </li>
        <li>
          <p>The names are abbreviations (eg. PMT, SDR);</p>
        </li>
        <li>
          <p>The name is a close resemblance to that of existing companies.</p>
        </li>
      </ol>
      <h2 className="heading2 bold">Is the Company Name Check tool easy-to-use?</h2>
      <p>Our Company Name Check tool is very easy to use. All you have to do is simply enter the Company name and search. Then, if there is an existing name (same or resembling), it will appear in the search. Otherwise, this tool will tell you that an existing name (same or resembling), will appear in the search. Otherwise, the tool will tell you that your selected name can be used to name your Company.</p>
    </div>
  );
}