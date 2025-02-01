

import '../src/assets/images/card_1.jpg'
import SingleCard from '../src/components/SingleCard';


import { useState, useEffect } from 'react';

import boketto from '../src/assets/images/boketto.png';
import gluggavedur from '../src/assets/images/gluggaveður.png';
import hanyauku from '../src/assets/images/hanyauku.png';
import komorebi from '../src/assets/images/komorebi.png';
import mamihlapinatapai from '../src/assets/images/mamihlapinatapai.png';
import petrichor from '../src/assets/images/petrichor.png';
import tsundoku from '../src/assets/images/tsundoku.png';
import uitwaaien from '../src/assets/images/uitwaaien.png';
import wabisabi from '../src/assets/images/wabi-sabi.png';

const descriptionText = "Each card reveals a unique cultural gem — either an image or a word. Discover ideas, emotions and concepts from different languages that defy direct translation and get to know intranslatable words of the world by finding the matching pairs.";

const cardImages = [
  { "src": boketto, matched: false, "alt": "boketto", language: "japanese", description: "The act of gazing vacantly into the distance, lost in thought." },
  { "src": gluggavedur, matched: false, "alt": "gluggaveður", language: "icelandic", description: "Weather that looks appealing from inside but would be unpleasant to be outside in." },
  { "src": hanyauku, matched: false, "alt": "hanyauku", language: "kwangali, namibia", description: "The act of walking on tiptoes across warm sand" },
  { "src": komorebi, matched: false, "alt": "komorebi", language: "japanese", description: "The dappled light that filters through the leaves of trees." },
  { "src": mamihlapinatapai, matched: false, "alt": "mamihlapinatapai", language: "yaghan", description: "The look shared by two people who both desire something but are reluctant to initiate." },
  { "src": petrichor, matched: false, "alt": "petrichor", language: "greek", description: "A pleasant earthy odor linked to rainfall after warmth and dryness." },
  { "src": tsundoku, matched: false, "alt": "tsundoku", language: "japanese", description: "The act of acquiring books and letting them pile up without reading them." },
  { "src": uitwaaien, matched: false, "alt": "uitwaaien", language: "dutch", description: "To go out into the wind to refresh your mind or clear your head." },
  { "src": wabisabi, matched: false, "alt": "wabi-sabi", language: "japanese", description: "The beauty of imperfection, impermanence, and the incomplete." },
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
    <div className="wrapper">
      <div className="container">
        <div className='flex flex-col items-start justify-start h-screen w-auto'>

          <div className='flex flex-col justify-center items-center w-full'>

              <div className='flex flex-col p-2'>
                <div className='lg:w-2/3'>
                  {/* <h1 className="page-title px-6 py-2">
                  </h1> */}
                  <h1 className="page-title">Lost in Translation</h1>
                  <p className='page-description'>{descriptionText}</p>
                  <br></br>
                  <div className='flex flex-row p-2 justify-around md:justify-between md:w-1/3 items-center'>
                    <button onClick={shuffleCards}>New Game</button>
                    <h4 className='page-counter'>Turns: {turns}</h4>
                  </div>
                </div>
              </div>

          </div>

          
          <div className='flex flex-col justify-center items-center'>
            <div className="custom-grid">
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
    </div>
    </>
  )
}