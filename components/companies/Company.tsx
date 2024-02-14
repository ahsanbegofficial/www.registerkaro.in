import React from "react";
import { IdentificationCard, Buildings, Folder, TreeStructure, Briefcase, ChartBar, ChartPieSlice, CheckCircle, ChartLineUp, ProjectorScreen, Factory, TrademarkRegistered, UsersThree, CalendarCheck, Calendar, Scales, MapPin, EnvelopeOpen } from "phosphor-react";

const Company = ({ company }: any) => {
  if (!company) return null;

  return (
    <section>
      <section className="card shadow-sm p-lg-5 p-3 mb-3 d-grid gap-2">
        <h5 className="mb-n2 text-capitalize fw-semibold text-primary ms-1">{company.CompanyName}</h5>
        <hr />
        <p className="mt-n1" style={{ fontSize: "13px" }}>
          <span className="text-capitalize">{company.CompanyName}</span> was incorporated in {company.IncorporationDateForm}. It is registered at {company.RegisteredAddress}. The company status is {company.CompanyStatus}. Its a company limited by shares having an authorized capital of Rs {company.AuthorisedCapital} and a paid-up capital of Rs {company.PaidupCapital} as per MCA. and it has filed its Annual Returns and Financial Statements up to {company.DateofBalanceSheet} (FY 2021-2022).
        </p>
        <div className="row row-cols-2 mt-n2">
          <p>
            <IdentificationCard size={25} weight="duotone" /> CIN
          </p>
          <p>{company.CIN}</p>
          <p>
            <Buildings size={25} weight="duotone" /> ROCcode
          </p>
          <p>{company.ROCCode}</p>
          <p>
            <Folder size={25} weight="duotone" /> Company Category
          </p>
          <p> {company.CompanyCategory}</p>
          <p>
            <TreeStructure size={24} weight="duotone" /> Company Subcategory
          </p>
          <p>{company.CompanySubCategory}</p>
          <p>
            <Briefcase size={24} weight="duotone" /> Class of Company
          </p>
          <p>{company.ClassofCompany}</p>
          <p>
            <ChartBar size={24} weight="duotone" /> Authorised Capital
          </p>
          <p> {company.AuthorisedCapital}</p>
          <p>
            <ChartPieSlice size={24} weight="duotone" /> Paidup Capital
          </p>
          <p> {company.PaidupCapital}</p>
          <p>
            <CheckCircle size={24} weight="duotone" /> Listed or Not
          </p>
          <p> {company.WhetherListedornot}</p>
          <p>
            <ChartLineUp size={24} weight="duotone" /> Suspended Stock Exchange
          </p>
          <p> {company.Suspendedatstockexchange}</p>
          <p>
            <ProjectorScreen size={24} weight="duotone" /> Status
          </p>
          <p> {company.CompanyStatus}</p>
          <p>
            <Factory size={24} weight="duotone" /> Industry:
          </p>
          <p> {company.Industry}</p>
          <p>
            <TrademarkRegistered size={24} weight="duotone" /> Registration Number
          </p>
          <p>{company.RegistrationNumber}</p>
          <p>
            <UsersThree size={24} weight="duotone" /> Number of Members
          </p>
          <p>{company.NumberofMembers}</p>
          <p>
            <CalendarCheck size={24} weight="duotone" /> Incorporation Dateform
          </p>
          <p>{company.IncorporationDateForm}</p>
          <p>
            <CalendarCheck size={24} weight="duotone" /> Date of Incorporation
          </p>
          <p> {company.DateofIncorporation}</p>
          <p>
            <Calendar size={24} weight="duotone" /> Date of last AGM
          </p>
          <p> {company.DateoflastAGM}</p>
          <p>
            <Scales size={24} weight="duotone" /> Date of Balance Sheet
          </p>
          <p> {company.DateofBalanceSheet}</p>
        </div>
      </section>
      <div className="mt-3 card shadow-sm p-lg-4 p-3 mb-3 d-grid gap-1">
        <h6 className="text-start text-primary fw-bold">Financials</h6>
        <div className="row row-cols-1 mt-3 position-relative">
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Registered Address
          </p>
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Other Address
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <div className="card container w-75 text-center py-4 position-absolute top-0 start-50 translate-middle-x">
            <h6 className="text-primary fw-bold">Financials</h6>
            <p>This information is available in our reports and to subscription users.</p>
          </div>
        </div>
      </div>
      <div className="mt-3 card shadow-sm p-lg-4 p-3 mb-3 d-grid gap-1">
        <h6 className="text-start text-primary fw-bold">Shareholders</h6>
        <div className="row row-cols-1 mt-3 position-relative">
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Registered Address
          </p>
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Other Address
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <div className="card container w-75 text-center py-4 position-absolute top-0 start-50 translate-middle-x">
            <h6 className="text-primary fw-bold">Shareholders</h6>
            <p>This information is available in our reports and to subscription users.</p>
          </div>
        </div>
      </div>
      <div className="mt-3 card shadow-sm p-lg-4 p-3 mb-3 d-grid gap-1">
        <h6 className="text-start text-primary fw-bold">Documents</h6>
        <div className="row row-cols-1 mt-3 position-relative">
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Registered Address
          </p>
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Other Address
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <div className="card container w-75 text-center py-4 position-absolute top-0 start-50 translate-middle-x">
            <h6 className="text-primary fw-bold">Documents</h6>
            <p>This information is available in our reports and to subscription users.</p>
          </div>
        </div>
      </div>
      <div className="mt-3 card shadow-sm p-lg-4 p-3 mb-3 d-grid gap-1">
        <h6 className="text-start text-primary fw-bold">Competition</h6>
        <div className="row row-cols-1 mt-3 position-relative">
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Registered Address
          </p>
          <p className="blurry-text">
            <MapPin size={24} weight="duotone" /> Other Address
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <p className="blurry-text">
            <EnvelopeOpen size={24} weight="duotone" /> Email Id
          </p>
          <div className="card container w-75 text-center py-4 position-absolute top-0 start-50 translate-middle-x">
            <h6 className="text-primary fw-bold">Competition</h6>
            <p>This information is available in our reports and to subscription users.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;