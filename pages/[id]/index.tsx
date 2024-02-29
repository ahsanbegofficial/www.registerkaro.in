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
  "maharashtra",
  "jharkhand",
  "kashmir",
  "puducherry",
  "karnataka",
  "madhya-pradesh",
  "andhra-pradesh",
  "himachal-pradesh",
  "tamil-nadu",
  "odisha",
  "assam",
  "arunachal-pradesh",
  "gujarat",
  "chandigarh",
  "jammu-and-kashmir",
  "manipur",
  "andaman-and-nicobar-islands",
  "bihar",
  "chhattisgarh",
  "dadra-and-nagar-haveli",
  "daman-and-diu",
  "goa",
  "haryana",
  "kerala",
  "ladakh",
  "lakshadweep",
  "meghalaya",
  "mizoram",
  "nagaland",
  "punjab",
  "rajasthan",
  "sikkim",
  "telangana",
  "tripura",
  "uttar-pradesh",
  "uttarakhand",
  "west-bengal"
]

let city = [
  "mumbai",
  "firozabad",
  "new-delhi",
  "srinagar",
  "bangalore",
  "ghaziabad",
  "hyderabad",
  "thiruvananthapuram",
  "ahmedabad",
  "chennai",
  "gorakhpur",
  "kolkata",
  "thrissur",
  "gulbarga",
  "lucknow",
  "tiruchirappalli",
  "agartala",
  "agra",
  "ahmednagar",
  "aizawl",
  "ajmer",
  "akola",
  "aligarh",
  "alwar",
  "ambala",
  "ambarnath",
  "ambattur",
  "amravati",
  "amritsar",
  "amroha",
  "anand",
  "anantapur",
  "anantapuram",
  "arrah",
  "asansol",
  "avadi",
  "bahraich",
  "bally",
  "baranagar",
  "barasat",
  "bardhaman",
  "bareilly",
  "bathinda",
  "begusarai",
  "belgaum",
  "bellary",
  "berhampore",
  "berhampur",
  "bhagalpur",
  "bhalswa-jahangir-pur",
  "bharatpur",
  "bhatpara",
  "bhavnagar",
  "bhilai",
  "bhilwara",
  "bhind",
  "bhiwandi",
  "bhiwani",
  "bhopal",
  "bhubaneswar",
  "bhusawal",
  "bidar",
  "bidhannagar",
  "bihar-sharif",
  "bikaner",
  "bilaspur",
  "bokaro",
  "bulandshahr",
  "burhanpur",
  "chandigarh",
  "chapra",
  "chittoor",
  "coimbatore",
  "cuttack",
  "darbhanga",
  "davanagere",
  "dehradun",
  "delhi",
  "deoghar",
  "dewas",
  "dhanbad",
  "dhule",
  "dindigul",
  "durg",
  "durgapur",
  "eluru",
  "erode",
  "etawah",
  "faridabad",
  "farrukhabad",
  "fatehpur",
  "gandhidham",
  "gandhinagar",
  "gaya",
  "gopalpur",
  "guntur",
  "gurgaon",
  "guwahati",
  "gwalior",
  "haldia",
  "hapur",
  "haridwar",
  "hospet",
  "gulbargahowrah",
  "hubli-dharwad",
  "ichalkaranji",
  "imphal",
  "indore",
  "jabalpur",
  "jaipur",
  "jalandhar",
  "jalgaon",
  "jalna",
  "jammu",
  "jamnagar",
  "jamshedpur",
  "jhansi",
  "jodhpur",
  "junagadh",
  "kadapa",
  "kakinada",
  "kalyan-dombivli",
  "kamarhati",
  "kanpur",
  "karawal-nagar",
  "karimnagar",
  "karnal",
  "katni",
  "khammam",
  "khandwa",
  "kharagpur",
  "khora-ghaziabad",
  "kirari-suleman-nagar",
  "kochi",
  "kolhapur",
  "kollam",
  "korba",
  "kota",
  "kozhikode",
  "kulti",
  "kurnool",
  "latur",
  "loni",
  "ludhiana",
  "madhyamgram",
  "madurai",
  "maheshtala",
  "malda",
  "malegaon",
  "mangalore",
  "mango",
  "mathura",
  "mau",
  "meerut",
  "mira-bhayandar",
  "mirzapur",
  "moradabad",
  "morbi",
  "morena",
  "munger",
  "muzaffarnagar",
  "muzaffarpur",
  "mysore",
  "nadiad",
  "nagercoil",
  "nagpur",
  "naihati",
  "nanded",
  "nandyal",
  "nangloi-jat",
  "nashik",
  "navi-mumbai",
  "nellore",
  "new-delhi",
  "nizamabad",
  "noida",
  "north-dumdum",
  "ongole",
  "orai",
  "pali",
  "pallavaram",
  "panchkula",
  "panihati",
  "panipat",
  "parbhani",
  "patiala",
  "patna",
  "pimpri-chinchwad",
  "pondicherry",
  "pune",
  "puri",
  "purnia",
  "raebareli",
  "raichur",
  "raipur",
  "rajahmundry",
  "rajkot",
  "rajpur-sonarpur",
  "ramagundam",
  "rampur",
  "ranchi",
  "ratlam",
  "rewa",
  "rohtak",
  "rourkela",
  "sagar",
  "saharanpur",
  "salem",
  "sambalpur",
  "sambhal",
  "satara",
  "satna",
  "secunderabad",
  "shahjahanpur",
  "shimoga",
  "sikar",
  "silchar",
  "siliguri",
  "singrauli",
  "solapur",
  "sonipat",
  "south-dumdum",
  "sri-ganganagar",
  "surat",
  "tenali",
  "thane",
  "thanjavur",
  "thoothukudi",
  "tirunelveli",
  "tirupati",
  "tiruppur",
  "tiruvottiyur",
  "tumkur",
  "udaipur",
  "ujjain",
  "ulhasnagar",
  "uluberia",
  "uzhavarkarai",
  "vadodara",
  "varanasi",
  "vasai-virar",
  "vijayanagaram",
  "vijayawada",
  "visakhapatnam",
  "warangal",
  "yamunanagar"
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