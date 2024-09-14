import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PricingListItem from "@/components/PricingListItem";
import { cs } from "@/utils";

interface PricingListState {
  pricing: number;
  count: number;
  price: number;
}

export default function Home() {
  const [pricingList, setPricingList] = useState<PricingListState[]>([
    { pricing: 40, count: 0, price: 0 },
    { pricing: 50, count: 0, price: 0 },
    { pricing: 10, count: 0, price: 0 },
    { pricing: 2, count: 0, price: 0 },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(
    () => setTotalPrice(pricingList.reduce((acc, item) => acc + item.price, 0)),
    [pricingList],
  );

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center bg-gray-100 gap-4 p-4">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-md font-bold">คำนวนราคาอาหารร้านป้าแมว</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Settings
        </button>
      </div>

      <div className="flex flex-col gap-2 w-full h-full">
        {pricingList.map((pricingItem, index) => {
          const setCount = (count: number) => {
            setPricingList((prev) => {
              const newPricingList = [...prev];
              newPricingList[index].count = count;
              newPricingList[index].price =
                count * newPricingList[index].pricing;
              return newPricingList;
            });
          };

          return (
            <PricingListItem
              key={index}
              pricing={pricingItem.pricing}
              count={pricingItem.count}
              setCount={setCount}
            />
          );
        })}
      </div>

      <Link
        className={cs(
          "bg-blue-500 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center gap-2",
          totalPrice <= 0 ? "opacity-50 cursor-not-allowed" : "",
        )}
        to={totalPrice > 0 ? `/checkout?totalPrice=${totalPrice}` : "#"}
      >
        <span className="font-bold">{totalPrice} ฿</span>
        <span>Checkout</span>
      </Link>
    </div>
  );
}
