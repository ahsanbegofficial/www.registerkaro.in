import Lottie from "react-lottie";
import animationData from "../assets/data/payment-completed.json";
import tick from "../assets/images/thank-you/payment-tick.webp";
import first from "../assets/images/thank-you/first.webp";
import second from "../assets/images/thank-you/second.webp";
import third from "../assets/images/thank-you/third.webp";
import Image from "next/image";
import Card from 'react-bootstrap/Card';
import Head from "next/head";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Home = () => {
    return (
        <div className='thank-you'>
            <Head>
                <title>Thank You | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/thank-you" />
                <meta property="og:title" content="Thank You | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <div className="upper">
                <div className="left">
                    <Lottie options={defaultOptions} />
                </div>
                <div className="right">
                    <Image src={tick} alt='tick' />
                    <p className="heading">Thank You!</p>
                    <p>Please check your email. A detailed quotation to <span>register your <br />company</span> has been sent to your email address! <br />You can also reach us at <a href="tel:+918447746183" className="number">+918447746183</a></p>
                </div>
            </div>
            <p className="heading2">What's next?</p>
            <div className='other-services'>
                <div className="cardContainer container p-5 gap-5">
                    <Card className="p-2 cardBorder cardBorderEffect">
                        <Card.Body className='text-center'>
                            <Image src={first} alt='image' />
                            <Card.Title>1.Assigned</Card.Title>
                            <Card.Text className="mt-4 mb-4 cardTextServices">A RegisterKaro business expert has been assigned to you.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-2 cardBorder cardBorderEffect">
                        <Card.Body className='text-center'>
                            <Image src={second} alt='image' />
                            <Card.Title>2.Check E-mail</Card.Title>
                            <Card.Text className="mt-4 mb-4 cardTextServices">Check your email inbox. A detailed quotation along with the next steps are included.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-2 cardBorder cardBorderEffect">
                        <Card.Body className='text-center'>
                            <Image src={third} alt='image' />
                            <Card.Title>3.Talk to expert</Card.Title>
                            <Card.Text className="mt-4 mb-4 cardTextServices">Meanwhile, A RegisterKaro business expert who has been assigned will get in touch with you shortly.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Home