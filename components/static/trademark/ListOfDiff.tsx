import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/trademark-reg/listOfDiff.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const ListOfDiff = ({ cityName }: HeroProps) => {
  return (
    <div className='DifferentTypes w-80 m-auto' id='ListOfDiff'>
      <div className='flex justify-content-center'>
        {/* <Image alt="list of documents for private limited company registration in {cityName} that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="ListOfDiff-img w-100" loading="lazy" src={dft} height={230} /> */}
      </div>
      <div className='mt-0'>
        <p>In {cityName}, trademarks are categorized into 45 classes based on the Nice Classification system. Each class represents a distinct category of goods and services. Following is the list of different Trademark Classes in {cityName}.</p>
        <h3>Goods Classes (1-34): </h3>
        <p>
          <strong>Class 1. </strong>
          Chemicals used in industry, science, and photography, as well as in agriculture, horticulture, and forestry.
        </p>
        <p>
          <strong>Class 2. </strong>
          Paints, varnishes, lacquers, and preservatives for wood and metal.
        </p>
        <p>
          <strong>Class 3. </strong>
          Cosmetics and cleaning preparations, including soaps and perfumes.
        </p>
        <p>
          <strong>Class 4. </strong>
          Industrial oils and greases; lubricants; fuels; candles and wicks.
        </p>
        <p>
          <strong>Class 5. </strong>
          Pharmaceuticals and other preparations for medical or veterinary purposes.
        </p>
        <p>
          <strong>Class 6. </strong>
          Common metals and their alloys; metal building materials; transportable buildings of metal; materials of metal for railway tracks.
        </p>
        <p>
          <strong>Class 7. </strong>
          Machines and machine tools; motors and engines (except for land vehicles); machine coupling and transmission components (except for land vehicles).
        </p>
        <p>
          <strong>Class 8. </strong>
          Hand tools and implements (hand-operated); cutlery; side arms; razors.
        </p>
        <p>
          <strong>Class 9. </strong>
          Scientific, nautical, surveying, electric, photographic, cinematographic, optical, weighing, measuring, signaling, checking (supervision), life-saving, and teaching apparatus and instruments.
        </p>
        <p>
          <strong>Class 10. </strong>
          Surgical, medical, dental, and veterinary apparatus and instruments; artificial limbs, eyes, and teeth; orthopedic articles.
        </p>
        <p>
          <strong>Class 11. </strong>
          Apparatus for lighting, heating, steam generating, cooking, refrigerating, drying, ventilating, water supply, and sanitary purposes.
        </p>
        <p>
          <strong>Class 12. </strong>
          Vehicles; apparatus for locomotion by land, air, or water.
        </p>
        <p>
          <strong>Class 13. </strong>
          Firearms; ammunition and projectiles; explosives; fireworks.
        </p>
        <p>
          <strong>Class 14. </strong>
          Precious metals and their alloys; jewelry, precious and semi-precious stones; horological and chronometric instruments.
        </p>
        <p>
          <strong>Class 15. </strong>
          Musical instruments.
        </p>
        <p>
          <strong>Class 16. </strong>
          Paper, cardboard, and goods made from these materials; printed matter; bookbinding material; photographs; stationery; adhesives for stationery or household purposes; artists’ materials; paintbrushes; typewriters and office requisites.
        </p>
        <p>
          <strong>Class 17. </strong>
          Rubber, gutta-percha, gum, asbestos, mica, and goods made from these materials; plastics in extruded form for use in manufacture; packing, stopping, and insulating materials; flexible pipes, tubes, and hoses, not of metal.
        </p>
        <p>
          <strong>Class 18. </strong>
          Leather and imitations of leather; animal skins, hides; trunks and traveling bags; umbrellas, parasols, and walking sticks; whips, harness, and saddlery.
        </p>
        <p>
          <strong>Class 19. </strong>
          Building materials (non-metallic); non-metallic rigid pipes for building; asphalt, pitch, and bitumen; non-metallic transportable buildings; monuments, not of metal.
        </p>
        <p>
          <strong>Class 20. </strong>
          Furniture, mirrors, picture frames; goods (not included in other classes) of wood, cork, reed, cane, wicker, horn, bone, ivory, whalebone, shell, amber, mother-of-pearl, meerschaum, and substitutes for all these materials, or of plastics.
        </p>
        <p>
          <strong>Class 21. </strong>
          Household or kitchen utensils and containers; combs and sponges; brushes (except paintbrushes); brush-making materials; articles for cleaning purposes; unworked or semi-worked glass (except glass used in building); glassware, porcelain, and earthenware not included in other classes.
        </p>
        <p>
          <strong>Class 22. </strong>
          Ropes, string, nets, tents, awnings, tarpaulins, sails, sacks, and bags (not included in other classes); padding and stuffing materials (except of rubber or plastics); raw fibrous textile materials.
        </p>
        <p>
          <strong>Class 23. </strong>
          Yarns and threads for textile use.
        </p>
        <p>
          <strong>Class 24. </strong>
          Textiles and textile goods, not included in other classes; bed and table covers.
        </p>
        <p>
          <strong>Class 25. </strong>
          Clothing, footwear, headgear.
        </p>
        <h3>Services Classes (35-45):</h3>
        <p>
          <strong>Class 35. </strong>
          Advertising and business management; business administration; office functions.
        </p>
        <p>
          <strong>Class 36. </strong>
          Insurance; financial affairs; monetary affairs; real estate affairs.
        </p>
        <p>
          <strong>Class 37. </strong>
          Building construction; repair; installation services.
        </p>
        <p>
          <strong>Class 38. </strong>
          Telecommunications.
        </p>
        <p>
          <strong>Class 39. </strong>
          Transport; packaging and storage of goods; travel arrangement.
        </p>
        <p>
          <strong>Class 40. </strong>
          Treatment of materials.
        </p>
        <p>
          <strong>Class 41. </strong>
          Education; providing of training; entertainment; sporting and cultural activities.
        </p>
        <p>
          <strong>Class 42. </strong>
          Scientific and technological services; industrial analysis and research services; design and development of computer hardware and software.
        </p>
        <p>
          <strong>Class 43. </strong>
          Services for providing food and drink; temporary accommodation.
        </p>
        <p>
          <strong>Class 44. </strong>
          Medical services; veterinary services; hygienic and beauty care for human beings or animals; agriculture, horticulture, and forestry services.
        </p>
        <p>
          <strong>Class 45. </strong>
          Legal services; security services for the protection of property and individuals; personal and social services rendered by others to meet the needs of individuals.
        </p>
      </div>
    </div >
  )
}
