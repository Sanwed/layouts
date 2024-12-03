function ShopCard({data}) {
  return (
    <div className="bg-slate-100 p-5 rounded-xl shadow-xl max-w-80">
      <h2 className="uppercase font-normal text-2xl text-center">{data.name}</h2>
      <p className="text-sm text-center">{data.color}</p>
      <img src={data.img} alt={data.name} />
      <div className='flex justify-between gap-5'>
        <b className="text-red-600 text-xl">${data.price}</b>
        <button className="border border-red-600 text-red-600 font-bold px-4 py-2 rounded-3xl uppercase text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ShopCard;
