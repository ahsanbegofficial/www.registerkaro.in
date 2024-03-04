import Image from "next/image";
import dft from "../../../assets/images/static/consumer-complaints/steps-filling.svg";
interface HeroProps { cityName: string; }
export const StepsForFilling = ({ cityName }: HeroProps) => {
  return (
    <div id="StepsForFilling">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-3 pt-5">
          <Image
            alt="Steps for filing a Consumer Complaint, Start with 
            Vendor’s reciprocity,"
            className="Challenges-img w-100"
            height={650}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
        <p>
          <strong>Step 1. Start with a notice describing your consumer complaint: </strong>
          In the beginning, you will have to express your consumer complaint or
          dissatisfaction over any product or service to the
          manufacturer/producer/seller. It is important that the concern
          expressed must be in writing. It is always recommended to consult with
          your lawyer when the claim is above Rs. 10,000 and take their
          assistance in dispatching the notice as a notice under a lawyer’s
          professional head depicts the degree of seriousness in taking a course
          of legal action.
        </p>

        <p>
          <strong> Step 2. Vendor’s reciprocity: </strong>
          Once a legal notice has been dispatched to the vendor, it is expected
          that the vendor will respond to the notice to avoid any legal action
          or even in the course of legal action. It is suggested that you wait
          for the vendor’s reciprocity, as some may give you a just reward. The
          courts will not award incredibly large damages petitions. In case you
          do not hear from the vendor, you can get in touch with the consumer
          forum within 15 days of a notice being dispatched.
        </p>

        <p>
          <strong> Step 3. Select the correct forum: </strong>
          In the event of both a response or no response from the vendor, now is
          the time to select the suitable consumer forum for your complaint.
          Depending upon the nature of the consumer complaint, you will have to
          select one among the district forum, state commission, or national
          commission. You may either by yourself or by your representative may
          approach the forum with your grievances, the resolution of which takes
          6 to 18 months.
        </p>

        <p>
          <strong> Step 4. Submission of complaint: </strong>
          Once you have chosen the forum as per your complaint, it is time to
          prepare your grievance in a well-written format, which differs from
          forum to forum. In case of any problem faced in drafting the consumer
          complaint, you may also seek professional assistance, such as that of
          a lawyer, to constitute the ideal complaint, including all the
          necessary details along with the attachment of the legal notice you
          sent to the vendor. This attachment justifies your true intent of
          resolving the dispute in an amicable method without resorting to
          trials.
        </p>

        <p>
          <strong> Step 5. Court fee payment: </strong>
          Once the documentation is done, you may pay the court fee, which is
          requested by the filing department, in order to file the consumer
          complaint. This fee depends upon the claim amount filed. In the event
          of the success of the lawsuit, the court puts the mandatory obligation
          on the vendor to compensate you for all the expenditure caused in the
          process, including attorney fees, filing fees, etc.
        </p>

      </div>
      </div>
    </div>
  );
};
