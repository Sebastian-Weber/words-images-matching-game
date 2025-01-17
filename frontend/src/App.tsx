
import { useState } from 'react';

import '../src/assets/images/card_1.jpg'
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/src/assets/images/card_1.jpg", "alt": "Card 1" }, 
  { "src": "/src/assets/images/card_2.jpg", "alt": "Card 2" },
  { "src": "/src/assets/images/card_3.jpg", "alt": "Card 3" },
  { "src": "/src/assets/images/card_4.jpg", "alt": "Card 4" },
  { "src": "/src/assets/images/card_5.jpg", "alt": "Card 5" },
  { "src": "/src/assets/images/card_6.jpg", "alt": "Card 6" },
  { "src": "/src/assets/images/card_7.jpg", "alt": "Card 7" },
  { "src": "/src/assets/images/card_8.jpg", "alt": "Card 8" },
]

export default function App() {

  const [cards, setCards] = useState<{ id: number; src: string; alt: string; }[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<{ id: number; src: string; alt: string; } | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<{ id: number; src: string; alt: string; } | null>(null);

  //Shuffle Cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
      
      setCards(shuffleCards);
      setTurns(0);
  }

// handle a choice
const handleChoice = (card: { id: number; src: string; alt: string; }) => {

  choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  // console.log(card)
}

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline bg-blue-500">
           Memory Game
        </h1>
        <button onClick={shuffleCards}>New Game</button>

        <div className="px-6 py-12 grid grid-cols-2 md:grid-cols-4 md:px-12 lg:px-24 justify-center items-center gap-0 bg-red-600">
          {cards.map(card => (
            <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            />
          ))}
        </div>
      </div>
    </>
  )
}