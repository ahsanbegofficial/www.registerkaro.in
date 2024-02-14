import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import keepInMind from '../../assets/images/whatToKnow/guide.webp';
import bgImg from '../../assets/images/steps/bgImg.webp'

interface PrivateProps {
    registrationName: any;
    member: any;
}

const Members: React.FC<PrivateProps> = ({ registrationName, member }) => {
    const bgImage = {
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '5500',
        width: '8000'
    };
    return (
        <div style={bgImage} className="p-5 text-center  pb-5">
            <h1 className="mainHeadingText">{member.h1} <br /> <span className="pvtHeading">{registrationName}?</span></h1>
            {
                member.pfirst === 'undefined' ? <p className="subHeadingText">{member.psecond}</p> :
                    <p className="subHeadingText">{member.pfirst} <br />{member.psecond}</p>
            }
            <div className="contentContainer">
                <div className="leftSideContent">
                    <div className="firstContent">
                        <h2>{member.firstContent.h2}</h2>
                        <p>{member.firstContent.p}</p>
                    </div>
                    <div className="secondContent">
                        <h2>{member.secondContent.h2}</h2>
                        <p>{member.secondContent.p}</p>
                    </div>
                </div>
                <Image className="imgContent" src={keepInMind} width={180} height={600} alt='img'></Image>
                <div className="rightSideContent">
                    <div className="rightSideFirstContent">
                        <h2>{member.thirdContent.h2}</h2>
                        <p>{member.thirdContent.p}</p>
                    </div>
                    <div className="rightSideSecondContent">
                        <h2>{member.fourthContent.h2}</h2>
                        <p>{member.fourthContent.p}</p>
                    </div>
                </div>
            </div>

            {/* for small devices */}
            <div className="smallDevice  d-lg-none">
                <Image className="imgContainer" src={keepInMind} alt='img' />
                <div className="infoContainer">
                    {
                        member.memberformobile?.map((e: any) => (
                            <Card className='width-11' key={e.id}>
                                <Card.Body>
                                    <Card.Title className='text-secondary'>{e.title}</Card.Title>
                                    <Card.Text>{e.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Members;