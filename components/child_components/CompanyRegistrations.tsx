import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import certificate from "../../assets/images/register_steps/Certificate_edited.webp"
import docs from "../../assets/images/register_steps/Docs.webp"
import submit from "../../assets/images/register_steps/Submit.webp"
import wallet from "../../assets/images/register_steps/Wallet.webp"
import img1 from '../../assets/images/steps/01.webp'
import img2 from '../../assets/images/steps/02.webp'
import img3 from '../../assets/images/steps/03.webp'
import img4 from '../../assets/images/steps/04.webp'
import arrow from '../../assets/images/steps/ARROW.webp'
import bgImg from '../../assets/images/steps/bgImg.webp'

interface CompanyRegistrations {
  data: any;
}

const cards = [
  {
    id: 1,
    img: submit,
    p1: 'Fill up the',
    p2: 'forms',
    wh: 'wh-120'
  },
  {
    id: 2,
    img: docs,
    p1: 'Submit the',
    p2: 'Documents',
    wh: 'wh-120'
  },
  {
    id: 3,
    img: wallet,
    p1: 'Pay only',
    p2: 'Professional fee',
    wh: 'wh-120'
  },
  {
    id: 4,
    img: certificate,
    p1: 'Get your Company',
    p2: 'Registered',
    wh: 'wh-128'
  }
]

const CompanyRegistrations: React.FC<CompanyRegistrations> = ({ data }) => {
  const bgImage = {
    backgroundImage: `url(${bgImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '5500',
    width: '8000'
  };
  return (
    <div style={bgImage} className="company-registrations">
      <h2 className="stepsHeadingText text-center fs-3 mt-5 mb-5 fw-bold pb-3">{data.companyName} <br /> <span className="steps">4 Easy Steps</span></h2>
      <div className="stepsStyle mainContainer forms-desktop">
        <div className="d-lg-flex  justify-content-center align-items-center gap-3 imgContainer">
          <Image className=".imgSteps" src={img1} width={70} height={70} alt='steps'></Image>
          <Image className=".arrowImg" src={arrow} width={150} height={30} alt='steps'></Image>
          <Image className=".imgSteps" src={img2} width={70} height={70} alt='steps'></Image>
          <Image className=".arrowImg" src={arrow} width={150} height={30} alt='steps'></Image>
          <Image className=".imgSteps" src={img3} width={70} height={70} alt='steps'></Image>
          <Image className=".arrowImg" src={arrow} width={150} height={30} alt='steps'></Image>
          <Image className=".imgSteps" src={img4} width={70} height={70} alt='steps'></Image>
        </div>
        <div className="d-lg-flex justify-content-center align-items-center cardStyle">
          {
            cards.map((e, i) => (
              <div className='text-lg-center' key={e.id}>
                <Card className="cardContainer cardShadow mb-3">
                  <Card.Body className={`d-flex justify-content-center align-items-center ht-118 ${e.wh}`}>
                    <Image src={e.img} width={103} height={103} alt='img'></Image>
                  </Card.Body>
                </Card>
                <p className='mt-4'>{e.p1}<br />{e.p2}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='forms-mobile'>
        <div className="d-lg-flex justify-content-center align-items-center cardStyle">
          <Image className=".imgSteps" src={img1} width={70} height={70} alt='steps'></Image>
          <div className='text-lg-center'>
            <Card className="cardContainer cardShadow mb-3">
              <Card.Body className='d-flex justify-content-center align-items-center ht-118 wh-120'>
                <Image src={submit} width={103} height={103} alt='img'></Image>
              </Card.Body>
            </Card>
            <p>Fill up the<br />forms</p>
          </div>
          <Image className=".imgSteps" src={img2} width={70} height={70} alt='steps'></Image>
          <div className='text-lg-center'>
            <Card className="cardContainer cardShadow mb-3">
              <Card.Body className='d-flex justify-content-center align-items-center ht-118 wh-120'>
                <Image src={docs} width={103} height={103} alt='img'></Image>
              </Card.Body>
            </Card>
            <p>Submit the<br />Documents</p>
          </div>
          <Image className=".imgSteps" src={img3} width={70} height={70} alt='steps'></Image>
          <div className='text-lg-center'>
            <Card className="cardContainer cardShadow mb-3">
              <Card.Body className='d-flex justify-content-center align-items-center ht-118 wh-120'>
                <Image src={wallet} width={103} height={103} alt='img'></Image>
              </Card.Body>
            </Card>
            <p>Pay only<br />Professional fee</p>
          </div>
          <Image className=".imgSteps" src={img4} width={70} height={70} alt='steps'></Image>
          <div className='text-lg-center'>
            <Card className="cardContainer cardShadow mb-3">
              <Card.Body className='d-flex justify-content-center align-items-center ht-118 wh-120'>
                <Image src={certificate} width={103} height={103} alt='img'></Image>
              </Card.Body>
            </Card>
            <p>Get your Company<br />Registered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrations;