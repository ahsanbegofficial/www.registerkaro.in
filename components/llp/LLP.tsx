import React from "react";
import {At,Buildings,Calendar,ChartLine,ChartPieSlice,Factory,File,Handshake,IdentificationCard,Info,ListNumbers,MapPin,UsersThree} from "phosphor-react";

const iconData = [
  { icon: <IdentificationCard size={24} weight="duotone" />, label: "LLPName" },
  { icon: <UsersThree size={24} weight="duotone" />, label: "NoOfPartners" },
  { icon: <ListNumbers size={24} weight="duotone" />, label: "ROCCode" },
  { icon: <MapPin size={24} weight="duotone" />, label: "RegisteredAddress" },
  { icon: <At size={24} weight="duotone" />, label: "EmailID" },
  { icon: <Buildings size={24} weight="duotone" />, label: "PreviousFirmComp" },
  { icon: <Info size={24} weight="duotone" />, label: "DescriptionMainDevi" },
  { icon: <File size={24} weight="duotone" />, label: "FYSolvencyFiled" },
  { icon: <File size={24} weight="duotone" />, label: "AnualReturnFiled" },
  { icon: <ChartLine size={24} weight="duotone" />, label: "LLPStatus" },
  { icon: <Calendar size={24} weight="duotone" />, label: "DOI" },
  { icon: <Handshake size={24} weight="duotone" />, label: "NoOfDesignatedPartner" },
  { icon: <ChartPieSlice size={24} weight="duotone" />, label: "Contribution" },
  { icon: <Factory size={24} weight="duotone" />, label: "IndustrialActi" },
];

const LLP = ({ llp }: any) => {
  if (!llp) return null;

  return (
    <section className="card shadow-sm p-lg-5 p-3 mb-3 d-grid gap-2">
      <h5 className="mt-3 mb-n1 text-capitalize fw-semibold text-primary ms-lg-2 ms-1">LLPIN: {llp.LLPIN}</h5>
      <hr />
      <div className="row row-cols-lg-2 row-cols-1">
        {iconData.map((item, index) => (
          <React.Fragment key={index}>
            <p className="my-3">{item.icon} {item.label}</p>
            <span>{llp[item.label]}</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default LLP;