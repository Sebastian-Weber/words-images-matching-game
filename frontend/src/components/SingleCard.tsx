

type CardProps = {

  card: {

    id: number;

    src: string;

    alt: string;

  };

  handleChoice: (card: { id: number; src: string; alt: string; }) => void;

};


export default function SingleCard({ card, handleChoice }: CardProps) {
  
  const handleClick = () => {
    handleChoice(card)

  }

  return (
    <div className="card" key={card.id}>
      <div>
        <img className="front rounded-2xl " src={card.src} alt="card.alt" />
        <img 
          className="back rounded-2xl" 
          src="/src/assets/images/card_back.jpg"
          alt="card back" 
          onClick={handleClick} />
      </div>
    </div>
  )
}  
