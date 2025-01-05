

interface SingleCardProps {
  card: {
    src: string;
  };
}

function SingleCard({ card }: SingleCardProps) {
  return (
    <>
    <div className="relative" >
        <div className=''>
            <img className="front" src={card.src} alt="card front" />
            <img className="back"  src="/src/assets/images/card_back.jpg" alt="card back" />
        </div>
    </div>
    </>
  )
}

export default SingleCard