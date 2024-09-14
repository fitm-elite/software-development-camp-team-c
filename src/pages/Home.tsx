import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PricingListItem from "@/components/PricingListItem";
import { cs } from "@/utils";
import Store from "@/store";
import { pricesTemplate } from "@/assets/pricesTemplate";

interface PricingListState {
  pricing: number;
  count: number;
  price: number;
}

export default function Home() {
  const context = useContext(Store);

  const [pricingList, setPricingList] = useState<PricingListState[]>([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = pricingList.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);

    context.setFinalPrice(totalPrice);
  }, [context, pricingList]);

  useEffect(() => {
    const data = localStorage.getItem("prices");

    if (!data) {
      pricesTemplate.forEach((pricing) => context.setPrices(pricing));
      pricesTemplate.forEach((pricing) => setPricingList((prev) => [...prev, { pricing, count: 0, price: 0 }]));
      localStorage.setItem("prices", JSON.stringify(pricesTemplate));
    } else {
      const pricingList = JSON.parse(data) as number[];
      pricingList.forEach((pricing) => context.setPrices(pricing));
      pricingList.forEach((pricing) => setPricingList((prev) => [...prev, { pricing, count: 0, price: 0 }]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center bg-gray-100 gap-4 p-4">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-md font-bold">คำนวนราคาอาหารร้านป้าแมว</h1>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded-lg" to="/setting">
          Settings
        </Link>
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
        to={totalPrice > 0 ? `/checkout?totalPrice=${context.finalPrice}` : "#"}
      >
        <span className="font-bold">{context.finalPrice} ฿</span>
        <span>Checkout</span>
      </Link>
    </div>
  );
}
