import Head from "next/head";
import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import data from "../assets/data/niccode.json";

interface Item {
  "row-list": string | number;
  "row-list 2": string | number;
  "row-list 3": string;
}

export default function App() {
  const [name, setName] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Item[]>([]);

  const filterData = useCallback((searchTerm: string) => {
    if (!searchTerm) {
      setFilteredData([]);
      return;
    }

    const filtered = data.filter((item) => {
      const rowList1 = item["row-list"].toString();
      const rowList2 = item["row-list 2"].toString();

      return (
        rowList1.includes(searchTerm) ||
        rowList2.includes(searchTerm) ||
        item["row-list 3"].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }) as Item[];

    setFilteredData(filtered);
  }, []);

  const debouncedFilterData = debounce(filterData, 10)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setName(inputValue);
    debouncedFilterData(inputValue);
  };

  return (
    <div className="NIC">
      <Head>
        <title>NIC Code - Search For Your NIC Code | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/nic-code" />
        <meta property="og:title" content="NIC Code - Search For Your NIC Code | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <h1 className="title1 center bold">NIC Code Search - Simplify </h1>
      <h2 className="title2 center bold">Your Business Journey!</h2>
      <p className="center">Our NIC Code Search tool offers a hassle-free way to find NIC codes. Just enter your service name, and you'll instantly access the NIC Code for the respective service, including class, subclass, and description. Simplify your search process now!</p>
      <div className="form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Search here..."
        />
        {filteredData.length > 0 && (
          <div className="NICTable">
            <table>
              <thead>
                <tr>
                  <th>CLASS</th>
                  <th>SUBCLASS</th>
                  <th>DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item["row-list"]}</td>
                    <td>{item["row-list 2"]}</td>
                    <td>{item["row-list 3"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <h2 className="heading2 bold">What is NIC Code? - A Complete Analysis</h2>
      <p><span className="bold italic">NIC Code or National Industrial Classification Code </span>is a vital Statistical Standard for maintaining & developing comparable databases as per economic activities. These classifications are repeatedly used in classifying the economically active population, statistics of industrial production & distribution, the various fields of labor statistics & other economic data like national income. Comparability of statistics available from various sources, on different aspects of the economy & usability of such data for economic analysis are essential for standardisation of a classification system. Activities are grouped into<span className="bold italic"> Sections </span>alphabetically coded from A to U and every Section is divided into <span className="bold italic"> Divisions </span>with 2-digital numeric codes, every Division into <span className="bold italic"> Groups </span>with 3-digit numeric codes, every group into <span className="bold italic"> Class </span>with 4 digit code, and every 4-digit class into 5-digit<span className="bold italic"> Sub-Class.</span></p>
      <p><span className="bold italic">On 26th June 2014, the Department of Policy & Promotion had decided to switch over to NIC 2008 from NIC 1987. </span>Version. Since then, all Indian Companies have been advised to follow NIC-2008. NIC 2008 is more compatible & well-suited for the International System of Classification and this enables the compliance processes for Registration to follow in a smooth manner.</p>
      <h2 className="heading2 bold">What is the Importance of the NIC Code in India?</h2>
      <p>Following are some important points which show the importance of NIC Code in India:</p>
      <ol>
        <li>If your business or company in India contains a NIC Code then you can avail of various benefits offered by the Government of India;</li>
        <li>To obtain Udyog Aadhar or to register a Company/LLP;</li>
        <li>It's required to maintain track of business activity which affects the economic health. It's also used by most of the Government Departments to ensure that businesses in India are classified correctly;</li>
        <li>For the Government to keep track of your business, ensure that you have mentioned the NIC Code on all of your invoices.</li>
      </ol>
      <h2 className="heading2 bold">Use of NIC Code in India</h2>
      <p>Following are 2 important segments where the NIC Code is used:</p>
      <ol className="numbered-list">
        <li>
          <p><span className="bold">For Udyam Registration: </span>You need to apply for MSME Registration on the Udyam portal, under <span className="bold italic"> MSME Development Act, 2005 </span>, it is vital to get registered. While registering your business on the Udyam portal, it is necessary to provide your NIC Code.</p>
        </li>
        <li>
          <p><span className="bold">Formation of a Company or LLP: </span>A Company in India is required to be registered under MCA (Ministry of Corporate Affairs) to be declared a valid business. For this purpose, it is compulsory to provide your NIC Code, while registering under MCA.</p>
        </li>
      </ol>
      <h2 className="heading2 bold">List of NIC Code</h2>
      <p>Following is the detailed list of NIC Code:</p>
      <h3 className="heading3 bold">Section A - Agriculture, Forestry, and Fishing</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 01 - Crop and animal production, hunting and related service activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 011 - Growing of non-perennial crops</p>
            </li>
            <li>
              <p>Group 012 - Growing of perennial crops</p>
            </li>
            <li>
              <p>Group 013 - Plant propagation</p>
            </li>
            <li>
              <p>Group 014 - Animal production</p>
            </li>
            <li>
              <p>Group 015 - Mixed farming</p>
            </li>
            <li>
              <p>Group 016 - Support activities to agriculture and post-harvest crop activities</p>
            </li>
            <li>
              <p>Group 017 - Hunting, trapping, and related service activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 02 - Forestry and Logging</span>
          <ol className="numbered-list">
            <li>
              <p>Group 021 - Silviculture and other forestry activities</p>
            </li>
            <li>
              <p>Group 022 - Logging</p>
            </li>
            <li>
              <p>Group 023 - Gathering of non-wood forest products</p>
            </li>
            <li>
              <p>Group 024 - Support services to forestry</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 03 - Fishing and Aquaculture</span>
          <ol className="numbered-list">
            <li>
              <p>Group 031 - Fishing</p>
            </li>
            <li>
              <p>Group 032 - Aquaculture</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section B - Mining and quarrying</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 05 - Mining of coal and lignite</span>
          <ol className="numbered-list">
            <li>
              <p>Group 051 - Mining of hard coal</p>
            </li>
            <li>
              <p>Group 052 - Mining of lignite</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 06 - Extraction of crude petroleum and natural gas</span>
          <ol className="numbered-list">
            <li>
              <p>Group 061 - Extraction of crude petroleum</p>
            </li>
            <li>
              <p>Group 062 - Extraction of natural gas</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 07 - Mining of metal ores</span>
          <ol className="numbered-list">
            <li>
              <p>Group 071 - Mining of iron ores</p>
            </li>
            <li>
              <p>Group 072 - Mining of non-ferrous metal ores</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 08 - Other mining and quarrying</span>
          <ol className="numbered-list">
            <li>
              <p>Group 081 - Quarrying of stone, sand, and clay</p>
            </li>
            <li>
              <p>Group 089 - Mining and quarrying n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 09 - Mining support service activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 091 - Support activities for petroleum and natural gas mining</p>
            </li>
            <li>
              <p>Group 099 - Support activities for other mining and quarrying</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section C - Manufacturing</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 10 - Manufacture of food products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 101 - Processing and preserving of meat</p>
            </li>
            <li>
              <p>Group 102 - Processing and preserving of fish, crustaceans, and molluscs</p>
            </li>
            <li>
              <p>Group 103 - Processing and preserving of fruit and vegetables</p>
            </li>
            <li>
              <p>Group 104 - Manufacture of vegetable and animal oils and fats</p>
            </li>
            <li>
              <p>Group 105 - Manufacture of dairy products</p>
            </li>
            <li>
              <p>Group 106 - Manufacture of grain mill products, starches, and starch products</p>
            </li>
            <li>
              <p>Group 107 - Manufacture of other food products</p>
            </li>
            <li>
              <p>Group 108 - Manufacture of prepared animal feeds</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 11 - Manufacture of beverages</span>
          <ol className="numbered-list">
            <li>
              <p>Group 110 - Manufacture of beverages</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 12 - Manufacture of tobacco products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 120 - Manufacture of tobacco products</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 13 - Manufacture of textiles</span>
          <ol className="numbered-list">
            <li>
              <p>Group 131 - Spinning, weaving, and finishing of textiles</p>
            </li>
            <li>
              <p>Group 139 - Manufacture of other textiles</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 14 - Manufacture of wearing apparel</span>
          <ol className="numbered-list">
            <li>
              <p>Group 141 - Manufacture of wearing apparel, except fur apparel</p>
            </li>
            <li>
              <p>Group 142 - Manufacture of articles of fur</p>
            </li>
            <li>
              <p>Group 143 - Manufacture of knitted and crocheted apparel</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 15 - Manufacture of leather and related products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 151 - Tanning and dressing of leather; manufacture of luggage, handbags, saddlery & harness; dressing and dyeing of fur</p>
            </li>
            <li>
              <p>Group 152 - Manufacture of footwear</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 16 - Manufacture of wood and of products of wood & cork, except furniture; manufacture of articles of straw & plaiting materials</span>
          <ol className="numbered-list">
            <li>
              <p>Group 161 - Sawmilling & planning of wood</p>
            </li>
            <li>
              <p>Group 162 - Manufacture of products of wood, cork, straw & plaiting materials</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 17 - Manufacture of paper & paper products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 170 - Manufacture of paper & paper products</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 18 - Printing and reproduction of recorded media</span>
          <ol className="numbered-list">
            <li>
              <p>Group 181 - Printing and service activities related to printing</p>
            </li>
            <li>
              <p>Group 182 - Reproduction of recorded media</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 19 - Manufacture of coke and refined petroleum products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 191 - Manufacture of coke oven products</p>
            </li>
            <li>
              <p>Group 192 - Manufacture of refined petroleum products</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 20 - Manufacture of chemicals and chemical products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 201 - Manufacture of basic chemicals, fertilizer & nitrogen compounds, plastics & synthetic rubber in primary forms</p>
            </li>
            <li>
              <p>Group 202 - Manufacture of other chemical products</p>
            </li>
            <li>
              <p>Group 202 - Manufacture of man-made fibres</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 21 - Manufacture of pharmaceuticals, medicinal chemical & botanical products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 210 - Manufacture of pharmaceuticals, medicinal chemical and botanical products</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 22 - Manufacture of rubber and plastics products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 221 - Manufacture of rubber products</p>
            </li>
            <li>
              <p>Group 222 - Manufacture of plastics products</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 23 - Manufacture of other non-metallic mineral products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 231 - Manufacture of glass and glass products</p>
            </li>
            <li>
              <p>Group 239 - Manufacture of non-metallic mineral products n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 24 - Manufacture of basic metals</span>
          <ol className="numbered-list">
            <li>
              <p>Group 241 - Manufacture of basic iron and steel</p>
            </li>
            <li>
              <p>Group 242 - Manufacture of basic precious and other non-ferrous metals</p>
            </li>
            <li>
              <p>Group 243 - Casting of metals</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 25 - Manufacture of fabricated metal products, except machinery and equipment</span>
          <ol className="numbered-list">
            <li>
              <p>Group 251 - Manufacture of structural metal products, tanks, reservoirs and steam generators</p>
            </li>
            <li>
              <p>Group 252 - Manufacture of weapons and ammunition</p>
            </li>
            <li>
              <p>Group 259 - Manufacture of other fabricated metal products; metalworking service activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 26 - Manufacture of computer, electronic & optical products</span>
          <ol className="numbered-list">
            <li>
              <p>Group 261 - Manufacture of electronic components</p>
            </li>
            <li>
              <p>Group 262 - Manufacture of computers and peripheral equipment</p>
            </li>
            <li>
              <p>Group 263 - Manufacture of communication equipment</p>
            </li>
            <li>
              <p>Group 264 - Manufacture of consumer electronics</p>
            </li>
            <li>
              <p>Group 265 - Manufacture of measuring, testing, navigating and control equipment; watches and clocks</p>
            </li>
            <li>
              <p>Group 266 - Manufacture of irradiation, electromedical and electrotherapeutic equipment</p>
            </li>
            <li>
              <p>Group 267 - Manufacture of optical instruments and equipment</p>
            </li>
            <li>
              <p>Group 268 - Manufacture of magnetic and optical media</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 27 - Manufacture of electrical equipment</span>
          <ol className="numbered-list">
            <li>
              <p>Group 271 - Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus</p>
            </li>
            <li>
              <p>Group 272 - Manufacture of batteries and accumulators</p>
            </li>
            <li>
              <p>Group 273 - Manufacture of wiring and wiring devices</p>
            </li>
            <li>
              <p>Group 274 - Manufacture of electric lighting equipment</p>
            </li>
            <li>
              <p>Group 275 - Manufacture of domestic appliances</p>
            </li>
            <li>
              <p>Group 279 - Manufacture of other electrical equipment</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 28 - Manufacture of machinery and equipment n.e.c.</span>
          <ol className="numbered-list">
            <li>
              <p>Group 281 - Manufacture of general purpose machinery</p>
            </li>
            <li>
              <p>Group 282 - Manufacture of special-purpose machinery</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 29 - Manufacture of motor vehicles, trailers and semi-trailers</span>
          <ol className="numbered-list">
            <li>
              <p>Group 291 - Manufacture of motor vehicles</p>
            </li>
            <li>
              <p>Group 292 - Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers</p>
            </li>
            <li>
              <p>Group 293 - Manufacture of parts and accessories for motor vehicles</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 30 - Manufacture of other transport equipment</span>
          <ol className="numbered-list">
            <li>
              <p>Group 301 - Building of ships and boats</p>
            </li>
            <li>
              <p>Group 302 - Manufacture of railway locomotives and rolling stock</p>
            </li>
            <li>
              <p>Group 303 - Manufacture of air and spacecraft and related machinery</p>
            </li>
            <li>
              <p>Group 304 - Manufacture of military fighting vehicles</p>
            </li>
            <li>
              <p>Group 309 - Manufacture of transport equipment n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 31 - Manufacture of furniture</span>
          <ol className="numbered-list">
            <li>
              <p>Group 310 - Manufacture of furniture</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 32- Other manufacturing</span>
          <ol className="numbered-list">
            <li>
              <p>Group 321 - Manufacture of jewellery, bijouterie and related articles</p>
            </li>
            <li>
              <p>Group 322 - Manufacture of musical instruments</p>
            </li>
            <li>
              <p>Group 323 - Manufacture of sports goods</p>
            </li>
            <li>
              <p>Group 324 - Manufacture of games and toys</p>
            </li>
            <li>
              <p>Group 325 - Manufacture of medical and dental instruments and supplies</p>
            </li>
            <li>
              <p>Group 329 - Other manufacturing n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 33 - Repair and installation of machinery & equipment</span>
          <ol className="numbered-list">
            <li>
              <p>Group 331 - Repair of fabricated metal products, machinery & equipment</p>
            </li>
            <li>
              <p>Group 332 - Installation of industrial machinery & equipment</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section D	- Electricity, gas, steam and air conditioning supply</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 35 - Electricity, gas, steam and air conditioning supply</span>
          <ol className="numbered-list">
            <li>
              <p>Group 351 - Electric power generation, transmission and distribution</p>
            </li>
            <li>
              <p>Group 352 - Manufacture of gas; distribution of gaseous fuels through mains</p>
            </li>
            <li>
              <p>Group 353 - Steam and air conditioning supply</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section E - Water supply; sewerage, waste management & remediation activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 36 - Water collection, treatment and supply</span>
          <ol className="numbered-list">
            <li>
              <p>Group 360 - Water collection, treatment and supply</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 37 - Sewerage</span>
          <ol className="numbered-list">
            <li>
              <p>Group 370 - Sewerage</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 38 - Waste collection, treatment &  disposal activities; materials recovery</span>
          <ol className="numbered-list">
            <li>
              <p>Group 381 - Waste collection</p>
            </li>
            <li>
              <p>Group 382 - Waste treatment and disposal</p>
            </li>
            <li>
              <p>Group 383 - Materials recovery</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 39 - Remediation activities & other waste management services</span>
          <ol className="numbered-list">
            <li>
              <p>Group 390 - Remediation activities and other waste management services</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section F - Construction</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 41 - Construction of buildings</span>
          <ol className="numbered-list">
            <li>
              <p>Group 410 - Construction of buildings</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 42 - Civil engineering</span>
          <ol className="numbered-list">
            <li>
              <p>Group 421 - Construction of roads and railways</p>
            </li>
            <li>
              <p>Group 422 - Construction of utility projects</p>
            </li>
            <li>
              <p>Group 429 - Construction of other civil engineering projects</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 43 - Specialized construction activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 431 - Demolition and site preparation</p>
            </li>
            <li>
              <p>Group 432 - Electrical, plumbing and other construction installation activities</p>
            </li>
            <li>
              <p>Group 433 - Building completion and finishing</p>
            </li>
            <li>
              <p>Group 439 - Other specialized construction activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section G - Wholesale and retail trade; repair of motor vehicles &  motorcycles</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 45 - Wholesale and retail trade; repair of motor vehicles and motorcycles</span>
          <ol className="numbered-list">
            <li>
              <p>Group 451 - Sale of motor vehicles</p>
            </li>
            <li>
              <p>Group 452 - Maintenance and repair of motor vehicles</p>
            </li>
            <li>
              <p>Group 453 - Sale of motor vehicle parts and accessories</p>
            </li>
            <li>
              <p>Group 454 - Sale, maintenance and repair of motorcycles and related parts and accessories</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 46 - Wholesale trade, except of motor vehicles and motorcycles</span>
          <ol className="numbered-list">
            <li>
              <p>Group 461 - Wholesale on a fee or contract basis</p>
            </li>
            <li>
              <p>Group 462 - Wholesale of agricultural raw materials and live animals</p>
            </li>
            <li>
              <p>Group 463 - Wholesale of food, beverages and tobacco</p>
            </li>
            <li>
              <p>Group 464 - Wholesale of household goods</p>
            </li>
            <li>
              <p>Group 465 - Wholesale of machinery, equipment and supplies</p>
            </li>
            <li>
              <p>Group 466 - Other specialised wholesale</p>
            </li>
            <li>
              <p>Group 469 - Non-specialized wholesale trade</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 47 - Retail trade, except of motor vehicles and motorcycles</span>
          <ol className="numbered-list">
            <li>
              <p>Group 471 - Retail sale in non-specialized stores</p>
            </li>
            <li>
              <p>Group 472 - Retail sale of food, beverages and tobacco in specialised stores</p>
            </li>
            <li>
              <p>Group 473 - Retail sale of automotive fuel in specialised stores</p>
            </li>
            <li>
              <p>Group 474 - Retail sale of information and communications equipment in specialised stores</p>
            </li>
            <li>
              <p>Group 475 - Retail sale of other household equipment in specialised stores</p>
            </li>
            <li>
              <p>Group 476 - Retail sale of cultural and recreation goods in specialised stores</p>
            </li>
            <li>
              <p>Group 477 - Retail sale of other goods in specialised stores</p>
            </li>
            <li>
              <p>Group 478 - Retail sale via stalls and markets</p>
            </li>
            <li>
              <p>Group 479 - Retail trade not in stores, stalls or markets</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section H	 - Transportation and storage</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 49 - Land transport & transport via pipelines</span>
          <ol className="numbered-list">
            <li>
              <p>Group 491 - Transport via railways</p>
            </li>
            <li>
              <p>Group 492 - Other land transport</p>
            </li>
            <li>
              <p>Group 493 - Transport via pipeline</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 50 - Water transport</span>
          <ol className="numbered-list">
            <li>
              <p>Group 501 - Sea and coastal water transport</p>
            </li>
            <li>
              <p>Group 502 - Inland water transport</p>
            </li>
          </ol>
        </li>
      </ul><ul className="numbered-list">
        <li>
          <span className="bold">Division 51 - Air transport</span>
          <ol className="numbered-list">
            <li>
              <p>Group 511 - Passenger air transport</p>
            </li>
            <li>
              <p>Group 512 - Freight air transport</p>
            </li>
          </ol>
        </li>
      </ul><ul className="numbered-list">
        <li>
          <span className="bold">Division 52 - Warehousing and support activities for transportation</span>
          <ol className="numbered-list">
            <li>
              <p>Group 521 - Warehousing and storage</p>
            </li>
            <li>
              <p>Group 522 - Support activities for transportation</p>
            </li>
          </ol>
        </li>
      </ul><ul className="numbered-list">
        <li>
          <span className="bold">Division 53 - Postal and courier activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 531 - Postal activities</p>
            </li>
            <li>
              <p>Group 532 - Courier activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section I - Accommodation and Food service activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 55 - Accommodation</span>
          <ol className="numbered-list">
            <li>
              <p>Group 551 - Short term accommodation activities</p>
            </li>
            <li>
              <p>Group 552 - Camping grounds, recreational vehicle parks and trailer parks</p>
            </li>
            <li>
              <p>Group 559 - Other accommodation</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 56 - Food and beverage service activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 561 - Restaurants and mobile food service activities</p>
            </li>
            <li>
              <p>Group 562 - Event catering and other food service activities</p>
            </li>
            <li>
              <p>Group 563 - Beverage serving activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section J - Information and communication</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 58 - Publishing activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 581 - Publishing of books, periodicals and other publishing activities</p>
            </li>
            <li>
              <p>Group 582 - Software publishing</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 59 - Motion picture, video and television programme production, sound recording and music publishing activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 591 - Motion picture, video and television programme activities</p>
            </li>
            <li>
              <p>Group 592 - Sound recording and music publishing activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 60 - Broadcasting and programming activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 601 - Radio broadcasting</p>
            </li>
            <li>
              <p>Group 602 - Television programming and broadcasting activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 61 - Telecommunications</span>
          <ol className="numbered-list">
            <li>
              <p>Group 611 - Wired telecommunications activities</p>
            </li>
            <li>
              <p>Group 612 - Wireless telecommunications activities</p>
            </li>
            <li>
              <p>Group 613 - Satellite telecommunications activities</p>
            </li>
            <li>
              <p>Group 619 - Other telecommunications activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 62 - Computer programming, consultancy and related activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 620 - Computer programming, consultancy and related activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 63 - Information service activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 631 - Data processing, hosting and related activities; web portals</p>
            </li>
            <li>
              <p>Group 639 - Other information service activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section K - Financial and insurance activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 64 - Financial service activities, except insurance and pension funding</span>
          <ol className="numbered-list">
            <li>
              <p>Group 641 - Monetary intermediation</p>
            </li>
            <li>
              <p>Group 642 - Activities of holding companies</p>
            </li>
            <li>
              <p>Group 643 - Trusts, funds and other financial vehicles</p>
            </li>
            <li>
              <p>Group 649 - Other financial service activities, except insurance and pension funding activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 65 - Insurance, reinsurance and pension funding, except compulsory social security</span>
          <ol className="numbered-list">
            <li>
              <p>Group 651 - Insurance</p>
            </li>
            <li>
              <p>Group 652 - Reinsurance</p>
            </li>
            <li>
              <p>Group 653 - Pension funding</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 66 - Other financial activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 661 - Activities auxiliary to financial service activities, except insurance and pension funding</p>
            </li>
            <li>
              <p>Group 662 - Activities auxiliary to insurance and pension funding</p>
            </li>
            <li>
              <p>Group 663 - Fund management activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section L - Real estate activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 68 - Real estate activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 681 - Real estate activities with own or leased property</p>
            </li>
            <li>
              <p>Group 682 - Real estate activities on a fee or contract basis</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section M - Professional, scientific and technical activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 69 - Legal and accounting activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 691 - Legal activities</p>
            </li>
            <li>
              <p>Group 692 - Accounting, bookkeeping and auditing activities; tax consultancy</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 70 - Activities of head offices; management consultancy activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 701 - Activities of head offices</p>
            </li>
            <li>
              <p>Group 702 - Management consultancy activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 71 - Architecture & engineering activities; technical testing and analysis</span>
          <ol className="numbered-list">
            <li>
              <p>Group 711 - Architectural and engineering activities and related technical consultancy</p>
            </li>
            <li>
              <p>Group 712 - Technical testing and analysis</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 72 - Scientific research and development</span>
          <ol className="numbered-list">
            <li>
              <p>Group 721 - Research and experimental development on natural sciences and engineering</p>
            </li>
            <li>
              <p>Group 722 - Research and experimental development on social sciences and humanities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 73 - Advertising and market research</span>
          <ol className="numbered-list">
            <li>
              <p>Group 731 - Advertising</p>
            </li>
            <li>
              <p>Group 732 - Market research and public opinion polling</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 74 - Other professional, scientific and technical activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 741 - Specialised design activities</p>
            </li>
            <li>
              <p>Group 742 - Photographic activities</p>
            </li>
            <li>
              <p>Group 749 - Other professional, scientific and technical activities n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 75 - Veterinary activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 750 - Veterinary activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section N - Administrative and support service activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 77 - Rental and leasing activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 771 - Renting and leasing of motor vehicles</p>
            </li>
            <li>
              <p>Group 772 - Renting and leasing of personal and household goods</p>
            </li>
            <li>
              <p>Group 773 - Renting and leasing of other machinery, equipment and tangible goods n.e.c.</p>
            </li>
            <li>
              <p>Group 774 - Leasing of nonfinancial intangible assets</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 78 - Employment activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 781 - Activities of employment placement agencies</p>
            </li>
            <li>
              <p>Group 782 - Temporary employment agency activities</p>
            </li>
            <li>
              <p>Group 783 - Human resources provision and management of human resources functions</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold"></h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 79 - Travel agency, tour operator and other reservation service activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 791 - Travel agency and tour operator activities</p>
            </li>
            <li>
              <p>Group 799 - Other reservation service activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 80 - Security and investigation activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 801 - Private security activities</p>
            </li>
            <li>
              <p>Group 802 - Security systems service activities</p>
            </li>
            <li>
              <p>Group 803 - Investigation activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 81 - Services to buildings and landscape activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 811 - Combined facilities support activities</p>
            </li>
            <li>
              <p>Group 812 - Cleaning activities</p>
            </li>
            <li>
              <p>Group 813 - Landscape care and maintenance service activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 82 - Office administrative, office support and other business support activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 821 - Combined facilities support activities</p>
            </li>
            <li>
              <p>Group 822 - Activities of call centres</p>
            </li>
            <li>
              <p>Group 823 - Organization of conventions and trade shows</p>
            </li>
            <li>
              <p>Group 829 - Business support service activities n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section O - Public administration and defence; compulsory social security</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 84 - Public administration and defence; compulsory social security</span>
          <ol className="numbered-list">
            <li>
              <p>Group 841 - Administration of the State and the economic and social policy of the community</p>
            </li>
            <li>
              <p>Group 842 - Provision of services to the community as a whole</p>
            </li>
            <li>
              <p>Group 843 - Compulsory social security activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section P - Education</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 85 - Education</span>
          <ol className="numbered-list">
            <li>
              <p>Group 851 - Primary education</p>
            </li>
            <li>
              <p>Group 852 - Secondary education</p>
            </li>
            <li>
              <p>Group 853 - Higher education</p>
            </li>
            <li>
              <p>Group 854 - Other education</p>
            </li>
            <li>
              <p>Group 855 - Educational support services</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section Q - Human health and social work activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 86 - Human health activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 861 - Hospital activities</p>
            </li>
            <li>
              <p>Group 862 - Medical and dental practice activities</p>
            </li>
            <li>
              <p>Group 869 - Other human health activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 87 - Residential care activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 871 - Nursing care facilities</p>
            </li>
            <li>
              <p>Group 872 - Residential care activities for mental retardation, mental health and substance abuse</p>
            </li>
            <li>
              <p>Group 873 - Residential care activities for the elderly and disabled</p>
            </li>
            <li>
              <p>Group 879 - Other residential care activities n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 88 - Social work activities without accommodation</span>
          <ol className="numbered-list">
            <li>
              <p>Group 881 - Social work activities without accommodation for the elderly and disabled</p>
            </li>
            <li>
              <p>Group 889 - Other social work activities without accommodation n.e.c.</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section R	- Arts, entertainment and recreation</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 90 - Creative, arts and entertainment activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 900 - Creative, arts and entertainment activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 91 - Libraries, archives, museums and other cultural activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 910 - Libraries, archives, museums and other cultural activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 92 - Gambling and betting activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 920 - Gambling and betting activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 93 - Sports activities and amusement and recreation activities</span>
          <ol className="numbered-list">
            <li>
              <p>Group 931 - Sports activities</p>
            </li>
            <li>
              <p>Group 932 - Other amusement and recreation activities</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section S - Other Service Activities</h3>
      <ul className="numbered-list">
        <li>
          <span className="bold">Division 94 - Activities of membership organisations</span>
          <ol className="numbered-list">
            <li>
              <p>Group 941 - Activities of business, employers and professional membership organisations</p>
            </li>
            <li>
              <p>Group 942 - Activities of trade unions</p>
            </li>
          </ol>
        </li>
      </ul>
      <h3 className="heading3 bold">Section T - Activities of households as employers; undifferentiated goods and services-producing activities of households for own use</h3>
      <ul className="numbered-list">
        <li>
          <span>Division 97 - Activities of households as employers of domestic personnel</span>
        </li>
        <li>
          <span>Division 98 - Undifferentiated goods- and services-producing activities of private households for own use</span>
        </li>
      </ul>
      <h3 className="heading3 bold">Section U - Activities of Extraterritorial Organizations and Bodies</h3>
      <ul className="numbered-list">
        <li>
          <span>Division 99 - Activities of extraterritorial organisations and bodies</span>
        </li>
      </ul>
      <h2 className="heading2 bold">How can RegisterKaro help you?</h2>
      <p>RegisterKaro offers various services to assist companies in registering for a NIC Code, including:</p>
      <ol className="numbered-list">
        <li>
          <p>We will provide you instructions & advice on how to get a NIC Code including all the documentation & the actions required;</p>
        </li>
        <li>
          <p>Help in the filing of the NIC Code Application;</p>
        </li>
        <li>
          <p>To guarantee that the NIC Code Application is completed fast and the NIC Code is issued, follow up with the appropriate authorities;</p>
        </li>
        <li>
          <p>Offers continuing assistance & support to businesses as needed, including responding to any inquiries or taking care of any problems that could emerge along the procedure;</p>
        </li>
        <li>
          <p>Our experts will help businesses in streamlining the process of getting a NIC Code & making sure that they can complete the process effectively & quickly.</p>
        </li>
      </ol>
    </div>
  );
}