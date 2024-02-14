import React from "react";
import Link from "next/link";

const Companies = ({ company }: any) => {
  if (!company) return null;

  return (
    <section className="card shadow bg-body p-3 mb-3 border-0 rounded-3 box-shadow">
      <h4>
        <Link href={`/companies/${company.CIN}/${company.CompanyName?.replace(/\s/g,"-")}`} className="my-2 text-capitalize fw-semibold text-primary">
          {company.CompanyName}
        </Link>
      </h4>
      <h6 className="my-2 text-capitalize fw-semibold">{company.RegisteredAddress}</h6>
      <hr />
      <div className="d-flex justify-content-between align-items-center row row-cols-lg-3 row-cols-1 d-grid gap-1">
        <h6 className="fw-semibold">Status: {company.CompanyStatus}</h6>
        <h6 className="fw-semibold">CIN: {company.CIN}</h6>
        <h6 className="fw-semibold">Industry: {company.Industry}</h6>
        <h6 className="fw-semibold">Class: {company.ClassofCompany}</h6>
      </div>
      <hr />
      <h6 className="fw-semibold">
        {company.directortocompany?.length > 0 ? "Directors: " : ""}
        {company.directortocompany?.map((dir: any, i: number) => (
          <span key={i} className="ms-1">
            <Link href={`/services/directors/${dir.DIN.id}`}>{dir.DIN.name}</Link>
            {i !== company.directortocompany?.length - 1 ? ", " : ""}
          </span>
        ))}
      </h6>
    </section>
  );
};

export default Companies;