import Link from 'next/link'
import React from 'react'

let service = [
  {
    title: "Private Limited Company Registration",
    link: "/private-limited-company-registration"
  },
  {
    title: "Public Limited Company Registration",
    link: "/public-limited-company-registration"
  },
  {
    title: "Limited Liability Partnership",
    link: "/llp-registration"
  },
  {
    title: "One Person Company",
    link: "/one-person-company"
  },
  {
    title: "Partnership Firm Registration",
    link: "/partnership-firm-registration"
  },
  {
    title: "Sole Proprietorship Registration",
    link: "/sole-proprietorship-registration"
  },
  {
    title: "Indian Subsidiary Registration",
    link: "/indian-subsidiary-registration"
  },
  {
    title: "Nidhi Company Registration",
    link: "/nidhi-company-registration"
  },
  {
    title: "Producer Company Registration",
    link: "/producer-company-registration"
  },
  {
    title: "Startup India Registration",
    link: "/startup-india-registration"
  },
  {
    title: "Section 8 Company Registration",
    link: "/section-8-company-registration"
  },
  {
    title: "Trust Registration",
    link: "/trust-registration"
  },
  {
    title: "NGO Registration",
    link: "/ngo-registration"
  },
  {
    title: "LLP Compliance",
    link: "/llp-compliance"
  },
  {
    title: "Private Limited Company Compliance",
    link: "/private-limited-company-compliance"
  },
  {
    title: "Nidhi Company Compliance",
    link: "/nidhi-company-compliance"
  },
  {
    title: "BIS Certification",
    link: "/bis-certification"
  },
  {
    title: "BIS FMCS Certification",
    link: "/bis-fmcs-certification"
  },
  {
    title: "BIS CRS Certification",
    link: "/bis-crs-certification"
  },
  {
    title: "ISI Mark Certification",
    link: "/isi-mark-certification"
  },
  {
    title: "CDSCO Registration",
    link: "/cdsco-registration"
  },
  {
    title: "Medical Device Registration",
    link: "/medical-device-registration"
  },
  {
    title: "Trademark Registration",
    link: "/trademark-registration"
  },
  {
    title: "IEC Registration",
    link: "/iec-registration"
  },
  {
    title: "ESI Registration",
    link: "/esi-registration"
  },
  {
    title: "EPF Registration",
    link: "/epf-registration"
  },
  {
    title: "Shop and Establishment Act Registration",
    link: "/shop-and-establishment-act-registration"
  },
  {
    title: "FSSAI Registration",
    link: "/fssai-registration"
  },
  {
    title: "FSSAI State License",
    link: "/state-fssai-license-registration"
  },
  {
    title: "FSSAI Central License",
    link: "/fssai-central-license"
  },
  {
    title: "FPO Mark Certification",
    link: "/fpo-mark-certification"
  },
  {
    title: "EPR Registration",
    link: "/epr-registration"
  },
  {
    title: "PRO Authorization",
    link: "/pro-authorization"
  },
  {
    title: "Plastic Waste Authorization",
    link: "/plastic-waste-authorization"
  },
  {
    title: "Environmental Clearance",
    link: "/environmental-clearance"
  },
  {
    title: "EPR Authorization for E-Waste",
    link: "/epr-authorization-for-e-waste"
  }
]
let search = [
  {
    title: "Limited Liability Partnership",
    link: "/llp-registration"
  },
  {
    title: "One Person Company",
    link: "/one-person-company"
  },
  {
    title: "Partnership Firm Registration",
    link: "/partnership-firm-registration"
  },
  {
    title: "Sole Proprietorship Registration",
    link: "/sole-proprietorship-registration"
  },
  {
    title: "Indian Subsidiary Registration",
    link: "/indian-subsidiary-registration"
  },
  {
    title: "Nidhi Company Registration",
    link: "/nidhi-company-registration"
  },
  {
    title: "Private Limited Company Registration",
    link: "/private-limited-company-registration"
  },
  {
    title: "Public Limited Company Registration",
    link: "/public-limited-company-registration"
  },
  {
    title: "Producer Company Registration",
    link: "/producer-company-registration"
  },
  {
    title: "Startup India Registration",
    link: "/startup-india-registration"
  },
  {
    title: "Section 8 Company Registration",
    link: "/section-8-company-registration"
  },
  {
    title: "Trust Registration",
    link: "/trust-registration"
  },
  {
    title: "NGO Registration",
    link: "/ngo-registration"
  },
  {
    title: "LLP Compliance",
    link: "/llp-compliance"
  },
  {
    title: "Private Limited Company Compliance",
    link: "/private-limited-company-compliance"
  },
  {
    title: "Nidhi Company Compliance",
    link: "/nidhi-company-compliance"
  },
  {
    title: "BIS Certification",
    link: "/bis-certification"
  },
  {
    title: "BIS FMCS Certification",
    link: "/bis-fmcs-certification"
  },
  {
    title: "BIS CRS Certification",
    link: "/bis-crs-certification"
  },
  {
    title: "ISI Mark Certification",
    link: "/isi-mark-certification"
  },
  {
    title: "CDSCO Registration",
    link: "/cdsco-registration"
  },
  {
    title: "Medical Device Registration",
    link: "/medical-device-registration"
  },
  {
    title: "Trademark Registration",
    link: "/trademark-registration"
  },
  {
    title: "IEC Registration",
    link: "/iec-registration"
  },
  {
    title: "ESI Registration",
    link: "/esi-registration"
  },
  {
    title: "EPR Registration",
    link: "/epr-registration"
  },
  {
    title: "PRO Authorization",
    link: "/pro-authorization"
  },
  {
    title: "Plastic Waste Authorization",
    link: "/plastic-waste-authorization"
  },
  {
    title: "Environmental Clearance",
    link: "/environmental-clearance"
  },
  {
    title: "EPR Authorization for E-Waste",
    link: "/epr-authorization-for-e-waste"
  },
  {
    title: "EPF Registration",
    link: "/epf-registration"
  },
  {
    title: "Shop and Establishment Act Registration",
    link: "/shop-and-establishment-act-registration"
  },
  {
    title: "FSSAI Registration",
    link: "/fssai-registration"
  },
  {
    title: "FSSAI State License",
    link: "/state-fssai-license-registration"
  },
  {
    title: "FSSAI Central License",
    link: "/fssai-central-license"
  },
  {
    title: "FPO Mark Certification",
    link: "/fpo-mark-certification"
  },
]
export const Popular = () => {
  return (
    <div className='popular'>
      <h3>Popular Services</h3>
      <hr />
      <p>
        {
          service?.map((e: any, i: number) => <span key={i}><Link href={e.link}>{e.title}</Link> | </span>)
        }
      </p>
      <h3>Popular Searches</h3>
      <hr />
      <p className='second-p'>
        {
          search?.map((e: any, i: number) => <span key={i}><Link href={e.link}>{e.title}</Link> | </span>)
        }
      </p>
    </div>
  )
}
