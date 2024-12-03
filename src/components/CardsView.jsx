import ShopCard from './ShopCard.jsx';

function CardsView({cards}) {
  return (
    <div className='grid grid-cols-3 gap-8 justify-items-center'>
      {cards.map((cards, index) => (
        <ShopCard key={`card-product-${index}`} data={cards} />
      ))}
    </div>
  );
}

export default CardsView;
