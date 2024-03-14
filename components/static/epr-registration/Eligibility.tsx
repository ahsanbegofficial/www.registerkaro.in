interface HeroProps {cityName: string;}
export const Eligibility = ({ cityName }: HeroProps)  => {
  return (
    <div id='Eligibility'>
     <p className='main-para mb-2'>The eligibility, pre-licensing and mandatory pre-requisites for obtaining EPR registration are as follows:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
     
      <div className='flex-7 pt-5'>
      <p><strong>1: </strong>The applicant should be a producer, importer or brand owner (PIBO) of electrical and electronic equipment (EEE) or plastic packaging, as defined under the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016.</p>
      <p><strong>2: </strong>The applicant should have a valid PAN card and GSTIN.</p>
      <p><strong>3: </strong>The applicant should have a valid consent to establish or consent to operate or authorization or registration or license or any other document that indicates the approval of the concerned regulatory authority for the manufacture or import or sale or distribution of EEE or plastic packaging.</p>
      <p><strong>4: </strong>The applicant should have a valid agreement or MoU with the registered collection centres, dealers, e-retailers, refurbishers, dismantlers, recyclers, producer responsibility organizations (PROs) or any other entity for the collection and management of e-waste or plastic waste generated from their products.</p>
      <p><strong>5: </strong>The applicant should have a valid agreement or MoU with the authorized transporters for the transportation of e-waste or plastic waste as per the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016.</p>
      <p><strong>6: </strong>The applicant should have a valid agreement or MoU with the authorized treatment, storage and disposal facilities for the disposal of hazardous wastes generated from e-waste or plastic waste as per the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016.</p>
      <p><strong>7: </strong>The applicant should have a valid agreement or MoU with the authorized testing laboratories for the testing of e-waste or plastic waste for RoHS parameters or plastic identification code or any other parameter as specified by the CPCB or the SPCBs.</p>
      <p><strong>8: </strong>The applicant should have a valid agreement or MoU with the State Pollution Control Boards or the Pollution Control Committees or the Union Territory Administration for the coordination and cooperation in the implementation of the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016.</p>
      </div>
     
     </div>
      </div>
  )
}
