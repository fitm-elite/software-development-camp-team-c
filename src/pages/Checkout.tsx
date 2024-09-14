export default function Checkout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 space-x-4">
      <div className="max-w-screen-sm">
        <h1 className="flex justify-center mb-2 text-4xl">ร้านป้าแมว</h1>
        <img src="https://promptpay.io/0628295556/100.png"></img>

        <p className="flex justify-center mb-2 mt-2 text-xl">ราคา 100 บาท</p>
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
        >
          Back
        </button>
      </div>
    </div>
  );
}
