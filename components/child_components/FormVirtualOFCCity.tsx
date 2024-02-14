import Image from "next/image";
import freshworks from "../../assets/images/services/freshworks.png";
import registerKaro from "../../assets/images/services/register-karo.png";
import zoho from "../../assets/images/services/zoho.png";
import ZohoformVirtualOFCCity from "./ZohoformVirtualOFCCity";

interface FormVirtualOFCCityProps {
	Query: any;
}

export const FormVirtualOFCCity: React.FC<FormVirtualOFCCityProps> = ({ Query }) => {
  return (
    <div className={'virtual-ofc-form bg-secondary text-white shadow-box rounded col-lg-4 col-12  mt-md-0  vh-md-90 d-flex flex-column justify-content-center align-items-center mb-3'}>
      <div >
        <ZohoformVirtualOFCCity Query={Query}/>
      </div>
      <div className="bg-white w-100 d-flex justify-content-center align-items-center text-green my-4 d-grid zohoForm">
        <Image height={30} width={130} src={freshworks.src} alt="freshworks" />
        <div className=" rounded-circle bg-secondary px-2 py-1 fw-bold">+</div>
        <Image height={34} width={135} src={registerKaro.src} alt="registerKaro" />
      </div>
      <div className="w-75 px-md-4 p-2 borderTb fw-bold font-14">What more?... Every business availing our virtual office service gets $ 4,000 worth of credits to be used on Freshworks World Class business solutions.</div>
      <div className="text-center my-4">
        <Image height={35} width={270} src={zoho.src} alt="zohoImage" />
      </div>
    </div>
  )
}
