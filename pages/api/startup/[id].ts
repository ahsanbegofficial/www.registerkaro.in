import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const url = 'mongodb+srv://BMICalculator:BMICalculator1234@cluster0.mqnnwti.mongodb.net/webBMI?retryWrites=true&w=majority';
const dbName = 'newregisterkaro';
const collectionName = 'registrations';

let cityArr = [
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
    "Mango",
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
    "Yamunanagar",
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

function formatCityName(city: any) {
    const words = city.split('-');
    const formattedWords = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const Query = req.query.id

    if (typeof Query === "string" && Query.includes("-in-")) {
        const [name, city] = Query.split("-in-");
        const formattedCity = formatCityName(city);
        const isCityValid = cityArr.includes(formattedCity)
        if (isCityValid) {
            try {
                const client = new MongoClient(url);
                await client.connect();

                const db = client.db(dbName);
                const collection = db.collection(collectionName);
                const data = await collection.findOne({});

                if (data) {
                    // const finalData = data[name as string];
                    const finalData = data['allData' as string];
                    if (finalData && finalData.upper) {
                        let htmlResponse = `
            <html>
              <body>
                ${finalData.upper}
              </body>
            </html>`;
                        if (finalData.cities && finalData.cities[city]) {
                            const cityTemplate = finalData.cities[city];
                            htmlResponse += `
            <html>
                <body>
                    ${cityTemplate}
                </body>
            </html>`;
                            if (finalData.lower) {
                                htmlResponse += `
                    <html>
                        <body>
                            ${finalData.lower}
                        </body>
                    </html>`;
                            }
                        }
                        res.setHeader("Content-Type", "text/html");
                        res.status(200).send(htmlResponse);
                    } else {
                        res.status(404).send(false);
                    }
                    await client.close();
                }
            } catch (error) {
                res.status(500).send(false);
            }
        } else {
            res.status(500).send(false);
        }
    } else {
        res.status(500).send(false);
    }
}