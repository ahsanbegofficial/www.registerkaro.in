import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/thailand-company-reg/Types_of_Companies.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Thailand Legislation prescribes following structures for company registration depending upon the nature of the business: </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7">
           <p><strong>1 Joint Venture:</strong> A group of individuals (natural or legal) coming to an agreement to conduct business together is known as a joint venture. Under the Revenue Code, which recognizes joint venture as a single business entity, income from this company structure is liable to corporation taxation even if it has not yet been recognized as a legal entity under the Civil and Commercial Code.In a joint venture, two or more people collaborate in order to split earnings, losses, and risks. </p>
           <p><strong>2 Ordinary Partnership:</strong> The Thai Civil and Commercial Code, section 1025, defines an ordinary partnership as one in which each partner bears unlimited joint and several liability for all partnership debts. A minimum of two people form an ordinary partnership where each partner is required to contribute to the partnership, and this contribution can take the form of cash, other assets, or services. The partners decide together how much cash, assets, or services to contribute. </p>
           <p><strong>3 Limited Partnership:</strong> There are two kinds of partners available in a limited partnership: one with limited liability and the other with unlimited liability. Limited partnerships are treated as regular partnerships up until they are registered, at which point they must register. The limited liability partners' contributions must be made in cash or other assets. The managing partner role can only be assumed by the partner whose liability is not limited and therefore, is not treated separate from the entity. A valid non-immigrant business visa and work permit are required for any foreign national who wishes to serve as a controlling partner. Foreign ownership is permitted in limited partnerships up to 49%. But if the foreign partner contributes more than 49% of the investment, a foreign business license is needed.</p>
           <p><strong>4 Private Limited Company:</strong> The most common type of business structure in Thailand is a private limited company, which is created through a registration procedure that calls for the submission of an Articles of Association (AOA) and Memorandum of Association (MOA). A private limited business is not permitted to sell its shares to the general public. Three shareholders are needed for a private limited business, and their liability is restricted. Every share needs to be subscribed for, and at least 25% of those shares need to be fully paid for. It is possible to issue both common and preferred stock, but each share needs to have the ability to vote.</p>
           <p><strong>5 Public Limited Company:</strong> A public limited company must be formed and registered with a minimum of 15 promoters. Before shares can be transferred, the promoters must hold them for a minimum of two years, unless the shareholders approve at a shareholder meeting. One cannot revert to a private limited corporation from the public. At least half of the board of directors' members must be Thai nationals, and the minimum number of members is five.</p>
           
        </div>
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in Thailand"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        
      </div>
    </div>
  );
};
