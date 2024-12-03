import ShopItem from './ShopItem.jsx';

function ListView({items}) {
  return (
    <div className="px-5">
      {items.map((item, index) => (
        <ShopItem key={`list-product-${index}`} data={item}/>
      ))}
    </div>
  );
}

export default ListView;
