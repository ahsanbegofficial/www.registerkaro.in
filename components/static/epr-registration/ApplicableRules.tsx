interface HeroProps {cityName: string;}
export const ApplicableRules = ({ cityName }: HeroProps)  => {
  return (
    <div id='ApplicableRules'>
     <p className='main-para mb-2'>The legal framework for EPR registration is as follows:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
     
      <div className='flex-7 pt-5'>
      <p><strong>1: </strong>The Environment (Protection) Act, 1986, which is the umbrella legislation that empowers the central government to take measures to protect and improve the quality of the environment and prevent, control and abate environmental pollution. The act also provides for the establishment of the National Environmental Appellate Authority, which hears appeals against the orders of the central government or any authority under the act. The act also lays down the penalties for contravention of the provisions of the act or the rules made thereunder.</p>
      <p><strong>2: </strong>The E-Waste (Management) Rules, 2016, which are the specific rules that regulate the generation, collection, storage, transportation, segregation, refurbishment, dismantling, recycling and disposal of e-waste in {cityName}. The rules also define the roles and responsibilities of various stakeholders, such as producers, consumers, bulk consumers, collection centres, dealers, e-retailers, refurbishers, dismantlers, recyclers and producer responsibility organizations (PROs). The rules also specify the EPR targets, the procedure for obtaining EPR authorization, the standards for environmentally sound management of e-waste, the criteria for registration of PROs, the format and frequency of reporting, and the procedure for monitoring and enforcement.</p>
      <p><strong>3: </strong>The Plastic Waste Management Rules, 2016, which are the specific rules that regulate the generation, collection, storage, transportation, segregation, processing and disposal of plastic waste in {cityName}. The rules also define the roles and responsibilities of various stakeholders, such as producers, importers, brand owners, consumers, waste pickers, recyclers, local bodies and gram panchayats. The rules also specify the EPR targets, the procedure for obtaining EPR registration, the standards for plastic waste management, the criteria for registration of plastic waste processors, the format and frequency of reporting, and the procedure for monitoring and enforcement.</p>
      <p><strong>4: </strong>The Guidelines for Implementation of E-Waste (Management) Rules, 2016, which are the guidelines issued by the CPCB to provide clarity and guidance on the implementation of the E-Waste (Management) Rules, 2016. The guidelines cover various aspects, such as EPR plan, collection mechanism, channelization, documentation, record keeping, reporting, verification, random sampling, testing, labelling, awareness generation, capacity building, and grievance redressal.</p>
      <p><strong>5: </strong>The Guidelines on Extended Producer Responsibility for Plastic Packaging, which are the guidelines issued by the CPCB to provide clarity and guidance on the implementation of the Plastic Waste Management Rules, 2016. The guidelines cover various aspects, such as EPR plan, collection mechanism, channelization, documentation, record keeping, reporting, verification, plastic credits, eco-fee, and grievance redressal.</p>
      </div>
     </div>
      </div>
  )
}
