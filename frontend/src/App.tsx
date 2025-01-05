
import { useState } from 'react';

const cardImages = [
  { "src": "/images/card_1.jpg", "alt": "Card 1" }, 
  { "src": "/images/card_2.jpg", "alt": "Card 2" },
  { "src": "/images/card_3.jpg", "alt": "Card 3" },
  { "src": "/images/card_4.jpg", "alt": "Card 4" },
  { "src": "/images/card_5.jpg", "alt": "Card 5" },
  { "src": "/images/card_6.jpg", "alt": "Card 6" },
  { "src": "/images/card_7.jpg", "alt": "Card 7" },
  { "src": "/images/card_8.jpg", "alt": "Card 8" },
  { "src": "/images/card_back.jpg", "alt": "Card 9" },
]

export default function App() {

  const [cards, setCards] = useState<{ id: number; src: string; alt: string; }[]>([]);
  const [turns, setTurns] = useState(0);

  //Shuffle Cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
      
      setCards(shuffleCards);
      setTurns(0);
  }

  console.log(cards, turns);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline bg-blue-500">
        Hello world!
        </h1>
        {/* <div>
          {cardImages.map((card, index) => (
            <img key={index} src={card.src} alt={card.alt} />
          ))}
        </div> */}
        <button onClick={shuffleCards}>New Game</button>
      </div>
    </>
  )
}