import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
const Carousel = dynamic(() => import('./Carousel'), { ssr: false });

export const ServiceSlider = () => {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://i.ibb.co/mzRLndR/one.jpg" />
            ),
            name: 'Venu Gopal',
            title: 'Founder of SkySpark',
            locale: '🇮🇳 India',
            review: "Registerkaro's virtual office service in Bangalore has been a game-changer for my business. The prestigious address and professional support have enhanced our corporate image, making a lasting impression on clients. Highly recommended!"
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://i.ibb.co/ncVmS3q/two.jpg" />
            ),
            name: 'Jagan Prakash',
            title: 'Founder of UrbanPulse',
            locale: '🇮🇳 India',
            review: 'Exceptional service from Registerkaro! Their virtual office in Bangalore provided us with a cost-effective solution to establish a prominent business address. The seamless administrative support allowed us to focus on growing our business'
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://i.ibb.co/swzNMKn/three.jpg" />
            ),
            name: 'Nalin Kumar',
            title: 'Founder of NovaWave',
            locale: '🇮🇳 India',
            review: 'Choosing Registerkaro for our virtual office needs in Bangalore was a wise decision. The flexibility and efficiency of their services exceeded our expectations. A reliable partner for any business looking to make a mark in the city'
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://i.ibb.co/1nSRXqG/four.jpg.jpg" />
            ),
            name: 'Ritesh Kumar',
            title: 'Founder of SeedLab',
            locale: '🇮🇳 India',
            review: "Registerkaro's virtual office service has significantly elevated our business presence in Bangalore. The prestigious location and comprehensive support services have been instrumental in our success. Thank you for the professional assistance"
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://i.ibb.co/P5NVkCh/five.jpg" />
            ),
            name: 'Mazeer Mawjood',
            title: 'Founder of UdaanTech',
            locale: '🇮🇳 India',
            review: "I can't speak highly enough about Registerkaro's virtual office service. The Bangalore address provided a credible front for our business, and their responsive team made the entire process smooth and hassle-free. An excellent choice for any entrepreneur or company"
        }
    ];

    return (
        <div className="ServiceSliderDiv">
            <Carousel
                cards={cards}
                height="400px"
                width="100%"
                margin="0 auto"
                offset={8}
                showArrows={true}
            />
        </div>
    );
}