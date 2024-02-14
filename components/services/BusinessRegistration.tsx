import { FC } from 'react';
import CompanyRegistrations from '../child_components/CompanyRegistrations';
import Faq from '../child_components/Faq';
import FlipCard from '../child_components/FlipCard';
import GstModal from '../child_components/GstModal';
import { Heroes } from '../child_components/Heroes';
import OtherServices from '../child_components/OtherServices';
import Members from '../child_components/Members';
import TrustedPartner from '../child_components/TrustedPartner';
import Whatsapp from '../child_components/Whatsapp';
import WhyChooseUs from '../child_components/WhyChooseUs';
import Testimonial from '../landing/Testimonial';

interface BusinessRegistrationProps {
  registrationName: any;
  benefits: any;
  documents: any;
  faq: any;
  hero: any;
  Query: any;
  member: any;
}
const BusinessRegistration: FC<BusinessRegistrationProps> = ({ registrationName, hero, member, benefits, documents, faq, Query }) => {

  return (
    <>
      <GstModal Query={Query} />
      <Heroes isBg={"no"} data={hero} Query={Query} registrationName={registrationName}/>
      <CompanyRegistrations data={hero} />
      <FlipCard isBg="" cardData={benefits} idName="benefits" title="Benefits " subtitle={hero?.subtitle} isAlternate />
      <Members registrationName={registrationName} member={member} />
      <FlipCard isBg="" cardData={documents} idName="Documents" title="Documents" subtitle={hero?.subtitle2} isAlternate={false} />
      <Testimonial isBg="" />
      <WhyChooseUs />
      <TrustedPartner />
      <Faq isBg="" faqData={faq} Query={Query} />
      <OtherServices />
      <Whatsapp Query={Query} />
    </>
  );
};

export default BusinessRegistration;