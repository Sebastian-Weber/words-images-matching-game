



type CardProps = {

  card: { id: number; src: string; alt: string; matched: boolean; isFirstSet?: boolean; };

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
            <span>{card.alt}</span>
          ) : (
            <img 
              src={card.src} 
              alt="card front"
            />
          )}
        </div>
        <img 
          className="back" 
          src="/src/assets/images/card_back.jpg"
          onClick={handleClick}  
          alt="card back" 
        />
      </div>
    </div>
  );
}