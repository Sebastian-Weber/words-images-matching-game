
import { useState, useEffect } from 'react';

import '../src/assets/images/card_1.jpg'
import SingleCard from './components/SingleCard';

const cardImages = [
  // { "src": "/src/assets/images/card_1.jpg", matched: false, "alt": "Mountain bike Troopers" }, 
  // { "src": "/src/assets/images/card_2.jpg", matched: false, "alt": "Darth Vader" },
  // { "src": "/src/assets/images/card_3.jpg", matched: false, "alt": "Storm troopers lining up" },
  // { "src": "/src/assets/images/card_4.jpg", matched: false, "alt": "The Office" },
  // { "src": "/src/assets/images/card_5.jpg", matched: false, "alt": "4 storm troopers" },
  // { "src": "/src/assets/images/card_6.jpg", matched: false, "alt": "2 strom troopers" },
  // { "src": "/src/assets/images/card_7.jpg", matched: false, "alt": "Black and white" },
  // { "src": "/src/assets/images/card_8.jpg", matched: false, "alt": "Painting" },
  { "src": "/src/assets/images/boketto.png", matched: false, "alt": "boketto", language: "japanese", description: "The act of gazing vacantly into the distance, lost in thought." },
  { "src": "/src/assets/images/gluggaveður.png", matched: false, "alt": "gluggaveður", language: "icelandic", description: "Weather that looks appealing from inside but would be unpleasant to be outside in." },
  { "src": "/src/assets/images/hanyauku.png", matched: false, "alt": "hanyauku", language: "kwangali, namibia", description: "The act of walking on tiptoes across warm sand" },
  { "src": "/src/assets/images/komorebi.png", matched: false, "alt": "komorebi", language: "japanese", description: "The dappled light that filters through the leaves of trees." },
  { "src": "/src/assets/images/mamihlapinatapai.png", matched: false, "alt": "mamihlapinatapai", language: "yaghan, tierra del fuego", description: "The meaningfull look shared by two people who both desire something but are reluctant to initiate." },
  { "src": "/src/assets/images/petrichor.png", matched: false, "alt": "petrichor", language: "greek", description: "A pleasant earthy odor linked to rainfall after warmth and dryness." },
  { "src": "/src/assets/images/tsundoku.png", matched: false, "alt": "tsundoku", language: "japanese", description: "The act of acquiring books and letting them pile up without reading them." },
  { "src": "/src/assets/images/uitwaaien.png", matched: false, "alt": "uitwaaien", language: "dutch", description: "To go out into the wind to refresh your mind or clear your head." },
  { "src": "/src/assets/images/wabi-sabi.png", matched: false, "alt": "wabi-sabi", language: "japanese", description: "The beauty of imperfection, impermanence, and the incomplete." },
]

export default function App() {

  const [cards, setCards] = useState<{ id: number; src: string; alt: string; language: string, description:string, matched: boolean; }[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<{ id: number; src: string; alt: string; } | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<{ id: number; src: string; alt: string; } | null>(null);
  const [disabled, setDisabled] = useState(false);


  // shuffle Cards
  const shuffleCards = () => {
    const shuffleCards = [
      ...cardImages.map(card => ({ ...card, id: Math.random(), isFirstSet: true,  })),
      ...cardImages.map(card => ({ ...card, id: Math.random(), isFirstSet: false,  }))
    ].sort(() => Math.random() - 0.5);
      
    setCards(shuffleCards);
    setTurns(0);
  }

// handle a choice
const handleChoice = (card: { id: number; src: string; alt: string; }) => {

  if (choiceOne) {
    setChoiceTwo(card);
  } else {
    setChoiceOne(card);
  }
}
// compare 2 selected cards
useEffect(() => {
  if (choiceOne && choiceTwo) {
    setDisabled(true)

    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true }
          } else {
          return card
        }
      })
    })
      resetTurn()
    } else {
      setTimeout(() => resetTurn(), 1000)
    }
  }
}, [choiceOne, choiceTwo]);

console.log(cards)


// reset choices & increase turn
const resetTurn = () => {
  setChoiceOne(null);
  setChoiceTwo(null);
  setTurns(prevTurns => prevTurns + 1);
  setDisabled(false)
}

// start a new game automatically
useEffect(() => {
  shuffleCards()
}, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center  bg-blue-300'>
        <div className=''>

          <div className='flex flex-col items-start justify-start bg-yellow-300'>

          <div className='flex flex-row bg-purple-800'>
            <div className='flex flex-row justify-center w-screen p-7 bg-purple-400'>
              <div className='flex flex-col bg-blue-500'>
                <h1 className="page-title px-6 py-2">
                  Lost in Translation
                </h1>
                <h2 className="page-subtitle">Test2</h2>
                <br></br>
                <p className='page-description'>test3</p>
                <br></br>
              </div>

              <div className='flex flex-col bg-orange-400'>
                <button onClick={shuffleCards}>New Game</button>
                <p>Turns: {turns}</p>
              </div>
            </div>
           </div> 


{/* 
            <div className='custom-grid bg-green-400'> */}
              <div className="px-2 py-12 
              grid gap-0 
              grid-cols-3 

              md:grid-cols-5 
              md:px-16

              lg:grid-cols-5 
              lg:px-48
              
              2xl:grid-cols-6
              2xl:px-64
              justify-center items-center  bg-red-600">

                {cards.map(card => (
                  <SingleCard 
                  key={card.id} 
                  card={card} 
                  handleChoice={handleChoice}
                  flipped={card === choiceOne || card === choiceTwo || card.matched} 
                  disabled={disabled}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}