export default function ItemPrice() {
  return (
    <div className="m-2">
      <div className="flex  justify-between  bg-gray-50 shadow-md px-3 py-4 rounded-md items-center">
        <div>
          <h5 className="font-mono text-xl font-bold ">200 ฿</h5>
        </div>
        <div>
          <button className="text-white font-bold bg-red-500  rounded-md p-2">
            X
          </button>
        </div>
      </div>
    </div>
  );
}
