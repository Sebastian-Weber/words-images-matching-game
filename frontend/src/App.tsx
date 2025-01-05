
import { useState } from 'react';

import '../src/assets/images/card_1.jpg'

const cardImages = [
  { "src": "/src/assets/images/card_1.jpg", "alt": "Card 1" }, 
  { "src": "/src/assets/images/card_2.jpg", "alt": "Card 2" },
  { "src": "/src/assets/images/card_3.jpg", "alt": "Card 3" },
  { "src": "/src/assets/images/card_4.jpg", "alt": "Card 4" },
  { "src": "/src/assets/images/card_5.jpg", "alt": "Card 5" },
  { "src": "/src/assets/images/card_6.jpg", "alt": "Card 6" },
  { "src": "/src/assets/images/card_7.jpg", "alt": "Card 7" },
  { "src": "/src/assets/images/card_8.jpg", "alt": "Card 8" },
  { "src": "/src/assets/images/card_back.jpg", "alt": "Card 9" },
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
           Memory Game
        </h1>
        <button onClick={shuffleCards}>
          New Game
        </button>
        <div className="grid grid-cols-6 justify-center items-center gap-0 bg-blue-600">
          {cards.map(card => (
            <div className="" key={card.id}>
              <div className=''>
                <img className="front" src={card.src} alt="card front" />
                <img className="back"  src="/src/assets/images/card_back.jpg" alt="card back" />
              </div>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}