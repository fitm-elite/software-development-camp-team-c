import ItemPrice from "@/components/ItemPrice";
import { useState } from "react";

export default function Setting() {
  const [price, setPrice] = useState("");
  const [isPriceValid, setIsPriceValid] = useState<boolean>(false);
  const [priceList, setPriceList] = useState([1, 1, 1]);

  const handlePriceChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(input.target.value.replace(/\D+/g, ""));
  };

  const handleAddPriceToListPrice = () => {
    if (price == "") {
      setIsPriceValid(true);
    } else {
      setIsPriceValid(false);

      ///TODO: add price item to list prices
    }
  };

  const handleRemovePriceItem = (id: number) => {
    console.log(id);
  };

  const handleSubmit = () => {};

  return (
    <div className="mx-5 my-2">
      <div className="flex justify-center items-center bg-blue-500 shadow-md py-3 rounded-md">
        <h5 className="font-mono text-xl font-bold text-white">
          เพิ่มราคาเข้าระบบ
        </h5>
      </div>
      <div
        className={`flex flex-col my-4 overflow-y-scroll ${priceList.length > 5 ? " h-[25rem]" : ""}`}
      >
        {priceList.map((it, key) => {
          return (
            <ItemPrice
              key={key}
              price={11}
              id={1}
              handleRemovePriceItem={handleRemovePriceItem}
            />
          );
        })}
      </div>
      <div className="flex items-center  space-x-4">
        <div className="ml-3 w-full">
          <input
            type="text"
            placeholder="ราคา"
            value={price}
            onInput={handlePriceChange}
            className="bg-white shadow-md text-xl w-full p-1 border-2 rounded-md border-gray-100 "
          />
          {isPriceValid && (
            <p className="text-red-500 mt-2 absolute">โปรดกรอกราคา!</p>
          )}
        </div>
        <div>
          <button
            onClick={() => handleAddPriceToListPrice()}
            className="text-white font-bold bg-blue-500  rounded-full py-2 text-xl px-4 hover:bg-blue-600"
          >
            +
          </button>
        </div>
      </div>
      <div className="my-7 ">
        <hr />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleSubmit()}
          className="w-full mx-5 px-3 py-5 text-white font-mono font-bold text-xl bg-green-500 rounded-md hover:bg-green-600"
        >
          บันทึก
        </button>
      </div>
    </div>
  );
}
