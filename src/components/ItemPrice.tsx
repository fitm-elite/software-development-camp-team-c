interface ItemPriceProps {
  price: number;
  id: number;
  removePriceList: (id: number) => void;
}

export default function ItemPrice({
  price,
  id,
  removePriceList,
}: ItemPriceProps) {
  return (
    <div className="m-2">
      <div className="flex  justify-between  bg-gray-50 shadow-md px-3 py-2 rounded-md items-center">
        <div>
          <h5 className="font-mono text-2xl font-bold ">{price} ฿</h5>
        </div>
        <div>
          <button
            onClick={() => removePriceList(id)}
            className="text-white font-bold bg-red-500  rounded-md px-4 py-3 hover:bg-red-600"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
