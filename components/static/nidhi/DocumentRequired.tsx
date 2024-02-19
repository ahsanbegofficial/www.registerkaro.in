import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/nidhi-reg/document_req.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

export const DocumentRequired = () => {
  return (
    <div className='DocumentRequired w-80 m-auto' id='Documents'>
      <div className='flex justify-content-center mb-5'>
        <Image alt="some crucial documents required for Nidhi Company Registration" className="DocumentRequired-img w-100" height={430} loading="lazy" src={documents} />
      </div>
      <div>
        <p>Following are some crucial documents required for Nidhi Company Registration in India:</p>
        <h3>Basic Checklist:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="Three Directors" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Three Directors: </strong>A Nidhi corporation must have at least three directors, at least one of whom must be an Indian Citizen and Resident.</li>
          <li><Image alt="Seven Promoters" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Seven Promoters: </strong>At least seven Promoters are required for a Nidhi firm. It is possible that the Promoter and Director are the same individuals.</li>
          <li><Image alt="Unique Name" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Unique Name: </strong>The business name must be unique. The proposed name must be identical or similar to any existing companies or trademarks in India. The words "Nidhi Limited" must appear in the Company's name at the time of incorporation.</li>
          <li><Image alt="Paid-Up Capital" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Paid-Up Capital: </strong>A minimum paid-up equity share capital of Rs. 5 lakhs is required.</li>
          <li><Image alt="Registered Office" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Registered Office: </strong>The Company must have a physical location. Other Licenses should be obtained at the location.</li>
        </ul>
        <h3>Documents for Registered Office:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="most recent bank statement or telephone bill, mobile bill, energy or gas bill" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> A copy of the most recent bank statement (within the past three months) or a copy of the most recent telephone bill, mobile bill, energy or gas bill (within the last two months)</li>
          <li><Image alt="Copies of property tax receipts" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Copies of property tax receipts</li>
          <li><Image alt="Notarized rental/lease agreement" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Notarized rental/lease agreement</li>
          <li><Image alt="Scanned copy of sale deed/property deed" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Scanned copy of sale deed/property deed</li>
          <li><Image alt="Property owner's no objection certificate" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Property owner's no objection certificate</li>
        </ul>
        <h3>Documents for Indian Directors or Promoters:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="PAN Card of all the Shareholders and Directors of the Company" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> PAN Card of all the Shareholders and Directors of the Company</li>
          <li><Image alt="A recent passport-sized photograph of the shareholder/director" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> A recent passport-sized photograph of the shareholder/director (in jpeg/pdf format)</li>
          <li><Image alt="ID proof such as Voter ID Card/Passport/Driving Licence is acceptable forms of identification" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> ID proof such as Voter ID Card/Passport/Driving Licence is acceptable forms of identification</li>
          <li><Image alt="Proof of Address such as Bank Statement/Recent Electricity/Telephone/Mobile Bill" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Proof of Address such as Bank Statement/Recent Electricity/Telephone/Mobile Bill</li>
        </ul>
        <p><strong>NOTE: </strong>Please keep in mind that digital signatures are required for all prospective directors and promoters of the firm. It is essential for the incorporation application to be signed. DSC is available online. RegisterKaro support manager will submit the application and provide you with a link to complete the video eKYC verification. To authenticate the application, the applicant would need to record a brief video and enter an OTP.</p>
        <h3>Documents for NRI Directors or Promoters:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ID proof for NRI Directors" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>ID proof: </strong>Passport/PAN Card, which must be confirmed by the Indian embassy.</li>
          <li><Image alt="Address Proof" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Address Proof: </strong>If the permanent address is in India- Bank Statement/Latest Electricity/Telephone/Mobile Bill: certified by any competent CA/CS or CMA (Practising).</li>
          <li><Image alt="Current abroad address and if the country is a CommonWealth (CW) country" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Current abroad address and if the country is a CommonWealth (CW) country: </strong>Hague Convention (HC): Notarised by a Public Notary and apostilled by the appropriate government of such country.</li>
          <li><Image alt="Outside of CW or HC" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Outside of CW or HC: </strong>Notarised by a Notary (Public) of such country, with the Notary's certificate certified by a Diplomatic or Consular Officer.</li>
        </ul>
        <h3>Documents for Foreign Nationals:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ID proof (Passport/PAN Card) & Address Proof" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> ID proof (Passport/PAN Card) & Address Proof:</li>
          <li><Image alt="Residing in his own country under Hague Convention(HC)" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Residing in his own country under Hague Convention(HC): Notarised by Public Notary and apostille by the competent authority of such country.</li>
          <li><Image alt="Residing outside his own country and the country where he resides is under the Hague Convention" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Residing outside his own country and the country where he resides is under the Hague Convention.</li>
          <li><Image alt="Notarised by a Public Notary and apostille by the competent authority of that foreign country" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Option A: </strong>Notarised by a Public Notary and apostille by the competent authority of that foreign country.</li>
          <li><Image alt="Option B" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Option B: </strong>Attested by the Embassy of his Country of Origin at the place where he resides.</li>
          <li><Image alt="Residing in his own country under Commonwealth Country (CW)" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Residing in his own country under Commonwealth Country (CW): </strong>Notarised by Public Notary.</li>
        </ul>
        <p>Residing outside his own country and the country where he resides is under Commonwealth Country: </p>
        <ul className='tick list-unstyled'>
          <li><Image alt="Notarised by the Public Notary of that foreign country" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Option A: </strong>Notarised by the Public Notary of that foreign country. </li>
          <li><Image alt="Attested by the Embassy of his Country of Origin at the place where he resides" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Option B: </strong>Attested by the Embassy of his Country of Origin at the place where he resides.</li>
          <li><Image alt="Is from a country that is outside the CommonWealth and also not a party to Hague Apostille Convention" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> <strong>Is from a country that is outside the CommonWealth and also not a party to Hague Apostille Convention: </strong>Notarised by the Notary (Public) of such country and the certificate of Notary (Public) to be authenticated by a Diplomatic or Consular Officer. All proposed Directors have to submit a list of Indian Companies in which they are interested (i.e. holding 2% or more shares).</li>
        </ul>
      </div>
    </div>
  )
}