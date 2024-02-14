import {
  AddressBook,
  Globe,
  IdentificationBadge,
  IdentificationCard,
  MapPin,
  Person,
  Signpost
} from "phosphor-react";

const Director = ({ director }: any) => {
  if (!director) return null;

  return (
    <section className="card shadow-sm p-3 mb-3">
      <h5 className="mt-3 mb-n1 text-capitalize fw-semibold text-primary ms-lg-2 ms-1">
        {director.nameOfApplicant}
      </h5>
      <hr />
      <div className="row row-cols-lg-2 row-cols-1 p-3">
        <p className="text-capitalize">
          <Globe size={24} weight="duotone" /> Country: {director.paddCountry}
        </p>
        <p className="text-capitalize">
          <MapPin size={24} weight="duotone" /> City: {director.paddCity}
        </p>
        <p className="text-capitalize">
          <Signpost size={24} weight="duotone" /> PinCode: {director.paddPinCode}
        </p>
        <p className="text-capitalize">
          <MapPin size={24} weight="duotone" /> State: {director.paddState}
        </p>
        <p className="text-capitalize"><Person size={24} /> fatherName: {director.firstLastName}</p>
        <p className="text-capitalize">
          <IdentificationBadge size={24} weight="duotone" /> nationality: {director.nationality}
        </p>
        <p className="text-capitalize">
          residentOfIndia: {director.residentOfIndia}
        </p>
        <p className="text-capitalize">
          <IdentificationCard size={24} weight="duotone" /> Id: {director.id}
        </p>
        <p className="text-capitalize"><AddressBook size={24} /> permanentAddress: {director.permenantAddress}{" "}
        </p>
        <p className="text-capitalize"><AddressBook size={24} /> presentAddr: {director.presentAddr}</p>
      </div>
    </section>
  );
};

export default Director;