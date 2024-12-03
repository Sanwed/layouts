function ShopItem({data}) {
  return (
    <div className="flex max-h-40 p-2 items-center justify-between bg-slate-100 mb-1">
      <img src={data.img} alt={data.name} className="object-contain w-24" />
      <h2 className="uppercase font-normal text-2xl">{data.name}</h2>
      <p className="text-base">{data.color}</p>
      <b className="text-red-600 text-xl">${data.price}</b>
      <button className="border border-red-600 text-red-600 font-bold px-4 py-2 rounded-3xl uppercase text-sm">
        Add to cart
      </button>
    </div>
  );
}

export default ShopItem;
