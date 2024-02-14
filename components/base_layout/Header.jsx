import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/images/Logo.png";
import icon from "../../assets/images/service-icon.svg";
import phone from "../../assets/images/phone.svg";
import { CaretDown } from 'phosphor-react';

const LOGO_URL = "/";

function OffcanvasExample() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive)
  }

  let Startup = true
  const renderDropdownItems = useMemo(() => {
    if (Startup) {
      // return Object.entries(Startup.regDropdown).map(([key, value]) => {
      // const item = value as HeaderService;
      return (
        <>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>Business Registration</h6>
            </div>
            <ul>
              <li><a href={'/private-limited-company-registration'}>Private Limited Company Registration</a></li>
              <li><a href={'/public-limited-company-registration'}>Public Limited Company Registration</a></li>
              <li><a href={'/llp-registration'}>LLP Registration</a></li>
              <li><a href={'/one-person-company'}>One Person Company Registration</a></li>
              <li><a href={'/partnership-firm-registration'}>Partnership Firm Registration</a></li>
              <li><a href={'/sole-proprietorship-registration'}>Sole Proprietorship Registration</a></li>
              <li><a href={'/indian-subsidiary-registration'}>Indian Subsidiary Registration</a></li>
              <li><a href={'/nidhi-company-registration'}>Nidhi Company Registration</a></li>
              <li><a href={'/producer-company-registration'}>Producer Company Registration</a></li>
              <li><a href={'/startup-india-registration'}>Startup India Registration</a></li>
            </ul>
          </div>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>NGO</h6>
            </div>
            <ul>
              <li><a href={'/section-8-company-registration'}>Section 8 Company Registration</a></li>
              <li><a href={'/trust-registration'}>Trust Registration</a></li>
              <li><a href={'/ngo-registration'}>NGO Registration</a></li>
            </ul>
          </div>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>COMPLIANCES</h6>
            </div>
            <ul>
              <li><a href={'/llp-compliance'}>Annual Compliance of LLP</a></li>
              <li><a href={'/private-limited-company-compliance'}>Annual Compliance For Private Limited</a></li>
              <li><a href={'/nidhi-company-compliance'}>Nidhi Company Annual Compliance</a></li>
            </ul>
          </div>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>Change In Business</h6>
            </div>
            <ul>
              <li><a href={'/change-in-director'}>Change In Directors</a></li>
              <li><a href={'/change-your-registered-office'}>Change in Registered Office</a></li>
              <li><a href={'/increase-authorized-capital'}>Increase in Authorized Share Capital</a></li>
              <li><a href={'/winding-up-of-a-company'}>Winding Up of a Company</a></li>
            </ul>
          </div>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>BIS & CDSCO</h6>
            </div>
            <ul>
              <li><a href={'/bis-certification'}>BIS Certification</a></li>
              <li><a href={'/bis-fmcs-certification'}>BIS FMCS Certification</a></li>
              <li><a href={'/bis-crs-certification'}>BIS CRS Certification</a></li>
              <li><a href={'/isi-mark-certification'}>ISI Mark Certification</a></li>
              <li><a href={'/cdsco-registration'}>CDSCO Registration</a></li>
              <li><a href={'/medical-device-registration'}>Medical Device Registration</a></li>
            </ul>
          </div>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>Government Registration</h6>
            </div>
            <ul>
              <li><a href={'/trademark-registration'}>Trademark Registration</a></li>
              <li><a href={'/iec-registration'}>IEC Registration</a></li>
              <li><a href={'/esi-registration'}>ESI Registration</a></li>
              <li><a href={'/epf-registration'}>EPF Registration</a></li>
              <li><a href={'/msme-registration'}>MSME Registration</a></li>
              <li><a href={'/shop-and-establishment-act-registration'}>Shop and Establishment Registration</a></li>
            </ul>
          </div>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>FSSAI</h6>
            </div>
            <ul>
              <li><a href={'/fssai-registration'}>FSSAI License</a></li>
              <li><a href={'/state-fssai-license-registration'}>FSSAI State License</a></li>
              <li><a href={'/fssai-central-license'}>FSSAI Central License</a></li>
              <li><a href={'/fpo-mark-certification'}>FPO Mark Certification</a></li>
            </ul>
          </div>
          <div className="nav-item">
            <div className="heading-parent">
              <Image src={icon} alt={'icon'}></Image>
              <h6>Environmental</h6>
            </div>
            <ul>
              <li><a href={'/epr-registration'}>EPR Registration</a></li>
              <li><a href={'/pro-authorization'}>PRO Authorization</a></li>
              <li><a href={'/plastic-waste-authorization'}>Plastic Waste Authorization</a></li>
              <li><a href={'/environmental-clearance'}>Environmental Clearance</a></li>
              <li><a href={'/epr-authorization-for-e-waste'} target="">EPR Authorization E-Waste</a></li>
            </ul>
          </div>
        </>
      );
      // });
    }
    return null;
  }, [Startup]);

  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            {/* <Navbar.Brand href="#"> */}
            <a href={LOGO_URL}>
              <div>
                <div className="d-flex justify-content-center align-items-center">
                  <Image className="img-fluid" height={48} width={48} src={logo.src} alt="logo" />
                  <h3 className="mb-0">
                    <span className="text-primary fw-bold"><span className="text-secondary">Register</span>Karo</span>
                  </h3>
                </div>
              </div>
            </a>
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <a className={"navbar-brand d-flex justify-content-center align-items-center mx-auto brandSmallDev"} href={LOGO_URL}>
                    <div className="m-0 d-md-block text-orange">
                      <div className="d-flex justify-content-center align-items-center">
                        <Image className="img-fluid" height={48} width={48} src={logo.src} alt="logo" />
                        <h3 className="mb-0">
                          <span className="text-primary fw-bold"><span className="text-secondary">Register</span>Karo</span>
                        </h3>
                      </div>
                    </div>
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav> */}
                <ul className="navbar-nav menu ms-lg-auto">
                  <li className="nav-item">
                    <Nav.Link className="benefits nav-link" href='/' >Home</Nav.Link>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a className="nav-link scroll dropdown-toggle" onClick={handleToggle} target="_blank" data-bs-toggle="dropdown" aria-expanded="false">
                      Startup
                      <span className="sub-menu-toggle">
                        <CaretDown size={15} className="ms-md-1 me-md-n2" />
                      </span>
                    </a>
                    <div className={isActive ? "dropdown-menu show" : "dropdown-menu sh"}>{renderDropdownItems}</div>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className="benefits nav-link" href='/blog'>Blog</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className="benefits nav-link" href='/contact-us'>Contact Us</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className="benefits nav-link" href='/about-us'>About Us</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <div className='phone'>
                      <a href="tel:+918447746183">
                        <Image src={phone} alt='phone' height={20} width={20} className='phone-img' />
                      </a>
                      <span>+918447746183</span>
                    </div>
                  </li>
                </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div className="mb"></div>
    </div>
  );
}

export default OffcanvasExample;