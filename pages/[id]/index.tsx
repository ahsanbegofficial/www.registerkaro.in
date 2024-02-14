import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from 'react-modal';
import bgImage from '../../assets/images/organic/bgColor.webp';
import { CustomDefault } from "../../components/child_components/CustomDefault";
import { FaqTemplate } from "../../components/child_components/FaqTemplate";
import { Popular } from "../../components/child_components/Popular";
import { RegistrationLinks } from "../../components/child_components/RegistrationLinks";
import { SwiperSlider } from "../../components/child_components/SwiperSlider";
import ZohoFormService from "../../components/child_components/ZohoformService";
import Blog from "../../components/landing/Blog";
import Testimonial from "../../components/landing/Testimonial";
import FAQPage from "../../components/schema/FAQPage";
import Organization from "../../components/schema/Organization";
import Product from "../../components/schema/Product";

const NEWGLOBAL_VARIABLE = process.env.NEWGLOBAL_VARIABLE

let state = [
  "Maharashtra",
  "Jharkhand",
  "Kashmir",
  "Puducherry",
  "Karnataka",
  "Madhya Pradesh",
  "Andhra Pradesh",
  "Himachal Pradesh",
  "Tamil Nadu",
  "Odisha",
  "Assam",
  "Arunachal Pradesh",
  "Gujarat",
  "Chandigarh",
  "Jammu And Kashmir",
  "Manipur",
  "Andaman And Nicobar Islands",
  "Bihar",
  "Chhattisgarh",
  "Dadra And Nagar Haveli",
  "Daman And Diu",
  "Goa",
  "Haryana",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
]

let city = [
  "Mumbai",
  "Firozabad",
  "New Delhi",
  "Srinagar",
  "Bangalore",
  "Ghaziabad",
  "Hyderabad",
  "Thiruvananthapuram",
  "Ahmedabad",
  "Chennai",
  "Gorakhpur",
  "Kolkata",
  "Thrissur",
  "Gulbarga",
  "Lucknow",
  "Tiruchirappalli",
  "Agartala",
  "Agra",
  "Ahmednagar",
  "Aizawl",
  "Ajmer",
  "Akola",
  "Aligarh",
  "Alwar",
  "Ambala",
  "Ambarnath",
  "Ambattur",
  "Amravati",
  "Amritsar",
  "Amroha",
  "Anand",
  "Anantapur",
  "Anantapuram",
  "Arrah",
  "Asansol",
  "Avadi",
  "Bahraich",
  "Bally",
  "Baranagar",
  "Barasat",
  "Bardhaman",
  "Bareilly",
  "Bathinda",
  "Begusarai",
  "Belgaum",
  "Bellary",
  "Berhampore",
  "Berhampur",
  "Bhagalpur",
  "Bhalswa-jahangir-pur",
  "Bharatpur",
  "Bhatpara",
  "Bhavnagar",
  "Bhilai",
  "Bhilwara",
  "Bhind",
  "Bhiwandi",
  "Bhiwani",
  "Bhopal",
  "Bhubaneswar",
  "Bhusawal",
  "Bidar",
  "Bidhannagar",
  "Bihar-sharif",
  "Bikaner",
  "Bilaspur",
  "Bokaro",
  "Bulandshahr",
  "Burhanpur",
  "Chandigarh",
  "Chapra",
  "Chittoor",
  "Coimbatore",
  "Cuttack",
  "Darbhanga",
  "Davanagere",
  "Dehradun",
  "Delhi",
  "Deoghar",
  "Dewas",
  "Dhanbad",
  "Dhule",
  "Dindigul",
  "Durg",
  "Durgapur",
  "Eluru",
  "Erode",
  "Etawah",
  "Faridabad",
  "Farrukhabad",
  "Fatehpur",
  "Gandhidham",
  "Gandhinagar",
  "Gaya",
  "Gopalpur",
  "Guntur",
  "Gurgaon",
  "Guwahati",
  "Gwalior",
  "Haldia",
  "Hapur",
  "Haridwar",
  "Hospet",
  "Gulbargahowrah",
  "Hubli-dharwad",
  "Ichalkaranji",
  "Imphal",
  "Indore",
  "Jabalpur",
  "Jaipur",
  "Jalandhar",
  "Jalgaon",
  "Jalna",
  "Jammu",
  "Jamnagar",
  "Jamshedpur",
  "Jhansi",
  "Jodhpur",
  "Junagadh",
  "Kadapa",
  "Kakinada",
  "Kalyan-dombivli",
  "Kamarhati",
  "Kanpur",
  "Karawal-nagar",
  "Karimnagar",
  "Karnal",
  "Katni",
  "Khammam",
  "Khandwa",
  "Kharagpur",
  "Khora-ghaziabad",
  "Kirari-suleman-nagar",
  "Kochi",
  "Kolhapur",
  "Kollam",
  "Korba",
  "Kota",
  "Kozhikode",
  "Kulti",
  "Kurnool",
  "Latur",
  "Loni",
  "Ludhiana",
  "Madhyamgram",
  "Madurai",
  "Maheshtala",
  "Malda",
  "Malegaon",
  "Mangalore",
  "Mathura",
  "Mau",
  "Meerut",
  "Mira-bhayandar",
  "Mirzapur",
  "Moradabad",
  "Morbi",
  "Morena",
  "Munger",
  "Muzaffarnagar",
  "Muzaffarpur",
  "Mysore",
  "Nadiad",
  "Nagercoil",
  "Nagpur",
  "Naihati",
  "Nanded",
  "Nandyal",
  "Nangloi-jat",
  "Nashik",
  "Navi-mumbai",
  "Nellore",
  "New-delhi",
  "Nizamabad",
  "Noida",
  "North-dumdum",
  "Ongole",
  "Orai",
  "Pali",
  "Pallavaram",
  "Panchkula",
  "Panihati",
  "Panipat",
  "Parbhani",
  "Patiala",
  "Patna",
  "Pimpri-chinchwad",
  "Pondicherry",
  "Pune",
  "Puri",
  "Purnia",
  "Raebareli",
  "Raichur",
  "Raipur",
  "Rajahmundry",
  "Rajkot",
  "Rajpur-sonarpur",
  "Ramagundam",
  "Rampur",
  "Ranchi",
  "Ratlam",
  "Rewa",
  "Rohtak",
  "Rourkela",
  "Sagar",
  "Saharanpur",
  "Salem",
  "Sambalpur",
  "Sambhal",
  "Sangli-miraj-%26-kupwad",
  "Satara",
  "Satna",
  "Secunderabad",
  "Shahjahanpur",
  "Shimoga",
  "Sikar",
  "Silchar",
  "Siliguri",
  "Singrauli",
  "Solapur",
  "Sonipat",
  "South-dumdum",
  "Sri-ganganagar",
  "Surat",
  "Tenali",
  "Thane",
  "Thanjavur",
  "Thoothukudi",
  "Tirunelveli",
  "Tirupati",
  "Tiruppur",
  "Tiruvottiyur",
  "Tumkur",
  "Udaipur",
  "Ujjain",
  "Ulhasnagar",
  "Uluberia",
  "Uzhavarkarai",
  "Vadodara",
  "Varanasi",
  "Vasai-virar",
  "Vijayanagaram",
  "Vijayawada",
  "Visakhapatnam",
  "Warangal",
  "Yamunanagar"
]

