


type CardProps = {

  card: {

    id: number;

    src: string;

    alt: string;

  };

  handleChoice: (card: { id: number; src: string; alt: string; }) => void;

  flipped: boolean;

};



export default function SingleCard({ card, handleChoice, flipped }: CardProps) {
  
  const handleClick = () => {
    handleChoice(card)

  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img 
          className="front" 
          src={card.src} 
          alt="card front"/>
        <img 
          className="back" 
          src="/src/assets/images/card_back.jpg"
          onClick={handleClick}  
          alt="card back" />
      </div>
    </div>
  )
}  
