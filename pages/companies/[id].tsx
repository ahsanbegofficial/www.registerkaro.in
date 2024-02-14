import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Briefcase,
  Buildings,
  CheckCircle,
  ClipboardText,
  CreditCard,
  EnvelopeOpen,
  Handshake,
  MapPin,
  Money,
  Trophy,
  Users,
} from "phosphor-react";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import useSWR from "swr";
import { Loading } from "../../components/child_components/Loading";
import Company from "../../components/companies/Company";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR(`/api/companies/${id}`, fetcher);

  const [ageOfCompany, setAgeOfCompany]: any = useState("-");
  const [modalOpen, setModalOpen] = useState(false);
  const [contentNumber, setContentNumber] = useState(0);

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const calculateAgeOfCompany = (date: string) => {
      const today = new Date();
      const estd = new Date(date);
      const year = today.getFullYear() - estd.getFullYear();
      const month = today.getMonth() - estd.getMonth();
      const day = today.getDate() - estd.getDate();

      if (month > 0 && year > 0) {
        setAgeOfCompany(
          `${year} ${year > 1 ? "years" : "year"} ${month} ${month > 1 ? "months" : "month"
          }`
        );
      } else if (day > 0 && month > 0) {
        setAgeOfCompany(
          `${month} ${month > 1 ? "months" : "month"} ${day} ${day > 1 ? "days" : "day"
          }`
        );
      }
    };
    if (data) {
      calculateAgeOfCompany(data[0]?.DateofIncorporation.toString());
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />

  const companies = Array.isArray(data) ? data : [data];
  let hf = `https://www.registerkaro.in/companies/${id}`

  return (
    <div>
      <Head>
        <title>Company Data | RegisterKaro</title>
        <meta name="description" content="CRM made in RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={hf} />
        <meta property="og:title" content="Companies Data  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <Modal show={modalOpen} onHide={toggleModalOpen} centered>
        <Modal.Header closeButton>
          <Modal.Title>Buy Report or membership</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-between">
          <div className="card shadow text-center p-3">
            <h6>Single Report</h6>
            <p>Comprehensive Company Report.</p>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h6 className="mb-0"> ₹ 799/</h6> <p className="mb-0">Report</p>
            </div>
            <p>
              <ul className="text-start">
                <li>Company Details</li>
                <li>One Comprehensive company Report</li>
                <li>Directors & Signatory details</li>
                <li>Upto Four year Financials</li>
                <li>Upto Ten Years company documents</li>
                <li>Legal Cases</li>
              </ul>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  className="nav-link btn btn-warning fw-bold w-50 bg-orange"
                  href="/login"
                >
                  Buy Reports
                </Link>
              </div>
            </p>
          </div>
          <div className="card shadow text-center p-3 ms-3">
            <h6>Single Report</h6>
            <p>Comprehensive Company Report.</p>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <h6 className="mb-0"> ₹ 799/</h6> <p className="mb-0">Report</p>
            </div>
            <p className="text-center mb-0">
              <ul className="text-start">
                <li>Company Details</li>
                <li>One Comprehensive company Report</li>
                <li>Directors & Signatory details</li>
                <li>Upto Four year Financials</li>
                <li>Upto Ten Years company documents</li>
                <li>Legal Cases</li>
              </ul>
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  className="nav-link btn btn-warning fw-bold w-50 bg-orange"
                  href="/login"
                >
                  View Plans
                </Link>
              </div>
            </p>
          </div>
        </Modal.Body>
      </Modal>

      <main className="container-fluid mt-4 d-lg-flex justify-content-lg-between justify-content-sm-center">
        <div className="col-lg-2 d-lg-block d-none">
          <div
            className="card p-4 d-grid gap-3 position-sticky"
            style={{
              top: "18.3em",
            }}
          >
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 0 && "active"
                }`}
              onClick={() => {
                setContentNumber(0);
              }}
            >
              <Buildings size={24} weight="duotone" /> Company overview
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 1 && "active"
                }`}
              onClick={() => {
                setContentNumber(1);
              }}
            >
              <Users size={24} weight="duotone" /> People and contacts
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 2 && "active"
                }`}
              onClick={() => {
                setContentNumber(2);
              }}
            >
              <CreditCard size={24} weight="duotone" /> Charges
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 3 && "active"
                }`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <Handshake size={24} weight="duotone" /> Control and Ownership
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 4 && "active"
                }`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <Trophy size={24} weight="duotone" /> Competition
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 5 && "active"
                }`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <CheckCircle size={24} weight="duotone" /> Compliance check
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 6 && "active"
                }`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <Money size={24} weight="duotone" /> Financials
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 7 && "active"
                }`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <Briefcase size={24} weight="duotone" /> Legal cases
            </h6>
            <h6
              className={`mb-0 cursor-pointer ${contentNumber === 8 && "active"
                }`}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <ClipboardText size={24} weight="duotone" /> Documents
            </h6>
          </div>
        </div>
        {contentNumber === 0 ? (
          <>
            <div className="col-lg-5 col-12">
              {companies.map((company: any, i: number) => (
                <Company key={i} company={company} />
              ))}
            </div>
            <div className="col-lg-4 col-12">
              {companies[0]?.directortocompany.length > 0 ? (
                <div className="card shadow-sm p-lg-5 p-3 mb-3 d-grid gap-1">
                  <h6 className="mt-lg-n4 text-start fw-bold text-primary">
                    Directors & Signatories of{" "}
                    <span className="text-capitalize">
                      {companies[0]?.CompanyName}
                    </span>
                  </h6>
                  <hr className="mt-0" />
                  {companies[0]?.directortocompany.map((dir: any, i: number) => {
                    const director = dir.DIN;
                    return (
                      <div key={i}>
                        <Link href={`/directors/${director.id}`}>
                          <h6 className="my-2 text-capitalize fw-semibold text-primary">
                            {director.name}
                          </h6>
                        </Link>

                        <div className="d-md-flex justify-content-lg-between d-grid gap-2">
                          <div>{director.nationality}</div>
                        </div>
                        {i < companies[0]?.directortocompany.length - 1 && (
                          <hr className="mb-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : null}
              <div className="mt-3 card shadow-sm p-lg-5 p-3 mb-3">
                <h6 className="mt-lg-n4 text-start text-primary fw-bold">
                  Contact Details of{" "}
                  <span className="text-capitalize">
                    {companies[0]?.CompanyName}
                  </span>
                </h6>
                {companies.map((company: any, i: number) => {
                  return (
                    <div key={i} className="row row-cols-2 mt-3">
                      <p>
                        <MapPin size={24} weight="duotone" /> Registered Address
                      </p>
                      <p>{company.RegisteredAddress}</p>
                      <p>
                        <MapPin size={24} weight="duotone" /> Other Address
                      </p>
                      <p>{company.OtherAdr}</p>
                      <p>
                        <EnvelopeOpen size={24} weight="duotone" /> Email Id
                      </p>
                      <p>{company.EmailId}</p>
                    </div>
                  );
                })}
              </div>
              <div
                className="mt-3 card shadow-sm p-lg-4 p-3 mb-3 d-grid gap-1"
                id="charges"
              >
                <h6 className="text-start text-primary fw-bold">
                  Charges(loans) of{" "}
                  <span className="text-capitalize">
                    {companies[0]?.CompanyName}
                  </span>
                </h6>
                {companies.map((company: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className="row row-cols-2 mt-3 position-relative"
                    >
                      <p className="blurry-text">
                        <MapPin size={24} weight="duotone" /> Registered Address
                      </p>
                      <p>{company.RegisteredAddress}</p>
                      <p className="blurry-text">
                        <MapPin size={24} weight="duotone" /> Other Address
                      </p>
                      <p className="blurry-text">{company.OtherAdr}</p>
                      <p className="blurry-text">
                        <EnvelopeOpen size={24} weight="duotone" /> Email Id
                      </p>
                      <p className="blurry-text">{company.EmailId}</p>
                      <p className="blurry-text">
                        <EnvelopeOpen size={24} weight="duotone" /> Email Id
                      </p>
                      <p className="blurry-text">{company.EmailId}</p>

                      <div className="card container w-75 text-center py-4 position-absolute top-0 start-50 translate-middle-x">
                        <h6 className="text-primary fw-bold">Charges</h6>
                        <p>
                          There are{" "}
                          <span className="fw-bold">no open charges</span>{" "}
                          registered against the company as per our records.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 card shadow-sm p-lg-4 p-3 mb-3 d-grid gap-1">
                <h6 className="text-start text-primary fw-bold">Legal Cases</h6>
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
                    <h6 className="text-primary fw-bold">Legal Cases</h6>
                    <p>
                      This information is available in our reports and to
                      subscription users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : contentNumber === 1 ? (
          <>
            <div className="col-lg-2 col-12">
              {companies[0]?.directortocompany.length > 0 ? (
                <div className="card shadow-sm px-lg-5 py-lg-4 p-3 d-grid gap-1">
                  <h6 className="text-start fw-bold text-primary">Filter</h6>
                  <hr className="mt-0" />
                  <h6 className="fw-bolder">Positions</h6>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Current{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Resigned{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                  <h6 className="fw-bolder mt-3">Role</h6>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Current{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Resigned{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                  <h6 className="fw-bolder mt-3">DIN Status</h6>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Current{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Resigned{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                  <h6 className="fw-bolder mt-3">Nationality</h6>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Current{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                  <p className="d-flex justify-content-start align-items-center mb-0">
                    <input type="checkbox" name="current" />
                    <label htmlFor="current" className="ms-2">
                      Resigned{" "}
                      <span>{`(${companies[0]?.directortocompany?.length})`}</span>
                    </label>
                  </p>
                </div>
              ) : null}
            </div>
            <div className="col-lg-4 ms-md-n5 col-12">
              {companies[0]?.directortocompany.length > 0 ? (
                <div className="card shadow-sm px-lg-5 py-lg-4 p-3 mb-3 d-grid gap-1">
                  <h6 className="text-start fw-bold text-primary">
                    Directors & Chief Executives Details
                  </h6>
                  <p>
                    Directors & Signatories of{" "}
                    <span className="text-capitalize">
                      {companies[0]?.CompanyName}
                    </span>
                  </p>
                  <hr className="mt-0 mb-1" />
                  {companies[0]?.directortocompany.map((dir: any, i: number) => {
                    const director = dir.DIN;
                    return (
                      <div key={i}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-start align-items-center">
                            <Image
                              className="border rounded-circle img-fluid"
                              width={50}
                              height={50}
                              src={"https://i.pravatar.cc/150"}
                              alt="Director"
                            />
                            <div className="ms-3">
                              <Link href={`/services/directors/${director.id}`}>
                                <h6 className="my-2 text-capitalize fw-semibold">
                                  {director.name}
                                </h6>
                              </Link>
                            </div>
                          </div>
                          <div className="text-end">
                            <p className="mb-0 text-capitalize">
                              {director.changedDesignation}{" "}
                              <Handshake size={22} weight="duotone" />
                            </p>
                            <p className="mb-0">
                              {director.addCity}, {director.nationality}
                              <MapPin size={22} weight="duotone" />
                            </p>
                          </div>
                        </div>
                        {i < companies[0]?.directortocompany.length - 1 && (
                          <hr className="mb-1" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <div className="col-lg-3 col-12">
              <div className="mt-1 card shadow-sm p-lg-4 p-3 mb-3 d-grid gap-1">
                <div className="row row-cols-2 mt-3 position-relative">
                  <p className="blurry-text">Registered Address</p>
                  <p className="blurry-text">Other Address</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Registered Address</p>
                  <p className="blurry-text">Other Address</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Registered Address</p>
                  <p className="blurry-text">Other Address</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Registered Address</p>
                  <p className="blurry-text">Other Address</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Registered Address</p>
                  <p className="blurry-text">Other Address</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Registered Address</p>
                  <p className="blurry-text">Other Address</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Email Id</p>
                  <p className="blurry-text">Email Id</p>
                  <div className="card container w-75 text-center py-4 position-absolute top-50 start-50 translate-middle-x">
                    <h6 className="text-primary fw-bold">
                      Director & KMP Details
                    </h6>
                    <p>
                      This information is available in our reports and to
                      subscription users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}