export const getStaticPaths = async () => {
  const res = await fetch(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/pages`)
  const result = await res.json()
  const urls = result.map((e: any) => ({
    params: { id: e.slug.toString() }
  }))

  return {
    paths: urls,
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const res = await fetch(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/pages?slug=${params.id}`)
  const result = await res.json()
  if (!result || result.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      result: result,
    },
    revalidate: 10
  }
}

export default function Home({ result }: { result: any }) {
  function formatQuery(query: string) {
    let formattedQuery = query?.replace(/-/g, ' ');
    formattedQuery = formattedQuery?.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
    return formattedQuery;
  }

  const router = useRouter();
  let data = result[0]
  console.log(data.content.rendered);
  let service = data?.slug
  let formattedQuery = formatQuery(service)
  const videoId = data?.acf.text;
  const [player, setPlayer] = useState<any>(null);
  const [isOpen, setIsOpen] = useState<any>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
    if (player) {
      player.playVideo();
    }
  };

  let hf = `https://www.registerkaro.in/${service}`

  if (data === undefined) {
    return (
      <CustomDefault />
    )
  }

  return (
    <>
      {
        data && <div className="serviceId">
          <Head>
            <title>{data.acf.title} | RegisterKaro</title>
            <meta name="description" content={data.yoast_head_json.description} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={hf} />
            <meta property="og:title" content={data.acf.title} />
            <meta property="og:description" content={data.yoast_head_json.description} />
          </Head>
          <Organization />
          <Product />
          {/* <FAQPage /> */}
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="YouTube Video"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                padding: '0',
                maxWidth: '80%',
                maxHeight: '80%',
                overflow: 'hidden',
              },
            }}
          >
            <div style={{ position: 'relative' }}>
              <button onClick={closeModal} style={{
                borderStyle: 'none',
                backgroundColor: 'transparent',
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 9999,
                color: 'white',
                fontWeight: 'bold'
              }}>X</button>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe
                  width="700"
                  height="400"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Modal>
          <div className="header-service">
            <Image
              src={bgImage}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={true}
              className="background-image"
            />
            <div className="header-content">
              <h1>{data?.acf.title}</h1>
              <p>{data?.acf.paragraph}</p>
              {/* <button onClick={openModal} className="youtube-btn">
                <Image className="img" src={Youtube} alt="image" height={30} width={30} />
                <span className="underline">Click to watch 60 seconds video</span>
              </button> */}
              <p className="business"><span className="font-weight-700">50,000+</span> businesses incorporated since 2021</p>
            </div>
            <div className="zoho">
              <ZohoFormService service={service} />
            </div>
          </div>
          <div className="content-body">
            <div className="content">
              {data && (
                <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
              )
              }
            </div>
            {/* {faq && <FaqTemplate faqItems={faq} />} */}
            <div className="sidebar display-1200-none">
              <div className="sticky">
                <ZohoFormService service={service} />
              </div>
            </div>
          </div >
          <div className="partners">
            <h2>Trusted by 400,000 clients and counting, including …</h2>
            <SwiperSlider />
          </div>
          <Blog isBg="yes" />
          <Testimonial isBg="" />
          <RegistrationLinks formattedQuery={formattedQuery} state={state} Query={service} city={city} />
          <Popular />
        </div>
      }
    </>
  );
}