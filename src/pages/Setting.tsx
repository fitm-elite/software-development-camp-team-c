import ItemPrice from "@/components/ItemPrice";
import { useState } from "react";

export default function Setting() {
  const [price, setPrice] = useState<number>(0);

  return (
    <div className="mx-5 my-2">
      <div className="flex justify-center items-center bg-blue-500 shadow-md py-3 rounded-md">
        <h5 className="font-mono text-xl font-bold text-white">
          เพิ่มราคาเข้าระบบ
        </h5>
      </div>
      <div className="flex flex-col my-4 overflow-y-scroll h-[25rem]">
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
        <ItemPrice />
      </div>
      <div className="flex  space-x-4">
        <div className="mx-2">
          <input
            value={price}
            onChange={(prv: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(parseInt(prv.target.value))
            }
            type="number"
            className="bg-gray-100 shadow-md text-xl w-[15rem] p-1 border-1 rounded-md"
          />
        </div>
        <div>
          <button>+</button>
        </div>
      </div>
      <div className="flex justify-center">
        <button>บันทึก</button>
      </div>
    </div>
  );
}
