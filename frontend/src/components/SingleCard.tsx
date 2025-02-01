


import cardBack from '../assets/images/card_back.png';

type CardProps = {

  card: { id: number; src: string; alt: string; matched: boolean; isFirstSet?: boolean; language?: string; description?: string; };

  handleChoice: (card: { id: number; src: string; alt: string; }) => void;

  flipped: boolean;

  disabled: boolean;

};




export default function SingleCard({ card, handleChoice, flipped, disabled }: CardProps) {
  
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <div className="front">
          {card.isFirstSet ? (
            <div className="card-texts-layout justify-around items-center">
            <h3 className="card-heading">{card.alt}</h3>
            <h4 className="card-subheading">{card.language}</h4>
            <p className="card-description">{card.description}</p>
            </div>
          ) : (
            <img 
              src={card.src} 
              alt="card front"
            />
          )}
        </div>
        <img 
          className="back" 
          src={cardBack}
          onClick={handleClick}  
          alt="card back" 
        />
      </div>
    </div>
  );
}