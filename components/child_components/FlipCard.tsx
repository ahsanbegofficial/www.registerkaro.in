import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";

interface CardData {
  name: string;
  image: string;
  color: string;
  content: string;
}

interface FlipCardProps {
  isBg: string;
  cardData: CardData[];
  idName: string;
  title: string;
  subtitle: string;
  isAlternate: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({
  isBg,
  cardData,
  idName,
  title,
  subtitle,
  isAlternate,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean[]>(cardData.map(() => false));

  const flipCard = useCallback((index: number) => {
    setIsFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !prevFlipped[index];
      return newFlipped;
    });
  }, []);

  const cardElements = useMemo(() => {
    return cardData.map((item, index) => (
      <div key={index} className={`flip-card mb-4 cursor-pointer translateEffect1 ${isFlipped[index] ? "flip-card-flipped" : ""}`} onClick={() => flipCard(index)}>
        <div className="flip-card-inner">
          <div className={`container fw-bold flip-card-front d-flex ${isAlternate && index % 2 === 0 ? "flex-column-reverse" : "flex-column"} ${!isAlternate && "flex-column-reverse"} justify-content-evenly align-items-center p-3 py-4`}>
            {item.name}
            <Image width={200} height={150} src={`/${item.image}`} alt="card-item" className="img-fluid p-2" />
          </div>
          <div className={`flip-card-back p-3 d-flex justify-content-center align-items-center ${index % 2 === 0 ? 'even' : 'odd'}`}>{item.content}</div>
        </div>
      </div>
    ));
  }, [cardData, isFlipped, flipCard, isAlternate]);

  return (
    <section id={idName} className={`flip-card-main portfolio2 section-padding ${isBg === "yes" ? "bg-one" : ""}`}>
      <div className="container d-flex justify-content-center align-items-center d-grid gap-1">
        <span className="fw-bold section-title text-center font-28">
          <span className="badge-text text-capitalize">{title}</span>
          {subtitle}
        </span>
      </div>
      <div className="container">
        <div className="my-5 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="row col-lg-10 col-md-9 col-sm-12 d-flex justify-content-center align-items-center column-gap-50 row-gap-20">
              {cardElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipCard;